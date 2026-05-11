import time
import secrets
from datetime import datetime, timedelta, timezone
from collections import defaultdict, deque
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel, EmailStr

from app.database import get_db
from app.models.user import User
from app.core.security import hash_password, verify_password, create_access_token, get_current_user

router = APIRouter(prefix="/auth", tags=["auth"])

MAGIC_TOKEN_TTL_MINUTES = 10


# ──────────────────────────────────────────────────────────────────────────────
# Rate limit для /auth/register — простой in-memory счётчик по IP.
# Защищает от массовых спам-регистраций.
# ──────────────────────────────────────────────────────────────────────────────

_REG_WINDOW_SEC = 3600        # 1 час
_REG_LIMIT_PER_IP = 5         # макс 5 регистраций с одного IP за час
_reg_history: dict[str, deque] = defaultdict(deque)


def _client_ip(request: Request) -> str:
    """Извлекает IP с учётом nginx X-Forwarded-For."""
    xff = request.headers.get("x-forwarded-for", "")
    if xff:
        # первый из списка — реальный
        return xff.split(",")[0].strip()
    return (request.client.host if request.client else "unknown")


def _check_register_rate_limit(ip: str) -> None:
    now = time.time()
    history = _reg_history[ip]
    # выкидываем старые записи
    while history and now - history[0] > _REG_WINDOW_SEC:
        history.popleft()
    if len(history) >= _REG_LIMIT_PER_IP:
        wait = int(_REG_WINDOW_SEC - (now - history[0]))
        raise HTTPException(429, f"Слишком много регистраций с этого адреса. Попробуй через {max(60, wait)} секунд.")
    history.append(now)
    # периодическая очистка пустых очередей чтоб не утекала память
    if len(_reg_history) > 10000:
        for k in list(_reg_history.keys()):
            if not _reg_history[k]:
                del _reg_history[k]


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    name: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: int
    name: str
    credits: int


class LegalEntityDTO(BaseModel):
    enabled: bool = False
    org_name: Optional[str] = None
    inn: Optional[str] = None
    kpp: Optional[str] = None
    legal_address: Optional[str] = None
    bik: Optional[str] = None
    account: Optional[str] = None
    bank: Optional[str] = None


class UserResponse(BaseModel):
    id: int
    email: str
    name: str
    credits: int
    is_admin: bool = False
    phone: Optional[str] = None
    phone_verified: bool = False
    legal_entity: Optional[LegalEntityDTO] = None
    onboarded: bool = False  # флаг прохождения онбординга (хранится в bot_state JSON)


REGISTRATION_STARTING_CREDITS = 0  # 0 кр при регистрации — без верификации сервис не работает.
                                    # +10 кр только за подтверждение (Telegram phone / Яндекс / VK SSO).


@router.post("/register", response_model=TokenResponse, status_code=201)
async def register(data: RegisterRequest, request: Request, db: AsyncSession = Depends(get_db)):
    # Rate limit по IP — защита от спам-ботов
    _check_register_rate_limit(_client_ip(request))

    result = await db.execute(select(User).where(User.email == data.email))
    if result.scalar_one_or_none():
        raise HTTPException(400, "Пользователь с таким email уже существует")
    if len(data.password) < 8:
        raise HTTPException(400, "Пароль должен быть не менее 8 символов")

    user = User(
        email=data.email,
        password_hash=hash_password(data.password),
        name=data.name,
        credits=REGISTRATION_STARTING_CREDITS,
    )
    db.add(user)
    await db.commit()
    await db.refresh(user)

    return TokenResponse(
        access_token=create_access_token(user.id),
        user_id=user.id,
        name=user.name,
        credits=user.credits,
    )


@router.post("/login", response_model=TokenResponse)
async def login(form: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.email == form.username))
    user = result.scalar_one_or_none()

    if not user or not verify_password(form.password, user.password_hash):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Неверный email или пароль")

    return TokenResponse(
        access_token=create_access_token(user.id),
        user_id=user.id,
        name=user.name,
        credits=user.credits,
    )


@router.get("/me", response_model=UserResponse)
async def me(user: User = Depends(get_current_user)):
    onboarded_flag = bool((user.bot_state or {}).get("onboarded"))
    return UserResponse(
        id=user.id, email=user.email, name=user.name, credits=user.credits,
        is_admin=bool(user.is_admin),
        phone=user.phone,
        phone_verified=bool(user.phone_verified),
        legal_entity=LegalEntityDTO(**user.legal_entity) if user.legal_entity else None,
        onboarded=onboarded_flag,
    )


@router.post("/me/onboarded", response_model=UserResponse)
async def mark_onboarded(
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Юзер прошёл онбординг — больше не показываем модалку.
    Хранится в user.bot_state JSON как {"onboarded": true} рядом с FSM-состоянием Telegram-бота.
    """
    state = dict(user.bot_state or {})
    state["onboarded"] = True
    user.bot_state = state
    await db.commit()
    await db.refresh(user)
    return UserResponse(
        id=user.id, email=user.email, name=user.name, credits=user.credits,
        is_admin=bool(user.is_admin),
        phone=user.phone,
        phone_verified=bool(user.phone_verified),
        legal_entity=LegalEntityDTO(**user.legal_entity) if user.legal_entity else None,
        onboarded=True,
    )


class UpdateMeRequest(BaseModel):
    name: str | None = None
    legal_entity: Optional[LegalEntityDTO] = None


@router.patch("/me", response_model=UserResponse)
async def update_me(
    data: UpdateMeRequest,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    if data.name is not None:
        name = data.name.strip()
        if len(name) < 1 or len(name) > 255:
            raise HTTPException(400, "Имя должно быть от 1 до 255 символов")
        user.name = name
    if data.legal_entity is not None:
        # Сохраняем все поля только если включён тумблер; иначе храним {enabled: False}
        # чтобы фронт мог различать "никогда не заполняли" от "выключили".
        le = data.legal_entity
        user.legal_entity = {
            "enabled": bool(le.enabled),
            "org_name": (le.org_name or "").strip()[:255],
            "inn": (le.inn or "").strip()[:32],
            "kpp": (le.kpp or "").strip()[:32],
            "legal_address": (le.legal_address or "").strip()[:512],
            "bik": (le.bik or "").strip()[:32],
            "account": (le.account or "").strip()[:32],
            "bank": (le.bank or "").strip()[:255],
        }
    await db.commit()
    await db.refresh(user)
    return UserResponse(
        id=user.id, email=user.email, name=user.name, credits=user.credits,
        is_admin=bool(user.is_admin),
        phone=user.phone,
        phone_verified=bool(user.phone_verified),
        legal_entity=LegalEntityDTO(**user.legal_entity) if user.legal_entity else None,
    )


class ChangePasswordRequest(BaseModel):
    old_password: str
    new_password: str


# ──────────────────────────────────────────────────────────────────────────────
# Magic-link авторизация для Telegram-бота.
# Бот вызывает issue (внутренний, по chat_id) → получает короткий URL →
# юзер кликает → /auth/magic redeem'ит токен в JWT → редирект на /app/account/billing.
# ──────────────────────────────────────────────────────────────────────────────


def issue_magic_token_for_user(user: User) -> str:
    """Генерирует одноразовый magic-токен для юзера.
    Кладёт в user.magic_token / user.magic_token_expires_at.
    Caller сам делает db.commit().
    """
    token = secrets.token_urlsafe(32)
    user.magic_token = token
    user.magic_token_expires_at = datetime.now(timezone.utc) + timedelta(minutes=MAGIC_TOKEN_TTL_MINUTES)
    return token


class MagicRedeemRequest(BaseModel):
    token: str


@router.post("/magic/redeem", response_model=TokenResponse)
async def magic_redeem(data: MagicRedeemRequest, db: AsyncSession = Depends(get_db)):
    """Обменивает одноразовый magic-токен на JWT.
    Токен инвалидируется сразу после обмена (одноразовый).
    """
    token = (data.token or "").strip()
    if not token or len(token) < 16:
        raise HTTPException(400, "Некорректный токен")

    result = await db.execute(select(User).where(User.magic_token == token))
    user = result.scalar_one_or_none()
    if not user:
        raise HTTPException(404, "Ссылка недействительна или уже была использована")

    expires = user.magic_token_expires_at
    # БД хранит TZ-aware datetime; на всякий случай форсим UTC.
    if expires is None:
        raise HTTPException(410, "Ссылка истекла, запроси новую через бот")
    if expires.tzinfo is None:
        expires = expires.replace(tzinfo=timezone.utc)
    if expires < datetime.now(timezone.utc):
        # Чистим устаревший
        user.magic_token = None
        user.magic_token_expires_at = None
        await db.commit()
        raise HTTPException(410, "Ссылка истекла, запроси новую через бот")

    # Одноразовый — сразу инвалидируем
    user.magic_token = None
    user.magic_token_expires_at = None
    await db.commit()

    return TokenResponse(
        access_token=create_access_token(user.id),
        user_id=user.id,
        name=user.name,
        credits=user.credits,
    )


@router.post("/change-password", status_code=204)
async def change_password(
    data: ChangePasswordRequest,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    if not verify_password(data.old_password, user.password_hash):
        raise HTTPException(400, "Текущий пароль неверный")
    if len(data.new_password) < 8:
        raise HTTPException(400, "Новый пароль должен быть не менее 8 символов")
    if data.old_password == data.new_password:
        raise HTTPException(400, "Новый пароль совпадает со старым")
    user.password_hash = hash_password(data.new_password)
    await db.commit()
