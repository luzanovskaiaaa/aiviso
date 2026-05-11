"""
Управление маркетплейс-аккаунтами и импорт карточек.

Endpoints:
  POST   /marketplaces                            — добавить аккаунт (provider, token, ...)
  GET    /marketplaces                            — список аккаунтов пользователя
  POST   /marketplaces/{id}/check                 — проверить токен (ping)
  DELETE /marketplaces/{id}                       — удалить
  POST   /marketplaces/{id}/cards/import          — импорт списка карточек
  GET    /marketplaces/{id}/cards                 — импортированные карточки
  POST   /marketplaces/{id}/cards/{card_id}/create-project — создать Aiviso-проект из карточки
  POST   /marketplaces/{id}/cards/{card_id}/publish-photos — залить новые фото в карточку
"""
import os
import uuid
from datetime import datetime, timezone
from typing import Optional

import aiofiles
import httpx
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.security import get_current_user
from app.database import get_db
from app.models.marketplace import ImportedCard, MarketplaceAccount, CategoryMapping
from app.models.project import Project, Upload
from app.models.generation import Generation
from app.models.user import User
from app.services import marketplace_wb as wb
from app.services import marketplace_ozon as ozon
from app.services import marketplace_categories as mp_cat
from sqlalchemy import text as sql_text

router = APIRouter(prefix="/marketplaces", tags=["marketplaces"])

PROVIDERS = {"wb", "ozon", "ym"}


# ── Pydantic ──────────────────────────────────────────────────────────────────

class AccountCreate(BaseModel):
    provider: str  # wb | ozon | ym
    name: str
    api_key: str
    client_id: Optional[str] = None  # для Ozon
    business_id: Optional[int] = None  # для YM


class AccountResponse(BaseModel):
    id: int
    provider: str
    name: str
    has_client_id: bool
    has_business_id: bool
    status: str
    last_sync_at: Optional[datetime]
    created_at: datetime

    class Config:
        from_attributes = True


class ImportedCardResponse(BaseModel):
    id: int
    mp_card_id: str
    nm_id: Optional[int]
    name: Optional[str]
    brand: Optional[str]
    category: Optional[str]
    photos: Optional[list]
    project_id: Optional[int]
    imported_at: datetime

    class Config:
        from_attributes = True


def _to_account_response(a: MarketplaceAccount) -> AccountResponse:
    return AccountResponse(
        id=a.id, provider=a.provider, name=a.name,
        has_client_id=bool(a.client_id), has_business_id=bool(a.business_id),
        status=a.status, last_sync_at=a.last_sync_at, created_at=a.created_at,
    )


# ── CRUD аккаунтов ────────────────────────────────────────────────────────────

@router.post("", response_model=AccountResponse, status_code=201)
async def create_account(
    data: AccountCreate,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    if data.provider not in PROVIDERS:
        raise HTTPException(400, f"provider должен быть одним из: {', '.join(PROVIDERS)}")
    if data.provider == "ozon" and not data.client_id:
        raise HTTPException(400, "Для Ozon нужно указать client_id")
    if data.provider == "ym" and not data.business_id:
        raise HTTPException(400, "Для Яндекс Маркета нужно указать business_id")

    # Сразу проверяем токен
    if data.provider == "wb":
        try:
            await wb.check_connection(data.api_key)
        except wb.WBError as e:
            raise HTTPException(400, f"WB не принял токен: {e.detail}")
    elif data.provider == "ozon":
        try:
            await ozon.check_connection(data.client_id, data.api_key)
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon не принял токен: {e.detail}")

    acc = MarketplaceAccount(
        user_id=user.id,
        provider=data.provider,
        name=data.name[:255],
        api_key=data.api_key,
        client_id=data.client_id,
        business_id=data.business_id,
        status="active",
    )
    db.add(acc)
    await db.commit()
    await db.refresh(acc)
    return _to_account_response(acc)


@router.get("", response_model=list[AccountResponse])
async def list_accounts(user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    res = await db.execute(
        select(MarketplaceAccount)
        .where(MarketplaceAccount.user_id == user.id)
        .order_by(MarketplaceAccount.created_at.desc())
    )
    return [_to_account_response(a) for a in res.scalars().all()]


@router.post("/{account_id}/check")
async def check_account(account_id: int, user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    acc = await _get_account_or_404(account_id, user.id, db)
    if acc.provider == "wb":
        try:
            return await wb.check_connection(acc.api_key)
        except wb.WBError as e:
            raise HTTPException(400, f"WB: {e.detail}")
    if acc.provider == "ozon":
        try:
            return await ozon.check_connection(acc.client_id, acc.api_key)
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: {e.detail}")
    raise HTTPException(501, f"check для провайдера {acc.provider} ещё не реализован")


class AccountUpdate(BaseModel):
    name: Optional[str] = None
    api_key: Optional[str] = None
    client_id: Optional[str] = None  # только для Ozon


@router.patch("/{account_id}", response_model=AccountResponse)
async def update_account(
    account_id: int,
    data: AccountUpdate,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    acc = await _get_account_or_404(account_id, user.id, db)
    if data.name is not None:
        acc.name = data.name.strip()[:255] or acc.name
    if data.api_key is not None:
        api_key = data.api_key.strip()
        if not api_key:
            raise HTTPException(400, "api_key не может быть пустым")
        # Проверяем новый ключ перед сохранением
        if acc.provider == "wb":
            try:
                await wb.check_connection(api_key)
            except wb.WBError as e:
                raise HTTPException(400, f"WB не принял токен: {e.detail}")
        elif acc.provider == "ozon":
            cid = (data.client_id or acc.client_id or "").strip()
            if not cid:
                raise HTTPException(400, "Для Ozon нужен client_id")
            try:
                await ozon.check_connection(cid, api_key)
            except ozon.OzonError as e:
                raise HTTPException(400, f"Ozon не принял токен: {e.detail}")
        acc.api_key = api_key
    if data.client_id is not None and acc.provider == "ozon":
        acc.client_id = data.client_id.strip() or acc.client_id
    acc.status = "active"
    await db.commit()
    await db.refresh(acc)
    return _to_account_response(acc)


@router.delete("/{account_id}", status_code=204)
async def delete_account(account_id: int, user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    acc = await _get_account_or_404(account_id, user.id, db)
    await db.delete(acc)
    await db.commit()


# ── Импорт карточек ───────────────────────────────────────────────────────────

@router.post("/{account_id}/cards/import")
async def import_cards(
    account_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Запросить у маркетплейса все карточки и сохранить snapshot в imported_cards."""
    acc = await _get_account_or_404(account_id, user.id, db)

    # Сначала вытаскиваем сырые карточки от соответствующего маркетплейса
    if acc.provider == "wb":
        try:
            cards = await wb.list_all_cards(acc.api_key)
        except wb.WBError as e:
            raise HTTPException(400, f"WB: {e.detail}")
    elif acc.provider == "ozon":
        try:
            ids = await ozon.list_product_ids(acc.client_id, acc.api_key)
            cards = await ozon.get_products_info(acc.client_id, acc.api_key, product_ids=ids) if ids else []
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: {e.detail}")
    else:
        raise HTTPException(501, f"Импорт для {acc.provider} ещё не реализован")

    # Заменяем предыдущий снимок этого аккаунта
    await db.execute(delete(ImportedCard).where(ImportedCard.account_id == acc.id))
    await db.commit()

    saved = 0
    for c in cards:
        if acc.provider == "wb":
            nm_id = c.get("nmID")
            photos = wb.extract_photos(c)
            mp_card_id = str(nm_id or c.get("vendorCode") or uuid.uuid4())
            name = (c.get("title") or c.get("vendorCode") or "")[:500]
            brand = (c.get("brand") or "")[:255] or None
            category = (c.get("subjectName") or c.get("subject") or "")[:255] or None
            attributes = {"characteristics": c.get("characteristics", [])} if c.get("characteristics") else None
        else:  # ozon
            nm_id = None
            pid = c.get("product_id") or c.get("id")
            photos = ozon.extract_photos(c)
            mp_card_id = str(pid or c.get("offer_id") or uuid.uuid4())
            try:
                nm_id = int(pid) if pid else None
            except Exception:
                nm_id = None
            name = (c.get("name") or c.get("offer_id") or "")[:500]
            brand = None
            category = str(c.get("description_category_id") or "")[:255] or None
            attributes = {"barcodes": c.get("barcodes", [])} if c.get("barcodes") else None

        ic = ImportedCard(
            account_id=acc.id,
            user_id=user.id,
            mp_card_id=mp_card_id,
            nm_id=nm_id,
            name=name,
            brand=brand,
            category=category,
            photos=photos,
            attributes=attributes,
            raw_data=c,
        )
        db.add(ic)
        saved += 1
    acc.last_sync_at = datetime.now(timezone.utc)
    await db.commit()
    return {"imported": saved, "account_id": acc.id, "provider": acc.provider}


class ProjectLink(BaseModel):
    account_id: int
    card_id: int
    provider: str
    mp_card_id: str
    nm_id: Optional[int]
    name: Optional[str]


@router.get("/by-project/{project_id}", response_model=Optional[ProjectLink])
async def get_link_by_project(project_id: int, user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    """Возвращает связку (account, card) для проекта если он создан из импорта."""
    res = await db.execute(
        select(ImportedCard, MarketplaceAccount)
        .join(MarketplaceAccount, MarketplaceAccount.id == ImportedCard.account_id)
        .where(ImportedCard.project_id == project_id, ImportedCard.user_id == user.id)
    )
    row = res.first()
    if not row:
        return None
    card, acc = row
    return ProjectLink(
        account_id=acc.id, card_id=card.id, provider=acc.provider,
        mp_card_id=card.mp_card_id, nm_id=card.nm_id, name=card.name,
    )


@router.get("/{account_id}/cards", response_model=list[ImportedCardResponse])
async def list_imported_cards(
    account_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    acc = await _get_account_or_404(account_id, user.id, db)
    res = await db.execute(
        select(ImportedCard)
        .where(ImportedCard.account_id == acc.id, ImportedCard.user_id == user.id)
        .order_by(ImportedCard.imported_at.desc())
    )
    cards = list(res.scalars().all())

    # Резолвим category id → имя через закешированное mp_categories для этого провайдера.
    # Если для Ozon в card.category лежит numeric description_category_id (например "80731485")
    # — пытаемся найти соответствующее имя в кеше. Для WB обычно уже имя (subjectName).
    cat_ids = sorted({c.category for c in cards if c.category})
    name_map: dict[str, str] = {}
    if cat_ids:
        from sqlalchemy import text as _text
        try:
            res2 = await db.execute(
                _text("SELECT external_id, name FROM mp_categories "
                      "WHERE provider = :p AND external_id = ANY(:ids)"),
                {"p": acc.provider, "ids": cat_ids},
            )
            name_map = {row[0]: row[1] for row in res2.fetchall() if row[1]}
        except Exception:
            name_map = {}

    out = []
    for c in cards:
        dto = ImportedCardResponse.model_validate(c, from_attributes=True)
        # Если это число и есть имя в кеше — заменяем
        if dto.category and dto.category.isdigit() and dto.category in name_map:
            dto.category = name_map[dto.category]
        out.append(dto)
    return out


# ── Создание Aiviso-проекта из импортированной карточки ──────────────────────

@router.post("/{account_id}/cards/{card_id}/create-project")
async def create_project_from_card(
    account_id: int,
    card_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """
    Делает из импортированной карточки новый Aiviso-проект:
    1) скачивает фото из mp-CDN, кладёт в uploads/{project_id}/
    2) предзаполняет title и (если есть) брендовые УТП
    """
    acc = await _get_account_or_404(account_id, user.id, db)
    res = await db.execute(
        select(ImportedCard).where(
            ImportedCard.id == card_id,
            ImportedCard.account_id == acc.id,
            ImportedCard.user_id == user.id,
        )
    )
    card = res.scalar_one_or_none()
    if not card:
        raise HTTPException(404, "Карточка не найдена")

    # Категория: маппим WB subject → наши 5 категорий грубо. По умолчанию clothing.
    category = _guess_category(card.category or "")

    project = Project(
        user_id=user.id,
        name=(card.name or f"Карточка #{card.mp_card_id}")[:255],
        category=category,
        flow="series",  # для миграции карточки лучше series — даёт research + batch
        model="pro",    # для реновации лучше Pro чтобы сохранить детали
        title=card.name,
    )
    db.add(project)
    await db.commit()
    await db.refresh(project)

    # Скачиваем фото в uploads
    project_dir = os.path.join(settings.UPLOAD_DIR, str(project.id))
    os.makedirs(project_dir, exist_ok=True)
    downloaded = 0
    if card.photos:
        # WB CDN иногда отдаёт 403 без User-Agent, поэтому подставляем дефолтный.
        headers = {"User-Agent": "Mozilla/5.0 Aiviso/1.0"}
        # Берём до 4 фото — столько слотов в UI; даём небольшой запас на случай неудачных скачиваний.
        async with httpx.AsyncClient(timeout=httpx.Timeout(30.0), follow_redirects=True, headers=headers) as client:
            for i, url in enumerate((card.photos or [])[:6]):
                if downloaded >= 4:
                    break
                try:
                    r = await client.get(url)
                    if r.status_code != 200:
                        print(f"[mp-import] skip photo {i} ({r.status_code}) for project {project.id}: {url}")
                        continue
                    ext = "jpg"
                    ct = (r.headers.get("Content-Type") or "").split(";")[0].strip()
                    if ct == "image/png": ext = "png"
                    elif ct == "image/webp": ext = "webp"
                    fname = f"{uuid.uuid4()}.{ext}"
                    fpath = os.path.join(project_dir, fname)
                    async with aiofiles.open(fpath, "wb") as f:
                        await f.write(r.content)
                    upload = Upload(project_id=project.id, file_path=fpath, original_filename=f"wb_{card.nm_id}_{i}.{ext}")
                    db.add(upload)
                    downloaded += 1
                except Exception as ex:
                    print(f"[mp-import] photo {i} failed for project {project.id}: {ex}")
                    continue
        await db.commit()

    # Связь imported_card → project
    card.project_id = project.id
    await db.commit()

    return {
        "project_id": project.id,
        "downloaded_photos": downloaded,
        "card_id": card.id,
        "category": category,
    }


# ── Публикация фото обратно в маркетплейс ────────────────────────────────────

class PublishPhotosRequest(BaseModel):
    """
    Способы публикации:
      A) Старый: generation_ids=[..] — заменить ВСЕ фото на сгенерированные.
      B) Новый позиционный (preferred): photos=[список итоговых URL в нужном порядке]
         — что отправить, то и пойдёт в маркетплейс целиком. Удобно для UI «выбрать позицию замены».
    """
    generation_ids: Optional[list[int]] = None
    photos: Optional[list[str]] = None


@router.post("/{account_id}/cards/{card_id}/publish-photos")
async def publish_photos(
    account_id: int,
    card_id: int,
    data: PublishPhotosRequest,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """
    Публикует фото в карточку маркетплейса.

    Если передан `photos` — используется как готовый итоговый список URL (порядок сохраняется).
    Иначе берутся PNG из `generation_ids` (legacy: заменяет ВСЕ фото на сгенерированные).
    """
    acc = await _get_account_or_404(account_id, user.id, db)

    res = await db.execute(
        select(ImportedCard).where(
            ImportedCard.id == card_id,
            ImportedCard.account_id == acc.id,
            ImportedCard.user_id == user.id,
        )
    )
    card = res.scalar_one_or_none()
    if not card or not card.nm_id:
        raise HTTPException(404, "Карточка не найдена или у неё нет mp-id")

    api_url = "https://api.aiviso.ru"
    urls: list[str] = []

    if data.photos:
        # Новый режим: фронт уже собрал итоговый список URL (с правильным порядком после выбора позиции)
        urls = [u.strip() for u in data.photos if u and u.strip()]
    elif data.generation_ids:
        # Legacy: заменяем все фото на сгенерированные
        res = await db.execute(
            select(Generation).where(
                Generation.id.in_(data.generation_ids),
                Generation.project_id == card.project_id,
                Generation.status.in_(("done", "needs_review")),
            )
        )
        gens = res.scalars().all()
        if not gens:
            raise HTTPException(400, "Генерации не найдены или ещё не готовы")
        for g in gens:
            for path in (g.result_paths or []):
                rel = path.split("/uploads/")[-1].replace("\\", "/").lstrip("/")
                urls.append(f"{api_url}/media/{rel}")
    else:
        raise HTTPException(400, "Нужно передать либо `photos` (итоговый список URL), либо `generation_ids`")

    if not urls:
        raise HTTPException(400, "Пустой итоговый список фото")

    if acc.provider == "wb":
        try:
            result = await wb.upload_media_by_urls(acc.api_key, nm_id=int(card.nm_id), photo_urls=urls)
        except wb.WBError as e:
            raise HTTPException(400, f"WB: {e.detail}")
        return {"published": len(urls), "provider": "wb", "photos": urls, "response": result}
    elif acc.provider == "ozon":
        try:
            result = await ozon.import_pictures(
                acc.client_id, acc.api_key,
                product_id=int(card.nm_id), images=urls,
            )
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: {e.detail}")
        return {"published": len(urls), "provider": "ozon", "photos": urls, "response": result}
    raise HTTPException(501, f"publish для {acc.provider} ещё не реализован")


class CloneCardRequest(BaseModel):
    """Создание НОВОЙ карточки (новый артикул) на основе импортированной.

    Два режима:
      - same-MP (target_account_id отсутствует или совпадает): копия в том же маркетплейсе
      - cross-MP (target_account_id указывает на аккаунт ДРУГОГО провайдера): миграция
        WB→Ozon или Ozon→WB. Требует существующий CategoryMapping.

    photos может быть пустым — тогда берём оригинальные фото исходной карточки.
    Это нужно для сценария «перенести как есть, без генерации новых фото».
    """
    photos: Optional[list[str]] = None               # необязательно. Если не передано — фото из оригинала.
    new_vendor_code: Optional[str] = None            # WB: артикул селлера; если не передан — auto-suffix
    new_offer_id: Optional[str] = None               # Ozon: offer_id; если не передан — auto-suffix
    new_title: Optional[str] = None                  # опционально — переписать название
    new_description: Optional[str] = None            # опционально — переписать описание
    target_account_id: Optional[int] = None          # для cross-MP миграции — куда переносим


@router.post("/{account_id}/cards/{card_id}/clone")
async def clone_card(
    account_id: int,
    card_id: int,
    data: CloneCardRequest,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """
    Клонирует импортированную карточку под новым артикулом — берёт raw_data,
    подменяет фото (и опционально title/description), отправляет в маркетплейс
    как новый товар.

    Это упрощённый flow: используем ВСЕ существующие атрибуты/характеристики
    исходной карточки, чтобы не запрашивать у пользователя обязательные поля
    категории. Selлер потом может вручную доработать карточку в личном кабинете.
    """
    import time
    acc = await _get_account_or_404(account_id, user.id, db)

    res = await db.execute(
        select(ImportedCard).where(
            ImportedCard.id == card_id,
            ImportedCard.account_id == acc.id,
            ImportedCard.user_id == user.id,
        )
    )
    card = res.scalar_one_or_none()
    if not card or not card.raw_data:
        raise HTTPException(404, "Карточка не найдена или у неё нет raw_data для клонирования")

    photos = [u.strip() for u in (data.photos or []) if u and u.strip()]
    raw = card.raw_data
    # Если новых фото не передано — берём оригинальные с CDN исходного маркетплейса.
    # Это сценарий «перенести карточку как есть, без AI-генерации».
    if not photos:
        if acc.provider == "wb":
            photos = wb.extract_photos(raw)
        elif acc.provider == "ozon":
            photos = ozon.extract_photos(raw)
    if not photos:
        raise HTTPException(400, "Нет фото — ни в оригинале, ни в запросе")

    # ── CROSS-MP миграция: source.provider != target.provider ─────────────
    if data.target_account_id and data.target_account_id != acc.id:
        target_acc = await _get_account_or_404(data.target_account_id, user.id, db)
        if target_acc.provider != acc.provider:
            # Ищем маппинг категорий
            if acc.provider == "wb" and target_acc.provider == "ozon":
                wb_subject_id = int(raw.get("subjectID") or 0)
                mres = await db.execute(select(CategoryMapping).where(
                    CategoryMapping.user_id == user.id,
                    CategoryMapping.wb_subject_id == wb_subject_id,
                ))
                mapping = mres.scalar_one_or_none()
                if not mapping:
                    raise HTTPException(400, f"Нет соответствия для WB-категории «{raw.get('subjectName') or wb_subject_id}». "
                                              f"Заведи синхронизацию WB→Ozon на странице «Синхронизация WB↔Ozon».")

                # Конвертация WB→Ozon: см→мм, кг→г
                dims = raw.get("dimensions") or {}
                length_cm = float(dims.get("length") or 0) or 10.0
                width_cm  = float(dims.get("width") or 0)  or 10.0
                height_cm = float(dims.get("height") or 0) or 10.0
                weight_kg = float(dims.get("weightBrutto") or 0) or 0.5

                import time
                suffix = str(int(time.time()))[-6:]
                new_offer = (data.new_offer_id or "").strip() or f"WB{wb_subject_id}-{suffix}"
                name = (data.new_title or raw.get("title") or "").strip() or "Без названия"

                item = {
                    "offer_id":               new_offer[:50],
                    "name":                   name[:255],
                    "description_category_id": int(mapping.ozon_category_id),
                    "type_id":                int(mapping.ozon_type_id),
                    "attributes":             [],   # пусто — пользователь дозаполнит в кабинете Ozon
                    "complex_attributes":     [],
                    "images":                 photos,
                    "primary_image":          photos[0],
                    "color_image":            "",
                    "price":                  "1000",
                    "old_price":              "0",
                    "vat":                    "0",
                    "currency_code":          "RUB",
                    "weight":                 max(int(round(weight_kg * 1000)), 100),
                    "weight_unit":            "g",
                    "depth":                  max(int(round(length_cm * 10)), 10),
                    "width":                  max(int(round(width_cm  * 10)), 10),
                    "height":                 max(int(round(height_cm * 10)), 10),
                    "dimension_unit":         "mm",
                }
                if data.new_description:
                    item["attributes"].append({"id": 4191, "complex_id": 0, "values": [{"value": data.new_description[:5000]}]})
                elif raw.get("description"):
                    item["attributes"].append({"id": 4191, "complex_id": 0, "values": [{"value": str(raw.get("description"))[:5000]}]})

                try:
                    res = await ozon.import_products(target_acc.client_id, target_acc.api_key, items=[item])
                except ozon.OzonError as e:
                    raise HTTPException(400, f"Ozon: {e.detail}")

                task_id = (res.get("result") or {}).get("task_id") or res.get("task_id")
                return {
                    "provider": "ozon",
                    "source_provider": "wb",
                    "status": "queued",
                    "offer_id": new_offer,
                    "task_id": task_id,
                    "mapping_used": {
                        "wb_subject": mapping.wb_subject_name,
                        "ozon_category": mapping.ozon_category_name,
                        "ozon_type": mapping.ozon_type_name,
                    },
                    "next_step": (
                        f"Карточка перенесена WB→Ozon в категорию «{mapping.ozon_category_name} / {mapping.ozon_type_name}». "
                        f"Через 1–5 минут открой Ozon-кабинет и заполни обязательные атрибуты "
                        f"(цвет/материал/возрастная группа и т.п.) — Ozon показывает их в карточке-черновике."
                    ),
                }

            elif acc.provider == "ozon" and target_acc.provider == "wb":
                ozon_cat_id  = int(raw.get("description_category_id") or 0)
                ozon_type_id = int(raw.get("type_id") or 0)
                mres = await db.execute(select(CategoryMapping).where(
                    CategoryMapping.user_id == user.id,
                    CategoryMapping.ozon_category_id == ozon_cat_id,
                    CategoryMapping.ozon_type_id == ozon_type_id,
                ))
                mapping = mres.scalar_one_or_none()
                if not mapping:
                    raise HTTPException(400, f"Нет соответствия для Ozon-категории {ozon_cat_id}/{ozon_type_id}. "
                                              f"Заведи синхронизацию Ozon→WB на странице «Синхронизация WB↔Ozon».")

                # Получаем размеры из get_product_attributes (мм / г)
                try:
                    full = await ozon.get_product_attributes(
                        acc.client_id, acc.api_key, product_id=int(card.mp_card_id)
                    )
                except ozon.OzonError as e:
                    raise HTTPException(400, f"Ozon: не удалось получить детали — {e.detail}")

                length_mm = int(full.get("depth")  or 100)
                width_mm  = int(full.get("width")  or 100)
                height_mm = int(full.get("height") or 100)
                weight_g  = int(full.get("weight") or 1000)

                import time
                suffix = str(int(time.time()))[-6:]
                new_vc = (data.new_vendor_code or "").strip() or f"OZ{ozon_cat_id}-{suffix}"
                title = (data.new_title or raw.get("name") or "").strip() or "Без названия"
                desc  = (data.new_description or "").strip()[:5000]

                body = [{
                    "subjectID": int(mapping.wb_subject_id),
                    "variants": [{
                        "vendorCode":  new_vc[:75],
                        "title":       title[:60],
                        "description": desc,
                        "brand":       "Без бренда",
                        "dimensions":  {
                            # WB: см и кг
                            "length":       round(length_mm / 10, 1),
                            "width":        round(width_mm  / 10, 1),
                            "height":       round(height_mm / 10, 1),
                            "weightBrutto": round(weight_g / 1000, 2),
                        },
                        "characteristics": [],   # пусто — заполняется в кабинете WB вручную
                        "sizes":       [{"techSize": "0", "wbSize": "", "skus": [], "price": 1000}],
                    }]
                }]

                try:
                    await wb.create_cards(target_acc.api_key, items=body)
                except wb.WBError as e:
                    raise HTTPException(400, f"WB: {e.detail}")

                return {
                    "provider": "wb",
                    "source_provider": "ozon",
                    "status": "queued",
                    "vendor_code": new_vc,
                    "subject_id": int(mapping.wb_subject_id),
                    "mapping_used": {
                        "ozon_category": mapping.ozon_category_name,
                        "ozon_type": mapping.ozon_type_name,
                        "wb_subject": mapping.wb_subject_name,
                    },
                    "next_step": (
                        f"Карточка перенесена Ozon→WB в категорию «{mapping.wb_subject_name}». "
                        f"Через 5–30 минут открой WB-кабинет, заполни характеристики "
                        f"(пол/возраст/состав/цвет — список зависит от категории) и подтверди."
                    ),
                    "photos_pending": photos,
                }

            else:
                raise HTTPException(400, f"Cross-MP миграция {acc.provider}→{target_acc.provider} не поддерживается")

    # ── SAME-MP клонирование (логика без изменений) ─────────────────────────

    if acc.provider == "wb":
        # Собираем WB body: subjectID + variants[{vendorCode, title, description, brand, dimensions, characteristics, sizes}]
        suffix = str(int(time.time()))[-6:]
        new_vc = (data.new_vendor_code or "").strip() or f"{raw.get('vendorCode', 'CARD')}-{suffix}"
        title = (data.new_title or raw.get("title") or "").strip()
        desc  = (data.new_description or raw.get("description") or "").strip()
        brand = raw.get("brand") or "Без бренда"

        # Размеры: оставляем структуру, но без skus (WB сгенерит) и подставляем заглушку цены если нет
        sizes = []
        for sz in (raw.get("sizes") or [{}]):
            sizes.append({
                "techSize": sz.get("techSize", "0"),
                "wbSize":   sz.get("wbSize", ""),
                "skus":     [],  # пустые → WB сгенерит штрихкоды
                "price":    int(sz.get("price") or 0) or 1000,  # минимум 1000 чтобы прошёл валидатор
            })

        # Характеристики: фильтруем "id+value", дропаем пустые
        chars = []
        for c in (raw.get("characteristics") or []):
            cid = c.get("id")
            val = c.get("value")
            if cid is None or val in (None, "", []):
                continue
            chars.append({"id": int(cid), "value": val})

        body = [{
            "subjectID": int(raw.get("subjectID")),
            "variants": [{
                "vendorCode":  new_vc[:75],
                "title":       title[:60],
                "description": desc[:5000],
                "brand":       brand,
                "dimensions":  raw.get("dimensions") or {},
                "characteristics": chars,
                "sizes":       sizes,
                # photos не входит в /cards/upload — фото грузятся ОТДЕЛЬНО после создания
                # через /v3/media/save или /v3/media/file. Делаем это вторым шагом.
            }]
        }]

        try:
            await wb.create_cards(acc.api_key, items=body)
        except wb.WBError as e:
            raise HTTPException(400, f"WB: ошибка создания — {e.detail}")

        # WB не возвращает nmID синхронно — карточка создаётся в фоне.
        # Возвращаем артикул + инструкцию: фото надо будет залить отдельно когда WB
        # опубликует карточку и выдаст nmID. Это можно сделать на следующей итерации.
        return {
            "provider": "wb",
            "status": "queued",
            "vendor_code": new_vc,
            "subject_id": int(raw.get("subjectID")),
            "next_step": (
                f"Карточка с артикулом {new_vc} отправлена в WB. Через 5-30 минут она появится "
                f"в личном кабинете WB, получит nmID, после чего можно залить фото через "
                f"кнопку «Заменить фото»."
            ),
            "photos_pending": photos,  # сохраняем для последующего шага
        }

    elif acc.provider == "ozon":
        suffix = str(int(time.time()))[-6:]
        new_offer = (data.new_offer_id or "").strip() or f"{raw.get('offer_id', 'OFFER')}-{suffix}"
        name = (data.new_title or raw.get("name") or "").strip() or "Без названия"

        # Получаем полный набор атрибутов оригинала чтобы скопировать обязательные поля
        try:
            full = await ozon.get_product_attributes(
                acc.client_id, acc.api_key, product_id=int(card.mp_card_id)
            )
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: не удалось получить атрибуты оригинала — {e.detail}")

        # Собираем item для /v3/product/import
        item = {
            "offer_id":               new_offer[:50],
            "name":                   name[:255],
            "description_category_id": int(raw.get("description_category_id") or full.get("description_category_id") or 0),
            "type_id":                int(raw.get("type_id") or full.get("type_id") or 0),
            "attributes":             full.get("attributes") or [],
            "complex_attributes":     full.get("complex_attributes") or [],
            "images":                 photos,
            "primary_image":          photos[0] if photos else "",
            "color_image":            "",
            "price":                  str(raw.get("price") or full.get("price") or "1000"),
            "old_price":              str(raw.get("old_price") or full.get("old_price") or "0"),
            "vat":                    str(raw.get("vat") or full.get("vat") or "0"),
            "currency_code":          raw.get("currency_code") or "RUB",
            "weight":                 int(full.get("weight") or 0) or 1000,  # граммы
            "weight_unit":            "g",
            "depth":                  int(full.get("depth") or 0) or 100,    # мм
            "width":                  int(full.get("width") or 0) or 100,
            "height":                 int(full.get("height") or 0) or 100,
            "dimension_unit":         "mm",
        }
        if data.new_description:
            # Описание у Ozon — это атрибут с id=4191 (description). Подменим если можем.
            for a in item["attributes"]:
                if a.get("id") == 4191 or a.get("complex_id") == 4191:
                    a["values"] = [{"value": data.new_description[:5000]}]
                    break
            else:
                item["attributes"].append({"id": 4191, "complex_id": 0, "values": [{"value": data.new_description[:5000]}]})

        try:
            res = await ozon.import_products(acc.client_id, acc.api_key, items=[item])
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: ошибка создания — {e.detail}")

        task_id = (res.get("result") or {}).get("task_id") or res.get("task_id")
        return {
            "provider": "ozon",
            "status": "queued",
            "offer_id": new_offer,
            "task_id": task_id,
            "next_step": (
                f"Карточка с offer_id {new_offer} отправлена в Ozon (task_id={task_id}). "
                f"Через 1-5 минут можно проверить статус: «Синхронизировать карточки» — "
                f"новый product_id появится."
            ),
        }

    raise HTTPException(501, f"clone для {acc.provider} ещё не реализован")


@router.get("/{account_id}/clone-status/{task_id}")
async def get_clone_status(
    account_id: int,
    task_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Статус клонирования — пока только для Ozon (у WB задачи общие, проверяются через error/list)."""
    acc = await _get_account_or_404(account_id, user.id, db)
    if acc.provider == "ozon":
        try:
            res = await ozon.get_import_info(acc.client_id, acc.api_key, task_id=task_id)
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: {e.detail}")
        return {"provider": "ozon", "task": res.get("result") or res}
    if acc.provider == "wb":
        try:
            errors = await wb.get_upload_errors(acc.api_key)
        except wb.WBError as e:
            raise HTTPException(400, f"WB: {e.detail}")
        return {"provider": "wb", "errors": errors}
    raise HTTPException(501, f"clone-status для {acc.provider} не реализован")


# ─── Cross-MP миграция: маппинг категорий ────────────────────────────────────

class CategoryMappingDTO(BaseModel):
    id: int
    wb_subject_id: int
    wb_subject_name: str
    ozon_category_id: int
    ozon_category_name: str
    ozon_type_id: int
    ozon_type_name: str
    note: Optional[str] = None


class CategoryMappingCreate(BaseModel):
    wb_subject_id: int
    wb_subject_name: str
    ozon_category_id: int
    ozon_category_name: str
    ozon_type_id: int
    ozon_type_name: str
    note: Optional[str] = None


@router.get("/category-mappings", response_model=list[CategoryMappingDTO])
async def list_category_mappings(
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Все ручные маппинги WB↔Ozon-категорий, заведённые этим пользователем."""
    res = await db.execute(
        select(CategoryMapping).where(CategoryMapping.user_id == user.id)
        .order_by(CategoryMapping.created_at.desc())
    )
    rows = res.scalars().all()
    return [CategoryMappingDTO(
        id=r.id, wb_subject_id=r.wb_subject_id, wb_subject_name=r.wb_subject_name,
        ozon_category_id=r.ozon_category_id, ozon_category_name=r.ozon_category_name,
        ozon_type_id=r.ozon_type_id, ozon_type_name=r.ozon_type_name, note=r.note,
    ) for r in rows]


@router.post("/category-mappings", response_model=CategoryMappingDTO, status_code=201)
async def create_category_mapping(
    data: CategoryMappingCreate,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Создаёт маппинг или обновляет существующий по уникальному ключу (user, wb_subject_id, ozon_category_id, ozon_type_id)."""
    # Проверяем дубликаты — один и тот же WB subject у одного пользователя может быть замаплен только в одну Ozon-категорию.
    res = await db.execute(select(CategoryMapping).where(
        CategoryMapping.user_id == user.id,
        CategoryMapping.wb_subject_id == data.wb_subject_id,
    ))
    existing = res.scalar_one_or_none()
    if existing:
        existing.ozon_category_id   = data.ozon_category_id
        existing.ozon_category_name = data.ozon_category_name
        existing.ozon_type_id       = data.ozon_type_id
        existing.ozon_type_name     = data.ozon_type_name
        existing.wb_subject_name    = data.wb_subject_name
        existing.note               = data.note
        await db.commit()
        await db.refresh(existing)
        m = existing
    else:
        m = CategoryMapping(user_id=user.id, **data.dict())
        db.add(m)
        await db.commit()
        await db.refresh(m)
    return CategoryMappingDTO(
        id=m.id, wb_subject_id=m.wb_subject_id, wb_subject_name=m.wb_subject_name,
        ozon_category_id=m.ozon_category_id, ozon_category_name=m.ozon_category_name,
        ozon_type_id=m.ozon_type_id, ozon_type_name=m.ozon_type_name, note=m.note,
    )


@router.delete("/category-mappings/{mapping_id}", status_code=204)
async def delete_category_mapping(
    mapping_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    res = await db.execute(select(CategoryMapping).where(
        CategoryMapping.id == mapping_id,
        CategoryMapping.user_id == user.id,
    ))
    m = res.scalar_one_or_none()
    if not m:
        raise HTTPException(404, "Маппинг не найден")
    await db.delete(m)
    await db.commit()


@router.get("/{account_id}/categories/wb-subjects")
async def list_wb_subjects_for_mapping(
    account_id: int,
    parent_id: Optional[int] = None,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Список WB subjects (листьев) — для UI выбора в маппинге.
    Если parent_id передан — фильтрует по родительской категории.
    """
    acc = await _get_account_or_404(account_id, user.id, db)
    if acc.provider != "wb":
        raise HTTPException(400, "Этот аккаунт не WB")
    try:
        if parent_id is not None:
            subs = await wb.list_subjects(acc.api_key, parent_id=parent_id, limit=1000)
        else:
            # Берём всё дерево без фильтра — WB API сам ограничивает по limit/offset
            subs = await wb.list_subjects(acc.api_key, limit=1000, offset=0)
    except wb.WBError as e:
        raise HTTPException(400, f"WB: {e.detail}")
    return [{"subject_id": s.get("subjectID") or s.get("subject_id"),
             "name":       s.get("subjectName") or s.get("name"),
             "parent_id":  s.get("parentID") or s.get("parent_id")} for s in (subs or [])]


@router.get("/{account_id}/categories/used")
async def list_used_categories(
    account_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Категории которые УЖЕ задействованы в импортированных карточках этого аккаунта.
    Это короткий список — обычно у селлера 5–20 категорий, в которых он реально продаёт.
    Используется на странице маппингов: сначала предлагаем выбрать из них, потом fallback —
    полный каталог всех категорий маркетплейса.
    """
    acc = await _get_account_or_404(account_id, user.id, db)
    res = await db.execute(
        select(ImportedCard).where(
            ImportedCard.account_id == acc.id,
            ImportedCard.user_id == user.id,
        )
    )
    cards = res.scalars().all()

    if acc.provider == "wb":
        seen = {}
        for c in cards:
            raw = c.raw_data or {}
            sid = raw.get("subjectID")
            sname = raw.get("subjectName") or c.category or ""
            if sid is None:
                continue
            try:
                sid = int(sid)
            except (ValueError, TypeError):
                continue
            if sid not in seen:
                seen[sid] = {"subject_id": sid, "name": sname, "count": 0}
            seen[sid]["count"] += 1
        return sorted(seen.values(), key=lambda x: -x["count"])

    elif acc.provider == "ozon":
        # Соберём уникальные пары (description_category_id, type_id) и
        # резолвим human-readable имена через mp_categories
        seen: dict[tuple[int, int], dict] = {}
        for c in cards:
            raw = c.raw_data or {}
            cid = raw.get("description_category_id")
            tid = raw.get("type_id")
            if cid is None or tid is None:
                continue
            try:
                cid = int(cid); tid = int(tid)
            except (ValueError, TypeError):
                continue
            key = (cid, tid)
            if key not in seen:
                seen[key] = {
                    "category_id": cid, "type_id": tid,
                    "category_name": "", "type_name": c.category or "",
                    "count": 0,
                }
            seen[key]["count"] += 1

        # Резолв имён через сохранённый справочник (mp_categories)
        if seen:
            cat_ids = sorted({k[0] for k in seen.keys()})
            type_ids = sorted({k[1] for k in seen.keys()})
            ids_str = [str(x) for x in cat_ids + type_ids]
            id_to_name = await mp_cat.fetch_category_names(db, provider="ozon", external_ids=ids_str)
            for (cid, tid), val in seen.items():
                val["category_name"] = id_to_name.get(str(cid)) or f"id {cid}"
                tn = id_to_name.get(str(tid))
                if tn:
                    val["type_name"] = tn
        return sorted(seen.values(), key=lambda x: -x["count"])

    return []


@router.get("/{account_id}/categories/wb-parents")
async def list_wb_parents(
    account_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Родительские категории WB — для UI drill-down."""
    acc = await _get_account_or_404(account_id, user.id, db)
    if acc.provider != "wb":
        raise HTTPException(400, "Этот аккаунт не WB")
    try:
        parents = await wb.list_parent_categories(acc.api_key)
    except wb.WBError as e:
        raise HTTPException(400, f"WB: {e.detail}")
    return [{"id": p.get("id"), "name": p.get("name")} for p in (parents or [])]


@router.get("/{account_id}/categories/ozon-tree-flat")
async def list_ozon_tree_flat(
    account_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Плоский список всех категорий+типов Ozon — для UI выбора в маппинге.
    Узлы: type_id != null — это leaf (тип товара, нужен для создания).
    """
    acc = await _get_account_or_404(account_id, user.id, db)
    if acc.provider != "ozon":
        raise HTTPException(400, "Этот аккаунт не Ozon")
    try:
        tree = await ozon.get_category_tree(acc.client_id, acc.api_key)
    except ozon.OzonError as e:
        raise HTTPException(400, f"Ozon: {e.detail}")
    flat = ozon.flatten_ozon_tree(tree)
    # Возвращаем только leaf-узлы (с type_id) — потому что только в них можно создавать товары
    leaves = [n for n in flat if n.get("is_leaf") and n.get("type_id")]
    # Для каждого leaf нужно ещё знать parent (название категории-родителя для UX)
    by_id = {n["external_id"]: n for n in flat}
    out = []
    for leaf in leaves:
        # У leaf type-узла parent — это description_category_id
        parent_id = leaf.get("parent_id")
        parent_node = by_id.get(parent_id)
        out.append({
            "type_id":            int(leaf["external_id"]),
            "type_name":          leaf["name"],
            "category_id":        int(parent_id) if parent_id else None,
            "category_name":      parent_node["name"] if parent_node else "",
        })
    return out


@router.get("/{account_id}/cards/{card_id}")
async def get_card_one(
    account_id: int,
    card_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Деталь одной импортированной карточки — нужна для страницы публикации (галерея текущих фото)."""
    acc = await _get_account_or_404(account_id, user.id, db)
    res = await db.execute(
        select(ImportedCard).where(
            ImportedCard.id == card_id,
            ImportedCard.account_id == acc.id,
            ImportedCard.user_id == user.id,
        )
    )
    card = res.scalar_one_or_none()
    if not card:
        raise HTTPException(404, "Карточка не найдена")
    return {
        "id": card.id,
        "mp_card_id": card.mp_card_id,
        "nm_id": card.nm_id,
        "name": card.name,
        "category": card.category,
        "photos": card.photos or [],
        "project_id": card.project_id,
    }


# ── Категории и обязательные атрибуты ────────────────────────────────────────

@router.post("/{account_id}/categories/sync")
async def sync_categories(
    account_id: int,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Тянет дерево категорий с маркетплейса и кеширует в mp_categories."""
    acc = await _get_account_or_404(account_id, user.id, db)
    if acc.provider == "wb":
        try:
            parents = await wb.list_parent_categories(acc.api_key)
        except wb.WBError as e:
            raise HTTPException(400, f"WB: {e.detail}")
        items = [mp_cat.normalize_wb_parent(p) for p in parents]
        # Тянем subject'ы для ВСЕХ родительских категорий (их обычно ~80, ~60-80 запросов)
        for p in parents:
            pid = int(p.get("id") or 0)
            if not pid:
                continue
            try:
                subjects = await wb.list_subjects(acc.api_key, parent_id=pid, limit=1000)
                items.extend(mp_cat.normalize_wb_subject(s) for s in subjects)
            except wb.WBError:
                continue
        await mp_cat.upsert_categories(db, provider="wb", items=items)
        return {"saved": len(items), "provider": "wb"}

    if acc.provider == "ozon":
        try:
            tree = await ozon.get_category_tree(acc.client_id, acc.api_key)
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: {e.detail}")
        flat = ozon.flatten_ozon_tree(tree)
        await mp_cat.upsert_categories(db, provider="ozon", items=flat)
        return {"saved": len(flat), "provider": "ozon"}

    raise HTTPException(501, f"sync для {acc.provider} не реализован")


@router.get("/{account_id}/categories")
async def list_cached_categories(
    account_id: int,
    parent_id: Optional[str] = None,
    leaf_only: bool = False,
    q: Optional[str] = None,
    limit: int = 500,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Возвращает закешированные категории провайдера (для UI выбора). Поиск по q."""
    acc = await _get_account_or_404(account_id, user.id, db)
    where = ["provider = :p"]
    params: dict[str, Any] = {"p": acc.provider, "lim": int(limit)}
    if parent_id is not None:
        where.append("parent_id = :pid"); params["pid"] = str(parent_id)
    if leaf_only:
        where.append("is_leaf = true")
    if q:
        where.append("name ILIKE :q"); params["q"] = f"%{q}%"
    sql = (
        "SELECT external_id, parent_id, name, is_leaf, type_id "
        "FROM mp_categories WHERE " + " AND ".join(where) +
        " ORDER BY is_leaf DESC, name LIMIT :lim"
    )
    rows = await db.execute(sql_text(sql), params)
    return [dict(r._mapping) for r in rows]


@router.post("/{account_id}/categories/{category_external_id}/attrs/sync")
async def sync_category_attrs(
    account_id: int,
    category_external_id: str,
    type_id: Optional[str] = None,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Тянет с маркетплейса характеристики категории (или type для Ozon) и кеширует."""
    acc = await _get_account_or_404(account_id, user.id, db)
    if acc.provider == "wb":
        try:
            charcs = await wb.get_subject_attrs(acc.api_key, subject_id=int(category_external_id))
        except wb.WBError as e:
            raise HTTPException(400, f"WB: {e.detail}")
        items = [mp_cat.normalize_wb_charc(c) for c in charcs]
        saved = await mp_cat.upsert_attrs(db, provider="wb", category_id=category_external_id, type_id=None, items=items)
        return {"saved": saved, "required": sum(1 for x in items if x["is_required"])}
    if acc.provider == "ozon":
        if not type_id:
            raise HTTPException(400, "Для Ozon нужен type_id (берётся из листа дерева категорий)")
        try:
            attrs = await ozon.get_category_attributes(
                acc.client_id, acc.api_key,
                description_category_id=int(category_external_id), type_id=int(type_id),
            )
        except ozon.OzonError as e:
            raise HTTPException(400, f"Ozon: {e.detail}")
        items = [mp_cat.normalize_ozon_attr(a) for a in attrs]
        saved = await mp_cat.upsert_attrs(db, provider="ozon", category_id=category_external_id, type_id=type_id, items=items)
        return {"saved": saved, "required": sum(1 for x in items if x["is_required"])}
    raise HTTPException(501, f"sync attrs для {acc.provider} не реализован")


@router.get("/{account_id}/categories/{category_external_id}/attrs/required")
async def required_attrs(
    account_id: int,
    category_external_id: str,
    type_id: Optional[str] = None,
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Только обязательные атрибуты. Если нет в кеше — пытается синхронизировать сначала."""
    acc = await _get_account_or_404(account_id, user.id, db)
    items = await mp_cat.get_required_attrs(db, provider=acc.provider, category_id=category_external_id, type_id=type_id)
    if not items:
        # ленивая загрузка
        try:
            await sync_category_attrs(account_id, category_external_id, type_id, user, db)  # type: ignore
            items = await mp_cat.get_required_attrs(db, provider=acc.provider, category_id=category_external_id, type_id=type_id)
        except HTTPException:
            pass
    return items


@router.get("/_static-mapping")
async def get_static_mapping(_: User = Depends(get_current_user)):
    """Карта наших 5 категорий → subjectID(WB) и type_id(Ozon)."""
    return mp_cat.STATIC_MAPPING


# ── helpers ───────────────────────────────────────────────────────────────────

async def _get_account_or_404(account_id: int, user_id: int, db: AsyncSession) -> MarketplaceAccount:
    res = await db.execute(
        select(MarketplaceAccount).where(
            MarketplaceAccount.id == account_id,
            MarketplaceAccount.user_id == user_id,
        )
    )
    acc = res.scalar_one_or_none()
    if not acc:
        raise HTTPException(404, "Аккаунт не найден")
    return acc


def _guess_category(wb_subject: str) -> str:
    """Маппит название категории/subject от маркетплейса в одну из 5 наших:
    clothing | furniture | cosmetics | food | electronics.

    ВАЖНО: дефолт — "furniture" (а не "clothing"), потому что большинство
    нейтральных кейсов на WB/Ozon — это товары для дома, кухни, аксессуары,
    handmade, дерево, а не одежда. Раньше всё неузнанное падало в clothing,
    отчего "Держатель для туалетной бумаги" получал ярлык "Одежда".
    """
    s = (wb_subject or "").lower()
    # Одежда / обувь / текстиль (одежда)
    if any(k in s for k in (
        "плать", "блуз", "юбк", "брюк", "джинс", "шорт", "рубаш", "футболк",
        "куртк", "пальто", "пуховик", "свитер", "кардиган", "пиджак", "костюм",
        "майк", "топ", "толстовк", "халат", "комбинезон", "сарафан", "лосин",
        "обувь", "ботинк", "кроссов", "сапог", "туфл", "босонож", "сандал",
        "трусы", "белье", "бельё", "колготк", "носк",
        "ремень", "сумк", "рюкзак", "кошел", "перчатк", "шарф", "шапк",
        "очки", "часы наручн",
    )):
        return "clothing"
    # Мебель и товары для дома (включая handmade-аксессуары)
    if any(k in s for k in (
        "стол", "стул", "кресло", "шкаф", "диван", "комод", "полк", "кроват",
        "тумб", "стеллаж", "вешалк", "зеркал", "коврик", "ковёр", "ковер",
        "лампа", "светильник", "люстр", "торшер",
        "держател", "подстав", "органайзер", "корзин", "ведро", "таз",
        "кухн", "посуд", "тарелк", "кружк", "чашк", "стакан", "бокал",
        "доск", "разделочн", "ложк", "вилк", "нож кухон", "нож сто",
        "горшок", "кашпо", "ваз",
        "крючок", "вешалка", "карниз", "шторы", "штор",
        "дерев", "массив", "столяр", "ручная работа", "хендмейд",
        "интерьер", "декор для дома", "товары для дома", "хозтовар",
    )):
        return "furniture"
    # Косметика / уход
    if any(k in s for k in (
        "крем", "шампунь", "масло для", "духи", "парфюм", "сыворот", "тоник",
        "флакон", "помад", "тушь", "тени", "пудр", "румян", "блеск",
        "лак ", "маск", "бальзам", "лосьон", "гель", "пенка", "скраб",
        "мыло", "уход",
    )):
        return "cosmetics"
    # Еда / FMCG
    if any(k in s for k in (
        "конфет", "печень", "напит", "продукт", "питан", "снэк", "снек",
        "шокол", "халва", "мёд", "мед", "чай", "кофе", "сахар", "сол",
        "приправ", "специ", "соус", "масло раст", "масло олив",
        "крупа", "мука", "макарон", "хлеб", "выпечк",
    )):
        return "food"
    # Техника / гаджеты / инструменты
    if any(k in s for k in (
        "телефон", "смартф", "ноутбук", "планшет", "наушни", "колонк",
        "монитор", "телевизор", "смарт-час", "смартчас", "смарт час",
        "клавиатур", "мышь", "роутер", "флешк",
        "зарядн", "кабель", "адаптер", "блок питан",
        "пылесос", "утюг", "фен", "плойк", "блендер", "миксер", "мульти",
        "электроинструмент", "дрель", "шуруповёрт",
    )):
        return "electronics"
    # Дефолт — "furniture" (товары для дома) вместо устаревшего clothing.
    # Пользователь всегда может поменять категорию вручную в карточке проекта.
    return "furniture"
