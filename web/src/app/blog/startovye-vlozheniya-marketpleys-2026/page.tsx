import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Сколько нужно денег для старта на WB и Ozon 2026 — Aiviso",
  description: "Полный расчёт стартовых вложений для выхода на Wildberries и Ozon: гарантийный взнос, закупка, фото, маркировка, реклама. Реальные цифры 2026.",
  keywords: [
    "сколько нужно денег для wildberries",
    "стартовые вложения маркетплейс",
    "бюджет для старта на ozon",
    "сколько стоит выйти на wildberries",
    "минимальный бюджет для селлера",
    "вложения в маркетплейс 2026",
    "расчёт бюджета для wb ozon",
    "как начать продавать на wildberries",
  ],
  alternates: { canonical: "/blog/startovye-vlozheniya-marketpleys-2026" },
  openGraph: {
    title: "Сколько нужно денег для старта на Wildberries и Ozon: полный расчёт 2026",
    description: "Гарантийный взнос, закупка, фото, маркировка, реклама — считаем реальный бюджет для выхода на WB и Ozon в 2026.",
    url: "/blog/startovye-vlozheniya-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Сколько нужно денег для старта на Wildberries и Ozon: полный расчёт 2026",
  description: "Полный расчёт стартовых вложений: гарантийный взнос, закупка товара, фото, маркировка, логистика, реклама. Реальные цифры и кейсы.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-02",
  dateModified: "2026-09-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/startovye-vlozheniya-marketpleys-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Стартовые вложения 2026", item: "https://aiviso.ru/blog/startovye-vlozheniya-marketpleys-2026" },
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

export default function StartovyeVlozheniya() {
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
          <span style={{ color: "#1f2937" }}>Стартовые вложения 2026</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Сколько нужно денег для старта на Wildberries и Ozon: полный расчёт 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 2 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Один из самых частых вопросов новых селлеров — сколько нужно денег чтобы выйти на Wildberries или Ozon. Ответ «от 50 000 ₽» который гуляет в интернете — неполный. Мы собрали все реальные статьи затрат с конкретными цифрами 2026 года и двумя сценариями: минимальный старт и комфортный запуск.
        </p>

        <h2 style={styles.h2}>Из чего складываются стартовые вложения</h2>
        <p style={styles.p}>
          Есть шесть обязательных статей расходов при выходе на маркетплейс. Убрать ни одну нельзя — можно только оптимизировать каждую.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Регистрация и гарантийный взнос</strong> — платить маркетплейсу просто за право продавать</li>
          <li style={styles.li}><strong>Закупка товара</strong> — первая партия которую вы поставите на склад</li>
          <li style={styles.li}><strong>Фото и контент</strong> — карточки без нормального фото не продают</li>
          <li style={styles.li}><strong>Маркировка и упаковка</strong> — штрафы за нарушения съедят всю первую прибыль</li>
          <li style={styles.li}><strong>Логистика до склада</strong> — доставка первой партии от поставщика на склад WB/Ozon</li>
          <li style={styles.li}><strong>Первичная реклама</strong> — без рекламы на старте карточка не попадёт в поиск</li>
        </ul>

        <h2 style={styles.h2}>Статья 1: регистрация и гарантийный взнос</h2>

        <h3 style={styles.h3}>Wildberries</h3>
        <p style={styles.p}>
          Гарантийный взнос в 2026 году — <strong>10 000 ₽</strong>. Это разовый платёж при регистрации. Деньги не возвращаются. Регистрируетесь как ИП или ООО — разницы нет, сумма одна.
        </p>
        <p style={styles.p}>
          Открытие ИП: госпошлина через МФЦ — 800 ₽, онлайн через налоговую — бесплатно. Если оформляете через посредника — ещё 1 500–3 000 ₽.
        </p>

        <h3 style={styles.h3}>Ozon</h3>
        <p style={styles.p}>
          Gарантийного взноса нет, но Ozon требует оплатить первый взнос на баланс для подключения к схеме FBO — <strong>от 22 650 ₽</strong> (минимальная первая поставка по тарифу). Если работаете по FBS (со своего склада), старт без взноса.
        </p>

        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0" }}>
          <strong style={{ color: "#7c3aed" }}>Итого регистрация:</strong>
          <ul style={{ ...styles.ul, marginTop: 8 }}>
            <li style={styles.li}>WB (FBO): <strong>10 000 ₽</strong> + ИП</li>
            <li style={styles.li}>Ozon (FBO): <strong>22 650 ₽</strong></li>
            <li style={styles.li}>Ozon (FBS): <strong>0 ₽</strong></li>
          </ul>
        </div>

        <h2 style={styles.h2}>Статья 2: закупка первой партии</h2>
        <p style={styles.p}>
          Самая крупная статья расходов. Размер партии зависит от категории и схемы логистики.
        </p>

        <h3 style={styles.h3}>Минимальная партия по схемам</h3>
        <p style={styles.p}>
          При FBO маркетплейс требует определённый объём поставки — слишком маленькая партия не принесёт достаточного оборота и вы будете платить за хранение. Практика показывает:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Одежда и обувь:</strong> 50–100 единиц стартовой партии. При закупочной цене 300–500 ₽ это 15 000–50 000 ₽</li>
          <li style={styles.li}><strong>Мелкая электроника (аксессуары):</strong> 30–50 штук. 5 000–20 000 ₽</li>
          <li style={styles.li}><strong>Косметика и уход:</strong> 50–100 единиц. 10 000–40 000 ₽</li>
          <li style={styles.li}><strong>Товары для дома и декор:</strong> 20–50 единиц. 15 000–60 000 ₽</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «Аксессуары для телефона» стартовал с 35 единиц по закупке 180 ₽ — итого 6 300 ₽ на товар. За первый месяц продал 28 штук по 390 ₽, маржа вышла 73%. Но с такой маленькой партией нужен FBS — иначе с WB за хранение уйдёт половина прибыли.
        </p>

        <h3 style={styles.h3}>Ориентир по бюджету</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Сценарий</th>
              <th style={styles.th}>Закупка на товар</th>
              <th style={styles.th}>Примечание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Минимальный старт (FBS)</td>
              <td style={styles.td}>6 000 – 20 000 ₽</td>
              <td style={styles.td}>Мелкий товар, хранение дома, 20–50 ед.</td>
            </tr>
            <tr>
              <td style={styles.td}>Комфортный старт (FBO)</td>
              <td style={styles.tdAccent}><strong>40 000 – 100 000 ₽</strong></td>
              <td style={styles.tdAccent}>50–100 ед., есть запас для пополнения</td>
            </tr>
            <tr>
              <td style={styles.td}>Серьёзный запуск (несколько SKU)</td>
              <td style={styles.td}>150 000 – 300 000 ₽</td>
              <td style={styles.td}>3–5 позиций, полноценная линейка</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Статья 3: фото и контент для карточек</h2>
        <p style={styles.p}>
          Здесь у большинства новых селлеров уходит либо слишком много (студия), либо слишком мало (телефон в ванной) — оба варианта ошибка.
        </p>

        <h3 style={styles.h3}>Сколько стоит фотостудия</h3>
        <p style={styles.p}>
          Предметная съёмка одного товара (8–10 кадров на белом фоне): <strong>2 000 – 8 000 ₽</strong>. Если нужен lifestyle или модель — 10 000–25 000 ₽ за товар. На партию из 5 SKU выходит 10 000–40 000 ₽ только на фото.
        </p>

        <h3 style={styles.h3}>AI-генерация: реальные цифры</h3>
        <p style={styles.p}>
          <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> генерирует карточку с фоном, lifestyle-сценой и инфографикой за 30–50 ₽ за кадр. 5 SKU × 8 кадров = 40 кадров = <strong>1 200–2 000 ₽</strong>. Разница с студией — в 10–20 раз.
        </p>
        <p style={styles.p}>
          Один из наших клиентов, продающий декоративные подушки в Краснодаре, снял исходник на телефон (белый фон, хорошее освещение), дальше через Aiviso сгенерировал 6 lifestyle-сцен в интерьере. Стоимость — 310 ₽ на товар. CTR карточки — 4.1%, конверсия — 5.8%. Для сравнения: его конкурент с профессиональными фото CTR 2.4%, конверсия — 4.3%.
        </p>

        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0" }}>
          <strong style={{ color: "#7c3aed" }}>Бюджет на фото (5 SKU):</strong>
          <ul style={{ ...styles.ul, marginTop: 8 }}>
            <li style={styles.li}>Студия: 10 000 – 40 000 ₽</li>
            <li style={styles.li}>AI-генерация (Aiviso): <strong>1 200 – 2 000 ₽</strong></li>
          </ul>
        </div>

        <h2 style={styles.h2}>Статья 4: маркировка и упаковка</h2>
        <p style={styles.p}>
          Штрафы WB за нарушение упаковки начинаются от 1 000 ₽ за единицу. Это не та статья расходов, на которой стоит экономить.
        </p>

        <h3 style={styles.h3}>Что нужно купить</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Термопринтер</strong> для печати штрихкодов: 2 500–5 000 ₽ (Xprinter XP-420B — самый популярный, 3 200 ₽)</li>
          <li style={styles.li}><strong>Этикетки</strong> (рулон 500 шт.): 300–500 ₽</li>
          <li style={styles.li}><strong>Полипропиленовые пакеты</strong> или картонные коробки под товар: 1 000–3 000 ₽ на первую партию</li>
          <li style={styles.li}><strong>Стретч-плёнка</strong> для паллет (если FBO): 400–600 ₽</li>
          <li style={styles.li}>Честный знак (если требуется для вашей категории): 50–600 ₽ на единицу</li>
        </ul>

        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0" }}>
          <strong style={{ color: "#7c3aed" }}>Бюджет на маркировку и упаковку:</strong>
          <p style={{ margin: "8px 0 0", color: "#374151" }}>Первоначальное оборудование: <strong>4 000–9 000 ₽</strong>. Расходники на первую партию: 1 000–4 000 ₽.</p>
        </div>

        <h2 style={styles.h2}>Статья 5: логистика до склада</h2>
        <p style={styles.p}>
          Стоимость доставки первой поставки зависит от схемы работы, размера партии и региона.
        </p>

        <h3 style={styles.h3}>FBS (со своего склада)</h3>
        <p style={styles.p}>
          Вы сами доставляете каждый заказ в ПВЗ или сортировочный центр. Стоимость доставки одного заказа — 60–120 ₽ (Почта России, СДЭК). Плюс ваше время. Для начала это нормально, но при объёме от 20 заказов в день становится узким местом.
        </p>

        <h3 style={styles.h3}>FBO (со склада маркетплейса)</h3>
        <p style={styles.p}>
          Нужно доставить партию на склад WB или Ozon. Если вы в Москве и везёте до Подольска — 1 500–3 000 ₽ за газель. Если из регионов — 5 000–15 000 ₽ через транспортную компанию (Деловые Линии, ПЭК и т.д.). При объёме более 50 кг выгоднее использовать транспортную компанию, а не отдельного водителя.
        </p>

        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0" }}>
          <strong style={{ color: "#7c3aed" }}>Бюджет на логистику первой поставки:</strong>
          <ul style={{ ...styles.ul, marginTop: 8 }}>
            <li style={styles.li}>FBS: 0 ₽ (везёте заказы сами в точку приёма)</li>
            <li style={styles.li}>FBO (Москва): <strong>1 500 – 5 000 ₽</strong></li>
            <li style={styles.li}>FBO (регионы): <strong>5 000 – 15 000 ₽</strong></li>
          </ul>
        </div>

        <h2 style={styles.h2}>Статья 6: первичная реклама</h2>
        <p style={styles.p}>
          Без рекламного бюджета на старте у новой карточки практически нет шансов попасть в органику — алгоритмы WB и Ozon отдают приоритет карточкам с историей продаж. Первые 2–4 недели реклама критична.
        </p>

        <h3 style={styles.h3}>Wildberries</h3>
        <p style={styles.p}>
          Автоматическая кампания с бюджетом 300 ₽/день даёт первые показы и продажи. Минимальный бюджет на первый месяц: <strong>9 000 ₽</strong> (300 ₽/день × 30 дней). Реалистичный бюджет для заметного результата — 15 000–30 000 ₽ в первый месяц.
        </p>

        <h3 style={styles.h3}>Ozon</h3>
        <p style={styles.p}>
          Трафаретная реклама от 250 ₽/день. На старте хватает 500–1 000 ₽/день. Минимальный месяц: <strong>7 500 ₽</strong>. Для уверенного старта — 15 000–20 000 ₽.
        </p>
        <p style={styles.p}>
          Важно: реклама при плохом фото = слитый бюджет. Сначала сделайте нормальные карточки, потом включайте рекламу. Порядок принципиален.
        </p>

        <h2 style={styles.h2}>Итоговая таблица: два сценария</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Статья затрат</th>
              <th style={styles.th}>Минимальный старт</th>
              <th style={styles.th}>Комфортный запуск</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Регистрация + гарантийный взнос (WB)</td>
              <td style={styles.td}>10 000 ₽</td>
              <td style={styles.td}>10 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Закупка товара</td>
              <td style={styles.td}>15 000 ₽</td>
              <td style={styles.td}>60 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Фото карточек (AI-генерация, 3–5 SKU)</td>
              <td style={styles.tdAccent}><strong>800 ₽</strong></td>
              <td style={styles.tdAccent}><strong>2 000 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Маркировка и упаковка</td>
              <td style={styles.td}>3 000 ₽</td>
              <td style={styles.td}>8 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика до склада</td>
              <td style={styles.td}>0 ₽ (FBS)</td>
              <td style={styles.td}>5 000 ₽ (FBO)</td>
            </tr>
            <tr>
              <td style={styles.td}>Реклама (1-й месяц)</td>
              <td style={styles.td}>9 000 ₽</td>
              <td style={styles.td}>20 000 ₽</td>
            </tr>
            <tr>
              <td style={{ ...styles.td, fontWeight: 700 }}>ИТОГО</td>
              <td style={{ ...styles.td, fontWeight: 700, color: "#059669" }}>~37 800 ₽</td>
              <td style={{ ...styles.td, fontWeight: 700, color: "#7c3aed" }}>~105 000 ₽</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Обратите внимание на строку с фото: при использовании AI-генерации через <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> вместо студии экономия на одном пункте составляет 10 000–38 000 ₽. Это меняет минимальный порог входа кардинально.
        </p>

        <h2 style={styles.h2}>Что нужно добавить в бюджет в первые 3 месяца</h2>
        <p style={styles.p}>
          После стартовых вложений будут текущие расходы. Планируйте их заранее:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Пополнение товарного запаса:</strong> рассчитывайте на 2–3 оборота в первый квартал. Если первая партия закупки 15 000 ₽ — закладывайте ещё 30 000–45 000 ₽ на пополнение</li>
          <li style={styles.li}><strong>Реклама (2-й и 3-й месяц):</strong> 15 000–25 000 ₽/мес</li>
          <li style={styles.li}><strong>Комиссия маркетплейса:</strong> 12–25% от каждой продажи — это уже включено в расчёт маржи, не дополнительные расходы</li>
          <li style={styles.li}><strong>Налоги (УСН 6%):</strong> 6% от выручки ежеквартально</li>
          <li style={styles.li}><strong>Возвраты и штрафы:</strong> закладывайте 3–7% от оборота как буфер</li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки при расчёте бюджета</h2>

        <h3 style={styles.h3}>Ошибка 1: забывают про оборотный капитал</h3>
        <p style={styles.p}>
          Маркетплейс выплачивает деньги раз в неделю (WB) или дважды в месяц (Ozon). Если товар продаётся быстрее чем приходят выплаты — вам нужен запас для следующей закупки. Минимум 30–50% от первоначальной закупки должны быть доступны как оборотный капитал.
        </p>

        <h3 style={styles.h3}>Ошибка 2: переплачивают за фото на старте</h3>
        <p style={styles.p}>
          Тратить 25 000–40 000 ₽ на профессиональную съёмку при закупке на 15 000 ₽ — нерентабельно математически. На старте достаточно чистых предметных фото + AI-генерация сцен. Студию можно подключить позже, когда уже понятно что товар продаётся.
        </p>

        <h3 style={styles.h3}>Ошибка 3: недооценивают стоимость возвратов</h3>
        <p style={styles.p}>
          WB берёт с продавца стоимость обратной логистики при возврате — от 50 до 150 ₽. При проценте выкупа 60% (норма для одежды) это 4–6 ₽ на каждые 10 ₽ выручки. Считайте возвраты в юнит-экономику до старта.
        </p>

        <h3 style={styles.h3}>Ошибка 4: один товар, одна карточка</h3>
        <p style={styles.p}>
          Новые продавцы часто стартуют с одним SKU. Это рискованно: если алгоритм не поднял карточку или конкурент скопировал — бизнес стоит. Лучше 3–5 позиций в одной нише, даже с меньшим запасом каждой.
        </p>

        <h2 style={styles.h2}>Чек-лист: готов ли ваш бюджет к старту</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Гарантийный взнос или минимальный депозит маркетплейса — оплачен</li>
          <li style={styles.li}>Закупка товара — минимум 20–30 единиц в наличии</li>
          <li style={styles.li}>Фото карточек — готовы до подачи на склад (не после)</li>
          <li style={styles.li}>Термопринтер и расходники — куплены и протестированы</li>
          <li style={styles.li}>Логистика до склада — договорились с перевозчиком или знаете ближайший ПВЗ</li>
          <li style={styles.li}>Рекламный бюджет первого месяца — выделен отдельно, не трогаете до запуска</li>
          <li style={styles.li}>Оборотный капитал (30–50% от закупки) — зарезервирован на пополнение</li>
          <li style={styles.li}>Буфер на возвраты и штрафы (3–7% от планируемого оборота) — учтён</li>
        </ul>

        <h2 style={styles.h2}>Реальные кейсы с цифрами</h2>

        <h3 style={styles.h3}>Кейс 1: минимальный старт на WB (FBS)</h3>
        <p style={styles.p}>
          Продавец из Екатеринбурга — чехлы для телефонов. Стартовый бюджет: 38 500 ₽. Из них: взнос WB 10 000 ₽, закупка 150 чехлов по 70 ₽ = 10 500 ₽, фото через Aiviso 950 ₽ (5 SKU), упаковка и принтер 4 800 ₽, реклама 1-й месяц 12 000 ₽, буфер на возвраты 250 ₽. Через 60 дней оборот 87 000 ₽, чистая прибыль 22 000 ₽. Начал пополнять следующую партию из прибыли.
        </p>

        <h3 style={styles.h3}>Кейс 2: комфортный запуск на Ozon (FBO)</h3>
        <p style={styles.p}>
          Продавец домашнего декора из Москвы. Бюджет: 112 000 ₽. Из них: депозит Ozon 22 650 ₽, товар (50 позиций × 1 200 ₽) 60 000 ₽, студийная предметка 8 000 ₽ + AI-lifestyle для 5 SKU 1 800 ₽, упаковка 7 000 ₽, логистика до склада 4 500 ₽, реклама 18 000 ₽. Через 90 дней вышел на оборот 340 000 ₽/мес, маржа 28%.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Сэкономьте на фото — это самая быстрая оптимизация бюджета.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— 13 кредитов бесплатно на старте. Загрузите фото товара и получите готовую карточку в формате WB и Ozon за 2 минуты. Без студии, без ожидания, без переплаты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <li><Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>Юнит-экономика для маркетплейса: формула, таблица и типичные ошибки</Link></li>
          <li><Link href="/blog/kak-otkryt-magazin-wildberries-2026" style={{ color: "#7c3aed" }}>Как открыть магазин на Wildberries в 2026: пошаговая инструкция</Link></li>
          <li><Link href="/blog/fbo-vs-fbs-wildberries-ozon" style={{ color: "#7c3aed" }}>FBO или FBS: что выбрать на Wildberries и Ozon в 2026</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
