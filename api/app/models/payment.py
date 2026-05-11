"""Платежи. Записи создаются при init-запросе на платёжный шлюз и
обновляются по webhook-у/callback-у от Т-Кассы (или другого провайдера).
"""
from datetime import datetime, timezone
from typing import Optional
from sqlalchemy import String, Integer, DateTime, ForeignKey, Text, Numeric, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class Payment(Base):
    __tablename__ = "payments"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id"), nullable=False, index=True)

    # Что покупаем
    package: Mapped[str] = mapped_column(String(40), nullable=False)        # имя пакета: "100", "500", "2000" или "custom"
    amount_rub: Mapped[float] = mapped_column(Numeric(10, 2), nullable=False)  # сумма в ₽
    credits: Mapped[int] = mapped_column(Integer, nullable=False)            # сколько кредитов начисляется

    # Внешние идентификаторы
    provider: Mapped[str] = mapped_column(String(20), default="tinkoff", nullable=False)  # tinkoff | yookassa | manual
    provider_payment_id: Mapped[Optional[str]] = mapped_column(String(100), nullable=True, index=True)
    payment_url: Mapped[Optional[str]] = mapped_column(Text, nullable=True)  # confirmation URL для редиректа

    # Статусы
    status: Mapped[str] = mapped_column(String(30), default="pending", nullable=False)
    # pending — создан, юзер ещё не оплатил
    # confirmed — успех, кредиты начислены
    # failed — отклонён банком
    # refunded — возврат
    # cancelled — отменён юзером

    # Сырые ответы провайдера (для отладки)
    raw_init: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    raw_webhook: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    confirmed_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)

    user: Mapped["User"] = relationship("User", back_populates="payments")  # noqa: F821
