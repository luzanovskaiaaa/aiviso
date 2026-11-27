import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Медиаплан для маркетплейса: как планировать продвижение — Aiviso",
  description:
    "Как составить медиаплан продвижения на Wildberries и Ozon на квартал и год: каналы, бюджет, сезонный календарь. Чек-лист из 16 пунктов и кейс: +2.1 млн ₽ без новых SKU.",
  keywords: [
    "медиаплан для маркетплейса",
    "план продвижения wildberries",
    "маркетинговый план ozon",
    "бюджет рекламы wildberries",
    "сезонный календарь продаж",
    "продвижение на маркетплейсе",
    "стратегия для селлеров",
    "реклама wildberries ozon план",
  ],
  alternates: { canonical: "/blog/mediaplan-dlya-marketpleysa" },
  openGraph: {
    title: "Медиаплан для маркетплейса: как планировать продвижение на год вперёд",
    description:
      "Сезонный календарь, распределение бюджета и квартальный план для продавцов WB и Ozon. Кейс: +2.1 млн ₽ годовой выручки без новых SKU.",
    url: "/blog/mediaplan-dlya-marketpleysa",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Медиаплан для маркетплейса: как планировать продвижение на год вперёд",
  description:
    "Как составить медиаплан продвижения на Wildberries и Ozon: сезонный календарь, распределение бюджета, квартальный план. Чек-лист из 16 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/mediaplan-dlya-marketpleysa",
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
      name: "Медиаплан для маркетплейса",
      item: "https://aiviso.ru/blog/mediaplan-dlya-marketpleysa",
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

export default function MediaplanDlyaMarketpleysa() {
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
          <span style={{ color: "#1f2937" }}>Медиаплан для маркетплейса</span>
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
          Медиаплан для маркетплейса: как планировать продвижение на год вперёд
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>27 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство продавцов WB и Ozon работают в режиме «пожар — тушим»: заметили падение продаж — запустили рекламу,
          пришёл Новый год — спешно меняют фото. Медиаплан выводит из этого режима и позволяет зарабатывать больше при том
          же рекламном бюджете.
        </p>

        <h2 style={styles.h2}>Почему реактивный подход дорого стоит</h2>
        <p style={styles.p}>
          Один из наших клиентов из категории «Товары для дома» в октябре 2025 года запустил рекламу за 5 дней до Чёрной
          пятницы — ДРР вышел 38%. Другой продавец той же категории начал готовиться за 6 недель: обновил фото,
          заблаговременно занял позиции по ключам, накопил отзывы. Его ДРР на той же акции — 11%. При одинаковом рекламном
          бюджете в 50 000 ₽ разница в чистой прибыли составила больше 90 000 ₽.
        </p>
        <p style={styles.p}>Реактивный подход бьёт по трём статьям:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Переплата за рекламу.</strong> Перед Чёрной пятницей и Новым годом ставки в аукционе WB и Ozon
            вырастают в 2–4 раза. Те, кто планирует, занимают позиции органикой до пика — и не платят за трафик в
            самый дорогой момент.
          </li>
          <li style={styles.li}>
            <strong>Упущенные продажи из-за слабого контента.</strong> Если карточку обновляют за неделю до праздника,
            алгоритм не успевает её переиндексировать. По данным WB, карточке нужно 10–14 дней чтобы выйти на новые
            позиции после обновления фото и ключей.
          </li>
          <li style={styles.li}>
            <strong>Дефицит товара в пике.</strong> Без календаря трудно заранее рассчитать запас. Результат — out-of-stock
            в самые доходные дни, потеря позиций и возврат трафика к конкурентам.
          </li>
        </ul>

        <h2 style={styles.h2}>Три горизонта планирования</h2>
        <p style={styles.p}>
          Медиаплан для маркетплейса работает на трёх уровнях. Они не заменяют друг друга — каждый уровень отвечает за
          свои задачи.
        </p>

        <h3 style={styles.h3}>Годовой план</h3>
        <p style={styles.p}>
          Крупная рамка: какие сезоны, распродажи и события важны для вашей категории. На этом уровне планируют закупки,
          обновление ассортимента и крупные вложения в контент.
        </p>
        <p style={styles.p}>
          Формат: таблица по месяцам с пометками «высокий сезон», «спад», «готовить товар», «обновить фото». На год вперёд
          не нужна детализация по неделям — достаточно знать, что в феврале провал, а в декабре пик.
        </p>

        <h3 style={styles.h3}>Квартальный план</h3>
        <p style={styles.p}>
          Конкретные мероприятия: когда запускать рекламные кампании, когда обновлять карточки, в каких акциях
          участвовать, сколько бюджета на что выделять. Квартальный план составляется раз в три месяца и корректируется
          по факту.
        </p>

        <h3 style={styles.h3}>Недельный операционный план</h3>
        <p style={styles.p}>
          Конкретные задачи исполнителям на неделю с дедлайнами. Факт сравнивается с планом по метрикам: CTR, конверсия,
          ДРР. Это не стратегия — это операционка.
        </p>

        <h2 style={styles.h2}>Сезонный календарь для продавца WB и Ozon</h2>
        <p style={styles.p}>
          Вот базовый шаблон по месяцам — подстройте под свою категорию:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Месяц</th>
              <th style={styles.th}>Событие / сезон</th>
              <th style={styles.th}>Что делать за 4–6 недель</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Январь</td>
              <td style={styles.td}>Постновогодний спад, распродажи остатков</td>
              <td style={styles.td}>Ликвидация стоков, обновление карточек к весне</td>
            </tr>
            <tr>
              <td style={styles.td}>Февраль</td>
              <td style={styles.td}>23 февраля (подарки мужчинам)</td>
              <td style={styles.tdAccent}>Обновить фото, добавить «подарочные» теги, закупить запас</td>
            </tr>
            <tr>
              <td style={styles.td}>Март</td>
              <td style={styles.td}>8 марта (пик для женских товаров)</td>
              <td style={styles.tdAccent}>Lifestyle-сцены «в подарок», цветочные фоны, реклама с 15 февраля</td>
            </tr>
            <tr>
              <td style={styles.td}>Апрель–Май</td>
              <td style={styles.td}>Весенний сезон: сад, спорт, дача</td>
              <td style={styles.td}>Расширить ассортимент, обновить outdoor-фото</td>
            </tr>
            <tr>
              <td style={styles.td}>Июнь–Август</td>
              <td style={styles.td}>Летний сезон, Back to school в августе</td>
              <td style={styles.td}>Летние lifestyle-сцены, школьные акции с июля</td>
            </tr>
            <tr>
              <td style={styles.td}>Сентябрь–Октябрь</td>
              <td style={styles.td}>Осенний сезон, подготовка к Q4</td>
              <td style={styles.td}>Аудит всех карточек, обновление до пика</td>
            </tr>
            <tr>
              <td style={styles.td}>Ноябрь</td>
              <td style={styles.td}>11.11, Чёрная пятница</td>
              <td style={styles.tdAccent}>Максимальный бюджет, карточки обновить в октябре</td>
            </tr>
            <tr>
              <td style={styles.td}>Декабрь</td>
              <td style={styles.td}>Новый год (главный пик)</td>
              <td style={styles.tdAccent}>Подарочные наборы, зимние сцены, запас на 3 недели вперёд</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Как распределить рекламный бюджет по каналам</h2>
        <p style={styles.p}>
          Универсального рецепта нет — структура зависит от категории и стадии магазина. Но вот базовый ориентир для
          магазина с ежемесячным рекламным бюджетом 50 000–150 000 ₽:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>60–70% — внутренняя реклама WB и Ozon.</strong> Трафаретная и поисковая реклама. Самый управляемый
            канал с быстрым результатом.
          </li>
          <li style={styles.li}>
            <strong>15–20% — внешний трафик.</strong> Telegram-посевы в нишевых каналах, блогеры с небольшой
            аудиторией. WB даёт бонус до 15% к ДРР за внешний трафик — его не стоит игнорировать.
          </li>
          <li style={styles.li}>
            <strong>10–15% — контент.</strong> Обновление фото, инфографика, Rich-контент. Это не расход, а инвестиция:
            хорошая карточка снижает стоимость клика и повышает конверсию одновременно.
          </li>
          <li style={styles.li}>
            <strong>5% — работа с отзывами и удержание.</strong> Вкладыши в упаковку, программы лояльности, быстрые
            ответы на вопросы.
          </li>
        </ul>
        <p style={styles.p}>
          В пиковые месяцы (ноябрь, декабрь, март) долю внутренней рекламы увеличивают до 75–80%. В спокойные месяцы
          больше вкладывают в контент и подготовку к следующему сезону.
        </p>

        <h2 style={styles.h2}>Как составить медиаплан на квартал: 5 шагов</h2>

        <h3 style={styles.h3}>Шаг 1. Выгрузи данные за прошлый квартал</h3>
        <p style={styles.p}>
          Из личного кабинета WB или Ozon выгрузи еженедельные данные: выручка, заказы, CTR по карточкам, ДРР по
          кампаниям. Занеси в таблицу. Визуально видно пики и провалы — это ваш исторический паттерн.
        </p>

        <h3 style={styles.h3}>Шаг 2. Проставь даты событий</h3>
        <p style={styles.p}>
          Добавь в таблицу столбец «событие» и отметь: акции маркетплейса (они публикуются в ЛК за 3–4 недели),
          государственные праздники, сезонные пики по своей категории. Теперь видно, к каким неделям нужно готовиться.
        </p>

        <h3 style={styles.h3}>Шаг 3. Запланируй обновление карточек</h3>
        <p style={styles.p}>
          Правило: карточка обновляется за <strong>4 недели до пика</strong>. Если пик — 8 марта, новое фото должно быть
          загружено 8 февраля. Если это AI-генерация через Aiviso, весь комплект фото делается за 1 рабочий день вместо
          поиска фотографа и двухнедельного ожидания.
        </p>

        <h3 style={styles.h3}>Шаг 4. Рассчитай бюджет по неделям</h3>
        <p style={styles.p}>
          На неделю пика выделяй в 2–3 раза больше обычного. На спокойные недели — минимальный бюджет для поддержания
          позиций. Общая логика: «фундамент» рекламы идёт равномерно, дополнительный бюджет — точечно под события.
        </p>

        <h3 style={styles.h3}>Шаг 5. Задай KPI на квартал</h3>
        <p style={styles.p}>
          Зафикси три цифры, которые будешь смотреть еженедельно: целевой CTR главного фото (ориентир — от 3%),
          целевая конверсия карточки (от 4%), целевой ДРР (до 15%). Это позволяет поймать проблему раньше, чем она
          превратится в потерю денег.
        </p>

        <h2 style={styles.h2}>Кейс: как медиаплан добавил 2.1 млн ₽ без новых SKU</h2>
        <p style={styles.p}>
          Продавец игрушек с оборотом 1.4 млн ₽/мес работал без чёткого плана: рекламу запускал «по ощущениям», фото
          обновлял раз в полгода, в акциях участвовал хаотично. По итогам 2024 года выручка выросла только на 12% —
          при том что рынок детских товаров на WB прирастал на 34%.
        </p>
        <p style={styles.p}>
          В начале 2025 года вместе с нами составили годовой план и квартальный медиаплан на Q1. Основные изменения:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Карточки к 23 февраля и 8 марта обновили за 5 недель до праздников, а не за 3 дня.</li>
          <li style={styles.li}>
            Бюджет перераспределили: в январе (спад) вложили в контент и SEO, в марте удвоили рекламу.
          </li>
          <li style={styles.li}>Для AI-генерации фото перешли на Aiviso — стоимость обновления карточки упала с 8 000 до 400 ₽.</li>
          <li style={styles.li}>Остатки к пикам рассчитывали по плану — не было ни одного out-of-stock в Q1.</li>
        </ul>
        <p style={styles.p}>
          Результат по итогам 2025 года: выручка выросла с 1.4 до 3.5 млн ₽/мес (+2.1 млн ₽/мес) при том же наборе
          товаров. ДРР снизился с 22% до 13%.
        </p>

        <h2 style={styles.h2}>Чек-лист медиаплана: 16 пунктов</h2>
        <p style={styles.p}>Перед стартом нового квартала проверьте каждый пункт:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Выгружены данные продаж за предыдущий квартал по неделям</li>
          <li style={styles.li}>Определены топ-3 товара (локомотивы) для приоритетного продвижения</li>
          <li style={styles.li}>Отмечены все акции маркетплейса на квартал в ЛК WB и Ozon</li>
          <li style={styles.li}>Определены ваши сезонные пики по категории (не только общие праздники)</li>
          <li style={styles.li}>Даты обновления фото стоят минимум за 4 недели до каждого пика</li>
          <li style={styles.li}>Бюджет разбит по неделям (пик × 2–3, спокойные недели — поддержка)</li>
          <li style={styles.li}>Цели по CTR, конверсии и ДРР зафиксированы на квартал</li>
          <li style={styles.li}>Запас товара для пиковых недель рассчитан и заказан</li>
          <li style={styles.li}>Определены каналы внешнего трафика (хотя бы один Telegram-канал)</li>
          <li style={styles.li}>Запланировано SEO-обновление заголовков и характеристик перед сезоном</li>
          <li style={styles.li}>Есть ответственный за еженедельный мониторинг метрик</li>
          <li style={styles.li}>Даты проверки позиций в поиске — раз в неделю</li>
          <li style={styles.li}>Даты проверки ДРР по кампаниям — два раза в неделю</li>
          <li style={styles.li}>Определено, в каких акциях участвовать, в каких нет (расчёт цены безубытка)</li>
          <li style={styles.li}>Есть шаблон отчёта «план vs факт» для подведения итогов квартала</li>
          <li style={styles.li}>Дата составления следующего квартального плана уже стоит в календаре</li>
        </ul>

        <h2 style={styles.h2}>Частые ошибки при составлении медиаплана</h2>
        <p style={styles.p}>
          <strong>Планируют только рекламу, забывают про контент.</strong> Запустить рекламу на устаревшую карточку —
          это слить бюджет. Обновление фото и рекламная кампания должны идти в паре.
        </p>
        <p style={styles.p}>
          <strong>Используют только общие праздники.</strong> Для категории «Товары для рыбалки» пик — открытие сезона
          в апреле и октябрь (подлёдный). Для хозтоваров — март и сентябрь. Смотрите свою статистику, не шаблон.
        </p>
        <p style={styles.p}>
          <strong>Не оставляют резерв бюджета.</strong> Маркетплейсы объявляют внеплановые акции с уведомлением за 3–5
          дней. Если весь бюджет распланирован — упустите возможность. Оставляйте 10–15% бюджета как резерв на такие
          случаи.
        </p>
        <p style={styles.p}>
          <strong>Смотрят только месяц, не недели.</strong> Два продавца с одинаковым ноябрьским планом могут получить
          разные результаты: один запустил рекламу 1 ноября, другой — 10 ноября. Разница в выручке — 40%. Планируйте
          понедельно.
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
            <strong>Хочешь обновить карточки по плану — без ожидания фотографа?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуй Aiviso
            </Link>{" "}
            — AI-генерация фото для WB и Ozon за 2 минуты. 13 кредитов на старте бесплатно. Загрузи одно фото — и
            получи готовый комплект в нужных размерах ещё до того, как найдёшь фотографа.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li>
            <Link href="/blog/sezonnye-tovary-kalendar-2026" style={{ color: "#7c3aed" }}>
              Сезонные товары: календарь продаж 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/drr-reklamy-wb-ozon" style={{ color: "#7c3aed" }}>
              ДРР рекламы на WB и Ozon: как снизить до 10%
            </Link>
          </li>
          <li>
            <Link href="/blog/prodvizhenie-kartochki-bez-reklamy" style={{ color: "#7c3aed" }}>
              Как продвигать карточку без рекламы на WB и Ozon
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
