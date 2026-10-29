import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ИП или ООО для маркетплейса: что выбрать в 2026 — Aiviso",
  description:
    "Самозанятый, ИП или ООО — что зарегистрировать для продажи на Wildberries и Ozon. Сравнение налогов, документов и затрат. Чек-лист из 14 пунктов.",
  keywords: [
    "ип или ооо для маркетплейса",
    "как зарегистрироваться на wildberries",
    "ип для wildberries",
    "ооо для ozon",
    "самозанятый маркетплейс 2026",
    "налоги для продавца wildberries",
    "регистрация ип для ozon",
    "форма бизнеса для маркетплейса",
  ],
  alternates: { canonical: "/blog/ip-ili-ooo-dlya-marketpleysa-2026" },
  openGraph: {
    title: "ИП или ООО для маркетплейса: что выбрать в 2026",
    description:
      "Полное сравнение: самозанятый, ИП и ООО для торговли на WB и Ozon. Налоги, регистрация, затраты и типичные ошибки.",
    url: "/blog/ip-ili-ooo-dlya-marketpleysa-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ИП или ООО для маркетплейса: что выбрать в 2026",
  description:
    "Сравнение форм бизнеса для продажи на Wildberries и Ozon. Налоги, регистрация, ограничения.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/ip-ili-ooo-dlya-marketpleysa-2026",
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
      name: "ИП или ООО для маркетплейса",
      item: "https://aiviso.ru/blog/ip-ili-ooo-dlya-marketpleysa-2026",
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

export default function IpIliOooMarketpleys() {
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
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Блог</Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>ИП или ООО для маркетплейса</span>
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
          ИП или ООО для маркетплейса: что выбрать в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>29 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Первый вопрос каждого новичка на Wildberries или Ozon — в каком статусе регистрироваться. Самозанятый,
          ИП или сразу ООО? Неверный выбор на старте обходится дорого: переплаченные налоги, проблемы с банком
          или внезапное ограничение по обороту. Разбираем по-честному, без воды.
        </p>

        <h2 style={styles.h2}>Кто может продавать на Wildberries и Ozon</h2>
        <p style={styles.p}>
          Оба маркетплейса принимают продавцов в трёх статусах:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Самозанятый</strong> — физлицо, зарегистрированное в приложении «Мой налог». Налог 4–6%, без кассы, без деклараций.</li>
          <li style={styles.li}><strong>ИП</strong> — индивидуальный предприниматель. Может работать на УСН 6%, 15% или патенте. Самый распространённый статус на маркетплейсах.</li>
          <li style={styles.li}><strong>ООО</strong> — юридическое лицо. Нужно если планируется несколько совладельцев, привлечение инвестиций или работа с крупными корпоративными клиентами.</li>
        </ul>
        <p style={styles.p}>
          Для большинства новых селлеров правильный ответ — ИП на УСН 6%. Остальные варианты
          имеют смысл в конкретных ситуациях, которые разберём ниже.
        </p>

        <h2 style={styles.h2}>Самозанятый на маркетплейсе: когда подходит и когда нет</h2>
        <p style={styles.p}>
          Самозанятость — самый простой старт. Регистрация за 10 минут в приложении, налог 4% с продаж
          физлицам и 6% при работе с юрлицами, никакой бухгалтерии. Именно поэтому многие начинают
          с этого статуса.
        </p>

        <h3 style={styles.h3}>Плюсы самозанятого</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Регистрация за 10 минут через приложение, без похода в налоговую</li>
          <li style={styles.li}>Нет обязательных страховых взносов (в 2026 году для ИП это ~55 000 ₽/год)</li>
          <li style={styles.li}>Самый низкий налог из всех форм — 4 или 6%</li>
          <li style={styles.li}>Кассового аппарата не нужно — маркетплейс сам является налоговым агентом</li>
        </ul>

        <h3 style={styles.h3}>Жёсткие ограничения самозанятого</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Лимит дохода — 2,4 млн ₽ в год.</strong> Превысили — слетаете с НПД автоматически в середине налогового периода.</li>
          <li style={styles.li}><strong>Нельзя продавать перепродажный товар.</strong> Самозанятый может реализовывать только то, что сделал сам. Закупили в Китае — уже нарушение режима НПД.</li>
          <li style={styles.li}>Нельзя нанимать сотрудников</li>
          <li style={styles.li}>Ограниченный список видов деятельности</li>
        </ul>

        <div
          style={{
            padding: "16px 20px",
            background: "#fef3c7",
            border: "1px solid #fde68a",
            borderRadius: 12,
            margin: "16px 0",
          }}
        >
          <p style={{ margin: 0, fontSize: 14, color: "#92400e" }}>
            <strong>Важно:</strong> Самозанятый <em>не может</em> перепродавать товары, закупленные у поставщиков
            или на оптовых базах. Если вы покупаете что-то в Китае или у российского дистрибьютора и продаёте на
            маркетплейсе — это уже торговая деятельность, для которой нужно ИП или ООО.
          </p>
        </div>

        <p style={styles.p}>
          Самозанятость подходит если вы продаёте хэндмейд, авторские изделия или услуги — и оборот
          точно не превысит 2,4 млн в год.
        </p>

        <h2 style={styles.h2}>ИП для маркетплейса: оптимальный выбор для большинства</h2>
        <p style={styles.p}>
          ИП — стандарт для продавцов на WB и Ozon. Нет ограничений по виду товаров, можно нанимать
          сотрудников, лимит оборота по УСН — 450 млн ₽ в год (на 2026 год). Большинство советов по
          работе с маркетплейсами написаны именно для ИП.
        </p>

        <h3 style={styles.h3}>Какую систему налогообложения выбрать для ИП</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Система</th>
              <th style={styles.th}>Ставка</th>
              <th style={styles.th}>Когда выгодна</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>УСН «Доходы»</td>
              <td style={styles.tdAccent}><strong>6%</strong></td>
              <td style={styles.td}>Маржа выше 20–25%. Простой учёт — платите с выручки.</td>
            </tr>
            <tr>
              <td style={styles.td}>УСН «Доходы минус расходы»</td>
              <td style={styles.td}>15% (минимум 1% с оборота)</td>
              <td style={styles.td}>Маржа ниже 30%, большие расходы на закупку. Сложнее учёт.</td>
            </tr>
            <tr>
              <td style={styles.td}>Патент</td>
              <td style={styles.td}>Фиксированная сумма</td>
              <td style={styles.td}>Только розничная торговля в стационарной точке. Для маркетплейсов — не применим.</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          На практике <strong>99% ИП-продавцов на маркетплейсах выбирают УСН 6%</strong>. Причина проста:
          маржа в большинстве категорий 20–35%, и платить 6% с оборота выгоднее, чем разбираться
          с подтверждением расходов для УСН 15%.
        </p>

        <h3 style={styles.h3}>Обязательные страховые взносы ИП в 2026 году</h3>
        <p style={styles.p}>
          Независимо от дохода, ИП платит фиксированные взносы за себя: в 2026 году это около 55 000 ₽ в год
          (ПФР + ОМС). Сверх 300 000 ₽ дохода — ещё 1% с суммы превышения, но максимум около 280 000 ₽.
          Хорошая новость: на УСН «Доходы» все уплаченные взносы вычитаются из налога.
        </p>
        <p style={styles.p}>
          То есть если ваш налог по УСН за квартал — 50 000 ₽, а взносы вы уже уплатили 55 000 ₽ —
          платить налог за этот квартал не нужно. На практике это снижает эффективную ставку
          налога с 6% до 3–4% для большинства малых продавцов.
        </p>

        <h2 style={styles.h2}>ООО для маркетплейса: когда имеет смысл</h2>
        <p style={styles.p}>
          ООО — более сложная и дорогая форма. Регистрация стоит 4 000 ₽ госпошлины (или 0 ₽ через Госуслуги
          с электронной подписью), требует устава, печати, обязательного бухгалтера. Зачем тогда ООО?
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Несколько партнёров.</strong> Если бизнес ведёте с партнёром, ООО чётко фиксирует доли. ИП — это всегда один человек.</li>
          <li style={styles.li}><strong>Привлечение инвесторов.</strong> Инвесторы заходят долями в ООО, не в ИП.</li>
          <li style={styles.li}><strong>Ограниченная ответственность.</strong> При ИП вы отвечаете по долгам всем личным имуществом. При ООО — только уставным капиталом (хотя субсидиарная ответственность директора тоже существует).</li>
          <li style={styles.li}><strong>Корпоративные клиенты.</strong> Некоторые B2B-покупатели требуют контрагента-юрлицо для вычета НДС.</li>
          <li style={styles.li}><strong>Продажа бизнеса в будущем.</strong> Долю в ООО продать легче, чем переписать ИП.</li>
        </ul>
        <p style={styles.p}>
          Если ни один из этих пунктов не актуален — выбирайте ИП. ООО создаёт избыточную административную
          нагрузку для солопредпринимателя с одним магазином на маркетплейсе.
        </p>

        <h2 style={styles.h2}>Сравнительная таблица: самозанятый, ИП, ООО</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Критерий</th>
              <th style={styles.th}>Самозанятый</th>
              <th style={styles.th}>ИП (УСН 6%)</th>
              <th style={styles.th}>ООО (УСН 6%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Регистрация</td>
              <td style={styles.td}>10 мин, приложение</td>
              <td style={styles.td}>3–5 дней, МФЦ или онлайн</td>
              <td style={styles.td}>5–7 дней + нотариус</td>
            </tr>
            <tr>
              <td style={styles.td}>Налог</td>
              <td style={styles.tdAccent}><strong>4–6%</strong></td>
              <td style={styles.td}>6% (реально 3–4%)</td>
              <td style={styles.td}>6% (реально 5–6%)</td>
            </tr>
            <tr>
              <td style={styles.td}>Обязательные взносы/год</td>
              <td style={styles.tdAccent}><strong>0 ₽</strong></td>
              <td style={styles.td}>~55 000 ₽</td>
              <td style={styles.td}>Зарплата директора + НДФЛ + взносы</td>
            </tr>
            <tr>
              <td style={styles.td}>Лимит оборота</td>
              <td style={styles.td}>2,4 млн ₽/год</td>
              <td style={styles.tdAccent}><strong>450 млн ₽/год</strong></td>
              <td style={styles.td}>450 млн ₽/год</td>
            </tr>
            <tr>
              <td style={styles.td}>Перепродажа товаров</td>
              <td style={styles.td}>Нельзя</td>
              <td style={styles.tdAccent}><strong>Можно</strong></td>
              <td style={styles.tdAccent}><strong>Можно</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Сотрудники</td>
              <td style={styles.td}>Нельзя</td>
              <td style={styles.td}>До 130 человек</td>
              <td style={styles.td}>До 130 человек</td>
            </tr>
            <tr>
              <td style={styles.td}>Ликвидация</td>
              <td style={styles.td}>1 день</td>
              <td style={styles.td}>7–10 дней</td>
              <td style={styles.td}>3–6 месяцев</td>
            </tr>
            <tr>
              <td style={styles.td}>Бухгалтерия</td>
              <td style={styles.td}>Не нужна</td>
              <td style={styles.td}>Минимальная</td>
              <td style={styles.td}>Обязательная</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Как зарегистрировать ИП для маркетплейса: шаг за шагом</h2>
        <p style={styles.p}>
          Регистрация занимает меньше часа если делать через Госуслуги с подтверждённой учётной записью.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Шаг 1.</strong> Зайдите на Госуслуги → «Регистрация ИП». Заявление Р21001, госпошлина
            0 ₽ при электронной подаче.
          </li>
          <li style={styles.li}>
            <strong>Шаг 2.</strong> Укажите код ОКВЭД. Основной — <strong>47.91</strong> (торговля розничная
            по почте или через интернет). Дополнительно можно добавить 47.91.1, 46.90, 47.99.
          </li>
          <li style={styles.li}>
            <strong>Шаг 3.</strong> Выберите систему налогообложения. Сразу при регистрации подайте заявление
            о переходе на УСН форма 26.2-1. Если не подать в течение 30 дней после регистрации — ИП
            автоматически окажется на ОСНО (общая система, НДС, сложная отчётность).
          </li>
          <li style={styles.li}>
            <strong>Шаг 4.</strong> Откройте расчётный счёт. Работать с маркетплейсами без расчётного счёта
            невозможно — выплаты приходят только на него. Популярные банки для ИП: Тинькофф, Альфа, Сбер.
          </li>
          <li style={styles.li}>
            <strong>Шаг 5.</strong> Зарегистрируйтесь на Wildberries или Ozon как продавец, указав данные ИП.
          </li>
        </ul>

        <div
          style={{
            padding: "16px 20px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            margin: "16px 0",
          }}
        >
          <p style={{ margin: 0, fontSize: 14, color: "#5b21b6" }}>
            <strong>Совет:</strong> Не затягивайте с подачей заявления на УСН. Один продавец из нашей базы
            пропустил 30-дневный срок — и провёл первый квартал на ОСНО, платя НДС 20% и сдавая
            квартальную декларацию. Переход на УСН возможен только с нового года. Потеря: около 80 000 ₽
            лишних налогов за квартал.
          </p>
        </div>

        <h2 style={styles.h2}>Типичные ошибки при выборе формы бизнеса</h2>

        <h3 style={styles.h3}>Ошибка 1: Зарегистрировать самозанятость и перепродавать товар</h3>
        <p style={styles.p}>
          Самая частая проблема на старте. Человек видит простоту НПД, регистрируется, закупает 50 единиц
          в Китае и выставляет на WB. ФНС проверяет — и снимает с НПД задним числом, доначисляя НДФЛ 13%
          плюс штрафы. Один такой случай в категории детских игрушек обошёлся продавцу в 140 000 ₽
          доначислений за 8 месяцев торговли.
        </p>

        <h3 style={styles.h3}>Ошибка 2: Не подать уведомление о переходе на УСН</h3>
        <p style={styles.p}>
          Регистрация ИП и выбор налогового режима — два отдельных действия. ИП по умолчанию оказывается
          на ОСНО. Уведомление о переходе на УСН нужно подать вместе с заявлением на регистрацию или
          в течение 30 дней после. Иначе — ждать до 1 января следующего года.
        </p>

        <h3 style={styles.h3}>Ошибка 3: Открыть ООО «на всякий случай»</h3>
        <p style={styles.p}>
          Новички иногда регистрируют ООО, считая его «солиднее». На деле ООО обходится дороже: обязательный
          бухгалтер (от 3 000 ₽/мес), сложная ликвидация, необходимость платить директору минимальную
          зарплату. Для одного человека с оборотом до 10 млн ₽/мес — лишняя головная боль без реальных плюсов.
        </p>

        <h3 style={styles.h3}>Ошибка 4: Неправильные коды ОКВЭД</h3>
        <p style={styles.p}>
          Маркетплейсы — это интернет-торговля. Основной ОКВЭД должен это отражать. Если у вас стоит,
          например, 56.10 (рестораны) и вы торгуете посудой — банк может заморозить счёт при первых поступлениях
          от маркетплейса «по несоответствию деятельности». Добавить ОКВЭД можно в любой момент
          через Госуслуги бесплатно.
        </p>

        <h2 style={styles.h2}>Чек-лист: что сделать до первой продажи</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Определить форму: самозанятый (только хэндмейд, оборот до 2,4 млн) или ИП (перепродажа, рост)</li>
          <li style={styles.li}>Зарегистрировать ИП через Госуслуги (0 ₽ госпошлины онлайн)</li>
          <li style={styles.li}>Сразу подать уведомление о переходе на УСН 6%</li>
          <li style={styles.li}>Выбрать и указать правильный ОКВЭД (47.91 — основной)</li>
          <li style={styles.li}>Открыть расчётный счёт в банке — без него маркетплейс не перечислит деньги</li>
          <li style={styles.li}>Зарегистрировать личный кабинет продавца на WB и Ozon с данными ИП</li>
          <li style={styles.li}>Настроить учёт выручки — хотя бы простую таблицу с доходами по месяцам</li>
          <li style={styles.li}>Внести в календарь сроки уплаты авансов по УСН: 25 апреля, 25 июля, 25 октября</li>
          <li style={styles.li}>Не забыть фиксированные страховые взносы: можно платить частями ежеквартально</li>
          <li style={styles.li}>Решить, нужен ли бухгалтер — на старте справляется большинство сами через «Мои дела» или Эльбу</li>
          <li style={styles.li}>Проверить: нужна ли сертификация или маркировка для вашего товара до первой поставки</li>
          <li style={styles.li}>Не открывать ООО без реальной необходимости (партнёр, инвестор)</li>
          <li style={styles.li}>При обороте выше 60 млн ₽/год — проконсультироваться с бухгалтером насчёт НДС</li>
          <li style={styles.li}>Сохранить все документы на товар (накладные, инвойсы) — маркетплейсы могут запросить</li>
        </ul>

        <h2 style={styles.h2}>Коротко: что выбрать</h2>
        <p style={styles.p}>
          Если вы только начинаете и будете перепродавать товар — <strong>ИП на УСН 6%</strong>.
          Это оптимальное сочетание простоты регистрации, минимальной отчётности и отсутствия
          ограничений по виду деятельности.
        </p>
        <p style={styles.p}>
          Самозанятость — только если продаёте то, что делаете сами, и оборот точно не превысит 2,4 млн ₽.
          ООО — если в бизнесе несколько партнёров или планируете привлекать инвестиции.
        </p>
        <p style={styles.p}>
          Средний ИП-продавец с оборотом 500 000 ₽/мес платит примерно 35 000–40 000 ₽ в месяц
          (налог УСН 6% за вычетом части взносов + квартальные авансы). Это нормально и заложить
          это в юнит-экономику можно с первого дня.
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Зарегистрировали ИП — теперь нужны фото для первых карточек
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Фотосессия для 10 товаров в студии обходится от 50 000 ₽ и занимает неделю. В{" "}
            <Link href="/" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>{" "}
            первые 13 кадров бесплатно. Загрузите фото товара — получите готовый кадр для WB и Ozon в формате
            900×1200 за 2 минуты.
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
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/samozanyatyy-marketpleys-2026" style={{ color: "#7c3aed" }}>
              Самозанятые на Wildberries и Ozon: налоги, лимиты и ограничения
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/nalogi-sellerov-wildberries-ozon-2026" style={{ color: "#7c3aed" }}>
              Налоги для продавцов WB и Ozon: УСН, НДС и что выбрать
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/startovye-vlozheniya-marketpleys-2026" style={{ color: "#7c3aed" }}>
              Сколько нужно денег для старта на маркетплейсе: полный расчёт
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link>
          </li>
        </ul>
      </article>
    </>
  );
}
