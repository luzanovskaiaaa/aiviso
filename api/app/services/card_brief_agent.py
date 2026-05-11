"""Card Brief agent: генерирует свободный бриф для Banana в режиме «ИИ-freeform».

В отличие от brand_kit_agent (который выбирает 1 из 6 жёстких пресетов с заранее
заданными плашками/типографикой), этот агент смотрит на фото товара + категорию +
заголовок + УТП и пишет свободный текстовый бриф на английском для Gemini Image:
КАК РАЗМЕСТИТЬ заголовок и УТП на этом конкретном фото, какой тон, какие цвета,
какой композиционный приём.

Banana потом сама верстает оверлей по этому брифу — без жёстких пилл-плашек,
без принудительных цветов плашки, без накладной палитры.

Цель: дать модели свободу принять оптимальное решение для конкретного товара
вместо того чтобы натягивать один из 6 шаблонов на всё подряд.
"""
import sys
from google.genai import types
from app.core.config import settings
from app.core.gemini import gemini_client as _client


_BRIEF_SYSTEM_PROMPT = """You are an art-director for Russian marketplace product cards
(Wildberries, Ozon — vertical 3:4 listings, viewed on mobile).

You will see a product photo, the product's name and category, and the Russian
title + USP (преимущества) the seller wants on the card. Your job is to write a
SHORT TEXT BRIEF (English, 80-160 words) telling the image-generation model HOW to
overlay that title and those USPs on this exact photo.

Treat each photo INDIVIDUALLY. Do NOT pick from a list of templates. Look at the
real composition, real material, real palette, real empty space, and design
specifically for THIS image.

Your brief must answer 5 questions:

1. PLACEMENT — where on the canvas does the title sit? Where do the USPs go?
   Use the real empty space in the photo. (e.g. "title sits in the upper-left
   negative space above the table; USPs go as a vertical stack along the right
   edge where the wall is plain")

2. TYPOGRAPHY — what feeling should the type have? Sentence-case bold sans?
   Editorial all-caps display? Tight tracking? Soft serif? Match it to the product
   tier (premium / craft / mass-market). Cyrillic only.

3. CONTAINERS — should there be plaques behind the text or NOT? Decide based on
   what serves THIS specific image best. Both options are valid:

   • NO plaques — text rendered directly on the photo with soft drop-shadow or
     a subtle vignette zone. Best when the photo has clean negative space, when
     the product tier is premium / craft / editorial (watches, jewellery,
     handmade wood / leather / ceramic, premium cosmetics), or when overlays
     would clutter an atmospheric composition.

   • WITH plaques — small frosted-glass or solid pills/chips behind text. Best
     when the photo is busy and text would otherwise be illegible, when the
     product is mass-market sport/kids/household with feature-flag mindset,
     when the seller's visual code clearly uses scannable info-chips, or when
     the composition has no clean negative space for plain text.

   Pick the option that produces the most readable, on-brand result for THIS
   specific photo and product. Don't overuse plaques — but don't forbid them
   either. If you choose plaques, specify exact shape (rounded pill / soft
   rectangle / chip), fill style (translucent frosted-glass / opaque white /
   outline-only), and color tied to the photo's palette.

4. COLOR — pull a 2-3 color palette FROM THE PHOTO ITSELF for text and any
   accents. Don't invent colors that fight the photo. Mention exact hex if you
   can. If the photo has dark wood, use creamy off-white #ECE6D8 for text and a
   warm honey accent #C8924E. If the photo has cool steel, use ink #14171F text
   with a graphite accent.

5. HIERARCHY — title is HERO, USPs are secondary. Title large and confident,
   USPs small, scannable, set off by tracking or a thin line, never competing
   with the title.

OUTPUT FORMAT — return only the brief text, no JSON, no headings, no bullet list.
A short paragraph (or two) of plain instructions the image model can act on.
Write in English (image models follow English better) but ALL Cyrillic strings
the model must render must be quoted exactly as given by the seller.

Hard rules:
- NEVER invent text or marketing claims that weren't in the input.
- ALWAYS quote every Russian text exactly inside «» so the image model preserves
  spelling and Cyrillic glyphs.
- If the input has more than 3 short callouts, suggest rendering only the
  strongest 3 (small text on a 3:4 photo with 4+ items reads as clutter).
  Mention which 3 you chose and why in your brief.
- NEVER suggest a container whose color clashes with the dominant product color.
- Decide on containers per the CONTAINERS rule above — both options are valid
  outcomes, your job is to pick the one that fits THIS image best.

⚠️ CRITICAL — image-model leakage rules:
- The image model reads your brief literally. Any English word you write may
  end up RENDERED on the final picture by mistake.
- NEVER write the words «USP», «USPs», «TITLE», «HEADING», «Headline:», «Label:»,
  «Caption:» or similar technical markers in your brief.
- Refer to texts ONLY by quoting them inside «». Don't preface them with «USP:».
- For COLOR CONTRAST: text MUST be readable on its actual background.
  • Light/grey/cream backgrounds → use deep ink #14171F or charcoal #1F2937 text.
  • Dark backgrounds → use creamy off-white #ECE6D8 or pure white text.
  • NEVER suggest white/cream text on a light/grey background — it will be unreadable.
  • State the contrast pairing explicitly in your brief (e.g.
    "deep ink #14171F headline on the cream-colored upper-left negative space")."""


async def propose_card_brief(
    image_bytes: bytes,
    mime_type: str,
    category: str,
    product_name: str,
    title: str,
    utp: list[str],
    scenario: str = "",
) -> str | None:
    """Возвращает текстовый бриф (англ., 80-160 слов) для Banana.

    None при ошибке — caller должен использовать минимальный fallback-бриф.
    """
    utp_clean = [u.strip() for u in (utp or []) if u and u.strip()]
    utp_block = "\n".join(f"  • «{u}»" for u in utp_clean) if utp_clean else "  (no callouts — render only the headline)"

    # ⚠️ КРИТИЧНО: НЕ упоминаем в user_msg технические термины «USP» / «TITLE» как
    # отдельные слова — Banana буквально срисовывает английские маркеры в карточку.
    # Используем нейтральные «Headline» / «Callouts» (image-модель не путает их с label'ом).
    user_msg = (
        f"PRODUCT NAME: {product_name or '(не указано)'}\n"
        f"CATEGORY: {category or '(не указано)'}\n"
        f"SCENARIO: {scenario or '(default)'}\n\n"
        f"Headline to render on the photo (Russian, exact text — do NOT change):\n"
        f"  «{title}»\n\n"
        f"Short callouts to render alongside (Russian, exact text — do NOT change):\n"
        f"{utp_block}\n\n"
        f"Write the placement / typography / container / color / hierarchy brief.\n"
        f"Plain English paragraph, 80-160 words.\n\n"
        f"⚠️ The brief itself MUST NOT mention English labels like 'USP', 'TITLE',\n"
        f"'Heading:' or any technical markers. Refer to the texts only by quoting them\n"
        f"inside «». The image model will see your brief verbatim — anything you write\n"
        f"in English may get rendered onto the picture by mistake."
    )

    try:
        response = await _client.aio.models.generate_content(
            model=settings.TEXT_MODEL,
            contents=[
                types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
                user_msg,
            ],
            config=types.GenerateContentConfig(
                system_instruction=_BRIEF_SYSTEM_PROMPT,
                temperature=0.65,  # 0.85 давал литературщину, 0.65 — директивный бриф с конкретикой
                max_output_tokens=600,
                # NO response_mime_type=json — нам нужен plain text.
            ),
        )
        text = (response.text or "").strip()
        if not text or len(text) < 30:
            sys.stderr.write(
                f"[card_brief_agent] empty/too short response: len={len(text)}\n"
            )
            return None
        return text
    except Exception as e:
        sys.stderr.write(
            f"[card_brief_agent] failed: {type(e).__name__}: {str(e)[:300]}\n"
        )
        return None


# Минимальный fallback-бриф если агент сломался — нейтральная общая инструкция.
# Не делает жёстких выборов про плашки — оставляет это на усмотрение image-модели,
# которая в этом случае сама подберёт подходящую подачу под фото.
FALLBACK_BRIEF = (
    "Render the provided Russian title and USPs on the photograph in a way that "
    "best fits the product's tier and the photo's composition. Place the title in "
    "a clear empty area of the canvas, USPs as a small scannable stack near it. "
    "Use confident sentence-case sans-serif typography with a color pulled from "
    "the photo's own palette. Decide on text containers (plaques / pills / chips "
    "or none) based on what produces the most readable on-brand result for this "
    "specific image — both options are valid. Title is the hero — at least 2x the "
    "size of USP text. Keep all Cyrillic strings exactly as provided."
)
