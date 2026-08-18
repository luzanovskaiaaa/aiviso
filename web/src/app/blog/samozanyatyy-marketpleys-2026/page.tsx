import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Самозанятые на WB и Ozon в 2026: налоги, лимиты, ограничения — Aiviso",
  description: "Может ли самозанятый продавать на Wildberries и Ozon, какие налоги платить, лимит дохода 2,4 млн и когда переходить на ИП. Чек-лист из 14 пунктов для старта.",
  keywords: [
    "самозанятый на wildberries",
    "самозанятый на ozon",
    "самозанятый маркетплейс 2026",
    "налог на профессиональный доход маркетплейс",
    "ограничения самозанятых wb",
    "самозанятый или ип для маркетплейса",
    "как зарегистрироваться самозанятым",
    "лимит самозанятого 2026",
  ],
  alternates: { canonical: "/blog/samozanyatyy-marketpleys-2026" },
  openGraph: {
    title: "Самозанятые на Wildberries и Ozon в 2026: налоги и ограничения",
    description: "Может ли самозанятый торговать на маркетплейсе, лимит 2,4 млн, запрещённые товары и когда переходить на ИП.",
    url: "/blog/samozanyatyy-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Самозанятые на Wildberries и Ozon в 2026: налоги, лимиты и ограничения",
  description: "Полный гайд для начинающих селлеров: как самозанятому продавать на WB и Ozon, какие налоги платить, что запрещено и когда открывать ИП.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-18",
  dateModified: "2026-08-18",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/samozanyatyy-marketpleys-2026",
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
      name: "Самозанятые на маркетплейсах",
      item: "https://aiviso.ru/blog/samozanyatyy-marketpleys-2026",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "28px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  ol: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
  badge: {
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
  } as React.CSSProperties,
};

export default function SamozanyatyyMarketpleys() {
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
          <span style={{ color: "#1f2937" }}>Самозанятые на маркетплейсах</span>
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
          Самозанятые на Wildberries и Ozon в 2026: налоги, лимиты и ограничения
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 18 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Каждый месяц тысячи людей задают один и тот же вопрос: «Могу ли я продавать на Wildberries или Ozon как
          самозанятый — без ИП и без сложной бухгалтерии?» Ответ: да, но с важными оговорками. В этой статье — чёткие
          правила, актуальные лимиты и конкретные случаи, когда самозанятость подходит, а когда придётся открывать ИП.
        </p>

        {/* ── 1 ── */}
        <h2 style={styles.h2}>Что такое самозанятость и как она работает для маркетплейсов</h2>
        <p style={styles.p}>
          Самозанятость — это режим налога на профессиональный доход (НПД). Зарегистрироваться можно за 10 минут через
          приложение «Мой налог», без похода в налоговую. Ставка налога:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>4%</strong> — с продаж физическим лицам</li>
          <li style={styles.li}><strong>6%</strong> — с продаж юридическим лицам и ИП</li>
        </ul>
        <p style={styles.p}>
          Wildberries и Ozon — это юрлица, которые выступают агентами: они принимают деньги от покупателей и
          перечисляют вам вознаграждение за проданный товар. Формально выплата от маркетплейса приходит как доход от
          юрлица, то есть под ставку 6%.
        </p>
        <p style={styles.p}>
          На практике один из наших клиентов — Алексей из Екатеринбурга, продаёт аксессуары для телефонов — работал как
          самозанятый восемь месяцев и платил ровно 6% с выплат от WB. При выручке 180 000 ₽/мес налог составлял около
          10 800 ₽. Никаких деклараций, никаких авансов — приложение считает само.
        </p>

        {/* ── 2 ── */}
        <h2 style={styles.h2}>Главные ограничения для самозанятых</h2>
        <p style={styles.p}>
          Прежде чем регистрироваться, убедитесь, что вы не попадаете под запреты. Самозанятый <strong>не может</strong>:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Перепродавать чужие товары.</strong> НПД разрешён только для продажи товаров собственного
            производства. Купить партию носков в Китае и продать через WB — нельзя. Самому связать носки и продать —
            можно.
          </li>
          <li style={styles.li}>
            <strong>Нанимать сотрудников.</strong> Если у вас есть хотя бы один оформленный работник — вы обязаны стать
            ИП.
          </li>
          <li style={styles.li}>
            <strong>Зарабатывать больше 2 400 000 ₽ в год.</strong> Как только годовой доход превышает этот лимит,
            статус самозанятого автоматически аннулируется. Маркетплейс продолжит работать с вами, но вы должны
            немедленно зарегистрировать ИП.
          </li>
          <li style={styles.li}>
            <strong>Продавать подакцизные товары:</strong> алкоголь, табак, бензин, ювелирные украшения из драгоценных
            металлов (с 2023 года ювелирка выведена из НПД).
          </li>
          <li style={styles.li}>
            <strong>Продавать товары, требующие обязательной маркировки Честный знак</strong> — молочку, обувь, одежду
            ряда групп — без соответствующего статуса участника системы маркировки.
          </li>
        </ul>

        <div
          style={{
            padding: "16px 20px",
            background: "#fef3c7",
            border: "1px solid #fde68a",
            borderRadius: 12,
            margin: "20px 0",
          }}
        >
          <p style={{ margin: 0, fontSize: 15, color: "#92400e" }}>
            <strong>Важно про «своё производство».</strong> Налоговая трактует это широко. Если вы покупаете заготовки
            и существенно их дорабатываете (расписываете, шьёте, собираете вручную) — это считается производством.
            Если просто переклеиваете этикетку — нет. В спорных случаях запросите письменное разъяснение у своей
            налоговой инспекции.
          </p>
        </div>

        {/* ── 3 ── */}
        <h2 style={styles.h2}>Какие товары реально продают самозанятые на WB и Ozon</h2>
        <p style={styles.p}>
          По данным самих маркетплейсов и форумов продавцов, самые популярные категории среди самозанятых:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Handmade и декор:</strong> свечи, мыло, картины, керамика, вязаные изделия</li>
          <li style={styles.li}><strong>Текстиль собственного пошива:</strong> чехлы, подушки, косметички, сумки</li>
          <li style={styles.li}><strong>Еда собственного производства:</strong> варенье, выпечка, сухофрукты (при наличии санитарного заключения)</li>
          <li style={styles.li}><strong>Цифровые товары:</strong> шаблоны, распечатки, планировщики (продаются через Ozon Digital)</li>
          <li style={styles.li}><strong>Растения и рассада:</strong> комнатные цветы, рассада овощей</li>
          <li style={styles.li}><strong>Услуги мастера, оформленные как готовый продукт:</strong> портреты по фото, гравировка, персонализированные товары</li>
        </ul>
        <p style={styles.p}>
          Марина из Краснодара делает соевые свечи вручную. За первые полгода на WB — 340 000 ₽ выручки при статусе
          самозанятой. Налог: 6% = 20 400 ₽. Если бы она открыла ИП на УСН 6% — получилось бы то же самое, плюс
          страховые взносы ~49 500 ₽ в год. Самозанятость выгоднее при выручке до ~820 000 ₽/год именно из-за отсутствия
          обязательных взносов.
        </p>

        {/* ── 4 ── */}
        <h2 style={styles.h2}>Как зарегистрироваться и подключиться к маркетплейсу</h2>

        <h3 style={styles.h3}>Шаг 1. Регистрация самозанятого</h3>
        <ol style={styles.ol}>
          <li style={styles.li}>Скачайте приложение «Мой налог» (ФНС России)</li>
          <li style={styles.li}>Войдите через Госуслуги или по паспорту</li>
          <li style={styles.li}>Укажите вид деятельности — «Продажа товаров собственного производства» или конкретную категорию</li>
          <li style={styles.li}>Получите справку о регистрации в приложении (нужна для маркетплейса)</li>
        </ol>
        <p style={styles.p}>Регистрация занимает 5–10 минут. Стоимость — ноль рублей.</p>

        <h3 style={styles.h3}>Шаг 2. Регистрация на маркетплейсе</h3>
        <p style={styles.p}>
          Оба маркетплейса принимают самозанятых. Что понадобится:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Маркетплейс</th>
              <th style={styles.th}>Гарантийный взнос</th>
              <th style={styles.th}>Документы</th>
              <th style={styles.th}>Срок проверки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>Wildberries</strong></td>
              <td style={styles.td}>10 000 ₽</td>
              <td style={styles.td}>Паспорт + справка НПД + ИНН</td>
              <td style={styles.td}>1–3 рабочих дня</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Ozon</strong></td>
              <td style={styles.tdAccent}>Нет взноса</td>
              <td style={styles.td}>Паспорт + справка НПД + ИНН</td>
              <td style={styles.td}>1–2 рабочих дня</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Справку о регистрации самозанятого выгружайте из приложения «Мой налог» — она формируется за секунду и
          подтверждает ваш статус с датой постановки на учёт.
        </p>

        <h3 style={styles.h3}>Шаг 3. Чек за каждую продажу</h3>
        <p style={styles.p}>
          По закону самозанятый обязан выбивать чек на каждый доход. На практике маркетплейсы сами формируют реестры
          выплат, и многие продавцы вносят доход одной суммой раз в месяц — по итогу выплаты от WB или Ozon. Это
          законно: вы вносите доход датой получения денег на счёт.
        </p>

        {/* ── 5 ── */}
        <h2 style={styles.h2}>Налоги: сколько реально платить</h2>
        <p style={styles.p}>
          Налог начисляется только с фактически полученных выплат — не с оборота, не с выручки покупателя, а с суммы,
          которую маркетплейс перечислил вам после вычета комиссии.
        </p>

        <p style={styles.p}><strong>Пример расчёта для WB:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Покупатель заплатил: 2 000 ₽</li>
          <li style={styles.li}>Комиссия WB (25%): −500 ₽</li>
          <li style={styles.li}>Логистика и эквайринг: −180 ₽</li>
          <li style={styles.li}>Вы получили на счёт: <strong>1 320 ₽</strong></li>
          <li style={styles.li}>Налог 6% от 1 320 ₽ = <strong>79,2 ₽</strong></li>
        </ul>

        <p style={styles.p}>
          Итого с продажи за 2 000 ₽ — налог около 80 ₽, то есть 4% от конечной цены покупателя. Это меньше, чем
          кажется на первый взгляд.
        </p>

        <p style={styles.p}>
          Бонус: при первой регистрации ФНС даёт налоговый вычет 10 000 ₽. Пока вычет не исчерпан, ставка снижается
          до 3% (вместо 6%). На практике это экономия ~10 000 ₽ в первые месяцы работы.
        </p>

        {/* ── 6 ── */}
        <h2 style={styles.h2}>Лимит 2 400 000 ₽: что делать когда он заканчивается</h2>
        <p style={styles.p}>
          Лимит считается нарастающим итогом с 1 января каждого года. При выручке около 200 000 ₽/месяц лимит
          заканчивается примерно за год. При 400 000 ₽/мес — уже за полгода.
        </p>
        <p style={styles.p}>
          Что происходит при превышении:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Приложение «Мой налог» уведомит вас заранее — за несколько недель до достижения лимита.
          </li>
          <li style={styles.li}>
            Вы обязаны зарегистрировать ИП в течение 20 дней с момента превышения.
          </li>
          <li style={styles.li}>
            Маркетплейс продолжит работу — он не блокирует аккаунт автоматически — но вы будете нарушать закон, торгуя
            без статуса.
          </li>
          <li style={styles.li}>
            Оптимальная стратегия: когда доход стабильно 150 000+ ₽/мес, готовьте документы на ИП заранее, не ждите
            уведомления.
          </li>
        </ul>

        <p style={styles.p}>
          Хорошая новость: аккаунт на маркетплейсе при переходе на ИП можно перепривязать — история продаж, отзывы и
          рейтинг сохраняются. WB и Ozon предусматривают процедуру смены организационно-правовой формы без потери
          магазина.
        </p>

        {/* ── 7 ── */}
        <h2 style={styles.h2}>Самозанятый vs ИП: сравнение по-честному</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Критерий</th>
              <th style={styles.th}>Самозанятый</th>
              <th style={styles.th}>ИП на УСН 6%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Регистрация</td>
              <td style={styles.tdAccent}>5–10 мин, бесплатно</td>
              <td style={styles.td}>Несколько дней, 800 ₽ госпошлина (или бесплатно через Госуслуги)</td>
            </tr>
            <tr>
              <td style={styles.td}>Налог</td>
              <td style={styles.tdAccent}>6% от выплат маркетплейса</td>
              <td style={styles.td}>6% от дохода</td>
            </tr>
            <tr>
              <td style={styles.td}>Страховые взносы</td>
              <td style={styles.tdAccent}>Нет</td>
              <td style={styles.td}>~55 000 ₽/год (фиксированные) + 1% с дохода свыше 300 тыс.</td>
            </tr>
            <tr>
              <td style={styles.td}>Лимит дохода</td>
              <td style={styles.td}>2 400 000 ₽/год</td>
              <td style={styles.td}>265 800 000 ₽/год (УСН)</td>
            </tr>
            <tr>
              <td style={styles.td}>Наёмные работники</td>
              <td style={styles.td}>Нет</td>
              <td style={styles.td}>До 130 человек</td>
            </tr>
            <tr>
              <td style={styles.td}>Перепродажа</td>
              <td style={styles.td}>Запрещена</td>
              <td style={styles.td}>Разрешена</td>
            </tr>
            <tr>
              <td style={styles.td}>Честный знак, акциз</td>
              <td style={styles.td}>Ограничения</td>
              <td style={styles.td}>Доступно</td>
            </tr>
            <tr>
              <td style={styles.td}>Выгодно при доходе</td>
              <td style={styles.tdAccent}>До 820 000 ₽/год</td>
              <td style={styles.td}>От 820 000 ₽/год</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Порог 820 000 ₽/год — это примерная точка, где страховые взносы ИП «съедают» выгоду от режима. При меньшем
          доходе самозанятость выгоднее; при большем — ИП на УСН 6% обычно даёт ту же налоговую нагрузку, но открывает
          возможности для роста.
        </p>

        {/* ── 8 ── */}
        <h2 style={styles.h2}>Типичные ошибки самозанятых на маркетплейсах</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Продают чужие товары под видом «своих».</strong> Купить оптом и переклеить этикетку — это
            нарушение закона, а не творческая доработка. Налоговая проверяет реальность производства, особенно при
            больших объёмах.
          </li>
          <li style={styles.li}>
            <strong>Не вносят доход вовремя.</strong> Некоторые продавцы «забывают» вбить чек, пока не накопится сумма.
            Это риск: при проверке ФНС может доначислить налог с пенями.
          </li>
          <li style={styles.li}>
            <strong>Не следят за лимитом.</strong> Приложение показывает накопленный доход, но не все его регулярно
            проверяют. Лучше поставить напоминание в calendar при доходе 1 800 000 ₽ — есть время спокойно открыть ИП.
          </li>
          <li style={styles.li}>
            <strong>Путают оборот и выплату.</strong> Налог платится с суммы, которая пришла на счёт от маркетплейса —
            не с цены товара в карточке. Не считайте налог от полной стоимости.
          </li>
          <li style={styles.li}>
            <strong>Думают, что маркетплейс удержит налог за них.</strong> Нет. WB и Ozon перечисляют деньги без
            вычета НПД. Вы сами вносите доход в «Мой налог» и платите налог.
          </li>
        </ul>

        {/* ── 9 ── */}
        <h2 style={styles.h2}>Нужна ли касса самозанятому</h2>
        <p style={styles.p}>
          Нет. Самозанятые освобождены от применения ККТ. Чек покупателю формируется через приложение «Мой налог» в
          электронном виде. Для маркетплейсов это неактуально — площадка сама выдаёт кассовый чек покупателю при
          продаже; вам нужно лишь фиксировать доход как самозанятому.
        </p>

        {/* ── 10 ── */}
        <h2 style={styles.h2}>Чек-лист: самозанятый готов к старту на WB и Ozon</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Зарегистрировался в «Мой налог», получил справку о постановке на учёт</li>
          <li style={styles.li}>Товар точно собственного производства — не перепродажа</li>
          <li style={styles.li}>Товар не из запрещённых категорий (алкоголь, ювелирка, табак)</li>
          <li style={styles.li}>Проверил, нужна ли маркировка Честный знак для категории товара</li>
          <li style={styles.li}>Зарегистрировался на маркетплейсе как самозанятый, загрузил справку НПД</li>
          <li style={styles.li}>Знаю, с какой суммы считается налог (с выплаты от маркетплейса, не с цены в карточке)</li>
          <li style={styles.li}>Поставил напоминание при доходе 1 800 000 ₽ — открывать ИП</li>
          <li style={styles.li}>Использовал налоговый вычет 10 000 ₽ с первых продаж (ставка 3% вместо 6%)</li>
          <li style={styles.li}>Выбил чек в «Мой налог» после каждой выплаты от маркетплейса</li>
          <li style={styles.li}>Фотографии товара соответствуют реальному продукту, не вводят покупателя в заблуждение</li>
          <li style={styles.li}>Карточка оформлена по требованиям площадки — размеры, фон, количество фото</li>
          <li style={styles.li}>Прочитал правила маркетплейса для самозанятых (раздел «Продавцам» → «Самозанятые»)</li>
          <li style={styles.li}>Знаю, какая схема логистики доступна (WB: FBO/FBS; Ozon: FBO/FBS/realFBS)</li>
          <li style={styles.li}>Сформировал минимальный запас товара для первой поставки</li>
        </ul>

        {/* ── CTA ── */}
        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Карточка товара решает всё — даже если налоги в порядке
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Самозанятые часто делают первые карточки на телефон — и теряют продажи из-за фото. Aiviso делает
            профессиональные изображения из одного снимка за 2 минуты:{" "}
            <strong>lifestyle-сцены, белый фон 900×1200, инфографика</strong> — всё что нужно для старта на WB и Ozon.
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
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно — 13 кредитов в подарок
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/kak-otkryt-magazin-wildberries-2026" style={{ color: "#7c3aed" }}>
              Как открыть магазин на Wildberries в 2026: пошаговая инструкция
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/kak-otkryt-magazin-ozon-2026" style={{ color: "#7c3aed" }}>
              Как открыть магазин на Ozon в 2026: документы и первые шаги
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула расчёта прибыли
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/" style={{ color: "#7c3aed" }}>
              Главная — AI-генерация фото для маркетплейсов
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
