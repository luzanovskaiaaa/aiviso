"""Marketing agent: AI-предложение заголовка карточки маркетплейса + 3-5 УТП.

После загрузки фото товара — Gemini Vision смотрит на изображение и
предлагает кликабельный заголовок (до 90 символов, как требует WB/Ozon)
и 3-5 коротких УТП-буллетов.
"""
import json
import re
from google.genai import types
from app.core.config import settings
from app.core.gemini import gemini_client as _client


def _safe_json(text: str) -> dict | None:
    """Робастный парсинг JSON. Пытается несколько стратегий, включая дозакрытие обрезанных ответов."""
    if not text:
        return None
    # 1) Прямой parse
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    start = text.find("{")
    if start == -1:
        return None

    # 2) Балансовый поиск {} с трекингом строк/массивов и эскейпов
    depth_obj = 0
    depth_arr = 0
    end = -1
    in_str = False
    escape = False
    for i in range(start, len(text)):
        c = text[i]
        if escape:
            escape = False
            continue
        if c == "\\":
            escape = True
            continue
        if c == '"':
            in_str = not in_str
            continue
        if in_str:
            continue
        if c == "{": depth_obj += 1
        elif c == "}":
            depth_obj -= 1
            if depth_obj == 0 and depth_arr == 0:
                end = i; break
        elif c == "[": depth_arr += 1
        elif c == "]": depth_arr -= 1

    if end != -1:
        try:
            return json.loads(text[start:end + 1])
        except json.JSONDecodeError:
            pass

    # 3) Обрыв (max_tokens) — дозакрываем строку/массивы/объект и убираем хвостовую запятую
    candidate = text[start:]
    if in_str:
        candidate += '"'
    candidate = re.sub(r",\s*$", "", candidate.rstrip())
    candidate += ("]" * max(depth_arr, 0)) + ("}" * max(depth_obj, 0))
    # повторная зачистка хвостовой запятой перед закрывающими скобками
    candidate = re.sub(r",(\s*[\]}])", r"\1", candidate)
    try:
        return json.loads(candidate)
    except json.JSONDecodeError:
        return None


MARKETING_SYSTEM_PROMPT = """Ты — копирайтер для Wildberries и Ozon. Изучи фото товара
и сгенерируй компактную карточку для оверлея на фото — лаконично, без воды.

1. ЗАГОЛОВОК (title) — РОВНО 2 слова, имя товара. Если без предлога никак —
   допустимо 3 слова с одним коротким предлогом (на/из/с/для).
   ⚠️ БОЛЬШЕ 3 СЛОВ — НЕЛЬЗЯ. Без эмодзи, без CAPS, на русском.
   ✅ «Столик журнальный», «Платье на запах», «Кожаная сумка», «Беспроводные наушники», «Серум для лица»
   ❌ «Стильный журнальный столик из дуба» (5 слов — нельзя)
   ❌ «Дизайнерское платье на запах» (4 слова — нельзя)

2. ПОДЗАГОЛОВОК (subtitle) — РОВНО 2-3 слова. Уточнение материала/типа/особенности.
   Если уместного уточнения нет — верни пустую строку. БОЛЬШЕ 3 СЛОВ — НЕЛЬЗЯ.
   ✅ «из массива дуба», «лён вискоза», «миди оверсайз», «беспроводные 40ч»
   ❌ «качественное и стильное», «для повседневной носки», «из натурального льна с вискозой» (вода или больше 3 слов)

3. УТП (utp) — 4 буллета. Каждый ≤ 5 СЛОВ (≈ 30 символов).
   Только конкретные факты-выгоды: материал, размеры, нагрузка, гарантия, сертификаты,
   особенности конструкции. Без эмодзи, без CAPS, на русском.

   ✅ ХОРОШИЕ УТП (≤ 5 слов):
   • «Дуб, без шпона»
   • «Нагрузка до 120 кг»
   • «Хлопок 100%, 240 г/м²»
   • «Гарантия 5 лет»
   • «Сертификат EAC»
   • «Механизм Sellita»

   ❌ ПЛОХИЕ УТП:
   • «Высокое качество»            ← пустой штамп
   • «Стильный дизайн»             ← субъективщина
   • «Удобный в использовании»     ← общее место
   • «Подходит на любой случай»    ← вода

   Если на фото не видно конкретики — не выдумывай, опирайся на категорию и название
   от продавца. Лучше 2 факта чем 4 штампа. Нельзя длинные предложения.

ВЕРНИ СТРОГО валидный JSON, без обёртки markdown:
{"title": "...", "subtitle": "...", "utp": ["...", "...", "...", "..."]}
"""


async def generate_marketing(
    image_bytes: bytes,
    mime_type: str,
    category: str,
    product_name: str,
) -> dict:
    """Возвращает dict с ключами title, utp (list), icons (list)."""
    user_msg = f"Категория: {category}. Название от продавца: {product_name}."
    response = await _client.aio.models.generate_content(
        model=settings.TEXT_MODEL,
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
            MARKETING_SYSTEM_PROMPT,
            user_msg,
        ],
        config=types.GenerateContentConfig(
            temperature=0.7,  # 0.5 был серый, 0.7 даёт разнообразие при сохранении предметности
            max_output_tokens=8192,  # 2048 не хватало — Gemini 2.5 тратит часть на reasoning, JSON обрывался
            response_mime_type="application/json",
        ),
    )
    text = (response.text or "").strip()
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text, flags=re.MULTILINE)
    data = _safe_json(text)
    if not data:
        raise RuntimeError(f"Marketing agent: bad JSON. Full text: {text}")

    raw_title = (data.get("title") or "").strip()
    raw_subtitle = (data.get("subtitle") or "").strip()

    # Заголовок: жёсткий лимит 3 слова. Если агент дал больше — обрезаем до 3 первых,
    # хвост сваливаем в subtitle (если его ещё нет — пригодится).
    title_words = raw_title.split()
    if len(title_words) > 3:
        title = " ".join(title_words[:3])
        overflow = " ".join(title_words[3:])
        if not raw_subtitle:
            raw_subtitle = overflow
    else:
        title = " ".join(title_words)

    # subtitle: жёсткий лимит 3 слова — иначе не влезает в строку оверлея.
    sub_words = raw_subtitle.split()
    subtitle = " ".join(sub_words[:3]) if sub_words else ""

    # УТП: жёсткий лимит 6 слов на буллет (≈ 40 символов). Длинные обрезаем по словам.
    def _short_utp(s: str) -> str:
        words = str(s).strip().split()
        return " ".join(words[:6])[:80]

    return {
        "title": title[:120],
        "subtitle": subtitle[:120],
        "utp": [_short_utp(x) for x in (data.get("utp") or []) if str(x).strip()][:5],
        "icons": [],  # эмодзи-иконки отключены, иконки делает отдельный AI-сервис
    }
