"""Market research agent: исследование рынка + жёстко структурированный комплект
из 5 карточек для series-режима.

Возвращает {research, utps_pool, concepts}, где concepts — РОВНО 5 элементов:
  - 1× hero  — заглавная: фото товара ЦЕЛИКОМ + заголовок + 3 УТП-плашки
              (с иконками, как мини-инфографика для маркетплейса)
  - 3× utp   — карточки с одним УТП каждая. Структура УТП:
              title  — 2-3 слова (заголовок самого УТП)
              bullets — 2 коротких поддерживающих буллета
  - 1× macro — макро-деталь: КРУПНЫЙ план фактуры/материала/шва

Жёсткие правила (не доверяем Gemini):
  - scene_description для hero/macro полностью переопределяется в коде после
    парсинга — Gemini может сочинить «крупный план» для hero и т.п., поэтому
    ставим директиву жёстко.
  - scenarios для hero/macro строго студийный/макро.
  - title для всех 5 концепций — один и тот же (имя товара), у hero —
    с опциональным subtitle.
"""
import re
from google.genai import types
from app.core.config import settings
from app.core.gemini import gemini_client as _client


# Сценарии для каждой роли по категории.
_SCENARIOS_BY_CATEGORY = {
    "clothing": {
        "hero":  ["clothing_studio", "clothing_packshot", "clothing_ghost"],
        "utp":   ["clothing_lifestyle", "clothing_model", "clothing_usage"],
        "macro": ["clothing_macro"],
    },
    "furniture": {
        "hero":  ["furniture_studio", "furniture_white_cube"],
        "utp":   ["furniture_interior", "furniture_outdoor", "furniture_lifestyle", "furniture_usage"],
        "macro": ["furniture_macro"],
    },
    "cosmetics": {
        "hero":  ["cosmetics_studio", "cosmetics_white_cube"],
        "utp":   ["cosmetics_interior", "cosmetics_model", "cosmetics_lifestyle", "cosmetics_usage"],
        "macro": ["cosmetics_macro"],
    },
    "food": {
        "hero":  ["food_studio", "food_white_cube"],
        "utp":   ["food_serving", "food_lifestyle", "food_usage"],
        "macro": ["food_macro"],
    },
    "electronics": {
        "hero":  ["electronics_studio", "electronics_white_cube"],
        "utp":   ["electronics_workspace", "electronics_lifestyle", "electronics_usage"],
        "macro": ["electronics_macro"],
    },
    "other": {
        "hero":  ["clothing_packshot"],
        "utp":   ["background_swap"],
        "macro": ["clothing_macro"],
    },
}


# Жёсткие сцены по ролям (не доверяем Gemini — он путает hero/macro).
_FIXED_SCENE_HERO = (
    "Студийный кадр товара ЦЕЛИКОМ на чистом светлом фоне (off-white или beige). "
    "Видна вся форма и силуэт товара. Композиция centred, минимум окружения, "
    "акцент на товаре. ЗАПРЕЩЕНО: крупные планы фрагментов, частей или деталей — "
    "товар должен быть полностью в кадре. Это hero-карточка для маркетплейса: "
    "она будет содержать заголовок и 3 УТП-плашки с иконками поверх товара."
)
_FIXED_SCENE_MACRO = (
    "Макрокадр КРУПНОГО плана одной детали — фактуры материала / шва / элемента "
    "конструкции / поверхности. Товар или его деталь занимает 70-90% кадра, "
    "видна текстура близко. ЗАПРЕЩЕНО: общий план целого товара, окружение, "
    "интерьер. Только деталь крупно."
)


def _scenarios_for(category: str, role: str) -> list[str]:
    cat = _SCENARIOS_BY_CATEGORY.get(category) or _SCENARIOS_BY_CATEGORY["other"]
    return cat.get(role) or _SCENARIOS_BY_CATEGORY["other"].get(role, ["clothing_packshot"])


RESEARCH_SYSTEM_PROMPT = """Ты — продакт-маркетолог по маркетплейсам РФ (WB, Ozon).

Тебе дано фото товара и его категория. Сделай 3 вещи:

1. SUMMARY (research) — короткий анализ на русском (3-5 предложений):
   - целевая аудитория
   - 2-3 ключевых триггера покупки в этой категории
   - какие УТП обычно работают в нише

2. UTPS_POOL (utps_pool) — 3 главных УТП этого товара. Каждое УТП:
   - title — 2-3 слова, ёмкий заголовок самого преимущества
     ✅ «Массив дуба», «Покрытие маслом», «Лёгкая сборка»
     ❌ «Высокое качество», «Удобный в использовании», «Подходит на любой случай»
   - bullets — 2 коротких поддерживающих буллета (≤ 3 слов каждый)
     ✅ ["без шпона", "100% дерево"], ["защита от влаги", "Borma Италия"], ["3 минуты", "без инструментов"]
     ❌ длинные предложения, общие слова

3. CONCEPTS (concepts) — РОВНО 5 концепций карточек комплекта:

   Концепция №1: role = "hero" — заглавная (фото товара целиком + 3 УТП-плашки)
     - title (РОВНО 2 слова, или 3 если есть короткий предлог: на/из/с/для)
     - subtitle (2-3 слова, уточнение материала/типа) или ""
     - icon = "✨"

   Концепции №2-4: role = "utp" — каждая раскрывает ОДНО УТП из utps_pool
     ВАЖНО: все 3 utp-карточки берут УТП ИЗ utps_pool по порядку (utp_pool[0], [1], [2]).
     Каждая utp-карточка:
     - title (2-3 слова — заголовок САМОГО УТП, не имя товара) — равен utps_pool[i].title
     - bullets (2 коротких пункта, поддерживающих УТП) — равны utps_pool[i].bullets
     - utp_primary — дублирует title (для совместимости)
     - icon — emoji подходящий к УТП (🌳, 💧, 🔧, ⚡, 🎯 и т.п.)
     - scenario — РАЗНЫЕ для каждой из 3 utp-карточек (lifestyle / interior / usage)
     - scene_description (1-2 фразы — как сцена раскрывает именно это УТП визуально)

   Концепция №5: role = "macro" — макро-деталь
     - title (2-3 слова — что именно показано: «Фактура дуба», «Швы», «Поверхность»)
     - utp_primary — то же что title
     - bullets — пустой массив или 1 короткий пункт
     - icon = "🔍"
     - scene_description можно опустить — оно переопределяется в коде

ВЕРНИ СТРОГО валидный JSON без markdown:
{
  "research": "...",
  "utps_pool": [
    {"title": "...", "bullets": ["...", "..."]},
    {"title": "...", "bullets": ["...", "..."]},
    {"title": "...", "bullets": ["...", "..."]}
  ],
  "concepts": [
    {"role": "hero",  "title": "...", "subtitle": "...", "icon": "✨"},
    {"role": "utp",   "title": "...", "utp_primary": "...", "bullets": ["...", "..."], "icon": "🌳",
     "scenario": "...", "scene_description": "..."},
    {"role": "utp",   "title": "...", "utp_primary": "...", "bullets": ["...", "..."], "icon": "💧",
     "scenario": "...", "scene_description": "..."},
    {"role": "utp",   "title": "...", "utp_primary": "...", "bullets": ["...", "..."], "icon": "⚡",
     "scenario": "...", "scene_description": "..."},
    {"role": "macro", "title": "...", "utp_primary": "...", "bullets": [], "icon": "🔍"}
  ]
}
"""


def _short(s, max_words: int, max_chars: int) -> str:
    """Жёсткое усечение строки по словам и символам."""
    words = str(s or "").strip().split()
    return " ".join(words[:max_words])[:max_chars]


def _short_bullet(s) -> str:
    """Буллет: ≤ 3 слов, ≤ 30 символов."""
    return _short(s, 3, 30)


def _enforce_pack_structure(category: str, raw_concepts: list[dict], utps_pool: list[dict]) -> list[dict]:
    """Гарантирует ровно 5 концепций hero / utp×3 / macro с правильной структурой.

    Не доверяем Gemini для:
      - scene_description у hero и macro (всегда жёсткая фикс-сцена в коде)
      - сценариев hero и macro (студийный и macro соответственно)
      - bullets у utp (берём из utps_pool по порядку)
    """
    by_role: dict[str, list[dict]] = {"hero": [], "utp": [], "macro": []}
    for c in raw_concepts or []:
        role = (c.get("role") or "").strip().lower()
        if role in by_role:
            by_role[role].append(c)
        else:
            by_role["utp"].append(c)

    hero = by_role["hero"][0] if by_role["hero"] else {}
    utps_raw = (by_role["utp"] + [{}, {}, {}])[:3]
    macro = by_role["macro"][0] if by_role["macro"] else {}

    hero_scenarios = _scenarios_for(category, "hero")
    utp_scenarios = _scenarios_for(category, "utp")
    macro_scenarios = _scenarios_for(category, "macro")

    # Hero title и subtitle — общий заголовок товара.
    hero_title = _short(hero.get("title", ""), 3, 80)
    hero_subtitle = _short(hero.get("subtitle", ""), 3, 80)

    # utps_pool валидируем — ровно 3 элемента с title + bullets.
    norm_pool: list[dict] = []
    for i, p in enumerate((utps_pool or [])[:3]):
        if isinstance(p, str):
            norm_pool.append({"title": _short(p, 3, 60), "bullets": []})
        elif isinstance(p, dict):
            bullets = p.get("bullets") or []
            if isinstance(bullets, str):
                bullets = [b.strip() for b in re.split(r"[,;\n]", bullets) if b.strip()]
            norm_pool.append({
                "title": _short(p.get("title", ""), 3, 60),
                "bullets": [_short_bullet(b) for b in bullets if str(b).strip()][:2],
            })
    while len(norm_pool) < 3:
        norm_pool.append({"title": "", "bullets": []})

    out: list[dict] = []

    # 1. HERO — title + subtitle + список 3 УТП-заголовков (для overlay)
    out.append({
        "role": "hero",
        "title": hero_title,
        "subtitle": hero_subtitle,
        # Список 3 УТП-заголовков. Используется фронтом для отображения и
        # бэкендом — передаётся как utp[] в Generation, чтобы Banana нарисовал
        # 3 пилла поверх hero-фото (мини-инфографика).
        "all_utps": [p["title"] for p in norm_pool if p["title"]],
        "utp_focus": "",
        "utp_primary": "",
        "utp_secondary": "",
        "bullets": [],
        "scenario": hero_scenarios[0],  # ВСЕГДА студийный, не доверяем Gemini
        "scene_description": _FIXED_SCENE_HERO,  # ЖЁСТКО переопределено
        "icon": "✨",
    })

    # 2-4. UTP — каждая берёт title + bullets из norm_pool[i]
    for i in range(3):
        u_raw = utps_raw[i] if i < len(utps_raw) else {}
        pool_item = norm_pool[i]

        # title и bullets — приоритет у utps_pool, fallback на сам concept
        title = pool_item["title"] or _short(u_raw.get("title") or u_raw.get("utp_primary") or "", 3, 60)
        bullets = pool_item["bullets"] or [
            _short_bullet(b) for b in (u_raw.get("bullets") or []) if str(b).strip()
        ][:2]
        # Если буллетов всё ещё нет — fallback на utp_secondary как один буллет
        if not bullets:
            sec = _short_bullet(u_raw.get("utp_secondary", ""))
            if sec:
                bullets = [sec]

        # Сценарий: разный для каждой из 3 utp карточек
        scen_raw = str(u_raw.get("scenario", "")).strip()
        if scen_raw not in utp_scenarios:
            scen_raw = utp_scenarios[i % len(utp_scenarios)]
        # Гарантируем разные сценарии у 3 utp карточек
        used = {o["scenario"] for o in out if o.get("role") == "utp"}
        if scen_raw in used and len(utp_scenarios) > 1:
            for alt in utp_scenarios:
                if alt not in used:
                    scen_raw = alt
                    break

        out.append({
            "role": "utp",
            "title": title,
            "subtitle": "",
            "utp_focus": title,
            "utp_primary": title,
            "utp_secondary": bullets[0] if bullets else "",
            "bullets": bullets,
            "scenario": scen_raw,
            "scene_description": str(u_raw.get("scene_description", ""))[:300],
            "icon": str(u_raw.get("icon", "💡"))[:8],
        })

    # 5. MACRO — title + жёсткая сцена крупного плана
    macro_title = _short(macro.get("title") or macro.get("utp_primary") or "Деталь", 3, 60)
    macro_bullets = [
        _short_bullet(b) for b in (macro.get("bullets") or []) if str(b).strip()
    ][:1]
    out.append({
        "role": "macro",
        "title": macro_title,
        "subtitle": "",
        "utp_focus": macro_title,
        "utp_primary": macro_title,
        "utp_secondary": "",
        "bullets": macro_bullets,
        "scenario": macro_scenarios[0],  # ВСЕГДА макро-сценарий
        "scene_description": _FIXED_SCENE_MACRO,  # ЖЁСТКО переопределено
        "icon": "🔍",
    })

    return out


async def run_market_research(
    image_bytes: bytes,
    mime_type: str,
    category: str,
    product_name: str,
) -> dict:
    user_msg = (
        f"Категория: {category}. Название: {product_name}. "
        "Сгенерируй research + utps_pool из 3 пунктов с bullets + 5 concepts строго "
        "по схеме hero / utp / utp / utp / macro."
    )
    response = await _client.aio.models.generate_content(
        model=settings.TEXT_MODEL,
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
            RESEARCH_SYSTEM_PROMPT,
            user_msg,
        ],
        config=types.GenerateContentConfig(
            temperature=0.6,
            max_output_tokens=12288,
            response_mime_type="application/json",
        ),
    )
    from app.services.marketing_agent import _safe_json
    text = (response.text or "").strip()
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text, flags=re.MULTILINE)
    data = _safe_json(text)
    if not data:
        raise RuntimeError(f"Research agent: bad JSON. Full text: {text[:500]}")

    utps_pool_raw = data.get("utps_pool") or []
    concepts = _enforce_pack_structure(category, data.get("concepts") or [], utps_pool_raw)

    # utps_pool в результате — простой список title-строк (для совместимости с фронтом).
    utps_pool_titles = [
        c.get("title", "") for c in concepts if c.get("role") == "utp" and c.get("title")
    ]

    return {
        "research": (data.get("research") or "")[:2000],
        "utps_pool": utps_pool_titles,
        "concepts": concepts,
    }
