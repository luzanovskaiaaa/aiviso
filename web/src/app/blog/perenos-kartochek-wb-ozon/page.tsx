import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как перенести карточки с Wildberries на Ozon (и наоборот) в 2026",
  description: "Перенос карточек товара между маркетплейсами: чем отличаются категории, как конвертировать размеры (см↔мм, кг↔г), автоматизация через Aiviso.",
  alternates: { canonical: "/blog/perenos-kartochek-wb-ozon" },
  openGraph: {
    title: "Перенос карточек с WB на Ozon: пошаговый гайд 2026",
    description: "Категории, размеры, фото, описания — что нужно поменять при переносе. Автоматизация в один клик.",
    url: "/blog/perenos-kartochek-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "перенос карточек wb на ozon",
    "wildberries на ozon",
    "ozon на wildberries",
    "загрузить карточки на ozon",
    "миграция товаров маркетплейс",
    "копирование карточек",
    "соответствие категорий wb ozon",
    "автоматизация маркетплейсов",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как перенести карточки с Wildberries на Ozon (и наоборот) в 2026",
  description: "Полный гайд по переносу карточек товара между маркетплейсами с конвертацией категорий и размеров.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-05-02",
  dateModified: "2026-05-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/perenos-kartochek-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Перенос WB ↔ Ozon", item: "https://aiviso.ru/blog/perenos-kartochek-wb-ozon" },
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

export default function PerenosArticle() {
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
          <span style={{ color: "#1f2937" }}>Перенос WB ↔ Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как перенести карточки с Wildberries на Ozon (и наоборот)
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 2 мая 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Если у тебя 100 карточек на Wildberries и нужно завести их на Ozon — это от 30 до 100 часов
          ручной работы: разные категории, размерные сетки, требования к фото, форматы данных.
          Разберём, что именно меняется и как автоматизировать процесс.
        </p>

        <h2 style={styles.h2}>Что меняется при переносе</h2>
        <p style={styles.p}>4 ключевых блока, в каждом своя боль:</p>

        <h3 style={styles.h3}>1. Категория товара</h3>
        <p style={styles.p}>
          У WB и Ozon свои справочники категорий, и они не совпадают напрямую. Например:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>WB «Подставки и держатели для ванной» → Ozon «Аксессуары для ванной комнаты → Полки и подставки»</li>
          <li style={styles.li}>WB «Платья» → Ozon «Одежда → Женская одежда → Платья и сарафаны»</li>
        </ul>
        <p style={styles.p}>
          В каждой категории — свой набор обязательных характеристик. То что на WB называется
          «Цвет основной», на Ozon может быть «Базовый цвет» с другим списком значений.
        </p>

        <h3 style={styles.h3}>2. Размеры и единицы измерения</h3>
        <p style={styles.p}>
          У платформ разные предпочтения по единицам:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Габариты упаковки</td>
              <td style={styles.td}>чаще см</td>
              <td style={styles.td}>чаще мм</td>
            </tr>
            <tr>
              <td style={styles.td}>Вес</td>
              <td style={styles.td}>кг с десятыми</td>
              <td style={styles.td}>граммы</td>
            </tr>
            <tr>
              <td style={styles.td}>Главное фото</td>
              <td style={styles.td}>3:4 (900×1200)</td>
              <td style={styles.td}>1:1 (1000×1000)</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Если просто перетащить — вес 0.5 кг превратится в «0.5 г», карточку отклонят. Нужна
          автоматическая конвертация см↔мм и кг↔г.
        </p>

        <h3 style={styles.h3}>3. Артикул / Offer ID</h3>
        <p style={styles.p}>
          На WB используется vendor_code (артикул селлера), на Ozon — offer_id. Они разные сущности
          и могут пересекаться в одном каталоге. Если ты используешь один артикул на обеих площадках
          — окей, но Ozon требует уникальности offer_id внутри своего магазина.
        </p>
        <p style={styles.p}>
          При массовом переносе удобно автоматически добавлять суффикс типа <code>WB-001</code> →
          <code>WB-001-OZ</code>, чтобы не путаться.
        </p>

        <h3 style={styles.h3}>4. Фото и инфографика</h3>
        <p style={styles.p}>
          Формальные требования (см. <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>«Размеры фото для маркетплейсов»</Link>):
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Wildberries — 900×1200 (3:4), вертикальный кадр</li>
          <li style={styles.li}>Ozon — 1000×1000 (1:1), квадрат</li>
        </ul>
        <p style={styles.p}>
          Если у тебя только WB-фото — на Ozon при простом ресайзе обрежет края товара. Нужны
          либо отдельные кадры, либо AI-перекомпозиция.
        </p>

        <h2 style={styles.h2}>Способы переноса</h2>

        <h3 style={styles.h3}>Способ 1 — вручную через личный кабинет</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Зайти в Ozon Seller, открыть «Создать товар»</li>
          <li style={styles.li}>Скопировать название и описание из WB</li>
          <li style={styles.li}>Выбрать категорию (часто методом тыка — нет точной таблицы соответствий)</li>
          <li style={styles.li}>Заполнить характеристики (10-30 полей)</li>
          <li style={styles.li}>Загрузить фото в нужном размере</li>
          <li style={styles.li}>Конвертировать размеры/вес</li>
        </ul>
        <p style={styles.p}>Время на одну карточку: ~30-40 минут. На 100 карточек — неделя ручной работы.</p>

        <h3 style={styles.h3}>Способ 2 — Excel-выгрузка</h3>
        <p style={styles.p}>
          У Ozon есть массовая загрузка через Excel-шаблон. Заполняешь файл и загружаешь — но
          подготовка файла из WB-данных требует знания структуры обоих маркетплейсов и часто Python/VBA.
          Реалистично для тех, кто умеет в таблицы.
        </p>

        <h3 style={styles.h3}>Способ 3 — автоматизация через Aiviso</h3>
        <p style={styles.p}>В Aiviso весь перенос делается в один клик:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>Подключаешь оба магазина (WB и Ozon) по API-ключам в разделе «Мои магазины»</li>
          <li style={styles.li}>Один раз настраиваешь таблицу соответствий категорий — например, WB «Сидение для ванны» = Ozon «Аксессуары для ванной → Подставки»</li>
          <li style={styles.li}>На карточке WB нажимаешь «↗ Перенести на Ozon»</li>
          <li style={styles.li}>Aiviso автоматически:
            <ul style={styles.ul}>
              <li style={styles.li}>Подставляет категорию по таблице соответствий</li>
              <li style={styles.li}>Конвертирует размеры (см↔мм, кг↔г)</li>
              <li style={styles.li}>Генерирует уникальный offer_id для Ozon</li>
              <li style={styles.li}>Берёт фото из оригинала или генерирует новые в правильном размере</li>
              <li style={styles.li}>Публикует карточку через API Ozon Seller</li>
            </ul>
          </li>
        </ol>
        <p style={styles.p}>
          Можно перенести «как есть» (с теми же фото) или с обновлёнными AI-фото в стиле Ozon.
        </p>

        <h2 style={styles.h2}>Что нельзя автоматизировать</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Уникальный текст описания.</strong> SEO у каждой площадки своё, и если просто скопировать — поисковая выдача внутри маркетплейса будет хуже. Лучше переписать или сгенерировать через AI.</li>
          <li style={styles.li}><strong>Цены.</strong> На Ozon обычно делают +5-10% к цене WB из-за разной комиссии. Это решение селлера, не автоматики.</li>
          <li style={styles.li}><strong>Сертификаты соответствия.</strong> На Ozon чаще требуют, на WB — реже. Документы нужны те же, но процесс загрузки разный.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист перед переносом</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Подключены оба магазина по API</li>
          <li style={styles.li}>Настроена таблица соответствий категорий для тех видов товаров, что планируешь переносить</li>
          <li style={styles.li}>Есть фото в обоих размерах (или оригинал высокого качества для авто-генерации)</li>
          <li style={styles.li}>Решены вопросы с сертификатами для Ozon (если применимо)</li>
          <li style={styles.li}>Заданы цены под каждую площадку с учётом разных комиссий</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь автоматизировать перенос?</strong>{" "}
            <Link href="/auth" style={{ color: "#7c3aed", textDecoration: "underline" }}>Регистрация в Aiviso</Link>
            {" "}— 13 кредитов на старте бесплатно. Подключи оба магазина, импортируй карточки, перенос в 1 клик.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов</Link></li>
          <li><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Фото для Wildberries: гайд</Link></li>
          <li><Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>Инфографика для карточки</Link></li>
        </ul>
      </article>
    </>
  );
}
