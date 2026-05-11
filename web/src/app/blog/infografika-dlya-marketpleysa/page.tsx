import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Инфографика для карточки Wildberries и Ozon: гайд 2026",
  description: "Как сделать инфографику для карточки на маркетплейсе. Что писать, какие иконки использовать, чем отличается WB от Ozon, AI-генерация инфографики.",
  alternates: { canonical: "/blog/infografika-dlya-marketpleysa" },
  openGraph: {
    title: "Инфографика для карточки на маркетплейсе: гайд 2026",
    description: "Что писать, какие иконки, цвета, ошибки селлеров. Готовые шаблоны и AI-генерация.",
    url: "/blog/infografika-dlya-marketpleysa",
    type: "article",
    locale: "ru_RU",
  },
  keywords: [
    "инфографика для wildberries",
    "инфографика для ozon",
    "инфографика карточки товара",
    "как сделать инфографику для маркетплейса",
    "плашки на фото товара",
    "утп на карточке wildberries",
    "иконки для карточки",
    "оверлей на фото товара",
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Инфографика для карточки Wildberries и Ozon: гайд 2026",
  description: "Полный гайд по инфографике для карточек маркетплейсов: что писать, какие иконки, ошибки селлеров, AI-генерация.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-05-02",
  dateModified: "2026-05-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/infografika-dlya-marketpleysa",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Инфографика для маркетплейса", item: "https://aiviso.ru/blog/infografika-dlya-marketpleysa" },
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

export default function Infografika() {
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
          <span style={{ color: "#1f2937" }}>Инфографика</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Инфографика для карточки Wildberries и Ozon: что писать и как оформить
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 2 мая 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Карточка с инфографикой продаёт на 30-60% лучше карточки с одним «голым» фото. Это
          разница между «листают мимо» и «открывают и покупают». Разберём, что именно писать
          на инфографике, какие иконки использовать и как сделать её быстро.
        </p>

        <h2 style={styles.h2}>Что такое инфографика для маркетплейса</h2>
        <p style={styles.p}>
          Инфографика — это фото товара с наложенными поверх элементами: заголовок, ключевые УТП,
          иконки, цифры, размеры. Цель — за 1 секунду показать покупателю главное о товаре, пока
          он листает выдачу.
        </p>
        <p style={styles.p}>
          На Wildberries и Ozon инфографика особенно важна на <strong>главном фото</strong> и на
          <strong> 2-3 кадрах</strong> сразу за ним — именно их видят сначала.
        </p>

        <h2 style={styles.h2}>Что писать на инфографике: правило 3 + 4</h2>
        <p style={styles.p}>Стандартная структура:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>1 заголовок (3-7 слов)</strong> — что это и для кого. Например: «Столик для ванной из дуба»</li>
          <li style={styles.li}><strong>3-4 УТП (по 3-5 слов каждое)</strong> — главные преимущества. Иконка + короткий текст</li>
        </ul>
        <p style={styles.p}>Пример для столика на ванну:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>🌳 100% массив дуба</li>
          <li style={styles.li}>💧 Покрытие маслом Borma</li>
          <li style={styles.li}>📐 Подходит для ванн от 60 см</li>
          <li style={styles.li}>📦 Бесплатная доставка от 3000 ₽</li>
        </ul>

        <h2 style={styles.h2}>Какие УТП писать в зависимости от категории</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Что важно покупателю</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>Одежда</strong></td>
              <td style={styles.td}>Состав, посадка, размерная сетка, ткань, как стирать</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Мебель</strong></td>
              <td style={styles.td}>Материал, габариты, способ монтажа, нагрузка, гарантия</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Косметика</strong></td>
              <td style={styles.td}>Состав, для какого типа кожи, эффект, объём, эко-маркеры</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Еда / БАДы</strong></td>
              <td style={styles.td}>Состав, дозировка, страна, срок годности, маркеры (без сахара, ГМО, веган)</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Техника</strong></td>
              <td style={styles.td}>Ключевые характеристики, совместимость, гарантия, комплектация</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Дизайн: 5 правил</h2>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Контраст текста.</strong> Читается ли заголовок на превью 200×200 пикселей? Если нет — увеличить шрифт или добавить плашку.
          </li>
          <li style={styles.li}>
            <strong>Один акцентный цвет.</strong> Не больше одного-двух цветов брендинга. Иначе карточка превращается в радугу.
          </li>
          <li style={styles.li}>
            <strong>Иконка + 2-3 слова в УТП.</strong> Длинные предложения никто не читает на превью.
          </li>
          <li style={styles.li}>
            <strong>Не закрывай товар.</strong> УТП по краям, не поверх главных деталей. Покупатель должен видеть сам товар.
          </li>
          <li style={styles.li}>
            <strong>Один стиль на всю карточку.</strong> Если на главном фото плашки glass-morphism — на остальных тоже. Иначе карточка выглядит «лоскутно».
          </li>
        </ol>

        <h2 style={styles.h2}>Wildberries vs Ozon: разница в подходе</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Wildberries (3:4):</strong> вертикальный кадр, инфографика обычно сверху и снизу,
            центр оставляют чистым. Большой акцент на «крючок» — заголовок в верхней трети.
          </li>
          <li style={styles.li}>
            <strong>Ozon (1:1):</strong> квадрат, плотнее по композиции. Часто используют боковые
            пиллы с УТП, заголовок может быть и сверху, и сбоку.
          </li>
        </ul>
        <p style={styles.p}>
          Если делаешь карточку под обе площадки — стиль один (бренд), но раскладку лучше адаптировать.
          Aiviso генерирует обе версии автоматически в нужных размерах.
        </p>

        <h2 style={styles.h2}>5 ошибок селлеров с инфографикой</h2>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Слишком много текста.</strong> На превью 200×200 читаются только 5-7 слов крупным
            шрифтом. Длинные тексты не работают.
          </li>
          <li style={styles.li}>
            <strong>Эмодзи вместо иконок.</strong> Маркетплейсы их часто ломают, и они смотрятся
            непрофессионально. Лучше line-art иконки в стиле бренда.
          </li>
          <li style={styles.li}>
            <strong>Watermark с названием магазина.</strong> Запрещено правилами WB и Ozon (если бренд
            не зарегистрирован как товарный знак).
          </li>
          <li style={styles.li}>
            <strong>Цена на фото.</strong> Запрещено — маркетплейс сам показывает актуальную цену рядом
            с карточкой.
          </li>
          <li style={styles.li}>
            <strong>«Скидка 90%».</strong> Тоже запрещено как обман покупателя. Реальные акции — только через
            промо-инструменты площадки.
          </li>
        </ol>

        <h2 style={styles.h2}>Как сделать инфографику быстро</h2>
        <p style={styles.p}>Три способа:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Дизайнер.</strong> Стоит 500-2 000 ₽ за карточку. Долго: 1-3 дня.
          </li>
          <li style={styles.li}>
            <strong>Сделать самому в Canva / Figma.</strong> Бесплатно, но требует навыка и времени.
            Реальное время: 30-60 минут на одну карточку.
          </li>
          <li style={styles.li}>
            <strong>AI-генерация.</strong> Aiviso генерирует фото товара с уже наложенной инфографикой
            (заголовок + УТП-плашки + иконки) за 2 минуты. Стоит 30 ₽ за кадр.
          </li>
        </ol>

        <h2 style={styles.h2}>Как Aiviso делает инфографику</h2>
        <p style={styles.p}>
          В Aiviso можно выбрать тип контента <strong>«Карточка»</strong> вместо просто «Фото».
          Тогда AI:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Анализирует товар по фото и категории</li>
          <li style={styles.li}>Сам предлагает заголовок и 4 УТП на основе категории</li>
          <li style={styles.li}>Генерирует line-art иконки в едином стиле</li>
          <li style={styles.li}>Накладывает плашки на фото так, чтобы товар оставался виден</li>
          <li style={styles.li}>Делает 6 готовых стилей на выбор: «Чистая типографика», «Glass-карточка», «Большой акцент», «Огромный заголовок», «Маркетплейс-поп», «Тех-pill»</li>
        </ul>
        <p style={styles.p}>
          Все тексты можно отредактировать вручную — заголовок, УТП и иконки.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь сделать карточку с инфографикой за 2 минуты?</strong>{" "}
            <Link href="/auth" style={{ color: "#7c3aed", textDecoration: "underline" }}>Регистрация в Aiviso</Link>
            {" "}— 13 кредитов на старте бесплатно. Загрузи фото товара, выбери стиль карточки, получи готовый кадр с заголовком и УТП.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries</Link></li>
          <li><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов</Link></li>
          <li><Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>AI vs фотограф: что выгоднее</Link></li>
          <li><Link href="/#faq" style={{ color: "#7c3aed" }}>Частые вопросы селлеров</Link></li>
        </ul>
      </article>
    </>
  );
}
