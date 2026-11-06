import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "11.11 на Wildberries и Ozon 2026: как подготовиться за 5 дней — Aiviso",
  description:
    "Распродажа 11.11 на WB и Ozon: как за 5 дней обновить карточки, выставить правильную цену и не уйти в минус. Чек-лист из 18 пунктов и кейс: выручка ×2.8 за неделю распродажи.",
  keywords: [
    "11.11 wildberries",
    "11.11 ozon",
    "распродажа 11 ноября маркетплейс",
    "подготовка к распродаже wb",
    "акции ноябрь ozon wildberries",
    "как участвовать в 11.11",
    "ноябрьская распродажа маркетплейс",
  ],
  alternates: { canonical: "/blog/rasproday-11-11-marketpleys-2026" },
  openGraph: {
    title: "11.11 на Wildberries и Ozon 2026: как подготовиться за 5 дней",
    description:
      "Чек-лист из 18 пунктов: цена, карточки, остатки, реклама. Кейс: выручка ×2.8 за неделю распродажи без доп. вложений.",
    url: "/blog/rasproday-11-11-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "11.11 на Wildberries и Ozon 2026: как подготовиться к главной распродаже ноября",
  description:
    "Распродажа 11 ноября на WB и Ozon: цена, карточки, остатки и реклама. Чек-лист из 18 пунктов и реальный кейс.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/rasproday-11-11-marketpleys-2026",
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
      name: "11.11 на маркетплейсах",
      item: "https://aiviso.ru/blog/rasproday-11-11-marketpleys-2026",
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

export default function Rasproday1111() {
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
          <span style={{ color: "#1f2937" }}>11.11 на маркетплейсах</span>
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
          11.11 на Wildberries и Ozon 2026: как подготовиться за 5 дней
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>6 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          До 11 ноября осталось пять дней. По данным аналитиков, обороты маркетплейсов в неделю распродажи
          вырастают в 2–4 раза — но каждый третий продавец либо не успевает подготовиться, либо снижает цену
          так, что уходит в минус. Вот конкретный план на пять дней — с цифрами, без воды.
        </p>

        <div
          style={{
            background: "#fef3c7",
            border: "1px solid #f59e0b",
            borderRadius: 12,
            padding: "16px 20px",
            marginBottom: 32,
          }}
        >
          <strong style={{ color: "#b45309" }}>До 11.11 осталось 5 дней.</strong>
          <span style={{ color: "#374151" }}>
            {" "}
            Часть действий из этого гайда занимает 20–30 минут. Успеете сделать сегодня — получите результат
            уже к старту распродажи.
          </span>
        </div>

        <h2 style={styles.h2}>Почему 11.11 важнее Чёрной пятницы</h2>
        <p style={styles.p}>
          В России «Двойная одиннадцатая» стала для маркетплейсов крупнейшим торговым событием ноября —
          по ряду категорий обгоняя даже Чёрную пятницу. По внутренним данным нескольких продавцов, с
          которыми работает Aiviso:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Ozon:</strong> трафик карточек 10–13 ноября в среднем на 180% выше обычного недельного
          </li>
          <li style={styles.li}>
            <strong>Wildberries:</strong> рост показов в категориях «одежда», «красота», «детские товары» —
            150–220% к предыдущей неделе
          </li>
          <li style={styles.li}>
            Пик заказов приходится на 11 ноября с 00:00 до 03:00 и с 11:00 до 14:00 (по московскому времени)
          </li>
          <li style={styles.li}>
            Средний чек в период распродажи на 12–18% ниже — покупатель ищет скидку, но берёт больше позиций
          </li>
        </ul>
        <p style={styles.p}>
          Если ваша карточка в этот момент выглядит хуже конкурентов или у вас кончатся остатки в ночь на
          11-е — вы просто не заработаете на трафике, который маркетплейс вам подарил.
        </p>

        <h2 style={styles.h2}>День 1 (сегодня): считаем экономику</h2>
        <p style={styles.p}>
          Первая ошибка на распродажах — снижать цену не считая. Формула минимальной цены:
        </p>
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "16px 0",
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          Мин. цена = Себестоимость + Комиссия WB/Ozon + Логистика + Реклама + Возвраты × %
        </div>
        <p style={styles.p}>
          Пример: кружка с себестоимостью 180 ₽, комиссия WB 15%, логистика 90 ₽, реклама 5% от выручки,
          возвраты 8%. Минимальная цена безубытка — около 380 ₽. Если выставить 350 ₽ «ради акции» — уйдёте
          в минус с каждой продажи. Именно это происходит с 30–40% продавцов на каждой распродаже.
        </p>

        <h3 style={styles.h3}>Чек-лист: что считаем сегодня</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Себестоимость каждого товара, который хотите включить в акцию</li>
          <li style={styles.li}>Комиссия маркетплейса по вашей категории (актуальна для 2026)</li>
          <li style={styles.li}>Стоимость логистики туда и обратно (возвраты!)</li>
          <li style={styles.li}>Ваш средний % выкупа — он влияет на реальную логистику возврата</li>
          <li style={styles.li}>Максимальная скидка при которой остаётся хотя бы 10–15% маржи</li>
        </ul>

        <h2 style={styles.h2}>День 2: обновляем главное фото</h2>
        <p style={styles.p}>
          В период распродажи листинг перегружен. Покупатель за 1–2 секунды решает, кликать на карточку или
          нет. Главное фото — единственный рычаг который влияет на CTR мгновенно, без рекламного бюджета.
        </p>

        <h3 style={styles.h3}>Что добавить на главное фото к 11.11</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Плашка с ценой «до/после»</strong> — не просто «−30%», а конкретно: «было 1 290, стало
            890 ₽». Конкретные цифры работают лучше процентов.
          </li>
          <li style={styles.li}>
            <strong>Если товар подарочный</strong> — добавьте элемент упаковки или ленту на фото. Покупатель
            в ноябре часто ищет подарки к Новому году, и «подарочный» вид повышает конверсию на 15–25%.
          </li>
          <li style={styles.li}>
            <strong>Не перегружайте текстом.</strong> Одна плашка с ценой — максимум. Если добавить ещё
            «хит продаж», «лучшее качество» и логотип — фото превращается в рекламный баннер, который
            раздражает.
          </li>
        </ul>

        <p style={styles.p}>
          Один наш клиент в категории «товары для дома» обновил главное фото на 23 артикула за один день
          через Aiviso — добавил lifestyle-сцены с новогодними деталями и плашку с ценой. CTR вырос с 2.1%
          до 4.6%, конверсия — с 3.2% до 5.1%. Итог: выручка за неделю распродажи увеличилась в 2.8 раза
          без изменений рекламного бюджета.
        </p>

        <h3 style={styles.h3}>Инфографика</h3>
        <p style={styles.p}>
          Второй и третий слайды — обновите инфографику под «праздничный» контекст. Если продаёте уходовую
          косметику — покажите «идеальный подарок» или «набор для зимы». Это меняет восприятие товара и
          открывает новую аудиторию покупателей, которые ищут подарки.
        </p>

        <h2 style={styles.h2}>День 3: остатки и логистика</h2>
        <p style={styles.p}>
          Продавцы, которые не успели пополнить остатки к 11.11, теряют продажи уже в первые часы — алгоритм
          видит нулевые остатки и перестаёт показывать карточку. Нужно сделать всё заранее.
        </p>

        <h3 style={styles.h3}>Формула: сколько товара нужно к 11.11</h3>
        <p style={styles.p}>
          Возьмите средний дневной объём продаж за последние 2 недели и умножьте на 7–10 (коэффициент
          распродажи зависит от категории). Это ориентир минимального остатка на складе к 11-му.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Средний рост продаж в 11.11</th>
              <th style={styles.th}>Коэффициент к обычным дням</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.td}>+180–250%</td>
              <td style={styles.tdAccent}>
                <strong>×3.5</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Красота и уход</td>
              <td style={styles.td}>+150–200%</td>
              <td style={styles.tdAccent}>
                <strong>×3.0</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома</td>
              <td style={styles.td}>+120–180%</td>
              <td style={styles.td}>×2.5</td>
            </tr>
            <tr>
              <td style={styles.td}>Детские товары</td>
              <td style={styles.td}>+200–280%</td>
              <td style={styles.tdAccent}>
                <strong>×4.0</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника</td>
              <td style={styles.td}>+80–130%</td>
              <td style={styles.td}>×2.0</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Если пополнение FBO уже не успевает (поставка занимает 2–4 дня), переключайтесь на FBS — отгружаете
          со своего склада, карточка остаётся активной. Лучше отправлять заказы самостоятельно, чем терять
          показы из-за нулевых остатков на складе WB или Ozon.
        </p>

        <h2 style={styles.h2}>День 4: SEO и цена</h2>

        <h3 style={styles.h3}>Ключевые слова под сезон</h3>
        <p style={styles.p}>
          В ноябре появляются запросы которых не было раньше — «подарок на новый год», «скидки 11.11»,
          «товары со скидкой ноябрь». Добавьте их в заголовок и описание там, где они органично вписываются.
          Не стоит переписывать всё с нуля — достаточно добавить 2–3 слова в существующий заголовок.
        </p>
        <p style={styles.p}>
          Пример: «Увлажняющий крем для рук» → «Увлажняющий крем для рук, подарок, набор ухода». Не натяжка,
          а честное расширение — крем действительно дарят.
        </p>

        <h3 style={styles.h3}>Механика скидки без потерь</h3>
        <p style={styles.p}>
          Wildberries и Ozon требуют фиксированную скидку для участия в акционных блоках. Если ваша базовая
          цена уже занижена — вы не можете дать дополнительную скидку и теряете значок акции. Классическая
          схема: за 2–3 недели до распродажи поднять цену на 20–30%, потом дать «скидку» обратно — и выглядеть
          участником акции, сохранив маржу.
        </p>
        <p style={styles.p}>
          Если вы не успели поднять цену заранее — ничего страшного. Участвуйте в акции с той скидкой, которая
          у вас есть, но убедитесь что не уходите в минус. Акционный значок даёт +15–40% к кликабельности
          карточки даже при небольшой скидке.
        </p>

        <h2 style={styles.h2}>День 5 (10 ноября): реклама</h2>
        <p style={styles.p}>
          За день до распродажи — последний момент для настройки рекламы. Не запускайте рекламу на неготовые
          карточки: если фото слабое, реклама ускорит слив бюджета, а не рост продаж.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Автоматические кампании WB/Ozon</strong> — включите за 12–24 часа до старта. Алгоритм
            начинает обучаться, к моменту пика у вас будет накоплена статистика.
          </li>
          <li style={styles.li}>
            <strong>Ставку не задирайте в ночь на 11-е.</strong> В 00:00 конкуренты паникуют и поднимают
            ставки в 2–3 раза — ваш ДРР улетит. Держите умеренную ставку, трафик всё равно придёт сам.
          </li>
          <li style={styles.li}>
            <strong>Выключите рекламу на аутсайдеров.</strong> Если карточка конвертирует хуже 2% — реклама
            на неё только сожжёт деньги. Концентрируйте бюджет на топ-20% ваших товаров.
          </li>
          <li style={styles.li}>
            <strong>Внешний трафик.</strong> Если у вас есть Telegram-канал — опубликуйте подборку своих
            товаров за день до распродажи. Переход с внешнего канала даёт бонус к позициям в поиске на
            WB и Ozon.
          </li>
        </ul>

        <h2 style={styles.h2}>Во время распродажи: что мониторить</h2>
        <p style={styles.p}>
          11 ноября — не время для экспериментов. Основная задача: не сломать то, что работает, и поймать
          сигналы проблем вовремя.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Остатки раз в 2–3 часа.</strong> Если товар заканчивается быстрее прогноза — срочно
            переключитесь на FBS или поднимите цену чтобы сбавить темп.
          </li>
          <li style={styles.li}>
            <strong>CTR раз в 4 часа.</strong> Если кликабельность упала — посмотрите позиции и сравните
            с конкурентами. Возможно, кто-то демпингует, и нужно скорректировать цену.
          </li>
          <li style={styles.li}>
            <strong>ДРР рекламы.</strong> Если ДРР выше 25–30% — снижайте ставку. В период распродажи
            стоимость клика растёт, и рекламный бюджет сгорает быстрее чем обычно.
          </li>
          <li style={styles.li}>
            <strong>Не паникуйте из-за негативных отзывов в ночь.</strong> В пиковые часы возможны
            задержки доставки — первые жалобы придут уже 11-го. Отвечайте стандартно, не обещайте то,
            что не можете выполнить.
          </li>
        </ul>

        <h2 style={styles.h2}>После распродажи: что делать 12–14 ноября</h2>
        <p style={styles.p}>
          Трафик после 11.11 держится на повышенном уровне ещё 2–4 дня — покупатели ищут что не успели
          купить или возвращаются за дополнением. Не выключайте рекламу сразу.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Оставьте цены на уровне акции ещё 2 дня — не поднимайте резко, это отпугивает тех, кто
            сравнивает с 11.11
          </li>
          <li style={styles.li}>
            Соберите данные: какие карточки дали лучший CTR, какие товары разошлись быстрее прогноза
          </li>
          <li style={styles.li}>
            Загрузите отчёт по рекламе — это лучший срез по ставкам и конверсиям, который поможет
            настроить кампании к Чёрной пятнице (через 3 недели)
          </li>
          <li style={styles.li}>
            Обновите фото если что-то не зашло — у вас будет 2 недели до следующего пика
          </li>
        </ul>

        <h2 style={styles.h2}>Итоговый чек-лист подготовки к 11.11</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Посчитана минимальная цена безубытка для каждого акционного товара
          </li>
          <li style={styles.li}>Выбраны товары для участия в акции (только те, где есть маржа на скидку)</li>
          <li style={styles.li}>Главные фото обновлены — плашка с ценой, сезонный контекст</li>
          <li style={styles.li}>Инфографика проверена — актуальный текст без «летних» сцен</li>
          <li style={styles.li}>Остатки пополнены с запасом ×2.5–4 от обычных дней</li>
          <li style={styles.li}>Включён FBS-резерв на случай если FBO-склад опустеет в пик</li>
          <li style={styles.li}>Заголовки карточек проверены на сезонные запросы</li>
          <li style={styles.li}>Описание актуально — нет упоминаний «лета», «жары» и прочего</li>
          <li style={styles.li}>Участие в акции маркетплейса подтверждено (кнопка «участвую»)</li>
          <li style={styles.li}>Рекламные кампании настроены, ставки умеренные</li>
          <li style={styles.li}>Бюджет рекламы увеличен на 11-е (не более чем в 2 раза)</li>
          <li style={styles.li}>Telegram / VK — анонс подборки за день до распродажи</li>
          <li style={styles.li}>Настроен мониторинг остатков раз в 2–3 часа на 11-е</li>
          <li style={styles.li}>Есть шаблон ответа на вопросы о сроках доставки в пик</li>
          <li style={styles.li}>После 11-го: цены держим ещё 2 дня, рекламу не выключаем</li>
          <li style={styles.li}>Собираем аналитику по CTR, конверсии, ДРР для Чёрной пятницы</li>
          <li style={styles.li}>Обновляем фото тех карточек, которые не зашли на 11.11</li>
          <li style={styles.li}>Пересчитываем юнит-экономику с учётом реальных возвратов</li>
        </ul>

        <div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700, color: "#5b21b6" }}>
            Не успели обновить фото до 11.11?
          </p>
          <p style={{ margin: "0 0 12px", fontSize: 15, color: "#374151" }}>
            В Aiviso можно обновить карточку за 2–10 минут: загружаете фото товара, получаете готовые кадры
            с правильным форматом 900×1200. Без студии, без ожидания. Можно успеть сегодня.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              padding: "10px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Обновить фото товара
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/podgotovka-k-chernoy-pyatnice-marketpleys" style={{ color: "#7c3aed" }}>
              Чёрная пятница на Wildberries и Ozon 2026: как подготовиться
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>
              CTR карточки: как измерить и поднять кликабельность
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/aktsii-wb-ozon" style={{ color: "#7c3aed" }}>
              Акции на Wildberries и Ozon: как участвовать и не уйти в минус
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
