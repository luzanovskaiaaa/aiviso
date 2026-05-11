"""
Биллинг: создание платежей, webhook от провайдеров, история.

Endpoints:
   GET  /billing/packages         — список пакетов с ценами
   GET  /billing/status           — какие провайдеры настроены (для UI)
   POST /billing/checkout         — создаёт платёж в выбранном провайдере, возвращает confirmation URL
   GET  /billing/history          — мои платежи
   POST /billing/webhook/yookassa — webhook от ЮKassa (без auth, проверяем по payment_id)
"""
import logging
from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel
from sqlalchemy import select, desc
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.security import get_current_user
from app.database import get_db, AsyncSessionLocal
from app.models.user import User
from app.models.payment import Payment
from app.services import yookassa_client as yk

log = logging.getLogger(__name__)

router = APIRouter(prefix="/billing", tags=["billing"])


# ──────────────────────────────────────────────────────────────────────────────
# Пакеты — единый источник правды для бэка и фронта
# ──────────────────────────────────────────────────────────────────────────────

PACKAGES = [
    {"key": "60",  "credits": 60,  "amount_rub": 390.0,  "popular": False},
    {"key": "140", "credits": 140, "amount_rub": 790.0,  "popular": True},
    {"key": "300", "credits": 300, "amount_rub": 1590.0, "popular": False},
    {"key": "700", "credits": 700, "amount_rub": 2990.0, "popular": False},
]


def _find_package(key: str) -> Optional[dict]:
    return next((p for p in PACKAGES if p["key"] == key), None)


# ──────────────────────────────────────────────────────────────────────────────
# Public response DTOs
# ──────────────────────────────────────────────────────────────────────────────

class PackageDTO(BaseModel):
    key: str
    credits: int
    amount_rub: float
    popular: bool
    per_credit_rub: float


class StatusDTO(BaseModel):
    yookassa: bool
    tinkoff: bool


class CheckoutRequest(BaseModel):
    package: str                                 # "100" | "500" | "2000"
    provider: str = "yookassa"                   # пока только yookassa
    return_url: Optional[str] = None             # куда редиректить после оплаты


class CheckoutResponse(BaseModel):
    payment_id: int                              # наш Payment.id (внутренний)
    provider_payment_id: str                     # id у ЮКассы
    confirmation_url: str
    status: str


class PaymentRow(BaseModel):
    id: int
    package: str
    credits: int
    amount_rub: float
    provider: str
    status: str
    created_at: datetime
    confirmed_at: Optional[datetime] = None


# ──────────────────────────────────────────────────────────────────────────────
# GET /billing/packages, /billing/status
# ──────────────────────────────────────────────────────────────────────────────

@router.get("/packages", response_model=list[PackageDTO])
async def list_packages():
    return [
        PackageDTO(
            key=p["key"], credits=p["credits"], amount_rub=p["amount_rub"],
            popular=p["popular"],
            per_credit_rub=round(p["amount_rub"] / p["credits"], 2),
        )
        for p in PACKAGES
    ]


@router.get("/status", response_model=StatusDTO)
async def billing_status():
    return StatusDTO(
        yookassa=yk.is_configured(),
        tinkoff=bool(settings.TINKOFF_TERMINAL_KEY and settings.TINKOFF_PASSWORD),
    )


# ──────────────────────────────────────────────────────────────────────────────
# POST /billing/checkout — создать платёж
# ──────────────────────────────────────────────────────────────────────────────

@router.post("/checkout", response_model=CheckoutResponse)
async def checkout(
    data: CheckoutRequest,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    package = _find_package(data.package)
    if not package:
        raise HTTPException(400, f"Неизвестный пакет: {data.package}")

    if data.provider != "yookassa":
        raise HTTPException(400, "Доступен только провайдер yookassa")

    if not yk.is_configured():
        raise HTTPException(503, "Платежи через ЮKassa временно недоступны. Напишите в support@aiviso.ru.")

    return_url = data.return_url or f"{settings.FRONTEND_URL}/app/account/billing?payment=success"

    # 1. Создаём запись Payment в pending
    payment = Payment(
        user_id=user.id,
        package=package["key"],
        amount_rub=package["amount_rub"],
        credits=package["credits"],
        provider="yookassa",
        status="pending",
    )
    db.add(payment)
    await db.commit()
    await db.refresh(payment)

    # 2. Создаём платёж в ЮКассе
    try:
        yk_resp = await yk.create_payment(
            amount_rub=package["amount_rub"],
            description=f"Aiviso — пакет {package['credits']} кредитов",
            return_url=return_url,
            metadata={
                "user_id": user.id,
                "payment_id": payment.id,
                "package": package["key"],
                "credits": package["credits"],
            },
            customer_email=user.email,
            receipt_items=yk.make_receipt_items(package["key"], package["credits"], package["amount_rub"]),
        )
    except RuntimeError as e:
        payment.status = "failed"
        payment.raw_init = {"error": str(e)}
        await db.commit()
        raise HTTPException(502, f"Не удалось создать платёж: {e}")

    payment.provider_payment_id = yk_resp.get("id")
    payment.payment_url = (yk_resp.get("confirmation") or {}).get("confirmation_url")
    payment.raw_init = yk_resp
    await db.commit()
    await db.refresh(payment)

    if not payment.payment_url:
        raise HTTPException(502, "ЮКасса не вернула confirmation_url")

    return CheckoutResponse(
        payment_id=payment.id,
        provider_payment_id=payment.provider_payment_id or "",
        confirmation_url=payment.payment_url,
        status=payment.status,
    )


# ──────────────────────────────────────────────────────────────────────────────
# GET /billing/history
# ──────────────────────────────────────────────────────────────────────────────

@router.get("/history", response_model=list[PaymentRow])
async def billing_history(
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    res = await db.execute(
        select(Payment).where(Payment.user_id == user.id).order_by(desc(Payment.created_at)).limit(100)
    )
    return [
        PaymentRow(
            id=p.id, package=p.package, credits=p.credits,
            amount_rub=float(p.amount_rub), provider=p.provider,
            status=p.status, created_at=p.created_at, confirmed_at=p.confirmed_at,
        )
        for p in res.scalars().all()
    ]


# ──────────────────────────────────────────────────────────────────────────────
# POST /billing/webhook/yookassa
# ──────────────────────────────────────────────────────────────────────────────

@router.post("/webhook/yookassa")
async def yookassa_webhook(request: Request, db: AsyncSession = Depends(get_db)):
    """ЮKassa уведомляет нас о статусе платежа. Без auth — проверяем по payment_id."""
    body = await request.json()
    event = body.get("event") or ""
    obj = body.get("object") or {}
    yk_payment_id = obj.get("id")

    log.info("yookassa webhook: event=%s payment=%s status=%s", event, yk_payment_id, obj.get("status"))

    if not yk_payment_id:
        return {"ok": True}

    # Находим наш Payment по provider_payment_id
    res = await db.execute(select(Payment).where(Payment.provider_payment_id == yk_payment_id))
    payment = res.scalar_one_or_none()
    if not payment:
        log.warning("yookassa webhook: payment %s not found in DB", yk_payment_id)
        return {"ok": True}

    payment.raw_webhook = body

    if event == "payment.succeeded" and payment.status != "confirmed":
        # Зачисляем кредиты атомарно
        user_res = await db.execute(select(User).where(User.id == payment.user_id))
        user = user_res.scalar_one_or_none()
        if user:
            user.credits = (user.credits or 0) + payment.credits
        payment.status = "confirmed"
        payment.confirmed_at = datetime.now(timezone.utc)
        await db.commit()
        log.info("yookassa: confirmed payment %s, +%s credits to user %s",
                 payment.id, payment.credits, payment.user_id)

    elif event == "payment.canceled":
        payment.status = "cancelled"
        await db.commit()

    elif event == "refund.succeeded":
        # Возврат — снимаем кредиты обратно
        user_res = await db.execute(select(User).where(User.id == payment.user_id))
        user = user_res.scalar_one_or_none()
        if user and payment.status == "confirmed":
            user.credits = max(0, (user.credits or 0) - payment.credits)
        payment.status = "refunded"
        await db.commit()

    else:
        await db.commit()

    return {"ok": True}


# ──────────────────────────────────────────────────────────────────────────────
# GET /billing/payment/{id} — статус нашего платежа (для polling после оплаты)
# ──────────────────────────────────────────────────────────────────────────────

@router.get("/payment/{payment_id}", response_model=PaymentRow)
async def get_payment(
    payment_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    res = await db.execute(
        select(Payment).where(Payment.id == payment_id, Payment.user_id == user.id)
    )
    p = res.scalar_one_or_none()
    if not p:
        raise HTTPException(404, "Платёж не найден")
    return PaymentRow(
        id=p.id, package=p.package, credits=p.credits,
        amount_rub=float(p.amount_rub), provider=p.provider,
        status=p.status, created_at=p.created_at, confirmed_at=p.confirmed_at,
    )
