import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Бизнес-план для выхода на маркетплейс: шаблон 2026 — Aiviso",
  description: "Пошаговый шаблон бизнес-плана для старта на Wildberries и Ozon. Расчёты затрат, прогноз выручки, анализ конкурентов и чек-лист из 16 шагов.",
  keywords: [
    "бизнес план маркетплейс 2026",
    "как выйти на wildberries",
    "бизнес план wildberries ozon",
    "расчёт окупаемости маркетплейс",
    "старт на маркетплейсе с нуля",
    "юнит экономика маркетплейс",
    "финансовый план для продавца",
    "как начать продавать на wb",
  ],
  alternates: { canonical: "/blog/biznes-plan-marketpleys-2026" },
  openGraph: {
    title: "Бизнес-план для маркетплейса: шаблон и расчёты 2026",
    description: "Пошаговый шаблон бизнес-плана для старта на Wildberries и Ozon. Анализ ниши, стартовые вложения, прогноз выручки.",
    url: "/blog/biznes-plan-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Бизнес-план для выхода на маркетплейс: шаблон и расчёты 2026",
  description: "Пошаговый шаблон бизнес-плана для старта на Wildberries и Ozon. Расчёты затрат, прогноз выручки, анализ конкурентов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/biznes-plan-marketpleys-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Бизнес-план для маркетплейса", item: "https://aiviso.ru/blog/biznes-plan-marketpleys-2026" },
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

export default function BiznesPlanMarketpleys() {
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
          <span style={{ color: "#1f2937" }}>Бизнес-план для маркетплейса</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Бизнес-план для выхода на маркетплейс: шаблон и расчёты 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 16 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство продавцов заходят на Wildberries или Ozon без расчётов: купили товар,
          выставили цену по рынку, подождали — и через два месяца обнаружили, что работают в ноль
          или ушли в минус. Бизнес-план занимает 3–4 часа, но избавляет от этой ловушки ещё до
          первой закупки.
        </p>

        <h2 style={styles.h2}>Зачем нужен бизнес-план на маркетплейсе</h2>
        <p style={styles.p}>
          На маркетплейсе много скрытых затрат: логистика туда и обратно, комиссия площадки, реклама,
          хранение, маркировка, брак и возвраты. Без расчёта легко выставить цену, которая покрывает
          только себестоимость, но не операционку.
        </p>
        <p style={styles.p}>
          Один из клиентов в категории «Аксессуары для телефонов» продавал 200 единиц в месяц
          и считал, что бизнес прибыльный. После аудита вышло: чистая прибыль — 1 800 ₽/мес при
          обороте 94 000 ₽. Всё съедала логистика возвратов (процент выкупа 48%) и хранение
          неликвидных позиций. Расчёт на старте дал бы понять это до закупки.
        </p>
        <p style={styles.p}>
          Бизнес-план — не документ для инвестора. Это таблица на 2–3 листа, которую вы делаете
          для себя. Цель: пройти путь от «хочу продавать» до «понимаю, сколько заработаю
          через 90 дней и что для этого нужно».
        </p>

        <h2 style={styles.h2}>Блок 1. Анализ ниши и конкурентов</h2>
        <p style={styles.p}>
          Прежде чем считать деньги, убедитесь, что на ваш товар есть устойчивый спрос
          и маржа позволяет зайти.
        </p>

        <h3 style={styles.h3}>Что смотреть в нише</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Объём категории.</strong> Суммарная выручка ТОП-100 продавцов за 30 дней — ориентир рынка. Ищите категории от 5 млн ₽/мес, иначе даже ТОП-10 не даст нужного оборота.</li>
          <li style={styles.li}><strong>Концентрация.</strong> Если на первых 5 продавцов приходится 80% выручки — конкурировать тяжело. Ищите категории, где ТОП-20 делят примерно поровну.</li>
          <li style={styles.li}><strong>Количество продавцов.</strong> Рост числа продавцов год к году — сигнал повышения конкуренции. Оценивайте тренд, а не снимок.</li>
          <li style={styles.li}><strong>Средний чек.</strong> Чем выше чек, тем легче «отбить» фото, рекламу и логистику. Товары до 300 ₽ почти не оставляют маржи после всех вычетов.</li>
          <li style={styles.li}><strong>Сезонность.</strong> Есть ли пики и что происходит в несезон. Продавать купальники зимой без подготовки — это замороженные деньги на складе.</li>
        </ul>

        <h3 style={styles.h3}>Анализ конкурентов из ТОП-10</h3>
        <p style={styles.p}>Для каждого конкурента фиксируйте:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Цена и количество вариантов (цвет, размер)</li>
          <li style={styles.li}>Количество отзывов и средняя оценка</li>
          <li style={styles.li}>Количество фото и есть ли инфографика</li>
          <li style={styles.li}>Приблизительный объём продаж за 30 дней (MPStats или Sellmonitor)</li>
          <li style={styles.li}>Слабые места карточки — что можно сделать лучше</li>
        </ul>
        <p style={styles.p}>
          Инструменты: MPStats, Sellmonitor, Shopstat — данные по любой категории платные,
          но одного месяца подписки хватит на проверку 3–5 ниш. Бесплатно — просто мониторьте
          листинг вручную несколько дней: сколько отзывов добавляется у конкурента в сутки.
        </p>

        <h2 style={styles.h2}>Блок 2. Расчёт стартовых инвестиций</h2>
        <p style={styles.p}>
          Стандартные статьи затрат при запуске одного SKU. Цифры — ориентиры для товара
          средней ценовой категории (чек 800–2 000 ₽), первая поставка 100 единиц.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Статья затрат</th>
              <th style={styles.th}>Минимум</th>
              <th style={styles.th}>Комфортный старт</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Закупка товара (100 ед.)</td>
              <td style={styles.td}>15 000 ₽</td>
              <td style={styles.td}>40 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Фото для карточки (8–10 кадров)</td>
              <td style={styles.td}>1 500 ₽ (AI)</td>
              <td style={styles.td}>8 000 ₽ (студия)</td>
            </tr>
            <tr>
              <td style={styles.td}>Гарантийный взнос WB</td>
              <td style={styles.td}>10 000 ₽</td>
              <td style={styles.td}>10 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Маркировка и упаковка</td>
              <td style={styles.td}>1 500 ₽</td>
              <td style={styles.td}>3 500 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Первичная реклама (2 недели)</td>
              <td style={styles.td}>5 000 ₽</td>
              <td style={styles.td}>15 000 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Доставка до склада</td>
              <td style={styles.td}>1 000 ₽</td>
              <td style={styles.td}>2 500 ₽</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>Итого</strong></td>
              <td style={styles.tdAccent}><strong>34 000 ₽</strong></td>
              <td style={styles.tdAccent}><strong>79 000 ₽</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          На Ozon гарантийного взноса нет — старт дешевле на 10 000 ₽. Но первая
          поставка по FBO требует от 30 единиц на каждый склад.
        </p>
        <p style={styles.p}>
          Добавьте к итогу 20% резерва на непредвиденное: задержку поставки, штраф
          за упаковку, внеплановый возврат крупной партии. Это не паранойя — это стандартная
          практика.
        </p>

        <h2 style={styles.h2}>Блок 3. Юнит-экономика — считаем реальную прибыль</h2>
        <p style={styles.p}>
          Юнит-экономика — это сколько вы зарабатываете или теряете на каждой проданной единице.
          Формула:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 14, lineHeight: 2 }}>
          <strong>Прибыль на ед.</strong> = Цена продажи<br />
          − Себестоимость товара<br />
          − Комиссия площадки (12–25%)<br />
          − Логистика «туда» (~80–120 ₽)<br />
          − Доля возвратов × логистика «обратно»<br />
          − Хранение (если FBO и оборачиваемость выше 60 дней)<br />
          − Доля рекламы на единицу (ДРР × цена)
        </div>

        <h3 style={styles.h3}>Пример расчёта: фитнес-резинки, WB</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Показатель</th>
              <th style={styles.th}>Значение</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={styles.td}>Цена продажи</td><td style={styles.td}>890 ₽</td></tr>
            <tr><td style={styles.td}>Себестоимость (закупка + упаковка)</td><td style={styles.td}>−280 ₽</td></tr>
            <tr><td style={styles.td}>Комиссия WB (15%)</td><td style={styles.td}>−133 ₽</td></tr>
            <tr><td style={styles.td}>Логистика туда</td><td style={styles.td}>−90 ₽</td></tr>
            <tr><td style={styles.td}>Возвраты (20% × 120 ₽)</td><td style={styles.td}>−24 ₽</td></tr>
            <tr><td style={styles.td}>Реклама (ДРР 8%)</td><td style={styles.td}>−71 ₽</td></tr>
            <tr><td style={styles.tdAccent}><strong>Чистая прибыль на ед.</strong></td><td style={styles.tdAccent}><strong>292 ₽ (33%)</strong></td></tr>
          </tbody>
        </table>
        <p style={styles.p}>
          33% маржи — хороший показатель для маркетплейса. Если у вас ниже 15% — либо нужно
          снижать себестоимость, либо поднимать цену, либо менять товар. Работать с маржой
          ниже 10% нецелесообразно: любое колебание в логистике или увеличение возвратов
          уводит в минус.
        </p>

        <h2 style={styles.h2}>Блок 4. Прогноз продаж и точка безубыточности</h2>
        <p style={styles.p}>
          После юнит-экономики считаем: сколько надо продать, чтобы покрыть стартовые вложения?
        </p>
        <p style={styles.p}>
          Из примера выше: стартовые вложения — 50 000 ₽, прибыль с единицы — 292 ₽.
          Точка безубыточности: 50 000 ÷ 292 = <strong>172 единицы</strong>.
        </p>
        <p style={styles.p}>
          Реалистичный прогноз продаж для нового товара в умеренно конкурентной нише:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Месяц 1.</strong> 20–40 продаж. Карточка ещё не проиндексирована, нет отзывов, реклама работает с высоким ДРР. Фиксируем метрики, набираем первые отзывы, дорабатываем фото.</li>
          <li style={styles.li}><strong>Месяц 2.</strong> 60–100 продаж. Появились первые 5–10 отзывов, карточка поднялась в поиске. Реклама начинает работать эффективнее.</li>
          <li style={styles.li}><strong>Месяц 3.</strong> 100–200 продаж. При хорошей карточке — выход на плановые продажи и возврат стартовых вложений.</li>
        </ul>
        <p style={styles.p}>
          В примере с резинками: 172 единицы = примерно 2,5–3 месяца на комфортном старте.
          При бюджетном старте без рекламы — 4–5 месяцев. Если срок окупаемости выше 6 месяцев
          — пересмотрите товар или себестоимость.
        </p>

        <h2 style={styles.h2}>Блок 5. Маркетинговый план</h2>

        <h3 style={styles.h3}>Органическое продвижение (бесплатно)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>SEO заголовка и характеристик.</strong> Правильные ключи поднимают карточку без бюджета. Заголовок с ключевым запросом в точном вхождении — обязателен.</li>
          <li style={styles.li}><strong>CTR главного фото.</strong> Карточка с CTR 4% получает в 2,5 раза больше показов, чем карточка с CTR 1,6%. Тестируйте главный слайд — это бесплатный рычаг роста.</li>
          <li style={styles.li}><strong>Сбор первых отзывов.</strong> Программы лояльности площадки (баллы WB) и вкладыши в упаковку дают первые 10 отзывов без нарушений.</li>
          <li style={styles.li}><strong>Участие в акциях.</strong> Повышает видимость в листинге даже без рекламного бюджета. Главное — считать цену безубытка заранее.</li>
        </ul>

        <h3 style={styles.h3}>Платное продвижение</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Первые 2 недели.</strong> Бюджет 300–500 ₽/день для разгона карточки. Цель: первые 10 продаж и первые 3–5 отзывов, а не прибыль.</li>
          <li style={styles.li}><strong>Месяц 2–3.</strong> Снижаем ДРР до 8–12%, оставляем только прибыльные кампании, отключаем неконвертирующие ключи.</li>
          <li style={styles.li}><strong>Внешний трафик.</strong> Telegram-посевы от 3 000 ₽ за публикацию в тематическом канале. WB снижает стоимость логистики при внешних переходах — дополнительный бонус.</li>
        </ul>

        <h2 style={styles.h2}>Блок 6. Операционный план</h2>
        <p style={styles.p}>
          Финансовый план без операционки — это финансовая фантастика. Пропишите процессы
          заранее, чтобы не тушить пожары в первый месяц.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Схема логистики.</strong> FBO даёт лучшие позиции в поиске, но замораживает товар. FBS подходит для проверки ниши без риска платного хранения.</li>
          <li style={styles.li}><strong>Пополнение запасов.</strong> При остатке на 30 дней продаж — делать следующий заказ (с учётом срока доставки поставщика). Опустошение стока обнуляет позиции за 48 часов.</li>
          <li style={styles.li}><strong>Мониторинг метрик.</strong> Еженедельно: CTR, конверсия в заказ, ДРР, процент выкупа, остатки. Ежемесячно: чистая прибыль по юнит-экономике.</li>
          <li style={styles.li}><strong>Работа с отзывами.</strong> Отвечать на все отзывы в течение 24 часов. Алгоритм WB учитывает скорость ответа при ранжировании.</li>
          <li style={styles.li}><strong>Обновление фото.</strong> При CTR ниже 2% тестировать новый главный слайд. AI-генерация позволяет сделать это за 30 минут без пересъёмки.</li>
        </ul>

        <h2 style={styles.h2}>Риски и план Б</h2>
        <p style={styles.p}>
          Честный бизнес-план включает сценарии «что если». Три главных риска
          на маркетплейсе:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Сезонный провал.</strong> Продажи упали на 60% в несезон, платное хранение
            капает. Решение: заранее считать денежный поток по месяцам, планировать пополнение
            в пик, диверсифицировать ассортимент всесезонными товарами.
          </li>
          <li style={styles.li}>
            <strong>Конкурент снизил цену.</strong> Маржа упала до нуля. Решение: держать
            себестоимость минимум на 30% ниже рыночной цены, чтобы оставался запас для манёвра
            без ухода в минус.
          </li>
          <li style={styles.li}>
            <strong>Высокий процент возвратов.</strong> Возвраты выше 30% — пересмотреть фото
            и описание: покупатели получают не то, что видели в карточке. Несоответствие цвета,
            размера или деталей на фото — самая частая причина.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 16 пунктов бизнес-плана</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Выбрана ниша с объёмом рынка от 5 млн ₽/мес</li>
          <li style={styles.li}>Проверена концентрация: нет монополиста с долей 80%+</li>
          <li style={styles.li}>Изучены ТОП-5 конкурентов по цене, фото, отзывам</li>
          <li style={styles.li}>Определён целевой средний чек (от 500 ₽)</li>
          <li style={styles.li}>Найден поставщик с ценой не выше 35% от розницы</li>
          <li style={styles.li}>Рассчитана юнит-экономика с маржой не ниже 15%</li>
          <li style={styles.li}>Посчитаны стартовые вложения с запасом 20%</li>
          <li style={styles.li}>Определена точка безубыточности (в единицах и месяцах)</li>
          <li style={styles.li}>Выбрана схема логистики (FBO или FBS)</li>
          <li style={styles.li}>Запланированы фото для карточки: минимум 8 кадров + инфографика</li>
          <li style={styles.li}>Написан SEO-заголовок с ключевыми запросами</li>
          <li style={styles.li}>Выделен бюджет на первичную рекламу</li>
          <li style={styles.li}>Определён срок следующей закупки и объём страхового запаса</li>
          <li style={styles.li}>Прописан план по сбору первых 10 отзывов</li>
          <li style={styles.li}>Просчитан денежный поток на 6 месяцев с учётом сезонности</li>
          <li style={styles.li}>Описан план Б при ДРР выше 20% или выкупе ниже 50%</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Фото — первый рычаг роста CTR и конверсии.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуй Aiviso бесплатно</Link>
            {" "}— загрузи фото товара, получи 2 готовых кадра для карточки за 2 минуты.
            13 кредитов на старте без карты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/startovye-vlozheniya-marketpleys-2026" style={{ color: "#7c3aed" }}>Сколько нужно денег для старта на маркетплейсе</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>Юнит-экономика для маркетплейса: формула и расчёты</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/kak-vybrat-nishu-wildberries-2026" style={{ color: "#7c3aed" }}>Как выбрать нишу на Wildberries в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>AI-генерация фото для карточки товара — Aiviso</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога</Link></li>
        </ul>
      </article>
    </>
  );
}
