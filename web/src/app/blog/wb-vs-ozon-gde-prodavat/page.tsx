import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wildberries или Ozon: где лучше продавать в 2026 — Aiviso",
  description: "Сравнение WB и Ozon по комиссиям, аудитории, конкуренции и логистике. Где выгоднее стартовать новичку в 2026? Чек-лист из 12 критериев для выбора.",
  keywords: [
    "wildberries или ozon",
    "где продавать на маркетплейсе",
    "ozon vs wildberries 2026",
    "выбор маркетплейса для продаж",
    "комиссии wildberries ozon",
    "как выбрать маркетплейс",
    "маркетплейс для новичка",
    "старт продаж wildberries ozon",
  ],
  alternates: { canonical: "/blog/wb-vs-ozon-gde-prodavat" },
  openGraph: {
    title: "Wildberries или Ozon: где лучше продавать в 2026",
    description: "Сравнение по комиссиям, аудитории, конкуренции и логистике. Чек-лист из 12 критериев для выбора маркетплейса.",
    url: "/blog/wb-vs-ozon-gde-prodavat",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wildberries или Ozon: где лучше продавать в 2026",
  description: "Сравнение WB и Ozon по комиссиям, аудитории, конкуренции и логистике. Где выгоднее стартовать новичку в 2026.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-06",
  dateModified: "2026-07-06",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/wb-vs-ozon-gde-prodavat",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Wildberries или Ozon: где продавать", item: "https://aiviso.ru/blog/wb-vs-ozon-gde-prodavat" },
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

export default function WbVsOzonGdeProdat() {
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
          <span style={{ color: "#1f2937" }}>Wildberries или Ozon: где продавать</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Wildberries или Ozon: где лучше продавать в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 6 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Главный вопрос каждого новичка: стартовать на Wildberries или Ozon? Оба маркетплейса
          выглядят похоже снаружи, но внутри — разные правила, аудитория, комиссии и логика работы.
          Разбираем по конкретным цифрам, чтобы сделать выбор за 10 минут.
        </p>

        <h2 style={styles.h2}>Масштаб и аудитория: кто где покупает</h2>
        <p style={styles.p}>По данным за первый квартал 2026 года картина такая:</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Показатель</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Ежемесячные покупатели</td>
              <td style={styles.td}>120+ млн чел.</td>
              <td style={styles.td}>55+ млн чел.</td>
            </tr>
            <tr>
              <td style={styles.td}>Средний чек</td>
              <td style={styles.td}>~1 500 ₽</td>
              <td style={styles.td}>~2 200 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Доля женщин среди покупателей</td>
              <td style={styles.td}>~74%</td>
              <td style={styles.td}>~55%</td>
            </tr>
            <tr>
              <td style={styles.td}>Топ-категории</td>
              <td style={styles.td}>Одежда, обувь, аксессуары</td>
              <td style={styles.td}>Электроника, дом, детские товары</td>
            </tr>
            <tr>
              <td style={styles.td}>Пунктов выдачи в РФ</td>
              <td style={styles.td}>50 000+</td>
              <td style={styles.td}>35 000+</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          WB — лидер по охвату, особенно в fashion-сегменте. Ozon растёт быстрее и привлекает
          более платёжеспособную и гендерно сбалансированную аудиторию. Если продаёте женскую
          одежду — WB даёт больший объём заказов. Если электронику или товары для дома — на Ozon
          средний чек выше и конкуренция в ряде ниш мягче.
        </p>

        <h2 style={styles.h2}>Комиссии и расходы: считаем без иллюзий</h2>
        <p style={styles.p}>
          Комиссия маркетплейса — не единственный расход. Важна полная стоимость продажи:
          логистика, хранение, процент возвратов и штрафы. Новички часто смотрят только на комиссию
          и потом удивляются, почему прибыли нет.
        </p>

        <h3 style={styles.h3}>Wildberries: что реально платит продавец</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Комиссия маркетплейса:</strong> 10–38% в зависимости от категории. Одежда — 23–38%, электроника — 10–15%.</li>
          <li style={styles.li}><strong>Логистика FBO (склад WB):</strong> 33–165 ₽ за единицу в зависимости от объёмного веса.</li>
          <li style={styles.li}><strong>Хранение:</strong> от 0,07 ₽ за литр в сутки — при большом остатке нарастает быстро.</li>
          <li style={styles.li}><strong>Возвраты:</strong> WB перекладывает логистику возврата на продавца. Каждый возврат стоит 33–100 ₽ сверх потерянной продажи.</li>
          <li style={styles.li}><strong>Штрафы:</strong> за пересорт, нарушения маркировки, задержку поставки. Одна ошибка — 10 000 ₽+.</li>
        </ul>

        <h3 style={styles.h3}>Ozon: прозрачнее, но есть нюансы</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Комиссия маркетплейса:</strong> 4–25%. По большинству категорий ниже, чем у WB.</li>
          <li style={styles.li}><strong>Логистика FBO:</strong> 75–300 ₽ за единицу — дороже WB, зато тариф прозрачный и не меняется внезапно.</li>
          <li style={styles.li}><strong>Последняя миля:</strong> 40–80 ₽ — Ozon берёт отдельно, на WB включена в логистику.</li>
          <li style={styles.li}><strong>Хранение:</strong> бесплатно первые 30 дней, потом 0,05–0,15 ₽ за литр в сутки.</li>
          <li style={styles.li}><strong>Эквайринг:</strong> 1,5% от суммы заказа. WB не берёт отдельно — Ozon берёт.</li>
        </ul>

        <div style={{ margin: "20px 0", padding: "14px 18px", background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 12, fontSize: 14, color: "#92400e" }}>
          <strong>Важно про возвраты:</strong> в одежде на WB доля возвратов 40–60% — это норма категории. Каждый возврат — минус логистика туда и обратно из маржи продавца. На Ozon в тех же категориях возвраты в среднем на 15–20% ниже. При высоком среднем чеке разница в экономике — существенная.
        </div>

        <h2 style={styles.h2}>Конкуренция по категориям</h2>
        <p style={styles.p}>
          На обоих маркетплейсах конкуренция высокая. Но есть ниши, где Ozon заметно свободнее:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Инструменты и стройматериалы — на WB почти не развиты, на Ozon растущая категория с живым спросом</li>
          <li style={styles.li}>Автотовары — Ozon запустил отдельный блок и активно развивает, WB отстаёт</li>
          <li style={styles.li}>Книги и канцелярия — Ozon исторически сильнее (вырос из книжного магазина)</li>
          <li style={styles.li}>Товары для спорта среднего ценового сегмента — на Ozon конкурентов втрое меньше, чем на WB</li>
        </ul>
        <p style={styles.p}>
          В fashion конкуренция на WB жёстче — 2–3 млн активных карточек в одной категории.
          Один наш клиент с мужскими кожаными ремнями вышел сначала на WB и застрял на 60–80-й
          позиции, вкладывая 15 000 ₽/мес в рекламу. Переключился на Ozon — через 6 недель вошёл
          в топ-8 по основным запросам без рекламного бюджета, потому что конкурентов в нише было
          в два раза меньше. Месячный оборот вырос с 180 000 ₽ до 340 000 ₽.
        </p>

        <h2 style={styles.h2}>Требования к карточке товара</h2>
        <p style={styles.p}>
          Оба маркетплейса используют формат 3:4 для главного фото (900×1200 px). Разница — в
          деталях оформления. Подробнее — в статье{" "}
          <Link href="/blog/wb-vs-ozon-foto-trebovaniya" style={{ color: "#7c3aed" }}>
            «Чем отличается фото для WB и Ozon»
          </Link>
          . Здесь — ключевые отличия:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Требование</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Главное фото</td>
              <td style={styles.td}>Белый или светлый фон</td>
              <td style={styles.td}>Любой фон, lifestyle разрешён</td>
            </tr>
            <tr>
              <td style={styles.td}>Максимум фото</td>
              <td style={styles.td}>30</td>
              <td style={styles.td}>15</td>
            </tr>
            <tr>
              <td style={styles.td}>Инфографика</td>
              <td style={styles.td}>Разрешена со 2-го фото</td>
              <td style={styles.td}>Разрешена, приветствуется</td>
            </tr>
            <tr>
              <td style={styles.td}>Rich-контент</td>
              <td style={styles.td}>Ограниченный редактор</td>
              <td style={styles.tdAccent}><strong>Видео, таблицы, текстовые блоки</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Модерация новой карточки</td>
              <td style={styles.td}>1–3 рабочих дня</td>
              <td style={styles.td}>1–5 рабочих дней</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          На Ozon карточки с Rich-контентом (видео + подробное описание + таблица характеристик)
          конвертируют на 18–25% лучше базовых. Это даёт преимущество тем, кто готов потратить
          время на оформление — и именно поэтому новичку там бывает проще обогнать ленивых
          конкурентов.
        </p>

        <h2 style={styles.h2}>Логистика и склады</h2>
        <h3 style={styles.h3}>Wildberries FBO: плюсы и подводные камни</h3>
        <p style={styles.p}>
          Склады WB есть в большинстве регионов, отгрузка проще — меньше требований к маркировке
          упаковки. Но есть важный нюанс: WB сам распределяет товар по складам и может
          «перекинуть» партию в другой регион без вашего согласия, а плата за межскладское
          перемещение ляжет на продавца. В некоторых месяцах это добавляло 8–12% к затратам.
        </p>
        <p style={styles.p}>
          Главный плюс FBO на WB: товар показывается приоритетно покупателям из нужного региона.
          Без склада в регионе карточка просто не появляется в выдаче большинства покупателей.
        </p>
        <h3 style={styles.h3}>Ozon FBO: жёстче на входе, прозрачнее внутри</h3>
        <p style={styles.p}>
          Ozon требует полиэтиленовую упаковку с ШК на каждую единицу — новичку это добавляет
          работы на старте. Зато склады чётко сегментированы: Москва, СПб, Екатеринбург, Казань,
          Новосибирск. Вы сами выбираете, куда везти, исходя из географии вашей аудитории.
        </p>
        <p style={styles.p}>
          Отправка на московский склад даёт доставку по МО за 1–2 дня. По остальной России — 3–7
          дней. Скорость доставки прямо влияет на конверсию: покупатели выбирают товар со значком
          «Доставка завтра» значительно чаще.
        </p>

        <h2 style={styles.h2}>Кабинет продавца и аналитика</h2>
        <p style={styles.p}>
          Здесь Ozon выигрывает по удобству. Кабинет Seller сделан понятнее, аналитика детальнее
          «из коробки». WB долго обходился минималистичным интерфейсом и только в 2025–2026 начал
          добавлять инструменты — они всё ещё сырые.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Ozon:</strong> воронка продаж по каждой карточке, сравнение с конкурентами внутри кабинета, ABC-анализ без сторонних сервисов</li>
          <li style={styles.li}><strong>WB:</strong> базовые продажи, остатки, финотчёт — для глубокого анализа нужны MPStats, Wildbox или аналогичные сервисы за 3 000–8 000 ₽/мес</li>
        </ul>
        <p style={styles.p}>
          Если хотите управлять по данным с первого дня — стартуйте с Ozon. Если важен объём
          трафика и вы готовы работать по результату, не углубляясь в воронку — WB.
        </p>

        <h2 style={styles.h2}>Чек-лист: как выбрать маркетплейс за 10 минут</h2>
        <p style={styles.p}>Ответьте на 12 вопросов. Большинство ответов укажут на платформу:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>1. Ваша категория — одежда, обувь, аксессуары?</strong> Да → WB первым. Нет → продолжить.</li>
          <li style={styles.li}><strong>2. Средний чек вашего товара выше 2 000 ₽?</strong> Да → Ozon (более платёжеспособная аудитория).</li>
          <li style={styles.li}><strong>3. Товар — электроника, инструменты, автозапчасти?</strong> Да → Ozon.</li>
          <li style={styles.li}><strong>4. Высокий процент возвратов в вашей нише (одежда, обувь)?</strong> Да → Ozon (возвраты в среднем ниже).</li>
          <li style={styles.li}><strong>5. Важен максимальный охват аудитории прямо сейчас?</strong> Да → WB (вдвое больше покупателей).</li>
          <li style={styles.li}><strong>6. Хотите аналитику без доплаты за сторонние сервисы?</strong> Да → Ozon.</li>
          <li style={styles.li}><strong>7. Небольшая стартовая партия — до 50 единиц?</strong> Да → стартуйте с FBS на любой из площадок.</li>
          <li style={styles.li}><strong>8. Конкурент уже успешен на WB, но вы не видите его на Ozon?</strong> Да → прямая дорога на Ozon в его же нише.</li>
          <li style={styles.li}><strong>9. Готовы вкладывать в рекламу от 30 000 ₽/мес?</strong> Да → WB (рекламный инвентарь шире). Нет → Ozon (органика работает при меньшем бюджете).</li>
          <li style={styles.li}><strong>10. Планируете Rich-контент: видео, подробные описания?</strong> Да → Ozon даёт под это полноценный инструментарий.</li>
          <li style={styles.li}><strong>11. Ваш поставщик уже отгружает на WB и знает маркировку?</strong> Да → WB проще на старте.</li>
          <li style={styles.li}><strong>12. Хотите сразу на оба маркетплейса?</strong> Осторожно — раздвоение внимания на старте ослабляет оба канала. Сначала один, потом второй.</li>
        </ul>

        <h2 style={styles.h2}>Когда выходить на оба маркетплейса одновременно</h2>
        <p style={styles.p}>
          Правило простое: сначала доведите первый канал до устойчивых продаж — хотя бы 300+ заказов
          в месяц и понятная положительная юнит-экономика. Потом масштабируйтесь на второй.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «товары для дома» вышел сразу на WB и Ozon. Первые 4 месяца
          суммарный оборот был меньше, чем у конкурента, который сосредоточился только на Ozon.
          Причина: размазал остатки по двум складам, потерял оборачиваемость на обоих — и позиции
          просели везде. После того как он сфокусировался на Ozon, вышел в топ-3 по ключевым
          запросам и нарастил оборот до 1,8 млн ₽/мес. Через два месяца запустил WB вторым каналом —
          суммарно вышло 2,7 млн ₽ при тех же товарных позициях.
        </p>
        <p style={styles.p}>
          Исключение: если вы дистрибьютор с большим складом и командой — два маркетплейса сразу
          оправданы. Для малого и среднего бизнеса на старте — один, потом второй.
        </p>

        <h2 style={styles.h2}>Итоговое сравнение: кому что подходит</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ситуация</th>
              <th style={styles.th}>Рекомендация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда, обувь, аксессуары любого сегмента</td>
              <td style={styles.tdAccent}><strong>Wildberries — первый выбор</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника, инструменты, автотовары</td>
              <td style={styles.tdAccent}><strong>Ozon — первый выбор</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома и дачи, мебель</td>
              <td style={styles.td}>Ozon (лучшая конверсия), потом WB</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика и парфюмерия</td>
              <td style={styles.td}>WB (больший объём заказов), Ozon (выше средний чек)</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.td}>Оба — аудитория активна на обеих площадках</td>
            </tr>
            <tr>
              <td style={styles.td}>Новичок без чёткой категории</td>
              <td style={styles.td}>Ozon — понятнее кабинет, прозрачнее тарифы</td>
            </tr>
            <tr>
              <td style={styles.td}>Нужен максимальный охват аудитории</td>
              <td style={styles.td}>WB (120 млн покупателей в месяц)</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          На каком бы маркетплейсе вы ни стартовали, фото товара работает одинаково критично.
          Карточка с качественными фотографиями конвертирует в 2–3 раза лучше средней по рынку
          — независимо от площадки. Читайте в блоге:{" "}
          <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>
            как сделать правильное фото для Wildberries
          </Link>{" "}
          и{" "}
          <Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>
            7 ошибок с фото, которые убивают конверсию
          </Link>
          .
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Выбрали площадку — теперь сделайте карточку сильнее конкурентов.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso
            </Link>
            {" "}— AI-генерация фото товара для WB и Ozon. Формат 900×1200 сразу под оба маркетплейса,
            13 кредитов бесплатно при регистрации.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/wb-vs-ozon-foto-trebovaniya" style={{ color: "#7c3aed" }}>Чем отличается фото для WB и Ozon: полное сравнение требований</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%: чек-лист</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Главная — Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
