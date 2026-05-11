"""Единый клиент Vertex AI — все сервисы берут его отсюда."""
from google import genai
from app.core.config import settings

# Vertex AI использует GCP-кредиты, не AI Studio
# Credentials берутся из GOOGLE_APPLICATION_CREDENTIALS (путь к JSON-ключу сервисного аккаунта)
gemini_client = genai.Client(
    vertexai=True,
    project=settings.GOOGLE_CLOUD_PROJECT,
    location=settings.VERTEX_AI_LOCATION,
)
