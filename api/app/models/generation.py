from datetime import datetime, timezone
from typing import Optional
from sqlalchemy import String, Integer, DateTime, ForeignKey, Text, Float, JSON, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class Generation(Base):
    __tablename__ = "generations"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    project_id: Mapped[int] = mapped_column(Integer, ForeignKey("projects.id"), nullable=False, index=True)
    scenario: Mapped[str] = mapped_column(String(100), nullable=False)   # packshot, lifestyle, model, macro, infographic, background_swap
    status: Mapped[str] = mapped_column(String(50), default="pending")   # pending, processing, done, failed, needs_review
    result_paths: Mapped[Optional[list]] = mapped_column(JSON, nullable=True)  # список путей к файлам
    qc_score: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    qc_details: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    retry_count: Mapped[int] = mapped_column(Integer, default=0)
    credits_used: Mapped[int] = mapped_column(Integer, default=0)
    scene_description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    title: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    utp: Mapped[Optional[list]] = mapped_column(JSON, nullable=True)  # array of strings
    with_icons: Mapped[bool] = mapped_column(Boolean, default=False)
    # Legacy: имя starter-пресета (minimal_premium, clean_typography…). Сейчас оно
    # конвертируется в brand_kit_snapshot через starter_kit(name).
    card_style: Mapped[Optional[str]] = mapped_column(String(40), nullable=True)
    # Snapshot brand kit'а на момент создания генерации — для воспроизводимости.
    # Если проект потом сменит kit, старые генерации сохранят свой исходный стиль.
    brand_kit_snapshot: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    # Соотношение сторон для генерации фото (photo-режим без УТП-плашек).
    # Допустимые: "1:1", "3:4", "4:5", "16:9", "9:16". Для card-режима всегда 3:4 (листинг WB/Ozon).
    # Если null — берётся дефолт ("3:4" для card, "1:1" для photo).
    photo_aspect: Mapped[Optional[str]] = mapped_column(String(8), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    completed_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)

    project: Mapped["Project"] = relationship("Project", back_populates="generations")  # noqa: F821
