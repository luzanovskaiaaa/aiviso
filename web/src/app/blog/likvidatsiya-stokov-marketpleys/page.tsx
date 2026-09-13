import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ликвидация стоков на маркетплейсе: как распродать залежавшийся товар — Aiviso",
  description:
    "Как избавиться от залежавшихся стоков на Wildberries и Ozon без убытков. Акции, снижение цен, обновление карточки и вывоз остатков. Чек-лист из 14 шагов.",
  keywords: [
    "ликвидация стоков wildberries",
    "как распродать остатки на ozon",
    "залежавшийся товар маркетплейс",
    "снизить цену wildberries",
    "вывоз остатков wb ozon",
    "как избавиться от стоков",
    "управление стоками маркетплейс",
    "плата за хранение wildberries",
  ],
  alternates: { canonical: "/blog/likvidatsiya-stokov-marketpleys" },
  openGraph: {
    title: "Ликвидация стоков на маркетплейсе: как распродать залежавшийся товар",
    description:
      "Акции, снижение цен, обновление карточки и вывоз — чек-лист из 14 шагов чтобы вернуть деньги из залежавшегося стока на WB и Ozon.",
    url: "/blog/likvidatsiya-stokov-marketpleys",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ликвидация стоков на маркетплейсе: как распродать залежавшийся товар и вернуть деньги",
  description:
    "Как избавиться от залежавшихся стоков на Wildberries и Ozon без убытков. Акции, снижение цен, обновление карточки и вывоз остатков. Чек-лист из 14 шагов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-13",
  dateModified: "2026-09-13",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/likvidatsiya-stokov-marketpleys",
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
      name: "Ликвидация стоков на маркетплейсе",
      item: "https://aiviso.ru/blog/likvidatsiya-stokov-marketpleys",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  ol: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function LikvidatsiyaStokov() {
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
          <span style={{ color: "#1f2937" }}>Ликвидация стоков на маркетплейсе</span>
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
          Ликвидация стоков на маркетплейсе: как распродать залежавшийся товар и вернуть деньги
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>13 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Товар лежит на складе Wildberries или Ozon уже три месяца, плата за хранение капает, а продажи не идут.
          Знакомая ситуация. Разбираем по шагам, как выйти из стока с минимальными потерями — и не попасть в ту же
          ловушку снова.
        </p>

        <h2 style={styles.h2}>Почему товар зависает на складе</h2>
        <p style={styles.p}>
          Прежде чем бросаться снижать цену, важно понять причину. Она определяет стратегию ликвидации: если проблема
          в карточке — поможет обновление фото. Если в цене — нужна акция. Если в сезонности — иногда лучше дождаться.
        </p>
        <p style={styles.p}>Самые частые причины залёжки:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Плохая карточка.</strong> Фото не передаёт ценность товара, описание пустое, характеристики не
            заполнены. Покупатель заходит и уходит. CTR ниже 1% — это сигнал именно сюда.
          </li>
          <li style={styles.li}>
            <strong>Цена выше рынка.</strong> Конкуренты продают аналог дешевле, и алгоритм маркетплейса это видит —
            позиция падает.
          </li>
          <li style={styles.li}>
            <strong>Сезонный товар вне сезона.</strong> Пляжные полотенца в ноябре, дождевики в феврале — здесь
            ликвидация нерентабельна, лучше вывезти и вернуть весной.
          </li>
          <li style={styles.li}>
            <strong>Товар не попал в поиск.</strong> Нет ключевых слов в заголовке, категория выбрана неверно — продукт
            просто не находят.
          </li>
          <li style={styles.li}>
            <strong>Плохие отзывы.</strong> Рейтинг ниже 4.2 — конверсия падает кратно. Здесь ликвидация работает
            только после исправления проблемы с товаром.
          </li>
        </ul>

        <h2 style={styles.h2}>Как понять, что пора ликвидировать</h2>
        <p style={styles.p}>
          Не каждый медленный товар нужно ликвидировать срочно. Вот сигналы, что пора действовать:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Оборачиваемость превысила 90 дней (норма по большинству категорий — 30–60 дней)</li>
          <li style={styles.li}>
            Плата за хранение за месяц составляет более 15% от стоимости остатка — вы платите маркетплейсу больше, чем
            зарабатываете
          </li>
          <li style={styles.li}>Продаётся менее 1 единицы в неделю при остатке более 30 штук</li>
          <li style={styles.li}>
            Конкуренты в той же нише снижают цены — значит, рынок перегрет и ждать роста не стоит
          </li>
          <li style={styles.li}>Приближается следующий сезон, а товар сезонный</li>
        </ul>
        <p style={styles.p}>
          Один наш клиент в категории «товары для дома» держал остаток 240 единиц органайзеров с октября по февраль.
          За эти 4 месяца заплатил за хранение 38 400 ₽ при закупочной стоимости остатка 96 000 ₽. Деньги работали
          против него — 40% стоимости ушло просто за то, что товар занимал полку.
        </p>

        <h2 style={styles.h2}>Инструменты ликвидации: что работает</h2>

        <h3 style={styles.h3}>1. Участие в акциях маркетплейса</h3>
        <p style={styles.p}>
          Wildberries и Ozon регулярно проводят акции — «Хиты продаж», «Большая распродажа», тематические недели. Во
          время акций алгоритм продвигает участников выше в выдаче бесплатно, а покупатели активно ищут скидки.
        </p>
        <p style={styles.p}>Правила участия:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>WB:</strong> Скидка рассчитывается от «обычной» цены в кабинете. Следите, чтобы цена со скидкой не
            уходила ниже себестоимости с учётом комиссии и логистики.
          </li>
          <li style={styles.li}>
            <strong>Ozon:</strong> Акции строятся от минимальной цены за последние 30 дней. Если вы накануне завысили
            цену — Ozon это видит и выбрасывает товар из акции.
          </li>
          <li style={styles.li}>
            Формула безопасного дна: Цена акции = (себестоимость + комиссия + логистика) × 1.05. Пять процентов —
            минимальная маржа, ниже которой участие в акции только увеличивает убытки.
          </li>
        </ul>

        <h3 style={styles.h3}>2. Снижение цены вручную</h3>
        <p style={styles.p}>
          Если акция не подходит по срокам — снижайте цену самостоятельно. Алгоритм маркетплейсов реагирует на снижение
          цены в течение 24–48 часов: позиция немного улучшается. Но резкое снижение сразу на 50% выглядит подозрительно
          и может снизить доверие покупателей.
        </p>
        <p style={styles.p}>Рабочая схема:</p>
        <ol style={styles.ol}>
          <li style={styles.li}>Снизить цену на 15–20% и подождать 5–7 дней.</li>
          <li style={styles.li}>Если продажи не пошли — ещё минус 15–20%.</li>
          <li style={styles.li}>Если и после второго снижения нет движения — переходите к вывозу.</li>
        </ol>

        <h3 style={styles.h3}>3. Продвижение через рекламу</h3>
        <p style={styles.p}>
          Для ликвидации рентабельна только трафаретная реклама на Ozon или автореклама на WB — они показывают товар
          тем, кто уже ищет категорию. Поисковая реклама при ликвидации часто убыточна: вы платите за клик, но
          конверсия низкая из-за тех же проблем карточки, которые привели к залёжке.
        </p>
        <p style={styles.p}>
          Бюджет: не более 10% от стоимости остатка. Если потратили 10% и продажи не пошли — реклама не поможет,
          причина в другом.
        </p>

        <h2 style={styles.h2}>Обновление карточки для ускорения продаж</h2>
        <p style={styles.p}>
          Прежде чем снижать цену, попробуйте обновить карточку — иногда это даёт эффект быстрее. Один наш клиент в
          категории «спорт и отдых» заменил главное фото термоса (было фото на белом фоне, стало lifestyle в горах) и
          через 10 дней CTR вырос с 1.2% до 3.4%. Никакой скидки — просто другое фото.
        </p>
        <p style={styles.p}>Что менять в первую очередь:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Главное фото.</strong> Это единственное, что видит покупатель в листинге. Если CTR ниже 2% — первый
            слайд точно нужно менять.{" "}
            <Link href="/app" style={{ color: "#7c3aed" }}>
              AI-генерация в Aiviso
            </Link>{" "}
            делает новое главное фото за 2 минуты от 15 ₽ за кадр.
          </li>
          <li style={styles.li}>
            <strong>Инфографика.</strong> Добавьте слайды с ключевыми характеристиками товара — размер, материал,
            комплектация. Покупатель не читает описание, он смотрит картинки.
          </li>
          <li style={styles.li}>
            <strong>Заголовок.</strong> Проверьте, есть ли в заголовке ключевые запросы, по которым вас ищут. Используйте
            Wordstat или раздел «Поисковые запросы» в ЛК WB.
          </li>
          <li style={styles.li}>
            <strong>Характеристики.</strong> Пустые атрибуты — это выпадение из фильтров. Заполните всё, что доступно:
            цвет, материал, размеры, страну производства.
          </li>
        </ul>

        <h2 style={styles.h2}>Как считать: продавать в убыток или вывозить</h2>
        <p style={styles.p}>
          Иногда продавать дешевле выгоднее, чем платить за хранение. Вот простая формула для принятия решения:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Сценарий</th>
              <th style={styles.th}>Когда выбирать</th>
              <th style={styles.th}>Пример расчёта</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Продать ниже себестоимости</td>
              <td style={styles.td}>Плата за хранение за 2 мес. &gt; потери от снижения цены</td>
              <td style={styles.td}>Хранение 8 000 ₽/мес, убыток от скидки 5 000 ₽ → продаём в убыток</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Вывоз и продажа офлайн / другой канал</td>
              <td style={styles.tdAccent}>Товар сезонный, или цена конкурентов уже ниже вашей себестоимости</td>
              <td style={styles.tdAccent}>Купальники в октябре — вывозим, продаём в мае</td>
            </tr>
            <tr>
              <td style={styles.td}>Возврат поставщику / переработка</td>
              <td style={styles.td}>Товар с браком или устаревший (вышла новая версия)</td>
              <td style={styles.td}>Переговариваемся с поставщиком на кредит-ноту или замену</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Формула решения: если (плата за хранение за N месяцев) &gt; (убыток от продажи по минимальной цене) —
          продавайте сейчас. Каждый месяц промедления увеличивает итоговые потери.
        </p>

        <h2 style={styles.h2}>Вывоз остатков со склада WB и Ozon</h2>
        <p style={styles.p}>
          Когда продажи не идут, а хранение дорожает — выгоднее вывезти товар и найти ему другой канал сбыта.
        </p>

        <h3 style={styles.h3}>Как заказать вывоз на Wildberries</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Личный кабинет → «Товары» → «Остатки» → выбрать SKU → «Создать заявку на вывоз».</li>
          <li style={styles.li}>Срок ожидания: 14–30 дней в зависимости от загруженности склада.</li>
          <li style={styles.li}>
            Стоимость вывоза: от 33 ₽ за единицу (тариф меняется — проверяйте актуальный в ЛК).
          </li>
          <li style={styles.li}>
            После вывоза плата за хранение прекращается — это главное, за что вы платите при выводе.
          </li>
        </ul>

        <h3 style={styles.h3}>Как заказать вывоз на Ozon</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>ЛК → «Товары и цены» → «FBO товары» → «Вывоз товара».</li>
          <li style={styles.li}>Минимальная партия для вывоза: от 1 единицы (в отличие от WB — без минимума).</li>
          <li style={styles.li}>Срок: 7–14 рабочих дней. Товар отгружается на ваш адрес или адрес логиста.</li>
        </ul>

        <h3 style={styles.h3}>Куда деть вывезенный товар</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Авито и Юла.</strong> Работает для бытовых товаров, одежды, электроники. Маржа ниже, но нет комиссии
            маркетплейса.
          </li>
          <li style={styles.li}>
            <strong>Telegram-канал с распродажей.</strong> Если есть своя аудитория — прямые продажи без посредника.
          </li>
          <li style={styles.li}>
            <strong>Оптовая продажа перекупщикам.</strong> Потеря 30–50% от цены, зато быстро и без усилий.
          </li>
          <li style={styles.li}>
            <strong>Яндекс.Маркет или другой маркетплейс.</strong> Если на WB товар не зашёл — попробуйте другую
            площадку. Аудитория разная, может сработать.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 14 шагов для ликвидации стока</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Определить причину залёжки: карточка, цена, SEO, сезон, отзывы</li>
          <li style={styles.li}>Посчитать реальную стоимость хранения за месяц по актуальным тарифам</li>
          <li style={styles.li}>Рассчитать минимальную цену продажи (себестоимость + комиссия + логистика)</li>
          <li style={styles.li}>Обновить главное фото — новый вариант из другого ракурса или lifestyle-сцены</li>
          <li style={styles.li}>Обновить заголовок: добавить высокочастотные ключи из Wordstat</li>
          <li style={styles.li}>Заполнить все незаполненные характеристики в карточке</li>
          <li style={styles.li}>Снизить цену на 15–20% и подождать 5–7 дней</li>
          <li style={styles.li}>Подключить участие в ближайшей акции маркетплейса</li>
          <li style={styles.li}>Запустить трафаретную рекламу на Ozon или авторекламу на WB с бюджетом ≤10% от стоимости остатка</li>
          <li style={styles.li}>Если за 2 недели нет движения — снизить ещё на 15–20%</li>
          <li style={styles.li}>Если продажи не пошли — принять решение: продать в убыток или вывезти</li>
          <li style={styles.li}>Оформить заявку на вывоз в ЛК (если решение — вывоз)</li>
          <li style={styles.li}>Найти альтернативный канал сбыта: Авито, Telegram, другой маркетплейс</li>
          <li style={styles.li}>Провести разбор ошибки: почему товар завис, что изменить в следующей закупке</li>
        </ul>

        <h2 style={styles.h2}>Как не попасть в ловушку снова</h2>
        <p style={styles.p}>
          Ликвидация — симптом. Корень проблемы — в процессе закупки и запуска товара. Вот что меняют продавцы, которые
          перестают накапливать неликвид:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Минимальная тестовая партия.</strong> Первый заказ — 30–50 единиц, не 300. Провери спрос, потом
            масштабируй.
          </li>
          <li style={styles.li}>
            <strong>Анализ сезонности до закупки.</strong> Сервисы MPStats и Sellmonitor показывают помесячную динамику
            спроса за прошлые годы. Если пик в мае — не завозите в апреле 500 единиц.
          </li>
          <li style={styles.li}>
            <strong>Юнит-экономика с хранением.</strong> Включайте в расчёт не только комиссию и логистику, но и плату
            за хранение при оборачиваемости 60+ дней. Многие товары становятся убыточными именно на этом этапе.
          </li>
          <li style={styles.li}>
            <strong>Мониторинг раз в неделю.</strong> Настройте еженедельный отчёт по оборачиваемости. Товар, который
            замедлился, гораздо проще продать через 2 недели, чем через 3 месяца.{" "}
            <Link href="/blog/oborachivaemost-tovara-marketpleys" style={{ color: "#7c3aed" }}>
              Подробнее об оборачиваемости
            </Link>
            .
          </li>
          <li style={styles.li}>
            <strong>Готовые карточки до поставки.</strong> Не отгружайте товар на склад с плохими фото. Пока товар едет
            — сделайте карточку на уровне ТОП-10 категории. Если фото на руках нет —{" "}
            <Link href="/app" style={{ color: "#7c3aed" }}>
              AI-генерация Aiviso
            </Link>{" "}
            делает фото по образцу или референсу за несколько минут.
          </li>
        </ul>

        <p style={styles.p}>
          Управление стоками — это финансовая дисциплина, а не удача. Продавцы, у которых не бывает залёжки, не потому
          что везёт: они считают юнит-экономику до закупки, тестируют малыми партиями и обновляют карточки до того, как
          спрос успевает упасть. Подробнее об этом — в нашем гайде по{" "}
          <Link href="/blog/audit-kartochki-tovara" style={{ color: "#7c3aed" }}>
            аудиту карточки товара
          </Link>
          .
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
          <p style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700, color: "#5b21b6" }}>
            Карточка не продаёт — обновите фото за 2 минуты
          </p>
          <p style={{ margin: "0 0 12px", fontSize: 15, color: "#374151" }}>
            Часто ликвидация начинается с плохого главного фото. Загрузите товар в Aiviso, получите 2 новых кадра
            бесплатно — и сравните, что покупатель видит сейчас и что мог бы видеть.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              padding: "10px 20px",
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
            <Link href="/blog/oborachivaemost-tovara-marketpleys" style={{ color: "#7c3aed" }}>
              Оборачиваемость товара: формула, нормы и как не платить за хранение
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/audit-kartochki-tovara" style={{ color: "#7c3aed" }}>
              Аудит карточки товара: пошаговый разбор за 30 минут
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула и типичные ошибки
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
