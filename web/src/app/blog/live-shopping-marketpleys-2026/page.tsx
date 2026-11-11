import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Shopping на WB и Ozon: продажи через прямые эфиры 2026 — Aiviso",
  description: "Как продавать через Live Shopping на Wildberries и Ozon в 2026. WB Live, Ozon Live — подготовка, чек-лист, конверсия 8–12% против 3–4% обычной карточки.",
  keywords: [
    "live shopping wildberries",
    "прямой эфир ozon",
    "wb live продажи",
    "ozon live как запустить",
    "прямые эфиры маркетплейс",
    "как продавать через стрим",
    "конверсия live shopping",
    "видео продажи маркетплейс",
  ],
  alternates: { canonical: "/blog/live-shopping-marketpleys-2026" },
  openGraph: {
    title: "Live Shopping на WB и Ozon: как продавать через прямые эфиры в 2026",
    description: "WB Live и Ozon Live дают конверсию 8–12% против 3–4% в обычной карточке. Чек-лист подготовки и структура первого эфира.",
    url: "/blog/live-shopping-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Live Shopping на Wildberries и Ozon: как продавать через прямые эфиры в 2026",
  description: "Как запустить Live Shopping на WB и Ozon: подготовка, структура эфира, чек-лист и кейсы с реальными цифрами конверсии.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/live-shopping-marketpleys-2026",
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
      name: "Live Shopping на маркетплейсах",
      item: "https://aiviso.ru/blog/live-shopping-marketpleys-2026",
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

export default function LiveShoppingMarketpleys() {
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
          <span style={{ color: "#1f2937" }}>Live Shopping на маркетплейсах</span>
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
          Live Shopping на Wildberries и Ozon: как продавать через прямые эфиры в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>11 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          WB Live и Ozon Live дают конверсию 8–12% прямо во время трансляции — против 3–4% в обычной карточке.
          Большинство селлеров до сих пор не используют этот формат. Разбираем, как запустить первый
          эфир и не потерять деньги на подготовке.
        </p>

        <h2 style={styles.h2}>Что такое Live Shopping и почему это работает</h2>
        <p style={styles.p}>
          Live Shopping — это прямой эфир, во время которого зритель видит товар в действии и может купить его
          одним нажатием, не выходя из трансляции. Wildberries запустил WB Live в 2024 году, Ozon — Ozon Live
          примерно тогда же. В 2026-м форматом пользуются уже тысячи продавцов, но насыщения ещё нет — особенно
          за пределами Москвы и топ-категорий.
        </p>
        <p style={styles.p}>Почему конверсия выше, чем в карточке:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Демонстрация в движении.</strong> Покупатель видит, как ткань тянется, как замок застёгивается,
            как крем ложится на кожу. Фотография этого не передаёт.
          </li>
          <li style={styles.li}>
            <strong>Эффект срочности.</strong> Скидка «только сейчас» и ограниченное количество — классические
            триггеры. В эфире они работают честнее, чем плашка «осталось 3 штуки».
          </li>
          <li style={styles.li}>
            <strong>Прямой контакт.</strong> Вопрос в чате — ответ через 10 секунд. Это снимает сомнения, которые
            в обычной карточке превращаются в отказ.
          </li>
          <li style={styles.li}>
            <strong>Алгоритмический бонус.</strong> WB и Ozon продвигают эфиры в отдельных разделах и пушат
            уведомления подписчикам продавца. Органический охват — бесплатно.
          </li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «товары для дома» — продавец силиконовых форм для выпечки —
          провёл первый 45-минутный эфир без опыта. Результат: 112 заказов на сумму 68 000 ₽ за трансляцию.
          В тот же день без эфира карточка генерировала 8–12 заказов.
        </p>

        <h2 style={styles.h2}>WB Live vs Ozon Live: в чём разница</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>WB Live</th>
              <th style={styles.th}>Ozon Live</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Доступ для продавцов</td>
              <td style={styles.td}>Все, рейтинг продавца ≥ 3.5</td>
              <td style={styles.td}>Все, активный магазин</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия с продаж в эфире</td>
              <td style={styles.td}>Стандартная по категории</td>
              <td style={styles.td}>Стандартная по категории</td>
            </tr>
            <tr>
              <td style={styles.td}>Скидка в эфире</td>
              <td style={styles.tdAccent}><strong>От 5% — обязательно</strong></td>
              <td style={styles.td}>Необязательна, но рекомендована</td>
            </tr>
            <tr>
              <td style={styles.td}>Анонс эфира в приложении</td>
              <td style={styles.td}>Пуш подписчикам магазина</td>
              <td style={styles.td}>Пуш + раздел «Прямые эфиры»</td>
            </tr>
            <tr>
              <td style={styles.td}>Запись доступна после</td>
              <td style={styles.td}>Да, до 30 дней</td>
              <td style={styles.td}>Да, бессрочно</td>
            </tr>
            <tr>
              <td style={styles.td}>Встроенная аналитика</td>
              <td style={styles.td}>Просмотры, заказы, GMV</td>
              <td style={styles.td}>Просмотры, клики, заказы</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          <strong>Практический вывод:</strong> начинать удобнее с Ozon Live — там нет обязательного порога
          скидки, и настройки проще для первого раза. WB Live потенциально даёт больший охват за счёт
          аудитории Wildberries, но требует подготовки ценообразования.
        </p>

        <h2 style={styles.h2}>Как подготовиться к первому эфиру: чек-лист</h2>

        <h3 style={styles.h3}>За неделю до эфира</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Выбрать 5–8 товаров для показа. Оптимально — один «якорный» с хорошей маржой и несколько сопутствующих.</li>
          <li style={styles.li}>
            Проверить остатки: на каждый показываемый товар должно быть минимум 30–50 единиц на складе.
            Эфир без товара = слитый охват.
          </li>
          <li style={styles.li}>Создать акционную цену в ЛК (WB требует минимум −5% от обычной цены).</li>
          <li style={styles.li}>Анонсировать эфир в карточках товара, в описании магазина и в своём Telegram-канале если есть.</li>
          <li style={styles.li}>Написать сценарий: 3 предложения про каждый товар — зачем нужен, что отличает, почему брать сейчас.</li>
          <li style={styles.li}>Сделать или обновить главное фото товара — его показывают в плашке эфира. Плохое фото = мало кликов.</li>
        </ul>

        <h3 style={styles.h3}>За день до эфира</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Подготовить место съёмки: нейтральный фон, хорошее освещение (кольцевой свет или окно сбоку).</li>
          <li style={styles.li}>Проверить интернет: стабильный канал от 10 Мбит/с на отдачу. Мобильный интернет ненадёжен для стрима.</li>
          <li style={styles.li}>Сделать тестовый прогон: проверить как выглядит товар в кадре, как слышен голос.</li>
          <li style={styles.li}>Подготовить реквизит: ставни для демонстрации объёма, подставки, образцы цветов.</li>
          <li style={styles.li}>Выспаться. Во время эфира нельзя читать с листа — нужен живой разговор.</li>
        </ul>

        <h2 style={styles.h2}>Структура 60-минутного эфира</h2>
        <p style={styles.p}>
          Первые 10 минут — самые важные: алгоритм решает, продвигать ли эфир дальше, именно по начальным
          показателям удержания. Не тратьте их на приветствие и «сейчас всё расскажу».
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>0:00–2:00 — Крючок.</strong> Сразу показываете самый интересный товар или результат:
            «Смотрите, вот форма для выпечки — я только что вынула кекс, он выходит целиком за секунду».
            Нет вступления, сразу продукт в действии.
          </li>
          <li style={styles.li}>
            <strong>2:00–10:00 — Якорный товар #1.</strong> Демонстрация, закрытие возражений, цена в эфире vs
            обычная. Просьба написать в чат вопросы — это поднимает активность и даёт алгоритму сигнал.
          </li>
          <li style={styles.li}>
            <strong>10:00–40:00 — Основные товары.</strong> По 5–8 минут на каждый. Схема: показ → ключевое
            преимущество → цена → «ссылка в описании эфира». Отвечайте на вопросы чата между товарами.
          </li>
          <li style={styles.li}>
            <strong>40:00–55:00 — Возврат к топ-товарам.</strong> Новые зрители зашли позже — покажите лучшие
            позиции снова. Это не повтор, а нормальная логика стрима.
          </li>
          <li style={styles.li}>
            <strong>55:00–60:00 — Финальный аккорд.</strong> «Следующий эфир — в пятницу, там будет новинка».
            Призыв подписаться на магазин для уведомлений.
          </li>
        </ol>

        <h2 style={styles.h2}>Технические требования и оборудование</h2>
        <p style={styles.p}>
          Для первого эфира не нужно дорогое оборудование. Вот минимальный набор:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Смартфон</strong> — с хорошей камерой (iPhone 12+, Samsung S21+ или аналоги). Снимать горизонтально — 16:9.</li>
          <li style={styles.li}><strong>Штатив или держатель</strong> — руки должны быть свободны для демонстрации товара. Руки в кадре = доверие.</li>
          <li style={styles.li}>
            <strong>Освещение.</strong> Кольцевой свет диаметром 36–48 см — 1 500–3 000 ₽ на маркетплейсе.
            Или большое окно сбоку + белый лист бумаги с другой стороны для заполнения теней.
          </li>
          <li style={styles.li}><strong>Микрофон-петличка</strong> — 500–1 500 ₽. Встроенный микрофон телефона звучит гулко и далеко.</li>
          <li style={styles.li}><strong>Фон.</strong> Белая стена, рулон крафта или готовый виниловый фон — главное без пёстрых паттернов.</li>
        </ul>
        <p style={styles.p}>
          Итого на оснащение: 2 500–6 000 ₽ — если нет ничего. Часть точно найдётся дома.
        </p>

        <h2 style={styles.h2}>Как поднять просмотры и продажи в прямом эфире</h2>

        <h3 style={styles.h3}>До эфира: трафик</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Анонс в своём Telegram-канале за 2 дня и за 2 часа. Если канала нет — создать, тема отдельной{" "}
            <Link href="/blog/telegram-kanal-dlya-marketpleys-2026" style={{ color: "#7c3aed" }}>
              статьи про Telegram для маркетплейса
            </Link>
            .
          </li>
          <li style={styles.li}>Добавить упоминание эфира в описание всех карточек участвующих товаров за 24 часа.</li>
          <li style={styles.li}>Попросить покупателей, которые уже оставили отзывы, подписаться на уведомления магазина.</li>
          <li style={styles.li}>Запустить бюджетную рекламную кампанию на страницу магазина за день до эфира — 500–1 000 ₽ хватит для прогрева.</li>
        </ul>

        <h3 style={styles.h3}>Во время эфира: удержание</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Задавайте вопросы зрителям: «Напишите в чат — вы для себя или в подарок?». Активный чат = сигнал алгоритму.</li>
          <li style={styles.li}>Объявляйте таймер: «Через 5 минут покажу секретную цену на следующий товар». Это держит аудиторию.</li>
          <li style={styles.li}>
            Называйте конкретные числа: «900 граммов, а не 800 как у конкурентов» — покупатели запоминают цифры, не прилагательные.
          </li>
          <li style={styles.li}>Показывайте товар с разных сторон, открывайте, сжимайте, мойте — всё что нельзя показать на фото.</li>
        </ul>

        <h2 style={styles.h2}>Ошибки первых эфиров</h2>

        <h3 style={styles.h3}>Нет эксклюзивной цены</h3>
        <p style={styles.p}>
          Самая частая ошибка: выходить в эфир без специальной цены. Зритель видит тот же ценник что и в
          карточке — зачем покупать прямо сейчас? Скидка 10–15% от обычной цены или бонусный подарок
          при заказе в эфире кратно повышают конверсию. Даже если маржа чуть падает — объём компенсирует.
        </p>

        <h3 style={styles.h3}>Плохое качество картинки</h3>
        <p style={styles.p}>
          Мутное видео с трясущейся рукой и гулким звуком — покупатель закроет эфир через 15 секунд.
          Алгоритм это видит и перестаёт продвигать трансляцию. Потратьте час на тестовый прогон накануне:
          проверьте фокус, свет, звук. Это дешевле, чем потратить 2 часа на эфир без результата.
        </p>

        <h3 style={styles.h3}>Слишком много товаров</h3>
        <p style={styles.p}>
          10–15 товаров за 60 минут — это по 4 минуты на каждый. Не успеешь раскрыть ни один.
          Лучше 5–6 товаров с полноценной демонстрацией, чем 15 позиций мелькнувших по кругу.
          Запись эфира потом работает как длинное видео в карточке — так что глубина важнее ширины.
        </p>

        <h3 style={styles.h3}>Нет призыва к действию</h3>
        <p style={styles.p}>
          «Ну вот, в общем, хороший товар» — не продаёт. «Ссылка в описании эфира, цена 890 рублей только
          сегодня, после эфира вернётся к 1 100» — продаёт. Называйте цену и действие явно, каждые 3–4 минуты.
        </p>

        <h2 style={styles.h2}>Аналитика после эфира: что смотреть</h2>
        <p style={styles.p}>
          В личном кабинете WB и Ozon после трансляции доступна статистика. Вот ключевые показатели:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Пиковое число зрителей и средний онлайн.</strong> Если средний онлайн упал после 10-й минуты —
            начало было слабым. Если удержался — структура работала.
          </li>
          <li style={styles.li}>
            <strong>Конверсия в заказ.</strong> Норма для первых эфиров — 4–6%. После 5–10 трансляций
            опытные продавцы выходят на 10–15% в пиках.
          </li>
          <li style={styles.li}>
            <strong>Какой товар дал больше заказов.</strong> Это ваш следующий «якорный» продукт — ставьте его
            раньше в структуре следующего эфира.
          </li>
          <li style={styles.li}>
            <strong>Просмотры записи.</strong> Запись продолжает работать ещё 2–4 недели. Если запись набирает
            просмотры — значит тема горячая, делайте новый эфир на том же товаре.
          </li>
        </ul>

        <h2 style={styles.h2}>С чего начать прямо сейчас</h2>
        <p style={styles.p}>
          Live Shopping не требует специальных знаний или дорогого оборудования. Первый эфир нужно сделать
          несовершенным, но сделать — данные из него покажут что работает именно для вашей аудитории и
          категории. Вот план на ближайшие 7 дней:
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}>Выбрать площадку для первого эфира — рекомендуем Ozon Live как более простой вход.</li>
          <li style={styles.li}>
            Проверить остатки на 5–8 товаров. Убедиться что на каждом стоит{" "}
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              сильное главное фото
            </Link>
            {" "}— оно попадёт в плашку эфира.
          </li>
          <li style={styles.li}>Написать сценарий: по 3–5 тезисов на каждый товар.</li>
          <li style={styles.li}>Провести тестовый прогон без зрителей: проверить свет, звук, кадр.</li>
          <li style={styles.li}>Анонсировать дату и выйти в эфир.</li>
        </ol>
        <p style={styles.p}>
          Первый эфир часто даёт неожиданно хорошие результаты — алгоритмы маркетплейсов поощряют новых
          участников формата. Пользуйтесь этим окном раньше, чем конкуренты по категории.
        </p>
        <p style={styles.p}>
          И помните: карточка товара, которую вы показываете в эфире, должна быть на высоте. Зрители кликают
          на фото после прямого эфира — слабая карточка{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            теряет конверсию
          </Link>{" "}
          даже после идеального стрима.
        </p>

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
            Подготовьте карточки к эфиру за 2 минуты
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Зрители Live кликают на фото после трансляции. Если карточка слабая — эфир работал впустую.
            Aiviso генерирует профессиональные фото товара из вашего исходника — 13 кредитов на старте бесплатно.
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
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              Главное фото карточки: 8 правил первого слайда который продаёт
            </Link>
          </li>
          <li>
            <Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>
              CTR карточки на WB и Ozon: как измерить и поднять кликабельность
            </Link>
          </li>
          <li>
            <Link href="/blog/telegram-kanal-dlya-marketpleys-2026" style={{ color: "#7c3aed" }}>
              Telegram-канал для маркетплейса: с нуля до трафика в 2026
            </Link>
          </li>
          <li>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
