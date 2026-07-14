import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Алгоритм поиска WB 2026: позиции и ранжирование — Aiviso",
  description: "Как Wildberries ранжирует карточки: конверсия, CTR, оборачиваемость, SEO, отзывы. Разбор алгоритма и чек-лист из 18 пунктов для роста позиций.",
  keywords: [
    "алгоритм wildberries",
    "ранжирование wildberries",
    "как попасть в топ wildberries",
    "факторы ранжирования wb",
    "поиск wildberries 2026",
    "позиции wildberries",
    "конверсия карточки wildberries",
    "seo wildberries",
  ],
  alternates: { canonical: "/blog/algoritm-poiska-wildberries" },
  openGraph: {
    title: "Алгоритм поиска Wildberries 2026: что влияет на позиции",
    description: "Как WB ранжирует карточки: конверсия, CTR, оборачиваемость, SEO и отзывы. Чек-лист из 18 пунктов для роста в поиске.",
    url: "/blog/algoritm-poiska-wildberries",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Алгоритм поиска Wildberries в 2026: что влияет на позиции карточки",
  description: "Разбор факторов ранжирования WB: конверсия, CTR, оборачиваемость, SEO и отзывы. Чек-лист из 18 пунктов для роста позиций.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/algoritm-poiska-wildberries",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Алгоритм поиска WB", item: "https://aiviso.ru/blog/algoritm-poiska-wildberries" },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "28px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function AlgoritmPoiskWB() {
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
          <span style={{ color: "#1f2937" }}>Алгоритм поиска WB</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Алгоритм поиска Wildberries в 2026: что реально влияет на позиции карточки
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 14 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Wildberries не публикует формулу ранжирования. Но за последние три года паттерны стали
          понятны: алгоритм оценивает не «красивую карточку», а поведение покупателей. Разбираем,
          какие именно сигналы WB собирает и как их улучшить без рекламного бюджета.
        </p>

        <h2 style={styles.h2}>Как Wildberries решает, кого показывать первым</h2>
        <p style={styles.p}>
          Поисковый алгоритм WB — это динамическая модель ранжирования. Она пересчитывает позиции
          практически в реальном времени на основе поведенческих и товарных сигналов. Грубо говоря,
          WB спрашивает себя: «Если я поставлю этот товар на первое место, сколько денег заработает
          маркетплейс?» Ответ на этот вопрос и есть ваш рейтинг.
        </p>
        <p style={styles.p}>
          Главные факторы, которые мы выделяем по поведению топа в разных категориях:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Фактор</th>
              <th style={styles.th}>Вес (условный)</th>
              <th style={styles.th}>Как улучшить</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Конверсия в заказ (CR)</td>
              <td style={styles.tdAccent}><strong>Очень высокий</strong></td>
              <td style={styles.td}>Фото, цена, отзывы</td>
            </tr>
            <tr>
              <td style={styles.td}>CTR (клик из выдачи)</td>
              <td style={styles.tdAccent}><strong>Высокий</strong></td>
              <td style={styles.td}>Главное фото, цена, рейтинг</td>
            </tr>
            <tr>
              <td style={styles.td}>Объём продаж (оборот)</td>
              <td style={styles.td}>Высокий</td>
              <td style={styles.td}>Продвижение, реклама, акции</td>
            </tr>
            <tr>
              <td style={styles.td}>Текстовая релевантность</td>
              <td style={styles.td}>Средний</td>
              <td style={styles.td}>Заголовок, характеристики, описание</td>
            </tr>
            <tr>
              <td style={styles.td}>Рейтинг и отзывы</td>
              <td style={styles.td}>Средний</td>
              <td style={styles.td}>Качество товара, работа с отзывами</td>
            </tr>
            <tr>
              <td style={styles.td}>Наличие и оборачиваемость</td>
              <td style={styles.td}>Средний</td>
              <td style={styles.td}>Остатки на складе, скорость поставки</td>
            </tr>
            <tr>
              <td style={styles.td}>Процент выкупа</td>
              <td style={styles.td}>Средний</td>
              <td style={styles.td}>Точность фото, описание размеров</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Новичковый буст — реален. WB даёт свежим карточкам временный подъём в позициях на 14–21
          день. Это «витрина» для сбора данных: как покупатели реагируют. Если реакция хорошая
          (кликают, покупают, не возвращают) — карточка закрепляется в топе органически. Если нет —
          падает вниз.
        </p>

        <h2 style={styles.h2}>CTR и главное фото: почему один клик важнее тысячи показов</h2>
        <p style={styles.p}>
          В выдаче WB покупатель видит только главное фото, цену, рейтинг и несколько символов
          названия. Всё остальное скрыто. Поэтому CTR — соотношение кликов к показам — напрямую
          зависит от первого фото.
        </p>
        <p style={styles.p}>
          Конкретный пример из практики: селлер в категории «Домашний текстиль» заменил главное
          фото с белого студийного на lifestyle-кадр (плед на диване, мягкий свет). CTR вырос
          с 2,1% до 4,7% за три дня. Позиция по ключу «плед 200×220» поднялась с 34 на 11 за две
          недели — без изменений в SEO или цене.
        </p>

        <h3 style={styles.h3}>Что делает главное фото кликабельным</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Вертикальный формат 3:4 (900×1200).</strong> Занимает максимум площади в выдаче, особенно на мобильных.</li>
          <li style={styles.li}><strong>Товар крупно, на 70–80% кадра.</strong> В выдаче мелкие детали не видны — покупатель должен сразу понять, что это.</li>
          <li style={styles.li}><strong>Контрастный, но не кричащий фон.</strong> Белый работает в «Электронике» и «Спорте». В «Одежде» и «Текстиле» лучше нейтральный бежевый или lifestyle.</li>
          <li style={styles.li}><strong>Один главный элемент, никакого хаоса.</strong> «Коллажи» из пяти ракурсов на одном фото снижают CTR — взгляд не фокусируется.</li>
          <li style={styles.li}><strong>Текст на главном фото — осторожно.</strong> Если пишете цену или «-30%», убедитесь, что это не перекрывает товар и не конфликтует с плашками WB.</li>
        </ul>

        <p style={styles.p}>
          Для <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>фото Wildberries</Link> мы
          рекомендуем тестировать минимум два варианта главного кадра через A/B — WB позволяет
          это сделать через личный кабинет. Побеждает тот, у кого выше конверсия за 7-14 дней.
        </p>

        <h2 style={styles.h2}>Конверсия в заказ: главный сигнал для алгоритма</h2>
        <p style={styles.p}>
          Если CTR — это «зашёл на карточку», то конверсия — это «купил». WB считает именно CR,
          а не просто просмотры. Товар с CTR 8% и конверсией 3% будет ниже товара с CTR 4%
          и конверсией 7% — потому что второй приносит маркетплейсу больше денег.
        </p>

        <h3 style={styles.h3}>Что убивает конверсию</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Фото не соответствует реальному товару.</strong> Покупатель открыл карточку, увидел несоответствие (другой оттенок, меньший размер, дешевле выглядит) — закрыл. Алгоритм видит «высокий отказ».</li>
          <li style={styles.li}><strong>Мало фотографий.</strong> Карточки с 7–10 фото конвертируются на 35–40% лучше карточек с 1–3 фото по данным внутренней аналитики наших клиентов.</li>
          <li style={styles.li}><strong>Нет размерной сетки или она непонятна.</strong> В одежде и обуви это причина №1 низкой конверсии — люди боятся не угадать с размером.</li>
          <li style={styles.li}><strong>Цена выше рынка без очевидной причины.</strong> Если аналогов за 800 ₽ много, а у вас 1 400 ₽ — объясните это в фото или описании (материал, комплектация, бренд).</li>
          <li style={styles.li}><strong>Рейтинг ниже 4.5 с плохими отзывами в топе.</strong> Первые три отзыва с оценкой 2 — это антиконверсия, даже если средний рейтинг 4.2.</li>
        </ul>

        <h3 style={styles.h3}>Как быстро поднять конверсию</h3>
        <p style={styles.p}>
          Селлер в категории «Косметика» увеличил конверсию с 4,2% до 6,8% за три недели:
          добавил фото «до/после» применения продукта, прописал состав крупным шрифтом на третьем
          кадре и добавил видео 30 секунд с демонстрацией текстуры. Позиция по ключу
          «сыворотка для лица» выросла с 56 на 23 без изменений в SEO.
        </p>
        <p style={styles.p}>
          Подробный разбор — в нашей статье про{" "}
          <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
            конверсию карточки товара
          </Link>.
        </p>

        <h2 style={styles.h2}>Текстовая релевантность: где и как ставить ключевые слова</h2>
        <p style={styles.p}>
          WB анализирует текст карточки для определения тематической релевантности запросу.
          Алгоритм ищет совпадения в порядке убывания важности:
        </p>
        <ol style={{ paddingLeft: 24, margin: "8px 0" }}>
          <li style={styles.li}><strong>Наименование товара</strong> — самый важный текстовый элемент. Первые 3–4 слова весят больше всего. Формула: [Тип товара] + [Ключевой признак] + [Марка/материал] + [Доп. характеристики].</li>
          <li style={styles.li}><strong>Характеристики</strong> — структурированные данные. WB часто показывает фильтры из характеристик — их заполнение прямо влияет на попадание в нишевые запросы («кроссовки мужские 43 размер синие»).</li>
          <li style={styles.li}><strong>Описание</strong> — наименьший вес из трёх, но всё равно учитывается. Полезно для длинного хвоста запросов.</li>
        </ol>

        <p style={styles.p}>
          Частая ошибка — писать в наименовании «РАСПРОДАЖА 70% скидка супер-акция». Это
          не только не поднимает позиции, но WB периодически скрывает такие карточки как спам.
          Вместо этого — конкретные ключи: «Кроссовки мужские беговые сетка 42 44 размер».
        </p>

        <h3 style={styles.h3}>Принцип «синонимов» в алгоритме WB</h3>
        <p style={styles.p}>
          WB понимает синонимы и однокоренные слова. «Толстовка» и «свитшот» — одна группа.
          «Кроссовки» и «кеды» — разные. Поэтому перед написанием наименования стоит проверить,
          как именно покупатели ищут ваш товар через поиск WB — начните вводить название и
          посмотрите подсказки. Это самый честный keyword research без платных инструментов.
        </p>

        <h2 style={styles.h2}>Оборачиваемость и остатки: «живой» товар выше «мёртвого»</h2>
        <p style={styles.p}>
          Оборачиваемость — это скорость продажи запасов. Если товар продаётся быстро, WB
          понимает, что это популярная позиция, и поднимает её в поиске. Если запасы лежат
          месяцами — карточка постепенно уходит вниз.
        </p>
        <p style={styles.p}>
          Важный нюанс: <strong>нулевые остатки убивают позиции</strong>. Когда товар заканчивается,
          карточка временно вылетает из поиска. После пополнения запасов нужно время (обычно 7–14 дней),
          чтобы восстановить позиции. Это один из самых болезненных эффектов для селлеров.
        </p>

        <h3 style={styles.h3}>Как управлять оборачиваемостью</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Целевая оборачиваемость — 30–45 дней.</strong> WB штрафует платным хранением позиции старше 90 дней. Это сигнал снизить цену или запустить акцию.</li>
          <li style={styles.li}><strong>Страховой запас — минимум на 14 дней продаж.</strong> Считайте по формуле: (средние продажи в день × 14) + 20% буфер.</li>
          <li style={styles.li}><strong>Равномерно распределяйте по складам.</strong> Карточки с широким географическим охватом (много складов) получают приоритет в локальном поиске.</li>
          <li style={styles.li}><strong>Следите за «зависшим» стоком.</strong> Если SKU не продаётся 60+ дней — снизьте цену, запустите рекламу или выведите с платного хранения.</li>
        </ul>

        <h2 style={styles.h2}>Рейтинг и отзывы: как WB учитывает качество</h2>
        <p style={styles.p}>
          Рейтинг влияет на позиции не линейно. Разница между 4,3 и 4,7 ощутима — по нашим
          наблюдениям, карточки с рейтингом 4.7+ держатся в топе даже при чуть меньшем объёме
          продаж, чем конкуренты с рейтингом 4.3. Особенно это заметно в конкурентных категориях
          с большим числом похожих товаров.
        </p>
        <p style={styles.p}>
          Что именно анализирует WB в отзывах:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Средняя оценка за последние 30 дней</strong> — свежие отзывы важнее старых.</li>
          <li style={styles.li}><strong>Процент возвратов</strong> — высокий возврат напрямую понижает позиции, особенно если причина «не соответствует описанию».</li>
          <li style={styles.li}><strong>Ответы продавца на отзывы</strong> — косвенный сигнал, WB поощряет активных продавцов.</li>
          <li style={styles.li}><strong>Скорость реакции на вопросы</strong> — Q&A в карточке тоже ранжируется и влияет на видимость.</li>
        </ul>

        <p style={styles.p}>
          Подробнее о работе с первыми отзывами — в нашем{" "}
          <Link href="/blog/pervye-otzyvy-marketpleis" style={{ color: "#7c3aed" }}>
            гайде по первым отзывам на WB и Ozon
          </Link>.
        </p>

        <h2 style={styles.h2}>Новый товар: как использовать буст на старте</h2>
        <p style={styles.p}>
          WB даёт новым карточкам «окно» на 14–21 день, когда алгоритм ещё не знает поведение
          аудитории и экспериментирует с позицией. В это время карточка может оказаться
          значительно выше, чем она закрепится органически. Это окно надо использовать максимально.
        </p>
        <p style={styles.p}>
          Что делать в первые две недели после публикации:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Запустить автоматическую рекламу сразу</strong> — даже небольшой бюджет (500–1 000 ₽/день) даёт ускорение по продажам, что алгоритм засчитывает как сигнал качества.</li>
          <li style={styles.li}><strong>Попросить первых покупателей оставить отзыв</strong> — легальный способ: WB-отзыв через «Отзывы за баллы».</li>
          <li style={styles.li}><strong>Убедиться, что карточка готова на 100%:</strong> все характеристики заполнены, 7+ фото, видео, описание без ошибок. Бустовый период — не время тестировать «заглушку».</li>
          <li style={styles.li}><strong>Поставить конкурентную цену.</strong> Первые 14 дней важно не жертвовать маржой — но цена выше рынка убьёт конверсию именно тогда, когда буст даёт трафик.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 18 действий для роста в поиске WB</h2>
        <p style={styles.p}>Пройдитесь по каждому пункту для каждой карточки, которую хотите поднять:</p>

        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "20px 24px", margin: "16px 0" }}>
          <p style={{ fontWeight: 700, margin: "0 0 12px" }}>SEO и текст</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Наименование начинается с типа товара, содержит главный ключ в первых 40 символах</li>
            <li style={styles.li}>Все обязательные характеристики заполнены (особенно цвет, материал, размер)</li>
            <li style={styles.li}>Описание содержит ключевые слова из семантики, 500–1000 символов</li>
            <li style={styles.li}>Нет «мусорных» слов в наименовании: «распродажа», «хит», «лучший»</li>
          </ul>

          <p style={{ fontWeight: 700, margin: "16px 0 12px" }}>Фото и конверсия</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Главное фото вертикальное 900×1200, товар занимает 70%+ кадра</li>
            <li style={styles.li}>Минимум 7 фото в карточке: главный ракурс, детали, размерная сетка, lifestyle, применение</li>
            <li style={styles.li}>Фото соответствует реальному товару по цвету и деталям</li>
            <li style={styles.li}>Добавлено видео (30–60 сек) с демонстрацией товара</li>
            <li style={styles.li}>Для одежды/обуви — размерная сетка на отдельном кадре</li>
          </ul>

          <p style={{ fontWeight: 700, margin: "16px 0 12px" }}>Цена и рейтинг</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Цена конкурентна (±10% от медианы топ-10 в выдаче по главному ключу)</li>
            <li style={styles.li}>Рейтинг выше 4.5 (если ниже — план по улучшению отзывов)</li>
            <li style={styles.li}>Отрицательные отзывы получили конструктивный ответ в течение 24 часов</li>
            <li style={styles.li}>Подключены «Отзывы за баллы» для новых карточек</li>
          </ul>

          <p style={{ fontWeight: 700, margin: "16px 0 12px" }}>Наличие и склады</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Остаток минимум на 14 дней продаж, нет нулевых SKU</li>
            <li style={styles.li}>Товар распределён минимум по 2 складам WB</li>
            <li style={styles.li}>Оборачиваемость в пределах 30–60 дней (нет «зависшего» стока)</li>
          </ul>

          <p style={{ fontWeight: 700, margin: "16px 0 12px" }}>Реклама (для новых карточек)</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Автоматическая кампания запущена в первые 24 часа после публикации</li>
          </ul>
        </div>

        <h2 style={styles.h2}>Что не работает (и почему)</h2>
        <p style={styles.p}>
          Несколько мифов, которые до сих пор гуляют по телеграм-каналам для селлеров:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>«Самовыкупы поднимают позиции».</strong> Краткосрочно — да, 2–4 дня. Но WB научился их выявлять, и в 2025–2026 годах последствия включают блокировку карточки или кабинета. Игра не стоит свеч.</li>
          <li style={styles.li}><strong>«Нужно добавить как можно больше ключей в описание».</strong> Переспам ключами не работает. WB понимает контекст. Текст должен читаться человеком — алгоритм это учитывает через показатель «дочитывания».</li>
          <li style={styles.li}><strong>«Участие в акциях гарантирует ТОП».</strong> Акции дают временный трафик, но не меняют органическую позицию. После окончания акции карточка возвращается на своё место по CR и CTR.</li>
          <li style={styles.li}><strong>«Чем больше карточек, тем лучше».</strong> 300 «пустых» карточек без трафика хуже, чем 30 проработанных. Алгоритм учитывает репутацию магазина в целом — если большинство ваших карточек с низкой конверсией, это влияет на новые позиции.</li>
        </ul>

        <h2 style={styles.h2}>Итог: три вещи, которые важнее всего</h2>
        <p style={styles.p}>
          Если нужно расставить приоритеты — вот три действия, которые дают наибольший эффект
          в кратчайшие сроки:
        </p>
        <ol style={{ paddingLeft: 24, margin: "8px 0" }}>
          <li style={styles.li}>
            <strong>Проработайте главное фото.</strong> Это единственное, что покупатель видит
            в выдаче. CTR — точка входа для всех остальных сигналов. Без кликов нет конверсии,
            без конверсии нет позиций. Для быстрого обновления главного кадра —{" "}
            <Link href="/app" style={{ color: "#7c3aed" }}>попробуйте AI-генерацию в Aiviso</Link>.
          </li>
          <li style={styles.li}>
            <strong>Убедитесь, что остатки в порядке.</strong> Нулевой сток даже на один день
            откатывает позиции. Держите страховой запас, особенно в сезон.
          </li>
          <li style={styles.li}>
            <strong>Проверьте наименование на соответствие поисковым запросам.</strong> Зайдите
            на WB инкогнито, начните вводить название вашего товара — совпадает ли то, что
            предлагает автодополнение, с тем, что стоит у вас в наименовании?
          </li>
        </ol>

        <p style={styles.p}>
          Подробнее о продвижении карточки без рекламы — в нашей статье{" "}
          <Link href="/blog/prodvizhenie-kartochki-bez-reklamy" style={{ color: "#7c3aed" }}>
            6 органических рычагов роста на WB и Ozon
          </Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите поднять CTR карточки прямо сейчас?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Откройте Aiviso</Link>
            {" "}— загрузите фото товара и получите 2 готовых кадра на старте бесплатно.
            Клиенты в категории «Домашний текстиль» получают +2,5× к CTR уже после первой смены главного фото.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%: чек-лист из 25 пунктов</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>Как сделать фото для Wildberries в 2026</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
