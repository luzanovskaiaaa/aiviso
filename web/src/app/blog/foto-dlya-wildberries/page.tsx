import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как сделать фото для Wildberries в 2026: гайд для селлеров",
  description: "Требования WB к фото товара, размеры карточки 900×1200, чек-лист по качеству, AI-генерация без фотографа. Пошаговая инструкция для продавцов.",
  alternates: { canonical: "/blog/foto-dlya-wildberries" },
  openGraph: {
    title: "Как сделать фото для Wildberries в 2026 — пошаговый гайд",
    description: "Размеры, требования, чек-лист, AI-инструменты. Всё что нужно знать селлеру про фото на WB.",
    url: "/blog/foto-dlya-wildberries",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "фото для wildberries",
    "фото товара wb",
    "карточка wildberries",
    "размер фото wildberries",
    "ai фото для wb",
    "как сделать фото для маркетплейса",
    "требования wildberries к фото",
    "инфографика для wb",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как сделать фото для Wildberries в 2026: гайд для селлеров",
  description: "Требования WB, размеры 900×1200, чек-лист и AI-генерация фото товара без фотостудии.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  author: {
    "@type": "Organization",
    name: "Aiviso",
    url: "https://aiviso.ru/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: {
      "@type": "ImageObject",
      url: "https://aiviso.ru/logo.png",
    },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/foto-dlya-wildberries",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Фото для Wildberries", item: "https://aiviso.ru/blog/foto-dlya-wildberries" },
  ],
};

export default function FotoDlyaWb() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.75, fontSize: 16 }}>
        <nav aria-label="Хлебные крошки" style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
          {" → "}
          <span style={{ color: "#9ca3af" }}>Блог</span>
          {" → "}
          <span style={{ color: "#1f2937" }}>Фото для Wildberries</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как сделать фото для Wildberries в 2026: пошаговый гайд для селлеров
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>
          Обновлено 1 мая 2026 года · Aiviso
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Карточка товара на Wildberries без хороших фото не продаёт. Это аксиома: 70% решения о покупке селлер
          теряет ещё на этапе превью. Разберём конкретно: какие требования у WB, в каких размерах загружать,
          что должно быть на фото, и как делать это без фотостудии.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "40px 0 12px" }}>1. Требования Wildberries к фото товара</h2>
        <p>Официальные требования платформы на 2026 год:</p>
        <ul style={{ paddingLeft: 24 }}>
          <li><strong>Минимальный размер:</strong> 900 × 1200 пикселей (соотношение 3:4)</li>
          <li><strong>Максимальный размер:</strong> 8000 × 8000 пикселей</li>
          <li><strong>Формат:</strong> JPG, PNG, WebP</li>
          <li><strong>Вес одного файла:</strong> до 32 МБ</li>
          <li><strong>Количество фото в карточке:</strong> до 30 штук</li>
          <li><strong>Цветовая модель:</strong> RGB (не CMYK)</li>
          <li><strong>Фон:</strong> для главного фото — однотонный белый или светло-серый (рекомендация WB)</li>
        </ul>
        <p>
          Если фото не проходит модерацию, карточка не публикуется. Поэтому соотношение 3:4 и минимум 900×1200 — это
          must-have. Все наши генерации в Aiviso идут именно в этом размере.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "40px 0 12px" }}>2. Что должно быть в карточке: чек-лист</h2>
        <ol style={{ paddingLeft: 24 }}>
          <li><strong>Главное фото (packshot)</strong> — товар на однотонном фоне, виден целиком, без обрезов.</li>
          <li><strong>Lifestyle-фото</strong> — товар в использовании. Платье — на модели, мебель — в интерьере, косметика — в руках.</li>
          <li><strong>Макро-фото деталей</strong> — фактура ткани, фурнитура, шов, материал. Это закрывает страх «куплю кота в мешке».</li>
          <li><strong>Инфографика</strong> — размер, состав, плюсы. Накладные подписи прямо на фото.</li>
          <li><strong>Габариты и упаковка</strong> — фото с линейкой или мерной сеткой.</li>
          <li><strong>Видео</strong> — 360° или короткий обзор (необязательно, но повышает CTR).</li>
        </ol>

        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "40px 0 12px" }}>3. Сколько стоит фото для Wildberries</h2>
        <p>Три способа получить фото:</p>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, margin: "16px 0" }}>
          <thead>
            <tr style={{ background: "#f9fafb", textAlign: "left" }}>
              <th style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>Способ</th>
              <th style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>Цена за товар</th>
              <th style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>Срок</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>Фотостудия с моделью</td>
              <td style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>5 000 – 25 000 ₽</td>
              <td style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>3–10 дней</td>
            </tr>
            <tr>
              <td style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>Самостоятельная съёмка дома</td>
              <td style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>0 ₽ + ваше время</td>
              <td style={{ padding: "10px 12px", border: "1px solid #e5e7eb" }}>4–8 часов на товар</td>
            </tr>
            <tr style={{ background: "#f5f3ff" }}>
              <td style={{ padding: "10px 12px", border: "1px solid #ddd6fe" }}><strong>AI-генератор (Aiviso)</strong></td>
              <td style={{ padding: "10px 12px", border: "1px solid #ddd6fe" }}><strong>~30 ₽ за кадр</strong></td>
              <td style={{ padding: "10px 12px", border: "1px solid #ddd6fe" }}><strong>2 минуты</strong></td>
            </tr>
          </tbody>
        </table>

        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "40px 0 12px" }}>4. Можно ли использовать AI-фото на Wildberries?</h2>
        <p>
          Прямого запрета AI-фото нет. Главное правило: фото должно соответствовать реальному товару. Если AI
          «дорисовал» детали, которых на товаре нет — модерация может отклонить или, хуже, покупатель оставит
          возврат и плохой отзыв. Поэтому критичен <strong>контроль соответствия деталей оригиналу</strong> —
          именно поэтому в Aiviso встроен QC-агент с авто-перегенерацией.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "40px 0 12px" }}>5. Что делать дальше</h2>
        <ul style={{ paddingLeft: 24 }}>
          <li>Сделайте 1 чёткое фото товара на нейтральном фоне — это и будет «исходником».</li>
          <li>Опишите товар: материал, цвет, особенности.</li>
          <li>Загрузите в <Link href="/auth" style={{ color: "#7c3aed" }}>Aiviso</Link> — получите 10 кредитов бесплатно при регистрации.</li>
          <li>Сгенерируйте 5–10 вариантов в разных сценариях (packshot, lifestyle, макро).</li>
          <li>Скачайте архив в готовом размере 900×1200, загрузите в карточку WB.</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Готовы попробовать?</strong>{" "}
            <Link href="/auth" style={{ color: "#7c3aed", textDecoration: "underline" }}>Регистрация в Aiviso</Link>
            {" "}— 10 кредитов на старте, карта не нужна.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/about" style={{ color: "#7c3aed" }}>О компании Aiviso</Link></li>
          <li><Link href="/#how" style={{ color: "#7c3aed" }}>Как работает Aiviso (3 шага)</Link></li>
          <li><Link href="/#faq" style={{ color: "#7c3aed" }}>Частые вопросы селлеров</Link></li>
        </ul>
      </article>
    </>
  );
}
