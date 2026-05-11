import os
import uuid
import aiofiles
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel

from app.database import get_db
from app.models.user import User
from app.models.project import Project, Upload
from app.core.security import get_current_user
from app.core.config import settings

router = APIRouter(prefix="/projects", tags=["projects"])

ALLOWED_TYPES = {"image/jpeg", "image/png", "image/webp"}
CATEGORIES = {"clothing", "furniture", "cosmetics", "food", "electronics", "other"}
FLOWS = {"single", "series"}
MODELS = {"pro", "flash"}


class ProjectCreate(BaseModel):
    name: str
    category: str
    flow: str = "single"
    model: str = "pro"


class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    utp: Optional[list[str]] = None
    model: Optional[str] = None  # "pro" | "flash"
    category: Optional[str] = None  # "clothing" | "furniture" | "cosmetics" | "food" | "electronics"
    # Series-flow: 5 концепций для комплекта карточек. Юзер может править их перед запуском.
    concepts: Optional[list] = None


class UploadDTO(BaseModel):
    id: int
    url: str  # /media/{relative_path} — для рендера thumbnail на фронте
    original_filename: Optional[str] = None


class ProjectResponse(BaseModel):
    id: int
    name: str
    category: str
    flow: str = "single"
    model: str = "pro"
    visual_anchor: Optional[str]
    upload_count: int
    uploads: list[UploadDTO] = []  # реальные фото для preview в UI
    title: Optional[str] = None
    utp: Optional[list] = None
    utp_icons: Optional[list] = None
    market_research: Optional[str] = None
    concepts: Optional[list] = None
    brand_kit: Optional[dict] = None  # ДНК-стиль карточки (см. prompt_builder.STARTER_KITS)

    class Config:
        from_attributes = True


def _upload_to_dto(u: Upload) -> UploadDTO:
    """Превратить Upload в UploadDTO с публичным URL.
    file_path форматов: /uploads/{pid}/file.jpg ИЛИ абсолютный с .../uploads/{pid}/file.jpg
    """
    p = (u.file_path or "").replace("\\", "/")
    rel = p.split("/uploads/")[-1].lstrip("/")
    return UploadDTO(id=u.id, url=f"/media/{rel}", original_filename=u.original_filename)


def _uploads_to_dto(uploads: list) -> list[UploadDTO]:
    return [_upload_to_dto(u) for u in uploads]


@router.post("", response_model=ProjectResponse, status_code=201)
async def create_project(
    data: ProjectCreate,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    if data.category not in CATEGORIES:
        raise HTTPException(400, f"Категория должна быть одной из: {', '.join(CATEGORIES)}")
    if data.flow not in FLOWS:
        raise HTTPException(400, f"flow должен быть одним из: {', '.join(FLOWS)}")
    if data.model not in MODELS:
        raise HTTPException(400, f"model должен быть одним из: {', '.join(MODELS)}")

    project = Project(user_id=user.id, name=data.name, category=data.category, flow=data.flow, model=data.model)
    db.add(project)
    await db.commit()
    await db.refresh(project)

    return _build_response(project, [])


@router.get("", response_model=list[ProjectResponse])
async def list_projects(user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Project).where(Project.user_id == user.id).order_by(Project.created_at.desc()))
    projects = result.scalars().all()
    out = []
    for p in projects:
        ups = await _load_uploads(db, p.id)
        out.append(_build_response(p, ups))
    return out


@router.get("/{project_id}", response_model=ProjectResponse)
async def get_project(project_id: int, user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    project = await _get_project_or_404(project_id, user.id, db)
    ups = await _load_uploads(db, project.id)
    return _build_response(project, ups)


@router.post("/{project_id}/upload")
async def upload_photo(
    project_id: int,
    file: UploadFile = File(...),
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    project = await _get_project_or_404(project_id, user.id, db)

    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(400, "Принимаются только JPEG, PNG, WebP")

    content = await file.read()
    if len(content) > settings.MAX_UPLOAD_SIZE_MB * 1024 * 1024:
        raise HTTPException(400, f"Файл больше {settings.MAX_UPLOAD_SIZE_MB} МБ")

    project_dir = os.path.join(settings.UPLOAD_DIR, str(project.id))
    os.makedirs(project_dir, exist_ok=True)

    ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else "jpg"
    filename = f"{uuid.uuid4()}.{ext}"
    file_path = os.path.join(project_dir, filename)

    async with aiofiles.open(file_path, "wb") as f:
        await f.write(content)

    upload = Upload(project_id=project.id, file_path=file_path, original_filename=file.filename)
    db.add(upload)
    await db.commit()
    await db.refresh(upload)

    return {"upload_id": upload.id, "filename": filename, "size_kb": len(content) // 1024}


@router.delete("/{project_id}/uploads/{upload_id}", response_model=ProjectResponse)
async def delete_upload(
    project_id: int,
    upload_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    project = await _get_project_or_404(project_id, user.id, db)
    upload_result = await db.execute(
        select(Upload).where(Upload.id == upload_id, Upload.project_id == project.id)
    )
    upload = upload_result.scalar_one_or_none()
    if upload is None:
        raise HTTPException(404, "Фото не найдено")

    try:
        if upload.file_path and os.path.exists(upload.file_path):
            os.remove(upload.file_path)
    except OSError:
        pass

    await db.delete(upload)
    await db.commit()
    ups = await _load_uploads(db, project.id)
    return _build_response(project, ups)


@router.patch("/{project_id}", response_model=ProjectResponse)
async def update_project(
    project_id: int,
    data: ProjectUpdate,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    project = await _get_project_or_404(project_id, user.id, db)
    if data.title is not None:
        project.title = data.title[:255]
    if data.utp is not None:
        project.utp = [str(x)[:120] for x in data.utp][:7]
    if data.model is not None:
        if data.model not in ("pro", "flash"):
            raise HTTPException(400, "model должен быть 'pro' или 'flash'")
        project.model = data.model
    if data.category is not None:
        if data.category not in CATEGORIES:
            raise HTTPException(400, "Неизвестная категория")
        project.category = data.category
    if data.concepts is not None:
        # Принимаем правки 5 концепций для series-flow. Лимит 7 на всякий случай.
        project.concepts = data.concepts[:7]
    await db.commit()
    await db.refresh(project)
    ups = await _load_uploads(db, project.id)
    return _build_response(project, ups)


@router.post("/{project_id}/marketing", response_model=ProjectResponse)
async def generate_marketing_endpoint(
    project_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """AI-агент: предложить заголовок и УТП по первому загруженному фото."""
    from app.services.marketing_agent import generate_marketing
    project = await _get_project_or_404(project_id, user.id, db)
    uploads_result = await db.execute(select(Upload).where(Upload.project_id == project.id))
    uploads = uploads_result.scalars().all()
    if not uploads:
        raise HTTPException(400, "Сначала загрузи хотя бы одно фото товара")
    primary = uploads[0]
    with open(primary.file_path, "rb") as f:
        img = f.read()
    mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(
        primary.file_path.rsplit(".", 1)[-1].lower(), "image/jpeg"
    )
    try:
        result = await generate_marketing(img, mime, project.category, project.name)
    except Exception as e:
        raise HTTPException(500, f"Ошибка marketing-агента: {e}")
    # title теперь короткий (2-4 слова) + опциональный subtitle (2-4 слова).
    # Объединяем через "\n" — фронт и оверлей разбирают и рисуют 2 строки.
    title = (result.get("title") or "").strip()
    subtitle = (result.get("subtitle") or "").strip()
    project.title = (title + "\n" + subtitle) if subtitle else title
    # сохраняем УТП с emoji-иконками вместе через разделитель «\t»
    # формат utp элемента: "icon\tтекст" — фронт парсит
    icons = result.get("icons") or [""] * len(result["utp"])
    project.utp = [f"{(icons[i] if i < len(icons) else '')}\t{u}" for i, u in enumerate(result["utp"])]
    await db.commit()
    await db.refresh(project)
    return _build_response(project, uploads)


@router.post("/{project_id}/research", response_model=ProjectResponse)
async def run_research_endpoint(
    project_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Mini market research + 6 concepts для batch-генерации."""
    from app.services.research_agent import run_market_research
    project = await _get_project_or_404(project_id, user.id, db)
    uploads_result = await db.execute(select(Upload).where(Upload.project_id == project.id))
    uploads = uploads_result.scalars().all()
    if not uploads:
        raise HTTPException(400, "Сначала загрузи хотя бы одно фото товара")
    primary = uploads[0]
    with open(primary.file_path, "rb") as f:
        img = f.read()
    mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(
        primary.file_path.rsplit(".", 1)[-1].lower(), "image/jpeg"
    )
    try:
        result = await run_market_research(img, mime, project.category, project.name)
    except Exception as e:
        raise HTTPException(500, f"Ошибка research-агента: {e}")
    project.market_research = result["research"]
    project.concepts = result["concepts"]
    await db.commit()
    await db.refresh(project)
    return _build_response(project, uploads)


@router.post("/{project_id}/icons", response_model=ProjectResponse)
async def generate_icons(
    project_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Генерирует line-art иконки для текущих УТП проекта (через Nano Banana)."""
    from app.services.icons_agent import generate_utp_icons
    project = await _get_project_or_404(project_id, user.id, db)
    if not project.utp:
        raise HTTPException(400, "Сначала сгенерируй УТП")
    # из формата 'icon\\ttext' берём только text-часть
    raw_utps = [str(u).split("\t", 1)[-1] for u in (project.utp or [])][:5]
    try:
        paths = await generate_utp_icons(raw_utps, project_id=project.id)
    except Exception as e:
        raise HTTPException(500, f"Ошибка генерации иконок: {e}")
    project.utp_icons = paths
    await db.commit()
    await db.refresh(project)
    ups = await _load_uploads(db, project.id)
    return _build_response(project, ups)


# ──────────────────────────────────────────────────────────────────────────────
# Series-pack — комплект из 5 карточек одной кнопкой (только для flow="series").
# ──────────────────────────────────────────────────────────────────────────────

class SeriesPackRequest(BaseModel):
    """Параметры комплекта. Все опционально — дефолты подходят для типичного случая."""
    with_icons: bool = True            # Карточка с оверлеем (заголовок + УТП)
    card_style: Optional[str] = None
    brand_kit: Optional[dict] = None


class SeriesPackResponse(BaseModel):
    research: str
    concepts: list
    generation_ids: list[int]


@router.post("/{project_id}/series-pack", response_model=SeriesPackResponse, status_code=202)
async def start_series_pack(
    project_id: int,
    data: SeriesPackRequest,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Запускает «комплект из 5 карточек» одной кнопкой:
    1) research-агент → 5 концепций (hero / utp / utp / utp / macro)
    2) списываются кредиты ×5
    3) создаются 5 pending-генераций
    4) все 5 запускаются параллельно через asyncio.create_task

    Возвращает research + concepts + список generation_id для polling'а на фронте.
    """
    import asyncio
    from app.services.research_agent import run_market_research
    from app.models.generation import Generation
    from app.routers.generations import (
        cost_for, ALL_SCENARIOS, _run_in_background,
    )

    project = await _get_project_or_404(project_id, user.id, db)
    if (project.flow or "single") != "series":
        raise HTTPException(400, "series-pack доступен только для проектов с flow=series")

    uploads_result = await db.execute(select(Upload).where(Upload.project_id == project.id))
    uploads = uploads_result.scalars().all()
    if not uploads:
        raise HTTPException(400, "Сначала загрузи хотя бы одно фото товара")

    # 1) Research — получаем 5 концепций со структурой hero/utp×3/macro
    primary = uploads[0]
    with open(primary.file_path, "rb") as f:
        img = f.read()
    mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(
        primary.file_path.rsplit(".", 1)[-1].lower(), "image/jpeg"
    )
    try:
        research_result = await run_market_research(img, mime, project.category, project.name)
    except Exception as e:
        raise HTTPException(500, f"Ошибка research-агента: {e}")

    project.market_research = research_result["research"]
    project.concepts = research_result["concepts"]
    await db.commit()
    await db.refresh(project)

    # 2) Списание кредитов ×5
    pack_size = len(research_result["concepts"])
    per_gen = cost_for(project)
    total_cost = per_gen * pack_size
    if (user.credits or 0) < total_cost:
        raise HTTPException(
            402,
            f"Недостаточно кредитов. Нужно {total_cost} ({pack_size}×{per_gen}), есть {user.credits or 0}",
        )
    user.credits = (user.credits or 0) - total_cost
    await db.commit()

    # 3) Создаём 5 Generation pending — порядок важен (hero первой).
    # Маппинг данных в Generation зависит от role концепции:
    #   hero  — заголовок + 3 УТП-плашки (как мини-инфографика для маркетплейса)
    #   utp   — короткий заголовок УТП (2-3 слова) + 2 буллета поддержки
    #   macro — заголовок-деталь, без УТП-плашек
    #
    # Поле generation.utp[] — это список строк, каждая отображается как пилл
    # на оверлее карточки. Мы упаковываем в него:
    #   hero  → 3 УТП-заголовка (по одной из каждой utp концепции)
    #   utp   → [title_утп] + bullets[]  ИЛИ просто [title] если буллетов нет
    #   macro → [title детали]
    created_ids: list[int] = []
    tasks_args: list[tuple] = []
    for c in research_result["concepts"]:
        scenario = c.get("scenario") or "clothing_packshot"
        if scenario not in ALL_SCENARIOS:
            scenario = "clothing_packshot"

        # Title для оверлея — title + subtitle через \n (как marketing-агент).
        title_part = (c.get("title") or "").strip()
        subtitle_part = (c.get("subtitle") or "").strip()
        title_arg = (title_part + "\n" + subtitle_part) if subtitle_part else (title_part or None)

        # УТП-список зависит от роли
        role = (c.get("role") or "utp").strip().lower()
        utp_arg: Optional[list[str]] = None
        if role == "hero":
            # На hero — 3 УТП-заголовка (для мини-инфографики)
            all_utps = [str(u).strip() for u in (c.get("all_utps") or []) if str(u).strip()][:3]
            utp_arg = all_utps or None
        elif role == "utp":
            # title уже содержит ЗАГОЛОВОК УТП (2-3 слова), а bullets[] — это
            # подробности этого УТП. Передаём bullets как utp[] для overlay'а.
            bullets = [str(b).strip() for b in (c.get("bullets") or []) if str(b).strip()][:2]
            utp_arg = bullets or [c.get("utp_primary") or title_part]
        elif role == "macro":
            # На macro обычно только заголовок детали, без буллетов.
            bullets = [str(b).strip() for b in (c.get("bullets") or []) if str(b).strip()][:1]
            utp_arg = bullets or None

        gen = Generation(
            project_id=project_id,
            scenario=scenario,
            status="pending",
            credits_used=per_gen,
            scene_description=c.get("scene_description"),
            title=title_arg,
            utp=utp_arg,
            with_icons=bool(data.with_icons),
            card_style=data.card_style,
        )
        db.add(gen)
        await db.commit()
        await db.refresh(gen)
        created_ids.append(gen.id)
        tasks_args.append((
            gen.id, project_id, scenario, c.get("scene_description") or "",
            title_arg,
            utp_arg,
            bool(data.with_icons),
            data.card_style,
            data.brand_kit,
        ))

    # 4) Запускаем все 5 ПАРАЛЛЕЛЬНО — в фоне, ответ возвращаем сразу.
    for args in tasks_args:
        asyncio.create_task(_run_in_background(*args))

    return SeriesPackResponse(
        research=research_result["research"],
        concepts=research_result["concepts"],
        generation_ids=created_ids,
    )


async def _get_project_or_404(project_id: int, user_id: int, db: AsyncSession) -> Project:
    result = await db.execute(
        select(Project).where(Project.id == project_id, Project.user_id == user_id)
    )
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(404, "Проект не найден")
    return project


async def _load_uploads(db: AsyncSession, project_id: int) -> list[Upload]:
    res = await db.execute(
        select(Upload).where(Upload.project_id == project_id).order_by(Upload.id)
    )
    return list(res.scalars().all())


def _build_response(project: Project, uploads: list[Upload]) -> ProjectResponse:
    return ProjectResponse(
        id=project.id, name=project.name, category=project.category,
        flow=project.flow, model=project.model,
        visual_anchor=project.visual_anchor,
        upload_count=len(uploads),
        uploads=_uploads_to_dto(uploads),
        title=project.title, utp=project.utp, utp_icons=project.utp_icons,
        market_research=project.market_research, concepts=project.concepts,
        brand_kit=project.brand_kit,
    )


# ── Brand Kit эндпоинты ───────────────────────────────────────────────────────

@router.get("/{project_id}/brand-kit")
async def get_brand_kit(project_id: int, user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    """Возвращает текущий brand kit проекта (или null, если ещё не подобран)."""
    project = await _get_project_or_404(project_id, user.id, db)
    return {"brand_kit": project.brand_kit}


@router.put("/{project_id}/brand-kit")
async def set_brand_kit(
    project_id: int,
    payload: dict,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Сохраняет brand kit проекта.
    Тело запроса либо {brand_kit: {...}}, либо {starter: "minimal_premium"} —
    в последнем случае берётся копия starter-пресета.
    """
    from app.services.prompt_builder import starter_kit, STARTER_KITS
    project = await _get_project_or_404(project_id, user.id, db)

    if "starter" in payload and payload["starter"]:
        if payload["starter"] not in STARTER_KITS:
            raise HTTPException(400, f"Неизвестный starter-пресет: {payload['starter']}")
        kit = starter_kit(payload["starter"])
        # Если у проекта есть фото товара — AI-агент подберёт PALETTE под товар,
        # сохраняя структуру пресета (decoration/typography/mood). Это решает проблему
        # «пресет с синим accent на красном товаре» — accent адаптируется. Если AI упал
        # или фото нет — оставляем дефолтную палитру пресета.
        palette_auto = False
        uploads = await _load_uploads(db, project.id)
        if uploads:
            from app.services.brand_kit_agent import propose_palette
            primary = uploads[0]
            try:
                with open(primary.file_path, "rb") as f:
                    img = f.read()
                mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(
                    primary.file_path.rsplit(".", 1)[-1].lower(), "image/jpeg"
                )
                ai_palette = await propose_palette(
                    img, mime, project.category, project.name or "", payload["starter"],
                )
                if ai_palette and isinstance(ai_palette, dict):
                    # Мерджим: AI-палитра поверх пресета (только цвета, не структура)
                    kit["palette"] = {**kit.get("palette", {}), **{
                        k: v for k, v in ai_palette.items()
                        if k in ("text_dark", "text_light", "accent_1", "accent_2", "plaque_bg") and v
                    }}
                    palette_auto = True
            except Exception as e:
                print(f"[brand-kit] propose_palette failed: {type(e).__name__}: {e}")
        kit["_meta"] = {
            "starter_preset": payload["starter"],
            "auto_generated": False,
            "palette_auto": palette_auto,
        }
        project.brand_kit = kit
    elif "brand_kit" in payload and isinstance(payload["brand_kit"], dict):
        project.brand_kit = payload["brand_kit"]
    else:
        raise HTTPException(400, "Передай либо `brand_kit` (объект), либо `starter` (имя пресета)")

    await db.commit()
    await db.refresh(project)
    return {"brand_kit": project.brand_kit}


@router.post("/{project_id}/brand-kit/freeform")
async def freeform_brand_kit(
    project_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Режим «ИИ с нуля». Не выбирает пресет, а ставит маркер ai_freeform.
    При генерации `card_brief_agent` напишет свободный бриф для Banana,
    и она сама сверстает оверлей под конкретное фото — без жёстких пилл-плашек.
    """
    project = await _get_project_or_404(project_id, user.id, db)
    kit = {
        "_meta": {
            "mode": "ai_freeform",
            "auto_generated": True,
            "rationale": "ИИ-режим: бриф для Banana пишется при каждой генерации индивидуально под фото.",
        }
    }
    project.brand_kit = kit
    await db.commit()
    await db.refresh(project)
    return {"brand_kit": kit}


@router.post("/{project_id}/brand-kit/auto")
async def auto_brand_kit(
    project_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """[DEPRECATED] AI-агент анализирует первое фото проекта + категорию + название
    и предлагает один из 6 пресетов. Оставлен для обратной совместимости —
    новый UI зовёт /brand-kit/freeform.
    """
    from app.services.brand_kit_agent import propose_brand_kit
    project = await _get_project_or_404(project_id, user.id, db)

    uploads = await _load_uploads(db, project.id)
    if not uploads:
        raise HTTPException(400, "Сначала загрузи хотя бы одно фото товара")

    primary = uploads[0]
    with open(primary.file_path, "rb") as f:
        img = f.read()
    mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(
        primary.file_path.rsplit(".", 1)[-1].lower(), "image/jpeg"
    )

    try:
        kit = await propose_brand_kit(img, mime, project.category, project.name or "")
    except Exception as e:
        raise HTTPException(500, f"AI-агент сломался: {e}")

    project.brand_kit = kit
    await db.commit()
    await db.refresh(project)
    return {"brand_kit": kit}


@router.post("/{project_id}/brand-kit/from-reference")
async def brand_kit_from_reference(
    project_id: int,
    reference: UploadFile = File(...),
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """AI-агент анализирует ДВЕ картинки: фото товара (первое из проекта) +
    загруженный референс (готовая карточка / любая картинка с подходящим стилем)
    → возвращает Brand Kit, который перенял visual DNA референса, но цветовую
    палитру адаптировал под материал товара.
    """
    from app.services.brand_kit_agent import propose_brand_kit
    project = await _get_project_or_404(project_id, user.id, db)

    uploads = await _load_uploads(db, project.id)
    if not uploads:
        raise HTTPException(400, "Сначала загрузи хотя бы одно фото товара")

    # Фото товара
    primary = uploads[0]
    with open(primary.file_path, "rb") as f:
        product_bytes = f.read()
    product_mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg", "png": "image/png", "webp": "image/webp"}.get(
        primary.file_path.rsplit(".", 1)[-1].lower(), "image/jpeg"
    )

    # Картинка-референс (multipart upload)
    ref_bytes = await reference.read()
    if not ref_bytes:
        raise HTTPException(400, "Пустой файл референса")
    if len(ref_bytes) > 12 * 1024 * 1024:
        raise HTTPException(413, "Референс слишком большой (>12 МБ)")
    ref_mime = (reference.content_type or "image/jpeg").lower()
    if not ref_mime.startswith("image/"):
        raise HTTPException(415, f"Ожидается image/*, получено {ref_mime}")

    try:
        kit = await propose_brand_kit(
            product_bytes, product_mime, project.category, project.name or "",
            reference_image_bytes=ref_bytes, reference_mime_type=ref_mime,
        )
    except Exception as e:
        raise HTTPException(500, f"AI-агент сломался: {e}")

    project.brand_kit = kit
    await db.commit()
    await db.refresh(project)
    return {"brand_kit": kit}


@router.get("/_starters/brand-kits")
async def list_brand_kit_starters(_: User = Depends(get_current_user)):
    """Возвращает 6 стартовых пресетов для UI-селектора (label, tagline, sample kit)."""
    from app.services.prompt_builder import STARTER_KITS_META, STARTER_KITS
    out = []
    for meta in STARTER_KITS_META:
        out.append({**meta, "kit": STARTER_KITS[meta["key"]]})
    return out
