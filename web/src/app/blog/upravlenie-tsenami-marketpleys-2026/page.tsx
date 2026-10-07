import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Управление ценой на маркетплейсе: стратегии 2026 — Aiviso",
  description: "Когда поднимать и снижать цену на WB и Ozon, как работают репрайсеры, формула минимальной цены и чек-лист из 15 пунктов для ценовой стратегии.",
  keywords: [
    "управление ценой на маркетплейсе",
    "репрайсер wildberries",
    "репрайсер ozon",
    "ценовая стратегия wildberries",
    "как установить цену на ozon",
    "автоматизация цен wb ozon",
    "минимальная цена маркетплейс",
    "конкурентная цена карточки",
    "ценообразование wildberries 2026",
  ],
  alternates: { canonical: "/blog/upravlenie-tsenami-marketpleys-2026" },
  openGraph: {
    title: "Управление ценой на маркетплейсе: когда поднять, снизить и автоматизировать",
    description: "Стратегии ценообразования на WB и Ozon: формула минимальной цены, репрайсеры и 15 пунктов чек-листа.",
    url: "/blog/upravlenie-tsenami-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Управление ценой на маркетплейсе: когда поднять, когда снизить и как автоматизировать в 2026",
  description: "Стратегии ценообразования на Wildberries и Ozon: формула минимальной цены, репрайсеры и чек-лист из 15 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-07",
  dateModified: "2026-10-07",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/upravlenie-tsenami-marketpleys-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Управление ценой на маркетплейсе", item: "https://aiviso.ru/blog/upravlenie-tsenami-marketpleys-2026" },
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

export default function UpravlenieTsenamiMarketpleys() {
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
          <span style={{ color: "#1f2937" }}>Управление ценой на маркетплейсе</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Управление ценой на маркетплейсе: когда поднять, когда снизить и как автоматизировать
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 7 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Цена — один из трёх главных факторов ранжирования на Wildberries и Ozon. Ошибка на 5–10%
          в любую сторону — и вы либо работаете в ноль, либо проигрываете конкурентам в листинге.
          Разберём, как считать минимальную цену, когда двигать её вверх или вниз, и как не делать
          это вручную каждый день.
        </p>

        <h2 style={styles.h2}>Почему «поставить как у конкурента» — плохая стратегия</h2>
        <p style={styles.p}>
          Это самая частая ошибка новых селлеров. Вы смотрите на ТОП-5 в категории, ставите
          похожую цену и ждёте продаж. Но у лидера может быть:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Другая себестоимость — закупает в 2 раза дешевле благодаря объёму или прямому контракту с производителем</li>
          <li style={styles.li}>Другая схема логистики — FBO с ближайшего склада даёт меньший процент за доставку</li>
          <li style={styles.li}>Другой процент возврата — в категории одежды разница между 30% и 60% возвратов меняет юнит-экономику вдвое</li>
          <li style={styles.li}>Реклама в цену уже заложена иначе — или вообще не заложена, потому что они держатся на органике</li>
        </ul>
        <p style={styles.p}>
          Один наш клиент в категории товаров для дома поставил цену «как у ТОПа» — 890 ₽.
          Продавал 3 месяца и каждый месяц уходил в минус на 12–15%. Когда посчитали юнит-экономику,
          оказалось, что его безубыточная цена — 1 040 ₽. Поднял цену, потерял 20% заказов,
          но вышел в плюс.
        </p>

        <h2 style={styles.h2}>Формула минимальной цены: считаем один раз, используем всегда</h2>
        <p style={styles.p}>
          Минимальная цена (МЦ) — это цена, ниже которой продавать нельзя даже в акцию без убытка.
        </p>

        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0" }}>
          <p style={{ margin: 0, fontWeight: 700, color: "#5b21b6", fontSize: 15 }}>
            МЦ = Себестоимость + Логистика + Комиссия маркетплейса + Реклама + Хранение + Процент возврата + Желаемая прибыль
          </p>
        </div>

        <p style={styles.p}>Пример для товара с себестоимостью 400 ₽ на WB (категория «Красота»):</p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Статья</th>
              <th style={styles.th}>Сумма, ₽</th>
              <th style={styles.th}>Откуда</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Себестоимость</td>
              <td style={styles.td}>400</td>
              <td style={styles.td}>Закупочная цена + доставка до склада</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия WB (23%)</td>
              <td style={styles.td}>207</td>
              <td style={styles.td}>% от цены продажи (рассчитывается обратно)</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика FBO</td>
              <td style={styles.td}>90</td>
              <td style={styles.td}>Тариф WB 2026 для товара до 1 кг</td>
            </tr>
            <tr>
              <td style={styles.td}>Возврат 35% × стоимость обратной доставки</td>
              <td style={styles.td}>42</td>
              <td style={styles.td}>0.35 × 120 ₽ обратная логистика</td>
            </tr>
            <tr>
              <td style={styles.td}>Реклама (ДРР 15%)</td>
              <td style={styles.td}>135</td>
              <td style={styles.td}>15% от цены продажи</td>
            </tr>
            <tr>
              <td style={styles.td}>Хранение (в среднем за оборот 30 дней)</td>
              <td style={styles.td}>18</td>
              <td style={styles.td}>~0.07 ₽/день/литр × 30 дней × 8 л</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>Итого затрат</strong></td>
              <td style={styles.tdAccent}><strong>892</strong></td>
              <td style={styles.tdAccent}></td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>МЦ при марже 20%</strong></td>
              <td style={styles.tdAccent}><strong>1 070 ₽</strong></td>
              <td style={styles.tdAccent}>892 / 0.835 (с учётом комиссии в цене)</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Это и есть ваш «пол». Участвуете в акции WB на -15% — цена акции не должна упасть ниже 1 070 ₽.
          Если маркетплейс требует акцию до 910 ₽ — отказываетесь или пересчитываете за счёт снижения рекламы.
        </p>

        <h2 style={styles.h2}>Когда поднимать цену: 5 сигналов</h2>

        <h3 style={styles.h3}>1. Продаётся слишком быстро</h3>
        <p style={styles.p}>
          Оборачиваемость меньше 7–10 дней — это не повод для радости, это сигнал что вы дёшево
          продаёте. Если товар разбирают за неделю, а следующая поставка идёт 3 недели, вы уйдёте
          в out-of-stock и потеряете позиции. Поднимайте цену на 5–10%, пока оборачиваемость не
          выровняется до 20–30 дней.
        </p>

        <h3 style={styles.h3}>2. CTR растёт, конверсия падает</h3>
        <p style={styles.p}>
          Если кликают хорошо, но не покупают — возможно, цена кажется подозрительно низкой.
          Парадокс, но дешёвый товар в премиальной категории покупают реже. Один клиент в категории
          «Уход за кожей» поднял цену крема с 380 ₽ до 490 ₽ — конверсия выросла с 3.1% до 4.4%.
        </p>

        <h3 style={styles.h3}>3. Конкуренты выходят из акции</h3>
        <p style={styles.p}>
          Следите за ценами ТОП-5 конкурентов. Если 3 из них подняли цену в течение 2 недель —
          это рыночный сигнал. Либо закончился сток по дешёвой закупке, либо они тоже пересчитали
          юнит-экономику. Поднимайтесь вместе с рынком.
        </p>

        <h3 style={styles.h3}>4. Сезон открывается</h3>
        <p style={styles.p}>
          За 3–4 недели до пика спроса начинайте плавно поднимать цену: +3–5% в неделю.
          К моменту когда спрос максимален, вы будете на 15–20% выше, чем в обычный период,
          и при этом всё ещё в рынке, потому что конкуренты делают то же самое.
        </p>

        <h3 style={styles.h3}>5. Себестоимость выросла</h3>
        <p style={styles.p}>
          Поставщик поднял цену, выросли тарифы логистики — перекладывайте в розницу немедленно,
          не «потом». Каждая неделя промедления — прямой убыток. Алгоритм: рассчитали новую МЦ,
          подняли цену, отслеживаете просадку заказов 7–10 дней. Если заказы держатся — хорошо.
          Если упали больше чем на 30% — ищите способ снизить другие статьи затрат.
        </p>

        <h2 style={styles.h2}>Когда снижать цену: 4 ситуации</h2>

        <h3 style={styles.h3}>1. Карточка не набирает продажи в первые 2 недели</h3>
        <p style={styles.p}>
          Новый товар на старте нужно «разогнать». Если за первые 14 дней меньше 5–7 заказов —
          снижайте цену на 10–15% от рынка и одновременно запускайте рекламу. Дешевизна + реклама
          дадут первые продажи, отзывы и сигнал алгоритму что товар покупают.
        </p>

        <h3 style={styles.h3}>2. Сток нужно срочно разгрузить</h3>
        <p style={styles.p}>
          Подходит дата когда WB или Ozon начнут брать повышенные тарифы за хранение залежавшегося
          товара. Лучше продать в минус 5% к МЦ, чем платить 30% от стоимости товара в виде тарифов
          за хранение. Это арифметика, а не эмоция.
        </p>

        <h3 style={styles.h3}>3. Участие в акции маркетплейса</h3>
        <p style={styles.p}>
          WB и Ozon периодически проводят акции с буст-позициями для участников.
          Снижение оправдано, если: расчётная цена акции выше МЦ, акция даёт буст в ТОП-20
          по целевому запросу, после акции ожидается органический хвост (позиции остаются выше).
        </p>

        <h3 style={styles.h3}>4. Конкурент «похоронил» цену</h3>
        <p style={styles.p}>
          Если прямой конкурент с аналогичным товаром поставил цену на 25%+ ниже вас — это демпинг
          или ошибка юнит-экономики. Не гонитесь немедленно. Подождите 2–3 недели: либо он поднимет
          цену обратно (понял убыток), либо у него заканчивается сток. Только если через месяц он
          стабильно дешевле и забирает ваши заказы — пересчитывайте свою экономику.
        </p>

        <h2 style={styles.h2}>Репрайсеры: что это и когда нужен</h2>
        <p style={styles.p}>
          Репрайсер — сервис, который автоматически меняет цены на основе правил: цен конкурентов,
          остатков на складе, времени суток, ДРР рекламы. Ключевые инструменты 2026 года:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Сервис</th>
              <th style={styles.th}>Площадки</th>
              <th style={styles.th}>Цена</th>
              <th style={styles.th}>Особенность</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>MPStats Репрайсер</td>
              <td style={styles.td}>WB, Ozon</td>
              <td style={styles.td}>от 2 500 ₽/мес</td>
              <td style={styles.td}>Встроен в аналитику, видит конкурентов</td>
            </tr>
            <tr>
              <td style={styles.td}>Sellmonitor</td>
              <td style={styles.td}>WB, Ozon</td>
              <td style={styles.td}>от 3 000 ₽/мес</td>
              <td style={styles.td}>Мониторинг + правила по категориям</td>
            </tr>
            <tr>
              <td style={styles.td}>Автопродвижение WB</td>
              <td style={styles.td}>WB</td>
              <td style={styles.td}>Бесплатно (встроен)</td>
              <td style={styles.td}>Только ставки, не цена</td>
            </tr>
            <tr>
              <td style={styles.td}>Ozon Стратегии цен</td>
              <td style={styles.td}>Ozon</td>
              <td style={styles.td}>Бесплатно</td>
              <td style={styles.td}>Следит за конкурентами на Ozon автоматически</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Репрайсер нужен, если у вас больше 30 активных SKU или если вы работаете в категориях
          с высокой частотой изменений цен (электроника, косметика, спорт). При каталоге до 20
          товаров — достаточно еженедельного ручного мониторинга.
        </p>

        <p style={styles.p}>
          <strong>Важно:</strong> репрайсер должен знать вашу МЦ и никогда не опускаться ниже.
          Без этого ограничения алгоритм может довести цену до убыточной в попытке «обогнать»
          конкурента-демпера.
        </p>

        <h2 style={styles.h2}>Ценовая стратегия по типу товара</h2>

        <h3 style={styles.h3}>Локомотив каталога (15–20% SKU, 60–70% выручки)</h3>
        <p style={styles.p}>
          Держите цену конкурентной — в диапазоне ±5% от рынка. Это ваш главный донор трафика
          и отзывов. Потеря позиции локомотива из-за завышенной цены — самая дорогая ошибка
          в ценообразовании.
        </p>

        <h3 style={styles.h3}>Маржинальный хвост (остальные SKU)</h3>
        <p style={styles.p}>
          Можно держать цену на 10–20% выше рынка. Покупатель, который уже зашёл в ваш магазин
          за локомотивом, докупит сопутствующий товар с меньшей чувствительностью к цене.
          Один из клиентов в категории «Товары для дома» держит основной товар по рынку (690 ₽),
          а аксессуары к нему — с наценкой 35%. Средний чек в итоге на 28% выше, чем у конкурентов.
        </p>

        <h3 style={styles.h3}>Новинки</h3>
        <p style={styles.p}>
          Первые 4 недели — цена ниже рынка на 10–15% для набора первых заказов и отзывов.
          После 20–30 отзывов и стабильных позиций поднимаете цену до рыночной или выше —
          продажи уже идут на органике.
        </p>

        <h2 style={styles.h2}>Как участвовать в акциях и не уходить в минус</h2>
        <p style={styles.p}>
          WB и Ozon регулярно давят на продавцов, требуя участия в акциях. Алгоритм,
          который позволяет не уходить в убыток:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Шаг 1.</strong> За 2–3 недели до акции постепенно поднимите цену на 15–20% выше текущей. Маркетплейс требует скидку «от исходной» — ваша исходная будет выше.</li>
          <li style={styles.li}><strong>Шаг 2.</strong> Рассчитайте цену акции: если требуемая цена выше МЦ — участвуете. Если ниже — отказываетесь или просите исключение.</li>
          <li style={styles.li}><strong>Шаг 3.</strong> Оцените «акционный» буст: если акция даёт топовые позиции на время и органический хвост после — даже небольшой убыток в первые дни оправдан ростом отзывов и позиций.</li>
          <li style={styles.li}><strong>Шаг 4.</strong> После акции верните цену к плановой в течение 3–5 дней — резкий возврат к высокой цене может дать провал в конверсии.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист ценовой стратегии: 15 пунктов</h2>

        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={styles.li}>Рассчитана МЦ для каждого SKU с учётом всех статей затрат</li>
            <li style={styles.li}>МЦ обновляется при каждом изменении себестоимости или тарифов</li>
            <li style={styles.li}>Мониторинг цен ТОП-5 конкурентов ведётся минимум раз в неделю</li>
            <li style={styles.li}>Цены локомотивов каталога в диапазоне ±5% от рынка</li>
            <li style={styles.li}>Маржинальный хвост выше рынка на 10–20%</li>
            <li style={styles.li}>Новинки запускаются на 10–15% ниже рынка</li>
            <li style={styles.li}>Перед акцией цена поднимается за 2–3 недели</li>
            <li style={styles.li}>Расчёт акционной цены проводится до согласия на участие</li>
            <li style={styles.li}>Настроено оповещение если оборачиваемость упала ниже 10 дней</li>
            <li style={styles.li}>Настроено оповещение если заказы упали более чем на 30% за 3 дня</li>
            <li style={styles.li}>При каталоге 30+ SKU подключён репрайсер с ограничением МЦ</li>
            <li style={styles.li}>ДРР рекламы пересчитывается при каждом изменении цены</li>
            <li style={styles.li}>Разница в цене WB и Ozon не более 5% (алгоритм WB штрафует за «дешевле на Ozon»)</li>
            <li style={styles.li}>Сезонные подъёмы цены запланированы в календаре на 3 месяца вперёд</li>
            <li style={styles.li}>После каждой акции анализируется фактический результат — прибыль и динамика позиций</li>
          </ul>
        </div>

        <h2 style={styles.h2}>Типичные ошибки в ценообразовании</h2>

        <p style={styles.p}><strong>«Буду продавать дешевле всех».</strong> Демпинг работает только если у вас в 2–3 раза ниже
        себестоимость за счёт объёма. В остальных случаях это путь к убыткам и разрушению рынка
        в категории, после чего ни вы, ни конкуренты не можете нормально зарабатывать.</p>

        <p style={styles.p}><strong>Не включать рекламу в цену.</strong> «Я пока не запускал рекламу, посмотрю как пойдёт» —
        а потом реклама запускается и цена оказывается убыточной. Закладывайте ДРР 10–20%
        в юнит-экономику даже если пока работаете на органике.</p>

        <p style={styles.p}><strong>Менять цену чаще 1–2 раз в неделю.</strong> Частые скачки цены (5% вверх, 7% вниз,
        снова вверх) ухудшают позиции в алгоритме WB. Изменения должны быть осознанными
        и держаться минимум 5–7 дней.</p>

        <p style={styles.p}><strong>Не отслеживать «Стратегии цен» на Ozon.</strong> Если вы не настроили пороги
        для стратегии и конкурент опустил цену ниже вашей — Ozon автоматически снижает
        вашу цену вслед, иногда до убыточных значений. Настройте минимум цены в кабинете Ozon.</p>

        <h2 style={styles.h2}>Как фото влияет на ценовое восприятие</h2>
        <p style={styles.p}>
          Хорошая карточка позволяет продавать дороже. Это не метафора — конкретная механика:
          покупатель в листинге видит два похожих товара по 890 ₽ и 1 050 ₽. Если у дорогого
          качественная lifestyle-съёмка, инфографика с преимуществами и 50+ отзывов — он выберет
          дорогой. Так работает «ценовое обоснование» через контент.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «Постельное бельё» обновил главное фото и добавил
          lifestyle-кадры через Aiviso. Цена осталась прежней (1 290 ₽), а CTR вырос с 2.3%
          до 4.1% — покупатели стали охотнее кликать, воспринимая товар как более дорогой
          и качественный при той же цене.
        </p>
        <p style={styles.p}>
          Подробнее о том, как фото влияет на конверсию — читайте в нашей статье{" "}
          <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>«Главное фото карточки: 8 правил первого слайда»</Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите продавать дороже конкурентов?</strong>{" "}
            Начните с карточки: качественные AI-фото с lifestyle-сценами и инфографикой позволяют
            поставить цену на 10–15% выше и не терять конверсию.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso бесплатно</Link>
            {" "}— 13 кредитов на старте, результат за 2 минуты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>Юнит-экономика для маркетплейса: формула и типичные ошибки</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/aktsii-wb-ozon" style={{ color: "#7c3aed" }}>Акции на Wildberries и Ozon: как участвовать и не уйти в минус</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как измерить и поднять кликабельность</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
