from datetime import datetime, timezone
from typing import Optional
from sqlalchemy import String, Integer, BigInteger, DateTime, ForeignKey, JSON, Text
from sqlalchemy.orm import Mapped, mapped_column
from app.database import Base


class MarketplaceAccount(Base):
    """Подключённый аккаунт маркетплейса (WB / Ozon / YM)."""
    __tablename__ = "marketplace_accounts"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    provider: Mapped[str] = mapped_column(String(16), nullable=False)  # "wb" | "ozon" | "ym"
    name: Mapped[str] = mapped_column(String(255), nullable=False)  # читаемое имя ("Магазин столярка")
    api_key: Mapped[str] = mapped_column(Text, nullable=False)  # JWT (WB) | Api-Key (Ozon/YM)
    client_id: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)  # Ozon Client-Id
    business_id: Mapped[Optional[int]] = mapped_column(BigInteger, nullable=True)  # YM businessId
    status: Mapped[str] = mapped_column(String(16), default="active", nullable=False)
    last_sync_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
    )


class CategoryMapping(Base):
    """Соответствие категорий между WB и Ozon, заведённое пользователем вручную.

    Связка задаётся в обе стороны (один ряд работает и WB→Ozon, и Ozon→WB).
    При cross-MP клонировании ищем маппинг по source-категории — если есть,
    подставляем target id'шники + type_id (для Ozon).
    """
    __tablename__ = "category_mappings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)

    # WB subject (лист дерева)
    wb_subject_id: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    wb_subject_name: Mapped[str] = mapped_column(String(255), nullable=False)

    # Ozon: description_category_id + type_id (оба нужны для создания товара)
    ozon_category_id: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    ozon_category_name: Mapped[str] = mapped_column(String(255), nullable=False)
    ozon_type_id: Mapped[int] = mapped_column(Integer, nullable=False)
    ozon_type_name: Mapped[str] = mapped_column(String(255), nullable=False)

    # Опциональная заметка ("моя категория для столиков")
    note: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
    )


class ImportedCard(Base):
    """Снимок карточки из маркетплейса в момент импорта."""
    __tablename__ = "imported_cards"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    account_id: Mapped[int] = mapped_column(Integer, ForeignKey("marketplace_accounts.id", ondelete="CASCADE"), nullable=False, index=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    mp_card_id: Mapped[str] = mapped_column(String(64), nullable=False)  # внешний ID (WB nmID, Ozon product_id, YM offerId)
    nm_id: Mapped[Optional[int]] = mapped_column(BigInteger, nullable=True)
    name: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    brand: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    category: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    photos: Mapped[Optional[list]] = mapped_column(JSON, nullable=True)  # массив URL
    attributes: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    raw_data: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)  # полный ответ маркетплейса
    project_id: Mapped[Optional[int]] = mapped_column(Integer, ForeignKey("projects.id", ondelete="SET NULL"), nullable=True, index=True)
    imported_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False
    )
