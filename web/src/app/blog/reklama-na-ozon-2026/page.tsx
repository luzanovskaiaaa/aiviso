import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Реклама на Ozon в 2026: пошаговый гайд для селлеров — Aiviso",
  description:
    "Трафаретная, поисковая и медийная реклама на Ozon: как запустить, выставить ставки и считать ДРР. Чек-лист из 15 пунктов и реальные кейсы.",
  keywords: [
    "реклама на ozon",
    "ozon ads",
    "трафаретная реклама ozon",
    "ставки ozon реклама",
    "ДРР ozon",
    "продвижение на ozon",
    "рекламная кампания ozon 2026",
    "как продвигать товар на ozon",
    "ozon рекламный бюджет",
  ],
  alternates: { canonical: "/blog/reklama-na-ozon-2026" },
  openGraph: {
    title: "Реклама на Ozon в 2026: пошаговый гайд для селлеров",
    description:
      "Трафаретная, поисковая и медийная реклама на Ozon: ставки, ДРР, чек-лист из 15 пунктов и реальные кейсы. Как не слить бюджет с первой кампании.",
    url: "/blog/reklama-na-ozon-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Реклама на Ozon в 2026: пошаговый гайд для селлеров",
  description:
    "Трафаретная, поисковая и медийная реклама на Ozon — как запустить, выставить ставки и не слить бюджет. Чек-лист и реальные кейсы.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-09",
  dateModified: "2026-07-09",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/reklama-na-ozon-2026",
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
      name: "Реклама на Ozon 2026",
      item: "https://aiviso.ru/blog/reklama-na-ozon-2026",
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

export default function ReklamaNaOzon2026() {
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
          <span style={{ color: "#1f2937" }}>Реклама на Ozon 2026</span>
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
          Реклама на Ozon в 2026: пошаговый гайд для селлеров
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>9 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Органический трафик на Ozon становится дороже с каждым кварталом — новых продавцов стало
          больше, конкуренция за топ выросла. Но реклама на Ozon устроена иначе, чем на Wildberries:
          здесь другая аукционная модель, другие форматы и другие подводные камни. Разбираем всё по
          порядку — от типов кампаний до расчёта ДРР.
        </p>

        <h2 style={styles.h2}>Какие форматы рекламы есть на Ozon</h2>
        <p style={styles.p}>
          Ozon предлагает три основных рекламных инструмента. Каждый подходит под разные задачи и бюджеты.
        </p>

        <h3 style={styles.h3}>Трафаретная реклама (Performance)</h3>
        <p style={styles.p}>
          Самый распространённый формат — товар показывается в поиске и на страницах категорий. Оплата
          за клик (CPC). Аукцион в реальном времени: кто поставил ставку выше — тот выше в выдаче.
          Стартовая ставка от 7 ₽ за клик, средняя по конкурентным категориям (электроника, одежда,
          косметика) — 25–60 ₽.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «товары для дома» запустил трафаретную кампанию с бюджетом 5 000
          ₽ на тест. За неделю получил 312 кликов, из них 14 заказов при среднем чеке 1 200 ₽. ДРР
          вышел 29% — приемлемо для старта.
        </p>

        <h3 style={styles.h3}>Реклама в поиске (Поисковое продвижение)</h3>
        <p style={styles.p}>
          Товар поднимается в органической выдаче по ключевым запросам за фиксированную плату. Здесь
          нет аукциона в реальном времени — вы платите за позицию (1-е место, 2-е и т.д.) посуточно или
          понедельно. Хорошо работает для товаров с чётким поисковым спросом: «кроссовки Nike», «кофемолка
          Kitfort», «плед 200×220».
        </p>

        <h3 style={styles.h3}>Медийная реклама (баннеры)</h3>
        <p style={styles.p}>
          Баннеры на главной странице Ozon, в email-рассылках, в приложении. Оплата за показы (CPM).
          Минимальный бюджет от 50 000 ₽, запуск через менеджера Ozon. Подходит для крупных брендов
          при запуске нового товара или сезонной акции. Малому и среднему бизнесу на старте — не нужна.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Формат</th>
              <th style={styles.th}>Модель оплаты</th>
              <th style={styles.th}>Мин. бюджет</th>
              <th style={styles.th}>Для кого</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Трафаретная</td>
              <td style={styles.td}>CPC (за клик)</td>
              <td style={styles.tdAccent}>
                <strong>500 ₽</strong>
              </td>
              <td style={styles.td}>Все, кто хочет быстрый трафик</td>
            </tr>
            <tr>
              <td style={styles.td}>Поисковое продвижение</td>
              <td style={styles.td}>За позицию (сутки)</td>
              <td style={styles.td}>от 100 ₽/сутки</td>
              <td style={styles.td}>Товары с точным спросом</td>
            </tr>
            <tr>
              <td style={styles.td}>Медийная (баннеры)</td>
              <td style={styles.td}>CPM (за показы)</td>
              <td style={styles.td}>от 50 000 ₽</td>
              <td style={styles.td}>Крупные бренды</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Что такое ДРР и почему это главная метрика</h2>
        <p style={styles.p}>
          ДРР — доля рекламных расходов. Считается просто:
        </p>
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "16px 0",
            fontFamily: "monospace",
            fontSize: 15,
          }}
        >
          ДРР = (Расходы на рекламу / Выручка от рекламы) × 100%
        </div>
        <p style={styles.p}>
          Например: потратили 3 000 ₽ на рекламу, получили заказов на 15 000 ₽ —
          ДРР = 3 000 / 15 000 × 100% = 20%.
        </p>
        <p style={styles.p}>
          Нормальный ДРР зависит от категории и маржинальности товара:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>До 10%</strong> — отличный результат, реклама высокорентабельна
          </li>
          <li style={styles.li}>
            <strong>10–20%</strong> — рабочая зона для большинства категорий
          </li>
          <li style={styles.li}>
            <strong>20–35%</strong> — приемлемо при высокой марже (электроника, украшения, брендовая одежда)
          </li>
          <li style={styles.li}>
            <strong>Выше 40%</strong> — реклама съедает прибыль, нужна оптимизация
          </li>
        </ul>
        <p style={styles.p}>
          Если ваш товар стоит 500 ₽ с маржой 25% (125 ₽ чистой прибыли) — ДРР выше 25% уже убыточен.
          Считайте ДРР перед запуском исходя из реальной маржи, а не выручки.
        </p>

        <h2 style={styles.h2}>Пошаговый запуск трафаретной рекламы на Ozon</h2>

        <h3 style={styles.h3}>Шаг 1. Проверьте карточку перед запуском</h3>
        <p style={styles.p}>
          Реклама приводит трафик — но если карточка плохая, деньги уходят впустую. Минимальный
          порог перед запуском:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Минимум 6 фото в карточке (первое — главный снимок товара 900×1200)</li>
          <li style={styles.li}>Рейтинг товара от 4.5 или новая карточка без отзывов (тогда нужен хотя бы 1 отзыв за первую неделю)</li>
          <li style={styles.li}>Цена конкурентна — проверьте топ-10 в вашей категории</li>
          <li style={styles.li}>Остаток на складе минимум на 2 недели продаж</li>
        </ul>
        <p style={styles.p}>
          Запускать рекламу на карточку с 2 фотографиями и рейтингом 3.2 — выбрасывать бюджет.
          Клик стоил денег, а покупатель ушёл к конкуренту.
        </p>

        <h3 style={styles.h3}>Шаг 2. Создайте рекламную кампанию</h3>
        <p style={styles.p}>
          Путь: Личный кабинет Ozon → Продвижение → Трафаретная реклама → Создать кампанию.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Название кампании: пишите понятно — «Кроссовки Nike — тест июль» (потом будете искать в списке из 50 кампаний)</li>
          <li style={styles.li}>Добавьте конкретные товары, не всю категорию сразу</li>
          <li style={styles.li}>Установите дневной лимит — рекомендуем на старте 300–500 ₽/день</li>
          <li style={styles.li}>Включите автоставку, если не уверены в ставках: алгоритм Ozon сам подберёт CPC в рамках вашего бюджета</li>
        </ul>

        <h3 style={styles.h3}>Шаг 3. Выберите ставку</h3>
        <p style={styles.p}>
          Ozon показывает рекомендованную ставку для вашего товара. Логика простая:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Начинайте с рекомендованной ставки ×0.7 — посмотрите, есть ли показы</li>
          <li style={styles.li}>Если показов мало (меньше 500 в день) — поднимайте на 15–20% раз в 2 дня</li>
          <li style={styles.li}>Если ДРР растёт выше целевого — снижайте ставку или исключайте дорогие плейсменты</li>
        </ul>
        <p style={styles.p}>
          В высококонкурентных категориях (одежда, косметика) рекомендованные ставки бывают завышены.
          Один наш клиент в нише «женские сумки» первые 3 дня шёл с рекомендованными 45 ₽ и получил
          ДРР 67%. После снижения ставки до 22 ₽ — ДРР упал до 28%, продажи уменьшились на 30%, но
          прибыль выросла.
        </p>

        <h3 style={styles.h3}>Шаг 4. Следите за статистикой ежедневно (первые 2 недели)</h3>
        <p style={styles.p}>
          Ключевые метрики в личном кабинете:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>CTR (кликабельность)</strong> — норма для Ozon 1.5–4%. Если ниже 1% — проблема с
            фото или ценой
          </li>
          <li style={styles.li}>
            <strong>CR (конверсия в заказ)</strong> — норма 2–6%. Если клики есть, а заказов нет — проблема
            в карточке (описание, фото, отзывы)
          </li>
          <li style={styles.li}>
            <strong>ДРР</strong> — главная метрика эффективности</li>
          <li style={styles.li}>
            <strong>Расход бюджета</strong> — если кампания не расходует лимит к концу дня, ставка
            слишком низкая
          </li>
        </ul>

        <h2 style={styles.h2}>Ключевые слова в рекламе Ozon: что нужно знать</h2>
        <p style={styles.p}>
          В трафаретной рекламе Ozon по умолчанию работает <strong>автоматический подбор ключей</strong>:
          алгоритм сам определяет, по каким запросам показывать ваш товар. Это удобно на старте, но
          есть проблема — система может показывать вас по нерелевантным запросам.
        </p>
        <p style={styles.p}>
          Например, товар «коврик для йоги» может появиться по запросу «коврик в ванную» — клик
          состоялся, деньги списались, а покупатель явно ждал другое.
        </p>
        <p style={styles.p}>
          Что делать:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Через неделю работы кампании зайдите в статистику → вкладка «Поисковые запросы». Найдите
            запросы с нулевой конверсией и большим числом кликов — добавьте их в минус-слова.
          </li>
          <li style={styles.li}>
            Минус-слова в Ozon добавляются в настройках кампании. Типичные для ниши «одежда»:
            «секонд хенд», «б/у», «прокат».
          </li>
          <li style={styles.li}>
            Проверяйте минус-слова раз в 2 недели — алгоритм постоянно тестирует новые плейсменты.
          </li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки при запуске рекламы на Ozon</h2>

        <h3 style={styles.h3}>1. Запуск без тестового бюджета</h3>
        <p style={styles.p}>
          Ставить сразу 10 000 ₽/день на непроверенную карточку — рискованно. Начинайте с 300–500 ₽/день
          в течение 7–10 дней. Оцените CR и ДРР, потом масштабируйте.
        </p>

        <h3 style={styles.h3}>2. Реклама всей номенклатуры одной кампанией</h3>
        <p style={styles.p}>
          Если у вас 30 артикулов в одной кампании, вы не поймёте, какой товар даёт ROI, а какой
          сливает бюджет. Делайте отдельные кампании под топовые товары — тогда видна реальная картина.
        </p>

        <h3 style={styles.h3}>3. Не проверять ДРР по каждому товару</h3>
        <p style={styles.p}>
          Средний ДРР по кампании 18% выглядит хорошо. Но внутри может быть один товар с ДРР 5% и
          другой с ДРР 80%. Второй съедает прибыль первого. Смотрите аналитику в разрезе артикула.
        </p>

        <h3 style={styles.h3}>4. Не останавливать кампании в нерабочее время</h3>
        <p style={styles.p}>
          Трафик с 0:00 до 7:00 конвертируется заметно хуже — покупатели листают Ozon в полусне,
          кликают но не покупают. Настройте расписание показов: оставьте пик 8:00–23:00 и сэкономьте
          15–25% бюджета при той же эффективности.
        </p>

        <h3 style={styles.h3}>5. Игнорировать влияние фото на CTR</h3>
        <p style={styles.p}>
          В рекламных плейсментах Ozon покупатель видит миниатюру товара. Если главное фото серое,
          мятое или с плохим фоном — CTR будет 0.4–0.8% вместо 2–3%. При ставке 30 ₽ это разница
          между 4 кликами и 20 кликами на 1 000 показов — то есть 5× разница в отдаче от того же
          бюджета.
        </p>
        <p style={styles.p}>
          Именно поэтому карточка с хорошим{" "}
          <Link href="/" style={{ color: "#7c3aed" }}>
            AI-фото от Aiviso
          </Link>{" "}
          в формате 900×1200 даёт лучший CTR ещё до оптимизации ставок.
        </p>

        <h2 style={styles.h2}>Комбинирование рекламы с органическим продвижением</h2>
        <p style={styles.p}>
          Реклама на Ozon и органика работают вместе — одно усиливает другое. Когда рекламные продажи
          растут, Ozon видит, что товар покупают — и поднимает его в органической выдаче.
        </p>
        <p style={styles.p}>
          Практическая схема для новой карточки:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Недели 1–2: реклама на максимуме — нужны первые продажи и отзывы любой ценой. ДРР может
            быть высоким (30–50%), это нормально для раскачки.
          </li>
          <li style={styles.li}>
            Недели 3–4: снижаете ставки на 15–20%, смотрите, держится ли позиция в органике. Если
            товар уже попал в топ-15 — реклама может работать в поддерживающем режиме.
          </li>
          <li style={styles.li}>
            Месяц 2+: цель — органика даёт 60–70% продаж, реклама добивает оставшееся. ДРР падает,
            прибыль растёт.
          </li>
        </ul>
        <p style={styles.p}>
          Подробнее о{" "}
          <Link href="/blog/prodvizhenie-kartochki-bez-reklamy" style={{ color: "#7c3aed" }}>
            продвижении без рекламного бюджета
          </Link>{" "}
          — в отдельном материале.
        </p>

        <h2 style={styles.h2}>Чек-лист запуска рекламы на Ozon: 15 пунктов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Карточка имеет минимум 6 фото, главное — вертикальное 900×1200</li>
          <li style={styles.li}>Первое фото чёткое, товар занимает 70–80% кадра</li>
          <li style={styles.li}>Рейтинг товара 4.5+ или кампания запущена параллельно с программой баллов за отзыв</li>
          <li style={styles.li}>Цена в пределах ±15% от медианы конкурентов в топ-10</li>
          <li style={styles.li}>На складе остаток не менее чем на 2 недели продаж</li>
          <li style={styles.li}>Дневной лимит выставлен (не «без лимита» на первом запуске)</li>
          <li style={styles.li}>Начальная ставка = рекомендованная ×0.7</li>
          <li style={styles.li}>Включено расписание показов (8:00–23:00)</li>
          <li style={styles.li}>Цель по ДРР посчитана заранее исходя из маржи</li>
          <li style={styles.li}>Отдельная кампания под каждый топ-товар</li>
          <li style={styles.li}>Настроена utm-разметка для сквозной аналитики (если используете CRM)</li>
          <li style={styles.li}>Запланирован разбор статистики через 7 дней</li>
          <li style={styles.li}>Список минус-слов составлен хотя бы на старте (5–10 очевидных нерелевантных запросов)</li>
          <li style={styles.li}>Кампания не запущена в период активной распродажи конкурентов без повышения ставок</li>
          <li style={styles.li}>Результаты первых 2 недель зафиксированы в таблице для сравнения с последующими периодами</li>
        </ul>

        <h2 style={styles.h2}>Сколько реально стоит реклама на Ozon: примеры бюджетов</h2>
        <p style={styles.p}>
          Часто слышим вопрос: «с какой суммы начать?». Вот реальные сценарии:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ситуация</th>
              <th style={styles.th}>Бюджет/мес</th>
              <th style={styles.th}>Ожидаемый результат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1 новая карточка, тест</td>
              <td style={styles.tdAccent}>
                <strong>3 000–5 000 ₽</strong>
              </td>
              <td style={styles.td}>Данные по CTR, CR, ДРР. Первые 5–20 заказов.</td>
            </tr>
            <tr>
              <td style={styles.td}>3–5 карточек, активный рост</td>
              <td style={styles.td}>15 000–30 000 ₽</td>
              <td style={styles.td}>Выход в топ-30 по ключам, рост органики</td>
            </tr>
            <tr>
              <td style={styles.td}>10+ карточек, масштаб</td>
              <td style={styles.td}>50 000–150 000 ₽</td>
              <td style={styles.td}>Топ-10 в нескольких категориях, стабильный поток</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Важно: реклама без хорошей карточки — выброшенные деньги. Приоритет всегда такой: сначала
          качественные фото и SEO-описание, потом реклама.
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
            <strong>Хочешь карточку, которая конвертит с первого клика?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуй Aiviso
            </Link>{" "}
            — 13 кредитов бесплатно. Загружаешь фото товара, получаешь готовые кадры 900×1200 для
            Ozon за 2 минуты. Карточка с хорошим главным фото даёт CTR выше на 40–80% — это прямая
            экономия на рекламном бюджете.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/reklama-na-wildberries" style={{ color: "#7c3aed" }}>
              Реклама на Wildberries в 2026: пошаговый гайд
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/prodvizhenie-kartochki-bez-reklamy" style={{ color: "#7c3aed" }}>
              Как продвигать карточку без рекламы на WB и Ozon
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
              Как поднять конверсию карточки на 30%: чек-лист
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
