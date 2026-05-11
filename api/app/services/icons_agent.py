"""
AI-генератор line-art иконок для УТП.

Делает один запрос к gemini-3-pro-image (Pro даёт лучшую консистентность стиля для иконок),
просим нарисовать сетку из N иконок в едином line-art стиле на прозрачном/белом фоне.
Потом разрезаем grid → N отдельных PNG.

NB: Nano Banana не умеет реально prozrachny PNG. Делаем светло-серый фон #F8F7F4 — он сольётся с
бэджами в overlay-редакторе и в финальной карточке.
"""
from __future__ import annotations
import io
import os
import uuid
from typing import Sequence

from google.genai import types
from PIL import Image

from app.core.config import settings
from app.core.gemini import gemini_client as _client


def _build_icons_prompt(utps: Sequence[str], grid_cols: int = 2) -> str:
    """Промт для рисования набора иконок в едином стиле."""
    bullets = "\n".join(f"  {i+1}. {u}" for i, u in enumerate(utps))
    n = len(utps)
    rows = (n + grid_cols - 1) // grid_cols
    return f"""Render a clean {grid_cols}×{rows} grid of {n} hand-drawn LINE-ART ICONS for a marketplace product card.

ABSOLUTE STYLE LOCKS (these matter most):
- ALL ICONS share IDENTICAL illustration style: same stroke weight (~3px), same single accent color
  (warm taupe #8B7355). No fill, no shadow, no 3D, no gradient, no emoji, no clipart.
- Each icon centered in its grid cell with comfortable padding.
- Background: solid uniform soft off-white #FAF8F4. NO scenes, NO text, NO patterns.
- Equal spacing, identical cell sizes. Crisp clean lines, geometric and elegant.
- Square format. High resolution.

Each icon is a hand-drawn symbol that conveys the meaning of its USP (top-to-bottom, left-to-right):
{bullets}

ABSOLUTELY NO TEXT in the image. Only the {n} icon symbols on the calm background."""


async def generate_utp_icons(
    utps: Sequence[str],
    *,
    project_id: int,
    aspect_ratio: str = "1:1",
) -> list[str]:
    """
    Генерирует одну сетку иконок и нарезает на N отдельных PNG.
    Возвращает список путей к файлам в uploads/{project_id}/icons/
    """
    utps = [str(u).strip() for u in utps if str(u).strip()][:5]
    if not utps:
        return []

    prompt = _build_icons_prompt(utps, grid_cols=2)

    img_cfg = None
    try:
        img_cfg = types.ImageConfig(aspect_ratio=aspect_ratio)
    except Exception:
        pass
    cfg_kwargs = dict(response_modalities=["image"], temperature=0.4)
    if img_cfg is not None:
        cfg_kwargs["image_config"] = img_cfg

    response = await _client.aio.models.generate_content(
        model=settings.IMAGE_MODEL_PRO,  # для иконок Pro качество выше
        contents=[prompt],
        config=types.GenerateContentConfig(**cfg_kwargs),
    )

    image_bytes: bytes | None = None
    for part in response.candidates[0].content.parts:
        if part.inline_data and part.inline_data.data:
            image_bytes = part.inline_data.data
            break
    if not image_bytes:
        raise RuntimeError("Модель не вернула изображение для иконок")

    # Режем сетку
    img = Image.open(io.BytesIO(image_bytes)).convert("RGBA")
    w, h = img.size
    n = len(utps)
    cols = 2
    rows = (n + cols - 1) // cols
    cell_w, cell_h = w // cols, h // rows

    out_dir = os.path.join(settings.UPLOAD_DIR, str(project_id), "icons")
    os.makedirs(out_dir, exist_ok=True)
    paths: list[str] = []
    for i in range(n):
        r, c = i // cols, i % cols
        crop = img.crop((c * cell_w, r * cell_h, (c + 1) * cell_w, (r + 1) * cell_h))
        # Если последний ряд недозаполнен — пустые иконки игнорируются (i < n)
        fname = f"icon_{uuid.uuid4().hex}.png"
        fpath = os.path.join(out_dir, fname)
        crop.save(fpath, "PNG")
        paths.append(fpath)

    return paths
