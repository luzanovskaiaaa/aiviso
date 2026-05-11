import type { NextConfig } from "next";

// Security headers — production-grade защита от XSS, clickjacking, MIME-sniffing.
// Применяются ко всем ответам кроме /api (там FastAPI сам ставит CORS).
const SECURITY_HEADERS = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // CSP — отдельно, т.к. логика сложнее. Разрешаем self + Я.Метрика + api.aiviso.ru
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://mc.yandex.ru https://mc.yandex.com",
      "style-src 'self' 'unsafe-inline'",
      // img-src: разрешаем WB CDN и Ozon CDN — на странице marketplaces (импорт карточек)
      // мы показываем превью прямо с CDN маркетплейсов (hot-link, у них CORS открыт).
      // Wildberries: basket-NN.wbbasket.ru (динамические корзины), images.wbstatic.net.
      // Ozon: cdn1.ozone.ru, ir.ozone.ru, ozonusercontent.com.
      "img-src 'self' data: blob: https://api.aiviso.ru https://aiviso.ru https://*.wbbasket.ru https://*.wbstatic.net https://*.wildberries.ru https://*.ozone.ru https://*.ozonusercontent.com https://mc.yandex.ru https://mc.yandex.com",
      "font-src 'self' data:",
      "connect-src 'self' https://api.aiviso.ru https://mc.yandex.ru https://mc.yandex.com",
      "frame-src 'self' https://mc.yandex.ru",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,  // убрать X-Powered-By: Next.js
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "api.aiviso.ru" },
      { protocol: "https", hostname: "**.wbbasket.ru" },
      { protocol: "https", hostname: "**.wbstatic.net" },
      { protocol: "https", hostname: "**.wildberries.ru" },
      { protocol: "https", hostname: "**.ozone.ru" },
      { protocol: "https", hostname: "**.ozonusercontent.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
