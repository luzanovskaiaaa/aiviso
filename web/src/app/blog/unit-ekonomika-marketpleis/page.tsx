import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Юнит-экономика для маркетплейса: формула и таблица — Aiviso",
  description: "Как рассчитать юнит-экономику для Wildberries и Ozon: формула, таблица, типичные ошибки. Реальные кейсы селлеров с цифрами и чек-лист из 12 пунктов.",
  keywords: [
    "юнит экономика маркетплейс",
    "расчёт маржи wildberries",
    "юнит экономика ozon",
    "как посчитать прибыль wildberries",
    "маржа на маркетплейсе",
    "формула рентабельности wb",
    "себестоимость товара маркетплейс",
    "расчёт комиссии ozon",
    "юнит экономика формула",
    "прибыль на wildberries расчёт",
  ],
  alternates: { canonical: "/blog/unit-ekonomika-marketpleis" },
  openGraph: {
    title: "Юнит-экономика для маркетплейса: формула и таблица 2026",
    description: "Как рассчитать прибыль с одного товара на WB и Ozon. Формула, таблица, реальные кейсы и 12 типичных ошибок.",
    url: "/blog/unit-ekonomika-marketpleis",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Юнит-экономика для маркетплейса: формула, таблица и типичные ошибки",
  description: "Как рассчитать юнит-экономику для Wildberries и Ozon: формула, таблица, реальные кейсы с цифрами и чек-лист из 12 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/unit-ekonomika-marketpleis",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Юнит-экономика для маркетплейса", item: "https://aiviso.ru/blog/unit-ekonomika-marketpleis" },
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
  tdRed: { padding: "10px 12px", border: "1px solid #fecaca", background: "#fff1f2" },
};

export default function UnitEkonomika() {
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
          <span style={{ color: "#1f2937" }}>Юнит-экономика для маркетплейса</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Юнит-экономика для маркетплейса: формула, таблица и типичные ошибки
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>16 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство новых селлеров на Wildberries и Ozon смотрят на закупочную цену и розничную — и считают, что разница и есть прибыль. Это главная ошибка: до 40% новичков уходят в минус уже на первых поставках, не посчитав юнит-экономику. Разбираем формулу, которую нужно знать до того, как закупить товар.
        </p>

        <h2 style={styles.h2}>Что такое юнит-экономика и зачем она нужна</h2>
        <p style={styles.p}>
          Юнит-экономика — это расчёт финансового результата с одной единицы товара (одного «юнита»). Цель: понять, сколько вы зарабатываете с каждой продажи после всех расходов. Без этого расчёта невозможно нормально масштабироваться: непонятно, какие товары тянуть вверх, какие выводить, где рекламный бюджет имеет смысл.
        </p>
        <p style={styles.p}>
          На маркетплейсах юнит-экономика сложнее, чем в обычной рознице, потому что расходов больше: комиссия платформы, логистика до склада, хранение, возвраты, реклама. Все эти статьи нужно учесть до закупки.
        </p>

        <h2 style={styles.h2}>Основная формула юнит-экономики</h2>
        <p style={styles.p}>
          Базовая формула прибыли с одного товара выглядит так:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "20px 24px", margin: "16px 0", fontFamily: "monospace", fontSize: 15, lineHeight: 1.8 }}>
          <strong>Прибыль = Цена продажи − Себестоимость − Комиссия МП − Логистика − Хранение − Реклама − Возвраты</strong>
        </div>
        <p style={styles.p}>
          Теперь разберём каждую строку.
        </p>

        <h3 style={styles.h3}>Цена продажи</h3>
        <p style={styles.p}>
          Это та цена, которую платит покупатель. Важный нюанс: маркетплейсы постоянно давят на участие в акциях. При расчёте берите не «обычную» цену, а реальную цену продажи с учётом скидок и акций. На WB большинство товаров в категории fashion продаётся по цене ниже RRP на 30–50% из-за постоянных акций. Если ваш товар стоит 1 500 ₽, а в сезон акции цена падает до 900 ₽ — считайте от 900 ₽.
        </p>

        <h3 style={styles.h3}>Себестоимость</h3>
        <p style={styles.p}>
          Сюда входят: закупочная цена + доставка до вашего склада + упаковка + маркировка (ЧЗ, штрихкоды, этикетки). Не забывайте про курсовые риски, если закупаетесь в Китае.
        </p>

        <h3 style={styles.h3}>Комиссия маркетплейса</h3>
        <p style={styles.p}>
          WB берёт 15–25% в зависимости от категории. Ozon — 4–15%, плюс эквайринг 1,5%. Актуальные комиссии смотрите в личном кабинете — они меняются несколько раз в год.
        </p>

        <h3 style={styles.h3}>Логистика</h3>
        <p style={styles.p}>
          На FBO это поставка на склад МП + доставка покупателю (берёт на себя МП, но включает в комиссию). На FBS добавляется стоимость передачи заказа в ПВЗ или курьеру. Для WB логистика FBO в 2026 году — около 60–120 ₽ за единицу (зависит от веса и габаритов). На Ozon — от 50 ₽.
        </p>

        <h3 style={styles.h3}>Хранение</h3>
        <p style={styles.p}>
          WB считает хранение по дням: если товар лежит на складе 30+ дней — начинаются платные дни. Стоимость зависит от объёма. Типичная ошибка — закупить 500 единиц, они не продаются, и через 2 месяца расходы на хранение съедают остатки маржи.
        </p>

        <h2 style={styles.h2}>Пример расчёта: кружка с принтом на WB</h2>
        <p style={styles.p}>
          Разберём реальный кейс одного нашего пользователя: кружки с принтом, категория «Посуда», Wildberries, FBO.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Статья расходов</th>
              <th style={styles.th}>Сумма, ₽</th>
              <th style={styles.th}>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tdAccent}><strong>Цена продажи (факт с акциями)</strong></td>
              <td style={styles.tdAccent}><strong>680</strong></td>
              <td style={styles.tdAccent}>Прайс 900, с акцией −24%</td>
            </tr>
            <tr>
              <td style={styles.td}>Закупочная цена</td>
              <td style={styles.td}>−210</td>
              <td style={styles.td}>Китай + доставка</td>
            </tr>
            <tr>
              <td style={styles.td}>Упаковка, маркировка</td>
              <td style={styles.td}>−25</td>
              <td style={styles.td}>Коробка + этикетка</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия WB (20%)</td>
              <td style={styles.td}>−136</td>
              <td style={styles.td}>20% от 680</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика FBO</td>
              <td style={styles.td}>−89</td>
              <td style={styles.td}>80 ₽ доставка + 9 ₽ хранение</td>
            </tr>
            <tr>
              <td style={styles.td}>Реклама (ДРР 12%)</td>
              <td style={styles.td}>−82</td>
              <td style={styles.td}>12% от 680</td>
            </tr>
            <tr>
              <td style={styles.td}>Возвраты (8%)</td>
              <td style={styles.td}>−24</td>
              <td style={styles.td}>8% товаров возвращаются</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>Прибыль с единицы</strong></td>
              <td style={styles.tdAccent}><strong>114 ₽</strong></td>
              <td style={styles.tdAccent}>Маржинальность 16.8%</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          16.8% — это нормальная маржинальность для бытовых товаров на WB. При обороте 200 000 ₽/мес это 33 600 ₽ прибыли. До расчёта юнит-экономики у продавца была ментальная модель «купил за 210, продал за 680 — зарабатываю 470 с кружки». Разница в ожиданиях и реальности — в 4 раза.
        </p>

        <h2 style={styles.h2}>Минимально допустимая маржинальность на маркетплейсах</h2>
        <p style={styles.p}>
          Ориентиры для входа в нишу:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Менее 10% — красная зона.</strong> Любое изменение (рост комиссии, акция, скачок курса) уводит в минус. Не входить.</li>
          <li style={styles.li}><strong>10–20% — жёлтая зона.</strong> Можно работать при стабильном обороте, но нет подушки. Нужна постоянная оптимизация.</li>
          <li style={styles.li}><strong>20–35% — нормально.</strong> Есть место для рекламы и масштабирования.</li>
          <li style={styles.li}><strong>35%+ — отличный результат</strong> для маркетплейса. Либо сильный бренд, либо уникальный товар без прямых конкурентов.</li>
        </ul>

        <h2 style={styles.h2}>Как считать возвраты в юнит-экономике</h2>
        <p style={styles.p}>
          Возврат — это не просто потерянная продажа. Считается сложнее:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар возвращается с потерей товарного вида (в одежде это 30–50% позиций) — вы теряете его полностью</li>
          <li style={styles.li}>Логистика в обе стороны — за счёт продавца</li>
          <li style={styles.li}>Комиссию WB не возвращает, только частично</li>
        </ul>
        <p style={styles.p}>
          Формула влияния возвратов: при проценте возврата 15% и стоимости товара 1 000 ₽ — реальные потери около 180–220 ₽ на каждые 1 000 ₽ оборота. Именно поэтому качество фото напрямую влияет на экономику: чем точнее фото передаёт цвет, текстуру и размер — тем меньше разочарованных покупателей и ниже процент возвратов.
        </p>
        <p style={styles.p}>
          Один из пользователей Aiviso в категории одежды снизил процент возврата с 38% до 21% за счёт точной цветопередачи в карточке — это добавило 8 п.п. к марже без изменения цены и закупки.
        </p>

        <h2 style={styles.h2}>Чек-лист: 12 строк которые нужно посчитать до закупки</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Закупочная цена (включая доставку от поставщика)</li>
          <li style={styles.li}>Упаковка (пакет/коробка) + маркировка (этикетки, ЧЗ если нужен)</li>
          <li style={styles.li}>Реальная цена продажи с учётом акций МП (не прайс, а факт)</li>
          <li style={styles.li}>Комиссия маркетплейса для вашей категории (смотреть в ЛК, не гуглить)</li>
          <li style={styles.li}>Логистика до покупателя (FBO: смотреть тариф по весу/объёму)</li>
          <li style={styles.li}>Стоимость поставки на склад МП</li>
          <li style={styles.li}>Стоимость хранения (считать из расчёта оборачиваемости)</li>
          <li style={styles.li}>Рекламный бюджет (ДРР) — закладывать реалистично, минимум 8–12%</li>
          <li style={styles.li}>Процент возвратов (смотреть статистику по категории, если нет своей)</li>
          <li style={styles.li}>Брак и потеря товарного вида при возврате (5–15% от возвратов)</li>
          <li style={styles.li}>Налоги (УСН 6% от выручки или 15% от прибыли — не забывать)</li>
          <li style={styles.li}>Итоговая маржа — если ниже 15%, пересматривать закупочную цену или нишу</li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки в расчёте юнит-экономики</h2>

        <h3 style={styles.h3}>Ошибка 1: считать от прайсовой цены, а не от реальной</h3>
        <p style={styles.p}>
          На WB и Ozon постоянно идут акции. Если вы не участвуете — теряете позиции в выдаче. Реальная средняя цена продажи почти всегда ниже прайса на 15–30%. Считайте от неё.
        </p>

        <h3 style={styles.h3}>Ошибка 2: не учитывать НДС и налоги</h3>
        <p style={styles.p}>
          Маркетплейс платит вам деньги уже с удержанием комиссии, но налоги с оборота считаются с полной суммы, которую заплатил покупатель. На УСН 6% — это 6% от 680 ₽ в нашем примере, а не от суммы, которую перевёл WB.
        </p>

        <h3 style={styles.h3}>Ошибка 3: закладывать 0% на рекламу</h3>
        <p style={styles.p}>
          Новые карточки без рекламы не продаются. Это факт. Планировать нулевой рекламный бюджет — значит не получить данные по конверсии и рейтингу. В первые 2–3 месяца на рекламу нормально уходит 15–25% от выручки.
        </p>

        <h3 style={styles.h3}>Ошибка 4: игнорировать оборачиваемость</h3>
        <p style={styles.p}>
          Деньги, вложенные в закупку, должны вернуться. Если товар продаётся 90 дней — оборачиваемость 4 раза в год. При марже 20% годовая доходность на капитал будет около 80% — это хорошо. Но если продаётся 180 дней — уже 40%. При марже 10% и оборачиваемости 2× — доходность 20%, что ниже инфляции. Включайте это в расчёт.
        </p>

        <h2 style={styles.h2}>Инструменты для расчёта юнит-экономики</h2>
        <p style={styles.p}>
          Что использует большинство реальных селлеров:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Google Sheets / Excel</strong> — самый распространённый вариант. Минус: надо самому сделать шаблон и каждый раз обновлять тарифы вручную.</li>
          <li style={styles.li}><strong>Встроенный калькулятор WB Partners</strong> — есть в личном кабинете. Считает базово, не учитывает рекламу и возвраты.</li>
          <li style={styles.li}><strong>Калькулятор Ozon Seller</strong> — аналогично, только базовые расходы.</li>
          <li style={styles.li}><strong>Специализированные сервисы</strong> (Mpstat, Moneyplace, Анабар) — дают данные по конкурентам и статистику продаж. Помогают оценить реальный спрос до входа в нишу.</li>
        </ul>
        <p style={styles.p}>
          Оптимальный стек: данные о конкурентах из аналитики + самодельная таблица расчёта маржи + контроль исполнения в личном кабинете.
        </p>

        <h2 style={styles.h2}>Как фото влияет на юнит-экономику</h2>
        <p style={styles.p}>
          Фото — не отдельная статья расходов в формуле. Оно влияет на несколько строк одновременно:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>CTR в поиске</strong> — плохое фото снижает клики. Меньше трафика = выше ДРР чтобы получить те же продажи = ниже маржа.</li>
          <li style={styles.li}><strong>Конверсия в заказ</strong> — качественное фото с несколькими ракурсами поднимает конверсию на 15–30% по нашим данным. Это прямо снижает стоимость одной продажи.</li>
          <li style={styles.li}><strong>Процент возврата</strong> — точное фото снижает разочарование при получении. Возврат стоит денег.</li>
        </ul>
        <p style={styles.p}>
          Продавец в категории «Аксессуары» пересделал карточку: заменил 3 телефонных фото на 8 AI-сгенерированных изображений в разных сценах. Конверсия выросла с 2.1% до 3.4%, возвраты упали с 19% до 11%. В результате маржа с единицы выросла с 14% до 22% — при той же закупочной цене и розничной.
        </p>
        <p style={styles.p}>
          Подробнее о требованиях к фото — в нашем гайде{" "}
          <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>«Как сделать фото для Wildberries»</Link>.
        </p>

        <h2 style={styles.h2}>Быстрый способ проверить нишу по марже</h2>
        <p style={styles.p}>
          Прежде чем делать полный расчёт, есть экспресс-тест за 10 минут:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            Найдите 3–5 лидеров категории на WB/Ozon. Смотрите их реальные цены продажи (с учётом скидок, которые видит покупатель).
          </li>
          <li style={styles.li}>
            Найдите аналогичный товар на 1688.com или у российских поставщиков. Прибавьте 15–20% на логистику и оформление.
          </li>
          <li style={styles.li}>
            Посчитайте: (Цена МП − Себестоимость) / Цена МП. Если меньше 40% — ниша, скорее всего, уже высококонкурентная и маржи там нет. Если больше 40% — стоит считать детально.
          </li>
        </ol>
        <p style={styles.p}>
          Это не замена полному расчёту, но помогает быстро отсеять заведомо невыгодные товары.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6", lineHeight: 1.65 }}>
            <strong>Хотите снизить расходы на фото и улучшить конверсию карточки?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>{" "}
            — 13 кредитов бесплатно на старте. Загрузите одно фото товара, получите 2 готовых кадра под WB и Ozon. Это то самое улучшение карточки, которое напрямую влияет на маржу без изменения цены и закупки.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/cena-tovara-wildberries-ozon" style={{ color: "#7c3aed" }}>Как установить цену товара на Wildberries и Ozon</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/kak-vybrat-nishu-wildberries-2026" style={{ color: "#7c3aed" }}>Как выбрать нишу на Wildberries в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>Возвраты и фото товара: как снизить процент</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
        </ul>
      </article>
    </>
  );
}
