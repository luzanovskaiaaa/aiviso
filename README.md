# Aiviso

AI-генератор фото для маркетплейсов. aiviso.ru

## Структура

- `web/` — Next.js 15 (фронтенд)
- `api/` — FastAPI (бэкенд)
- `.github/workflows/` — CI/CD в Google Cloud Run

## Локальный запуск

**API:**
```bash
cd api
python -m venv .venv
.venv/Scripts/activate  # Windows
pip install -r requirements.txt
cp .env.example .env    # заполни переменные
uvicorn main:app --reload
```

**Web:**
```bash
cd web
npm install
npm run dev
```

Открыть: http://localhost:3000
