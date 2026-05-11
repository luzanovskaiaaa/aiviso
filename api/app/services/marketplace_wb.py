"""
Wildberries Content API адаптер.

Базовая концепция (April 2026):
- Авторизация — JWT в заголовке `Authorization: Bearer <token>`, токен живёт 180 дней.
- Категория Контент: домен https://content-api.wildberries.ru
- Лимит: 100 req/min на категорию Контент.

Эндпоинты, которые используем:
  GET  /ping                        — проверка токена
  POST /content/v2/get/cards/list   — список карточек (с пагинацией через cursor)
  POST /content/v2/cards/upload     — создать карточку
  POST /content/v2/cards/update     — обновить карточку
  POST /content/v3/media/save       — заменить медиа в карточке по списку URL
  GET  /content/v2/cards/limits     — квоты
"""
from __future__ import annotations
import asyncio
import logging
from typing import Any, Optional

import httpx

logger = logging.getLogger(__name__)

CONTENT_BASE = "https://content-api.wildberries.ru"
COMMON_BASE = "https://common-api.wildberries.ru"
DEFAULT_TIMEOUT = httpx.Timeout(connect=15.0, read=60.0, write=60.0, pool=15.0)


class WBError(Exception):
    """Ошибка вызова WB API. Содержит status_code и detail."""
    def __init__(self, status_code: int, detail: str, body: Any = None):
        super().__init__(f"WB {status_code}: {detail}")
        self.status_code = status_code
        self.detail = detail
        self.body = body


def _auth_headers(token: str) -> dict[str, str]:
    return {
        "Authorization": f"Bearer {token}".replace("Bearer Bearer ", "Bearer "),
        "Content-Type": "application/json",
    }


async def _request(method: str, url: str, token: str, *, json: Any = None, params: dict | None = None, retries: int = 2) -> Any:
    headers = _auth_headers(token)
    last_exc: Optional[Exception] = None
    for attempt in range(retries + 1):
        try:
            async with httpx.AsyncClient(timeout=DEFAULT_TIMEOUT) as client:
                resp = await client.request(method, url, headers=headers, json=json, params=params)
            if resp.status_code == 429:
                retry_after = int(resp.headers.get("X-Ratelimit-Retry", "2") or "2")
                logger.warning("WB rate-limit hit, sleep %ss", retry_after)
                await asyncio.sleep(retry_after)
                continue
            if 200 <= resp.status_code < 300:
                if not resp.content:
                    return None
                try:
                    return resp.json()
                except Exception:
                    return resp.text
            try:
                err_body = resp.json()
            except Exception:
                err_body = resp.text
            detail = (
                err_body.get("detail") if isinstance(err_body, dict) else str(err_body)[:300]
            ) or f"HTTP {resp.status_code}"
            raise WBError(resp.status_code, detail, err_body)
        except WBError:
            raise
        except Exception as e:
            last_exc = e
            if attempt < retries:
                await asyncio.sleep(0.5 * (attempt + 1))
                continue
            raise WBError(0, f"network: {e}")
    if last_exc:
        raise WBError(0, f"network: {last_exc}")
    raise WBError(0, "unknown")


# ── Public API ────────────────────────────────────────────────────────────────

async def check_connection(token: str) -> dict:
    """Проверяет токен через /ping. Возвращает {'ok': True, 'ts': ...} или кидает WBError."""
    data = await _request("GET", f"{CONTENT_BASE}/ping", token)
    return {"ok": True, "ts": data.get("TS") if isinstance(data, dict) else None}


async def list_cards(token: str, *, limit: int = 100, cursor: dict | None = None) -> dict:
    """
    POST /content/v2/get/cards/list — список карточек продавца.
    cursor: {"updatedAt": "...", "nmID": 123} — для пагинации (берётся из предыдущего ответа).
    """
    body = {
        "settings": {
            "cursor": {"limit": min(int(limit), 100)},
            "filter": {"withPhoto": -1},
        }
    }
    if cursor:
        body["settings"]["cursor"].update(cursor)
    return await _request("POST", f"{CONTENT_BASE}/content/v2/get/cards/list", token, json=body)


async def list_all_cards(token: str, *, max_pages: int = 50) -> list[dict]:
    """Итерирует все страницы и возвращает плоский список карточек."""
    out: list[dict] = []
    cursor: dict | None = None
    for _ in range(max_pages):
        page = await list_cards(token, cursor=cursor)
        cards = (page or {}).get("cards", []) or []
        out.extend(cards)
        next_cursor = (page or {}).get("cursor") or {}
        # На последней странице WB возвращает total меньше limit.
        if next_cursor.get("total", 0) < (next_cursor.get("limit") or 100):
            break
        cursor = {"updatedAt": next_cursor.get("updatedAt"), "nmID": next_cursor.get("nmID")}
    return out


async def upload_media_by_urls(token: str, *, nm_id: int, photo_urls: list[str]) -> dict:
    """
    POST /content/v3/media/save — заменяет ВЕСЬ набор фото карточки на переданные URL'ы.
    Порядок — порядок в карточке. До 30 фото на карточку.
    """
    body = {"nmId": nm_id, "data": photo_urls[:30]}
    return await _request("POST", f"{CONTENT_BASE}/content/v3/media/save", token, json=body)


async def get_card_limits(token: str) -> dict:
    """GET /content/v2/cards/limits — квоты на создание карточек."""
    return await _request("GET", f"{CONTENT_BASE}/content/v2/cards/limits", token)


async def list_parent_categories(token: str) -> list[dict]:
    """GET /content/v2/object/parent/all — родительские категории WB."""
    data = await _request("GET", f"{CONTENT_BASE}/content/v2/object/parent/all", token)
    return (data or {}).get("data") or []


async def list_subjects(token: str, *, parent_id: int | None = None, limit: int = 1000, offset: int = 0) -> list[dict]:
    """
    GET /content/v2/object/all — предметы (subjects = листья дерева категорий WB).
    Создавать карточки можно только на уровне subject.
    """
    params = {"limit": limit, "offset": offset}
    if parent_id is not None:
        params["parentID"] = parent_id
    data = await _request("GET", f"{CONTENT_BASE}/content/v2/object/all", token, params=params)
    return (data or {}).get("data") or []


async def get_subject_attrs(token: str, *, subject_id: int) -> list[dict]:
    """GET /content/v2/object/charcs/{subjectID} — характеристики предмета."""
    data = await _request("GET", f"{CONTENT_BASE}/content/v2/object/charcs/{int(subject_id)}", token)
    return (data or {}).get("data") or []


async def get_directory(token: str, name: str) -> list[dict]:
    """
    GET /content/v2/directory/{name} — справочник для атрибута (например 'colors', 'countries').
    Список названий справочников указан в спецификации: directory/colors, /tnved, /seasons, ...
    """
    data = await _request("GET", f"{CONTENT_BASE}/content/v2/directory/{name}", token)
    return (data or {}).get("data") or []


async def create_cards(token: str, *, items: list[dict]) -> dict:
    """
    POST /content/v2/cards/upload — создание карточек батчем.

    Body — массив "товаров" внутри которых одна или несколько вариаций (variants).
    Структура (минимально валидная для одной товарной позиции):
    [
      {
        "subjectID": 4340,                  # ID предмета (subject) — БЕРЁМ ИЗ ИМПОРТА
        "variants": [
          {
            "vendorCode":  "ART-12345",     # уникальный артикул селлера
            "title":       "Название",
            "description": "Описание",
            "brand":       "Имя бренда",
            "dimensions":  {"length": 30, "width": 40, "height": 4, "weightBrutto": 2.5},
            "characteristics": [{"id": 12192739, "value": "..."}, ...],
            "sizes":       [{"techSize": "0", "wbSize": "", "skus": ["BARCODE_OR_EMPTY"], "price": 5000}]
          }
        ]
      }
    ]

    Ответ — задача в фоне. Статус опрашивается через get_upload_task_status (если знаем taskId)
    или через /content/v2/cards/error/list (для ошибок).
    """
    return await _request("POST", f"{CONTENT_BASE}/content/v2/cards/upload", token, json=items)


async def get_upload_errors(token: str) -> list[dict]:
    """
    GET /content/v2/cards/error/list — список карточек с ошибками валидации
    (которые НЕ создались за последние ~3 дня). Используем для проверки результата
    create_cards: если артикула там нет — значит создалось успешно.
    """
    data = await _request("GET", f"{CONTENT_BASE}/content/v2/cards/error/list", token)
    return (data or {}).get("data") or []


def extract_photos(card: dict) -> list[str]:
    """Из ответа /cards/list вытаскивает массив URL фото в порядке отображения."""
    photos = card.get("photos") or []
    out: list[str] = []
    for p in photos:
        # WB отдаёт несколько размеров; берём оригинал (big), либо первый доступный
        if isinstance(p, dict):
            url = p.get("big") or p.get("c516x688") or p.get("c246x328") or p.get("hq") or p.get("tm")
            if url:
                out.append(url)
        elif isinstance(p, str):
            out.append(p)
    return out
