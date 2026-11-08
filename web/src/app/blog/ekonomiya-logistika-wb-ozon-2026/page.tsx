import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Экономия на логистике WB и Ozon: 10 способов снизить расходы — Aiviso",
  description: "Как снизить логистические расходы на Wildberries и Ozon в 2026: объёмный вес, схемы поставок, возвраты. Чек-лист из 15 пунктов и реальные кейсы с цифрами.",
  keywords: [
    "логистика wildberries",
    "логистика ozon расходы",
    "как снизить расходы на доставку wb",
    "фбо или фбс расходы",
    "оптимизация логистики маркетплейс",
    "объёмный вес wildberries",
    "возвраты стоимость маркетплейс 2026",
    "стоимость хранения wb ozon",
  ],
  alternates: { canonical: "/blog/ekonomiya-logistika-wb-ozon-2026" },
  openGraph: {
    title: "Экономия на логистике WB и Ozon: 10 рабочих способов снизить расходы",
    description: "Схемы поставок, упаковка, выбор склада и работа с возвратами. Чек-лист из 15 пунктов и кейсы с реальными цифрами.",
    url: "/blog/ekonomiya-logistika-wb-ozon-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Экономия на логистике WB и Ozon: 10 способов снизить расходы в 2026",
  description: "Как снизить логистические расходы на Wildberries и Ozon. Объёмный вес, схемы поставок, выбор склада и работа с возвратами.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/ekonomiya-logistika-wb-ozon-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Экономия на логистике WB и Ozon", item: "https://aiviso.ru/blog/ekonomiya-logistika-wb-ozon-2026" },
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

export default function EkonomiyaLogistika() {
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
          <span style={{ color: "#1f2937" }}>Экономия на логистике WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как сэкономить на логистике WB и Ozon: 10 рабочих способов снизить расходы в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>8 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Логистика забирает от 15 до 40% выручки у большинства продавцов маркетплейсов — и большая часть этих потерь устранима без смены товара и без роста продаж. Разбираем 10 конкретных способов с цифрами.
        </p>

        <h2 style={styles.h2}>Почему логистика стоит дороже, чем кажется</h2>
        <p style={styles.p}>
          Большинство продавцов считают логистику как тариф за доставку из личного кабинета. На деле это только одна строка. Полная логистическая нагрузка состоит из:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Доставка до склада маркетплейса</strong> — транспортные расходы, упаковка, маркировка.</li>
          <li style={styles.li}><strong>Доставка от склада до покупателя</strong> — тариф WB или Ozon за каждую отправку.</li>
          <li style={styles.li}><strong>Хранение</strong> — от 0,07 ₽/литр в день на WB и от 0,15 ₽/литр на Ozon. При залёжавшемся товаре это копейки в день, но 2 000–8 000 ₽ в месяц за паллет.</li>
          <li style={styles.li}><strong>Обратная логистика</strong> — доставка возвратов обратно на склад продавца или в пункт выдачи. На WB это 50–100 ₽ за единицу, на Ozon зависит от схемы.</li>
          <li style={styles.li}><strong>Штрафы и пересорт</strong> — ошибки в маркировке, несоответствие вложения, неправильная упаковка.</li>
        </ul>
        <p style={styles.p}>
          Пример: кружка за 450 ₽. Тариф доставки WB — 60 ₽, возврат 25% — ещё 50 ₽ «навесить» на каждую проданную единицу, хранение 15 ₽/мес, доставка от поставщика до склада 20 ₽/ед. Итого: <strong>145 ₽ логистики на 450 ₽ выручки = 32%</strong>. И это без рекламы.
        </p>
        <p style={styles.p}>
          Снизить эту долю хотя бы до 20–22% — значит вернуть 10 процентных пунктов маржи. При обороте 300 000 ₽/мес это <strong>30 000 ₽ чистой прибыли в месяц</strong>, которые сейчас уходят в никуда.
        </p>

        <h2 style={styles.h2}>Способы 1–3: упаковка и объёмный вес</h2>

        <h3 style={styles.h3}>Как считается объёмный вес — и где теряются деньги</h3>
        <p style={styles.p}>
          WB и Ozon берут бо́льшее из двух: фактический вес или объёмный. Объёмный вес считается по формуле:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "12px 20px", margin: "12px 0", fontFamily: "monospace" }}>
          Объёмный вес = Длина × Ширина × Высота (в см) ÷ 5 000
        </div>
        <p style={styles.p}>
          Коробка 30 × 25 × 20 см: 30 × 25 × 20 = 15 000 ÷ 5 000 = <strong>3 кг объёмного веса</strong>. Если реальный вес товара 0,8 кг — WB возьмёт тариф за 3 кг. Это может быть на 40–80 ₽ дороже за каждую отправку.
        </p>

        <h3 style={styles.h3}>Способ 1: Уменьшить коробку под товар</h3>
        <p style={styles.p}>
          Один наш клиент продаёт силиконовые лопатки в коробке 32 × 22 × 10 см — стандартная упаковка от поставщика. После пересчёта оказалось, что 28 × 18 × 8 см хватает с запасом. Объёмный вес упал с 1,41 кг до 0,80 кг. Экономия на тарифе WB: <strong>22 ₽ за отправку</strong>, 400 заказов в месяц = 8 800 ₽/мес, 105 600 ₽/год — на пустом месте.
        </p>

        <h3 style={styles.h3}>Способ 2: Упаковка строго под нормы — без штрафов</h3>
        <p style={styles.p}>
          WB штрафует за несоответствие упаковки требованиям: незакреплённый клапан, отсутствие стрейч-плёнки на коробах, неправильный штрихкод. Средний штраф — 100–200 ₽ за единицу, при приёмке 100 товаров это 10 000–20 000 ₽ за раз.
        </p>
        <p style={styles.p}>
          Checklist упаковки перед поставкой на WB:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Штрихкод виден через плёнку, не заклеен скотчем</li>
          <li style={styles.li}>Коробка не деформируется при лёгком нажатии</li>
          <li style={styles.li}>На честной знак — марка Datamatrix наклеена до упаковки в полиэтилен</li>
          <li style={styles.li}>Вес и размеры в заявке совпадают с реальными ±5%</li>
        </ul>

        <h3 style={styles.h3}>Способ 3: Поли-мешки вместо коробок для мягких товаров</h3>
        <p style={styles.p}>
          Для одежды, текстиля, мягких игрушек — полиэтиленовый мешок с застёжкой zip-lock вместо картонной коробки. Объёмный вес мешка примерно соответствует фактическому. Для майки весом 200 г в пакете 25 × 35 × 2 см объёмный вес всего 0,35 кг — против 0,8–1,2 кг в стандартной коробке. Экономия 15–25 ₽ на единицу.
        </p>

        <h2 style={styles.h2}>Способы 4–6: схема поставок и выбор склада</h2>

        <h3 style={styles.h3}>Способ 4: FBO против FBS — считайте точку безубыточности</h3>
        <p style={styles.p}>
          Нет единственно правильной схемы. Правило простое: если товар продаётся быстро (оборачиваемость менее 45 дней), FBO выгоднее — платишь за хранение мало, а тариф доставки ниже. Если товар медленный — FBS или realFBS: не платишь за хранение маркетплейсу, доставляешь сам по факту заказа.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Показатель</th>
              <th style={styles.th}>FBO (на складе WB/Ozon)</th>
              <th style={styles.th}>FBS (со своего склада)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Тариф доставки</td>
              <td style={styles.tdAccent}><strong>Ниже на 20–30%</strong></td>
              <td style={styles.td}>Выше</td>
            </tr>
            <tr>
              <td style={styles.td}>Хранение</td>
              <td style={styles.td}>Платишь маркетплейсу</td>
              <td style={styles.tdAccent}><strong>На своём складе (дешевле)</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Позиция в поиске</td>
              <td style={styles.tdAccent}><strong>Выше</strong></td>
              <td style={styles.td}>Немного ниже</td>
            </tr>
            <tr>
              <td style={styles.td}>Выгодно при оборачиваемости</td>
              <td style={styles.td}>менее 45–60 дней</td>
              <td style={styles.td}>более 60 дней</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Способ 5: региональные склады снижают стоимость доставки</h3>
        <p style={styles.p}>
          Если 40% ваших покупателей из Урала и Сибири, а весь товар лежит на московском складе — каждая доставка стоит дорого, и скорость доставки хуже. WB и Ozon дают скидку на тариф при доставке с регионального склада, который ближе к покупателю.
        </p>
        <p style={styles.p}>
          Один наш клиент из категории «детские игрушки» перевёл 30% стока на екатеринбургский склад WB. Средний тариф доставки для Урала и Сибири снизился с 92 ₽ до 61 ₽. При 600 заказов в месяц из этого региона экономия составила <strong>18 600 ₽ в месяц</strong> только на логистике.
        </p>
        <p style={styles.p}>
          Как понять куда везти: в <Link href="/blog" style={{ color: "#7c3aed" }}>аналитике продаж</Link> смотрите распределение заказов по регионам. Если один регион даёт 25%+ заказов — смысл держать там хотя бы страховой запас.
        </p>

        <h3 style={styles.h3}>Способ 6: коэффициенты приёмки — поставлять в «зелёные» дни</h3>
        <p style={styles.p}>
          WB регулярно меняет коэффициенты приёмки: в пиковые дни (пятница–воскресенье, накануне акций) коэффициент может быть 1,5–3×, то есть за поставку 100 единиц заплатишь как за 150–300. Поставки в понедельник–среду обычно идут с коэффициентом 1.0 или даже 0.
        </p>
        <p style={styles.p}>
          Следите за таблицей коэффициентов в ЛК минимум за 7 дней до планируемой поставки. Это бесплатно и экономит 20–50% стоимости приёмки при регулярных поставках.
        </p>

        <h2 style={styles.h2}>Способы 7–8: снижение возвратов</h2>
        <p style={styles.p}>
          Каждый возврат — это двойная логистика: туда и обратно. При ставке 50–80 ₽ за каждое плечо и проценте возврата 35% (типично для одежды) — вы платите за каждый третий заказ дважды. Снижение возврата на 10 процентных пунктов при 500 заказов в месяц = <strong>25 заказов × 100–160 ₽ = 2 500–4 000 ₽ экономии в месяц</strong>.
        </p>

        <h3 style={styles.h3}>Способ 7: точные фото снижают возвраты на 15–20%</h3>
        <p style={styles.p}>
          Главная причина возвратов на маркетплейсах — несоответствие товара фотографиям. Покупатель ожидал одно, получил другое. Три самых частых претензии:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Цвет не тот — на экране выглядело иначе</li>
          <li style={styles.li}>Размер не понятен по фото — казался больше/меньше</li>
          <li style={styles.li}>Материал выглядел лучше, чем в реальности</li>
        </ul>
        <p style={styles.p}>
          Решение: добавить на карточку фото с размерной линейкой, кадры текстуры крупным планом, сравнение цвета на нейтральном фоне. Одна селлер из категории постельного белья добавила в карточку фото реального цвета на дневном свете рядом с искусственным — возвраты по причине «не тот цвет» упали с 18% до 6% за 6 недель.
        </p>
        <p style={styles.p}>
          Если нужны дополнительные ракурсы без пересъёмки — <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерация в Aiviso</Link> позволяет добавить крупный план деталей или lifestyle-сцену из уже имеющегося фото. Это быстрее, чем заказывать студию повторно.
        </p>

        <h3 style={styles.h3}>Способ 8: заполненная размерная сетка и честные характеристики</h3>
        <p style={styles.p}>
          Для одежды и обуви незаполненная размерная сетка — прямая причина возвратов. Покупатель угадывает размер, ошибается, возвращает. Добавьте в карточку:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Таблицу замеров в сантиметрах (не только российский размер)</li>
          <li style={styles.li}>Рост и параметры модели на фото (если одежда)</li>
          <li style={styles.li}>Пометку, если вещь мерится на размер меньше или больше</li>
          <li style={styles.li}>Реальную длину изделия (не от производителя «56 см» — а от точки A до B)</li>
        </ul>
        <p style={styles.p}>
          Один продавец женских платьев снизил возврат с 41% до 24% только после того, как добавил в описание: «На фото модель ростом 170 см, параметры 86-62-90, одета в размер M».
        </p>

        <h2 style={styles.h2}>Способы 9–10: планирование поставок и оборачиваемость</h2>

        <h3 style={styles.h3}>Способ 9: не допускать залёжавшегося товара на складе</h3>
        <p style={styles.p}>
          Платное хранение на WB начинается с 60-го дня для большинства категорий (на Ozon — с 21-го или 60-го в зависимости от объёма). Ставки небольшие, но паллет залежавшегося товара обходится в 3 000–8 000 ₽/мес, а таких паллетов может быть несколько.
        </p>
        <p style={styles.p}>
          Алгоритм: каждые 30 дней проверять все SKU на оборачиваемость. Всё что не продаётся за 50+ дней — либо снизить цену, либо вывезти. Перекос в сторону «лучше снизить цену» правильный: логистика вывоза стоит денег, а быстро проданный товар освобождает деньги в оборот.
        </p>

        <h3 style={styles.h3}>Способ 10: планировать поставки раз в 2–3 недели, не чаще</h3>
        <p style={styles.p}>
          Мелкие поставки раз в неделю кажутся безопасными («всегда есть остаток»), но по факту:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Каждая поставка — стоимость транспортировки до склада: 500–3 000 ₽</li>
          <li style={styles.li}>Время на оформление отгрузки, распечатку этикеток, упаковку — 2–4 часа</li>
          <li style={styles.li}>Коэффициент приёмки часто выше на мелкие поставки</li>
        </ul>
        <p style={styles.p}>
          Оптимальная частота для большинства категорий — раз в 2–3 недели, партией на 25–30 дней продаж. Формула страхового запаса: среднедневные продажи × (срок поставки от поставщика + 7 дней). Если продаёте 10 ед/день, поставщик везёт 5 дней — держите на складе минимум 120 единиц перед каждым заказом.
        </p>

        <h2 style={styles.h2}>Чек-лист: 15 пунктов аудита логистических расходов</h2>
        <p style={styles.p}>Пройдитесь по каждому пункту раз в месяц — это занимает 30–40 минут, но может вернуть 10 000–50 000 ₽ прибыли в месяц:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Пересчитать объёмный вес для каждого SKU — сравнить с реальным</li>
          <li style={styles.li}>Проверить, нет ли лишнего объёма в упаковке (можно ли уменьшить коробку)</li>
          <li style={styles.li}>Сравнить тарифы FBO vs FBS для каждой категории по оборачиваемости</li>
          <li style={styles.li}>Посмотреть географию заказов — нужны ли региональные склады</li>
          <li style={styles.li}>Проверить таблицу коэффициентов приёмки перед следующей поставкой</li>
          <li style={styles.li}>Рассчитать процент возвратов по каждому SKU за последние 30 дней</li>
          <li style={styles.li}>Для SKU с возвратом &gt;30% — проверить, есть ли на карточке размерная сетка с замерами</li>
          <li style={styles.li}>Проверить, совпадает ли цвет товара на фото с реальным при дневном свете</li>
          <li style={styles.li}>Найти товары на хранении &gt;50 дней — снизить цену или вывезти</li>
          <li style={styles.li}>Пересчитать расходы на поставку при текущей частоте — выгоднее ли реже и больше</li>
          <li style={styles.li}>Проверить последние акты приёмки — были ли штрафы за упаковку</li>
          <li style={styles.li}>Убедиться, что штрихкоды на упаковке читаются сканером (не заклеены скотчем)</li>
          <li style={styles.li}>Сравнить стоимость логистики с 3–5 конкурентами через MPStats или Sellmonitor</li>
          <li style={styles.li}>Пересчитать юнит-экономику с актуальными тарифами (они меняются ежеквартально)</li>
          <li style={styles.li}>Проверить, нет ли товаров на soft-блоке из-за высокого процента возврата</li>
        </ul>

        <h2 style={styles.h2}>Сколько реально можно сэкономить</h2>
        <p style={styles.p}>
          Разберём на примере продавца с оборотом 500 000 ₽/мес и текущей долей логистики 32%:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Мера</th>
              <th style={styles.th}>Экономия в месяц</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Уменьшить упаковку — снизить объёмный вес</td>
              <td style={styles.tdAccent}><strong>6 000–12 000 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Перевести 30% стока на региональный склад</td>
              <td style={styles.tdAccent}><strong>8 000–18 000 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Снизить процент возвратов с 32% до 22%</td>
              <td style={styles.tdAccent}><strong>10 000–20 000 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Вывезти залёжавшийся сток, убрать платное хранение</td>
              <td style={styles.tdAccent}><strong>3 000–8 000 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Поставки в «зелёные» дни, снижение коэффициентов</td>
              <td style={styles.tdAccent}><strong>2 000–6 000 ₽</strong></td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Итого</strong></td>
              <td style={styles.tdAccent}><strong>29 000–64 000 ₽/мес</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Это реалистичные цифры, не теоретические максимумы. При обороте 500 000 ₽ — сэкономить 30 000–60 000 ₽ за месяц просто за счёт операционных улучшений. Для сравнения: такой же прирост через рекламу потребовал бы увеличения бюджета в 2–3 раза.
        </p>
        <p style={styles.p}>
          Начинать стоит с двух вещей: пересчёта объёмного веса всех позиций и аудита возвратов по SKU. Первое делается за 2 часа в Excel, второе видно прямо в личном кабинете. Вместе они дают самый быстрый результат без вложений.
        </p>
        <p style={styles.p}>
          Следующий шаг — карточки. Если фото не показывает товар точно: цвет, размер, текстуру — возвраты будут высокими при любых схемах логистики. <Link href="/" style={{ color: "#7c3aed" }}>Aiviso</Link> позволяет добавить нужные ракурсы и кадры деталей за несколько минут из одного исходного фото.
        </p>

        <div style={{ marginTop: 48, padding: "24px 28px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Снизьте возвраты с помощью точных фото товара
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 15, color: "#374151", lineHeight: 1.6 }}>
            Загрузите фото любого товара в Aiviso — получите дополнительные ракурсы, крупные планы деталей и lifestyle-сцены. Покупатель будет точно знать, что получит. Меньше сюрпризов — меньше возвратов.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li><Link href="/blog/fbo-vs-fbs-wildberries-ozon" style={{ color: "#7c3aed" }}>FBO или FBS: что выбрать на Wildberries и Ozon в 2026</Link></li>
          <li><Link href="/blog/vozvrat-tovarov-foto" style={{ color: "#7c3aed" }}>Возвраты на Wildberries и Ozon: при чём здесь фото товара</Link></li>
          <li><Link href="/blog/skrytye-rashody-wb-ozon-2026" style={{ color: "#7c3aed" }}>Скрытые расходы продавца на WB и Ozon: что съедает прибыль</Link></li>
          <li><Link href="/blog/postavka-tovarov-na-sklad-2026" style={{ color: "#7c3aed" }}>Поставка товара на склад: пошаговая инструкция 2026</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
