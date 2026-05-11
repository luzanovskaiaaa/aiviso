"""
Ozon Seller API адаптер.

Авторизация: header Client-Id + Api-Key (создаётся в ЛК Ozon → Настройки → Seller API).
Базовый URL: https://api-seller.ozon.ru

Используем:
  POST /v3/product/list           — список product_id (с пагинацией last_id)
  POST /v3/product/info/list      — детали товаров (фото, цены, категория)
  POST /v1/product/pictures/import — заменить набор фото товара
"""
from __future__ import annotations
import asyncio
import logging
from typing import Any, Optional

import httpx

logger = logging.getLogger(__name__)

OZON_BASE = "https://api-seller.ozon.ru"
DEFAULT_TIMEOUT = httpx.Timeout(connect=15.0, read=60.0, write=60.0, pool=15.0)


class OzonError(Exception):
    def __init__(self, status_code: int, detail: str, body: Any = None):
        super().__init__(f"Ozon {status_code}: {detail}")
        self.status_code = status_code
        self.detail = detail
        self.body = body


def _headers(client_id: str, api_key: str) -> dict[str, str]:
    return {
        "Client-Id": str(client_id),
        "Api-Key": api_key,
        "Content-Type": "application/json",
    }


async def _post(path: str, *, client_id: str, api_key: str, body: dict, retries: int = 2) -> dict:
    url = f"{OZON_BASE}{path}"
    headers = _headers(client_id, api_key)
    last_exc: Optional[Exception] = None
    for attempt in range(retries + 1):
        try:
            async with httpx.AsyncClient(timeout=DEFAULT_TIMEOUT) as client:
                resp = await client.post(url, headers=headers, json=body)
            if resp.status_code == 429:
                await asyncio.sleep(2 * (attempt + 1))
                continue
            if 200 <= resp.status_code < 300:
                return resp.json() if resp.content else {}
            try:
                err = resp.json()
            except Exception:
                err = {"message": resp.text[:300]}
            detail = err.get("message") or err.get("error", {}).get("message") or f"HTTP {resp.status_code}"
            raise OzonError(resp.status_code, detail, err)
        except OzonError:
            raise
        except Exception as e:
            last_exc = e
            if attempt < retries:
                await asyncio.sleep(0.5 * (attempt + 1))
                continue
            raise OzonError(0, f"network: {e}")
    if last_exc:
        raise OzonError(0, f"network: {last_exc}")
    raise OzonError(0, "unknown")


# ── Public API ────────────────────────────────────────────────────────────────

async def check_connection(client_id: str, api_key: str) -> dict:
    """Минимальный пинг — пустой product/list. Если 200 — токены валидны."""
    res = await _post("/v3/product/list", client_id=client_id, api_key=api_key,
                      body={"filter": {"visibility": "ALL"}, "last_id": "", "limit": 1})
    return {"ok": True, "total": (res.get("result") or {}).get("total", 0)}


async def list_product_ids(client_id: str, api_key: str, *, max_pages: int = 30) -> list[int]:
    """Возвращает все product_id из аккаунта (через пагинацию last_id)."""
    out: list[int] = []
    last_id = ""
    for _ in range(max_pages):
        res = await _post("/v3/product/list", client_id=client_id, api_key=api_key,
                          body={"filter": {"visibility": "ALL"}, "last_id": last_id, "limit": 1000})
        result = res.get("result") or {}
        items = result.get("items") or []
        for it in items:
            pid = it.get("product_id")
            if pid:
                out.append(int(pid))
        last_id = result.get("last_id") or ""
        if not last_id or len(items) == 0:
            break
    return out


async def get_products_info(client_id: str, api_key: str, *, product_ids: list[int]) -> list[dict]:
    """Детали по списку product_id (батчами по 1000)."""
    out: list[dict] = []
    for i in range(0, len(product_ids), 1000):
        chunk = product_ids[i:i + 1000]
        res = await _post("/v3/product/info/list", client_id=client_id, api_key=api_key,
                          body={"product_id": [str(p) for p in chunk]})
        items = (res.get("items") if "items" in res else (res.get("result") or {}).get("items")) or []
        out.extend(items)
    return out


async def import_pictures(client_id: str, api_key: str, *, product_id: int, images: list[str]) -> dict:
    """
    POST /v1/product/pictures/import — заменить весь набор фото товара.
    Все URL должны быть public, JPG/PNG. До 30 фото.
    """
    return await _post("/v1/product/pictures/import", client_id=client_id, api_key=api_key,
                       body={"product_id": int(product_id), "images": images[:30]})


async def get_category_tree(client_id: str, api_key: str, *, language: str = "RU") -> list[dict]:
    """POST /v1/description-category/tree — дерево категорий и типов товаров."""
    res = await _post("/v1/description-category/tree", client_id=client_id, api_key=api_key,
                      body={"language": language})
    return res.get("result") or []


async def get_category_attributes(client_id: str, api_key: str, *, description_category_id: int, type_id: int, language: str = "RU") -> list[dict]:
    """POST /v1/description-category/attribute — все атрибуты для type внутри категории."""
    res = await _post("/v1/description-category/attribute", client_id=client_id, api_key=api_key,
                      body={
                          "description_category_id": int(description_category_id),
                          "type_id": int(type_id),
                          "language": language,
                      })
    return res.get("result") or []


async def get_product_attributes(client_id: str, api_key: str, *, product_id: int) -> dict:
    """
    POST /v4/product/info/attributes — полное описание товара со всеми заполненными атрибутами.
    Используется для клонирования (скопировать обязательные поля при создании нового offer_id).
    """
    res = await _post("/v4/product/info/attributes", client_id=client_id, api_key=api_key,
                      body={"filter": {"product_id": [str(product_id)], "visibility": "ALL"}, "limit": 1})
    items = res.get("result") or []
    return items[0] if items else {}


async def import_products(client_id: str, api_key: str, *, items: list[dict]) -> dict:
    """
    POST /v3/product/import — создание/обновление до 100 товаров за один вызов.
    Возвращает task_id, статус опрашивается через get_import_info.
    """
    return await _post("/v3/product/import", client_id=client_id, api_key=api_key,
                       body={"items": items[:100]})


async def get_import_info(client_id: str, api_key: str, *, task_id: int) -> dict:
    """
    POST /v1/product/import/info — статус задачи import_products.
    Ответ: items[{offer_id, product_id, status, errors[]}]; общий status задачи.
    """
    return await _post("/v1/product/import/info", client_id=client_id, api_key=api_key,
                       body={"task_id": int(task_id)})


async def get_attribute_values(
    client_id: str, api_key: str, *,
    description_category_id: int, type_id: int, attribute_id: int,
    last_value_id: int = 0, limit: int = 100, language: str = "RU",
) -> dict:
    """POST /v1/description-category/attribute/values — значения справочника атрибута (с пагинацией)."""
    res = await _post("/v1/description-category/attribute/values", client_id=client_id, api_key=api_key,
                      body={
                          "description_category_id": int(description_category_id),
                          "type_id": int(type_id),
                          "attribute_id": int(attribute_id),
                          "last_value_id": int(last_value_id),
                          "limit": int(limit),
                          "language": language,
                      })
    return res


def flatten_ozon_tree(tree: list[dict], parent_id: str | None = None) -> list[dict]:
    """
    Разворачивает дерево Ozon в плоский список узлов с указанием parent.
    Маркер leaf: type_id != null (тип товара) или children пустой.
    """
    out: list[dict] = []
    for node in tree:
        # внутренний узел может быть category (description_category_id) или type (type_id)
        if node.get("type_id"):
            cat_id = str(node.get("type_id"))
            out.append({
                "external_id": cat_id,
                "parent_id": parent_id,
                "name": node.get("type_name") or "",
                "is_leaf": True,
                "type_id": cat_id,
                "raw": node,
            })
        else:
            cat_id = str(node.get("description_category_id"))
            children = node.get("children") or []
            is_leaf = len(children) == 0
            out.append({
                "external_id": cat_id,
                "parent_id": parent_id,
                "name": node.get("category_name") or "",
                "is_leaf": is_leaf,
                "type_id": None,
                "raw": {k: v for k, v in node.items() if k != "children"},
            })
            if children:
                out.extend(flatten_ozon_tree(children, parent_id=cat_id))
    return out


def extract_photos(product_info: dict) -> list[str]:
    """Из ответа /v3/product/info/list извлекает URL фото."""
    imgs = product_info.get("images") or product_info.get("primary_image") or []
    if isinstance(imgs, str):
        return [imgs]
    out: list[str] = []
    for x in imgs:
        if isinstance(x, str):
            out.append(x)
        elif isinstance(x, dict):
            url = x.get("file_name") or x.get("url") or x.get("src")
            if url:
                out.append(url)
    return out
