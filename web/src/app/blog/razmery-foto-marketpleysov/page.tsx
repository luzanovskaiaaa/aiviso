import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Размеры фото для маркетплейсов в 2026: WB, Ozon, Яндекс.Маркет",
  description: "Точные требования к размерам и формату фото товаров для Wildberries (900×1200), Ozon (1000×1000), Яндекс.Маркета. Чек-лист для селлера.",
  alternates: { canonical: "/blog/razmery-foto-marketpleysov" },
  openGraph: {
    title: "Размеры фото для маркетплейсов: чек-лист 2026",
    description: "Точные размеры WB 900×1200, Ozon 1000×1000, Яндекс.Маркет. Что требует каждая площадка.",
    url: "/blog/razmery-foto-marketpleysov",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "размер фото wildberries",
    "размер фото ozon",
    "формат фото маркетплейса",
    "wb 900x1200",
    "ozon 1000x1000",
    "требования к фото товара",
    "размеры карточки маркетплейса",
    "яндекс маркет фото размер",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Размеры фото для маркетплейсов в 2026: WB, Ozon, Яндекс.Маркет",
  description: "Точные требования к размерам и форматам фото товаров для Wildberries, Ozon и Яндекс.Маркета. Чек-лист для селлера.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-05-02",
  dateModified: "2026-05-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/razmery-foto-marketpleysov",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Размеры фото", item: "https://aiviso.ru/blog/razmery-foto-marketpleysov" },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
};

export default function RazmeryFoto() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.75, fontSize: 16 }}>
        <nav aria-label="Хлебные крошки" style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Блог</Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Размеры фото</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Размеры фото для маркетплейсов в 2026: полный чек-лист
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 2 мая 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Если фото загружено в неправильном размере, маркетплейс отклонит карточку или обрежет изображение
          так, что товар будет смотреться плохо. В этой статье — точные размеры для Wildberries, Ozon
          и Яндекс.Маркета на 2026 год, и что делать если у вас фото в другом формате.
        </p>

        <h2 style={styles.h2}>Сводная таблица: размеры по маркетплейсам</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Маркетплейс</th>
              <th style={styles.th}>Размер</th>
              <th style={styles.th}>Соотношение</th>
              <th style={styles.th}>Формат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>Wildberries</strong></td>
              <td style={styles.td}>900 × 1200 px (мин)</td>
              <td style={styles.td}>3:4 (вертикальное)</td>
              <td style={styles.td}>JPG, PNG, WebP</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Ozon</strong></td>
              <td style={styles.td}>1000 × 1000 px (мин)</td>
              <td style={styles.td}>1:1 (квадрат)</td>
              <td style={styles.td}>JPG, PNG</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Яндекс.Маркет</strong></td>
              <td style={styles.td}>700 × 700 px (мин)</td>
              <td style={styles.td}>1:1 (рекомендуется)</td>
              <td style={styles.td}>JPG, PNG</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Wildberries — детальные требования</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Размер:</strong> минимум 900×1200, максимум 8000×8000</li>
          <li style={styles.li}><strong>Соотношение сторон:</strong> 3:4 (вертикальный кадр)</li>
          <li style={styles.li}><strong>Вес:</strong> до 32 МБ за один файл</li>
          <li style={styles.li}><strong>Формат:</strong> JPG, PNG, WebP</li>
          <li style={styles.li}><strong>Цветовая модель:</strong> RGB (не CMYK)</li>
          <li style={styles.li}><strong>Количество фото в карточке:</strong> до 30</li>
          <li style={styles.li}><strong>Главное фото:</strong> однотонный белый или светло-серый фон</li>
          <li style={styles.li}><strong>Без водяных знаков</strong> (кроме случаев, когда они зарегистрированы как товарный знак)</li>
        </ul>
        <p style={styles.p}>
          Если фото меньше 900×1200, WB просто отклонит загрузку. Если меньше 3:4 по соотношению —
          может вырезать края товара.
        </p>

        <h2 style={styles.h2}>Ozon — детальные требования</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Размер:</strong> минимум 1000×1000, рекомендуется 1500×1500</li>
          <li style={styles.li}><strong>Соотношение сторон:</strong> строго 1:1 (квадрат)</li>
          <li style={styles.li}><strong>Вес:</strong> до 10 МБ</li>
          <li style={styles.li}><strong>Формат:</strong> JPG, PNG (PNG для прозрачных фонов)</li>
          <li style={styles.li}><strong>Главное фото:</strong> белый фон #FFFFFF</li>
          <li style={styles.li}><strong>Поля:</strong> товар занимает не менее 70% площади кадра, отступы от краёв минимум 5%</li>
          <li style={styles.li}><strong>Количество:</strong> до 15 фото</li>
          <li style={styles.li}><strong>Чёткость:</strong> без размытия, шумов и артефактов сжатия</li>
        </ul>
        <p style={styles.p}>
          Ozon строже WB: если товар не на белом фоне или нарушено соотношение — модерация отклонит.
          У Ozon есть автоматическая проверка через AI, которая ловит нарушения за секунды.
        </p>

        <h2 style={styles.h2}>Яндекс.Маркет — детальные требования</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Размер:</strong> минимум 700×700, рекомендуется 1500×1500</li>
          <li style={styles.li}><strong>Соотношение:</strong> рекомендуется 1:1, допускается 4:5 и 3:4</li>
          <li style={styles.li}><strong>Формат:</strong> JPG, PNG</li>
          <li style={styles.li}><strong>Главное фото:</strong> белый или нейтральный фон</li>
          <li style={styles.li}><strong>Количество:</strong> до 9 фото</li>
        </ul>

        <h2 style={styles.h2}>Что делать, если фото в другом размере</h2>
        <p style={styles.p}>Три варианта:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Обрезать вручную</strong> в Photoshop / GIMP / онлайн-сервисах.
            Минусы: каждый раз делать заново, легко обрезать товар.
          </li>
          <li style={styles.li}>
            <strong>Заказать у фотографа.</strong> 5 000–25 000 ₽ за товар + 3-10 дней. Дорого и долго.
          </li>
          <li style={styles.li}>
            <strong>Использовать AI-генератор как Aiviso.</strong> Сразу генерация в нужных размерах:
            900×1200 для WB, 1000×1000 для Ozon. Скачивание ZIP-архивом с обоими размерами в один клик.
          </li>
        </ol>

        <h2 style={styles.h2}>Чек-лист перед загрузкой</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Размер не меньше минимального для платформы</li>
          <li style={styles.li}>Правильное соотношение сторон (3:4 для WB, 1:1 для Ozon)</li>
          <li style={styles.li}>Главное фото — на белом фоне (без посторонних предметов)</li>
          <li style={styles.li}>Товар занимает 70-85% кадра</li>
          <li style={styles.li}>Цветовая модель RGB</li>
          <li style={styles.li}>Без водяных знаков (если не зарегистрированы)</li>
          <li style={styles.li}>Файл не больше лимита маркетплейса (32 МБ для WB, 10 МБ для Ozon)</li>
          <li style={styles.li}>Чёткое изображение, без размытия</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь сразу в нужных размерах?</strong>{" "}
            <Link href="/auth" style={{ color: "#7c3aed", textDecoration: "underline" }}>Регистрация в Aiviso</Link>
            {" "}— загружаешь фото товара, выбираешь сценарий, получаешь готовые кадры в 900×1200 и 1000×1000 одной кнопкой. 13 кредитов на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries в 2026</Link></li>
          <li><Link href="/about" style={{ color: "#7c3aed" }}>О компании Aiviso</Link></li>
          <li><Link href="/#faq" style={{ color: "#7c3aed" }}>Частые вопросы селлеров</Link></li>
        </ul>
      </article>
    </>
  );
}
