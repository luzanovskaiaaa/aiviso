import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.aiviso.ru",
  timeout: 120_000, // генерация может занять до 2 мин
});

// Автоматически подставляем JWT из localStorage
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 401 → редирект на /auth
api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      window.location.href = "/auth";
    }
    return Promise.reject(err);
  }
);

export const SCENARIOS: Record<string, { label: string; categories: string[] }> = {
  // ── ОДЕЖДА ──
  clothing_ghost:       { label: "Невидимый манекен",          categories: ["clothing"] },
  clothing_studio:      { label: "Студийное фото",             categories: ["clothing"] },
  clothing_model:       { label: "Модель",                     categories: ["clothing"] },
  clothing_usage:       { label: "Использование",              categories: ["clothing"] },
  // legacy ID, для обратной совместимости
  clothing_packshot:    { label: "Невидимый манекен",          categories: ["clothing"] },
  clothing_lifestyle:   { label: "Модель",                     categories: ["clothing"] },
  clothing_macro:       { label: "Крупный план — детали",      categories: ["clothing"] },

  // ── МЕБЕЛЬ ──
  furniture_white_cube: { label: "Белый куб",                  categories: ["furniture"] },
  furniture_studio:     { label: "Студийное фото",             categories: ["furniture"] },
  furniture_interior:   { label: "В интерьере",                categories: ["furniture"] },
  furniture_outdoor:    { label: "На природе",                 categories: ["furniture"] },
  furniture_usage:      { label: "Использование",              categories: ["furniture"] },
  // legacy
  furniture_packshot:   { label: "Студийное фото",             categories: ["furniture"] },
  furniture_lifestyle:  { label: "В интерьере",                categories: ["furniture"] },
  furniture_macro:      { label: "Крупный план — детали",      categories: ["furniture"] },

  // ── КОСМЕТИКА ──
  cosmetics_white_cube: { label: "Белый куб",                  categories: ["cosmetics"] },
  cosmetics_studio:     { label: "Студийное фото",             categories: ["cosmetics"] },
  cosmetics_interior:   { label: "В интерьере",                categories: ["cosmetics"] },
  cosmetics_model:      { label: "Модель",                     categories: ["cosmetics"] },
  cosmetics_usage:      { label: "Использование",              categories: ["cosmetics"] },
  // legacy
  cosmetics_packshot:   { label: "Студийное фото",             categories: ["cosmetics"] },
  cosmetics_lifestyle:  { label: "Использование",              categories: ["cosmetics"] },

  // ── ЕДА / FMCG ──
  food_white_cube:      { label: "Белый куб",                  categories: ["food"] },
  food_studio:          { label: "Студийное фото",             categories: ["food"] },
  food_serving:         { label: "Сервировка",                 categories: ["food"] },
  food_usage:           { label: "Использование",              categories: ["food"] },
  // legacy
  food_packshot:        { label: "Студийное фото",             categories: ["food"] },
  food_lifestyle:       { label: "Сервировка",                 categories: ["food"] },

  // ── ТЕХНИКА ──
  electronics_white_cube:{ label: "Белый куб",                 categories: ["electronics"] },
  electronics_studio:   { label: "Студийное фото",             categories: ["electronics"] },
  electronics_workspace:{ label: "На рабочем месте",           categories: ["electronics"] },
  electronics_usage:    { label: "Использование",              categories: ["electronics"] },
  // legacy
  electronics_packshot: { label: "Студийное фото",             categories: ["electronics"] },
  electronics_lifestyle:{ label: "Использование",              categories: ["electronics"] },

  // ── ДРУГОЕ (универсальная категория) ──
  other_white_cube:     { label: "Белый куб",                  categories: ["other"] },
  other_studio:         { label: "Студийное фото",             categories: ["other"] },
  other_lifestyle:      { label: "В интерьере",                categories: ["other"] },
  other_usage:          { label: "Использование",              categories: ["other"] },

  // ── УНИВЕРСАЛЬНЫЙ ──
  background_swap:      { label: "Удалить фон",                categories: ["clothing", "furniture", "cosmetics", "food", "electronics", "other"] },
};

// Какие сценарии показывать в селекторе для каждой категории (без legacy-дублей)
export const CATEGORY_SCENARIO_ORDER: Record<string, string[]> = {
  clothing:    ["clothing_ghost", "clothing_studio", "clothing_model", "clothing_usage", "background_swap"],
  furniture:   ["furniture_white_cube", "furniture_studio", "furniture_interior", "furniture_outdoor", "furniture_usage", "background_swap"],
  cosmetics:   ["cosmetics_white_cube", "cosmetics_studio", "cosmetics_interior", "cosmetics_model", "cosmetics_usage", "background_swap"],
  food:        ["food_white_cube", "food_studio", "food_serving", "food_usage", "background_swap"],
  electronics: ["electronics_white_cube", "electronics_studio", "electronics_workspace", "electronics_usage", "background_swap"],
  other:       ["other_white_cube", "other_studio", "other_lifestyle", "other_usage", "background_swap"],
};

export const CATEGORIES: Record<string, string> = {
  clothing: "Одежда",
  furniture: "Предметы интерьера",
  cosmetics: "Косметика",
  food: "Еда / FMCG",
  electronics: "Техника",
  other: "Другое",
};
