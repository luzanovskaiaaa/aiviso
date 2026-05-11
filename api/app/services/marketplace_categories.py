"""
Кэш категорий и обязательных атрибутов маркетплейсов + статичный маппинг наших 5 категорий
на конкретные узлы WB и Ozon.

Цели:
- При создании Aiviso-проекта из импортированной карточки — знать целевую категорию
  на маркетплейсе (subjectID для WB, type_id для Ozon).
- При показе UI «характеристики карточки» — знать какие поля обязательны.
- При миграции между маркетплейсами — знать соответствие категорий.
"""
from __future__ import annotations
import json
from typing import Any

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.dialects.postgresql import insert as pg_insert

# ── статичный маппинг наших 5 наших категорий → популярные узлы маркетплейсов ──
# Заполнен на основании реального состава товаров Алёны (мебель: столики/держатели/сиденья).
# Расширяется по мере необходимости.
STATIC_MAPPING: dict[str, dict[str, Any]] = {
    "furniture": {
        # Реальные subject_id из WB API (проверены на её аккаунте):
        "wb_subject_ids": [8747, 8746, 7580, 8748, 9091, 2479],
        # 8747=Мебель малых форм (столики/держатели), 8746=Корпусная, 7580=Мягкая, 8748=Садовая, 2479=Офисная/торговое
        "wb_default": 8747,
        "ozon_category_ids": [17027924],
        "ozon_default_type_id": None,
        "label": "Мебель",
    },
    "clothing": {
        "wb_subject_ids": [123, 200, 197, 202, 5054],  # платья, куртки, брюки, рубашки, футболки
        "wb_default": 123,
        "ozon_category_ids": [17027949],
        "ozon_default_type_id": None,
        "label": "Одежда",
    },
    "cosmetics": {
        "wb_subject_ids": [617, 615, 622, 633],  # уход за телом / лицом / руками / волосами
        "wb_default": 615,
        "ozon_category_ids": [17027906],
        "ozon_default_type_id": None,
        "label": "Косметика",
    },
    "food": {
        "wb_subject_ids": [3000, 3026, 3010],  # сладости, бакалея, чай/кофе
        "wb_default": 3000,
        "ozon_category_ids": [17027894],
        "ozon_default_type_id": None,
        "label": "Продукты питания",
    },
    "electronics": {
        "wb_subject_ids": [4078, 4079, 4078, 4081],
        "wb_default": 4078,
        "ozon_category_ids": [17027895],
        "ozon_default_type_id": None,
        "label": "Электроника",
    },
}


async def fetch_category_names(db: AsyncSession, *, provider: str, external_ids: list[str]) -> dict[str, str]:
    """Возвращает {external_id: name} из mp_categories для заданного списка ID.
    Используется для резолва человекочитаемых названий описание_category_id/type_id у Ozon
    и subjectID у WB.
    """
    if not external_ids:
        return {}
    from sqlalchemy import text
    res = await db.execute(text(
        "SELECT external_id, name FROM mp_categories "
        "WHERE provider = :provider AND external_id = ANY(:ids)"
    ), {"provider": provider, "ids": external_ids})
    return {str(row[0]): row[1] for row in res.fetchall()}


async def upsert_categories(db: AsyncSession, *, provider: str, items: list[dict]) -> int:
    """Bulk-upsert в mp_categories. items — нормализованные узлы из адаптеров."""
    if not items:
        return 0
    from app.database import Base
    from sqlalchemy import Table
    md = Base.metadata
    tbl = md.tables.get("mp_categories")
    if tbl is None:
        # таблица не описана через ORM, идём через raw SQL
        from sqlalchemy import text
        for it in items:
            await db.execute(text(
                "INSERT INTO mp_categories (provider, external_id, parent_id, name, is_leaf, type_id, raw) "
                "VALUES (:provider, :external_id, :parent_id, :name, :is_leaf, :type_id, CAST(:raw AS JSONB)) "
                "ON CONFLICT (provider, external_id) DO UPDATE SET "
                "parent_id=EXCLUDED.parent_id, name=EXCLUDED.name, is_leaf=EXCLUDED.is_leaf, "
                "type_id=EXCLUDED.type_id, raw=EXCLUDED.raw, fetched_at=NOW()"
            ), {
                "provider": provider,
                "external_id": str(it.get("external_id")),
                "parent_id": str(it["parent_id"]) if it.get("parent_id") is not None else None,
                "name": (it.get("name") or "")[:500],
                "is_leaf": bool(it.get("is_leaf")),
                "type_id": str(it["type_id"]) if it.get("type_id") is not None else None,
                "raw": json.dumps(it.get("raw") or {}, ensure_ascii=False),
            })
        await db.commit()
        return len(items)
    return 0


async def upsert_attrs(db: AsyncSession, *, provider: str, category_id: str, type_id: str | None, items: list[dict]) -> int:
    """Bulk-upsert в mp_attrs. items — нормализованные характеристики."""
    if not items:
        return 0
    from sqlalchemy import text
    for it in items:
        await db.execute(text(
            "INSERT INTO mp_attrs (provider, category_external_id, type_external_id, attr_external_id, "
            "name, description, data_type, is_required, is_collection, is_aspect, dictionary_id, max_count, raw) "
            "VALUES (:provider, :cat, :typ, :attr, :name, :desc, :dt, :req, :col, :asp, :dict_id, :max_c, CAST(:raw AS JSONB)) "
            "ON CONFLICT (provider, category_external_id, COALESCE(type_external_id, ''), attr_external_id) DO UPDATE SET "
            "name=EXCLUDED.name, description=EXCLUDED.description, data_type=EXCLUDED.data_type, "
            "is_required=EXCLUDED.is_required, is_collection=EXCLUDED.is_collection, is_aspect=EXCLUDED.is_aspect, "
            "dictionary_id=EXCLUDED.dictionary_id, max_count=EXCLUDED.max_count, raw=EXCLUDED.raw, fetched_at=NOW()"
        ), {
            "provider": provider,
            "cat": str(category_id),
            "typ": str(type_id) if type_id is not None else None,
            "attr": str(it.get("attr_external_id") or it.get("id")),
            "name": (it.get("name") or "")[:500],
            "desc": it.get("description"),
            "dt": (it.get("data_type") or it.get("type") or "")[:32] or None,
            "req": bool(it.get("is_required")),
            "col": bool(it.get("is_collection")),
            "asp": bool(it.get("is_aspect")),
            "dict_id": int(it.get("dictionary_id")) if it.get("dictionary_id") else None,
            "max_c": int(it.get("max_count") or it.get("max_value_count") or 0) or None,
            "raw": json.dumps(it.get("raw") or it, ensure_ascii=False),
        })
    await db.commit()
    return len(items)


async def get_required_attrs(db: AsyncSession, *, provider: str, category_id: str, type_id: str | None) -> list[dict]:
    """Возвращает только обязательные атрибуты из кеша."""
    from sqlalchemy import text
    if type_id:
        rows = await db.execute(text(
            "SELECT attr_external_id, name, description, data_type, is_collection, is_aspect, dictionary_id, max_count "
            "FROM mp_attrs WHERE provider=:p AND category_external_id=:c AND COALESCE(type_external_id,'')=:t AND is_required=true "
            "ORDER BY attr_external_id"
        ), {"p": provider, "c": category_id, "t": type_id})
    else:
        rows = await db.execute(text(
            "SELECT attr_external_id, name, description, data_type, is_collection, is_aspect, dictionary_id, max_count "
            "FROM mp_attrs WHERE provider=:p AND category_external_id=:c AND is_required=true "
            "ORDER BY attr_external_id"
        ), {"p": provider, "c": category_id})
    return [dict(r._mapping) for r in rows]


def normalize_wb_subject(s: dict) -> dict:
    """Нормализует ответ /content/v2/object/all для WB."""
    return {
        "external_id": str(s.get("subjectID")),
        "parent_id": str(s.get("parentID")) if s.get("parentID") is not None else None,
        "name": s.get("subjectName") or "",
        "is_leaf": True,  # subject — это всегда leaf для WB
        "type_id": None,
        "raw": s,
    }


def normalize_wb_parent(p: dict) -> dict:
    """Нормализует /content/v2/object/parent/all (родительская категория WB)."""
    return {
        "external_id": str(p.get("id")),
        "parent_id": None,
        "name": p.get("name") or "",
        "is_leaf": False,
        "type_id": None,
        "raw": p,
    }


def normalize_wb_charc(c: dict) -> dict:
    """Нормализует характеристику subject → запись для mp_attrs."""
    return {
        "attr_external_id": str(c.get("charcID") or c.get("id")),
        "name": c.get("name") or "",
        "description": c.get("description") or None,
        "data_type": _wb_charc_type(c),
        "is_required": bool(c.get("required")),
        "is_collection": (int(c.get("maxCount") or 0) > 1),
        "is_aspect": False,
        "dictionary_id": None,
        "max_count": int(c.get("maxCount") or 0) or None,
        "raw": c,
    }


def _wb_charc_type(c: dict) -> str:
    # WB type как-то задаётся одной из: charcType (1=string,4=number,...) или unitName/popular
    ct = c.get("charcType")
    if ct == 1: return "string"
    if ct == 4: return "number"
    if ct == 0: return "list"
    return "string"


def normalize_ozon_attr(a: dict) -> dict:
    return {
        "attr_external_id": str(a.get("id")),
        "name": a.get("name") or "",
        "description": a.get("description") or None,
        "data_type": (a.get("type") or "string")[:32],
        "is_required": bool(a.get("is_required")),
        "is_collection": bool(a.get("is_collection")),
        "is_aspect": bool(a.get("is_aspect")),
        "dictionary_id": int(a.get("dictionary_id") or 0) or None,
        "max_count": int(a.get("max_value_count") or 0) or None,
        "raw": a,
    }
