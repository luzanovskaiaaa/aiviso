"""Brand Kit agent: AI-подбор brand kit'а для конкретного товара.

Gemini Vision смотрит на фото товара + название + категорию и возвращает
оптимальный brand kit (палитра + типографика + декорации + mood) в формате
JSON, готовый для prompt_builder.build_brand_overlay().

Возвращает один из 6 starter kit'ов как стартовое предложение, либо
кастомный kit с подобранной палитрой под товар.
"""
import json
from google.genai import types
from app.core.config import settings
from app.core.gemini import gemini_client as _client
from app.services.prompt_builder import STARTER_KITS, starter_kit
from app.services.marketing_agent import _safe_json  # переиспользуем робастный парсер


# Системный промт.
# Дизайн-философия: НЕ собираем kit из отдельных токенов (это даёт визуальную кашу).
# AI ВЫБИРАЕТ один из 6 готовых дизайнерских пресетов — каждый уже выверен как ансамбль.
# Кастомизация только одна: accent_1 (главный акцентный цвет) можно подкрутить под товар,
# чтобы кит «звучал» с материалом. Остальное — берём из пресета как есть.
SYSTEM_PROMPT = """You are a senior marketplace card designer for Russian sellers (Wildberries, Ozon).

CONTEXT — what we're designing:
- Product card for Russian marketplaces: Wildberries (WB) and Ozon.
- Format: vertical 3:4 (1200×1600 px), mobile-first viewing.
- Language: ALL text on the card will be Russian (Cyrillic) — title and USP-плашки.
- Conversion-driven aesthetic: shopper scrolls past in 1 second — card must catch the eye
  AND look credible/premium for the price tier.
- Output is a finished marketplace listing photo, NOT a moodboard, NOT a poster.
- Contemporary 2025 design language: clean typography, deliberate use of plaques, no kitsch,
  no dated stock-photo overlays.

YOUR JOB — pick THE BEST PRESET for this product.

We have 6 designer-curated presets. Each is a fully-balanced visual system (palette,
typography, plaques, icons, composition rules) that has been hand-tuned to look great
as a marketplace card. You DO NOT design from scratch. You PICK one of these six.

═══════════════════════════════════════════════════════════════════════════════
HARD RULE — DEFAULT IS "bare_typography"
═══════════════════════════════════════════════════════════════════════════════
"bare_typography" is the SAFE DEFAULT. Pick it whenever you are NOT 100% sure another
preset is a better fit. The other 5 presets each require a SPECIFIC SIGNAL — if that
signal isn't clearly present, fall back to "bare_typography".

In particular: "marketplace_pop" (white/grey pill USPs around the product) is HEAVILY
overused. It must NEVER be your default. Pick it ONLY when the product is explicitly
sport / kids / household-cleaning / budget-accessory AND the seller's visual language
clearly calls for feature-flag pills. For premium goods, watches, jewellery, wood,
leather, ceramic, handmade, modern home, electronics — DO NOT pick "marketplace_pop".

If two presets seem equally plausible — pick "bare_typography".

═══════════════════════════════════════════════════════════════════════════════

THE 6 PRESETS:

1. "bare_typography" — title rendered DIRECTLY on the photo, NO plaques anywhere.
   Big confident typography. USP-текст тоже на фото без плашек, разнесён по композиции.
   THE DEFAULT. Best for: premium / handmade / craft / wooden / leather / ceramic /
   watches / jewellery / atmospheric or editorial photos. Anything where the photo
   should breathe without overlays. ALSO the safe fallback for ambiguous cases.

2. "glass_card" — frosted-glass pills (Apple Vision / iOS-26 liquid-glass), title and USPs
   in semi-transparent rounded plaques with backdrop-blur, line-art icons next to USPs.
   Photo shines through, doesn't feel cheap. Looks rich without being loud.
   Pick for: ANY premium product when the seller WANTS USP plaques and icons but the
   product tier is too premium for "marketplace_pop" — watches, jewellery, premium
   cosmetics, modern electronics, designer home, leather goods, premium fashion.
   This is the "premium WITH icons" choice — softer than marketplace_pop, richer than
   bare_typography. Default for premium when USPs are present.

3. "bold_accent_caps" — huge ALL-CAPS title in a saturated brand-accent color (mustard,
   tomato red, brand orange), icons on solid colored discs. Loud, conversion-driven.
   Pick ONLY for: FMCG / food / pet food / sweets / snacks / supplements — mass-market
   products where the title shouts the benefit. Never for premium / craft / fashion.

4. "oversized_hero" — GIGANTIC editorial-magazine title in pale neutral, visually OCCLUDED
   by the product silhouette (letters disappear behind the body). Tiny grey side-pills for USPs.
   Pick ONLY for: fashion / streetwear / footwear with a strong cut-out silhouette
   (clear background, product is the hero shape).

5. "marketplace_pop" — sentence-case bold title with an OUTLINE-pill descriptor word, plus
   small scannable mini-grey/white-pill USPs arranged AROUND the product. Bright, energetic.
   ⚠️ STRICT GUARD: pick this ONLY when ALL three are true:
     (a) category is sport / kids / household-cleaning / budget-accessory / fitness / toys;
     (b) product is mass-market value tier, NOT premium / craft / handmade;
     (c) the product photo has clear empty space around it for pill USPs to live.
   If ANY of (a)/(b)/(c) is missing → DO NOT pick this preset, use "bare_typography".

6. "industrial_tech" — cool-blue tech-pill USPs that show NUMBERS (D6мм, 76% хлопок, 5кг).
   Title sentence-case bold. Engineering / spec-sheet vibe.
   Pick ONLY for: tools / power tools / hardware / technical electronics / measurable spec
   products where buyers explicitly compare numbers.

DECISION FLOW (apply in this exact order, stop at the first match):

Step 1 — detect the image type:
  (A) clean studio shot of the product on white/grey/neutral bg;
  (B) lifestyle/scene shot styled with props (kitchen herbs, desk, room);
  (C) an ALREADY-FINISHED MARKETPLACE CARD imported from WB/Ozon (existing title overlay,
      USP plaques, ribbon badges baked in).

Step 2 — apply HARD blocklist. If product fits any of these, you MUST NOT pick
"marketplace_pop":
  - watches, jewellery, accessories of premium tier;
  - wood, leather, ceramic, handmade, craft, artisan;
  - cosmetics (any), perfume, skincare;
  - modern minimal home goods, designer furniture;
  - fashion items with editorial photos;
  - electronics with premium positioning.
For all of these → start with "bare_typography" and only override if there's a
strong reason (see Step 4).

Step 3 — if image is CASE (C) (imported finished card), match the EXISTING card's energy:
  * frosted/translucent plaques visibly present → "glass_card"
  * HUGE display title visibly behind/cut-by product → "oversized_hero"
  * solid saturated colored title + filled icon discs → "bold_accent_caps"
  * numeric specs inside cool tech-pills → "industrial_tech"
  * dark moody bg + thin outline pills + visible mini-grey-pills + Step 2 NOT triggered
    + sport/kids/household category → "marketplace_pop"
  * everything else (clean editorial / pure typography / minimal photo / Step 2 triggered)
    → "bare_typography"

Step 4 — for CASE (A)/(B) (no imported reference), positive matches.
USP-PRESENCE MATTERS: the user_msg below tells you whether the seller provided USPs
(short benefit bullets to render on the card). When USPs are present, prefer presets
WITH icons & plaques — pure typography looks empty next to a feature list.

  - tools / hardware / power-tools with measurable specs → "industrial_tech"
  - food / FMCG / petfood / sweets / supplements → "bold_accent_caps"
  - fashion / streetwear / footwear with strong silhouette on clean bg → "oversized_hero"
  - sport / kids / household-cleaning / fitness / budget-accessory + Step 2 NOT triggered
    → "marketplace_pop"
  - PREMIUM products (watches, jewellery, leather, ceramic, handmade, wooden, craft,
    cosmetics, premium electronics, designer home) WITH USPs → "glass_card".
    The frosted-glass plaques + line-art icons read as "premium with substance",
    not as cheap pill-spam. THIS IS THE DEFAULT FOR PREMIUM+USPs.
  - PREMIUM products WITHOUT USPs (just title or pure photo) → "bare_typography".
    Letting the photo breathe alone is right when there are no benefit-bullets.
  - EVERYTHING ELSE / ambiguous → if USPs present → "glass_card",
    if no USPs → "bare_typography".

If after all steps you are still hesitating between two presets:
  - USPs present → "glass_card"
  - no USPs → "bare_typography"

ACCENT COLOR (the only thing you customize):
Each preset has a default accent color, but you may override accent_1 with a hex that
HARMONIZES with the product's material. Examples:
  - oak / walnut wood → warm honey #C8924E or terracotta #B45D3F
  - cool ceramic / steel → graphite #2E3338 + cool blue accent
  - leather → cognac #8B4513 or saddle brown
  - greenery / herbs (food) → olive #6B7A35 or sage #8FA882
  - red apparel → keep apparel color out of accent (use neutral cream); accent should be
    a complementary neutral, not a clash.
NEVER pick accent that clashes with the dominant product color.

OUTPUT — return EXACTLY this JSON (no markdown, no commentary):

{
  "starter_preset": "<EXACTLY one of: bare_typography | glass_card | bold_accent_caps | oversized_hero | marketplace_pop | industrial_tech>",
  "accent_1": "#XXXXXX",
  "rationale": "<one Russian sentence ≤140 chars: WHY this preset for this product. If you picked marketplace_pop — explicitly state which of (a)/(b)/(c) signals you saw>"
}

CRITICAL: do NOT return any other fields (no palette object, no typography, no decoration).
The preset already contains all of those — your job is just to pick the preset and tune the accent."""


_ALLOWED_PRESETS = {
    "bare_typography", "glass_card", "bold_accent_caps",
    "oversized_hero", "marketplace_pop", "industrial_tech",
}

# Категории, для которых marketplace_pop (белые pill-плашки вокруг товара)
# запрещён даже если AI его выбрал. Падаем на bare_typography — без плашек.
# Логика: pop годится только для масс-маркета (sport/kids/household) с feature-flag
# подачей. Для премиума/крафта/мебели/часов/косметики плашки выглядят дёшево.
_POP_BLOCKED_CATEGORIES = {
    "furniture",   # мебель — премиум-эстетика, плашки убивают атмосферность
    "cosmetics",   # косметика — нужна минималистика, glass_card или bare
    "clothing",    # одежда — oversized_hero или bare, не плашки
    "food",        # еда — bold_accent_caps лучше плашек
    "electronics", # техника — industrial_tech или glass_card
}

# Ключевые слова в названии/категории, которые усиливают запрет pop.
_POP_BLOCKED_KEYWORDS = (
    "часы", "watch", "часов",
    "украшен", "ювелир", "кольц", "серьг", "браслет", "цепочк",
    "крафт", "handmade", "ручной работы", "ручная работа",
    "дерев", "wood", "дуб", "орех", "ясен",
    "кожан", "leather",
    "керамик", "фарфор", "ceramic",
    "духи", "парфюм", "perfume",
    "премиум", "premium", "лакшери", "luxury",
    "артизан", "artisan",
)


def _should_block_pop(category: str, product_name: str) -> bool:
    """True если для этого товара marketplace_pop запрещён."""
    if not category and not product_name:
        return False
    cat_lower = (category or "").lower().strip()
    if cat_lower in _POP_BLOCKED_CATEGORIES:
        return True
    haystack = f"{cat_lower} {(product_name or '').lower()}"
    return any(kw in haystack for kw in _POP_BLOCKED_KEYWORDS)


def _is_valid_hex(s) -> bool:
    if not isinstance(s, str):
        return False
    s = s.strip()
    if not s.startswith("#") or len(s) not in (4, 7):
        return False
    try:
        int(s[1:], 16)
        return True
    except ValueError:
        return False


def _normalize_kit(parsed: dict, category: str = "", product_name: str = "") -> dict:
    """AI выбирает один из 6 готовых пресетов и опционально подкручивает accent_1.

    Кит берётся целиком из starter_kit(preset) — это гарантирует визуально-согласованный
    результат. Custom-сборка из токенов запрещена (давала визуальную кашу).

    Серверный guard: для премиум/крафт/мебель/косметика/часы — даже если AI выбрал
    marketplace_pop, перебрасываем на bare_typography (плашки там выглядят дёшево).
    """
    starter = parsed.get("starter_preset")
    if starter not in _ALLOWED_PRESETS:
        # AI вернул что-то непредусмотренное (например "custom") — fallback на bare_typography
        # (без плашек): «не дорисовать» безопаснее, чем добавить плашки которые селлер не просил.
        starter = "bare_typography"

    # Guard: marketplace_pop запрещён для премиум-категорий и ключевых слов.
    pop_blocked = False
    original_starter = starter
    if starter == "marketplace_pop" and _should_block_pop(category, product_name):
        starter = "bare_typography"
        pop_blocked = True

    # Берём готовый пресет полностью — палитра/типо/деко уже выверены дизайнером.
    kit = starter_kit(starter)

    # Единственная допустимая кастомизация — accent_1 под цвет товара.
    # Только если AI прислал валидный hex.
    accent_override = parsed.get("accent_1")
    if _is_valid_hex(accent_override):
        kit["palette"]["accent_1"] = accent_override.strip()

    rationale = (parsed.get("rationale") or "").strip()[:280]
    if pop_blocked:
        rationale = (
            f"[guard: marketplace_pop→bare для {category or 'этого товара'}] " + rationale
        )[:280]

    kit["_meta"] = {
        "starter_preset": starter,
        "rationale":      rationale,
        "auto_generated": True,
    }
    if pop_blocked:
        kit["_meta"]["pop_blocked_from"] = original_starter
    return kit


async def propose_brand_kit(
    image_bytes: bytes,
    mime_type: str,
    category: str,
    product_name: str,
    reference_image_bytes: bytes | None = None,
    reference_mime_type: str | None = None,
    has_utp: bool = True,  # будут ли УТП-плашки на карточке (по умолчанию да — для card-режима)
) -> dict:
    """Предлагает brand kit для товара.

    Если передан reference_image_bytes — это ВТОРАЯ картинка (готовая карточка-референс
    откуда селлер хочет перенять визуальный стиль). В этом случае AI приоритизирует
    visual DNA референса (палитра/плашки/иконки/шрифты/мууд), но адаптирует цветовую
    палитру под материал самого товара.

    Без референса — работает по-старому: предлагает kit под фото товара.

    Возвращает уже валидный kit (с заполненными defaults).
    """
    if reference_image_bytes:
        user_msg = (
            f"PRODUCT NAME: {product_name or '(не указано)'}\n"
            f"CATEGORY: {category}\n\n"
            f"You are given TWO images:\n"
            f"  IMAGE 1 — the seller's PRODUCT photo (use for material/colour of accent_1).\n"
            f"  IMAGE 2 — a STYLE REFERENCE: the seller wants the new card to FEEL like this image.\n\n"
            f"YOUR JOB: pick which of the 6 presets BEST replicates IMAGE 2's visual language.\n\n"
            f"### CRITICAL DEFAULT — bare_typography ###\n"
            f"DEFAULT to \"bare_typography\" (clean text, NO plaques) UNLESS IMAGE 2 has CLEARLY VISIBLE\n"
            f"opaque/solid background containers behind the title or USP texts. Look for OBVIOUS\n"
            f"pill/box/circle shapes WITH FILL behind text — not just typography. If you see only\n"
            f"clean text on the photo (drop-shadow OK, no fill containers) → bare_typography.\n"
            f"Subtle text shadow is NOT a plaque. Text in a colored area of the photo itself is NOT a plaque.\n"
            f"When in doubt → bare_typography. The cost of adding a plaque the seller didn't want is\n"
            f"higher than the cost of missing one they did.\n\n"
            f"Pick a NON-bare preset only when the visual cue is unambiguous:\n"
            f"  - Clearly frosted/translucent rectangles or pills with backdrop-blur → \"glass_card\"\n"
            f"  - Dark photo with thin outline pill ON title AND visible mini-grey-pills under text → \"marketplace_pop\"\n"
            f"  - HUGE display title visibly behind/cut-by the product silhouette → \"oversized_hero\"\n"
            f"  - Saturated warm-color title text (yellow/orange/red) AND filled colored icon discs → \"bold_accent_caps\"\n"
            f"  - Numeric specs inside colored tech-pills (engineering style) → \"industrial_tech\"\n"
            f"  - Otherwise (any clean editorial / pure typography / minimal photo) → \"bare_typography\"\n\n"
            f"Tune accent_1 to harmonize with IMAGE 1's product material.\n"
            f"In rationale (Russian, ≤140 chars) say what visual cue forced you to pick a non-bare preset,\n"
            f"OR confirm that IMAGE 2 is plaque-free.\n\n"
            f"Return JSON: {{\"starter_preset\": \"...\", \"accent_1\": \"#XXXXXX\", \"rationale\": \"...\"}}"
        )
        contents = [
            types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
            types.Part.from_bytes(data=reference_image_bytes,
                                  mime_type=reference_mime_type or "image/jpeg"),
            SYSTEM_PROMPT,
            user_msg,
        ]
    else:
        utp_signal = (
            "Seller HAS provided USPs/benefit-bullets that will be rendered on the card. "
            "Prefer presets with icons and plaques (per Step 4 rules)."
            if has_utp else
            "Seller HAS NOT provided USPs. The card will have only a title or pure photo. "
            "Plaques would be empty containers — prefer bare_typography."
        )
        user_msg = (
            f"PRODUCT NAME: {product_name or '(не указано)'}\n"
            f"CATEGORY: {category}\n"
            f"USP STATUS: {utp_signal}\n\n"
            f"Analyse the attached photo and propose the optimal brand kit JSON."
        )
        contents = [
            types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
            SYSTEM_PROMPT,
            user_msg,
        ]

    response = await _client.aio.models.generate_content(
        model=settings.TEXT_MODEL,
        contents=contents,
        config=types.GenerateContentConfig(
            temperature=0.75,
            max_output_tokens=1024,
            response_mime_type="application/json",
        ),
    )

    parsed = _safe_json(response.text or "")
    if not parsed:
        # Не получили валидный JSON — диагностика и fallback на пресет
        import sys
        raw = response.text or ""
        finish = None
        try:
            finish = response.candidates[0].finish_reason if response.candidates else None
        except Exception:
            pass
        sys.stderr.write(
            f"[brand_kit_agent] AI разбор не дал валидный JSON. "
            f"finish_reason={finish}; len(text)={len(raw)}; "
            f"preview={raw[:400]!r}\n"
        )
        sys.stderr.flush()
        # Fallback: bare_typography — без плашек/pillов. Безопаснее не дорисовать,
        # чем нарисовать плашки которые селлер не хотел.
        kit = starter_kit("bare_typography")
        kit["_meta"] = {"starter_preset": "bare_typography", "rationale":
                        "AI-разбор не удался — применили чистую типографику без плашек.",
                        "auto_generated": True, "fallback": True}
        return kit

    kit = _normalize_kit(parsed, category=category, product_name=product_name)
    if reference_image_bytes:
        kit["_meta"]["from_reference"] = True
    return kit


# ──────────────────────────────────────────────────────────────────────────────
# propose_palette: AI подбирает только PALETTE для заданного starter-пресета
# Используется при выборе пресета — структура пресета (decoration/typography/mood)
# сохраняется, но цвета адаптируются под фото товара.
# ──────────────────────────────────────────────────────────────────────────────

# Подсказки агенту по характеру каждого пресета — какой accent уместен.
_PALETTE_HINTS_BY_STARTER: dict[str, str] = {
    "bare_typography":
        "Mood: clean editorial. Accent_1 should be a SUBTLE refined hue derived from the product's "
        "own dominant color (a darker tone of the wood/fabric/material). Avoid bright pop colors. "
        "text_dark: very dark navy/ink. plaque_bg: warm white or cream.",
    "glass_card":
        "Mood: modern frosted-glass / Apple/iOS look. Accent_1 should be a CLEAN MID-SATURATED hue "
        "harmonising with the product (cool teal/blue for tech & cool products, soft amber/copper for "
        "warm wooden products, soft rose for cosmetics). text_dark: deep ink. plaque_bg: white.",
    "bold_accent_caps":
        "Mood: high-conversion FMCG/petfood-bold. Accent_1 MUST be a SATURATED WARM hue — "
        "marigold gold #FFB400, electric tomato #FF5533, mustard yellow #E8B324, vivid orange "
        "#F97316 — choose the one that contrasts strongest with the product itself. NEVER cool "
        "blues/greens here. text_dark: deep ink (almost black). plaque_bg: white.",
    "oversized_hero":
        "Mood: fashion-editorial oversized title. Accent_1 should be QUIET / NEUTRAL — the title is "
        "rendered as a pale background layer, NOT a bright element. text_light should be a very pale "
        "warm/cool neutral (e.g. #ECEAE6 for warm or #DCDADD for cool). text_dark: deep ink for any "
        "tiny side-pills. accent_1 itself: a muted dark tone (graphite/navy) for tiny side accents.",
    "marketplace_pop":
        "Mood: scannable conversion-pop. Accent_1 MUST be a VIVID SATURATED color — bright blue "
        "#2563EB, electric red #DC2626, hot orange #F97316, acid lime #84CC16 — pick the one that "
        "POPS against the product without clashing. text_dark: deep navy/ink. plaque_bg: cool light grey.",
    "industrial_tech":
        "Mood: tech spec-sheet. Accent_1 should be a COOL hue — engineering blue #1E5BD9, electric "
        "cyan #0EA5E9, graphite blue #475569 — never warm hues. text_dark: deep navy. plaque_bg: "
        "very light cool blue (#DEE7F4) for tech-pills.",
}


_PALETTE_PROMPT = """You are a brand colour stylist for marketplace product cards. Given:
- a product photo
- a starter preset name + a hint describing its visual character
your job is to return ONLY the palette JSON that fits BOTH the preset's mood AND the product's
material/colour. The palette must HARMONISE with the product (avoid clashes), follow the preset's
character constraints, and produce strong, readable contrast.

Return EXACTLY this JSON (no commentary, no markdown):

{
  "text_dark":  "#XXXXXX",
  "text_light": "#FFFFFF",
  "accent_1":   "#XXXXXX",
  "accent_2":   "#XXXXXX",
  "plaque_bg":  "#XXXXXX"
}

Rules:
- Read the hint about preset character carefully — the constraints there (warm vs cool, saturated
  vs muted) are STRICT.
- Look at the product's dominant colour and material — pick accent_1 that contrasts/complements,
  never clashes (e.g. for warm wooden product avoid sour acid green; for a navy garment avoid neon).
- text_dark: a near-black hue (could be #14171F warm or #0F2547 cool, depending on the preset).
- text_light: usually #FFFFFF, but for oversized_hero it should be a soft pale neutral (like #ECEAE6).
- accent_2 may equal accent_1 if no secondary tone is needed.
- plaque_bg: usually #FFFFFF for white plaques, OR a tinted cream/cool-grey/blue depending on preset hint."""


async def propose_palette(
    image_bytes: bytes,
    mime_type: str,
    category: str,
    product_name: str,
    starter_name: str,
) -> dict | None:
    """Возвращает palette dict, подобранный AI под товар + starter-пресет.
    None при ошибке — caller сам fallback на дефолтную палитру пресета."""
    hint = _PALETTE_HINTS_BY_STARTER.get(starter_name, "Pick a tasteful palette that fits the product.")
    user_msg = (
        f"PRODUCT NAME: {product_name or '(не указано)'}\n"
        f"CATEGORY: {category or ''}\n"
        f"STARTER PRESET: {starter_name}\n"
        f"PRESET CHARACTER HINT:\n{hint}\n\n"
        f"Now look at the product photo and return the palette JSON."
    )
    try:
        resp = await _client.aio.models.generate_content(
            model=settings.TEXT_MODEL,
            contents=[
                types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
                user_msg,
            ],
            config=types.GenerateContentConfig(
                system_instruction=_PALETTE_PROMPT,
                temperature=0.6,
                max_output_tokens=1024,
                response_mime_type="application/json",
            ),
        )
        text = (resp.text or "").strip()
        parsed = _safe_json(text)
        print(f"[propose_palette] starter={starter_name} text_len={len(text)} parsed_keys={list(parsed.keys()) if parsed else None}")
        return parsed if parsed else None
    except Exception as e:
        print(f"[propose_palette] {starter_name} failed: {type(e).__name__}: {str(e)[:300]}")
        return None
