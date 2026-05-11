"""Список стилей карточки для UI-селектора."""
from fastapi import APIRouter, Depends

from app.core.security import get_current_user
from app.models.user import User
from app.services.prompt_builder import CARD_STYLES_META

router = APIRouter(prefix="/card-styles", tags=["card-styles"])


@router.get("")
async def list_card_styles(_: User = Depends(get_current_user)):
    """Возвращает метаданные всех стилей карточки для UI-селектора."""
    return CARD_STYLES_META
