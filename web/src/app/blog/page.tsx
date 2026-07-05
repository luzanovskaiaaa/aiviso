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
    slug: "prodvizhenie-kartochki-bez-reklamy",
    title: "Как продвигать карточку товара без рекламы на WB и Ozon в 2026",
    excerpt:
      "6 органических рычагов роста: SEO, фото, отзывы, остатки, акции и конверсия. Чек-лист из 18 пунктов и реальные кейсы — как выйти в топ без рекламного бюджета.",
    date: "2026-07-05",
  },
  {
    slug: "video-kartochki-wb-ozon",
    title: "Видео для карточки товара на Wildberries и Ozon: требования и чек-лист 2026",
    excerpt:
      "Форматы, длина, советы по съёмке без бюджета и чек-лист из 18 пунктов перед загрузкой. Кейс: +23% конверсии после добавления 30-секундного ролика.",
    date: "2026-07-04",
  },
  {
    slug: "fbo-vs-fbs-wildberries-ozon",
    title: "FBO или FBS: что выбрать на Wildberries и Ozon в 2026",
    excerpt:
      "Сравнение схем поставки по логистике, хранению, позициям в поиске и рискам заморозки стока. Чек-лист из 12 критериев и реальные кейсы по категориям.",
    date: "2026-07-03",
  },
  {
    slug: "reklama-na-wildberries",
    title: "Реклама на Wildberries в 2026: пошаговый гайд для селлеров",
    excerpt:
      "Типы рекламных кампаний WB, как поставить ставку, не слить бюджет и считать ДРР. Чек-лист из 15 пунктов перед запуском и реальные кейсы по окупаемости.",
    date: "2026-07-02",
  },
  {
    slug: "cena-tovara-wildberries-ozon",
    title: "Как установить цену товара на Wildberries и Ozon в 2026",
    excerpt:
      "Формула юнит-экономики для маркетплейса, таблица комиссий по категориям, реклама в цене и чек-лист из 14 пунктов перед установкой цены. Реальные кейсы: почему «как у конкурента» — плохая стратегия.",
    date: "2026-07-01",
  },
  {
    slug: "vozvrat-tovarov-foto",
    title: "Возвраты на Wildberries и Ozon: при чём здесь фото товара",
    excerpt:
      "Несовпадение цвета, размера и деталей с фото — главная причина возвратов. Разбираем цифры, типичные ошибки и чек-лист для снижения процента возврата. Кейс: возврат с 41% до 27%.",
    date: "2026-06-30",
  },
  {
    slug: "pervye-otzyvy-marketpleis",
    title: "Как получить первые отзывы на Wildberries и Ozon в 2026",
    excerpt:
      "Баллы за отзыв, вкладыши в упаковку, поддержка маркетплейса — разбираем легальные способы собрать первые 10–20 отзывов без риска бана. Чек-лист и реальные кейсы.",
    date: "2026-06-29",
  },
  {
    slug: "upakovka-tovara-marketpleis",
    title: "Упаковка товара для Wildberries и Ozon: требования, штрафы и чек-лист 2026",
    excerpt:
      "За что штрафуют на WB и Ozon за упаковку, как правильно наносить штрихкод и чек-лист из 18 пунктов перед отправкой. Реальные кейсы и конкретные суммы штрафов.",
    date: "2026-06-28",
  },
  {
    slug: "sezonnye-tovary-kalendar-2026",
    title: "Сезонные товары на маркетплейсах: календарь продаж 2026",
    excerpt:
      "Когда заходить в сезон на WB и Ozon, за сколько дней готовить карточки и фото. Календарь пиков по месяцам и чек-лист из 12 шагов для подготовки к каждому сезону.",
    date: "2026-06-27",
  },
  {
    slug: "nizkokonkurentnye-kategorii-ozon-2026",
    title: "ТОП-12 низкоконкурентных категорий Ozon в 2026",
    excerpt:
      "Какие ниши на Ozon с малым числом продавцов и живым спросом. Средняя выручка, порог входа, чек-лист из 8 критериев для выбора свободной ниши.",
    date: "2026-06-26",
  },
  {
    slug: "analiz-konkurentov-wildberries-ozon",
    title: "Как анализировать конкурентов на Wildberries и Ozon: пошаговый гайд 2026",
    excerpt:
      "Чек-лист из 18 пунктов для разбора карточек конкурентов: фото, ключи, цена, отзывы. Инструменты и план действий на неделю чтобы выйти в ТОП.",
    date: "2026-06-25",
  },
  {
    slug: "kartochka-luchshe-konkurentov",
    title: "Как сделать карточку лучше конкурентов на WB и Ozon",
    excerpt:
      "Пошаговый анализ карточек конкурентов по фото, SEO, отзывам и цене. Чек-лист из 20 пунктов для обгона ТОПа на Wildberries и Ozon.",
    date: "2026-06-24",
  },
  {
    slug: "wb-vs-ozon-foto-trebovaniya",
    title: "Чем отличается фото для WB и Ozon: требования к карточке товара в 2026",
    excerpt:
      "Размеры, фон, количество кадров, инфографика — всё что отличает Wildberries от Ozon. Чек-лист из 16 пунктов и схема подготовки одного фото сразу для двух площадок.",
    date: "2026-06-23",
  },
  {
    slug: "kak-fotografirovat-odezhdu",
    title: "Как фотографировать одежду для маркетплейсов в 2026: пошаговый гайд",
    excerpt:
      "На модели, Ghost Mannequin или flat lay — что выбрать и когда. Освещение, ракурсы, обработка и чек-лист из 15 пунктов перед загрузкой фото.",
    date: "2026-06-22",
  },
  {
    slug: "konversiya-kartochki-cheklist",
    title: "Как поднять конверсию карточки товара на 30%: чек-лист из 25 пунктов",
    excerpt:
      "Фото, заголовок, характеристики, инфографика и цена — разбираем каждый элемент карточки на WB и Ozon с реальными кейсами и конкретными цифрами.",
    date: "2026-06-21",
  },
  {
    slug: "opisanie-tovara-wb",
    title: "Как написать описание товара для Wildberries: полное руководство 2026",
    excerpt:
      "Структура, ключевые слова, 7 типичных ошибок и чек-лист из 14 пунктов. Реальные кейсы: как правильное описание подняло позиции с 47 на 8 и удвоило продажи.",
    date: "2026-06-20",
  },
  {
    slug: "psihologiya-cveta-kartochki",
    title: "Психология цвета на карточке товара: как поднять CTR на маркетплейсе",
    excerpt:
      "Какой фон выбрать для одежды, косметики и электроники. Разбор цветов по категориям, частые ошибки и чек-лист из 8 пунктов для проверки карточки.",
    date: "2026-06-19",
  },
  {
    slug: "seo-kartochki-wildberries",
    title: "SEO для карточки Wildberries в 2026: пошаговый гайд",
    excerpt:
      "Ключевые слова, заголовок, характеристики, описание и влияние фото на позиции. Чек-лист из 30 пунктов для роста органического трафика.",
    date: "2026-06-18",
  },
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
