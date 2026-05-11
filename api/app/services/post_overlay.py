"""Post-overlay composer (PIL + Lucide icons via resvg).

Why: для пресетов где image-модель Gemini не справляется с надёжной отрисовкой
overlay (например `bold_accent_caps` — заголовок в accent цвете, который модель
упорно делает белым), мы получаем от AI ТОЛЬКО чистое фото товара (с NO_TEXT_RULE),
а заголовок и УТП-плашки накладываем поверх через PIL. Это даёт 100% контроль
цвета/шрифта/позиции и идеальную кириллицу.

Иконки рендерятся из Lucide SVG (open-source, MIT) через resvg-py — настоящие
line-art иконки, не эмодзи. Маппинг текста УТП на иконку — через ключевые слова.

Триггер: kit.decoration.title_plaque == "accent-color" → run_generation
вызывает compose_bold_accent_caps() после получения image_bytes.
"""
import io
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

import resvg_py

FONTS_DIR = Path(__file__).parent / "fonts"
ICONS_DIR = Path(__file__).parent / "icons"
FONT_TITLE = str(FONTS_DIR / "Roboto-Black.ttf")
FONT_BODY = str(FONTS_DIR / "Roboto-Medium.ttf")


def _hex(c: str) -> tuple:
    """'#FFB400' → (255, 180, 0, 255)"""
    s = c.lstrip("#")
    if len(s) == 3:
        s = "".join(ch * 2 for ch in s)
    return tuple(int(s[i:i+2], 16) for i in (0, 2, 4)) + (255,)


def _wrap(text: str, font: ImageFont.FreeTypeFont, max_w: int, draw: ImageDraw.ImageDraw) -> list[str]:
    words = text.split()
    if not words:
        return []
    lines, cur = [], words[0]
    for w in words[1:]:
        candidate = cur + " " + w
        bbox = draw.textbbox((0, 0), candidate, font=font)
        if (bbox[2] - bbox[0]) <= max_w:
            cur = candidate
        else:
            lines.append(cur)
            cur = w
    lines.append(cur)
    return lines


_QUOTES = "«»“”‘’‚„‹›\"'"


def _strip_quotes(s: str) -> str:
    """Удаляет окружающие декоративные кавычки. «КЕНТУККИ» → КЕНТУККИ."""
    s = (s or "").strip()
    while s and s[0] in _QUOTES:
        s = s[1:]
    while s and s[-1] in _QUOTES:
        s = s[:-1]
    return s.strip()


def _split_utp(item: str) -> str:
    """'🌳\\tНатуральное дерево' → 'Натуральное дерево'. Эмодзи отбрасываем —
    иконку выберем по тексту. Декоративные кавычки тоже удаляем."""
    if not item:
        return ""
    if "\t" in item:
        return _strip_quotes(item.split("\t", 1)[1])
    return _strip_quotes(item)


# ─── Маппинг русских ключевых слов УТП на имя Lucide-иконки ──────────────────
# Порядок важен — первый matching паттерн выигрывает.
ICON_KEYWORDS: list[tuple[str, str]] = [
    # вода / влагостойкость
    (r"\b(влаго|влагост|водо|непромок|water|drop|защ.+(влаг|вод))", "droplet"),
    # дерево / натуральные материалы
    (r"\b(натуральн.+дерев|массив|шпон|дуб|сосн|орех|wood|pine|oak)", "tree-pine"),
    (r"\b(дерев|деревянн)", "tree-pine"),
    (r"\b(эко|органич|leaf|лист)", "leaf"),
    # вырезы / прорези / мехобработка
    (r"\b(вырез|прорез|паз|слот|cut)", "scissors"),
    # спа / ритуалы / сияние
    (r"\b(спа|spa|ритуал|релакс|сия|sparkle)", "sparkles"),
    # тепло / огонь
    (r"\b(тепл|огон|пламен|flame|свеч)", "flame"),
    # защита / прочность / надежность
    (r"\b(защит|прочн|устойчив|надежн|долговечн|shield)", "shield-check"),
    # премиум / качество / награда
    (r"\b(премиум|premium|качеств|элит|лучш|медал)", "award"),
    # быстро / энергия / молния
    (r"\b(быстр|молни|зар.+мин|fast|zap)", "zap"),
    # ручная работа / крафт
    (r"\b(ручн|крафт|мастер|hand|hammer)", "hammer"),
    # размеры / габариты
    (r"\b(размер|габарит|длин|ширин|высот|см\b|cm\b|мм\b)", "ruler"),
    # вес / весы
    (r"\b(вес|кг|kg|весов)", "scale"),
    # сердце / любовь / забота
    (r"\b(сердц|любим|забот|heart|комфорт.+отдых)", "heart"),
    # ночь / сон
    (r"\b(сон|ноч|сум|moon)", "moon"),
    # солнце / день
    (r"\b(солнц|день|sun|солнечн)", "sun"),
    # упаковка / коробка / подарок
    (r"\b(коробк|упак|подарок|package|box|gift)", "gift"),
    # дом / комфорт
    (r"\b(дом|home|интерьер|уют)", "home"),
    # ветер / свежесть / чистота
    (r"\b(ветер|свеж|wind|воздух)", "wind"),
    # звезда / рейтинг
    (r"\b(звезд|star|рейтинг)", "star"),
    # энергия / мощность
    (r"\b(мощн|power|энерг)", "battery"),
    # перо / лёгкость
    (r"\b(лёгк|лег.{1,3}кий|легч|feather)", "feather"),
    # драгоценность / роскошь
    (r"\b(роск|премиум|gem|кристалл|алмаз)", "gem"),
    # замок / безопасность
    (r"\b(безопас|замок|защит.+ребен|lock)", "lock"),
]
DEFAULT_ICON = "check-check"


def pick_icon(text: str) -> str:
    """Возвращает имя Lucide-иконки по тексту УТП. Fallback на 'check-check'."""
    if not text:
        return DEFAULT_ICON
    t = text.lower()
    for pattern, name in ICON_KEYWORDS:
        if re.search(pattern, t, re.IGNORECASE):
            return name
    return DEFAULT_ICON


# ─── Кэш отрендеренных иконок: (name, size, color) → PIL.Image ──────────────
_ICON_CACHE: dict[tuple, Image.Image] = {}


def render_icon(name: str, size: int, color: str = "#FFFFFF") -> Image.Image | None:
    """Рендерит Lucide-иконку из SVG в PNG нужного размера и цвета.
    Возвращает RGBA PIL.Image или None если иконки нет."""
    cache_key = (name, size, color)
    cached = _ICON_CACHE.get(cache_key)
    if cached is not None:
        return cached

    svg_path = ICONS_DIR / f"{name}.svg"
    if not svg_path.exists():
        # fallback на default иконку
        if name != DEFAULT_ICON:
            return render_icon(DEFAULT_ICON, size, color)
        return None
    try:
        with open(svg_path, "r", encoding="utf-8") as f:
            svg = f.read()
        # Lucide SVG используют currentColor → подменяем на наш цвет
        svg = svg.replace("currentColor", color)
        # Делаем stroke потолще для лучшей видимости при малых размерах
        svg = svg.replace('stroke-width="2"', 'stroke-width="2.4"')
        # Рендерим в 2× размере для anti-aliasing, потом downscale
        png_bytes = bytes(resvg_py.svg_to_bytes(
            svg_string=svg, width=size * 2, height=size * 2,
        ))
        img = Image.open(io.BytesIO(png_bytes)).convert("RGBA")
        img = img.resize((size, size), Image.Resampling.LANCZOS)
        _ICON_CACHE[cache_key] = img
        return img
    except Exception as e:
        print(f"[post_overlay] render_icon({name}) failed: {type(e).__name__}: {e}")
        return None


# ─── Главная функция: compose_bold_accent_caps ──────────────────────────────
def compose_bold_accent_caps(
    image_bytes: bytes,
    title: str,
    utp: list[str],
    kit: dict,
) -> bytes:
    """Накладывает на фото:
    • Title — крупный ALL CAPS в accent_1 цвете сверху
    • USP — 4 пункта на белых полупрозрачных плашках справа, с круглой
      accent-цветной плашкой иконки (line-art Lucide-иконка) + текст УТП

    Композиция для соотношения сторон ~3:4.
    """
    palette = kit.get("palette") or {}
    accent_1 = _hex(palette.get("accent_1") or "#FFB400")
    accent_hex = palette.get("accent_1") or "#FFB400"
    text_dark = _hex(palette.get("text_dark") or "#1A1F2E")
    text_light = "#FFFFFF"

    img = Image.open(io.BytesIO(image_bytes)).convert("RGBA")
    W, H = img.size
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # ───── Title: крупный ALL CAPS в accent цвете ─────
    title_text = _strip_quotes(title or "").upper()
    title_bottom = int(H * 0.04)
    if title_text:
        # Размер шрифта зависит от длины — крупнее, чем в v2
        if len(title_text) <= 14:
            title_size = int(W * 0.115)
        elif len(title_text) <= 22:
            title_size = int(W * 0.095)
        else:
            title_size = int(W * 0.080)

        title_font = ImageFont.truetype(FONT_TITLE, title_size)
        title_lines = _wrap(title_text, title_font, max_w=int(W * 0.94), draw=draw)[:2]
        line_h = int(title_size * 1.02)
        total_h = line_h * len(title_lines)
        y = int(H * 0.04)

        for line in title_lines:
            bbox = draw.textbbox((0, 0), line, font=title_font)
            line_w = bbox[2] - bbox[0]
            x = (W - line_w) // 2
            # сильнее тень: 2 слоя
            for dx, dy, alpha in [(4, 4, 90), (-2, 4, 50)]:
                draw.text((x + dx, y + dy), line, font=title_font, fill=(0, 0, 0, alpha))
            draw.text((x, y), line, font=title_font, fill=accent_1)
            y += line_h
        title_bottom = int(H * 0.04) + total_h

    # ───── USP block ─────
    items = [_split_utp(u) for u in (utp or []) if u]
    items = [it for it in items if it][:4]
    if not items:
        out = io.BytesIO()
        Image.alpha_composite(img, overlay).convert("RGB").save(out, format="PNG", optimize=True)
        return out.getvalue()

    # ЖЁСТКОЕ НАСЛЕДОВАНИЕ СТИЛЯ для series-pack: размеры плашек, иконок, отступов
    # и закруглений зависят ТОЛЬКО от высоты кадра H (не от количества items).
    # Это даёт идентичный визуальный стиль на hero (3 пункта), utp (1-2) и macro (1) —
    # пользователю важно, чтобы 5 карточек одного товара выглядели как один комплект.
    plaque_h = int(H * 0.13)          # высота одной плашки — фиксированная
    plaque_gap = int(H * 0.022)       # отступ между плашками — фиксированный
    plaque_radius = int(H * 0.022)    # закругление углов — фиксированное (всегда одно)
    pad_x_plaque = int(W * 0.020)
    icon_size = int(H * 0.075)        # иконка-кружок — фиксированный размер
    inner_icon_size = int(icon_size * 0.62)

    # Зона: правая 38% кадра, начинается под заголовком + воздух
    block_x = int(W * 0.55)
    block_w = W - block_x - int(W * 0.04)
    block_y_start = max(int(H * 0.30), title_bottom + int(H * 0.05))
    block_y_end = int(H * 0.96)
    available_h = block_y_end - block_y_start

    # Вертикальное центрирование стопки плашек в available_h.
    n = len(items)
    stack_h = n * plaque_h + (n - 1) * plaque_gap
    stack_top = block_y_start + max(0, (available_h - stack_h) // 2)
    item_h = plaque_h + plaque_gap   # шаг между центрами плашек

    body_size = int(W * 0.034)
    body_font = ImageFont.truetype(FONT_BODY, body_size)
    line_h_t = int(body_size * 1.18)

    for i, text in enumerate(items):
        # Центр плашки — фиксированный для всех 5 карточек серии
        pill_top = stack_top + i * item_h
        pill_bot = pill_top + plaque_h
        cy = (pill_top + pill_bot) // 2
        cx = block_x + icon_size // 2

        text_x = cx + (icon_size // 2) + int(W * 0.020)
        text_max_w = (block_x + block_w) - text_x - int(W * 0.015)
        text_lines = _wrap(text, body_font, max_w=text_max_w, draw=draw)[:2]
        total_text_h = line_h_t * len(text_lines)

        # белая полупрозрачная плашка под весь пункт (фиксированной высоты)
        pill_left = block_x - pad_x_plaque // 2
        pill_right = block_x + block_w
        radius = plaque_radius
        # тень
        for off in (3, 5):
            draw.rounded_rectangle(
                [pill_left + 1, pill_top + off, pill_right + 1, pill_bot + off],
                radius=radius, fill=(0, 0, 0, 25),
            )
        draw.rounded_rectangle(
            [pill_left, pill_top, pill_right, pill_bot],
            radius=radius, fill=(255, 255, 255, 232),
        )

        # accent-цветный круг
        r = icon_size // 2
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=accent_1)

        # Lucide иконка по ключевым словам в тексте УТП
        icon_name = pick_icon(text)
        icon_img = render_icon(icon_name, inner_icon_size, color=text_light)
        if icon_img is not None:
            ix = cx - inner_icon_size // 2
            iy = cy - inner_icon_size // 2
            overlay.paste(icon_img, (ix, iy), icon_img)
        else:
            # fallback: белая галочка штрихом
            draw.line(
                [(cx - r // 2, cy), (cx - r // 6, cy + r // 3), (cx + r // 2, cy - r // 3)],
                fill=(255, 255, 255, 255), width=max(3, icon_size // 14),
            )

        # Текст УТП на белой плашке — тёмным
        ty = cy - total_text_h // 2
        for tl in text_lines:
            draw.text((text_x, ty), tl, font=body_font, fill=text_dark)
            ty += line_h_t

    final = Image.alpha_composite(img, overlay)
    out = io.BytesIO()
    final.convert("RGB").save(out, format="PNG", optimize=True)
    return out.getvalue()
