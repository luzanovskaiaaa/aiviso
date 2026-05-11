"""
Клиент для ЮKassa API v3.

Документация: https://yookassa.ru/developers/api

Поток:
1. POST /v3/payments → создаём платёж, получаем confirmation_url
2. Юзер уходит на confirmation_url, оплачивает
3. ЮKassa POST'ит на наш webhook (/billing/webhook/yookassa) событие payment.succeeded
4. Мы зачисляем кредиты + помечаем Payment.status="confirmed"

ENV:
   YOOKASSA_SHOP_ID — ID магазина (видно в кабинете)
   YOOKASSA_SECRET_KEY — секретный ключ (Settings → API keys)

Если ENV пустые — клиент кидает RuntimeError, роутер возвращает 503.
"""
import base64
import logging
import secrets
from typing import Optional

import httpx

from app.core.config import settings

log = logging.getLogger(__name__)

API = "https://api.yookassa.ru/v3"


def is_configured() -> bool:
    return bool(settings.YOOKASSA_SHOP_ID and settings.YOOKASSA_SECRET_KEY)


def _auth_header() -> str:
    raw = f"{settings.YOOKASSA_SHOP_ID}:{settings.YOOKASSA_SECRET_KEY}".encode("utf-8")
    return "Basic " + base64.b64encode(raw).decode("ascii")


async def create_payment(
    amount_rub: float,
    description: str,
    return_url: str,
    metadata: dict,
    customer_email: Optional[str] = None,
    receipt_items: Optional[list[dict]] = None,
) -> dict:
    """
    Создаёт платёж в ЮKassa. Возвращает dict с полями:
        id, status, confirmation.confirmation_url, ...

    receipt_items нужен для 54-ФЗ. Формат:
        [{"description": "Пакет 100 кредитов Aiviso", "quantity": "1.00",
          "amount": {"value": "1490.00", "currency": "RUB"},
          "vat_code": 1, "payment_subject": "service",
          "payment_mode": "full_prepayment"}]
    """
    if not is_configured():
        raise RuntimeError("YooKassa не настроена: пустой YOOKASSA_SHOP_ID или YOOKASSA_SECRET_KEY")

    payload: dict = {
        "amount": {
            "value": f"{amount_rub:.2f}",
            "currency": "RUB",
        },
        "capture": True,
        "confirmation": {
            "type": "redirect",
            "return_url": return_url,
        },
        "description": description[:128],
        "metadata": {k: str(v) for k, v in metadata.items()},
    }

    # 54-ФЗ: чек обязателен для физлиц по карте
    if customer_email and receipt_items:
        payload["receipt"] = {
            "customer": {"email": customer_email},
            "items": receipt_items,
        }

    headers = {
        "Authorization": _auth_header(),
        "Idempotence-Key": secrets.token_urlsafe(24),
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient(timeout=15.0) as client:
        r = await client.post(f"{API}/payments", json=payload, headers=headers)
        try:
            data = r.json()
        except Exception:
            r.raise_for_status()
            raise
        if r.status_code >= 400:
            log.warning("YooKassa create_payment failed: %s %s", r.status_code, data)
            raise RuntimeError(f"YooKassa error {r.status_code}: {data.get('description', 'unknown')}")
        return data


async def get_payment(payment_id: str) -> dict:
    """Получает актуальный статус платежа из ЮKassa (для polling)."""
    if not is_configured():
        raise RuntimeError("YooKassa не настроена")
    headers = {"Authorization": _auth_header()}
    async with httpx.AsyncClient(timeout=15.0) as client:
        r = await client.get(f"{API}/payments/{payment_id}", headers=headers)
        r.raise_for_status()
        return r.json()


def make_receipt_items(package_name: str, credits: int, amount_rub: float) -> list[dict]:
    """Чек 54-ФЗ для одного пакета кредитов."""
    return [{
        "description": f"Пакет {credits} кредитов Aiviso ({package_name})"[:128],
        "quantity": "1.00",
        "amount": {"value": f"{amount_rub:.2f}", "currency": "RUB"},
        "vat_code": 1,                          # 1 = НДС не облагается (ИП на УСН)
        "payment_subject": "service",           # тип предмета расчёта
        "payment_mode": "full_prepayment",      # полная предоплата
    }]
