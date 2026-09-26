import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ключевые слова для карточки Wildberries: гайд 2026 — Aiviso",
  description:
    "Как подобрать ключевые слова для карточки на Wildberries: бесплатные и платные методы, где размещать ключи, типичные ошибки. Чек-лист из 16 шагов.",
  keywords: [
    "ключевые слова wildberries",
    "как подобрать ключевые слова для карточки",
    "seo wildberries ключевые слова",
    "семантическое ядро wildberries",
    "ключи для карточки wb",
    "поисковые запросы wildberries",
    "продвижение карточки wb органика",
    "подбор запросов для маркетплейса",
  ],
  alternates: { canonical: "/blog/klyuchevye-slova-kartochki-wildberries" },
  openGraph: {
    title: "Ключевые слова для карточки Wildberries: пошаговый гайд 2026",
    description:
      "Как найти правильные запросы, куда их вставлять и какие ошибки убивают органику. Чек-лист из 16 шагов.",
    url: "/blog/klyuchevye-slova-kartochki-wildberries",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ключевые слова для карточки на Wildberries: пошаговый гайд 2026",
  description:
    "Как подобрать ключевые слова для карточки на WB: бесплатные и платные методы, куда вставлять, типичные ошибки.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-26",
  dateModified: "2026-09-26",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/klyuchevye-slova-kartochki-wildberries",
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
      name: "Ключевые слова для карточки Wildberries",
      item: "https://aiviso.ru/blog/klyuchevye-slova-kartochki-wildberries",
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

export default function KlyuchevyeSlova() {
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
          <span style={{ color: "#1f2937" }}>Ключевые слова для карточки WB</span>
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
          Ключевые слова для карточки на Wildberries: пошаговый гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 26 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство карточек на WB не попадают в топ не потому что плохой товар или слабое фото — а потому
          что неправильно подобраны ключевые слова. Алгоритм Wildberries не видит, что вы продаёте, если в заголовке
          и характеристиках нет тех формулировок, которые вбивают покупатели. Разбираем, как найти эти формулировки
          и куда их вставить.
        </p>

        <h2 style={styles.h2}>Почему ключевые слова критичны именно на WB</h2>
        <p style={styles.p}>
          Алгоритм Wildberries — не Google. Он не анализирует смысл, не читает между строк и не угадывает
          синонимы. Если покупатель ищет «кружка с крышкой термос» — карточка без слова «термос» в тексте
          просто не попадёт в эту выдачу, даже если товар идеально подходит.
        </p>
        <p style={styles.p}>
          Один наш клиент продавал «многоразовый стакан для кофе» и получал 18–25 заказов в день. После добавления
          слов «термокружка», «кружка термос», «стакан с крышкой» в заголовок и характеристики — те же 4 недели
          дали 54–60 заказов. Без изменений товара, цены и фото. Просто ключи.
        </p>

        <h2 style={styles.h2}>Шаг 1. Соберите базу запросов — бесплатные методы</h2>

        <h3 style={styles.h3}>Строка поиска WB</h3>
        <p style={styles.p}>
          Зайдите на wildberries.ru и начните вводить название товара. Автодополнение покажет реальные
          запросы покупателей — это живые формулировки, которые люди вбивают прямо сейчас. Запишите
          всё, что автоподсказка предлагает по вашей теме.
        </p>
        <p style={styles.p}>
          Пример для термокружки: «термокружка», «термокружка 500 мл», «термокружка с крышкой»,
          «термокружка для кофе», «кружка термос», «термостакан», «кружка для кофе с собой».
          За 15 минут легко набрать 30–50 запросов.
        </p>

        <h3 style={styles.h3}>Карточки конкурентов из топ-3</h3>
        <p style={styles.p}>
          Откройте три первых карточки по вашему главному запросу. Прочитайте заголовок и описание.
          Какие слова они используют, которых нет у вас? Это не плагиат — это анализ рынка.
          ТОП-3 — значит WB уже одобрил их семантику.
        </p>

        <h3 style={styles.h3}>Похожие запросы в нижней части страницы WB</h3>
        <p style={styles.p}>
          После результатов поиска WB показывает блок «Похожие запросы». Это бесплатная подсказка от самого
          маркетплейса — какие ещё формулировки популярны по теме.
        </p>

        <h2 style={styles.h2}>Шаг 2. Расширьте базу — платные инструменты</h2>
        <p style={styles.p}>
          Бесплатные методы дают ~30% картины. Для полной работы нужны данные о частотности запросов.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Инструмент</th>
              <th style={styles.th}>Что даёт</th>
              <th style={styles.th}>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>MPStats</td>
              <td style={styles.td}>Точная частотность запросов WB, позиции карточки, динамика</td>
              <td style={styles.td}>от 3 500 ₽/мес</td>
            </tr>
            <tr>
              <td style={styles.td}>Wildberries API (ЛК)</td>
              <td style={styles.td}>Отчёт «Поисковые запросы» — реальные запросы по вашим товарам</td>
              <td style={styles.tdAccent}><strong>Бесплатно</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Sellmonitor / Moneyplace</td>
              <td style={styles.td}>Семантика категории, сравнение с конкурентами</td>
              <td style={styles.td}>от 2 500 ₽/мес</td>
            </tr>
            <tr>
              <td style={styles.td}>Яндекс.Wordstat</td>
              <td style={styles.td}>Общий спрос в рунете (не WB, но помогает найти синонимы)</td>
              <td style={styles.tdAccent}><strong>Бесплатно</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Обязательно посмотрите раздел «Поисковые запросы» в личном кабинете WB — там WB сам говорит,
          по каким запросам покупатели приходили на вашу карточку. Это золото: вы видите, что работает
          прямо сейчас, и что пропускаете.
        </p>

        <h2 style={styles.h2}>Шаг 3. Разделите запросы на группы</h2>
        <p style={styles.p}>
          Собрав 60–100 запросов, разбейте их на три группы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Высокочастотные (ВЧ) — 1 000+ запросов/мес.</strong> Например, «термокружка». Конкуренция
            огромная, но без них карточки не видно в широком поиске. Используйте в заголовке.
          </li>
          <li style={styles.li}>
            <strong>Среднечастотные (СЧ) — 100–1 000 запросов/мес.</strong> Например, «термокружка 500 мл синяя».
            Конкуренция меньше, покупатель конкретнее. Ставьте в характеристики и описание.
          </li>
          <li style={styles.li}>
            <strong>Низкочастотные (НЧ) — меньше 100 запросов/мес.</strong> Например, «термокружка для кофе
            подарок мужу». Конкуренции почти нет — и именно они дают первые продажи новой карточке.
            Вставляйте в описание.
          </li>
        </ul>
        <p style={styles.p}>
          Ошибка большинства новичков — стараться попасть только в ВЧ-запросы. Новая карточка без
          отзывов и продаж не попадёт в топ по «термокружка». Начинайте с НЧ и СЧ — они дают первые
          заказы, а алгоритм затем поднимет вас по ВЧ.
        </p>

        <h2 style={styles.h2}>Шаг 4. Куда вставлять ключи — иерархия мест</h2>

        <h3 style={styles.h3}>Заголовок — самое важное место</h3>
        <p style={styles.p}>
          WB даёт до 100 символов. Формула: <strong>[Тип товара] [Основной ВЧ-запрос] [2–3 ключевых характеристики]</strong>.
          Пример: «Термокружка с крышкой 500 мл для кофе термостакан». Читается как нормальный текст,
          но содержит 4 ключевых запроса.
        </p>
        <p style={styles.p}>
          Не делайте заголовок нечитаемым — WB видит «SEO-спам» и понижает такие карточки.
          Текст должен читаться как нормальное название товара.
        </p>

        <h3 style={styles.h3}>Характеристики — второй по важности блок</h3>
        <p style={styles.p}>
          Заполняйте все атрибуты категории, особенно текстовые поля «Назначение», «Описание материала»,
          «Для кого». Это не просто фильтры — алгоритм WB читает их при ранжировании. Здесь размещайте
          СЧ-запросы.
        </p>

        <h3 style={styles.h3}>Описание — для НЧ-запросов и длинного хвоста</h3>
        <p style={styles.p}>
          У WB в описании можно разместить 5 000 символов. Писать его «для алгоритма» — ошибка: плохой
          текст отталкивает покупателя, который доскроллил. Напишите нормальный текст, который продаёт,
          и органически вставьте в него 10–15 НЧ-запросов.
        </p>
        <p style={styles.p}>
          Подробнее о том, как писать само описание —{" "}
          <Link href="/blog/opisanie-tovara-wb" style={{ color: "#7c3aed" }}>
            в нашем гайде по описанию товара для WB
          </Link>
          .
        </p>

        <h2 style={styles.h2}>Шаг 5. Проверьте результат — что должно измениться</h2>
        <p style={styles.p}>
          После обновления карточки алгоритм WB переиндексирует её за 24–72 часа. Смотрите в личном
          кабинете:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Раздел «Аналитика → Поисковые запросы» — по каким словам пришли новые показы</li>
          <li style={styles.li}>CTR в «Аналитика → Товары» — кликают ли чаще</li>
          <li style={styles.li}>Позиции в поиске (через MPStats или руками) — за 1–2 недели должен быть сдвиг</li>
        </ul>
        <p style={styles.p}>
          Если через 2 недели позиций нет — ключи слишком высококонкурентные для новой карточки.
          Уйдите в более длинный хвост.
        </p>

        <h2 style={styles.h2}>5 типичных ошибок с ключевыми словами</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Одно ключевое слово много раз.</strong> «Термокружка термокружка термокружка
            для кофе термокружка» — WB видит это как спам и режет позиции. Каждое уникальное слово
            учитывается один раз.
          </li>
          <li style={styles.li}>
            <strong>Не заполнены характеристики.</strong> 80% продавцов заполняют только обязательные поля.
            Но именно необязательные текстовые атрибуты дают доступ к длинным запросам.
          </li>
          <li style={styles.li}>
            <strong>Английские слова вместо русских.</strong> Покупатели пишут «кроссовки», а не «sneakers».
            Если в карточке только латиница — она не найдётся по кириллическим запросам.
          </li>
          <li style={styles.li}>
            <strong>Копирование ключей у лидера категории.</strong> Лидер продаёт 1 000 единиц в день,
            у него тысячи отзывов — алгоритм уже доверяет его карточке. Новый продавец с теми же ключами
            окажется на 50-й странице, а не рядом.
          </li>
          <li style={styles.li}>
            <strong>Ключи поставил и забыл.</strong> Запросы меняются сезонно. Летом ищут «кружка для пикника»,
            зимой — «кружка в подарок». Обновляйте семантику каждые 2–3 месяца.
          </li>
        </ul>

        <h2 style={styles.h2}>Как фото влияет на эффективность ключей</h2>
        <p style={styles.p}>
          Ключевые слова приводят покупателя в листинг — но дальше работает только фото. CTR (кликабельность)
          зависит от главного кадра, а конверсия — от всей галереи. Если ключи правильные, но фото слабое,
          алгоритм видит: показы есть, кликов нет — и понижает позицию.
        </p>
        <p style={styles.p}>
          Один наш клиент в категории «товары для кухни» прописал правильные ключи и вышел в топ-10.
          Но CTR остался 1.4% против 3.2% у соседних карточек. Обновили главное фото через{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>{" "}
          — поставили lifestyle-сцену вместо белого фона. CTR вырос до 3.8%, позиция — с 8-й на 3-ю.
        </p>
        <p style={styles.p}>
          SEO и визуал работают вместе, а не по отдельности.
        </p>

        <h2 style={styles.h2}>Чек-лист: подбор ключевых слов за один день</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Записать 30+ запросов из автоподсказки WB</li>
          <li style={styles.li}>Просмотреть ключи в заголовках топ-3 конкурентов</li>
          <li style={styles.li}>Открыть раздел «Поисковые запросы» в ЛК WB — записать все запросы</li>
          <li style={styles.li}>Проверить частотность в Яндекс.Wordstat или MPStats</li>
          <li style={styles.li}>Разделить на ВЧ / СЧ / НЧ — минимум 10–15 в каждой группе</li>
          <li style={styles.li}>Написать заголовок: 1 ВЧ + 2–3 ключевые характеристики, до 100 символов</li>
          <li style={styles.li}>Заполнить ВСЕ текстовые атрибуты характеристик — расставить СЧ-запросы</li>
          <li style={styles.li}>Написать описание с органичной вставкой 10–15 НЧ-запросов</li>
          <li style={styles.li}>Убедиться, что каждое уникальное слово встречается не больше 2 раз</li>
          <li style={styles.li}>Не использовать английские слова там, где покупатели пишут по-русски</li>
          <li style={styles.li}>Через 3–5 дней проверить новые запросы в «Поисковых запросах» ЛК</li>
          <li style={styles.li}>Через 2 недели проверить CTR — если ниже 2%, обновить главное фото</li>
          <li style={styles.li}>Поставить напоминание обновить семантику через 2 месяца</li>
          <li style={styles.li}>Для сезонных товаров — добавить сезонные запросы за 3–4 недели до пика</li>
          <li style={styles.li}>Не копировать ключи у лидеров — работать в менее конкурентной части</li>
          <li style={styles.li}>Сделать аналогичную работу для каждой карточки в каталоге</li>
        </ul>

        <h2 style={styles.h2}>Итог</h2>
        <p style={styles.p}>
          Ключевые слова на WB — это не разовая работа на старте, а постоянный процесс. Алгоритм учитывает
          продажи, отзывы и конверсию: хорошая семантика запускает цепочку, а не просто ставит вас в поиск.
        </p>
        <p style={styles.p}>
          Первый шаг — потратить один день, чтобы правильно прописать ключи во все поля карточки.
          Второй шаг — обеспечить CTR через сильное фото: без этого даже идеальная семантика не даст
          роста позиций.
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
            <strong>Занялись SEO — теперь прокачайте фото.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso бесплатно
            </Link>{" "}
            — 13 кредитов на старте: загрузите одно фото и получите готовые кадры под WB 900×1200
            с любым фоном за 2 минуты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li>
            <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
              SEO для карточки Wildberries: полный гайд
            </Link>
          </li>
          <li>
            <Link href="/blog/opisanie-tovara-wb" style={{ color: "#7c3aed" }}>
              Как написать описание товара для Wildberries
            </Link>
          </li>
          <li>
            <Link href="/blog/zagolovok-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>
              Как написать заголовок карточки: формула и чек-лист
            </Link>
          </li>
          <li>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
