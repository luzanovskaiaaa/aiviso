"""
QC-агент: сравнивает оригинал и сгенерированное изображение.
Возвращает score 0-100 и fix_instruction при провале.
"""
from dataclasses import dataclass
from typing import Optional

from google.genai import types
from app.core.config import settings
from app.core.gemini import gemini_client as _client

QC_PROMPT = """You are a forensic QA reviewer for an e-commerce AI image generator that
serves Russian sellers on Wildberries / Ozon. Generated images often contain rendered
Cyrillic text in overlay badges, titles, and USP callouts.

You receive: (1) the original product reference photo, (2) the AI-generated image,
(3) a written visual anchor describing the product, (4) a SCENARIO HINT.

Detect ANY mismatch between the product in the generated image and the original reference,
AND any garbled/misspelled rendered text in overlay zones. Be STRICT about the product
itself, but reasonable about the scene: the goal is to ship.

═══ SCENARIO-AWARE JUDGEMENT ═══
A SCENARIO HINT is provided alongside the visual anchor. It tells you what KIND of shot
this is, and which dimensions are EXPECTED to differ from the reference photo:

- packshot / studio / white_cube / ghost — clean studio shot. EXPECT identical environment
  to typical product photography. Background, surfaces, props should be neutral and
  consistent with the reference.

- lifestyle / interior / model / serving / workspace / outdoor / usage — STAGED scene.
  Background, lighting, props, surfaces, environment context, even the model wearing the
  product are EXPECTED to be different from the reference. Output PASS for these
  contextual dimensions in lifestyle scenarios — judge ONLY product fidelity (silhouette,
  materials, color, hardware, construction, branding).

- background_swap — scene replacement. PASS for environment, FAIL only on product changes.

When in doubt about whether a difference is "scene" or "product" — it's scene if it's
behind, around, or under the product. It's product if it's the product itself.

For each dimension output PASS or FAIL on a separate line, with a one-line explanation:

- silhouette / proportions
- materials / surface finish
- colour accuracy
- construction details (joinery / seams / stitching)
- hardware count and type (buttons, hinges, handles, zippers, screws)
- labels, logos, printed text on the product itself (legible AND identical to reference)
- pockets / drawers / panels (count and position)
- added or removed elements
- overlay title text (Cyrillic correctness)
- overlay USP text (Cyrillic correctness)

═══ HOW TO CHECK CYRILLIC OVERLAY TEXT ═══
If the image contains rendered overlay text (titles, USP plaques, callouts), examine
EVERY VISIBLE WORD letter by letter. FAIL the relevant overlay dimension if you see:
- Letters swapped or merged ("деревянный" rendered as "девемянный", "двеега", "униАнанный")
- Missing or duplicated letters ("телефон" → "телфон" or "теллефон")
- Latin lookalikes substituted for Cyrillic ("сервис" with Latin "c")
- Phantom letters that don't exist in real Russian words
- Misspelled real words ("долговечности" → "доловенность")
- Words that simply don't exist in Russian
- Severely deformed glyphs that are unrecognisable

If overlay text is NOT present in the image at all (pure photo, no plaques), output PASS
with explanation "no overlay text in this image" for both overlay dimensions.

If even ONE word in overlay is garbled/misspelled → FAIL the relevant overlay dimension.
This is the #1 reason marketplace cards get rejected by sellers — be ruthless.

═══ OUTPUT ═══
After all dimension lines, output:
SCORE: <0-100>
(100 = indistinguishable from reference and all text is correct, 85+ = ship-ready,
below 85 = needs regeneration)

If any dimension FAILED, output:
FIX: <one paragraph instruction for the next attempt starting with "In the next attempt, ensure that">

Respond ONLY with the dimension checks, SCORE line, and optional FIX line. No other text."""


@dataclass
class QCResult:
    score: float
    passed: bool
    details: str
    fix_instruction: Optional[str] = None


async def run_qc(
    original_bytes: bytes,
    generated_bytes: bytes,
    anchor: str,
    original_mime: str = "image/jpeg",
    generated_mime: str = "image/png",
    scenario: str = "",
) -> QCResult:
    """Запускает QC-агент. Возвращает QCResult.

    scenario: ключ сценария из CATEGORY_SCENARIO_ORDER (например, clothing_model,
    furniture_interior, food_lifestyle). Передаётся в промт как SCENARIO HINT,
    чтобы QC мог выдать PASS на ожидаемых для сценария отличиях окружения.
    """
    scenario_hint = scenario or "(не указан)"
    response = await _client.aio.models.generate_content(
        model=settings.TEXT_MODEL,
        contents=[
            types.Part.from_bytes(data=original_bytes, mime_type=original_mime),
            types.Part.from_bytes(data=generated_bytes, mime_type=generated_mime),
            f"Visual anchor:\n{anchor}\n\nSCENARIO HINT: {scenario_hint}\n\n{QC_PROMPT}",
        ],
        config=types.GenerateContentConfig(temperature=0.0, max_output_tokens=1024),
    )

    text = response.text.strip()
    # Детерминированный score по числу PASS / FAIL (модель плохо сама себя калибрует)
    score = _compute_score_from_passfail(text)
    fix = _extract_fix(text)

    return QCResult(
        score=score,
        passed=score >= 70,  # порог 70: считаем что 70%+ PASS = ship-ready
        details=text,
        fix_instruction=fix,
    )


# Регулярки для детерминированного парсинга
import re as _re
_PASS_RE = _re.compile(r"\bPASS\b", _re.IGNORECASE)
_FAIL_RE = _re.compile(r"\bFAIL\b", _re.IGNORECASE)


def _compute_score_from_passfail(text: str) -> float:
    """
    Считаем сколько строк дали PASS и сколько FAIL.
    Score = round(passes / (passes + fails) * 100).
    Это надёжнее чем доверять модели поставить число — она часто ставит 50 даже если всё PASS.

    КРИТИЧЕСКИЕ dimensions: overlay title/USP text. Если они FAIL — score capped at 49,
    то есть карточка получит статус needs_review (ниже порога 70). Логика: лучше поручить
    селлеру решить сам, чем отгрузить ему карточку с garbled кириллицей.
    """
    n_pass = len(_PASS_RE.findall(text))
    n_fail = len(_FAIL_RE.findall(text))
    if n_pass + n_fail == 0:
        return _extract_score(text)  # fallback на старый способ

    base = round((n_pass / (n_pass + n_fail)) * 100, 1)

    # Если any overlay text dimension FAIL — это критично, даже если все остальные PASS
    if _OVERLAY_TEXT_FAIL_RE.search(text):
        return min(base, 49.0)

    return base


# Ловит строки вида:
#   "- overlay title text ... FAIL"
#   "overlay USP text — FAIL ..."
# где-нибудь рядом стоят слова overlay+text и FAIL на одной строке.
_OVERLAY_TEXT_FAIL_RE = _re.compile(
    r"(?im)^.*overlay\s+(?:title|usp)\s+text.*\bFAIL\b.*$"
)


def _extract_score(text: str) -> float:
    """Старый способ — парсинг строки 'SCORE: N' от модели. Используется как fallback."""
    for line in text.splitlines():
        if line.upper().startswith("SCORE:"):
            try:
                return float(line.split(":", 1)[1].strip())
            except ValueError:
                pass
    return 50.0  # если ничего не распарсили — нейтральный middle


def _extract_fix(text: str) -> Optional[str]:
    for line in text.splitlines():
        if line.upper().startswith("FIX:"):
            return line.split(":", 1)[1].strip()
    return None
