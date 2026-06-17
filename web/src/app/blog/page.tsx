import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог Aiviso — гайды для селлеров Wildberries и Ozon",
  description: "Статьи, гайды и чек-листы про фото товара, карточки маркетплейса, AI-инструменты для селлеров.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Блог Aiviso",
    description: "Гайды и чек-листы для селлеров на Wildberries и Ozon.",
    url: "/blog",
    type: "website",
  },
};

const POSTS = [
  {
    slug: "oshibki-foto-tovara",
    title: "7 ошибок с фото товара на маркетплейсе, которые убивают конверсию",
    excerpt:
      "Мятый фон, квадратный формат, одно фото в карточке — разбираем семь самых частых ошибок с примерами и чек-листом для исправления.",
    date: "2026-06-17",
  },
  {
    slug: "infografika-dlya-marketpleysa",
    title: "Инфографика для карточки Wildberries и Ozon: что писать и как оформить",
    excerpt: "Что писать на инфографике, какие иконки, ошибки селлеров. Правило 3+4, дизайн, отличия WB и Ozon.",
    date: "2026-05-02",
  },
  {
    slug: "perenos-kartochek-wb-ozon",
    title: "Как перенести карточки с Wildberries на Ozon (и наоборот)",
    excerpt: "Категории, размерные сетки, конвертация см↔мм и кг↔г, фото в нужных размерах, автоматизация.",
    date: "2026-05-02",
  },
  {
    slug: "ai-foto-pravila-marketpleysov",
    title: "Можно ли использовать AI-фото на Wildberries и Ozon в 2026",
    excerpt: "Правила маркетплейсов, риски бана, когда AI-фото разрешены и как пользоваться безопасно.",
    date: "2026-05-02",
  },
  {
    slug: "ai-vs-fotograf",
    title: "AI vs фотограф: что выгоднее для карточки на маркетплейсе",
    excerpt: "Реальные цены и сроки. Студия от 5 000 ₽, AI — от 15 ₽ за кадр. Расчёт окупаемости и когда что выбирать.",
    date: "2026-05-02",
  },
  {
    slug: "razmery-foto-marketpleysov",
    title: "Размеры фото для маркетплейсов в 2026: WB, Ozon, Яндекс.Маркет",
    excerpt: "Точные размеры и форматы фото для Wildberries, Ozon, Яндекс.Маркета. Чек-лист, требования и сравнение.",
    date: "2026-05-02",
  },
  {
    slug: "foto-dlya-wildberries",
    title: "Как сделать фото для Wildberries в 2026: пошаговый гайд для селлеров",
    excerpt: "Требования WB, размеры карточки 900×1200, чек-лист по качеству и сравнение цен на студию vs AI-генерацию.",
    date: "2026-05-01",
  },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
  ],
};

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.7 }}>
        <Link href="/" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}>← На главную</Link>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "16px 0 12px", lineHeight: 1.2 }}>
          Блог Aiviso
        </h1>
        <p style={{ color: "#6b7280", fontSize: 17, marginBottom: 32 }}>
          Гайды и чек-листы для селлеров на Wildberries и Ozon.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              style={{
                display: "block",
                padding: "20px 24px",
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.15s",
              }}
            >
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                {new Date(p.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6, color: "#1f2937", lineHeight: 1.35 }}>
                {p.title}
              </h2>
              <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.55, margin: 0 }}>{p.excerpt}</p>
            </Link>
          ))}
        </div>

        <p style={{ marginTop: 32, color: "#9ca3af", fontSize: 13 }}>
          Скоро появятся новые статьи — про карточки Ozon, инфографику, кейсы селлеров.
        </p>
      </main>
    </>
  );
}
