"""Scene agent: AI подбор сцены под товар + brand kit + сценарий.

Why: жёстко зашитые сцены в prompt_builder.SCENE_TEMPLATES делали все lifestyle-кадры
визуально одинаковыми (Скандинавская квартира + пампасы), независимо от товара.
Агент даёт каждому товару конкретно подходящую сцену (спортивная одежда → спорт-зал,
садовое кресло → терраса, парфюм → мраморная ванная), плюс учитывает mood brand kit'а.

Не использует vision (у нас уже есть anchor-описание). Работает только с текстом на
gemini-3.1-flash-lite-preview — самая дешёвая модель для агентских задач (~2.5 коп/вызов).

Не критичен: при любой ошибке возвращает None → generation_service использует дефолтную
сцену из SCENE_TEMPLATES → пользователь ничего не замечает.
"""
import json
import random
from typing import Optional

from google.genai import types
from app.core.gemini import gemini_client as _client
from app.services.marketing_agent import _safe_json  # робастный JSON-парсер

# Самая дешёвая агентская модель Google. Если станет недоступна (429 / quota) —
# fallback на gemini-2.5-pro: дороже, но самая качественная и стабильная — лучше потратить
# 15 коп. чем дать пользователю плохую сцену.
SCENE_MODEL_PRIMARY = "gemini-3.1-flash-lite-preview"
SCENE_MODEL_FALLBACK = "gemini-2.5-pro"


SYSTEM_PROMPT = """You are a senior commercial photographer & set designer for marketplace
product cards (Wildberries, Ozon). Given a product description (anchor) + category +
scenario type (packshot / lifestyle / macro) + brand DNA (mood, palette accent) + optional
seller's note about the scene — design ONE concrete photographic scene that ideally fits
THIS specific product.

Hard rules:
1. Match the product's actual USE CONTEXT.
   - Sport apparel → fitness studio / yoga loft / outdoor track / climbing gym, NOT a generic apartment.
   - Garden / outdoor furniture → terrace / sunlit garden / wooden deck / balcony, NOT a living room.
   - Indoor furniture → match the product's room (sofa → living room, bed → bedroom).
   - Cosmetics → marble bathroom vanity / morning bedroom / beauty studio.
   - Kitchen tool → kitchen counter / breakfast scene.
   - Electronics → modern desk / cafe / commute scene depending on use.
   - Children's items → playroom / nursery / playground.
   - Casual clothing → street style / cafe / rooftop, depending on garment formality.
   - Elegant clothing → gallery / hotel lobby / city evening.
2. NEVER default to "Scandinavian apartment with pampas grass" or "off-white plaster wall +
   light oak floor + ceramic vase with eucalyptus / pampas". Those are over-used. Vary by
   product type — variety is the goal.
3. Match brand DNA mood:
   - tech-futuristic → dark studio with cyan accent / minimalist tech setup.
   - modern-glass → contemporary glass-walled interior / bright atrium / light lounge.
   - natural-craft → warm wooden / linen / artisan workshop / sun-soaked rural.
   - editorial → high-end magazine setting / refined hotel / gallery.
   - calm-minimal → quiet contemporary space, generous whitespace.
   - bold-marketplace → vibrant lifestyle scene with warm energy.
   - playful → colourful relaxed setting with friendly props.
   - clean-airy → bright minimalist with hairline elements, photo-first.
4. Be photographically specific — name the location, time of day, light direction +
   quality, surfaces (floor / wall / table material), 2-3 supporting props that feel
   NATURAL to the use context (NOT generic "vase + dried branch"), and camera/lens.
5. Keep the product as unambiguous hero — props complement, never compete or hide details.
6. Be feasible for a single AI image generation — no multi-character action, no impossible
   geometry. Single hero subject + understated environment.

Return EXACTLY this JSON (no commentary, no markdown):

{
  "location": "<short noun phrase, e.g. 'modern fitness studio with mirrored wall'>",
  "time_of_day": "<morning / late afternoon / golden hour / overcast daylight / etc.>",
  "key_light": "<main light source — direction + quality>",
  "fill_light": "<optional secondary light or 'subtle ambient'>",
  "surfaces": "<floor / wall / table materials and colors>",
  "props": ["<prop 1, natural to context>", "<prop 2>", "<prop 3>"],
  "atmosphere": "<single short sentence, mood + scene color palette>",
  "camera": "<lens mm + aperture + angle, e.g. '35mm, f/4, eye-level, ¾ front'>",
  "rationale": "<one short Russian sentence explaining why this scene fits the product>"
}"""


def _user_msg(
    *,
    anchor: str,
    category: str,
    product_name: str,
    scenario: str,
    mood: str,
    accent: str,
    user_scene_note: Optional[str],
    variation_seed: int,
) -> str:
    msg = (
        f"PRODUCT NAME: {product_name or '(не указано)'}\n"
        f"CATEGORY: {category or '(не указано)'}\n"
        f"SCENARIO TYPE: {scenario}\n"
        f"BRAND MOOD: {mood}\n"
        f"BRAND ACCENT COLOR: {accent}\n"
        f"\nPRODUCT ANCHOR (forensic description):\n{anchor}\n"
    )
    if user_scene_note:
        msg += (
            f"\nSELLER'S OWN SCENE NOTE (must be respected — adapt your scene to fit it):\n"
            f"«{user_scene_note}»\n"
        )
    msg += (
        f"\nVariation index: #{variation_seed}/6 — if you have generated similar products "
        f"before, pick a DIFFERENT specific location/setting from the previous one. The "
        f"goal is variety in the catalog, not stylistic monotony."
    )
    return msg


async def _call(model: str, sys_prompt: str, user_msg: str) -> Optional[dict]:
    """Один вызов модели. Возвращает распарсенный JSON или None."""
    try:
        resp = await _client.aio.models.generate_content(
            model=model,
            contents=[user_msg],
            config=types.GenerateContentConfig(
                system_instruction=sys_prompt,
                temperature=1.0,  # высокая для разнообразия
                response_mime_type="application/json",
                max_output_tokens=600,
            ),
        )
        text = (resp.text or "").strip()
        if not text:
            return None
        return _safe_json(text)
    except Exception as e:
        print(f"[scene_agent] {model} failed: {type(e).__name__}: {str(e)[:200]}")
        return None


async def propose_scene(
    *,
    anchor: str,
    category: str,
    product_name: str,
    scenario: str,
    brand_kit: Optional[dict] = None,
    user_scene_note: Optional[str] = None,
    variation_seed: Optional[int] = None,
) -> Optional[dict]:
    """Возвращает scene-блок (dict) либо None при любой ошибке.

    None означает fallback на дефолтную сцену из SCENE_TEMPLATES.
    """
    bk = brand_kit or {}
    mood = bk.get("mood") or "calm-minimal"
    palette = bk.get("palette") or {}
    accent = palette.get("accent_1") or "neutral"

    if variation_seed is None:
        variation_seed = random.randint(1, 6)

    user_msg = _user_msg(
        anchor=anchor or "(no anchor)",
        category=category or "",
        product_name=product_name or "",
        scenario=scenario,
        mood=mood,
        accent=accent,
        user_scene_note=user_scene_note,
        variation_seed=variation_seed,
    )

    # Primary — самая дешёвая модель
    scene = await _call(SCENE_MODEL_PRIMARY, SYSTEM_PROMPT, user_msg)
    if scene:
        return scene
    # Fallback на 2.5 Flash при 429 / любой проблеме (она и быстрая и стабильная)
    scene = await _call(SCENE_MODEL_FALLBACK, SYSTEM_PROMPT, user_msg)
    return scene  # может быть None — это окей, тогда дефолтная сцена из шаблона


def render_scene_block(scene: dict) -> str:
    """Сборка готовой scene-секции для подстановки в SCENE_TEMPLATES."""
    parts = []

    loc = (scene.get("location") or "").strip()
    if loc:
        parts.append(f"Scene: {loc}.")

    light_bits = []
    if scene.get("time_of_day"):
        light_bits.append(scene["time_of_day"].strip())
    if scene.get("key_light"):
        light_bits.append(scene["key_light"].strip())
    fill = (scene.get("fill_light") or "").strip()
    if fill:
        light_bits.append(fill)
    if light_bits:
        parts.append("Light: " + "; ".join(light_bits) + ".")

    surfaces = (scene.get("surfaces") or "").strip()
    if surfaces:
        parts.append(f"Surfaces: {surfaces}.")

    props = scene.get("props") or []
    if isinstance(props, list) and props:
        clean_props = [str(p).strip() for p in props if str(p).strip()][:5]
        if clean_props:
            parts.append(
                "Supporting props (subtle, natural to the use context, do NOT hide product): "
                + ", ".join(clean_props) + "."
            )

    atmosphere = (scene.get("atmosphere") or "").strip()
    if atmosphere:
        parts.append(f"Atmosphere: {atmosphere}.")

    camera = (scene.get("camera") or "").strip()
    if camera:
        parts.append(f"Camera: {camera}.")

    return "\n".join(parts)
