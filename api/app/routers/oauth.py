"""SSO через сторонних провайдеров: Yandex и VK ID.

Требует переменные окружения для каждого провайдера:
  YANDEX_OAUTH_CLIENT_ID, YANDEX_OAUTH_CLIENT_SECRET
  VK_OAUTH_CLIENT_ID,     VK_OAUTH_CLIENT_SECRET

Если переменные не заданы — провайдер отключён и /start вернёт 503.

Поток:
  1. Frontend перенаправляет на GET /auth/oauth/{provider}/start
  2. Бэкенд проксирует на authorize-URL провайдера с redirect_uri=https://aiviso.ru/auth/oauth/{provider}/callback
  3. Провайдер возвращает code → frontend route /auth/oauth/{provider}/callback → POST /auth/oauth/{provider}/exchange
  4. Бэкенд обменивает code на access_token, тянет user_info, ищет/создаёт User → возвращает наш JWT
  5. Если провайдер вернул номер телефона (Yandex login:phone, VK phone_number) — ставим phone_verified
     и начисляем бонус-кредиты через grant_phone_bonus.
"""
import os
import secrets
import urllib.parse
from typing import Optional

import httpx
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel

from app.database import get_db
from app.models.user import User
from app.core.security import create_access_token, hash_password


router = APIRouter(prefix="/auth/oauth", tags=["oauth"])

REDIRECT_BASE = os.environ.get("FRONTEND_URL", "https://aiviso.ru").rstrip("/")


# ──────────────────────────────────────────────────────────────────────────────
# Конфиги провайдеров
# ──────────────────────────────────────────────────────────────────────────────

PROVIDERS = {
    "yandex": {
        "client_id":     os.environ.get("YANDEX_OAUTH_CLIENT_ID", ""),
        "client_secret": os.environ.get("YANDEX_OAUTH_CLIENT_SECRET", ""),
        "authorize_url": "https://oauth.yandex.ru/authorize",
        "token_url":     "https://oauth.yandex.ru/token",
        "userinfo_url":  "https://login.yandex.ru/info?format=json",
        # Базовые scope: email + имя/аватар. login:phone требует модерации приложения
        # в Яндекс ID — без неё Яндекс возвращает invalid_scope. Если когда-нибудь
        # пройдём модерацию для phone — добавим его и снова получим бонус автоматом.
        "scope":         "login:email login:info",
    },
    "vk": {
        "client_id":     os.environ.get("VK_OAUTH_CLIENT_ID", ""),
        "client_secret": os.environ.get("VK_OAUTH_CLIENT_SECRET", ""),
        "authorize_url": "https://oauth.vk.com/authorize",
        "token_url":     "https://oauth.vk.com/access_token",
        "userinfo_url":  "https://api.vk.com/method/users.get?fields=email&v=5.199",
        # phone_number scope — отдаёт номер телефона юзера (требует модерации в VK ID)
        "scope":         "email phone_number",
    },
}


def _redirect_uri(provider: str) -> str:
    return f"{REDIRECT_BASE}/auth/oauth/{provider}/callback"


def _provider_or_404(provider: str):
    p = PROVIDERS.get(provider)
    if not p:
        raise HTTPException(404, "Неизвестный провайдер")
    if not p["client_id"] or not p["client_secret"]:
        raise HTTPException(503, f"OAuth-провайдер '{provider}' не настроен на сервере. "
                                  f"Свяжись с поддержкой или используй email+пароль.")
    return p


# ──────────────────────────────────────────────────────────────────────────────
# Public endpoints
# ──────────────────────────────────────────────────────────────────────────────

class OAuthStatusResponse(BaseModel):
    yandex: bool
    vk: bool


@router.get("/status", response_model=OAuthStatusResponse)
async def status():
    """Какие провайдеры настроены на сервере (для отображения активных кнопок на /auth)."""
    return OAuthStatusResponse(
        yandex=bool(PROVIDERS["yandex"]["client_id"] and PROVIDERS["yandex"]["client_secret"]),
        vk=bool(PROVIDERS["vk"]["client_id"] and PROVIDERS["vk"]["client_secret"]),
    )


@router.get("/{provider}/start")
async def start(provider: str):
    """Возвращает URL на authorize-страницу провайдера. Frontend делает window.location."""
    p = _provider_or_404(provider)
    state = secrets.token_urlsafe(24)
    params = {
        "client_id":     p["client_id"],
        "redirect_uri":  _redirect_uri(provider),
        "response_type": "code",
        "scope":         p["scope"],
        "state":         state,
    }
    if provider == "vk":
        # VK требует v=
        params["v"] = "5.199"
    url = f"{p['authorize_url']}?{urllib.parse.urlencode(params)}"
    return {"authorize_url": url, "state": state}


class ExchangeRequest(BaseModel):
    code: str
    state: Optional[str] = None  # CSRF-проверка опциональная (state хранится на фронте в sessionStorage)


class ExchangeResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: int
    name: str
    credits: int


@router.post("/{provider}/exchange", response_model=ExchangeResponse)
async def exchange(provider: str, body: ExchangeRequest, db: AsyncSession = Depends(get_db)):
    """Обмен code → access_token → user_info → создание/логин юзера → наш JWT."""
    p = _provider_or_404(provider)

    # Шаг 1: code → access_token провайдера
    token_data = {
        "grant_type":    "authorization_code",
        "code":          body.code,
        "client_id":     p["client_id"],
        "client_secret": p["client_secret"],
        "redirect_uri":  _redirect_uri(provider),
    }
    async with httpx.AsyncClient(timeout=15.0) as client:
        try:
            r = await client.post(p["token_url"], data=token_data, headers={"Accept": "application/json"})
            r.raise_for_status()
            tok = r.json()
        except httpx.HTTPStatusError as e:
            raise HTTPException(400, f"Ошибка обмена кода у {provider}: {e.response.text[:200]}")
        except Exception as e:
            raise HTTPException(502, f"Не удалось связаться с {provider}: {e}")

        access_token_provider = tok.get("access_token")
        if not access_token_provider:
            raise HTTPException(400, f"{provider} не вернул access_token")

        # Шаг 2: access_token → user_info
        try:
            ui = await client.get(p["userinfo_url"], headers={"Authorization": f"OAuth {access_token_provider}"})
            ui.raise_for_status()
            user_info = ui.json()
        except Exception as e:
            raise HTTPException(502, f"Не удалось получить профиль из {provider}: {e}")

    # Шаг 3: парсим email, имя, телефон
    phone: Optional[str] = None
    if provider == "yandex":
        email = user_info.get("default_email") or (user_info.get("emails") or [None])[0]
        name  = user_info.get("real_name") or user_info.get("display_name") or user_info.get("login") or "Пользователь"
        # default_phone — объект {id, number} если scope login:phone был выдан
        dp = user_info.get("default_phone") or {}
        phone = dp.get("number") if isinstance(dp, dict) else None
    elif provider == "vk":
        # VK userinfo возвращает {response: [{id, first_name, last_name, ...}]}, email и phone в token-ответе
        resp_arr = user_info.get("response") or []
        v = resp_arr[0] if resp_arr else {}
        first = v.get("first_name", "")
        last  = v.get("last_name", "")
        name  = f"{first} {last}".strip() or "Пользователь"
        email = tok.get("email")
        phone = tok.get("phone")  # VK отдаёт телефон в ответе на token endpoint, если scope был phone_number
    else:
        email, name = None, None

    if not email:
        raise HTTPException(400, f"{provider} не вернул email — нужен публичный email-адрес. "
                                  f"Проверь настройки приватности или используй email+пароль.")

    # Нормализуем номер: оставляем только цифры и + в начале
    if phone:
        phone = _normalize_phone(phone)

    # Шаг 4: ищем юзера по email; создаём, если новый
    res = await db.execute(select(User).where(User.email == email))
    user = res.scalar_one_or_none()
    is_new = False
    if not user:
        # Стартовые кредиты как при обычной email-регистрации (3 кр).
        # Бонус +10 даётся ниже в Шаге 5 — OAuth через Яндекс/VK сам по себе верификация
        # (провайдер уже подтвердил телефон у юзера на своей стороне), поэтому 10 кр
        # начисляются за сам факт SSO, даже если scope не включал login:phone.
        from app.routers.auth import REGISTRATION_STARTING_CREDITS
        user = User(
            email=email,
            password_hash=hash_password(secrets.token_urlsafe(24)),  # рандомный пароль; вход только через SSO
            name=name or "Пользователь",
            credits=REGISTRATION_STARTING_CREDITS,
        )
        db.add(user)
        await db.commit()
        await db.refresh(user)
        is_new = True

    # Шаг 5: бонус +10 за SSO-верификацию (Яндекс ID / VK ID — у них телефон уже подтверждён).
    # Если провайдер выдал phone — записываем его и помечаем phone_verified.
    # Если phone не пришёл (нет scope login:phone из-за модерации) — всё равно начисляем
    # бонус за факт OAuth, через _grant_oauth_verification, чтобы юзер сразу мог пользоваться.
    if phone:
        await _grant_phone_verification(user, phone, via=provider, db=db)
    else:
        await _grant_oauth_verification(user, via=provider, db=db)

    return ExchangeResponse(
        access_token=create_access_token(user.id),
        user_id=user.id,
        name=user.name,
        credits=user.credits,
    )


# ──────────────────────────────────────────────────────────────────────────────
# Helpers — нормализация номера и единая функция начисления бонуса
# ──────────────────────────────────────────────────────────────────────────────

PHONE_BONUS_CREDITS = 10


def _normalize_phone(raw: str) -> str:
    """Оставляем только цифры и ведущий +. RU-номера приводим к +7..."""
    if not raw:
        return ""
    s = "".join(ch for ch in raw if ch.isdigit() or ch == "+")
    if s.startswith("8") and len(s) == 11:
        s = "+7" + s[1:]
    elif s.startswith("7") and len(s) == 11:
        s = "+" + s
    elif not s.startswith("+") and len(s) >= 10:
        s = "+" + s
    return s[:32]


async def _grant_phone_verification(user: User, phone: str, via: str, db: AsyncSession) -> None:
    """Ставит phone_verified=True, сохраняет номер. Начисляет бонус один раз."""
    from datetime import datetime, timezone
    user.phone = phone
    user.phone_verified = True
    user.phone_verified_at = datetime.now(timezone.utc)
    user.phone_verified_via = via
    if not user.phone_bonus_granted:
        user.credits = (user.credits or 0) + PHONE_BONUS_CREDITS
        user.phone_bonus_granted = True
    await db.commit()
    await db.refresh(user)


async def _grant_oauth_verification(user: User, via: str, db: AsyncSession) -> None:
    """Бонус +10 за SSO-вход через Яндекс/VK без phone-scope.

    Логика: Яндекс ID и VK ID на своей стороне уже подтверждают телефон у юзера —
    поэтому сам факт успешного OAuth достаточен для верификации. Phone в БД
    остаётся пустым (мы его не получили без scope login:phone), но
    phone_bonus_granted ставится в True чтобы избежать double-claim позже
    через Telegram share_contact.
    """
    if not user.phone_bonus_granted:
        user.credits = (user.credits or 0) + PHONE_BONUS_CREDITS
        user.phone_bonus_granted = True
        # phone_verified_via помечаем — отслеживание источника
        user.phone_verified_via = f"sso:{via}"
        await db.commit()
        await db.refresh(user)
