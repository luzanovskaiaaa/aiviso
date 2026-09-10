import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Инструменты аналитики маркетплейсов 2026 — Aiviso",
  description:
    "MPStats, Sellmonitor, Маяк и встроенная аналитика WB и Ozon: обзор инструментов для селлеров, сравнение цен и чек-лист еженедельного мониторинга.",
  keywords: [
    "инструменты аналитики маркетплейсов",
    "MPStats",
    "Sellmonitor маркетплейс",
    "аналитика wildberries",
    "аналитика ozon",
    "сервисы для селлеров",
    "маяк аналитика wb",
    "аналитика продаж маркетплейс 2026",
  ],
  alternates: { canonical: "/blog/instrumenty-analitiki-marketpleysov-2026" },
  openGraph: {
    title: "Инструменты аналитики маркетплейсов 2026: MPStats, Sellmonitor и другие",
    description:
      "Обзор платных и бесплатных инструментов аналитики для продавцов WB и Ozon. Что смотреть, сколько стоит, как выбрать под свои задачи.",
    url: "/blog/instrumenty-analitiki-marketpleysov-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Инструменты аналитики маркетплейсов 2026: MPStats, Sellmonitor и другие",
  description:
    "Обзор платных и бесплатных инструментов аналитики для продавцов WB и Ozon: что смотреть, сколько стоит, как выбрать.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/instrumenty-analitiki-marketpleysov-2026",
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
      name: "Инструменты аналитики маркетплейсов 2026",
      item: "https://aiviso.ru/blog/instrumenty-analitiki-marketpleysov-2026",
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

export default function InstrumentyAnalitikiMarketpleysov() {
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
          <span style={{ color: "#1f2937" }}>Инструменты аналитики маркетплейсов 2026</span>
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
          Инструменты аналитики маркетплейсов 2026: MPStats, Sellmonitor и другие
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>10 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Без данных продавец на WB и Ozon работает вслепую: снижает цену не зная конкурентов, запускает рекламу
          без ориентира по ставкам, добавляет новые товары без анализа спроса. Разбираем, что даёт встроенная
          аналитика маркетплейсов, чем её дополняют платные сервисы и как выбрать инструмент под свой оборот.
        </p>

        <h2 style={styles.h2}>Зачем платить за аналитику, если есть личный кабинет</h2>
        <p style={styles.p}>
          Личный кабинет WB и Ozon показывает ваши цифры — продажи, остатки, выкуп, позиции. Но он не отвечает
          на вопрос <em>почему</em>. Почему конкурент продаёт в три раза больше при той же цене? Почему
          категория растёт, а ваши карточки стоят? Для этого нужны данные по рынку, а не только по вашему
          аккаунту.
        </p>
        <p style={styles.p}>Платные сервисы дают три вещи которых нет в ЛК:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Данные конкурентов.</strong> Выручка, динамика продаж, средний чек, остатки — по любой
            карточке на маркетплейсе.
          </li>
          <li style={styles.li}>
            <strong>Анализ ниши.</strong> Сколько продавцов в категории, кто держит топ, как распределяется
            выручка, есть ли место новому игроку.
          </li>
          <li style={styles.li}>
            <strong>История позиций.</strong> Как менялись позиции в поиске по конкретному ключевому слову — до
            и после рекламы, после смены заголовка или фото.
          </li>
        </ul>
        <p style={styles.p}>
          Один пример из практики: селлер в категории «органайзеры для кухни» поднял подписку на MPStats за
          2 990 ₽/мес — и за неделю нашёл конкурента с выручкой 1,2 млн ₽/мес на карточке с одним фото и
          нулевой инфографикой. Скопировал ключи, добавил инфографику, запустил рекламу — вышел в топ-5 за
          три недели. Подписка окупилась в первый день.
        </p>

        <h2 style={styles.h2}>Встроенная аналитика WB: что в ней есть</h2>
        <p style={styles.p}>
          Личный кабинет Wildberries — раздел «Аналитика» — за последние два года серьёзно вырос. Там теперь
          есть:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Воронка продаж.</strong> Показы → клики → корзина → заказ → выкуп по каждой карточке.
            Это главная метрика: если CTR ниже 2%, проблема в главном фото; если конверсия из корзины в заказ
            низкая — проблема в цене или описании.
          </li>
          <li style={styles.li}>
            <strong>Позиции в поиске.</strong> По каким ключам показывается карточка и на каком месте. Доступно
            с тарифа «Расширенный» (ещё называют WB Partners Pro).
          </li>
          <li style={styles.li}>
            <strong>Отчёт по остаткам и оборачиваемости.</strong> Сколько дней хранится товар и когда надо
            делать поставку.
          </li>
          <li style={styles.li}>
            <strong>Сводный финансовый отчёт.</strong> Выплаты, хранение, логистика, комиссии — всё по
            неделям.
          </li>
        </ul>

        <h3 style={styles.h3}>Аналитика в ЛК Ozon</h3>
        <p style={styles.p}>
          Ozon в 2025 году открыл «Аналитику категорий» прямо в личном кабинете: видно средний чек, выручку
          топ-100 продавцов, динамику спроса по месяцам. Для новичков — это уже рабочий инструмент выбора
          ниши. Плюс детальная воронка по каждому артикулу: показы, клики, конверсия в корзину, процент выкупа.
        </p>
        <p style={styles.p}>
          Ограничение одно: вы видите только <em>свои</em> данные, без разбивки по конкурентам. Как только
          встаёт вопрос «а почему сосед продаёт больше?» — нужен внешний сервис.
        </p>

        <h2 style={styles.h2}>Платные сервисы аналитики: обзор главных игроков</h2>

        <h3 style={styles.h3}>MPStats</h3>
        <p style={styles.p}>
          Самый распространённый сервис среди активных продавцов WB. Работает с 2019 года, парсит WB и Ozon
          ежедневно. Что умеет:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Выручка и продажи любой карточки или бренда за период</li>
          <li style={styles.li}>История цен конкурентов — помогает понять, когда они снижали цену и что это дало</li>
          <li style={styles.li}>Анализ ниши: сколько продавцов, у скольких реальные продажи, распределение выручки</li>
          <li style={styles.li}>Подбор ключевых слов: частотность, конкуренция, позиции ваших карточек</li>
          <li style={styles.li}>Мониторинг отзывов и рейтинга в динамике</li>
        </ul>
        <p style={styles.p}>
          <strong>Цена:</strong> от 2 990 ₽/мес (базовый, только WB) до 9 990 ₽/мес (максимальный, WB + Ozon).
          Годовая подписка даёт скидку около 20%.
        </p>
        <p style={styles.p}>
          <strong>Для кого подходит:</strong> продавцы с оборотом от 300 000 ₽/мес, кому нужна детальная
          картина по конкурентам и ключам. На минимальном каталоге из 3-5 товаров инструмент избыточен.
        </p>

        <h3 style={styles.h3}>Sellmonitor</h3>
        <p style={styles.p}>
          Альтернатива MPStats с упором на простоту интерфейса. Хорошо подходит тем, кто только начинает
          работать с внешней аналитикой. Покрывает WB и Ozon.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Поиск прибыльных ниш по фильтрам: выручка, конкуренция, тренд</li>
          <li style={styles.li}>Анализ карточек конкурентов: продажи, остатки, история цены</li>
          <li style={styles.li}>Отслеживание позиций по ключам — графики по дням</li>
          <li style={styles.li}>Автоматические уведомления при изменении позиции или цены конкурента</li>
        </ul>
        <p style={styles.p}>
          <strong>Цена:</strong> от 1 490 ₽/мес. Есть бесплатный тариф с ограничениями (5 запросов в день).
        </p>
        <p style={styles.p}>
          <strong>Для кого подходит:</strong> новички и продавцы среднего уровня. Проще освоить, чем MPStats,
          данные немного менее детальные, но для большинства задач хватает.
        </p>

        <h3 style={styles.h3}>Маяк</h3>
        <p style={styles.p}>
          Российский сервис, сфокусированный именно на Wildberries. Сильная сторона — глубокая история данных
          (больше двух лет) и детальный анализ рекламных ставок.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>История рекламных ставок по ключевым словам — редкость среди конкурентов</li>
          <li style={styles.li}>Анализ воронки конкурентов: показы, CTR, конверсия (расчётные данные)</li>
          <li style={styles.li}>Сравнение карточек своего магазина с конкурентами в одном экране</li>
          <li style={styles.li}>Тепловые карты показов по категориям</li>
        </ul>
        <p style={styles.p}>
          <strong>Цена:</strong> от 3 500 ₽/мес. Работает только с WB.
        </p>
        <p style={styles.p}>
          <strong>Для кого подходит:</strong> продавцы с активными рекламными кампаниями на WB, кому важно
          понимать ставки конкурентов и оптимизировать бюджет.
        </p>

        <h2 style={styles.h2}>Что умеют все три: сравнительная таблица</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Функция</th>
              <th style={styles.th}>MPStats</th>
              <th style={styles.th}>Sellmonitor</th>
              <th style={styles.th}>Маяк</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Wildberries</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
            </tr>
            <tr>
              <td style={styles.td}>Ozon</td>
              <td style={styles.td}>Да (платно)</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Нет</td>
            </tr>
            <tr>
              <td style={styles.td}>Выручка конкурентов</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
            </tr>
            <tr>
              <td style={styles.td}>История рекламных ставок</td>
              <td style={styles.td}>Ограниченно</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.tdAccent}><strong>Да</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Мониторинг позиций</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
              <td style={styles.td}>Да</td>
            </tr>
            <tr>
              <td style={styles.td}>Подбор ключей</td>
              <td style={styles.tdAccent}><strong>Подробно</strong></td>
              <td style={styles.td}>Базово</td>
              <td style={styles.td}>Базово</td>
            </tr>
            <tr>
              <td style={styles.td}>Цена от (мес)</td>
              <td style={styles.td}>2 990 ₽</td>
              <td style={styles.td}>1 490 ₽</td>
              <td style={styles.td}>3 500 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Бесплатный тариф</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.td}>Да (ограниченный)</td>
              <td style={styles.td}>Нет</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Как выбрать сервис под свой бюджет и задачи</h2>
        <p style={styles.p}>Простое правило: инструмент аналитики должен окупаться за месяц.</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Оборот до 100 000 ₽/мес.</strong> Платные сервисы пока избыточны. Начните с ЛК WB и Ozon —
            там достаточно данных чтобы понять, где проседает воронка. Используйте бесплатный тариф Sellmonitor
            для разовых проверок конкурентов.
          </li>
          <li style={styles.li}>
            <strong>Оборот 100 000 – 500 000 ₽/мес.</strong> Начинайте с Sellmonitor на базовом тарифе.
            1 490 ₽ при таком обороте — копейки, а понимание конкурентов быстро отобьётся в первую неделю.
          </li>
          <li style={styles.li}>
            <strong>Оборот от 500 000 ₽/мес.</strong> MPStats на полном тарифе с Ozon. Если основной канал —
            WB и активно используете рекламу, добавьте Маяк для контроля ставок.
          </li>
          <li style={styles.li}>
            <strong>Несколько категорий и брендов.</strong> Комбинация MPStats + Маяк. Да, это около 6 000 ₽/мес,
            но при обороте от 1 млн это стандартная статья расходов у всех топовых продавцов.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: что смотреть каждую неделю</h2>
        <p style={styles.p}>
          Аналитика полезна только если она становится привычкой. Вот минимальный набор метрик для
          еженедельного контроля:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>CTR главного фото.</strong> Норма по большинству категорий — 3–6%. Ниже 2% — главное фото
            проигрывает конкурентам, нужно обновление.
          </li>
          <li style={styles.li}>
            <strong>Конверсия в заказ.</strong> Норма — 5–12% в зависимости от категории. Если ниже — смотрите
            на цену, отзывы, описание и инфографику.
          </li>
          <li style={styles.li}>
            <strong>Процент выкупа.</strong> Для одежды норма ниже (40–60%), для товаров FMCG — выше (70–90%).
            Падение на 5+ процентных пунктов — сигнал к разбору возвратов.
          </li>
          <li style={styles.li}>
            <strong>Позиция по топ-3 ключам.</strong> Один раз в неделю проверяйте где вы стоите по
            главным ключевым словам. Просадка на 10+ позиций — смотрите на конкурентов.
          </li>
          <li style={styles.li}>
            <strong>Остатки.</strong> Нет остатков = нет продаж = потеря позиций. Ставьте напоминание за
            14–21 день до обнуления стока.
          </li>
          <li style={styles.li}>
            <strong>Выручка конкурентов.</strong> Раз в две недели — сколько заработал топ-5 в вашей категории.
            Если разрыв растёт — их что-то изменилось: фото, цена, реклама.
          </li>
          <li style={styles.li}>
            <strong>Отзывы и оценка.</strong> Средняя оценка ниже 4.3 начинает видимо влиять на конверсию.
            Ниже 4.0 — срочно работать с обратной связью.
          </li>
        </ul>

        <h2 style={styles.h2}>Фото в системе аналитики: что упускают большинство</h2>
        <p style={styles.p}>
          Все перечисленные сервисы отлично показывают <em>что происходит</em> с карточкой — CTR, позиции,
          выкуп. Но ни один не помогает понять <em>что именно исправить в фото</em> чтобы CTR вырос.
        </p>
        <p style={styles.p}>
          Это отдельная работа. После того как MPStats показал что ваш CTR 1.8% при среднем по топ-10
          конкурентов 4.2% — следующий шаг: посмотреть на их первые слайды и понять, чем они лучше ваших.
          Часто это не качество снимка, а подача: другой фон, lifestyle-сцена вместо белого, текст с ключевым
          преимуществом на первом слайде.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «термосы» получил рост CTR с 2.1% до 4.8% после того как поменял фон
          с белого на сцену с горячим напитком — потребовалось три варианта генерации в{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>
          {" "}и две недели теста. Аналитика дала диагноз, обновление фото — лечение.
        </p>
        <p style={styles.p}>
          Поэтому правильный процесс выглядит так: платный сервис аналитики помогает найти слабое место, а
          быстрое обновление контента — исправить его без простоя карточки. Подробнее о том, как безопасно
          менять фото без потери позиций — в нашем{" "}
          <Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>
            отдельном материале
          </Link>
          .
        </p>

        <h2 style={styles.h2}>Итог: с чего начать</h2>
        <p style={styles.p}>
          Не надо сразу платить за все сервисы. Вот последовательность:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            Настройте воронку в ЛК WB или Ozon — поймите где у вас самые большие потери (показы, клики,
            заказ, выкуп). Это бесплатно.
          </li>
          <li style={styles.li}>
            Если CTR ниже нормы — сначала обновите главное фото. Смена фото даёт результат быстрее, чем
            любой сервис аналитики.
          </li>
          <li style={styles.li}>
            Когда фото в порядке и воронка нормальная, а роста всё равно нет — подключайте платную аналитику.
            Начните с Sellmonitor, изучите конкурентов, найдите ключи которые упускаете.
          </li>
          <li style={styles.li}>
            По мере роста оборота переходите на MPStats — там глубже данные по ключам и истории продаж.
          </li>
        </ol>
        <p style={styles.p}>
          Аналитика — не магия. Она показывает проблему. Решать её всё равно придётся руками: менять фото,
          переписывать заголовок, настраивать рекламу. Но без данных вы тратите время на догадки, а не на
          действия.
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
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Аналитика показала что CTR ниже нормы?</strong> Скорее всего дело в главном фото.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso
            </Link>{" "}
            — загрузите товар, получите 2 варианта нового главного кадра за 2 минуты. 13 кредитов бесплатно
            при регистрации. Посмотрите сами, стоит ли это вашего CTR.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/analitika-prodazh-wb-ozon-2026" style={{ color: "#7c3aed" }}>
              Аналитика продаж на WB и Ozon: как читать цифры и расти в 2026
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>
              CTR карточки на WB и Ozon: как измерить и поднять кликабельность
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>
              Как обновить фото карточки и не потерять позиции
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
