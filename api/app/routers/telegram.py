"""
Telegram webhook + endpoints управления привязкой бота к аккаунту.

Webhook регистрируется один раз через setWebhook (см. deploy_telegram.py):
   https://api.telegram.org/bot{TOKEN}/setWebhook
       ?url=https://api.aiviso.ru/telegram/webhook
       &secret_token={TELEGRAM_WEBHOOK_SECRET}

Endpoints:
   POST /telegram/webhook                   — апдейты от Telegram (без auth, проверяем secret в заголовке)
   POST /auth/telegram/start-connect        — пользователь жмёт «Подключить TG», бэк выдаёт code + deep link
   POST /auth/telegram/disconnect           — отвязать аккаунт
   GET  /auth/telegram/status               — { connected, username, code? }

Бот FSM (хранится в users.bot_state JSON):
   stage:
     waiting_photo        — ждём фото товара
     waiting_category     — Одежда / Предметы интерьера / ...
     waiting_scenario     — Невидимый манекен / Студия / ...
     waiting_model        — Pro / Flash
     waiting_content_type — Фото / Карточка
     waiting_card_style   — Шаблон / Референс / ИИ (только если content_type=card)
     waiting_template     — выбор конкретного шаблона из 6 (только если card_style=template)
     proposing_marketing  — фоновый вызов marketing-агента (title + utp по фото и категории)
     waiting_card_title   — пользователь подтверждает заголовок или пишет свой (только card)
     waiting_utp          — пользователь подтверждает УТП или пишет свои (только card)
     waiting_scene_notes  — текст доп. пожеланий или Пропустить
     generating           — задача в работе
   project_id, category, scenario, model, content_type, card_style,
   proposed_title, proposed_utp, title_text, utp_text, scene_notes
   last_media_group_id    — дедуп альбомов: одна серия вопросов на N фото в одном сообщении
"""
import logging
import os
import uuid
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Header, Request
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.security import get_current_user
from app.database import get_db, AsyncSessionLocal
from app.models.user import User
from app.models.project import Project, Upload
from app.routers.auth import issue_magic_token_for_user
from app.services import telegram_bot as tg

log = logging.getLogger(__name__)

webhook_router = APIRouter(prefix="/telegram", tags=["telegram-webhook"])
user_router = APIRouter(prefix="/auth/telegram", tags=["telegram-user"])


# ──────────────────────────────────────────────────────────────────────────────
# Magic-link helper для бота. Генерит одноразовый токен, возвращает URL вида
# https://aiviso.ru/auth/magic?token=...&next=/app/account/billing
# Юзер кликает → /auth/magic redeem'ит → JWT в localStorage → редирект.
# ──────────────────────────────────────────────────────────────────────────────

WEB_BASE_URL = (settings.WEB_BASE_URL if hasattr(settings, "WEB_BASE_URL") and settings.WEB_BASE_URL
                else "https://aiviso.ru")


async def _make_magic_url(user: User, db: AsyncSession, *, next_path: str = "/app/account") -> str:
    """Генерит magic-токен для юзера и возвращает auto-login URL для бота."""
    token = issue_magic_token_for_user(user)
    await db.commit()
    # next закодируем простейшим encodeURIComponent-эквивалентом (через urllib.parse.quote)
    from urllib.parse import quote
    return f"{WEB_BASE_URL}/auth/magic?token={token}&next={quote(next_path, safe='/')}"


# ──────────────────────────────────────────────────────────────────────────────
# User-side endpoints (привязка / статус)
# ──────────────────────────────────────────────────────────────────────────────

class StartConnectResponse(BaseModel):
    code: str
    deep_link: str
    bot_username: str
    expires_in_min: int


class StatusResponse(BaseModel):
    connected: bool
    username: Optional[str] = None
    chat_id: Optional[int] = None
    pending_code: Optional[str] = None
    pending_deep_link: Optional[str] = None


@user_router.post("/start-connect", response_model=StartConnectResponse)
async def start_connect(user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    if not settings.TELEGRAM_BOT_TOKEN:
        raise HTTPException(503, "Telegram-бот пока не настроен")
    code, expires = tg.generate_connect_code()
    user.telegram_connect_code = code
    user.telegram_connect_expires_at = expires
    await db.commit()
    return StartConnectResponse(
        code=code,
        deep_link=tg.deep_link(code),
        bot_username=settings.TELEGRAM_BOT_USERNAME,
        expires_in_min=tg.CONNECT_CODE_TTL_MIN,
    )


@user_router.post("/disconnect", status_code=204)
async def disconnect(user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    if user.telegram_chat_id:
        try:
            await tg.send_message(user.telegram_chat_id, "Отвязано. Готовые фото больше не будут приходить сюда.")
        except Exception:
            pass
    user.telegram_chat_id = None
    user.telegram_username = None
    user.telegram_connect_code = None
    user.telegram_connect_expires_at = None
    user.bot_state = None
    await db.commit()


@user_router.get("/status", response_model=StatusResponse)
async def status(user: User = Depends(get_current_user)):
    if user.telegram_chat_id:
        return StatusResponse(connected=True, username=user.telegram_username, chat_id=user.telegram_chat_id)
    if user.telegram_connect_code:
        return StatusResponse(
            connected=False,
            pending_code=user.telegram_connect_code,
            pending_deep_link=tg.deep_link(user.telegram_connect_code),
        )
    return StatusResponse(connected=False)


# ──────────────────────────────────────────────────────────────────────────────
# Webhook helpers
# ──────────────────────────────────────────────────────────────────────────────

async def _find_user_by_chat(db: AsyncSession, chat_id: int) -> Optional[User]:
    res = await db.execute(select(User).where(User.telegram_chat_id == chat_id))
    return res.scalar_one_or_none()


async def _ask_to_register(chat_id: int) -> None:
    await tg.send_message(
        chat_id,
        "Привет! Я бот Aiviso — помогаю генерировать фото товаров для Wildberries и Ozon.\n\n"
        "Чтобы начать, нужно зарегистрироваться (это бесплатно — даём кредиты на старте) и подключить меня в Уведомлениях.",
        reply_markup=tg.kb_invite_to_register(),
    )


async def _ask_for_phone(chat_id: int) -> None:
    await tg.send_message(
        chat_id,
        "Чтобы пользоваться ботом, подтверди номер телефона — нажми кнопку ниже.\n\n"
        "За подтверждение начислим <b>+10 кредитов</b> на твой баланс.",
        reply_markup=tg.kb_request_contact(),
    )


async def _ask_for_photo(chat_id: int) -> None:
    await tg.send_message(
        chat_id,
        "Пришли фото товара (можно несколько кадров), и я предложу варианты генерации.",
        reply_markup={"remove_keyboard": True},
    )


async def _send_categories(chat_id: int, prompt: str = "Шаг 1/6: выбери категорию товара:") -> None:
    await tg.send_message(chat_id, prompt, reply_markup=tg.kb_categories())


async def _send_scenarios(chat_id: int, category: str) -> None:
    label = dict(tg.CATEGORIES_BOT).get(category, category)
    await tg.send_message(
        chat_id,
        f"Шаг 2/6: <b>{label}</b> — выбери, как показать товар:",
        reply_markup=tg.kb_scenarios(category),
    )


async def _send_models(chat_id: int) -> None:
    await tg.send_message(
        chat_id,
        "Шаг 3/6: модель генерации.\n"
        "<b>Pro</b> — 6 кредитов, качественнее.\n"
        "<b>Flash</b> — 4 кредита, быстрее и дешевле.",
        reply_markup=tg.kb_models(),
    )


async def _send_content_types(chat_id: int) -> None:
    await tg.send_message(
        chat_id,
        "Шаг 4/6: тип контента.\n"
        "<b>Фото</b> — чистый кадр товара в сцене.\n"
        "<b>Карточка</b> — кадр с оверлеем заголовка и УТП для маркетплейса.",
        reply_markup=tg.kb_content_types(),
    )


async def _send_templates(chat_id: int) -> None:
    lines = ["<b>Какой шаблон карточки?</b>", ""]
    for key, label in tg.TEMPLATES_BOT:
        tagline = tg.TEMPLATES_TAGLINES.get(key, "")
        lines.append(f"• <b>{_escape_html(label)}</b> — {_escape_html(tagline)}")
    await tg.send_message(chat_id, "\n".join(lines), reply_markup=tg.kb_templates())


async def _send_card_styles(chat_id: int) -> None:
    await tg.send_message(
        chat_id,
        "Стиль карточки:\n"
        "<b>Шаблон</b> — выбираешь готовый пресет из шести.\n"
        "<b>Референс</b> — присылаешь свои фото-референсы готовых карточек, ИИ копирует их стиль.\n"
        "<b>ИИ</b> — модель сама подберёт стиль под товар.",
        reply_markup=tg.kb_card_styles(),
    )


async def _ask_card_title(chat_id: int, proposed_title: str) -> None:
    """Шаг 6/8 (для card): показываем AI-сгенерированный заголовок и просим подтвердить или прислать свой."""
    if proposed_title:
        text = (
            "Шаг 6/8: <b>Название карточки</b>.\n\n"
            f"ИИ предлагает:\n<i>{_escape_html(proposed_title)}</i>\n\n"
            "Жми <b>«Принять»</b> или <b>«Редактировать»</b> чтобы поправить текст."
        )
    else:
        text = (
            "Шаг 6/8: <b>Название карточки</b>.\n\n"
            "ИИ не смог сгенерировать заголовок. Пришли свой текст."
        )
    await tg.send_message(chat_id, text, reply_markup=tg.kb_accept_proposal("title"))


async def _ask_utp(chat_id: int, proposed_utp: list[str]) -> None:
    """Шаг 7/8 (для card): показываем AI-сгенерированные УТП и просим подтвердить или прислать свои."""
    if proposed_utp:
        bullets = "\n".join(f"• {_escape_html(u)}" for u in proposed_utp)
        text = (
            "Шаг 7/8: <b>УТП</b> — уникальные преимущества товара.\n\n"
            f"ИИ предлагает:\n{bullets}\n\n"
            "Жми <b>«Принять»</b> или <b>«Редактировать»</b> чтобы поправить текст."
        )
    else:
        text = (
            "Шаг 7/8: <b>УТП</b>.\n\n"
            "ИИ не смог придумать преимущества. Пришли свои — одной строкой через запятую "
            "или столбиком (например: <i>Натуральное дерево, ручная работа, экологично</i>)."
        )
    await tg.send_message(chat_id, text, reply_markup=tg.kb_accept_proposal("utp"))


async def _ask_scene_notes(chat_id: int, has_card: bool) -> None:
    if has_card:
        text = (
            "Шаг 8/8: <b>Дополнительные пожелания</b>. Что ещё учесть при генерации?\n\n"
            "Например: <i>столик в стиле Джапанди стоит у дивана с растением слева</i>.\n"
            "Если ничего — нажми «Пропустить»."
        )
    else:
        text = (
            "Шаг 6/6: <b>Дополнительные пожелания</b>. Что ещё учесть при генерации?\n\n"
            "Например: <i>столик в стиле Джапанди стоит у дивана с растением слева</i>.\n"
            "Если ничего — нажми «Пропустить»."
        )
    await tg.send_message(chat_id, text, reply_markup=tg.kb_skip_step("scene_notes"))


def _escape_html(s: str) -> str:
    return (s or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _bot_state(user: User) -> dict:
    return dict(user.bot_state or {})


async def _set_state(user: User, state: dict, db: AsyncSession) -> None:
    user.bot_state = state or None
    await db.commit()


# ──────────────────────────────────────────────────────────────────────────────
# Photo handling — download, create temp project, kick off generation
# ──────────────────────────────────────────────────────────────────────────────

async def _save_photo_as_project(
    db: AsyncSession,
    user: User,
    file_id: str,
) -> Optional[Project]:
    """Скачивает фото из Telegram, создаёт временный проект пользователя, добавляет Upload."""
    project = Project(
        user_id=user.id,
        name=f"Из бота · {datetime_now_short()}",
        category="other",
        flow="single",
        model="pro",
    )
    db.add(project)
    await db.commit()
    await db.refresh(project)

    saved_path = await _download_into_project(project, file_id)
    if not saved_path:
        return None

    up = Upload(
        project_id=project.id,
        file_path=saved_path,
        original_filename="bot_upload.jpg",
    )
    db.add(up)
    await db.commit()
    await db.refresh(project)
    return project


async def _download_into_project(project: Project, file_id: str) -> Optional[str]:
    upload_dir = os.path.join(settings.UPLOAD_DIR, str(project.id))
    os.makedirs(upload_dir, exist_ok=True)
    filename = f"{uuid.uuid4().hex}.jpg"
    dest = os.path.join(upload_dir, filename)
    saved = await tg.download_telegram_file(file_id, dest)
    return saved


async def _append_photo_to_project(
    db: AsyncSession,
    project: Project,
    file_id: str,
) -> bool:
    """Доп. фото из того же media_group — добавляем Upload без создания нового проекта."""
    saved_path = await _download_into_project(project, file_id)
    if not saved_path:
        return False
    up = Upload(
        project_id=project.id,
        file_path=saved_path,
        original_filename="bot_upload.jpg",
    )
    db.add(up)
    await db.commit()
    return True


def datetime_now_short() -> str:
    from datetime import datetime
    return datetime.utcnow().strftime("%Y-%m-%d %H:%M")


async def _propose_marketing_async(user_id: int, chat_id: int) -> None:
    """Фоновый вызов marketing-агента: предлагает title + 4 УТП по фото и категории.
    Использует ту же логику что и POST /projects/{id}/marketing на вебе.
    После завершения сохраняет предложение в bot_state и ведёт юзера на шаг 'Название'."""
    from app.services.marketing_agent import generate_marketing

    async with AsyncSessionLocal() as db:
        u_res = await db.execute(select(User).where(User.id == user_id))
        user = u_res.scalar_one_or_none()
        if not user:
            return
        state = _bot_state(user)
        pid = state.get("project_id")
        if not pid:
            return
        p_res = await db.execute(select(Project).where(Project.id == pid, Project.user_id == user_id))
        project = p_res.scalar_one_or_none()
        if not project:
            return
        up_res = await db.execute(select(Upload).where(Upload.project_id == pid).order_by(Upload.id))
        uploads = up_res.scalars().all()
        if not uploads:
            return
        primary = uploads[0]
        category = state.get("category") or project.category or "other"

    try:
        with open(primary.file_path, "rb") as f:
            img = f.read()
        ext = primary.file_path.rsplit(".", 1)[-1].lower()
        mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(ext, "image/jpeg")
        result = await generate_marketing(img, mime, category, project.name)
        title_part = (result.get("title") or "").strip()
        subtitle_part = (result.get("subtitle") or "").strip()
        # Склейка title + subtitle через \n — единый формат с веб-интерфейсом и оверлеем.
        proposed_title = (title_part + "\n" + subtitle_part) if subtitle_part else title_part
        proposed_utp_raw = result.get("utp") or []
        proposed_utp = [str(u).strip() for u in proposed_utp_raw if str(u).strip()][:5]
    except Exception as e:
        log.warning("bot marketing proposal failed: %s", e)
        proposed_title = ""
        proposed_utp = []

    # Сохраняем предложение в state и переходим к шагу title
    async with AsyncSessionLocal() as db:
        u_res = await db.execute(select(User).where(User.id == user_id))
        user = u_res.scalar_one_or_none()
        if not user:
            return
        state = _bot_state(user)
        # Если за это время юзер успел /cancel — не мешаем
        if state.get("stage") not in ("proposing_marketing",):
            return
        state["proposed_title"] = proposed_title
        state["proposed_utp"] = proposed_utp
        state["stage"] = "waiting_card_title"
        await _set_state(user, state, db)

    await _ask_card_title(chat_id, proposed_title)


# ──────────────────────────────────────────────────────────────────────────────
# FSM «Назад»: prev-stage map + сброс owned-полей
# ──────────────────────────────────────────────────────────────────────────────

PREV_STAGE: dict[str, str] = {
    "waiting_scenario":         "waiting_category",
    "waiting_model":            "waiting_scenario",
    "waiting_content_type":     "waiting_model",
    "waiting_card_style":       "waiting_content_type",
    "waiting_template":         "waiting_card_style",
    "waiting_reference_photos": "waiting_card_style",
    "proposing_marketing":      "waiting_card_style",
    "waiting_card_title":       "waiting_card_style",
    "waiting_utp":              "waiting_card_title",
}

# Какие поля state «принадлежат» каждому шагу — при возврате назад чистим только их.
STAGE_OWNS: dict[str, list[str]] = {
    "waiting_scenario":         ["scenario"],
    "waiting_model":            ["model"],
    "waiting_content_type":     ["content_type"],
    "waiting_card_style":       ["card_style"],
    "waiting_template":         ["template_key"],
    "waiting_reference_photos": ["reference_paths", "last_ref_media_group_id"],
    "proposing_marketing":      [],
    "waiting_card_title":       ["proposed_title", "proposed_utp", "title_text"],
    "waiting_utp":              ["utp_text"],
    "waiting_scene_notes":      ["scene_notes"],
}


def _prev_for(state: dict) -> Optional[str]:
    cur = state.get("stage")
    if cur == "waiting_scene_notes":
        return "waiting_utp" if state.get("content_type") == "card" else "waiting_content_type"
    return PREV_STAGE.get(cur or "")


def _go_back(state: dict) -> Optional[str]:
    prev = _prev_for(state)
    if not prev:
        return None
    cur = state.get("stage") or ""
    for k in STAGE_OWNS.get(cur, []):
        state.pop(k, None)
    state["stage"] = prev
    return prev


async def _show_stage(chat_id: int, stage: str, state: dict) -> None:
    """Повторно показать вопрос для указанного stage — используется при возврате назад."""
    if stage == "waiting_category":
        await _send_categories(chat_id)
    elif stage == "waiting_scenario":
        await _send_scenarios(chat_id, state.get("category", "other"))
    elif stage == "waiting_model":
        await _send_models(chat_id)
    elif stage == "waiting_content_type":
        await _send_content_types(chat_id)
    elif stage == "waiting_card_style":
        await _send_card_styles(chat_id)
    elif stage == "waiting_template":
        await _send_templates(chat_id)
    elif stage == "waiting_reference_photos":
        refs = state.get("reference_paths") or []
        await tg.send_message(
            chat_id,
            f"Пришли фото-референсы карточек (сейчас: {len(refs)}). Когда закончишь — нажми «Готово».",
            reply_markup=tg.kb_reference_done(len(refs)),
        )
    elif stage == "waiting_card_title":
        await _ask_card_title(chat_id, state.get("proposed_title") or "")
    elif stage == "waiting_utp":
        await _ask_utp(chat_id, state.get("proposed_utp") or [])
    elif stage == "waiting_scene_notes":
        await _ask_scene_notes(chat_id, has_card=(state.get("content_type") == "card"))


async def _propose_brand_kit_from_reference(
    primary_upload_path: Optional[str],
    reference_path: Optional[str],
    category: str,
    product_name: str,
) -> Optional[dict]:
    """Зовёт brand_kit_agent.propose_brand_kit с фото товара (+ опционально референсной карточкой).

    - reference_path задан → AI копирует стиль с референса.
    - reference_path None → AI сам выбирает один из 6 пресетов под товар (разнообразие).
    Возвращает kit или None при ошибке."""
    if not primary_upload_path:
        return None
    try:
        with open(primary_upload_path, "rb") as f:
            product_bytes = f.read()
        ref_bytes: Optional[bytes] = None
        if reference_path:
            with open(reference_path, "rb") as f:
                ref_bytes = f.read()
    except Exception as e:
        log.warning("read product/reference failed: %s", e)
        return None

    def _mime(p: str) -> str:
        ext = p.rsplit(".", 1)[-1].lower()
        return {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(ext, "image/jpeg")

    try:
        from app.services.brand_kit_agent import propose_brand_kit
        return await propose_brand_kit(
            image_bytes=product_bytes,
            mime_type=_mime(primary_upload_path),
            category=category or "other",
            product_name=product_name or "",
            reference_image_bytes=ref_bytes,
            reference_mime_type=_mime(reference_path) if reference_path else None,
        )
    except Exception as e:
        log.warning("propose_brand_kit failed: %s", e)
        return None


def _parse_utp(raw: str) -> list[str]:
    """Разбираем УТП: построчно или через запятую/точку с запятой."""
    if not raw:
        return []
    chunks: list[str] = []
    for line in raw.replace(";", "\n").splitlines():
        for piece in line.split(","):
            t = piece.strip(" -•—\t")
            if t:
                chunks.append(t[:120])
    return chunks[:7]


async def _start_generation_async(user_id: int, chat_id: int) -> None:
    """Запуск генерации по собранному state. Использует тот же путь что HTTP-роутер
    (routers/generations.prepare_generation + _run_in_background) — никакого дубля логики.
    """
    from app.routers.generations import (
        GenerationRequest, prepare_generation, _run_in_background,
    )
    from fastapi import HTTPException

    async with AsyncSessionLocal() as db:
        u_res = await db.execute(select(User).where(User.id == user_id))
        user = u_res.scalar_one_or_none()
        if not user:
            return
        state = _bot_state(user)
        pid = state.get("project_id")
        if not pid:
            await tg.send_message(chat_id, "Фото потерялось — пришли заново.")
            user.bot_state = None
            await db.commit()
            return

        p_res = await db.execute(select(Project).where(Project.id == pid, Project.user_id == user.id))
        project = p_res.scalar_one_or_none()
        if not project:
            await tg.send_message(chat_id, "Проект не найден. Пришли фото заново.")
            user.bot_state = None
            await db.commit()
            return

        # Применяем выбор пользователя к проекту
        project.category = state.get("category", project.category) or "other"
        project.model    = state.get("model",    project.model)    or "pro"

        scenario = state.get("scenario") or ""
        if not scenario:
            await tg.send_message(chat_id, "Сценарий не выбран. Начнём заново — пришли фото.")
            user.bot_state = None
            await db.commit()
            return

        content_type = state.get("content_type") or "photo"
        with_icons = content_type == "card"
        card_style_choice = state.get("card_style") if with_icons else None
        title_text = (state.get("title_text") or "").strip()[:255] if with_icons else None
        utp_text = (state.get("utp_text") or "").strip()
        utp_list = _parse_utp(utp_text) if (with_icons and utp_text) else None
        scene_notes = (state.get("scene_notes") or "").strip()

        # Сохраняем title и utp в проект — чтобы пайплайн оверлея и QC видели их даже без передачи в request
        if with_icons:
            if title_text:
                project.title = title_text
            if utp_list:
                # Формат хранения УТП в проекте: "icon\tтекст" — emoji-иконка пуста, как в marketing endpoint
                project.utp = [f"\t{u}" for u in utp_list]

        # Путь к первому Upload (фото товара) — нужен для brand_kit_agent с референсом
        up_res = await db.execute(select(Upload).where(Upload.project_id == project.id).order_by(Upload.id))
        uploads_list = up_res.scalars().all()
        primary_upload_for_kit_path = uploads_list[0].file_path if uploads_list else None

        # card_style → бэкендный card_style/brand_kit override
        backend_card_style: Optional[str] = None
        backend_brand_kit: Optional[dict] = None
        if with_icons:
            if card_style_choice == "template":
                tpl_key = state.get("template_key") or "minimal_premium"
                # Если юзер прошёл по шагу шаблона — используем выбранный пресет.
                # Список валидных ключей синхронизирован с STARTER_KITS_META.
                valid_templates = {"bare_typography", "glass_card", "bold_accent_caps",
                                   "oversized_hero", "marketplace_pop", "industrial_tech"}
                backend_card_style = tpl_key if tpl_key in valid_templates else "minimal_premium"
            elif card_style_choice == "reference":
                # Берём первый присланный референс и просим brand_kit_agent подобрать стиль под него.
                ref_paths = list(state.get("reference_paths") or [])
                ref_kit = await _propose_brand_kit_from_reference(
                    primary_upload_path=primary_upload_for_kit_path,
                    reference_path=ref_paths[0] if ref_paths else None,
                    category=project.category,
                    product_name=project.name,
                ) if ref_paths else None
                if ref_kit:
                    backend_brand_kit = ref_kit
                else:
                    backend_card_style = "minimal_premium"  # fallback
            elif card_style_choice == "ai":
                # «ИИ» — AI-агент анализирует фото товара и выбирает один из 6
                # дизайнерских пресетов (через brand_kit_agent.propose_brand_kit).
                # Banana потом верстает overlay по этому пресету. Это даёт красивую
                # карточку с детерминированным дизайном (без freeform-каши).
                #
                # ВАЖНО: перезаписываем project.brand_kit, чтобы предыдущий kit
                # с прошлой сессии не реюзался.
                ai_kit = await _propose_brand_kit_from_reference(
                    primary_upload_path=primary_upload_for_kit_path,
                    reference_path=None,
                    category=project.category,
                    product_name=project.name,
                )
                if ai_kit:
                    project.brand_kit = ai_kit
                else:
                    # propose_brand_kit упал — fallback на bare_typography (без плашек)
                    project.brand_kit = None
                backend_card_style = None
            else:
                backend_card_style = "minimal_premium"

        await db.commit()
        await db.refresh(project)
        await db.refresh(user)

        req = GenerationRequest(
            scenario=scenario,
            scene_description=scene_notes,
            title=title_text,
            utp=utp_list,
            with_icons=with_icons,
            card_style=backend_card_style,
            brand_kit=backend_brand_kit,
            preserve_model=False,
        )

        try:
            gen = await prepare_generation(user, project, req, db)
        except HTTPException as e:
            await tg.send_message(chat_id, e.detail if isinstance(e.detail, str) else "Не удалось запустить генерацию.")
            user.bot_state = None
            await db.commit()
            return
        gen_id = gen.id

    try:
        await tg.send_message(chat_id, "✓ Параметры приняты. Запускаю генерацию... ~30 секунд.")
        await _run_in_background(
            gen_id, pid, scenario, scene_notes,
            title_text, utp_list, with_icons,
            backend_card_style, backend_brand_kit, False,
        )
    except Exception as e:
        log.exception("bot generation failed: %s", e)
        try:
            await tg.send_message(chat_id, "Сбой генерации. Попробуй ещё раз позже.")
        except Exception:
            pass
    finally:
        async with AsyncSessionLocal() as db:
            u_res = await db.execute(select(User).where(User.id == user_id))
            u = u_res.scalar_one_or_none()
            if u:
                u.bot_state = None
                await db.commit()


# ──────────────────────────────────────────────────────────────────────────────
# Webhook endpoint
# ──────────────────────────────────────────────────────────────────────────────

@webhook_router.post("/webhook")
async def telegram_webhook(
    request: Request,
    x_telegram_bot_api_secret_token: Optional[str] = Header(None),
    db: AsyncSession = Depends(get_db),
):
    expected = settings.TELEGRAM_WEBHOOK_SECRET
    if expected and x_telegram_bot_api_secret_token != expected:
        raise HTTPException(403, "bad secret")

    update = await request.json()

    cbq = update.get("callback_query")
    if cbq:
        await _handle_callback(cbq, db)
        return {"ok": True}

    # Inline-query от switch_inline_query_current_chat — юзер правит предложенный текст;
    # отвечаем одним результатом, и при выборе он шлётся как обычное сообщение в чат.
    inq = update.get("inline_query")
    if inq:
        await _handle_inline_query(inq)
        return {"ok": True}

    msg = update.get("message") or update.get("edited_message")
    if not msg:
        return {"ok": True}

    chat = msg.get("chat") or {}
    chat_id = chat.get("id")
    if not chat_id:
        return {"ok": True}

    text = (msg.get("text") or "").strip()
    from_user = msg.get("from") or {}
    username = from_user.get("username")
    contact = msg.get("contact")
    photo = msg.get("photo")
    media_group_id = msg.get("media_group_id")

    # ── /start CODE — привязка существующего аккаунта ──
    if text.startswith("/start"):
        parts = text.split(maxsplit=1)
        code = parts[1] if len(parts) > 1 else ""
        if code:
            reply = await tg.handle_start_command(db, chat_id, username, code)
            await tg.send_message(chat_id, reply)
            user = await _find_user_by_chat(db, chat_id)
            if user:
                if not user.phone_verified:
                    await _ask_for_phone(chat_id)
                else:
                    await _ask_for_photo(chat_id)
            return {"ok": True}
        user = await _find_user_by_chat(db, chat_id)
        if not user:
            await _ask_to_register(chat_id)
        elif not user.phone_verified:
            await _ask_for_phone(chat_id)
        else:
            await _ask_for_photo(chat_id)
        return {"ok": True}

    user = await _find_user_by_chat(db, chat_id)
    if not user:
        await _ask_to_register(chat_id)
        return {"ok": True}

    if text == "/help":
        await tg.send_message(
            chat_id,
            "Я бот Aiviso. Пришли фото товара — пройдём шаги (категория → сценарий → модель → "
            "тип контента → стиль карточки + УТП → доп. пожелания), и я сделаю кадр для маркетплейса.\n\n"
            "Команды:\n"
            "<code>/balance</code> — баланс кредитов\n"
            "<code>/cancel</code> — отменить текущий шаг\n"
            "<code>/help</code> — это сообщение",
        )
        return {"ok": True}

    if text == "/balance":
        magic_url = await _make_magic_url(user, db, next_path="/app/account/billing")
        await tg.send_message(
            chat_id,
            f"Баланс: <b>{user.credits or 0}</b> кредитов.\n\n"
            f"Пополнить можно картой через ЮKassa — кнопка ниже откроет кабинет на сайте, "
            f"авторизация автоматическая (одноразовая ссылка живёт 10 минут).",
            reply_markup=tg.kb_topup(magic_url),
        )
        return {"ok": True}

    if text == "/cancel":
        user.bot_state = None
        await db.commit()
        await tg.send_message(chat_id, "Отменено. Пришли фото, когда будешь готова.", reply_markup={"remove_keyboard": True})
        return {"ok": True}

    # ── Контакт (share_contact) — верификация телефона ──
    if contact:
        contact_user_id = contact.get("user_id")
        if contact_user_id and contact_user_id != from_user.get("id"):
            await tg.send_message(chat_id, "Это контакт другого пользователя — нужен твой собственный номер.")
            return {"ok": True}
        phone = tg.normalize_phone(contact.get("phone_number") or "")
        if not phone:
            await tg.send_message(chat_id, "Не удалось разобрать номер. Попробуй ещё раз.")
            return {"ok": True}
        granted = await tg.grant_phone_bonus_via_telegram(user, phone, db)
        if granted:
            await tg.send_message(chat_id, f"✓ Номер подтверждён. <b>+{tg.PHONE_BONUS_CREDITS} кредитов</b> на баланс.")
        else:
            await tg.send_message(chat_id, "Номер уже был подтверждён ранее — бонус не дублируется.")
        # Magic-ссылка на кабинет — чтобы юзер мог сразу зайти и посмотреть остальное
        # (перенос карточек, история, прайс).
        try:
            magic_url = await _make_magic_url(user, db, next_path="/app/account")
            await tg.send_message(
                chat_id,
                "Кстати, всё то же самое доступно в веб-кабинете — там видна история, "
                "перенос карточек WB↔Ozon, тарифы. Открыть с авто-входом:",
                reply_markup=tg.kb_open_cabinet(magic_url),
            )
        except Exception as e:
            log.warning("magic-link issue failed: %s", e)
        await _ask_for_photo(chat_id)
        return {"ok": True}

    if not user.phone_verified:
        await _ask_for_phone(chat_id)
        return {"ok": True}

    # ── Фото ──
    if photo:
        biggest = max(photo, key=lambda p: p.get("file_size") or 0)
        file_id = biggest.get("file_id")
        if not file_id:
            await tg.send_message(chat_id, "Не получил файл — попробуй ещё раз.")
            return {"ok": True}

        existing_state = _bot_state(user)
        cur_stage = existing_state.get("stage")

        # ── Стадия сбора фото-референсов (выбран стиль "Референс") ──
        if cur_stage == "waiting_reference_photos":
            pid = existing_state.get("project_id")
            project = None
            if pid:
                p_res = await db.execute(select(Project).where(Project.id == pid, Project.user_id == user.id))
                project = p_res.scalar_one_or_none()
            if not project:
                await tg.send_message(chat_id, "Проект потерялся — пришли фото товара заново.")
                user.bot_state = None
                await db.commit()
                return {"ok": True}

            await tg.send_chat_action(chat_id, "upload_photo")
            saved = await _download_into_project(project, file_id)
            if not saved:
                await tg.send_message(chat_id, "Не удалось скачать референс. Попробуй ещё раз.")
                return {"ok": True}

            refs = list(existing_state.get("reference_paths") or [])
            refs.append(saved)
            existing_state["reference_paths"] = refs
            # Дедуп: для альбома пишем сообщение только на первом фото группы
            mg = str(media_group_id) if media_group_id else None
            first_in_group = (mg is None) or (existing_state.get("last_ref_media_group_id") != mg)
            if mg:
                existing_state["last_ref_media_group_id"] = mg
            await _set_state(user, existing_state, db)

            if first_in_group:
                await tg.send_message(
                    chat_id,
                    f"✓ Принят референс. Всего: <b>{len(refs)}</b>. "
                    "Можно прислать ещё или нажать «Готово».",
                    reply_markup=tg.kb_reference_done(len(refs)),
                )
            return {"ok": True}

        # ── Обычное фото товара (новый проект или альбом-дубль) ──
        # Дедуп альбома: одно сообщение про категорию на N фото товара.
        if media_group_id:
            if existing_state.get("last_media_group_id") == str(media_group_id):
                return {"ok": True}

        await tg.send_chat_action(chat_id, "upload_photo")
        project = await _save_photo_as_project(db, user, file_id)
        if not project:
            await tg.send_message(chat_id, "Не удалось скачать фото из Telegram. Попробуй ещё раз.")
            return {"ok": True}

        new_state = {
            "stage": "waiting_category",
            "project_id": project.id,
        }
        if media_group_id:
            new_state["last_media_group_id"] = str(media_group_id)
            await tg.send_message(chat_id, "Получил альбом — возьму первое фото товара для генерации.")
        await _set_state(user, new_state, db)
        await _send_categories(chat_id)
        return {"ok": True}

    # ── Текст без команды — обрабатываем по текущему стейджу ──
    state = _bot_state(user)
    stage = state.get("stage")

    if stage == "waiting_category":
        await tg.send_message(chat_id, "Выбери категорию кнопкой ниже:")
        await _send_categories(chat_id)
        return {"ok": True}

    if stage == "waiting_scenario":
        cat = state.get("category", "other")
        await _send_scenarios(chat_id, cat)
        return {"ok": True}

    if stage == "waiting_model":
        await _send_models(chat_id)
        return {"ok": True}

    if stage == "waiting_content_type":
        await _send_content_types(chat_id)
        return {"ok": True}

    if stage == "waiting_card_style":
        await _send_card_styles(chat_id)
        return {"ok": True}

    if stage == "waiting_template":
        await _send_templates(chat_id)
        return {"ok": True}

    if stage == "waiting_reference_photos":
        refs = state.get("reference_paths") or []
        await tg.send_message(
            chat_id,
            "Я жду фото-референсы карточек. Пришли картинку (можно несколько) или нажми «Готово»."
            if refs else
            "Пришли фото-референс — картинку карточки чьим стилем хочешь повторить. "
            "Можно несколько в альбоме или по одному.",
            reply_markup=tg.kb_reference_done(len(refs)),
        )
        return {"ok": True}

    if stage == "proposing_marketing":
        await tg.send_message(chat_id, "Подожди, ИИ ещё генерирует предложения для заголовка и УТП…")
        return {"ok": True}

    if stage == "waiting_card_title":
        # Свой заголовок поверх предложенного
        state["title_text"] = (text or "").strip()[:255]
        state["stage"] = "waiting_utp"
        await _set_state(user, state, db)
        await _ask_utp(chat_id, state.get("proposed_utp") or [])
        return {"ok": True}

    if stage == "waiting_utp":
        # Свой текст УТП поверх предложенных
        state["utp_text"] = (text or "")[:1000]
        state["stage"] = "waiting_scene_notes"
        await _set_state(user, state, db)
        await _ask_scene_notes(chat_id, has_card=True)
        return {"ok": True}

    if stage == "waiting_scene_notes":
        state["scene_notes"] = (text or "")[:1000]
        state["stage"] = "generating"
        await _set_state(user, state, db)
        import asyncio
        asyncio.create_task(_start_generation_async(user.id, chat_id))
        return {"ok": True}

    await tg.send_message(
        chat_id,
        "Я понимаю фото и команды /help, /balance, /cancel. Пришли фото товара, чтобы запустить генерацию.",
    )
    return {"ok": True}


async def _handle_inline_query(inq: dict) -> None:
    """Юзер набрал «@AIviso_image_bot текст» в поле ввода (инициировано
    switch_inline_query_current_chat). Возвращаем один inline-результат, который
    при выборе становится обычным сообщением — и попадёт в основной handler."""
    qid = inq.get("id")
    query_text = (inq.get("query") or "").strip()
    if not qid:
        return
    if not query_text:
        # Пустой query — нечего предлагать; просто закрываем.
        try:
            await tg.answer_inline_query(qid, [])
        except Exception:
            pass
        return
    import uuid as _uuid
    preview = query_text if len(query_text) <= 60 else (query_text[:57] + "…")
    result = {
        "type": "article",
        "id": _uuid.uuid4().hex[:32],
        "title": "Отправить отредактированный текст",
        "description": preview,
        "input_message_content": {
            "message_text": query_text[:4000],
            "disable_web_page_preview": True,
        },
    }
    try:
        await tg.answer_inline_query(qid, [result])
    except Exception as e:
        log.warning("answer_inline_query failed: %s", e)


async def _handle_callback(cbq: dict, db: AsyncSession) -> None:
    cbq_id = cbq.get("id")
    data = (cbq.get("data") or "").strip()
    msg = cbq.get("message") or {}
    chat = msg.get("chat") or {}
    chat_id = chat.get("id")
    message_id = msg.get("message_id")
    if not chat_id:
        return

    user = await _find_user_by_chat(db, chat_id)
    if not user:
        await tg.answer_callback_query(cbq_id, "Сначала зарегистрируйся на aiviso.ru")
        return
    if not user.phone_verified:
        await tg.answer_callback_query(cbq_id)
        await _ask_for_phone(chat_id)
        return

    state = _bot_state(user)

    # ── Отмена ──
    if data == "cancel":
        await tg.answer_callback_query(cbq_id, "Отменено")
        user.bot_state = None
        await db.commit()
        if message_id:
            try:
                await tg.edit_message_text(chat_id, message_id, "Отменено. Пришли новое фото когда захочешь.", reply_markup=None)
            except Exception:
                pass
        return

    # ── Универсальный «← Назад» ──
    if data == "back":
        prev = _go_back(state)
        if not prev:
            await tg.answer_callback_query(cbq_id, "Это первый шаг")
            return
        await _set_state(user, state, db)
        await tg.answer_callback_query(cbq_id)
        # Гасим клавиатуру у предыдущего сообщения, чтобы не висели старые кнопки
        if message_id:
            try:
                await tg.edit_message_text(chat_id, message_id, "← Назад", reply_markup=None)
            except Exception:
                pass
        await _show_stage(chat_id, prev, state)
        return

    # ── Категория ──
    if data.startswith("cat:"):
        category = data.split(":", 1)[1]
        if category not in dict(tg.CATEGORIES_BOT):
            await tg.answer_callback_query(cbq_id, "Неизвестная категория")
            return
        state["stage"] = "waiting_scenario"
        state["category"] = category
        await _set_state(user, state, db)
        pid = state.get("project_id")
        if pid:
            res = await db.execute(select(Project).where(Project.id == pid, Project.user_id == user.id))
            project = res.scalar_one_or_none()
            if project:
                project.category = category
                await db.commit()
        await tg.answer_callback_query(cbq_id)
        if message_id:
            try:
                cat_label = dict(tg.CATEGORIES_BOT).get(category, category)
                await tg.edit_message_text(
                    chat_id, message_id,
                    f"Шаг 2/6: <b>{cat_label}</b> — выбери, как показать товар:",
                    reply_markup=tg.kb_scenarios(category),
                )
            except Exception:
                await _send_scenarios(chat_id, category)
        return

    # ── Сценарий ──
    if data.startswith("sc:"):
        scenario = data.split(":", 1)[1]
        category = state.get("category") or "other"
        valid_scenarios = {k for k, _ in tg.CATEGORY_SCENARIOS_BOT.get(category, [])}
        if scenario not in valid_scenarios:
            await tg.answer_callback_query(cbq_id, "Неизвестный сценарий")
            return
        state["stage"] = "waiting_model"
        state["scenario"] = scenario
        await _set_state(user, state, db)
        await tg.answer_callback_query(cbq_id)
        if message_id:
            sc_label = dict(tg.CATEGORY_SCENARIOS_BOT.get(category, [])).get(scenario, scenario)
            try:
                await tg.edit_message_text(
                    chat_id, message_id,
                    f"<b>{sc_label}</b> ✓\n\nШаг 3/6: модель генерации.\n"
                    "<b>Pro</b> — 6 кредитов, качественнее.\n"
                    "<b>Flash</b> — 4 кредита, быстрее и дешевле.",
                    reply_markup=tg.kb_models(),
                )
            except Exception:
                await _send_models(chat_id)
        return

    # ── Модель ──
    if data.startswith("md:"):
        model = data.split(":", 1)[1]
        if model not in {k for k, _, _ in tg.MODELS_BOT}:
            await tg.answer_callback_query(cbq_id, "Неизвестная модель")
            return
        state["stage"] = "waiting_content_type"
        state["model"] = model
        await _set_state(user, state, db)
        await tg.answer_callback_query(cbq_id)
        if message_id:
            try:
                await tg.edit_message_text(
                    chat_id, message_id,
                    f"<b>{model.upper()}</b> ✓\n\nШаг 4/6: тип контента.\n"
                    "<b>Фото</b> — чистый кадр товара.\n"
                    "<b>Карточка</b> — с оверлеем заголовка и УТП.",
                    reply_markup=tg.kb_content_types(),
                )
            except Exception:
                await _send_content_types(chat_id)
        return

    # ── Тип контента ──
    if data.startswith("ct:"):
        ctype = data.split(":", 1)[1]
        if ctype not in {k for k, _ in tg.CONTENT_TYPES_BOT}:
            await tg.answer_callback_query(cbq_id, "Неизвестный тип")
            return
        state["content_type"] = ctype
        if ctype == "card":
            state["stage"] = "waiting_card_style"
            await _set_state(user, state, db)
            await tg.answer_callback_query(cbq_id)
            if message_id:
                try:
                    await tg.edit_message_text(
                        chat_id, message_id,
                        "<b>Карточка</b> ✓\n\nШаг 5/6: стиль карточки.\n"
                        "<b>Шаблон</b> — готовый минимал-пресет.\n"
                        "<b>Референс</b> — твой брендкит из ЛК.\n"
                        "<b>ИИ</b> — модель сама подберёт стиль.",
                        reply_markup=tg.kb_card_styles(),
                    )
                except Exception:
                    await _send_card_styles(chat_id)
        else:
            # Фото → сразу к доп. пожеланиям
            state["stage"] = "waiting_scene_notes"
            await _set_state(user, state, db)
            await tg.answer_callback_query(cbq_id)
            if message_id:
                try:
                    await tg.edit_message_text(
                        chat_id, message_id,
                        "<b>Фото</b> ✓\n\nШаг 5/5: дополнительные пожелания. Что ещё учесть при генерации?\n\n"
                        "Например: <i>столик в стиле Джапанди стоит у дивана</i>.\n"
                        "Если ничего — нажми «Пропустить».",
                        reply_markup=tg.kb_skip_step("scene_notes"),
                    )
                except Exception:
                    await _ask_scene_notes(chat_id, has_card=False)
        return

    # ── Стиль карточки ──
    if data.startswith("cs:"):
        style = data.split(":", 1)[1]
        if style not in {k for k, _ in tg.CARD_STYLES_BOT}:
            await tg.answer_callback_query(cbq_id, "Неизвестный стиль")
            return
        state["card_style"] = style
        style_label = dict(tg.CARD_STYLES_BOT).get(style, style)

        if style == "template":
            # Уточняем какой именно шаблон из 6
            state["stage"] = "waiting_template"
            await _set_state(user, state, db)
            await tg.answer_callback_query(cbq_id)
            if message_id:
                lines = [f"<b>{style_label}</b> ✓", "", "<b>Какой шаблон карточки?</b>", ""]
                for key, label in tg.TEMPLATES_BOT:
                    tagline = tg.TEMPLATES_TAGLINES.get(key, "")
                    lines.append(f"• <b>{_escape_html(label)}</b> — {_escape_html(tagline)}")
                try:
                    await tg.edit_message_text(
                        chat_id, message_id,
                        "\n".join(lines),
                        reply_markup=tg.kb_templates(),
                    )
                except Exception:
                    await _send_templates(chat_id)
            return

        if style == "reference":
            # Просим прислать фото-референсы готовых карточек
            state["stage"] = "waiting_reference_photos"
            state["reference_paths"] = []
            await _set_state(user, state, db)
            await tg.answer_callback_query(cbq_id)
            text = (
                f"<b>{style_label}</b> ✓\n\n"
                "Пришли фото карточек, стиль которых хочешь повторить — это могут быть скриншоты "
                "карточек других продавцов, скриншоты рекламы, что угодно.\n\n"
                "Можно одним сообщением (альбом) или по одному. Когда закончишь — нажми <b>«Готово»</b>."
            )
            if message_id:
                try:
                    await tg.edit_message_text(chat_id, message_id, text, reply_markup=tg.kb_reference_done(0))
                except Exception:
                    await tg.send_message(chat_id, text, reply_markup=tg.kb_reference_done(0))
            else:
                await tg.send_message(chat_id, text, reply_markup=tg.kb_reference_done(0))
            return

        # "ИИ" — сразу к marketing-агенту
        state["stage"] = "proposing_marketing"
        await _set_state(user, state, db)
        await tg.answer_callback_query(cbq_id)
        if message_id:
            try:
                await tg.edit_message_text(
                    chat_id, message_id,
                    f"<b>{style_label}</b> ✓\n\nИИ генерирует предложения для заголовка и УТП по твоему фото… ~5 секунд.",
                    reply_markup=None,
                )
            except Exception:
                pass
        import asyncio
        asyncio.create_task(_propose_marketing_async(user.id, chat_id))
        return

    # ── «Готово» на шаге фото-референсов ──
    if data == "ref_done":
        if state.get("stage") != "waiting_reference_photos":
            await tg.answer_callback_query(cbq_id)
            return
        refs = state.get("reference_paths") or []
        if not refs:
            await tg.answer_callback_query(cbq_id, "Сначала пришли хотя бы одно фото-референс")
            return
        state["stage"] = "proposing_marketing"
        await _set_state(user, state, db)
        await tg.answer_callback_query(cbq_id)
        if message_id:
            try:
                await tg.edit_message_text(
                    chat_id, message_id,
                    f"Принято {len(refs)} фото-референс(а). Применю их к стилю карточки.\n\n"
                    "ИИ генерирует предложения для заголовка и УТП… ~5 секунд.",
                    reply_markup=None,
                )
            except Exception:
                pass
        import asyncio
        asyncio.create_task(_propose_marketing_async(user.id, chat_id))
        return

    # ── Конкретный шаблон (после cs:template) ──
    if data.startswith("tpl:"):
        if state.get("stage") != "waiting_template":
            await tg.answer_callback_query(cbq_id)
            return
        tpl_key = data.split(":", 1)[1]
        if tpl_key not in {k for k, _ in tg.TEMPLATES_BOT}:
            await tg.answer_callback_query(cbq_id, "Неизвестный шаблон")
            return
        state["template_key"] = tpl_key
        state["stage"] = "proposing_marketing"
        await _set_state(user, state, db)
        await tg.answer_callback_query(cbq_id)
        tpl_label = dict(tg.TEMPLATES_BOT).get(tpl_key, tpl_key)
        if message_id:
            try:
                await tg.edit_message_text(
                    chat_id, message_id,
                    f"Шаблон: <b>{tpl_label}</b> ✓\n\n"
                    "ИИ генерирует предложения для заголовка и УТП по твоему фото… ~5 секунд.",
                    reply_markup=None,
                )
            except Exception:
                pass
        import asyncio
        asyncio.create_task(_propose_marketing_async(user.id, chat_id))
        return

    # ── «Редактировать» на шаге Название/УТП ──
    # Шлём ОДНО сообщение: моноширинный текст для копирования + инструкция.
    # БЕЗ force_reply — он заставляет Telegram показывать раздражающую цитату-реплай
    # на сообщение бота. FSM ловит любой текст в нужной стадии без всяких reply.
    if data.startswith("edit:"):
        which = data.split(":", 1)[1]
        if which == "title" and state.get("stage") == "waiting_card_title":
            proposed = (state.get("proposed_title") or "").strip()
            await tg.answer_callback_query(cbq_id)
            text_lines = []
            if proposed:
                text_lines.append(f"Текущее название (тапни по нему чтобы скопировать):\n<code>{_escape_html(proposed)}</code>\n")
            text_lines.append("Пришли своё новое название следующим сообщением 👇")
            await tg.send_message(chat_id, "\n".join(text_lines))
            return
        if which == "utp" and state.get("stage") == "waiting_utp":
            utp = state.get("proposed_utp") or []
            await tg.answer_callback_query(cbq_id)
            text_lines = []
            if utp:
                joined = chr(10).join(utp)
                text_lines.append(f"Текущие УТП (тапни чтобы скопировать):\n<code>{_escape_html(joined)}</code>\n")
            text_lines.append("Пришли свои УТП следующим сообщением — по одному на строку или через запятую 👇")
            await tg.send_message(chat_id, "\n".join(text_lines))
            return
        await tg.answer_callback_query(cbq_id)
        return

    # ── Принять предложенное (title или utp) ──
    if data.startswith("accept:"):
        which = data.split(":", 1)[1]
        if which == "title" and state.get("stage") == "waiting_card_title":
            proposed_title = (state.get("proposed_title") or "").strip()
            state["title_text"] = proposed_title
            state["stage"] = "waiting_utp"
            await _set_state(user, state, db)
            await tg.answer_callback_query(cbq_id, "Принято")
            if message_id:
                try:
                    await tg.edit_message_text(
                        chat_id, message_id,
                        f"Название: <b>{_escape_html(proposed_title) or '—'}</b> ✓",
                        reply_markup=None,
                    )
                except Exception:
                    pass
            await _ask_utp(chat_id, state.get("proposed_utp") or [])
            return
        if which == "utp" and state.get("stage") == "waiting_utp":
            proposed_utp = state.get("proposed_utp") or []
            state["utp_text"] = "\n".join(proposed_utp)
            state["stage"] = "waiting_scene_notes"
            await _set_state(user, state, db)
            await tg.answer_callback_query(cbq_id, "Принято")
            if message_id and proposed_utp:
                bullets = "\n".join(f"• {_escape_html(u)}" for u in proposed_utp)
                try:
                    await tg.edit_message_text(
                        chat_id, message_id,
                        f"УТП ✓\n{bullets}",
                        reply_markup=None,
                    )
                except Exception:
                    pass
            await _ask_scene_notes(chat_id, has_card=True)
            return

    # ── Пропустить (только scene_notes) ──
    if data.startswith("skip:"):
        which = data.split(":", 1)[1]
        if which == "scene_notes" and state.get("stage") == "waiting_scene_notes":
            state["scene_notes"] = ""
            state["stage"] = "generating"
            await _set_state(user, state, db)
            await tg.answer_callback_query(cbq_id, "Запускаю...")
            if message_id:
                try:
                    await tg.edit_message_text(chat_id, message_id, "Запускаю генерацию...", reply_markup=None)
                except Exception:
                    pass
            import asyncio
            asyncio.create_task(_start_generation_async(user.id, chat_id))
            return

    await tg.answer_callback_query(cbq_id)
