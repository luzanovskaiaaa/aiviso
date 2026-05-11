"""
Промт-builder для Gemini 3 Pro Image / 2.5 Flash Image.

Структура промта:
  Layer A — ANCHOR: forensic visual description (Gemini Vision по исходному фото)
  Layer B — FIDELITY: «продукт идентичен референсу», запрет редизайна
  Layer C — NEGATIVE_GUARD: явный список anti-patterns
  Layer D — SCENE: сценарий (свет, ракурс, среда)
  Layer E — TECHNICAL: 6-element структура Google
  Layer F — USER NOTE: опциональная заметка от селлера
  Layer G — BRAND OVERLAY: brand kit-управляемый overlay (заголовок + УТП + декорации)

Brand Kit — JSON-структура с параметрами палитры/типографики/декораций. См. STARTER_KITS.
Универсальный билдер `build_brand_overlay(kit, title, utp)` собирает overlay-блок
из этих параметров, что даёт бесконечное число валидных комбинаций.
"""

from typing import Optional
from google.genai import types
from app.core.config import settings
from app.core.gemini import gemini_client as _client

# ── Layer A: ANCHOR (forensic product description) ────────────────────────────
ANCHOR_SYSTEM_PROMPT = """You are a forensic product analyst. You will be given a product photo.
Produce an exhaustive, factual visual description that another AI image model can use to reproduce
this exact product without losing details.

Rules:
1. Materials — be specific (matte ceramic, brushed steel, full-grain leather, cotton twill).
2. Construction details:
   - Furniture: joinery type, hinge type, drawer slide, leg attachment, hardware (handles/knobs — count, shape, finish).
   - Clothing: button count/placement, pocket count/type, zipper type, seam type, pleats, cuffs, collar, hem, lining.
   - Cosmetics: bottle shape, cap mechanism, label placement, embossing, capacity marking.
   - Electronics: port positions/count, button layout, screen size/ratio, material finish, logo placement.
   - Food/FMCG: package shape, label artwork, brand text, regulatory icons, weight markings.
3. Proportions — approximate dimensions and aspect ratios.
4. Colors — precise Pantone-like names with hex (e.g. "warm off-white #F4EFE6").
5. Surface finish — matte, satin, gloss, brushed, hammered, knit-textured, woven-textured.
6. Logos, prints, embroidery — placement, size, color.
7. Do NOT describe background or lighting — only the product.
8. Output 4-8 declarative sentences. No bullet points, no headers."""


# ── Layer B: FIDELITY ─────────────────────────────────────────────────────────
FIDELITY_LAYER = """CRITICAL — PRODUCT FIDELITY:
Use the attached image as the EXACT product to feature. The product itself must remain IDENTICAL
to the reference in every detail: same shape, same proportions, same materials, same colors and
finish, same hardware, same stitching, same logo placement, same texture, same construction.
Do NOT redesign, restyle, simplify, or "improve" the product.
Do NOT change the number, position, size, or shape of any feature.
Do NOT alter brand marks, labels, or printed graphics.
Reproduce the product as if it were the same physical object placed into a new scene —
only the environment, lighting, framing, and props change.
If the product has visible imperfections in the reference, keep them.

COUNT-CRITICAL ELEMENTS (this is the most common failure — be extra careful):
Before drawing, COUNT carefully on the reference image:
- Furniture: number of LEGS / supports (3? 4? T-base? sled?), number of doors, drawers, shelves,
  visible hinges, visible handles. The output must have the SAME COUNT — not more, not less.
- Clothing: number of buttons (count one by one), pockets (count and type — patch/welt/jetted),
  belt loops, pleats, zipper count, label tags. Match exactly.
- Cosmetics: number of caps/lids, number of pumps, count of regulatory icons on the label.
- Electronics: number of ports (USB count, jack count), buttons on the body, screen count,
  logos placement.
- Footwear: number of eyelets, lace count, sole layers.
If the reference shows N of something, the generated image MUST show exactly N — not N±1.
Counting incorrectly is the #1 reason a product card looks "almost right but wrong"."""


# ── Layer C: NEGATIVE GUARD ───────────────────────────────────────────────────
NEGATIVE_GUARD = """STRICT NEGATIVES — these mistakes destroy product cards:
- Do NOT duplicate the product. Exactly ONE instance of the product in frame.
- Do NOT show reflections that contain a second copy of the product.
- Do NOT add new objects, characters, or props not naturally required by the scene below.
- Do NOT use forced perspective or exaggerated size distortion.
- Do NOT add watermarks, logos, signatures, brand stamps that aren't on the product itself.
- Do NOT add letterboxing, whitespace bands, padding strips, frames, or borders around the image.
  The composition fills the full 3:4 frame edge-to-edge.
- Do NOT show floating subjects, levitating objects, magical elements unless explicitly requested.
- Do NOT cartoonify, stylize, or render in a non-photorealistic style unless explicitly requested."""


# ── Layer E: TECHNICAL QUALITY BOOST ──────────────────────────────────────────
QUALITY_BOOST = """OUTPUT QUALITY:
Professional commercial product photography. Photorealistic, hyper-detailed, 4K resolution.
Studio-grade color grading, accurate skin tones (if model present), realistic shadows and reflections.
Tack-sharp focus on the product, every material texture clearly visible.
Calibrated white balance, no color cast, no blown highlights, no clipped shadows."""


# ── Используется только в ветке flow="series" (картинка под HTML-overlay) ─────
NO_TEXT_RULE = """ZERO RENDERED TEXT IN THE IMAGE:
Do NOT draw, render, or add ANY text, captions, labels, headlines, words, letters, numbers,
characters, watermarks, price tags, badges, pills, callouts, or typography of any kind.
Output image must contain ZERO rendered text characters.
Text and overlays will be added LATER by the user as a separate UI layer.
Exception: text physically printed on the product itself in the reference (brand logo on a label,
ingredient text on a package) — preserve that product-native text exactly."""


# ── Используется когда overlay (заголовок + УТП-плашки) накладывается через PIL пост-процесс
# поверх готового фото. AI должен ОСТАВИТЬ пустые зоны для overlay, иначе PIL-плашки наедут на товар.
POST_OVERLAY_LAYOUT_HINT = """Composition hint (additional decoration will be composited over this image):
A headline bar at the top and 4 feature plaques along the right edge will be composited over
this image AFTER generation. Compose the scene with this in mind:
- Place the product in the LEFT 60% of the frame (left half / centre-left), NOT in the
  right side. The right ~35% of the frame must remain mostly empty (just background /
  scene), so the USP plaques can sit there without covering the product.
- Leave the TOP ~18% of the frame as quiet background (sky, wall, scene depth) — that's
  where the title will sit.
- The product itself should NOT extend into the right edge or top edge — keep it tucked
  into the left/bottom-left quadrant so the right & top zones stay clear for overlay."""


# ──────────────────────────────────────────────────────────────────────────────
# BRAND KIT — параметризованный overlay
# ──────────────────────────────────────────────────────────────────────────────
#
# Brand Kit — это JSON-объект, описывающий ДНК-стиль карточки. Применяется ко всем
# генерациям проекта (преемственность). Поля:
#
#   palette:
#     text_dark   hex — тёмный текст и иконки (используется на светлых фонах фото)
#     text_light  hex — светлый текст (используется на тёмных фонах фото) — обычно #FFFFFF
#     accent_1    hex — primary акцент (иконки, hero-слово, акцентная линия)
#     accent_2    hex|null — secondary (опционально для дуэта; например, неоновый glow)
#     plaque_bg   hex — фон малых плашек (cream/white/black/glass)
#
#   typography:
#     title_font   geometric-sans | display-serif | handwritten | technical-thin
#     title_weight extrabold | semibold | regular | light
#     title_case   sentence | upper | hero-split (1-е слово жирным, остаток тонким)
#     body_font    geometric-sans | display-serif | handwritten | technical-thin
#
#   decoration:
#     title_plaque  none | soft-pill | block | organic
#     usp_plaque    none | circle-icon | soft-pill | leaf | block | bento
#     icon_style    line-art | filled | duotone | none
#     kicker        bool — есть ли строка-подпись внизу
#
#   mood:
#     calm-minimal | bold-marketplace | natural-craft | tech-futuristic | editorial | playful
#     влияет на общий тон промта (свободная подсказка модели)
#

# ── Универсальные правила overlay'а ───────────────────────────────────────────
_OVERLAY_HARD_RULES = """Absolute rules (apply regardless of brand kit):

Product visibility (highest priority):
- Overlay elements (plaques, pills, badges, icons, USP callouts) NEVER cover or overlap the
  product silhouette. The product remains 100% visible — every edge, every detail, every
  hardware element, every brand mark, every texture. Zero pixels of the product are obscured
  by any overlay shape or text.
- USPs / icon-pills / decorative plaques are placed STRICTLY in EMPTY regions of the frame
  (background, sky, wall, floor, negative space) — never on top of the product itself.
- COMPOSITION RULE for the AI: when arranging the product in the scene, deliberately leave
  EMPTY ZONES for overlay placement — typically the right ~30% of the frame and/or the top
  ~18% should contain only background/scene, no product. Place the product slightly to the
  LEFT or BOTTOM-LEFT of the frame so the right side is free for USP plaques.
- Exception — title with `title_plaque: oversized-cover` is INTENTIONALLY rendered BEHIND
  the product in z-order (product is in front, title peeks through behind). In this case
  the product is still 100% visible — the TITLE is what gets partially hidden, not the product.

Typography:
- Cyrillic letters MUST be perfectly formed and crisp — NO garbled characters, NO missing
  diacritics, NO substituted Latin lookalikes. Prefer simpler weight over decorative
  if a letter would render ambiguously.
- The headline and the benefit lines share ONE typeface family. No clashing fonts.

Icons:
- All icons in the image share IDENTICAL illustration style — same stroke weight, same color,
  same level of detail. They look like ONE icon set, not a random mix.
- NEVER use generic emoji, clipart, or stock-vector icons.

Frame:
- Composition fills the full 3:4 frame edge-to-edge — NO whitespace bands at top/bottom/sides.

Never render meta-words from the prompt:
- The prompt above contains many INSTRUCTION-WORDS (in English): for example
  Marketplace, Card, Overlay, USP, Brand, Title, Plaque, Layer, Heading, Subtitle,
  Caption, Pill, Callout, Feature, Benefit, Mood, Palette. These are instructions FOR
  YOU — they are NOT content for the image. NEVER render any of them as visible text.
  The ONLY texts to render are: (1) the Russian product headline given above,
  (2) the Russian benefit lines given above, (3) text physically printed on the
  product itself in the reference photo (logos, labels) — preserved as-is.
- DO NOT add quotation marks, brackets, parentheses, or decorative punctuation AROUND
  the headline. Render the headline text itself, no surrounding decorations.

Never invent numbers or specs:
- DO NOT add any number, weight, size, percentage, dimension, or measurement to the
  image that is NOT already present in the headline or benefit lines provided above.
  No '5кг', no '76%', no '40-50', no 'D6мм' unless that exact string is in the user's
  text. The instruction examples in this prompt (e.g. '1.5кг', '76% хлопок') are
  TEMPLATES showing the format, NOT content to render. If the user's lines contain
  no numbers, the image must contain no numbers either."""


# Карты «человекочитаемое значение» → «инструкция модели».
_FONT_DESCRIPTION = {
    "geometric-sans": "modern geometric sans-serif (Manrope / Onest / Inter style)",
    "display-serif":  "elegant display serif (Playfair Display / Cormorant Garamond style)",
    "handwritten":    "casual handwritten font (Caveat / Reenie Beanie style, organic strokes)",
    "technical-thin": "thin technical sans-serif (SF Pro Display / Inter Light style, +2% letter-spacing)",
}

_WEIGHT_DESCRIPTION = {
    "extrabold": "weight 800 (very heavy, display)",
    "semibold":  "weight 600",
    "regular":   "weight 400-500",
    "light":     "weight 300 (thin)",
}

_TITLE_PLAQUE_DESCRIPTION = {
    "none":      "NO background plaque, NO box, NO pill — title rendered DIRECTLY on the image with a "
                 "very subtle drop-shadow (~3px blur, 25% opacity dark) for legibility",
    "soft-pill": "soft rounded rectangle pill, semi-opaque ({plaque_bg}) at 92% opacity, "
                 "border-radius ~18px, generous internal padding, subtle drop-shadow",
    "block":     "solid sharp-cornered block ({plaque_bg}) at 100% opacity, NO transparency, "
                 "spans full width or full top zone of frame",
    "organic":   "organic asymmetric blob shape ({plaque_bg}) — NOT a perfect rectangle, "
                 "soft uneven curves like torn paper or hand-drawn pebble, slight 2-4° tilt, "
                 "thin hand-drawn border (~1.5px, slightly wobbly)",
    "glass":     "frosted-glass pill (Apple Vision / iOS-26 liquid-glass look) — semi-transparent "
                 "rounded rectangle, background ({plaque_bg}) at ~35% opacity with strong backdrop-blur "
                 "(~12-16px Gaussian blur of the photo behind), 1px hairline highlight at the top edge "
                 "in {text_light} at 30% opacity, 1px hairline border in {text_dark} at 12% opacity, "
                 "soft outer drop-shadow (8px blur, 8% opacity). The photo is clearly visible through "
                 "the plaque — it looks like real glass, not a tinted box",
    "outline":   "OUTLINE-only pill — fully transparent fill, just a 1.5-2px stroke border in {text_dark} "
                 "(or {text_light} on dark photos), border-radius ~18px, no shadow. Photo passes through "
                 "completely; only the rim and the title text are visible",
    "outline-accent":
                 "Title is split into TWO parts. PART A — 1 main word — rendered as PLAIN BOLD TEXT "
                 "directly on the photo (no plaque), color {text_dark} (or {text_light} on dark photos), "
                 "extra-bold sans-serif, ALL-CAPS or sentence-case. PART B — descriptor word(s) right "
                 "below or to the right — rendered INSIDE an OUTLINE PILL with a 2-3px BORDER in "
                 "{accent_1} (a SATURATED VIVID color: bright blue / electric red / orange / acid green — "
                 "NOT pastel, NOT grey). Pill fill is fully transparent. Inside the pill the text is in "
                 "{accent_1} extra-bold (matches the rim color). This creates a strong "
                 "two-tier title like 'ШОРТЫ' + outline-pill 'СПОРТИВНЫЕ' as on Wildberries kids cards.",
    "accent-color":
                 "NO plaque, NO box, NO pill — title rendered DIRECTLY on the photo as a heavy display "
                 "element. CRITICAL: title text fill MUST be the BRAND ACCENT COLOR ({accent_1}) — read "
                 "the hex literally and use that hue. Description of the color: a SATURATED, WARM, "
                 "high-chroma hue (NOT neutral, NOT desaturated, NOT cool). Examples of acceptable colors: "
                 "vivid mustard yellow, saturated marigold gold, warm honey amber, electric tomato red, "
                 "burnt orange. The title is the LOUDEST color element in the frame — it must scream "
                 "with chroma. ABSOLUTELY DO NOT render the title in white, NOT in cream, NOT in grey, "
                 "NOT in {text_dark}, NOT in {text_light} — those are FAILURES. With a 4px drop-shadow "
                 "at 30% opacity for legibility on any background.",
    "oversized-cover":
                 "Title is rendered as MASSIVE display lettering — letters as TALL as 30-40% of frame "
                 "height — spanning the FULL WIDTH (90-100% of frame width), positioned vertically "
                 "centered or in upper-middle third (NOT just at the top). Letters are spaced wide. "
                 "STEP 1: imagine the title rendered first as a flat background layer. STEP 2: the "
                 "product/model is composed IN FRONT of this title. The title letters MUST be visibly "
                 "interrupted/cut/occluded by the product silhouette — letter parts disappear behind the "
                 "product where they overlap. Like a fashion-magazine cover headline running BEHIND the "
                 "model's body. Title color: very pale neutral ({text_light} at 75-85% opacity, OR a "
                 "soft off-white grey #ECEAE6, OR very light cool grey #DCDADD) so it reads as a quiet "
                 "background layer. The product remains the visual hero in front. EXAMPLES of this style: "
                 "BAGGY pants Wildberries cards, oversized fashion magazine covers, streetwear lookbook "
                 "spreads. NEVER render the title fully ABOVE or BELOW the product — it MUST overlap.",
}

_USP_PLAQUE_DESCRIPTION = {
    "none":         "ABSOLUTELY NO plaque, NO pill, NO badge, NO circle, NO box, NO frame, NO container "
                    "of any shape behind USP texts. Render USP texts as PURE TYPOGRAPHY directly on the "
                    "photo, vertically stacked, right-aligned in the right ~30% of the frame, with only "
                    "a soft 3px drop-shadow at 25% opacity for legibility. Each USP is short — 2-4 words "
                    "per line. DO NOT add ANY decorative element around the text. This is a typography-"
                    "only style — if you draw a single circle or pill, you have failed the brief.",
    "circle-icon":  "small CIRCULAR icon-badges (perfect circles, ~38-44px in frame coordinates, NOT pills, "
                    "NOT rectangles), background ({plaque_bg}) at 95% opacity, NO border. ICON inside the "
                    "circle. USP text rendered DIRECTLY beside the circle (NO plaque around the text).",
    "soft-pill":    "soft-rounded pill plaques ({plaque_bg}) at 92% opacity, border-radius ~14px, soft shadow. "
                    "Each pill contains: LEFT — icon; RIGHT — USP text. Pills stacked vertically with ~12px gap.",
    "leaf":         "organic leaf-shape OR pebble-shape plaques ({plaque_bg}), slight varied tilts (-5°…+5°) "
                    "for hand-arranged feel, thin hand-drawn border. Each plaque has icon LEFT, text RIGHT.",
    "block":        "chunky rounded squares (~10px radius), each with its OWN solid pastel color from a "
                    "harmonious 4-color palette derived from {accent_1}/{accent_2}. Inside each block: "
                    "filled icon TOP in {text_light}, USP text BOTTOM in {text_light} weight 700.",
    "bento":        "frame is divided into a BENTO GRID by ~8px {text_light} gutters. Hero photo cell ~60% "
                    "of frame area top-left. Title cell + several USP cells fill the remaining grid. Each cell "
                    "has its own pastel pastel background from a harmonious palette, ~10px inner radius. "
                    "Inside each USP cell: duotone icon TOP, text BOTTOM, left-aligned with comfortable padding.",
    "glass-pill":   "frosted-glass pill plaques (Apple Vision / iOS-26 liquid-glass look) — semi-transparent "
                    "rounded pills, background ({plaque_bg}) at ~30-40% opacity with strong backdrop-blur "
                    "(~12px Gaussian blur of the photo behind). 1px hairline highlight at top edge in "
                    "{text_light} at 30% opacity; 1px hairline border in {text_dark} at 10% opacity; soft outer "
                    "shadow (6-8px blur, 6% opacity). Border-radius ~14px. The photo behind is CLEARLY visible "
                    "through each pill — the pills look like real frosted glass, not tinted boxes. Pills stacked "
                    "vertically with ~10-12px gap. Inside each pill: icon LEFT, text RIGHT.",
    "frosted-circle":"frosted-glass CIRCULAR icon-badges (perfect circles, ~40-46px, NOT pills, NOT rectangles), "
                    "semi-transparent ({plaque_bg}) at ~35% opacity with backdrop-blur ~10-12px, 1px hairline "
                    "highlight at top in {text_light} at 30% opacity, very thin border in {text_dark} at 10% "
                    "opacity. Icon inside the circle. USP text rendered DIRECTLY beside the circle ON the photo "
                    "(NO plaque around text), with subtle 2-3px drop-shadow for legibility. Maximum 'photo "
                    "shines through' feeling — minimal visual weight on overlay.",
    "outline-pill": "OUTLINE-only pills — fully TRANSPARENT background, just a 1.5px stroke border in {text_dark} "
                    "(or {text_light} on dark photos), border-radius ~14px, NO shadow, NO fill. Inside each pill: "
                    "icon LEFT, text RIGHT. Photo behind is fully visible. Very airy, very contemporary editorial "
                    "look. Pills stacked vertically with ~10px gap.",
    "accent-circle-icon":
                    "circular icon-badges (perfect circles, ~44-50px) FILLED with the brand accent color ({accent_1}) "
                    "at 100% opacity — these are NOT white pills, they are SOLID ACCENT-COLOR discs. Icon inside the "
                    "circle is rendered in {text_light} (white). USP text is rendered DIRECTLY on the photo beside "
                    "the circle (NO plaque around text), color {text_dark} on light photo regions or {text_light} on "
                    "dark photo regions, weight 600. Each USP item: solid colored circle LEFT, text RIGHT. "
                    "Pills stacked vertically with ~12px gap. Bold, conversion-driven look.",
    "mini-grey-pill":
                    "compact rounded WARM-GREY pills in light cool grey (#E8EAF0 or #F0EDE8), 100% opacity, "
                    "border-radius ~10-12px, very tight padding. Each pill is SHORT — 2-4 words maximum, "
                    "often split into 2 lines (label-cap on top in 10-11px {text_dark} weight 600, descriptor "
                    "below in 8-9px {text_dark} weight 500). Inside each pill: small FILLED icon LEFT (~18px) "
                    "in {accent_1} (the brand accent color — vivid saturated hue, NOT grey), text RIGHT. "
                    "Pills are placed ASYMMETRICALLY around the product — typically 2-3 on one side, 1-2 on "
                    "the other side, NOT a clean single-column stack. If ONE of the user's benefit lines "
                    "contains a number/unit (e.g. '76% хлопок', '5кг', '40-50 размер'), you MAY render that "
                    "exact number as a bigger numeric callout in {accent_1}. NEVER invent numbers, weights, "
                    "percentages, sizes that are NOT in the provided benefit lines.",
    "tech-pill":    "rounded rectangular pills with COOL-BLUE gradient fill (light blue #DEE7F4 → mid-blue "
                    "#A8C5D9, OR a tone-on-tone variant of {accent_1}), border-radius ~12px, soft 4px shadow. "
                    "Each pill is laid out as TWO TIERS inside: LABEL on top (uppercase, 10-12px, {text_dark} "
                    "weight 500, slight letter-spacing), and BIG VALUE below (extra-bold sans-serif, 22-32px, "
                    "{text_dark}). The VALUE is the visual hero — make it big. If the user's benefit text "
                    "ALREADY CONTAINS a number/spec (e.g. 'D6мм', '76% хлопок', '5кг'), use that exact "
                    "number as the value with a short label above. If the benefit has no number, split the "
                    "phrase into label+descriptor — the SHORT NOUN goes on top as label ('МАТЕРИАЛ', "
                    "'ПОКРЫТИЕ'), the DESCRIPTOR goes below as the big value ('Дуб', 'Влаго-стойкое'). "
                    "ABSOLUTELY DO NOT invent numbers, weights, sizes, or percentages that are NOT present "
                    "in the user's benefit lines. Pills positioned in a VERTICAL STACK on the right side "
                    "(3-4 pills), each pill ~22% of frame height. They look like a TECHNICAL DATASHEET "
                    "with engineered spec callouts.",
}

_ICON_STYLE_DESCRIPTION = {
    "line-art": "thin LINE-ART strokes (~2px, single color {accent_1}), flat 2D, NO fill, NO shadow, NO 3D, "
                "hand-drawn appearance, schematic and elegant",
    "filled":   "solid FILLED silhouettes in {text_light} (or {accent_1} if on light plaque), "
                "flat geometric shapes, NO outline, NO gradient",
    "duotone":  "DUOTONE icons — solid filled silhouette in {text_dark} with one contrasting "
                "stripe/dot in {accent_1}, flat geometric",
    "filled-on-accent":
                "WHITE-FILLED silhouette icons sitting on a SOLID accent-color disc (the disc is the plaque "
                "background). Icon is {text_light} (white), disc is {accent_1}, no outline, no gradient — "
                "very clean conversion-pop style. Pair with usp_plaque='accent-circle-icon' or 'block'.",
    "none":     "ABSOLUTELY NO icons, NO pictograms, NO badges, NO symbols. ZERO drawn icon glyphs "
                "anywhere in the frame. Pure typography only. If you draw any icon-like element, "
                "you have failed the brief.",
}

_MOOD_DESCRIPTION = {
    "calm-minimal":     "premium, calm, aspirational. Plenty of breathing room. Like Aesop / MUJI",
    "bold-marketplace": "high-energy, confident, conversion-driven. Reads instantly from a phone thumbnail. NEVER include the literal word 'marketplace' or 'marketplace pop' anywhere in the rendered image",
    "natural-craft":    "warm, handmade, trustworthy, slow-living. Like an Etsy artisan lookbook",
    "tech-futuristic":  "technical, futuristic, premium spec-sheet. Restrained, never decorative",
    "editorial":        "high-end fashion magazine cover. Refined, calm, quietly confident",
    "playful":          "warm, friendly, slightly informal. Generous color, friendly icons",
    "modern-glass":     "Apple Vision Pro / iOS-26 liquid-glass aesthetic — frosted translucent surfaces, "
                        "soft inner highlights, photo-first. Premium and unmistakably contemporary",
    "clean-airy":       "minimal contemporary editorial — generous whitespace, hairline strokes, no heavy "
                        "fills. Photo dominates; overlay is almost invisible until you read it",
    "fashion-oversized":"streetwear / fashion-editorial energy — huge display typography that the product "
                        "visually breaks through, magazine-cover boldness, confident and modern",
    "tech-spec":        "technical spec-sheet aesthetic — cool blues, numeric callouts, restrained, "
                        "engineering-precise. Like a product datasheet meets a WB/Ozon card",
    "petfood-bold":     "high-conversion FMCG energy — saturated accent color owns the frame, big "
                        "all-caps title, scannable callouts. Reads instantly from a phone thumbnail",
}


_QUOTES = "«»“”‘’‚„‹›\"'"


def _strip_quotes(s: str) -> str:
    """Удаляет окружающие декоративные кавычки/скобки из текста.
    «КЕНТУККИ» → КЕНТУККИ, "Полка" → Полка, 'foo' → foo."""
    s = (s or "").strip()
    while s and s[0] in _QUOTES:
        s = s[1:]
    while s and s[-1] in _QUOTES:
        s = s[:-1]
    return s.strip()


def _bullets(utp: list[str], n: int = 4) -> list[str]:
    """Возвращает чистые тексты УТП без иконок-разделителей и декоративных кавычек."""
    return [_strip_quotes(u.split("\t")[-1]) for u in (utp or [])[:n]
            if u and u.split("\t")[-1].strip()]


def _fmt(template: str, kit: dict) -> str:
    """Подставляет цвета из палитры в шаблон с {plaque_bg}, {accent_1}, {text_dark}, {text_light}."""
    p = kit.get("palette") or {}
    return template.format(
        plaque_bg=p.get("plaque_bg") or "#FFFFFF",
        accent_1=p.get("accent_1") or "#6B5444",
        accent_2=p.get("accent_2") or p.get("accent_1") or "#6B5444",
        text_dark=p.get("text_dark") or "#1F2937",
        text_light=p.get("text_light") or "#FFFFFF",
    )


def build_brand_overlay(kit: dict, title: str, utp: list[str]) -> str:
    """Универсальный билдер overlay-блока из параметров brand kit'а."""
    palette = kit.get("palette") or {}
    typo = kit.get("typography") or {}
    deco = kit.get("decoration") or {}
    mood = kit.get("mood") or "calm-minimal"

    # Цвета
    text_dark = palette.get("text_dark") or "#1F2937"
    text_light = palette.get("text_light") or "#FFFFFF"
    accent_1 = palette.get("accent_1") or "#6B5444"
    plaque_bg = palette.get("plaque_bg") or "#FFFFFF"

    # Типографика
    title_font_key = typo.get("title_font") or "geometric-sans"
    title_weight_key = typo.get("title_weight") or "semibold"
    title_case = typo.get("title_case") or "sentence"
    body_font_key = typo.get("body_font") or title_font_key

    title_font = _FONT_DESCRIPTION.get(title_font_key, _FONT_DESCRIPTION["geometric-sans"])
    title_weight = _WEIGHT_DESCRIPTION.get(title_weight_key, _WEIGHT_DESCRIPTION["semibold"])
    body_font = _FONT_DESCRIPTION.get(body_font_key, title_font)

    # Декорации
    title_plaque_key = deco.get("title_plaque") or "none"
    usp_plaque_key = deco.get("usp_plaque") or "circle-icon"
    icon_style_key = deco.get("icon_style") or "line-art"
    has_kicker = bool(deco.get("kicker"))

    title_plaque_desc = _fmt(_TITLE_PLAQUE_DESCRIPTION.get(title_plaque_key, _TITLE_PLAQUE_DESCRIPTION["none"]), kit)
    usp_plaque_desc = _fmt(_USP_PLAQUE_DESCRIPTION.get(usp_plaque_key, _USP_PLAQUE_DESCRIPTION["circle-icon"]), kit)
    icon_style_desc = _fmt(_ICON_STYLE_DESCRIPTION.get(icon_style_key, _ICON_STYLE_DESCRIPTION["line-art"]), kit)
    # Если в kit'е есть icon_style_hint от референса — это конкретное визуальное описание,
    # которое надо обязательно использовать (приоритет над общим icon_style enum).
    icon_style_hint = (deco.get("icon_style_hint") or "").strip()
    if icon_style_hint:
        icon_style_desc = (
            f"{icon_style_desc}. SPECIFIC visual style from the seller's reference image: "
            f"{icon_style_hint}. Match this reference style EXACTLY across all icons — "
            f"same stroke weight, same fill style, same shape language, same colors."
        )
    mood_desc = _MOOD_DESCRIPTION.get(mood, _MOOD_DESCRIPTION["calm-minimal"])

    # Подготовка текстов
    bullets = _bullets(utp)
    bullets_block = "\n".join(f"     {i+1}. {b}" for i, b in enumerate(bullets)) or "     (no USP texts)"
    safe_title = _strip_quotes(title or "")[:90]

    # Title casing подсказки
    if title_case == "upper":
        case_hint = "Render the headline in ALL CAPS."
    elif title_case == "hero-split" and " " in safe_title:
        words = safe_title.split()
        case_hint = (f"Hero-word/descriptor split: render the word [{words[0]}] on line 1 in "
                     f"{title_weight} (very heavy), and the words [{' '.join(words[1:])}] on line 2 "
                     f"in weight 400-500 (light). Same color, same font. Render the words THEMSELVES, "
                     f"WITHOUT the brackets and WITHOUT any quotes around them.")
    else:
        case_hint = "Render in Sentence case."

    if title_plaque_key == "accent-color":
        title_color_rule = (f"Title text color: STRICTLY {accent_1} (the brand ACCENT color — could be "
                            f"a saturated golden, yellow, orange, red, or other vivid hue depending on "
                            f"the kit). NOT white, NOT black, NOT {text_dark}. The title is the loudest "
                            f"color in the frame.")
    elif title_plaque_key == "oversized-cover":
        title_color_rule = (f"Title text color: {text_light} at ~80% opacity (or soft pale grey #ECEAE6). "
                            f"The title is a quiet background layer, NOT a bold foreground element. "
                            f"The product, in front of it, is the visual hero.")
    elif title_plaque_key == "none":
        title_color_rule = (f"Color rule: if the photo region behind the title is light/neutral → use "
                            f"{text_dark}; if dark or busy → use {text_light} with subtle drop-shadow.")
    else:
        title_color_rule = f"Title text color: {text_dark} (or {text_light} if plaque is dark)."

    # Сборка блока. Мы намеренно НЕ используем «═══ TITLE ═══» / «═══ USP ═══» / любые
    # другие явные секционные баннеры — Gemini Image склонна копировать такие выделенные
    # слова прямо на холст. Описания идут как обычный связный текст инструкции.
    parts = [
        "",
        "Add brand typography and feature callouts on top of the photo:",
        "",
        # Headline / заголовок
        f"Headline placement & rendering:",
        f"- Position the headline at the very top of the frame (~20% of frame height).",
        f"- Background container behind the headline: {title_plaque_desc}.",
        f"- Headline typeface: {title_font}, weight {title_weight}, line-height 1.05-1.15, max 2 lines.",
        f"- {case_hint}",
        f"- {title_color_rule}",
        f"- Render this exact Russian text as the headline (no surrounding quotes/brackets, "
        f"no extra labels around it):",
        f"     {safe_title}",
        "",
        # Feature callouts / УТП-плашки
        f"Feature callouts (the {len(bullets)} short benefit lines below):",
        f"- Place them in EMPTY regions of the frame — typically along the right edge, "
        f"or top-right corner, or distributed in negative space around the product.",
        f"- They NEVER overlap the product silhouette — every callout sits over background "
        f"(wall, floor, sky, negative space). Comfortable breathing room around each.",
        f"- Plaque container per callout: {usp_plaque_desc}.",
        f"- Text inside callouts: {body_font}, weight 500-600, 1-2 lines per item, "
        f"color {text_dark} (or {text_light} if the plaque is dark).",
        "",
        f"The {len(bullets)} benefit lines, top to bottom:",
        bullets_block,
    ]

    # ── Иконки рядом с УТП — критично для visual richness ────────────────────
    # Banana по дефолту склонна пропускать мелкую графику рядом с текстом.
    # Если icon_style != "none" — добавляем ОТДЕЛЬНЫЙ блок-инструкцию с явным
    # требованием рисовать иконку слева от каждого callout, плюс конкретные
    # текст→иконка mapping примеры на основе русских УТП. Это резко повышает
    # вероятность что Banana действительно нарисует иконки.
    if icon_style_key != "none":
        # Простой эвристический mapping: ключевое слово в УТП → подходящая иконка.
        # Один пример помогает Banana понять паттерн (few-shot in prompt).
        icon_examples = []
        for b in bullets[:4]:
            bl = (b or "").lower()
            if any(k in bl for k in ("вод", "влаг", "water")):
                icon_examples.append((b, "a water-droplet outline"))
            elif any(k in bl for k in ("сапфир", "стекл", "хрусталь", "кристалл", "gem")):
                icon_examples.append((b, "a faceted gem / diamond outline"))
            elif any(k in bl for k in ("швейцар", "swiss", "герман", "сделано", "made in", "произвед")):
                icon_examples.append((b, "an award medal / ribbon outline"))
            elif any(k in bl for k in ("гаранти", "сертиф", "проверен", "оригинал", "shield")):
                icon_examples.append((b, "a shield-with-checkmark outline"))
            elif any(k in bl for k in ("дерев", "дуб", "ясен", "орех", "wood")):
                icon_examples.append((b, "a pine/leaf tree outline"))
            elif any(k in bl for k in ("кожан", "leather", "шерст", "хлопок", "лён", "лен")):
                icon_examples.append((b, "a leaf outline (natural material)"))
            elif any(k in bl for k in ("вес", "грузоп", "выдерж", "до 1", "до 2", "кг", "тонн")):
                icon_examples.append((b, "a balance-scale outline"))
            elif any(k in bl for k in ("размер", "длин", "ширин", "высот", "см", "мм", "metric")):
                icon_examples.append((b, "a ruler outline"))
            elif any(k in bl for k in ("батаре", "аккум", "заряд", "battery")):
                icon_examples.append((b, "a battery outline"))
            elif any(k in bl for k in ("свет", "led", "ярк", "lumen", "lamp")):
                icon_examples.append((b, "a sun-rays outline"))
            elif any(k in bl for k in ("эко", "натур", "органи", "organic")):
                icon_examples.append((b, "a leaf outline"))
            elif any(k in bl for k in ("огонь", "тепл", "грев", "пламя", "fire")):
                icon_examples.append((b, "a flame outline"))
            elif any(k in bl for k in ("звук", "беззвуч", "тих", "sound", "audio")):
                icon_examples.append((b, "a sound-wave outline"))
            else:
                icon_examples.append((b, "a clean check-mark outline"))

        examples_block = "\n".join(
            f"     • «{b}» → {ic}"
            for (b, ic) in icon_examples
        )
        parts += [
            "",
            f"⭐ KEY VISUAL DETAIL — icons inside callouts (DO NOT SKIP):",
            f"- Inside EVERY callout, render a small icon (≈18-22px) to the LEFT of the text, "
            f"centred vertically with the text line. The text and the icon share one row.",
            f"- Icon style: {icon_style_desc}",
            f"- All icons in the frame share the EXACT same stroke weight (~2px), same color "
            f"({accent_1}), same line-cap (round), same proportions. Visually consistent set.",
            f"- Suggested icon mapping for THIS card's USPs (use exactly these or close synonyms):",
            examples_block,
            f"- Icons are an obligatory part of the design. A callout WITHOUT an icon is broken — "
            f"render every single one.",
        ]

    if has_kicker:
        parts += [
            "",
            f"Bottom-of-frame brand-essence caption (~6% of frame height, NO plaque):",
            f"- Single line rendered directly on the image, all-caps, sans-serif weight 500, "
            f"generous letter-spacing (+4-8%). Same color rule as the headline. "
            f"Optional — skip if the headline already covers the brand essence.",
        ]

    parts += [
        "",
        f"Overall mood and colour palette:",
        f"- Overall mood: {mood_desc}.",
        f"- Palette is strictly: text in {text_dark}/{text_light}, accent in {accent_1}, "
        f"plaques in {plaque_bg}. Do NOT introduce colours outside this palette.",
    ]

    # ── PER-KIT CRITICAL RULES (для исправления типичных промахов AI-image модели) ──
    critical = []

    # bare_typography: и плашки и иконки выключены — модель часто всё равно дорисовывает кружки/баннеры.
    if usp_plaque_key == "none" and icon_style_key == "none":
        title_no_plaque_clause = (
            " AND ZERO container behind the headline (no cream-box, no soft-pill, no rectangle, "
            "no shape under the title — the title text sits DIRECTLY on the photo with only a "
            "subtle drop-shadow)" if title_plaque_key == "none" else ""
        )
        critical.append(
            f"FINAL CRITICAL RULE — TYPOGRAPHY-ONLY MODE: ZERO icons, ZERO circles, ZERO badges, "
            f"ZERO pills, ZERO boxes, ZERO frames, ZERO decorative shapes anywhere in the frame"
            f"{title_no_plaque_clause}. The ONLY graphic elements are: (1) the photo of the "
            f"product, (2) the headline text, (3) the benefit text lines. Nothing else. "
            f"If you draw ONE rectangle/circle/box/badge anywhere, you have failed the brief."
        )

    # bold_accent_caps: title MUST в accent_1 цвете
    if title_plaque_key == "accent-color":
        critical.append(
            f"FINAL CRITICAL RULE — TITLE COLOR: the title text fill MUST be the SATURATED ACCENT "
            f"hue {accent_1} — a vivid warm color (think marigold gold, honey amber, mustard yellow, "
            f"electric orange). It MUST stand out as the most chromatic element in the frame. "
            f"DO NOT render it white. DO NOT render it black or dark. DO NOT desaturate. If the title "
            f"comes out white or grey, the brief is FAILED — re-render it in the accent hex {accent_1}. "
            f"Imagine a Whiskas / Friskies pet-food package: the brand name screams in saturated yellow."
        )

    # oversized_hero: title BEHIND the product (depth illusion)
    if title_plaque_key == "oversized-cover":
        critical.append(
            f"FINAL CRITICAL RULE — TITLE BEHIND PRODUCT: this is the SIGNATURE effect of this style. "
            f"The huge ALL-CAPS title is rendered FIRST as a BACKGROUND layer (z-order: behind), then "
            f"the product/model is rendered IN FRONT, partially covering and INTERRUPTING the title "
            f"letters. Some letters of the title MUST be visually broken/occluded by the product "
            f"silhouette. Think of a magazine cover where the headline runs behind the model's body. "
            f"Title color is a quiet pale neutral ({text_light} at 80% opacity). DO NOT render the "
            f"title above or below the product — render it BEHIND, with the product cutting through."
        )

    # marketplace_pop: яркий акцент должен быть видим
    if title_plaque_key == "outline-accent" and usp_plaque_key == "mini-grey-pill":
        critical.append(
            f"FINAL CRITICAL RULE — BRIGHT ACCENT: the title outline pill MUST have its border in "
            f"{accent_1} (a SATURATED VIVID color — for example bright blue, vivid red, electric "
            f"orange — NOT a soft pastel and NOT {text_dark}). Big numeric callouts (sizes, weights, "
            f"%) inside grey pills MUST be in {accent_1} extra-bold. The frame should pop with "
            f"this accent color. Restrained/calm = FAIL."
        )

    # industrial_tech: tech-pills с numeric specs обязательны
    if usp_plaque_key == "tech-pill":
        critical.append(
            f"FINAL CRITICAL RULE — TECH-PILL FORMAT: each USP plaque MUST be a rounded rectangle "
            f"(border-radius ~12px) with COOL-BLUE gradient fill (light blue #DEE7F4 to mid-blue, "
            f"OR derived from {accent_1}). Inside each pill: small uppercase label on top "
            f"(e.g. 'РАЗМЕР', 'ДЛИНА', 'ВЕС'), and BIG numeric value below (e.g. '60см', '76%', "
            f"'2L', '5кг') in extra-bold sans-serif at 22-28px. NOT plain pills, NOT circles, NOT "
            f"line-art icons — these are TECHNICAL SPEC pills with NUMBERS as the visual focus."
        )

    if critical:
        parts.append("")
        parts.append("Strict rendering rules for this brand kit (do not deviate):")
        parts.extend(critical)

    parts += [
        "",
        _OVERLAY_HARD_RULES,
    ]
    return "\n".join(parts)


# ──────────────────────────────────────────────────────────────────────────────
# STARTER KITS — отправные точки для AI/UI
# ──────────────────────────────────────────────────────────────────────────────
#
# Каждый starter kit — это валидный brand kit, с которого селлер может начать.
# AI-агент может вернуть один из них как первое предложение и далее тонко настроить.
# ─────────────────────────────────────────────────────────────────────────────

STARTER_KITS: dict[str, dict] = {
    # ──────────────────────────────────────────────────────────────────────────
    # 6 АКТУАЛЬНЫХ ПРЕСЕТОВ (2026-04-28) — переработка по реальным WB/Ozon образцам
    # ──────────────────────────────────────────────────────────────────────────

    # 1. Чистая типографика — текст и заголовок прямо на фото, без плашек
    #    Референс: журнальный стол с серифным заголовком; "PREMIUM ткань" вертикальный текст
    "bare_typography": {
        "version": 1,
        "palette":  {"text_dark": "#1F2937", "text_light": "#FFFFFF",
                     "accent_1":  "#6B5444", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "none", "usp_plaque": "none",
                       "icon_style": "none", "kicker": False},
        "mood": "clean-airy",
    },

    # 2. Glass-карточка — frosted glass плашки, текст хорошо читается, фото просвечивает
    #    Референс: "Журнальный столик / Массив дуба" с frosted-glass пиллом сверху
    "glass_card": {
        "version": 1,
        "palette":  {"text_dark": "#101828", "text_light": "#FFFFFF",
                     "accent_1":  "#0EA5E9", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "glass", "usp_plaque": "glass-pill",
                       "icon_style": "line-art", "kicker": False},
        "mood": "modern-glass",
    },

    # 3. Большой акцент — UPPER заголовок ярким акцентным цветом, иконки на цветных кругах
    #    Референс: AWARD корм для котов; VOIS МАСКА для волос
    "bold_accent_caps": {
        "version": 1,
        "palette":  {"text_dark": "#1A1F2E", "text_light": "#FFFFFF",
                     "accent_1":  "#FFB400", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "extrabold",
                       "title_case": "upper", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "accent-color", "usp_plaque": "accent-circle-icon",
                       "icon_style": "filled-on-accent", "kicker": False},
        "mood": "petfood-bold",
    },

    # 4. Огромный заголовок — ALL-CAPS заголовок частично перекрыт товаром, fashion-стиль
    #    Референс: BAGGY штаны (карточка товара и каталог)
    "oversized_hero": {
        "version": 1,
        "palette":  {"text_dark": "#14171F", "text_light": "#ECEAE6",
                     "accent_1":  "#1F2937", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "extrabold",
                       "title_case": "upper", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "oversized-cover", "usp_plaque": "mini-grey-pill",
                       "icon_style": "none", "kicker": False},
        "mood": "fashion-oversized",
    },

    # 5. Маркетплейс-поп — UPPER заголовок + outline-pill подзаголовок, мелкие серые pillы
    #    Референс: ШОРТЫ спортивные для девочек
    "marketplace_pop": {
        "version": 1,
        "palette":  {"text_dark": "#0F1B2D", "text_light": "#FFFFFF",
                     "accent_1":  "#2563EB", "accent_2": "#F1F4F9", "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "extrabold",
                       "title_case": "hero-split", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "outline-accent", "usp_plaque": "mini-grey-pill",
                       "icon_style": "filled", "kicker": False},
        "mood": "bold-marketplace",
    },

    # 6. Тех-pill — заголовок sentence-case с акцентом, цветные tech-pills с цифрами
    #    Референс: РАДИУСНАЯ ФРЕЗА; VOIS Кондиционер 2.0
    "industrial_tech": {
        "version": 1,
        "palette":  {"text_dark": "#0F2547", "text_light": "#FFFFFF",
                     "accent_1":  "#1E5BD9", "accent_2": "#A8C5D9", "plaque_bg": "#DEE7F4"},
        "typography": {"title_font": "geometric-sans", "title_weight": "extrabold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "none", "usp_plaque": "tech-pill",
                       "icon_style": "filled", "kicker": False},
        "mood": "tech-spec",
    },

    # ──────────────────────────────────────────────────────────────────────────
    # АРХИВ — старые пресеты (хранятся для backward compat существующих kit'ов
    # с _meta.starter_preset = "minimal_premium" и т.п. В UI каталог выводит ТОЛЬКО
    # 6 актуальных через STARTER_KITS_META).
    # ──────────────────────────────────────────────────────────────────────────

    # 1. Минимал-Премиум — Aidentika / Aesop look (default)
    "minimal_premium": {
        "version": 1,
        "palette":  {"text_dark": "#1F2937", "text_light": "#FFFFFF",
                     "accent_1":  "#8B7355", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "soft-pill", "usp_plaque": "soft-pill",
                       "icon_style": "line-art", "kicker": False},
        "mood": "calm-minimal",
    },

    # 2. Брендовый минимал — Mielo Masta / MUJI look (без подложек, малые круги)
    "clean_typography": {
        "version": 1,
        "palette":  {"text_dark": "#14171F", "text_light": "#FFFFFF",
                     "accent_1":  "#6B5444", "accent_2": None, "plaque_bg": "#F5EDE0"},
        "typography": {"title_font": "geometric-sans", "title_weight": "extrabold",
                       "title_case": "hero-split", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "none", "usp_plaque": "circle-icon",
                       "icon_style": "line-art", "kicker": True},
        "mood": "calm-minimal",
    },

    # 3. Эко / Крафт — Etsy / artisan look
    "eco_natural": {
        "version": 1,
        "palette":  {"text_dark": "#4A5D3A", "text_light": "#FFFFFF",
                     "accent_1":  "#4A5D3A", "accent_2": "#9C5C3A", "plaque_bg": "#F5EDE0"},
        "typography": {"title_font": "display-serif", "title_weight": "regular",
                       "title_case": "sentence", "body_font": "display-serif"},
        "decoration": {"title_plaque": "organic", "usp_plaque": "leaf",
                       "icon_style": "line-art", "kicker": False},
        "mood": "natural-craft",
    },

    # 4. Tech Dark — premium electronics
    "tech_dark": {
        "version": 1,
        "palette":  {"text_dark": "#1A1D24", "text_light": "#FFFFFF",
                     "accent_1":  "#5BD9F0", "accent_2": None, "plaque_bg": "#1A1D24"},
        "typography": {"title_font": "technical-thin", "title_weight": "light",
                       "title_case": "sentence", "body_font": "technical-thin"},
        "decoration": {"title_plaque": "soft-pill", "usp_plaque": "soft-pill",
                       "icon_style": "line-art", "kicker": False},
        "mood": "tech-futuristic",
    },

    # 5. Журнал — Vogue / Kinfolk look (НЕТ подложек, крупный serif)
    "magazine_editorial": {
        "version": 1,
        "palette":  {"text_dark": "#14171F", "text_light": "#FFFFFF",
                     "accent_1":  "#1F2937", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "display-serif", "title_weight": "regular",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "none", "usp_plaque": "none",
                       "icon_style": "none", "kicker": True},
        "mood": "editorial",
    },

    # 6. Bento — Apple Keynote / dashboard look
    "bento_grid": {
        "version": 1,
        "palette":  {"text_dark": "#1F2937", "text_light": "#FFFFFF",
                     "accent_1":  "#8B7355", "accent_2": "#A8C5D9", "plaque_bg": "#F5EFE5"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "block", "usp_plaque": "bento",
                       "icon_style": "duotone", "kicker": False},
        "mood": "calm-minimal",
    },

    # 7. Стекло-Модерн — iOS / visionOS frosted-glass плашки
    "glass_modern": {
        "version": 1,
        "palette":  {"text_dark": "#101828", "text_light": "#FFFFFF",
                     "accent_1":  "#0EA5E9", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "glass", "usp_plaque": "glass-pill",
                       "icon_style": "line-art", "kicker": False},
        "mood": "modern-glass",
    },

    # 8. Прозрачные круги — frosted-glass круги-иконки, текст прямо на фото
    "frosted_clean": {
        "version": 1,
        "palette":  {"text_dark": "#14171F", "text_light": "#FFFFFF",
                     "accent_1":  "#6366F1", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "glass", "usp_plaque": "frosted-circle",
                       "icon_style": "line-art", "kicker": False},
        "mood": "modern-glass",
    },

    # 9. Контурный минимал — только обводки, фото видно полностью
    "outline_minimal": {
        "version": 1,
        "palette":  {"text_dark": "#1F2937", "text_light": "#FFFFFF",
                     "accent_1":  "#1F2937", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "outline", "usp_plaque": "outline-pill",
                       "icon_style": "line-art", "kicker": False},
        "mood": "clean-airy",
    },

    # 10. Без декораций — чистая типографика, никаких плашек / иконок ("без стилей")
    "bare_minimal": {
        "version": 1,
        "palette":  {"text_dark": "#111827", "text_light": "#FFFFFF",
                     "accent_1":  "#111827", "accent_2": None, "plaque_bg": "#FFFFFF"},
        "typography": {"title_font": "geometric-sans", "title_weight": "semibold",
                       "title_case": "sentence", "body_font": "geometric-sans"},
        "decoration": {"title_plaque": "none", "usp_plaque": "none",
                       "icon_style": "none", "kicker": False},
        "mood": "clean-airy",
    },
}

# Метаданные ТОЛЬКО 6 актуальных пресетов для UI-селектора (label, tagline, best_for, preview_url).
# Старые kit'ы остаются в STARTER_KITS для обратной совместимости, но в каталоге не видны.
# preview_url — путь к примеру карточки в этом стиле (нагенерированы заранее, лежат в /uploads/_presets/).
STARTER_KITS_META = [
    {"key": "bare_typography",  "label": "Чистая типографика",
     "tagline": "Текст и заголовок прямо на фото, без плашек",
     "best_for": ["clothing", "cosmetics", "furniture"],
     "preview_url": "/media/_presets/bare_typography.png"},
    {"key": "glass_card",       "label": "Glass-карточка",
     "tagline": "Frosted-glass плашки, фото просвечивает",
     "best_for": ["cosmetics", "electronics", "clothing", "furniture"],
     "preview_url": "/media/_presets/glass_card.png"},
    {"key": "bold_accent_caps", "label": "Большой акцент",
     "tagline": "ALL-CAPS заголовок ярким цветом, иконки на цветных кругах",
     "best_for": ["food", "cosmetics", "petfood"],
     "preview_url": "/media/_presets/bold_accent_caps.png"},
    {"key": "oversized_hero",   "label": "Огромный заголовок",
     "tagline": "Гигантский ALL-CAPS текст за товаром, fashion-стиль",
     "best_for": ["clothing", "footwear"],
     "preview_url": "/media/_presets/oversized_hero.png"},
    {"key": "marketplace_pop",  "label": "Маркетплейс-поп",
     "tagline": "Заголовок + контурный pill, мелкие серые карточки",
     "best_for": ["clothing", "footwear", "cosmetics", "electronics"],
     "preview_url": "/media/_presets/marketplace_pop.png"},
    {"key": "industrial_tech",  "label": "Тех-pill",
     "tagline": "Цветные tech-pills с характеристиками, инженерный стиль",
     "best_for": ["electronics", "tools", "home"],
     "preview_url": "/media/_presets/industrial_tech.png"},
]


def starter_kit(name: str) -> dict:
    """Возвращает копию starter-kit'а по имени; fallback на minimal_premium."""
    import copy
    return copy.deepcopy(STARTER_KITS.get(name) or STARTER_KITS["minimal_premium"])


# ── Backward-compat (старые точки входа) ──────────────────────────────────────
# Старый код продолжает звать build_card_overlay_block(style, title, utp); мы
# конвертируем строку style в kit и зовём универсальный builder.

def build_card_overlay_block(style: str, title: str, utp: list[str]) -> str:
    return build_brand_overlay(starter_kit(style), title or "", utp or [])


def build_single_card_overlay_block(title: str, utp: list[str]) -> str:
    return build_brand_overlay(starter_kit("minimal_premium"), title or "", utp or [])


# Алиасы для совместимости импортов в других модулях.
CARD_STYLES_META = STARTER_KITS_META  # noqa: F841


# ── MARKETPLACE FORMAT (без whitespace bands!) ────────────────────────────────
MARKETPLACE_FORMAT = """OUTPUT FORMAT: 3:4 portrait orientation (1200×1600).
The composition fills the entire 3:4 frame edge-to-edge — NO letterboxing, NO whitespace bands,
NO padding strips, NO borders. Product centered as the unambiguous hero of the frame.
Scene/environment naturally extends to all four image borders."""


# ── DEFAULT_SCENE_BLOCKS — fallback сцены, когда AI scene_agent недоступен ────────
# Используются как подстановка в {scene_block} placeholder в SCENE_TEMPLATES,
# если scene_agent.propose_scene() вернул None (упал по 429 / другой ошибке).
DEFAULT_SCENE_BLOCKS: dict[str, str] = {
    "clothing_packshot":
        "Scene: high-end e-commerce ghost-mannequin shot. The garment fills as if worn by an invisible "
        "body, hanging naturally with realistic gravity-driven folds, soft shadow under the hem.\n"
        "Background: pure white seamless (#FFFFFF). Frontal ¾ angle, slight 5° turn to camera-right.\n"
        "Light: large diffused softbox 45° front-left, white bounce card camera-right, soft kicker from behind.\n"
        "Camera: 85mm, f/8, garment occupies 80% of vertical frame, centred, every fibre tack-sharp.",

    "clothing_lifestyle":
        "Scene: minimalist sunlit Scandinavian apartment, off-white plastered wall, light oak floor, "
        "single dried-pampas branch in beige stoneware vase, background soft blur.\n"
        "Light: soft warm morning light from tall window camera-left.\n"
        "Atmosphere: editorial calm aspirational mood.\n"
        "Camera: 50mm, f/4, garment stays fully sharp.",

    "clothing_macro":
        "Scene: extreme close-up of the construction zone showing exact hardware, stitch density, "
        "thread colour, fabric weave and material finish.\n"
        "Background: neutral warm-grey backdrop (#E8E4DE).\n"
        "Light: soft top-down lighting with single low-angle rim light to reveal weave texture.\n"
        "Camera: 100mm macro, f/8, focus-stacked, tack-sharp on hardware and stitching.",

    "furniture_packshot":
        "Scene: clean studio product shot. Furniture on cyc-style seamless surface, warm grey at "
        "floor (#F2EFEA) to white at top.\n"
        "Composition: ¾ front view, lens at ⅓ of piece's height, front face and right side visible. "
        "Furniture ~85% of frame.\n"
        "Light: large overhead softbox as key, two side fills, subtle floor contact shadow.\n"
        "Camera: 50mm, f/11, deep focus — every dovetail, hinge cup, grain line tack-sharp.",

    "furniture_lifestyle":
        "Scene: warm contemporary Scandinavian living room, off-white plastered walls, light oak parquet. "
        "Bouclé armchair in oat colour at background, ceramic vase with eucalyptus on side table, "
        "slim arc floor lamp with brass stem.\n"
        "Light: late afternoon natural sunlight from large window camera-right, long soft shadows.\n"
        "Composition: featured furniture is unambiguous hero, centred and fully visible ¾ front angle. "
        "No props overlap or hide hardware or construction details.\n"
        "Atmosphere: premium calm Scandinavian aesthetic, warm and inviting.\n"
        "Camera: 35mm, eye-level, f/5.6.",

    "furniture_macro":
        "Scene: extreme close-up of the key construction detail (dovetail joint / concealed hinge / "
        "through-tenon / brass handle / upholstery button tuft).\n"
        "Background: neutral warm-grey backdrop.\n"
        "Light: soft raking light from camera-left at 30° to reveal texture, gentle fill from right.\n"
        "Camera: 100mm macro, f/8, focus-stacked for full sharpness.",

    "cosmetics_packshot":
        "Scene: clean studio product shot. Subtle gradient background, warm off-white top to soft "
        "beige bottom. Product upright, slight ¾ angle (5° right) to show front label and side profile.\n"
        "Light: soft frontal key light, two side bounces, faint contact shadow at base. Label fully "
        "readable, no glare on text.\n"
        "Camera: 85mm macro, f/8, label tack-sharp.",

    "cosmetics_lifestyle":
        "Scene: minimalist marble surface lifestyle shot. Product as hero with 2-3 complementary props "
        "(fresh botanicals, cotton pads, small ceramic dish) arranged asymmetrically.\n"
        "Light: soft diffused natural light from window camera-left, slight warm tone.\n"
        "Camera: 50mm, f/3.5. Product fully sharp, props slightly soft.",

    "food_packshot":
        "Scene: appetising food still life. Package as hero, centre frame, slight ¾ angle. Around it: "
        "relevant fresh ingredients matching the product category. Wood-grain table surface in soft focus.\n"
        "Light: warm natural side light from camera-left through soft scrim.\n"
        "Camera: 50mm, f/4, hero package tack-sharp, props soft.",

    "food_lifestyle":
        "Scene: warm kitchen lifestyle. Product prominently featured in natural use context. "
        "Wooden surfaces, fresh ingredients, cosy domestic atmosphere.\n"
        "Light: natural daylight.\n"
        "Camera: 35mm, f/4. Product always fully visible and sharp.",

    "electronics_packshot":
        "Scene: premium tech product shot on clean neutral surface. Slight angle showing front and one side.\n"
        "Light: controlled studio lighting with subtle reflections on glossy surfaces. No harsh reflections "
        "on screen areas.\n"
        "Camera: 85mm, f/8, deep focus.",

    "electronics_lifestyle":
        "Scene: modern workspace lifestyle with the device as hero. Clean minimal desk setup, neutral "
        "tones, person's hands optionally in frame using the device.\n"
        "Light: soft natural window light.\n"
        "Camera: 35mm, f/4. All ports, buttons and logos clearly visible.",

    # ── НОВЫЕ СЦЕНАРИИ ────────────────────────────────────────────────────

    # CLOTHING — новые
    "clothing_ghost":
        "Scene: high-end e-commerce ghost-mannequin shot. The garment fills as if worn by an invisible "
        "body, hanging naturally with realistic gravity-driven folds, soft shadow under the hem.\n"
        "Background: pure white seamless (#FFFFFF). Frontal ¾ angle, slight 5° turn to camera-right.\n"
        "Light: large diffused softbox 45° front-left, white bounce card camera-right, soft kicker from behind.\n"
        "Camera: 85mm, f/8, garment occupies 80% of vertical frame, centred, every fibre tack-sharp.",

    "clothing_studio":
        "Scene: studio flat-lay or styled hanger shot on a clean light-grey backdrop (#F2F0EE). Garment "
        "well-pressed, presented frontally, no model. Subtle floor shadow.\n"
        "Light: even softbox lighting from camera-front, slight rim from above for depth.\n"
        "Camera: 85mm, f/8. Fabric texture and seams tack-sharp, colour true-to-life.",

    "clothing_model":
        "Scene: editorial fashion shot. Model in confident standing pose, weight on one leg, relaxed shoulders, "
        "looking just past the camera. Clean studio backdrop in warm neutral (#EDE8E0).\n"
        "Light: soft beauty-dish key 45° camera-front, fill from camera-right, hair-light from behind.\n"
        "Camera: 85mm, f/4, full-body or 3/4 framing, garment fully visible without crops.",

    "clothing_usage":
        "Scene: lifestyle in-context usage. Person wearing the garment in a real environment matching "
        "its purpose (street, café, park, gym, office) — but garment stays the unambiguous hero, fully visible.\n"
        "Light: soft natural daylight, warm tone, gentle shadows.\n"
        "Camera: 35mm, f/4.5. Garment sharp, environment slightly soft.",

    # FURNITURE — новые
    "furniture_white_cube":
        "Scene: pure white-cube studio. Furniture centred on infinite seamless white floor and back wall "
        "(#FFFFFF). Soft contact shadow only. No props, no textures, no decoration.\n"
        "Light: large overhead key + symmetrical fill, even illumination, no harsh shadows.\n"
        "Camera: 50mm, f/11, slight ¾ front view at one-third height of the piece. Furniture ~85% of frame, "
        "every joint and grain line tack-sharp.",

    "furniture_studio":
        "Scene: clean studio product shot. Furniture on cyc-style seamless surface, warm grey at "
        "floor (#F2EFEA) to white at top.\n"
        "Composition: ¾ front view, lens at ⅓ of piece's height. Furniture ~85% of frame.\n"
        "Light: large overhead softbox as key, two side fills, subtle floor contact shadow.\n"
        "Camera: 50mm, f/11, deep focus.",

    "furniture_interior":
        "Scene: warm contemporary Scandinavian living room, off-white plastered walls, light oak parquet. "
        "Featured furniture is the unambiguous hero, ¾ front angle, fully visible. Tasteful complementary "
        "props (vase, lamp, art) but never overlapping or hiding the hero.\n"
        "Light: late afternoon natural sunlight from large window, long soft shadows.\n"
        "Atmosphere: premium calm Scandinavian aesthetic.\n"
        "Camera: 35mm, eye-level, f/5.6.",

    "furniture_outdoor":
        "Scene: furniture in a natural outdoor setting matching its purpose — garden patio, wooden deck "
        "by a forest, terrace overlooking water. Warm natural materials (stone, wood, plants) frame the "
        "scene without overlapping the furniture.\n"
        "Light: golden-hour natural sunlight, soft long shadows.\n"
        "Camera: 35mm, f/5.6. Furniture remains the unambiguous hero, fully visible.",

    "furniture_usage":
        "Scene: furniture in active human use — person sitting on it, placing items, reading at it. "
        "Person stays partial / out of focus; furniture is the hero, fully visible.\n"
        "Light: soft natural daylight from a window.\n"
        "Camera: 35mm, f/4.5.",

    # COSMETICS — новые
    "cosmetics_white_cube":
        "Scene: pure white-cube studio. Product centred on infinite seamless white surface (#FFFFFF), "
        "subtle contact shadow only. No props.\n"
        "Light: even diffused frontal lighting, no glare on label.\n"
        "Camera: 100mm macro, f/11, label and texture tack-sharp.",

    "cosmetics_studio":
        "Scene: clean studio product shot. Subtle gradient background warm off-white top to soft beige "
        "bottom. Product upright, slight ¾ angle (5° right) showing front label and side profile.\n"
        "Light: soft frontal key light, two side bounces, faint contact shadow at base.\n"
        "Camera: 85mm macro, f/8, label tack-sharp, no text glare.",

    "cosmetics_interior":
        "Scene: minimalist marble or wooden surface in a calm bathroom / dressing-room interior. Product "
        "as hero with 2-3 complementary props (fresh botanicals, cotton pads, small ceramic dish).\n"
        "Light: soft diffused natural daylight from window camera-left, slight warm tone.\n"
        "Camera: 50mm, f/3.5. Product fully sharp, props slightly soft.",

    "cosmetics_model":
        "Scene: beauty editorial — model with calm neutral expression, soft natural makeup. Product held "
        "near face or applied subtly. Clean warm backdrop (#EDE8E0).\n"
        "Light: large beauty-dish key 30° front, soft white reflector below for clean fill.\n"
        "Camera: 85mm, f/4. Skin texture preserved, product label fully readable.",

    "cosmetics_usage":
        "Scene: hands actively applying or using the product on skin / hair. Close framing, hero is the "
        "product + the application gesture.\n"
        "Light: soft natural daylight, warm tone.\n"
        "Camera: 100mm macro, f/4.5. Product label visible, application moment captured cleanly.",

    # FOOD — новые
    "food_white_cube":
        "Scene: pure white-cube studio. Package centred on seamless white surface (#FFFFFF), subtle "
        "contact shadow only.\n"
        "Light: even diffused softbox, no glare on label.\n"
        "Camera: 85mm, f/11, label and packaging texture tack-sharp.",

    "food_studio":
        "Scene: appetising food still life. Package as hero, centre frame, slight ¾ angle. Around it: "
        "relevant fresh ingredients matching the product category. Wood-grain table surface in soft focus.\n"
        "Light: warm natural side light from camera-left through soft scrim.\n"
        "Camera: 50mm, f/4, hero package tack-sharp, props soft.",

    "food_serving":
        "Scene: served portion of the product on a stylish plate or bowl, beautiful tableware (linen "
        "napkin, silver cutlery, small glass of water). Wooden or marble table surface, neutral palette.\n"
        "Light: warm natural daylight from window, soft long shadows.\n"
        "Camera: 50mm, f/4, slight overhead angle. Product visible and appetising, package optionally in "
        "soft background.",

    "food_usage":
        "Scene: warm kitchen lifestyle. Product prominently featured in natural use context — being "
        "poured, mixed, eaten. Wooden surfaces, fresh ingredients, cosy domestic atmosphere.\n"
        "Light: natural daylight.\n"
        "Camera: 35mm, f/4. Product always fully visible and sharp.",

    # ELECTRONICS — новые
    "electronics_white_cube":
        "Scene: pure white-cube studio. Device centred on seamless white surface (#FFFFFF), subtle "
        "contact shadow only.\n"
        "Light: controlled diffused lighting, no harsh reflections on screen or glossy surfaces.\n"
        "Camera: 85mm, f/11, all ports / buttons / logos crisp.",

    "electronics_studio":
        "Scene: premium tech product shot on clean neutral surface (#F2EFEA). Slight angle showing front "
        "and one side. Subtle gradient backdrop fading to lighter top.\n"
        "Light: controlled studio lighting with subtle reflections on glossy surfaces. No harsh reflections "
        "on screen areas.\n"
        "Camera: 85mm, f/8, deep focus.",

    "electronics_workspace":
        "Scene: modern minimal workspace — light wood desk, neutral wall, subtle plant or notebook in soft "
        "background. Device as hero on the desk, slight ¾ angle.\n"
        "Light: soft natural window light from camera-right.\n"
        "Camera: 35mm, f/4. All ports, buttons, logos clearly visible.",

    "electronics_usage":
        "Scene: device in active use — hands typing, holding, plugging in cable, or person interacting "
        "with the screen. Real-life context.\n"
        "Light: soft natural daylight.\n"
        "Camera: 35mm, f/4.5. Device fully visible, no obscured branding or details.",

    # OTHER — универсальная категория
    "other_white_cube":
        "Scene: pure white-cube studio. Product centred on seamless white surface (#FFFFFF), subtle "
        "contact shadow only.\n"
        "Light: even diffused softbox, no glare.\n"
        "Camera: 85mm, f/11, every detail tack-sharp.",

    "other_studio":
        "Scene: clean studio product shot. Product on subtle gradient background — warm off-white top "
        "to light grey bottom. Slight ¾ angle showing best face of the item.\n"
        "Light: soft frontal key, two side fills, faint contact shadow.\n"
        "Camera: 85mm, f/8.",

    "other_lifestyle":
        "Scene: tasteful interior lifestyle shot matching the product's nature. Neutral palette, "
        "complementary props that don't overlap the hero. Calm atmosphere.\n"
        "Light: soft natural daylight.\n"
        "Camera: 50mm, f/4. Product unambiguous hero, fully visible.",

    "other_usage":
        "Scene: product in active human use, real environment. Hero stays fully visible and sharp.\n"
        "Light: soft natural daylight.\n"
        "Camera: 35mm, f/4.5.",
}


SCENE_TEMPLATES = {
    # ── CLOTHING ──
    "clothing_packshot": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    "clothing_lifestyle": """{anchor}

{fidelity}

{negatives}

Model: 25-year-old woman, 175 cm, slim athletic build, relaxed pose, weight on left leg, hands at sides,
neutral gaze slightly off-camera. Warm skin, brown shoulder-length hair, natural skin texture preserved
(no over-retouching), no competing jewelry.

{scene_block}

{quality}

{format}""",

    "clothing_macro": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    # ── FURNITURE ──
    "furniture_packshot": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    "furniture_lifestyle": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    "furniture_macro": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    # ── COSMETICS ──
    "cosmetics_packshot": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    "cosmetics_lifestyle": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    # ── FOOD / FMCG ──
    "food_packshot": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    "food_lifestyle": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    # ── ELECTRONICS ──
    "electronics_packshot": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    "electronics_lifestyle": """{anchor}

{fidelity}

{negatives}

{scene_block}

{quality}

{format}""",

    # ── НОВЫЕ СЦЕНАРИИ — все используют единый шаблон с {scene_block} ──
    "clothing_ghost":         """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "clothing_studio":        """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "clothing_model":         """{anchor}\n\n{fidelity}\n\n{negatives}\n\nModel: 25-year-old woman, 175 cm, slim athletic build, relaxed pose, weight on left leg, hands at sides, neutral gaze slightly off-camera. Warm skin, brown shoulder-length hair, natural skin texture preserved (no over-retouching), no competing jewelry.\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "clothing_usage":         """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",

    "furniture_white_cube":   """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "furniture_studio":       """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "furniture_interior":     """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "furniture_outdoor":      """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "furniture_usage":        """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",

    "cosmetics_white_cube":   """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "cosmetics_studio":       """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "cosmetics_interior":     """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "cosmetics_model":        """{anchor}\n\n{fidelity}\n\n{negatives}\n\nModel: 28-year-old woman, soft natural makeup, calm neutral expression, brown shoulder-length hair, warm skin tone preserved (no over-retouching).\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "cosmetics_usage":        """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",

    "food_white_cube":        """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "food_studio":            """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "food_serving":           """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "food_usage":             """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",

    "electronics_white_cube": """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "electronics_studio":     """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "electronics_workspace":  """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "electronics_usage":      """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",

    "other_white_cube":       """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "other_studio":           """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "other_lifestyle":        """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",
    "other_usage":            """{anchor}\n\n{fidelity}\n\n{negatives}\n\n{scene_block}\n\n{quality}\n\n{format}""",

    # ── UNIVERSAL BACKGROUND SWAP — сцена приходит ОТ ПОЛЬЗОВАТЕЛЯ, scene_agent не задействован ──
    "background_swap": """{anchor}

{fidelity}

{negatives}

You are performing BACKGROUND REPLACEMENT only. The product in the attached image must be preserved
at pixel level wherever possible, and at construction-detail level always.
Do not redraw, restyle, or "improve" the product. Keep original silhouette, materials, colours,
hardware, stitching, labels, and proportions exactly.
Keep the original product lighting direction consistent with the new background.

New background: {scene_description}.
Re-render only the environment and contact shadow under the product.

{quality}

{format}""",
}


async def generate_visual_anchor(image_bytes: bytes, mime_type: str = "image/jpeg") -> str:
    """Генерирует визуальный анкор через Gemini Vision."""
    response = await _client.aio.models.generate_content(
        model=settings.TEXT_MODEL,
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
            ANCHOR_SYSTEM_PROMPT,
        ],
        config=types.GenerateContentConfig(temperature=0.1, max_output_tokens=1024),
    )
    return response.text.strip()


PRESERVE_MODEL_DIRECTIVE = (
    "MODEL CONTINUITY: this image is part of a connected product series. "
    "Use the SAME human model identity across all generations of this product: "
    "same face, same skin tone, same hair colour and length, same body proportions, same height. "
    "Treat the model as a fixed character — only pose, framing and lighting may vary. "
    "If the user has previously generated images of this product on a different person, "
    "match that person's appearance precisely. Do not invent a new face."
)


def build_prompt(
    scenario: str,
    anchor: str,
    scene_description: str = "",
    scene_block_override: str | None = None,
    preserve_model: bool = False,
) -> str:
    """Собирает финальный промт из шаблона сцены.

    scene_block_override — готовая scene-секция от scene_agent. Если не передана —
    подставляется дефолтная сцена из DEFAULT_SCENE_BLOCKS.

    preserve_model — если True и сцена с моделью (одежда), инжектится директива
    «использовать ту же модель что в предыдущих генерациях этого товара» —
    для серии связанных кадров с единой внешностью.

    background_swap игнорирует scene_block_override (там сцена приходит из
    scene_description от пользователя).
    """
    template = SCENE_TEMPLATES.get(scenario)
    if not template:
        raise ValueError(f"Unknown scenario: {scenario}")

    # background_swap собирается отдельно — у него сцена через scene_description
    if scenario == "background_swap":
        return template.format(
            anchor=anchor,
            fidelity=FIDELITY_LAYER,
            negatives=NEGATIVE_GUARD,
            quality=QUALITY_BOOST,
            scene_description=scene_description or "soft minimalist neutral environment",
            format=MARKETPLACE_FORMAT,
        )

    # Все остальные сценарии — подставляем либо AI-сцену, либо дефолт.
    scene_block = (scene_block_override or "").strip() or DEFAULT_SCENE_BLOCKS.get(scenario, "")

    prompt = template.format(
        anchor=anchor,
        fidelity=FIDELITY_LAYER,
        negatives=NEGATIVE_GUARD,
        quality=QUALITY_BOOST,
        scene_block=scene_block,
        format=MARKETPLACE_FORMAT,
    )

    # Преемственность модели — для сценариев одежды с моделью / использования
    if preserve_model and scenario in {
        "clothing_model", "clothing_lifestyle", "clothing_usage",
        "cosmetics_model",
    }:
        prompt += f"\n\n{PRESERVE_MODEL_DIRECTIVE}"

    if scene_description:
        # Усилено: сигнал от селлера получает приоритет MUST INCLUDE, а не «incorporate naturally».
        # Прошлая мягкая формулировка приводила к тому что Banana игнорировала специфические
        # пожелания (например, «руки в белых перчатках» превращалось в «пальцы в напалечниках»).
        prompt += (
            "\n\n═══════════════════════════════════════════════════════════════════\n"
            "MANDATORY SELLER REQUIREMENT — MUST be visible in the final image:\n"
            "═══════════════════════════════════════════════════════════════════\n"
            f"«{scene_description}»\n\n"
            "Reproduce this requirement LITERALLY. If it mentions specific objects,\n"
            "garments, accessories, hands or actions — they must be present in the\n"
            "exact form described. Do NOT substitute (e.g. white gloves are gloves,\n"
            "not finger-cots; bare hands are bare hands, not gloves; specific colors\n"
            "and materials must match). This requirement overrides any earlier scene\n"
            "suggestion if there is a conflict.\n"
        )

    return prompt
