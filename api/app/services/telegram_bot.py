"""
Telegram-бот @AIviso_image_bot — приём фото и отправка готовых результатов.

Привязка: пользователь жмёт «Подключить Telegram» в ЛК → backend генерирует
одноразовый код → юзер отправляет боту команду /start CODE → бот webhook
ловит команду, привязывает chat_id к пользователю.

После привязки бот работает как мини-приложение:
- Запрашивает share_contact для верификации телефона (+10 кредитов)
- Принимает фото товара → выбор категории → выбор сценария → генерация
- После генерации присылает готовый кадр с подписью

FSM-состояние диалога хранится в users.bot_state (JSON):
   stage: waiting_photo | waiting_category | waiting_scenario | generating
   project_id, scenario, category, photo_message_id
"""
import logging
import os
import secrets
from datetime import datetime, timedelta, timezone
from typing import Optional

import httpx
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.models.user import User

log = logging.getLogger(__name__)

API = "https://api.telegram.org"
CONNECT_CODE_TTL_MIN = 30
PHONE_BONUS_CREDITS = 10  # дублируется с oauth.py — единый бонус на верификацию

# Категории и сценарии — keep in sync с CATEGORY_SCENARIO_ORDER на фронте
CATEGORIES_BOT = [
    ("clothing",    "Одежда"),
    ("furniture",   "Предметы интерьера"),
    ("cosmetics",   "Косметика"),
    ("food",        "Еда"),
    ("electronics", "Техника"),
    ("other",       "Другое"),
]

# Модели генерации — синхронизировано с CREDITS_BY_MODEL в routers/generations.py
MODELS_BOT = [
    ("pro",   "Pro · 6 кр.",  "качественнее"),
    ("flash", "Flash · 4 кр.", "быстрее, дешевле"),
]

# Тип контента: "Фото" — без оверлея, "Карточка" — с оверлеем заголовка/УТП.
CONTENT_TYPES_BOT = [
    ("photo", "Фото"),
    ("card",  "Карточка"),
]

# Стиль карточки. На стороне бэка card_style мапается так:
# "template"  → один из STARTER_KITS_META пресетов (после уточнения какой именно)
# "reference" → propose_brand_kit с reference_image_bytes из 2-го фото альбома
# "ai"        → propose_brand_kit без референса (auto-pick по фото товара)
CARD_STYLES_BOT = [
    ("template",  "Шаблон"),
    ("reference", "Референс"),
    ("ai",        "ИИ"),
]

# Шаблоны карточек — синхронизировано с STARTER_KITS_META в prompt_builder.py.
# Показываем только key + короткий label (полные tagline'ы — слишком длинно для inline-кнопки).
TEMPLATES_BOT = [
    ("bare_typography",  "Чистая типографика"),
    ("glass_card",       "Glass-карточка"),
    ("bold_accent_caps", "Большой акцент"),
    ("oversized_hero",   "Огромный заголовок"),
    ("marketplace_pop",  "Маркетплейс-поп"),
    ("industrial_tech",  "Тех-pill"),
]

# Подписи-описания для шаблонов — выводим в сообщении перед клавиатурой.
TEMPLATES_TAGLINES = {
    "bare_typography":  "Текст и заголовок прямо на фото, без плашек",
    "glass_card":       "Frosted-glass плашки, фото просвечивает",
    "bold_accent_caps": "ALL-CAPS заголовок ярким цветом, иконки на цветных кругах",
    "oversized_hero":   "Гигантский ALL-CAPS текст за товаром, fashion-стиль",
    "marketplace_pop":  "Заголовок + контурный pill, мелкие серые карточки",
    "industrial_tech":  "Цветные tech-pills с характеристиками, инженерный стиль",
}

CATEGORY_SCENARIOS_BOT: dict[str, list[tuple[str, str]]] = {
    "clothing": [
        ("clothing_ghost",  "Невидимый манекен"),
        ("clothing_studio", "Студийное фото"),
        ("clothing_model",  "Модель"),
        ("clothing_usage",  "Использование"),
    ],
    "furniture": [
        ("furniture_white_cube", "Белый куб"),
        ("furniture_studio",     "Студийное фото"),
        ("furniture_interior",   "В интерьере"),
        ("furniture_outdoor",    "На природе"),
        ("furniture_usage",      "Использование"),
    ],
    "cosmetics": [
        ("cosmetics_white_cube", "Белый куб"),
        ("cosmetics_studio",     "Студийное фото"),
        ("cosmetics_interior",   "В интерьере"),
        ("cosmetics_model",      "Модель"),
        ("cosmetics_usage",      "Использование"),
    ],
    "food": [
        ("food_white_cube", "Белый куб"),
        ("food_studio",     "Студийное фото"),
        ("food_serving",    "Сервировка"),
        ("food_usage",      "Использование"),
    ],
    "electronics": [
        ("electronics_white_cube", "Белый куб"),
        ("electronics_studio",     "Студийное фото"),
        ("electronics_workspace",  "На рабочем месте"),
        ("electronics_usage",      "Использование"),
    ],
    "other": [
        ("other_white_cube", "Белый куб"),
        ("other_studio",     "Студийное фото"),
        ("other_lifestyle",  "В интерьере"),
        ("other_usage",      "Использование"),
    ],
}


def deep_link(code: str) -> str:
    return f"https://t.me/{settings.TELEGRAM_BOT_USERNAME}?start={code}"


def generate_connect_code() -> tuple[str, datetime]:
    code = secrets.token_urlsafe(6).replace("-", "").replace("_", "")[:10].upper()
    expires = datetime.now(timezone.utc) + timedelta(minutes=CONNECT_CODE_TTL_MIN)
    return code, expires


# ──────────────────────────────────────────────────────────────────────────────
# HTTP helpers
# ──────────────────────────────────────────────────────────────────────────────

async def _post(method: str, payload: Optional[dict] = None, files: Optional[dict] = None, timeout: float = 30.0) -> dict:
    if not settings.TELEGRAM_BOT_TOKEN:
        raise RuntimeError("TELEGRAM_BOT_TOKEN не задан")
    url = f"{API}/bot{settings.TELEGRAM_BOT_TOKEN}/{method}"
    async with httpx.AsyncClient(timeout=timeout) as client:
        if files:
            r = await client.post(url, data=payload or {}, files=files)
        else:
            r = await client.post(url, json=payload or {})
        try:
            data = r.json()
        except Exception:
            r.raise_for_status()
            return {}
        if not data.get("ok"):
            log.warning("Telegram %s failed: %s", method, data)
        return data


async def send_message(
    chat_id: int,
    text: str,
    parse_mode: str = "HTML",
    reply_markup: Optional[dict] = None,
) -> dict:
    payload: dict = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": parse_mode,
        "disable_web_page_preview": True,
    }
    if reply_markup:
        payload["reply_markup"] = reply_markup
    return await _post("sendMessage", payload)


async def answer_callback_query(callback_query_id: str, text: Optional[str] = None) -> dict:
    payload: dict = {"callback_query_id": callback_query_id}
    if text:
        payload["text"] = text[:200]
    return await _post("answerCallbackQuery", payload)


async def edit_message_text(
    chat_id: int,
    message_id: int,
    text: str,
    parse_mode: str = "HTML",
    reply_markup: Optional[dict] = None,
) -> dict:
    payload: dict = {
        "chat_id": chat_id,
        "message_id": message_id,
        "text": text,
        "parse_mode": parse_mode,
    }
    if reply_markup is not None:
        payload["reply_markup"] = reply_markup
    return await _post("editMessageText", payload)


async def remove_keyboard(chat_id: int, text: str) -> dict:
    return await send_message(chat_id, text, reply_markup={"remove_keyboard": True})


async def send_chat_action(chat_id: int, action: str = "typing") -> dict:
    return await _post("sendChatAction", {"chat_id": chat_id, "action": action})


async def send_photo_file(chat_id: int, file_path: str, caption: Optional[str] = None) -> dict:
    if not settings.TELEGRAM_BOT_TOKEN:
        raise RuntimeError("TELEGRAM_BOT_TOKEN не задан")
    url = f"{API}/bot{settings.TELEGRAM_BOT_TOKEN}/sendPhoto"
    payload = {"chat_id": str(chat_id)}
    if caption:
        payload["caption"] = caption[:1024]
        payload["parse_mode"] = "HTML"
    with open(file_path, "rb") as f:
        files = {"photo": (file_path.rsplit("/", 1)[-1], f.read(), "image/jpeg")}
    async with httpx.AsyncClient(timeout=60.0) as client:
        r = await client.post(url, data=payload, files=files)
        try:
            data = r.json()
        except Exception:
            r.raise_for_status()
            return {}
        if not data.get("ok"):
            log.warning("Telegram sendPhoto failed: %s", data)
        return data


async def download_telegram_file(file_id: str, dest_path: str) -> Optional[str]:
    """Скачивает файл из Telegram (по file_id) в dest_path. Возвращает путь или None."""
    if not settings.TELEGRAM_BOT_TOKEN:
        return None
    async with httpx.AsyncClient(timeout=60.0) as client:
        r = await client.get(f"{API}/bot{settings.TELEGRAM_BOT_TOKEN}/getFile", params={"file_id": file_id})
        info = r.json()
        if not info.get("ok"):
            log.warning("getFile failed: %s", info)
            return None
        file_path = info["result"]["file_path"]
        url = f"{API}/file/bot{settings.TELEGRAM_BOT_TOKEN}/{file_path}"
        rr = await client.get(url)
        if rr.status_code != 200:
            log.warning("file download failed: %s", rr.status_code)
            return None
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        with open(dest_path, "wb") as f:
            f.write(rr.content)
        return dest_path


# ──────────────────────────────────────────────────────────────────────────────
# Keyboards
# ──────────────────────────────────────────────────────────────────────────────

def kb_request_contact() -> dict:
    """Reply-клавиатура с кнопкой «Поделиться номером»."""
    return {
        "keyboard": [[{"text": "Поделиться номером телефона", "request_contact": True}]],
        "resize_keyboard": True,
        "one_time_keyboard": True,
    }


def kb_categories() -> dict:
    """Inline-клавиатура категорий, 2 в ряд."""
    rows = []
    chunk = []
    for key, label in CATEGORIES_BOT:
        chunk.append({"text": label, "callback_data": f"cat:{key}"})
        if len(chunk) == 2:
            rows.append(chunk); chunk = []
    if chunk:
        rows.append(chunk)
    rows.append([{"text": "Отмена", "callback_data": "cancel"}])
    return {"inline_keyboard": rows}


_BACK_ROW = [{"text": "← Назад", "callback_data": "back"}]


def kb_scenarios(category: str) -> dict:
    rows = []
    for key, label in CATEGORY_SCENARIOS_BOT.get(category, []):
        rows.append([{"text": label, "callback_data": f"sc:{key}"}])
    rows.append(_BACK_ROW)
    return {"inline_keyboard": rows}


def kb_invite_to_register() -> dict:
    return {
        "inline_keyboard": [[
            {"text": "Открыть aiviso.ru", "url": "https://aiviso.ru/auth"}
        ]]
    }


def kb_topup(magic_url: str) -> dict:
    """Кнопка «Пополнить кредиты» — ведёт на сайт через magic-link (auto-login)."""
    return {
        "inline_keyboard": [[
            {"text": "💳 Пополнить кредиты на сайте →", "url": magic_url}
        ]]
    }


def kb_open_cabinet(magic_url: str) -> dict:
    """Кнопка «Открыть кабинет» — ведёт на сайт через magic-link."""
    return {
        "inline_keyboard": [[
            {"text": "🌐 Открыть кабинет на сайте →", "url": magic_url}
        ]]
    }


def kb_models() -> dict:
    rows = [[{"text": label, "callback_data": f"md:{key}"}] for key, label, _ in MODELS_BOT]
    rows.append(_BACK_ROW)
    return {"inline_keyboard": rows}


def kb_content_types() -> dict:
    rows = [[{"text": label, "callback_data": f"ct:{key}"} for key, label in CONTENT_TYPES_BOT]]
    rows.append(_BACK_ROW)
    return {"inline_keyboard": rows}


def kb_card_styles() -> dict:
    rows = [[{"text": label, "callback_data": f"cs:{key}"} for key, label in CARD_STYLES_BOT]]
    rows.append(_BACK_ROW)
    return {"inline_keyboard": rows}


def kb_skip_step(step: str) -> dict:
    """Inline-кнопка «Пропустить» для текстового шага (доп. пожелания) + «Назад»."""
    return {"inline_keyboard": [
        [{"text": "Пропустить", "callback_data": f"skip:{step}"}],
        _BACK_ROW,
    ]}


def kb_accept_proposal(step: str, proposed_text: Optional[str] = None, supports_inline: bool = False) -> dict:
    """Кнопки для шагов с AI-сгенерированными вариантами (название карточки, УТП).

    «Принять» — взять предложенный ИИ текст как есть.
    «Редактировать» — бот пришлёт текст моноширинным (тап копирует) + ForceReply,
    юзер вставляет в поле, правит и отправляет.
    """
    return {"inline_keyboard": [
        [
            {"text": "✓ Принять", "callback_data": f"accept:{step}"},
            {"text": "✏️ Редактировать", "callback_data": f"edit:{step}"},
        ],
        _BACK_ROW,
    ]}


# ──────────────────────────────────────────────────────────────────────────────
# Кэш флага «inline-режим включён» — один раз получаем через getMe и кэшируем.
# ──────────────────────────────────────────────────────────────────────────────
_supports_inline_cache: Optional[bool] = None


async def supports_inline() -> bool:
    """Лениво проверяет supports_inline_queries у бота. Кэширует результат на время процесса.
    Если inline-режим переключили в @BotFather — нужен рестарт API контейнера."""
    global _supports_inline_cache
    if _supports_inline_cache is not None:
        return _supports_inline_cache
    if not settings.TELEGRAM_BOT_TOKEN:
        _supports_inline_cache = False
        return False
    try:
        data = await _post("getMe", None)
        _supports_inline_cache = bool(data.get("result", {}).get("supports_inline_queries"))
    except Exception as e:
        log.warning("getMe failed: %s", e)
        _supports_inline_cache = False
    return _supports_inline_cache


async def answer_inline_query(inline_query_id: str, results: list[dict]) -> dict:
    return await _post("answerInlineQuery", {
        "inline_query_id": inline_query_id,
        "results": results,
        "cache_time": 0,
        "is_personal": True,
    })


def kb_templates() -> dict:
    """6 шаблонов карточки — каждый отдельной строкой, чтобы лейбл влезал."""
    rows = [[{"text": label, "callback_data": f"tpl:{key}"}] for key, label in TEMPLATES_BOT]
    rows.append(_BACK_ROW)
    return {"inline_keyboard": rows}


def kb_reference_done(count: int) -> dict:
    """Клавиатура для шага сбора фото-референсов: «Готово» (если хоть одно фото есть) и «Назад»."""
    rows = []
    if count > 0:
        rows.append([{"text": f"✓ Готово ({count} фото) — продолжить", "callback_data": "ref_done"}])
    rows.append(_BACK_ROW)
    return {"inline_keyboard": rows}


# ──────────────────────────────────────────────────────────────────────────────
# Бизнес-логика: связка аккаунта, верификация телефона, генерация
# ──────────────────────────────────────────────────────────────────────────────

async def send_generation_done(user: User, photo_paths: list[str], project_title: Optional[str] = None) -> None:
    """Отправить готовые фото после успешной генерации."""
    if not user.telegram_chat_id or not settings.TELEGRAM_BOT_TOKEN:
        return
    try:
        title = project_title or "проект"
        await send_message(user.telegram_chat_id, f"✨ Готово! <b>{title}</b>")
        for i, p in enumerate(photo_paths[:10]):
            try:
                cap = f"Кадр {i + 1}/{len(photo_paths)}" if len(photo_paths) > 1 else None
                await send_photo_file(user.telegram_chat_id, p, cap)
            except Exception as e:
                log.warning("Не отправили фото %s: %s", p, e)
    except Exception as e:
        log.warning("Telegram send_generation_done failed for user %s: %s", user.id, e)


async def handle_start_command(db: AsyncSession, chat_id: int, username: Optional[str], code: str) -> str:
    """Обработка /start CODE из бота. Возвращает текст ответа боту."""
    from sqlalchemy import select

    code = (code or "").strip().upper()
    if not code:
        return (
            "Привет! Я бот Aiviso — помогу сгенерировать фото товара для маркетплейса.\n\n"
            "Чтобы начать, открой <a href=\"https://aiviso.ru/auth\">aiviso.ru</a> → ЛК → Уведомления → "
            "«Подключить Telegram», а потом возвращайся."
        )

    res = await db.execute(select(User).where(User.telegram_connect_code == code))
    user = res.scalar_one_or_none()
    if not user:
        return "Код не найден или уже использован. Сгенерируй новый в ЛК → Уведомления."

    if user.telegram_connect_expires_at and user.telegram_connect_expires_at < datetime.now(timezone.utc):
        user.telegram_connect_code = None
        user.telegram_connect_expires_at = None
        await db.commit()
        return "Код истёк. Сгенерируй новый в ЛК → Уведомления."

    user.telegram_chat_id = chat_id
    user.telegram_username = username
    user.telegram_connect_code = None
    user.telegram_connect_expires_at = None
    await db.commit()

    return (
        f"✓ Подключено! Аккаунт <b>{user.email}</b> привязан.\n\n"
        "Дальше: пришли фото товара — я попрошу выбрать категорию и сценарий, потом сделаю кадр для маркетплейса."
    )


async def grant_phone_bonus_via_telegram(user: User, phone: str, db: AsyncSession) -> bool:
    """Помечает phone_verified и начисляет бонус. True если бонус впервые начислен."""
    user.phone = phone
    user.phone_verified = True
    user.phone_verified_at = datetime.now(timezone.utc)
    user.phone_verified_via = "telegram"
    granted_now = False
    if not user.phone_bonus_granted:
        user.credits = (user.credits or 0) + PHONE_BONUS_CREDITS
        user.phone_bonus_granted = True
        granted_now = True
    await db.commit()
    return granted_now


def normalize_phone(raw: str) -> str:
    s = "".join(ch for ch in (raw or "") if ch.isdigit() or ch == "+")
    if s.startswith("8") and len(s) == 11:
        s = "+7" + s[1:]
    elif s.startswith("7") and len(s) == 11:
        s = "+" + s
    elif not s.startswith("+") and len(s) >= 10:
        s = "+" + s
    return s[:32]
