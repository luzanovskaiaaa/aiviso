import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI vs фотограф: сколько стоит фото товара для маркетплейса в 2026",
  description: "Сравнение AI-генерации и работы фотостудии. Цены, сроки, качество. Что выбрать для карточки на Wildberries и Ozon.",
  alternates: { canonical: "/blog/ai-vs-fotograf" },
  openGraph: {
    title: "AI vs фотограф: что выгоднее для маркетплейса в 2026",
    description: "Реальные цены и сроки: фотостудия от 5 000 ₽, AI — от 15 ₽ за кадр. Когда что выбирать.",
    url: "/blog/ai-vs-fotograf",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "ai фото для маркетплейса",
    "сколько стоит фото для wildberries",
    "сколько стоит фотограф",
    "ai vs фотограф",
    "предметная съёмка цена",
    "генератор фото для ozon",
    "автоматизация съёмки товаров",
    "нейросеть для селлера",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI vs фотограф: сколько стоит фото товара для маркетплейса в 2026",
  description: "Сравнение AI-генерации и фотостудии для съёмки товаров. Цены, сроки, качество. Что выбрать.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-05-02",
  dateModified: "2026-05-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/ai-vs-fotograf",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "AI vs фотограф", item: "https://aiviso.ru/blog/ai-vs-fotograf" },
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
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function AiVsFotograf() {
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
          <span style={{ color: "#1f2937" }}>AI vs фотограф</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          AI vs фотограф: что выгоднее для карточки на маркетплейсе
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 2 мая 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Когда нужно сделать карточку товара на Wildberries или Ozon, селлер выбирает между:
          фотостудией с моделью, домашней съёмкой на телефон или AI-генератором. Разберём по
          реальным цифрам — что когда выгоднее.
        </p>

        <h2 style={styles.h2}>Сравнение по ключевым параметрам</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Фотостудия</th>
              <th style={styles.th}>Самостоятельно</th>
              <th style={styles.th}>AI-генератор</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Цена за товар (10 кадров)</td>
              <td style={styles.td}>5 000 – 25 000 ₽</td>
              <td style={styles.td}>0 ₽ (но время)</td>
              <td style={styles.tdAccent}><strong>~150 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Время до результата</td>
              <td style={styles.td}>3–10 дней</td>
              <td style={styles.td}>4–8 часов</td>
              <td style={styles.tdAccent}><strong>2 минуты</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Качество</td>
              <td style={styles.td}>Высокое</td>
              <td style={styles.td}>Среднее (зависит от навыка)</td>
              <td style={styles.td}>Высокое (Pro-модель)</td>
            </tr>
            <tr>
              <td style={styles.td}>Сцены и фоны</td>
              <td style={styles.td}>Ограничено реквизитом</td>
              <td style={styles.td}>Только то что дома</td>
              <td style={styles.td}>Любые (AI генерирует)</td>
            </tr>
            <tr>
              <td style={styles.td}>Готовые размеры WB/Ozon</td>
              <td style={styles.td}>Нужно обрезать</td>
              <td style={styles.td}>Нужно обрезать</td>
              <td style={styles.td}>Сразу 900×1200 + 1000×1000</td>
            </tr>
            <tr>
              <td style={styles.td}>Перегенерация если не понравилось</td>
              <td style={styles.td}>+50–100% к цене</td>
              <td style={styles.td}>Время</td>
              <td style={styles.td}>Бесплатно (новая генерация)</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Когда выбирать фотостудию</h2>
        <p style={styles.p}>Фотостудия оправдана если:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Это премиум-товар (украшения, часы, одежда дорогих брендов) — там качество критично</li>
          <li style={styles.li}>Нужны видео-обзоры с моделью — AI пока не делает реалистичное видео</li>
          <li style={styles.li}>У вас один-два товара и фото нужны раз в год — постоянной потребности нет</li>
          <li style={styles.li}>Бюджет позволяет 25 000 ₽+ за карточку без напряжения</li>
        </ul>

        <h2 style={styles.h2}>Когда AI выгоднее</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Большой каталог.</strong> 50 товаров × 10 кадров = 500 фото. Студия: 250 000 ₽+. AI: ~7 500 ₽.</li>
          <li style={styles.li}><strong>Регулярное обновление.</strong> Карточки нужно обновлять под сезоны и тренды — AI делает это за минуты.</li>
          <li style={styles.li}><strong>Тестирование сцен.</strong> Пробуем 5 разных вариантов оформления, оставляем лучший — на студии это +5× к бюджету.</li>
          <li style={styles.li}><strong>Перенос между маркетплейсами.</strong> WB → Ozon — нужны новые размеры и стиль. AI делает оба варианта одной кнопкой.</li>
          <li style={styles.li}><strong>Бюджетные товары.</strong> Если средний чек 500 ₽, тратить 10 000 ₽ на фото нерентабельно — никогда не отобьётся.</li>
        </ul>

        <h2 style={styles.h2}>Гибридная схема — самая выгодная</h2>
        <p style={styles.p}>Самая разумная стратегия для среднего и крупного селлера:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Один раз сделать предметку</strong> в студии или дома — товар на белом фоне, чистое
            фото без лишнего. Это ~1 000–3 000 ₽ за товар при простой съёмке.
          </li>
          <li style={styles.li}>
            <strong>Дальше всё через AI.</strong> Из этого исходника AI делает: lifestyle-сцены,
            крупные планы, продукт в интерьере, на природе, в использовании. По 30 ₽ за кадр.
          </li>
          <li style={styles.li}>
            <strong>QC сохраняет детали.</strong> Aiviso сравнивает результат с оригиналом —
            пуговицы, фурнитура, текстура остаются как у реального товара. Маркетплейсы это
            принимают, покупатели не разочаровываются при получении.
          </li>
        </ol>

        <h2 style={styles.h2}>Можно ли использовать AI-фото на маркетплейсах</h2>
        <p style={styles.p}>
          Да, это разрешено. Wildberries и Ozon не запрещают AI-фото — главное правило:
          фото должно соответствовать реальному товару. Если AI «дорисовал» отсутствующие
          детали (лишний карман, замок) — это нарушение, и покупатель оставит возврат.
          Поэтому критичен <strong>контроль соответствия деталей</strong> — то, что мы делаем
          через QC-агента в Aiviso.
        </p>

        <h2 style={styles.h2}>Расчёт окупаемости</h2>
        <p style={styles.p}>
          Допустим, селлер делает 20 новых карточек в месяц по 8 кадров = 160 фото.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Студия:</strong> 20 × 10 000 ₽ = <strong>200 000 ₽/мес</strong></li>
          <li style={styles.li}><strong>AI (Aiviso Pro):</strong> 160 × 30 ₽ = <strong>4 800 ₽/мес</strong></li>
          <li style={styles.li}><strong>Экономия:</strong> ~195 000 ₽/мес или <strong>2.3 млн ₽/год</strong></li>
        </ul>
        <p style={styles.p}>
          Даже если селлер скептичен и хочет дублировать — снимать в студии важные позиции,
          а AI использовать на остальные — экономия всё равно 70-80%.
        </p>

        <h2 style={styles.h2}>Вывод</h2>
        <p style={styles.p}>
          Для регулярной работы с маркетплейсами AI — не альтернатива студии, а замена.
          Студия осталась для премиум-сегмента, видео-съёмки и редких case'ов когда надо именно
          живая модель в реальной локации. Для масс-маркета (одежда до 5 000 ₽, мебель,
          косметика, аксессуары) AI экономит 90%+ бюджета без потери качества.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь посчитать на своём каталоге?</strong>{" "}
            <Link href="/auth" style={{ color: "#7c3aed", textDecoration: "underline" }}>Регистрация в Aiviso</Link>
            {" "}— 13 кредитов на старте бесплатно. Загрузи одно фото товара, получи 2 готовых кадра — и сравни с тем, что выдаёт твой текущий процесс.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries в 2026</Link></li>
          <li><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов: чек-лист</Link></li>
          <li><Link href="/about" style={{ color: "#7c3aed" }}>О компании Aiviso</Link></li>
          <li><Link href="/#faq" style={{ color: "#7c3aed" }}>Частые вопросы селлеров</Link></li>
        </ul>
      </article>
    </>
  );
}
