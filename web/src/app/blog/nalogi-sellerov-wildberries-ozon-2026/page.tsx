import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Налоги для продавцов WB и Ozon в 2026 — Aiviso",
  description: "УСН 6% или 15%, НДС с 60 млн оборота, страховые взносы ИП, налоговый календарь и 15 ошибок которые стоят денег. Полное руководство для селлеров маркетплейсов.",
  keywords: [
    "налоги для продавцов wildberries",
    "налоги для селлеров ozon",
    "усн для маркетплейса",
    "ндс маркетплейс 2026",
    "ип для wildberries",
    "налог с продаж на ozon",
    "усн 6 для маркетплейса",
    "страховые взносы ип 2026",
  ],
  alternates: { canonical: "/blog/nalogi-sellerov-wildberries-ozon-2026" },
  openGraph: {
    title: "Налоги для продавцов WB и Ozon в 2026: УСН, НДС и что выбрать",
    description: "УСН 6% или 15%, НДС при обороте от 60 млн, страховые взносы и налоговый календарь для селлеров.",
    url: "/blog/nalogi-sellerov-wildberries-ozon-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Налоги для продавцов на Wildberries и Ozon в 2026: УСН, НДС и что выбрать",
  description:
    "Полное руководство по налогам для селлеров маркетплейсов. УСН 6% и 15%, НДС с 60 млн, страховые взносы, налоговый календарь, 15 ошибок которые стоят денег.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-04",
  dateModified: "2026-10-04",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/nalogi-sellerov-wildberries-ozon-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Налоги для продавцов WB и Ozon",
      item: "https://aiviso.ru/blog/nalogi-sellerov-wildberries-ozon-2026",
    },
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

export default function NalogiSellerov() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "48px 20px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#1f2937",
          lineHeight: 1.75,
          fontSize: 16,
        }}
      >
        <nav aria-label="Хлебные крошки" style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Главная
          </Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Блог
          </Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Налоги для продавцов WB и Ozon</span>
        </nav>

        <h1
          style={{
            fontSize: "clamp(28px, 6vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: "8px 0 12px",
            lineHeight: 1.15,
          }}
        >
          Налоги для продавцов на Wildberries и Ozon в 2026: УСН, НДС и что выбрать
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 4 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Незнание налоговых правил обходится продавцам в среднем от 80 до 400 тысяч рублей в год: штрафы за
          просроченные авансы, переплата из-за неправильно выбранной системы, потеря вычетов из-за отсутствия
          документов. Разберём все режимы, сроки и типичные ошибки на конкретных цифрах.
        </p>

        <h2 style={styles.h2}>Какую систему налогообложения выбрать</h2>
        <p style={styles.p}>
          Для большинства селлеров выбор стоит между четырьмя вариантами. Самозанятость мы разбирали{" "}
          <Link href="/blog/samozanyatyy-marketpleys-2026" style={{ color: "#7c3aed" }}>
            отдельно
          </Link>{" "}
          — здесь сосредоточимся на ИП и ООО.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Режим</th>
              <th style={styles.th}>Лимит дохода</th>
              <th style={styles.th}>Ставка</th>
              <th style={styles.th}>Кому подходит</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Самозанятый (НПД)</td>
              <td style={styles.td}>2,4 млн ₽/год</td>
              <td style={styles.td}>4–6%</td>
              <td style={styles.td}>Хэндмейд, авторские товары, без перепродажи</td>
            </tr>
            <tr>
              <td style={styles.td}>ИП УСН «Доходы»</td>
              <td style={styles.td}>265 млн ₽/год</td>
              <td style={styles.tdAccent}>
                <strong>6%</strong>
              </td>
              <td style={styles.tdAccent}>Большинство селлеров</td>
            </tr>
            <tr>
              <td style={styles.td}>ИП УСН «Доходы − расходы»</td>
              <td style={styles.td}>265 млн ₽/год</td>
              <td style={styles.td}>15%</td>
              <td style={styles.td}>Если расходы больше 60% от выручки</td>
            </tr>
            <tr>
              <td style={styles.td}>ООО УСН</td>
              <td style={styles.td}>265 млн ₽/год</td>
              <td style={styles.td}>6% или 15%</td>
              <td style={styles.td}>Партнёры, инвесторы, крупный оборот</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          <strong>Самый популярный выбор — ИП на УСН 6%.</strong> Простая отчётность, минимум бумаг, страховые
          взносы вычитаются из налога. 90% одиночных селлеров на WB и Ozon работают именно так.
        </p>

        <h3 style={styles.h3}>УСН 6%: как считается налог</h3>
        <p style={styles.p}>
          Налоговая база — <strong>вся выручка от покупателей</strong>, которую перечислил маркетплейс. Здесь
          главная ловушка: на УСН 6% нельзя вычесть из базы комиссию маркетплейса и логистику. Это подтверждено
          письмами Минфина (№ 03-11-06/2/77981 и аналогичными).
        </p>
        <p style={{ ...styles.p, background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 8, padding: "12px 16px" }}>
          <strong>Пример:</strong> продал куртку за 3 000 ₽. Маркетплейс удержал 800 ₽ (комиссия + логистика) и
          перечислил 2 200 ₽. Налог считается с 3 000 ₽ × 6% = 180 ₽, а не с 2 200 ₽ × 6% = 132 ₽. Разница
          небольшая на единицу, но на 5 000 продаж в месяц ошибка в базе даёт 240 000 ₽ недоплаченного налога и
          штраф 20% + пени.
        </p>

        <h3 style={styles.h3}>УСН 15%: когда выгоднее</h3>
        <p style={styles.p}>
          На «Доходы минус расходы» налог считается с чистой прибыли. Выгоден, если ваши подтверждённые расходы
          превышают 60% от выручки. Например:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Закупочная цена товара — 50% от розницы</li>
          <li style={styles.li}>Комиссия маркетплейса — 15–25%</li>
          <li style={styles.li}>Логистика, хранение — 5–10%</li>
        </ul>
        <p style={styles.p}>
          Итого расходы 70–85% → при УСН 15% налог = 3–5% от выручки вместо 6%. Но у этого режима есть
          минимальный налог — 1% от всей выручки даже если вышел в убыток. Кроме того, все расходы нужно
          документально подтверждать — накладные, акты, УПД. Потерял документы на закупку → нет расхода → налог
          с полной выручки.
        </p>

        <h2 style={styles.h2}>Как маркетплейс отражает ваши доходы</h2>
        <p style={styles.p}>
          WB и Ozon ежедневно продают ваш товар, раз в неделю (WB) или раз в 2 недели (Ozon) формируют отчёт о
          реализации и делают выплату. В отчёте отображается:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Сумма продаж покупателям (ваш доход для целей налогообложения)</li>
          <li style={styles.li}>Удержанная комиссия</li>
          <li style={styles.li}>Стоимость логистики</li>
          <li style={styles.li}>Штрафы и компенсации</li>
          <li style={styles.li}>Итоговая выплата вам (доход − все удержания)</li>
        </ul>
        <p style={styles.p}>
          На <strong>УСН 6%</strong> доходом считается строка «сумма продаж покупателям» — верхняя цифра, не
          итоговая выплата. На <strong>УСН 15%</strong> доходом тоже является сумма продаж, но комиссия,
          логистика и хранение записываются в расходы — итог тот же, но через другую механику.
        </p>

        <h2 style={styles.h2}>НДС при обороте от 60 миллионов рублей</h2>
        <p style={styles.p}>
          С 2025 года ИП и ООО на УСН обязаны платить НДС, если годовой доход превышает 60 млн рублей. Ставки:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Доход за год</th>
              <th style={styles.th}>Ставка НДС</th>
              <th style={styles.th}>Вычеты входящего НДС</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>До 60 млн ₽</td>
              <td style={styles.td}>Освобождение от НДС</td>
              <td style={styles.td}>Нет</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>60–250 млн ₽</td>
              <td style={styles.tdAccent}>
                <strong>5%</strong>
              </td>
              <td style={styles.tdAccent}>Нет (упрощённый)</td>
            </tr>
            <tr>
              <td style={styles.td}>250–450 млн ₽</td>
              <td style={styles.td}>7%</td>
              <td style={styles.td}>Нет (упрощённый)</td>
            </tr>
            <tr>
              <td style={styles.td}>Свыше 450 млн ₽</td>
              <td style={styles.td}>20%</td>
              <td style={styles.td}>Да (общий режим)</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Важно: НДС начинается <strong>с месяца, следующего за месяцем, в котором превышен лимит</strong>. Если
          в августе вы пробили 60 млн, с сентября выставляете счета с НДС. WB и Ozon при этом не являются
          налоговыми агентами по НДС за продажу обычных товаров — вы сами исчисляете и платите налог.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории товаров для дома обнаружил превышение порога в ноябре, уже пропустив
          два месяца. Штраф за незарегистрированный НДС составил 87 000 ₽ плюс пени. Следите за выручкой с июля
          — именно тогда накопленный оборот за год обычно подходит к критической отметке.
        </p>

        <h2 style={styles.h2}>Страховые взносы ИП в 2026</h2>
        <p style={styles.p}>
          Каждый ИП платит взносы вне зависимости от выручки и прибыли — даже если торговля не шла.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Фиксированная часть (2026):</strong> 53 658 ₽ — срок уплаты 31 декабря
          </li>
          <li style={styles.li}>
            <strong>Дополнительный взнос:</strong> 1% с дохода свыше 300 000 ₽, максимум 300 888 ₽ — срок 1
            июля следующего года
          </li>
          <li style={styles.li}>
            <strong>На УСН 6% без сотрудников:</strong> взносы полностью вычитаются из налога (до 100%)
          </li>
          <li style={styles.li}>
            <strong>На УСН 6% с сотрудниками:</strong> взносы вычитаются из налога до 50%
          </li>
        </ul>
        <p style={styles.p}>
          Практика: при УСН 6% выгоднее платить взносы ежеквартально — тогда каждый авансовый платёж по налогу
          уменьшается. Если отложить взносы на декабрь, экономия «разойдётся» только в годовой декларации, а
          авансы будете платить в полном размере весь год.
        </p>

        <h2 style={styles.h2}>Налоговый календарь для ИП на УСН</h2>
        <p style={styles.p}>
          Главная причина штрафов — не ставка, а просроченные авансовые платежи. Пеня: 1/300 ставки ЦБ за каждый
          день просрочки. При ставке ЦБ 21% и долге 100 000 ₽ — это около 2 100 ₽ в месяц.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>28 апреля</strong> — авансовый платёж за I квартал
          </li>
          <li style={styles.li}>
            <strong>28 июля</strong> — авансовый платёж за I полугодие (нарастающим итогом)
          </li>
          <li style={styles.li}>
            <strong>28 октября</strong> — авансовый платёж за 9 месяцев (нарастающим итогом)
          </li>
          <li style={styles.li}>
            <strong>28 апреля следующего года</strong> — итоговый налог за год
          </li>
          <li style={styles.li}>
            <strong>25 апреля следующего года</strong> — подача декларации по УСН
          </li>
          <li style={styles.li}>
            <strong>31 декабря</strong> — фиксированные страховые взносы
          </li>
          <li style={styles.li}>
            <strong>1 июля следующего года</strong> — дополнительный взнос 1%
          </li>
        </ul>
        <p style={{ ...styles.p, background: "#ecfdf5", border: "1px solid #6ee7b7", borderRadius: 8, padding: "12px 16px" }}>
          <strong>Лайфхак:</strong> поставьте напоминание на 20-е числа апреля, июля, октября — за неделю до
          дедлайна. Три минуты в мобильном приложении банка экономят штрафы на десятки тысяч рублей.
        </p>

        <h2 style={styles.h2}>Расходы, которые снижают налог на УСН 15%</h2>
        <p style={styles.p}>
          Перечень принимаемых расходов закрытый — статья 346.16 НК РФ. Для маркетплейса принимаются:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Закупка товара (нужны накладная + чек или УПД от поставщика)</li>
          <li style={styles.li}>Комиссия маркетплейса (есть в отчёте о реализации)</li>
          <li style={styles.li}>Логистика и хранение на складах WB/Ozon</li>
          <li style={styles.li}>Реклама — внутренние инструменты WB и Ozon, внешний трафик (Telegram, VK)</li>
          <li style={styles.li}>Зарплата сотрудников и страховые взносы за них</li>
          <li style={styles.li}>Аренда склада или офиса</li>
          <li style={styles.li}>Сервисы аналитики (MPStats, Sellmonitor) — как программное обеспечение</li>
          <li style={styles.li}>Расходы на фото товара и AI-генерацию (Aiviso, фотостудия)</li>
        </ul>
        <p style={styles.p}>
          <strong>Не принимаются:</strong> штрафы маркетплейса за нарушения, представительские расходы без
          договора, личные расходы, проведённые через ИП-счёт.
        </p>

        <h2 style={styles.h2}>ИП или ООО: что выбрать для маркетплейса</h2>
        <p style={styles.p}>
          99% одиночных продавцов работают как ИП — проще, дешевле, быстрее. ООО имеет смысл только в трёх
          случаях:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Несколько партнёров</strong> и нужно распределить доли в бизнесе юридически
          </li>
          <li style={styles.li}>
            <strong>Инвестиции:</strong> инвестор хочет долю в компании, а не просто договор займа
          </li>
          <li style={styles.li}>
            <strong>Планируете выход на B2B</strong> — крупные корпоративные клиенты часто требуют ООО
          </li>
        </ul>
        <p style={styles.p}>
          У ООО выше накладные расходы: обязательная бухгалтерия, налог на дивиденды 13% при выводе денег,
          протоколы общего собрания. На старте это лишние траты без реальной пользы.
        </p>

        <h2 style={styles.h2}>5 ошибок, которые стоят дорого</h2>

        <h3 style={styles.h3}>1. Считать доходом чистые выплаты маркетплейса</h3>
        <p style={styles.p}>
          На УСН 6% доходом является вся сумма продаж покупателям, не то что перечислил WB или Ozon на счёт.
          Занижение базы — статья 122 НК, штраф 20–40% от недоимки.
        </p>

        <h3 style={styles.h3}>2. Не резервировать деньги на авансовые платежи</h3>
        <p style={styles.p}>
          Продажи идут каждый день, налоговый платёж — раз в квартал. Стратегия: сразу откладывать 6–7% от
          каждой выплаты маркетплейса на отдельный счёт. Когда придёт дата платежа, деньги уже есть.
        </p>

        <h3 style={styles.h3}>3. Потерять документы на закупку</h3>
        <p style={styles.p}>
          Для УСН 15% расход без документа — не расход. Один из наших клиентов в категории товаров для кухни
          закупал товар у трёх поставщиков через мессенджеры без УПД. При налоговой проверке не смогли
          подтвердить 2,1 млн ₽ расходов — доначисление составило 315 000 ₽ плюс пени.
        </p>

        <h3 style={styles.h3}>4. Пропустить авансовый платёж</h3>
        <p style={styles.p}>
          Многие думают, что декларация раз в год — это и есть весь срок оплаты. Нет. Авансовые платежи
          обязательны ежеквартально. Просрочка даже на один день — пени 1/300 ставки ЦБ × сумма × дни.
        </p>

        <h3 style={styles.h3}>5. Незаметно превысить лимит УСН</h3>
        <p style={styles.p}>
          Если доход превысит 265 млн ₽ в 2026 году — автоматический переход на общую систему (ОСНО) с НДС 20%
          и налогом на прибыль 20%. Следите за накопленным доходом в ЛК ФНС или через бухгалтерский сервис.
        </p>

        <h2 style={styles.h2}>Чек-лист: налоги для маркетплейса — 15 пунктов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Зарегистрировано ИП с кодом ОКВЭД 47.91 (торговля через интернет)</li>
          <li style={styles.li}>Выбрана система налогообложения (УСН 6% или УСН 15%) и подано уведомление в ФНС</li>
          <li style={styles.li}>Открыт расчётный счёт для ИП — личная карта не подходит для бизнеса</li>
          <li style={styles.li}>
            Настроена выгрузка отчётов маркетплейса — минимум раз в квартал для расчёта аванса
          </li>
          <li style={styles.li}>
            Понятно, что доход на УСН 6% = выручка от покупателей, а не чистая выплата от WB/Ozon
          </li>
          <li style={styles.li}>
            На каждую закупку есть УПД или накладная от поставщика (критично для УСН 15%)
          </li>
          <li style={styles.li}>Расходы на рекламу, аналитику и фото товара включены в расходную базу</li>
          <li style={styles.li}>В календаре стоят напоминания: 20 апреля, 20 июля, 20 октября, 20 декабря</li>
          <li style={styles.li}>Отдельный счёт или конверт для резервирования налогов (6–7% от каждой выплаты)</li>
          <li style={styles.li}>Фиксированные страховые взносы за ИП уплачены до 31 декабря</li>
          <li style={styles.li}>Дополнительный взнос 1% запланирован к уплате до 1 июля следующего года</li>
          <li style={styles.li}>Ведётся Книга учёта доходов и расходов (КУДиР) — обязательна для УСН</li>
          <li style={styles.li}>Годовой оборот отслеживается: если близится 60 млн — готовимся к НДС</li>
          <li style={styles.li}>Декларация по УСН подаётся до 25 апреля следующего года</li>
          <li style={styles.li}>
            Есть бухгалтер или онлайн-сервис (Моё дело, Эльба) — самостоятельный учёт на обороте от 2 млн ₽/мес
            несёт высокий риск ошибки
          </li>
        </ul>

        <h2 style={styles.h2}>Когда нанимать бухгалтера</h2>
        <p style={styles.p}>
          До 500 000 ₽ выручки в месяц — достаточно онлайн-сервиса (Эльба, Контур или Моё дело, ~2 000–4 000
          ₽/мес). Они автоматически считают авансы, напоминают о сроках и формируют декларацию.
        </p>
        <p style={styles.p}>
          От 500 000 ₽/мес — стоит нанять бухгалтера на аутсорс (от 5 000 ₽/мес). Цена ошибки при таких
          оборотах перевешивает стоимость специалиста в 10–20 раз. При переходе на НДС — бухгалтер обязателен:
          квартальная отчётность по НДС заметно сложнее УСН.
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 8px", fontSize: 15, color: "#5b21b6", fontWeight: 700 }}>
            Снижайте себестоимость карточки — тогда больше маржи останется после налогов
          </p>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            Фото товара для маркетплейса через{" "}
            <Link href="/" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Aiviso
            </Link>{" "}
            обходится от 15 ₽ за кадр против 500–1 500 ₽ в студии. Расходы на AI-генерацию принимаются в
            расходную базу УСН 15%.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте бесплатно
            </Link>{" "}
            — 13 кредитов на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/samozanyatyy-marketpleys-2026" style={{ color: "#7c3aed" }}>
              Самозанятые на Wildberries и Ozon: лимиты и ограничения
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула и таблица
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog/startovye-vlozheniya-marketpleys-2026" style={{ color: "#7c3aed" }}>
              Сколько нужно денег для старта на Wildberries и Ozon
            </Link>
          </li>
          <li style={{ marginBottom: 6 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
