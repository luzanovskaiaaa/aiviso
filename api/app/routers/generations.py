import asyncio
import io
import os
import zipfile
from typing import Optional
from urllib.parse import quote
from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from PIL import Image

from app.core.config import settings
from app.database import get_db, AsyncSessionLocal
from app.models.user import User
from app.models.project import Project
from app.models.generation import Generation
from app.core.security import get_current_user
from app.services.generation_service import run_generation

router = APIRouter(prefix="/projects/{project_id}/generations", tags=["generations"])

VALID_SCENARIOS = {
    "clothing": [
        # новые
        "clothing_ghost", "clothing_studio", "clothing_model", "clothing_usage",
        # legacy aliases
        "clothing_packshot", "clothing_lifestyle", "clothing_macro",
    ],
    "furniture": [
        "furniture_white_cube", "furniture_studio", "furniture_interior",
        "furniture_outdoor", "furniture_usage",
        "furniture_packshot", "furniture_lifestyle", "furniture_macro",
    ],
    "cosmetics": [
        "cosmetics_white_cube", "cosmetics_studio", "cosmetics_interior",
        "cosmetics_model", "cosmetics_usage",
        "cosmetics_packshot", "cosmetics_lifestyle",
    ],
    "food": [
        "food_white_cube", "food_studio", "food_serving", "food_usage",
        "food_packshot", "food_lifestyle",
    ],
    "electronics": [
        "electronics_white_cube", "electronics_studio", "electronics_workspace",
        "electronics_usage",
        "electronics_packshot", "electronics_lifestyle",
    ],
    "other": [
        "other_white_cube", "other_studio", "other_lifestyle", "other_usage",
    ],
}
ALL_SCENARIOS = [s for lst in VALID_SCENARIOS.values() for s in lst] + ["background_swap"]

# Тариф в кредитах. Зависит от модели генерации.
# Цена кредита плавает по пакету (от 4.27 до 6.50 ₽). Pro-кадр = 6 кр, Flash = 4 кр.
# Себестоимость: Pro ~16 ₽, Flash ~9 ₽.
CREDITS_BY_MODEL = {"flash": 4, "pro": 6}
DEFAULT_CREDITS = CREDITS_BY_MODEL["pro"]


def cost_for(project: Project) -> int:
    """Возвращает стоимость одной генерации в кредитах для модели проекта."""
    return CREDITS_BY_MODEL.get((project.model or "pro").lower(), DEFAULT_CREDITS)


ALLOWED_PHOTO_ASPECTS = {"1:1", "3:4", "4:5", "16:9", "9:16"}


class GenerationRequest(BaseModel):
    scenario: str
    scene_description: str = ""
    title: Optional[str] = None
    utp: Optional[list[str]] = None
    with_icons: bool = False
    # Legacy: имя starter-пресета. Если передан brand_kit — он приоритетнее.
    card_style: Optional[str] = None
    # Override brand kit'а. Если null — используется Project.brand_kit (либо AI-fallback).
    brand_kit: Optional[dict] = None
    # Преемственность модели — для одежды.
    # Если True, бэк инжектит в clothing-промт инструкцию использовать ту же модель,
    # что и в предыдущих генерациях этого проекта (единая внешность для серии кадров).
    preserve_model: Optional[bool] = False
    # Соотношение сторон. Используется только для photo-режима (with_icons=False).
    # Для card-режима (with_icons=True) всегда 3:4 — это листинг WB/Ozon.
    # Допустимые: "1:1", "3:4", "4:5", "16:9", "9:16". Дефолт для photo — "1:1".
    photo_aspect: Optional[str] = None


class BatchConceptRequest(BaseModel):
    """Запуск batch-генерации по выбранным концепциям."""
    concept_indices: list[int]  # индексы из project.concepts
    with_icons: bool = False
    card_style: Optional[str] = None
    brand_kit: Optional[dict] = None


class GenerationResponse(BaseModel):
    id: int
    scenario: str
    status: str
    qc_score: Optional[float]
    qc_details: Optional[str] = None
    result_paths: Optional[list]
    retry_count: int

    class Config:
        from_attributes = True


async def prepare_generation(
    user: User,
    project: Project,
    data: "GenerationRequest",
    db: AsyncSession,
) -> Generation:
    """Общий путь старта генерации: валидация, списание кредитов, создание Generation.

    Используется и HTTP-роутером, и Telegram-ботом. Сам запуск фонового таска делает
    caller (через BackgroundTasks или asyncio.create_task — см. _run_in_background).
    Поднимает HTTPException на бизнес-ошибках, чтобы единое сообщение шло в обе среды.
    """
    if data.scenario not in ALL_SCENARIOS:
        raise HTTPException(400, f"Неверный сценарий. Доступные: {', '.join(ALL_SCENARIOS)}")

    # Photo aspect — только для photo-режима (with_icons=False). В card-режиме всегда 3:4.
    resolved_photo_aspect: Optional[str] = None
    if not bool(data.with_icons):
        candidate = (data.photo_aspect or "").strip()
        if candidate and candidate not in ALLOWED_PHOTO_ASPECTS:
            raise HTTPException(400, f"Недопустимое соотношение сторон. Доступные: {', '.join(sorted(ALLOWED_PHOTO_ASPECTS))}")
        resolved_photo_aspect = candidate or "1:1"  # дефолт для photo

    cost = cost_for(project)
    if (user.credits or 0) < cost:
        raise HTTPException(402, f"Недостаточно кредитов. Нужно: {cost}, есть: {user.credits or 0}")

    user.credits = (user.credits or 0) - cost
    await db.commit()

    gen = Generation(
        project_id=project.id,
        scenario=data.scenario,
        status="pending",
        credits_used=cost,
        scene_description=data.scene_description or None,
        title=data.title,
        utp=data.utp,
        with_icons=bool(data.with_icons),
        card_style=data.card_style,
        photo_aspect=resolved_photo_aspect,
    )
    db.add(gen)
    await db.commit()
    await db.refresh(gen)
    return gen


@router.post("", response_model=GenerationResponse, status_code=202)
async def start_generation(
    project_id: int,
    data: GenerationRequest,
    background_tasks: BackgroundTasks,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    # Проверяем доступ к проекту
    result = await db.execute(select(Project).where(Project.id == project_id, Project.user_id == user.id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(404, "Проект не найден")

    gen = await prepare_generation(user, project, data, db)

    # Запускаем в фоне
    background_tasks.add_task(
        _run_in_background,
        gen.id,
        project_id,
        data.scenario,
        data.scene_description,
        data.title,
        data.utp,
        bool(data.with_icons),
        data.card_style,
        data.brand_kit,
        bool(data.preserve_model),
        gen.photo_aspect,
    )

    return GenerationResponse(
        id=gen.id, scenario=gen.scenario, status=gen.status,
        qc_score=gen.qc_score, qc_details=gen.qc_details,
        result_paths=gen.result_paths, retry_count=gen.retry_count,
    )


@router.get("", response_model=list[GenerationResponse])
async def list_generations(
    project_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(Project).where(Project.id == project_id, Project.user_id == user.id))
    if not result.scalar_one_or_none():
        raise HTTPException(404, "Проект не найден")

    gens = await db.execute(
        select(Generation).where(Generation.project_id == project_id).order_by(Generation.created_at.desc())
    )
    return [
        GenerationResponse(id=g.id, scenario=g.scenario, status=g.status,
                           qc_score=g.qc_score, qc_details=g.qc_details,
                           result_paths=g.result_paths, retry_count=g.retry_count)
        for g in gens.scalars().all()
    ]


@router.get("/{generation_id}", response_model=GenerationResponse)
async def get_generation(
    project_id: int,
    generation_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(select(Project).where(Project.id == project_id, Project.user_id == user.id))
    if not result.scalar_one_or_none():
        raise HTTPException(404, "Проект не найден")

    result = await db.execute(
        select(Generation).where(Generation.id == generation_id, Generation.project_id == project_id)
    )
    gen = result.scalar_one_or_none()
    if not gen:
        raise HTTPException(404, "Генерация не найдена")

    return GenerationResponse(id=gen.id, scenario=gen.scenario, status=gen.status,
                              qc_score=gen.qc_score, qc_details=gen.qc_details,
                              result_paths=gen.result_paths, retry_count=gen.retry_count)


@router.post("/{generation_id}/accept", response_model=GenerationResponse)
async def accept_generation(
    project_id: int,
    generation_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """User explicitly accepts a needs_review generation -> mark done."""
    result = await db.execute(select(Project).where(Project.id == project_id, Project.user_id == user.id))
    if not result.scalar_one_or_none():
        raise HTTPException(404, "Проект не найден")

    result = await db.execute(
        select(Generation).where(Generation.id == generation_id, Generation.project_id == project_id)
    )
    gen = result.scalar_one_or_none()
    if not gen:
        raise HTTPException(404, "Генерация не найдена")

    if gen.status != "needs_review":
        raise HTTPException(400, "Можно принять только генерацию со статусом needs_review")

    gen.status = "done"
    await db.commit()
    await db.refresh(gen)
    return GenerationResponse(id=gen.id, scenario=gen.scenario, status=gen.status,
                              qc_score=gen.qc_score, qc_details=gen.qc_details,
                              result_paths=gen.result_paths, retry_count=gen.retry_count)


async def _run_in_background(
    gen_id: int,
    project_id: int,
    scenario: str,
    scene_description: str,
    title: Optional[str] = None,
    utp: Optional[list] = None,
    with_icons: bool = False,
    card_style: Optional[str] = None,
    brand_kit: Optional[dict] = None,
    preserve_model: bool = False,
    photo_aspect: Optional[str] = None,
):
    async with AsyncSessionLocal() as db:
        try:
            await run_generation(
                gen_id, project_id, scenario, scene_description, db,
                title=title, utp=utp, with_icons=with_icons,
                card_style=card_style or "minimal_premium",
                brand_kit=brand_kit,
                preserve_model=preserve_model,
                photo_aspect=photo_aspect,
            )
        except Exception as e:
            result = await db.execute(select(Generation).where(Generation.id == gen_id))
            gen = result.scalar_one_or_none()
            if gen:
                gen.status = "failed"
                gen.qc_details = str(e)
                await db.commit()


@router.post("/batch", response_model=list[GenerationResponse], status_code=202)
async def batch_generation(
    project_id: int,
    data: BatchConceptRequest,
    background_tasks: BackgroundTasks,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Запускает 1..N генераций параллельно из выбранных концепций проекта."""
    result = await db.execute(select(Project).where(Project.id == project_id, Project.user_id == user.id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(404, "Проект не найден")
    if not project.concepts:
        raise HTTPException(400, "Нет концепций — сначала запусти market research")

    selected = []
    for idx in data.concept_indices:
        if 0 <= idx < len(project.concepts):
            selected.append(project.concepts[idx])
    if not selected:
        raise HTTPException(400, "Не выбрано ни одной концепции")

    per_gen = cost_for(project)
    total_cost = per_gen * len(selected)
    if user.credits < total_cost:
        raise HTTPException(402, f"Недостаточно кредитов. Нужно: {total_cost}, есть: {user.credits}")
    user.credits -= total_cost
    await db.commit()

    created = []
    tasks_args = []
    for c in selected:
        scenario = c.get("scenario") or "clothing_packshot"
        if scenario not in ALL_SCENARIOS:
            scenario = "clothing_packshot"
        # Собираем 1-2 УТП на карточку: primary + опциональный secondary.
        # Если primary нет — фолбек на старое поле utp_focus.
        primary_u = (c.get("utp_primary") or c.get("utp_focus") or "").strip()
        secondary_u = (c.get("utp_secondary") or "").strip()
        utp_list: list[str] = []
        if primary_u:
            utp_list.append(primary_u)
        if secondary_u and secondary_u != primary_u:
            utp_list.append(secondary_u)
        utp_arg: list[str] | None = utp_list or None

        # Заголовок: title + subtitle через "\n" — единый формат с marketing-агентом.
        title_part = (c.get("title") or "").strip()
        subtitle_part = (c.get("subtitle") or "").strip()
        title_arg = (title_part + "\n" + subtitle_part) if subtitle_part else title_part
        title_arg = title_arg or None

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
        tasks_args.append((
            gen.id, project_id, scenario, c.get("scene_description") or "",
            title_arg,
            utp_arg,
            bool(data.with_icons),
            data.card_style,
            data.brand_kit,
        ))
        created.append(GenerationResponse(
            id=gen.id, scenario=gen.scenario, status=gen.status,
            qc_score=gen.qc_score, qc_details=gen.qc_details,
            result_paths=gen.result_paths, retry_count=gen.retry_count,
        ))

    # Запускаем все задачи ПАРАЛЛЕЛЬНО через asyncio.create_task —
    # Vertex AI вызовы делаются одновременно, а не цепочкой.
    for args in tasks_args:
        asyncio.create_task(_run_in_background(*args))

    return created


# ────────────────────────────────────────────────────────────────────
# Экспорт ZIP с готовыми кадрами в размерах WB / Ozon
# ────────────────────────────────────────────────────────────────────

EXPORT_SIZES = {
    "wb":   (900, 1200),     # 3:4 — стандарт WB
    "ozon": (1080, 1440),    # 3:4 — рекомендация Ozon для главных карточек
}


class ExportZipRequest(BaseModel):
    generation_ids: Optional[list[int]] = None  # None = все done-генерации проекта
    marketplace: str = "both"                   # "wb" | "ozon" | "both"


def _resolve_local_path(result_path: str) -> Optional[str]:
    """result_paths хранится как '/uploads/.../file.png'. Достаём физический путь.
    UPLOAD_DIR = '/uploads' (в проде), локально может быть другой — обработаем оба."""
    if not result_path:
        return None
    rel = result_path.lstrip("/")
    if rel.startswith("uploads/"):
        rel = rel[len("uploads/"):]
    candidate = os.path.join(settings.UPLOAD_DIR, rel)
    if os.path.exists(candidate):
        return candidate
    # legacy: путь уже абсолютный
    if os.path.exists(result_path):
        return result_path
    return None


def _resize_for_marketplace(src: Image.Image, target: tuple[int, int]) -> Image.Image:
    """Подгоняет картинку под размер маркетплейса.
    - Если соотношения близки — просто resize.
    - Если отличаются (например 3:4 → 1:1) — center-crop по короткой стороне, потом resize.
    """
    target_w, target_h = target
    src_w, src_h = src.size
    target_ratio = target_w / target_h
    src_ratio = src_w / src_h
    if abs(target_ratio - src_ratio) > 0.01:
        # crop по центру
        if src_ratio > target_ratio:
            # source шире — режем по бокам
            new_w = int(src_h * target_ratio)
            left = (src_w - new_w) // 2
            src = src.crop((left, 0, left + new_w, src_h))
        else:
            # source выше — режем сверху и снизу
            new_h = int(src_w / target_ratio)
            top = (src_h - new_h) // 2
            src = src.crop((0, top, src_w, top + new_h))
    return src.resize(target, Image.LANCZOS)


@router.post("/export-zip")
async def export_zip(
    project_id: int,
    data: ExportZipRequest,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Возвращает ZIP с подогнанными под маркетплейс JPG-кадрами."""
    result = await db.execute(select(Project).where(Project.id == project_id, Project.user_id == user.id))
    project = result.scalar_one_or_none()
    if not project:
        raise HTTPException(404, "Проект не найден")

    mp = (data.marketplace or "both").lower()
    if mp not in {"wb", "ozon", "both"}:
        raise HTTPException(400, "marketplace должен быть wb / ozon / both")
    sizes = {k: v for k, v in EXPORT_SIZES.items() if mp == "both" or mp == k}

    q = select(Generation).where(Generation.project_id == project_id, Generation.status == "done")
    if data.generation_ids:
        q = q.where(Generation.id.in_(data.generation_ids))
    q = q.order_by(Generation.created_at.asc())
    gens = (await db.execute(q)).scalars().all()
    if not gens:
        raise HTTPException(404, "Нет готовых генераций для экспорта")

    buf = io.BytesIO()
    added = 0
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        for idx, g in enumerate(gens, 1):
            if not g.result_paths:
                continue
            src_path = _resolve_local_path(g.result_paths[0])
            if not src_path:
                continue
            try:
                src = Image.open(src_path).convert("RGB")
            except Exception:
                continue
            for mp_key, target in sizes.items():
                resized = _resize_for_marketplace(src, target)
                jpg_buf = io.BytesIO()
                resized.save(jpg_buf, format="JPEG", quality=92, optimize=True)
                fname = f"{mp_key}/{idx:02d}_{g.scenario}_{target[0]}x{target[1]}.jpg"
                zf.writestr(fname, jpg_buf.getvalue())
            added += 1

    if added == 0:
        raise HTTPException(404, "Не удалось прочитать ни одного исходника результатов")

    buf.seek(0)
    safe_name = (project.name or f"project_{project_id}").replace("/", "_")[:60]
    filename = f"aiviso_{safe_name}_{mp}.zip"
    # RFC 5987: filename* для unicode (кириллица), filename — ASCII fallback
    ascii_fallback = f"aiviso_project_{project_id}_{mp}.zip"
    return StreamingResponse(
        buf,
        media_type="application/zip",
        headers={
            "Content-Disposition": (
                f"attachment; filename=\"{ascii_fallback}\"; "
                f"filename*=UTF-8''{quote(filename)}"
            )
        },
    )
