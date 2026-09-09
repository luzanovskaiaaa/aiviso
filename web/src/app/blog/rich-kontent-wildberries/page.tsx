import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rich-контент для Wildberries в 2026: как создать и зачем — Aiviso",
  description:
    "Пошаговый гайд по созданию Rich-контента на WB: видео, 360°, интерактивные блоки. Чек-лист из 18 пунктов и кейс — конверсия с 3,2% до 5,8% за 3 недели.",
  keywords: [
    "rich контент wildberries",
    "rich content wb",
    "как создать rich контент wildberries",
    "видео для карточки wildberries",
    "rich-контент маркетплейс",
    "интерактивный контент wb",
    "конверсия карточки wildberries",
    "rich контент 2026",
  ],
  alternates: { canonical: "/blog/rich-kontent-wildberries" },
  openGraph: {
    title: "Rich-контент для Wildberries в 2026: пошаговый гайд",
    description:
      "Как создать Rich-контент на WB: видео, 360°, интерактив. Кейс: конверсия с 3,2% до 5,8% за 3 недели без рекламы.",
    url: "/blog/rich-kontent-wildberries",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rich-контент для Wildberries в 2026: как создать и зачем",
  description:
    "Пошаговый гайд по созданию Rich-контента для карточки на Wildberries: видео, 360°, интерактивные блоки. Чек-лист из 18 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-09",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/rich-kontent-wildberries",
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
      name: "Rich-контент для Wildberries",
      item: "https://aiviso.ru/blog/rich-kontent-wildberries",
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

export default function RichKontentWildberries() {
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
          <span style={{ color: "#1f2937" }}>Rich-контент для Wildberries</span>
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
          Rich-контент для Wildberries в 2026: как создать и почему без него вы теряете продажи
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>9 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Wildberries добавил возможность загружать Rich-контент ещё в 2023-м, но в 2026 году его
          заполняют меньше 15% продавцов. Остальные оставляют конкурентам преимущество, которое
          обходится в 20–40% конверсии. Разбираем что это такое, как сделать за один день и что
          реально даёт в продажах.
        </p>

        <h2 style={styles.h2}>Что такое Rich-контент на Wildberries</h2>
        <p style={styles.p}>
          Rich-контент (или «расширенное описание») — это интерактивная страница товара, которую
          видит покупатель под основным блоком с фотографиями. В отличие от обычного текстового
          описания, Rich-контент может включать:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Видеоролики (обзор товара, инструкция по применению, распаковка)</li>
          <li style={styles.li}>Крупные фото с пояснениями и стрелками</li>
          <li style={styles.li}>Блоки «преимущества» с иконками и текстом</li>
          <li style={styles.li}>Сравнительные таблицы между вариантами товара</li>
          <li style={styles.li}>Инфографику с размерами, составом, инструкцией</li>
          <li style={styles.li}>Блоки «вопрос — ответ» о самых частых сомнениях покупателей</li>
        </ul>
        <p style={styles.p}>
          По данным WB Sellers, карточки с заполненным Rich-контентом показывают на 18–35% выше
          конверсию относительно карточек только с фото и текстом. Особенно заметна разница в
          категориях с высоким средним чеком: мебель, электроника, одежда от 3 000 ₽, косметика
          класса «уход».
        </p>

        <h2 style={styles.h2}>Как Rich-контент влияет на позиции в поиске WB</h2>
        <p style={styles.p}>
          Wildberries использует поведенческие сигналы для ранжирования. Rich-контент влияет на них
          косвенно, но ощутимо:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Время на странице.</strong> Покупатель листает блоки Rich-контента вместо того
            чтобы сразу уйти — WB фиксирует это как «заинтересованность» и поднимает карточку.
          </li>
          <li style={styles.li}>
            <strong>Процент выкупа.</strong> Если человек видит детальный разбор товара (размер,
            состав, инструкция), он реже возвращает — а высокий процент выкупа напрямую влияет на
            позиции.
          </li>
          <li style={styles.li}>
            <strong>Конверсия в корзину.</strong> Рост конверсии — один из ключевых факторов
            алгоритма WB. Заполненный Rich-контент = выше конверсия = выше позиция.
          </li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов — продавец чемоданов — добавил Rich-контент с видео распаковки,
          таблицей размеров и блоком «часто задают» к 14 карточкам. Через три недели средняя позиция
          сдвинулась с 34-й на 19-ю по ключевому запросу, конверсия в заказ выросла с 3,2% до 5,8%,
          а процент выкупа — с 61% до 73%. Без изменений в цене и рекламном бюджете.
        </p>

        <h2 style={styles.h2}>Где создавать Rich-контент для WB</h2>
        <h3 style={styles.h3}>Личный кабинет WB Partners</h3>
        <p style={styles.p}>
          Раздел находится в карточке товара: Товары → конкретный артикул → вкладка «Медиафайлы» →
          «Rich-контент». WB открыл встроенный конструктор, где блоки собираются drag-and-drop. Это
          проще, чем кажется: интерфейс похож на простой конструктор сайтов.
        </p>
        <p style={styles.p}>
          Доступные блоки в конструкторе WB:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Текст + изображение (горизонтально или вертикально)</li>
          <li style={styles.li}>Видео (загружается напрямую, без YouTube)</li>
          <li style={styles.li}>Полноширинный баннер (хорошо для инфографики)</li>
          <li style={styles.li}>Преимущества плиткой (иконка + заголовок + подзаголовок)</li>
          <li style={styles.li}>Таблица сравнения</li>
          <li style={styles.li}>Аккордеон (вопрос — ответ)</li>
        </ul>

        <h3 style={styles.h3}>Сторонние сервисы</h3>
        <p style={styles.p}>
          Если нужен более сложный дизайн — используйте сервисы типа Mango Office, Altegro или
          Salist, которые экспортируют HTML в формате, совместимом с WB. Минус — стоимость от
          3 000 ₽/мес за доступ. Для большинства средних продавцов встроенного конструктора WB
          хватает.
        </p>

        <h2 style={styles.h2}>Что обязательно включить в Rich-контент</h2>
        <p style={styles.p}>
          Не надо добавлять всё подряд. Покупатель не читает стены текста — он листает. Каждый блок
          должен закрывать конкретное возражение или вопрос. Вот что реально работает:
        </p>

        <h3 style={styles.h3}>1. Видео обзор (30–90 секунд)</h3>
        <p style={styles.p}>
          Самый сильный элемент. Снимать на iPhone в нормальном освещении — достаточно. Покажите
          товар в руках, покажите как он работает или как выглядит вживую. Без монтажа, без
          закадрового голоса — просто честный продукт в действии.
        </p>
        <p style={styles.p}>
          По нашей статистике, карточки с видео конвертируют на 23% лучше, чем без него. Это
          единственный элемент где разрыв выше, чем добавление пятого-шестого фото.
        </p>

        <h3 style={styles.h3}>2. Разбор ключевых преимуществ</h3>
        <p style={styles.p}>
          Блок с 4–6 плитками «иконка + заголовок + 1–2 строки пояснения». Это не маркетинговые
          слоганы, а конкретные характеристики: «Материал: 100% хлопок», «Стирка: 60°C», «Размер
          упаковки: 25×15×8 см». Именно то, что покупатель ищет в описании и не находит.
        </p>

        <h3 style={styles.h3}>3. Инфографика с размерами или составом</h3>
        <p style={styles.p}>
          Особенно критично для одежды, обуви, мебели. Размерная сетка с реальными замерами (не
          маркировкой «M» и «L», а сантиметрами) снижает возвраты в среднем на 12–18%.
        </p>

        <h3 style={styles.h3}>4. Блок «Часто задают»</h3>
        <p style={styles.p}>
          Возьмите 4–5 вопросов из реальных отзывов и вопросов к вашему товару или аналогам у
          конкурентов. Ответьте честно и коротко. Это и закрывает возражения до заказа, и
          увеличивает время на странице.
        </p>

        <h2 style={styles.h2}>Пошаговый алгоритм создания Rich-контента</h2>
        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>Соберите материал.</strong> Фото товара на белом фоне (5–8 штук), видео
            360° или в использовании (30–60 сек), размерные данные, состав.
          </li>
          <li style={styles.li}>
            <strong>Выпишите 5 главных вопросов покупателя</strong> — зайдите на карточку
            конкурента в той же нише и прочитайте вопросы в разделе «Отзывы и вопросы».
          </li>
          <li style={styles.li}>
            <strong>Разработайте структуру</strong> (см. блоки выше): видео → преимущества →
            инфографика → FAQ. Это рабочий порядок для большинства категорий.
          </li>
          <li style={styles.li}>
            <strong>Сделайте баннеры.</strong> Размер для полноширинного баннера WB — 1440×540 px,
            для блока с изображением — минимум 600×600 px. Можно в Figma, Canva или через{" "}
            <Link href="/app" style={{ color: "#7c3aed" }}>
              Aiviso
            </Link>
            .
          </li>
          <li style={styles.li}>
            <strong>Откройте конструктор WB</strong> и соберите страницу. Один блок — 5–10 минут.
            На полную страницу из 6 блоков уйдёт 1–1,5 часа.
          </li>
          <li style={styles.li}>
            <strong>Сохраните черновик</strong> и посмотрите превью на мобильном — 80% покупателей
            WB заходят с телефона. Текст должен читаться без зума, кнопки не перекрывать картинку.
          </li>
          <li style={styles.li}>
            <strong>Опубликуйте и зафиксируйте дату</strong> — конверсия и позиция меняются через
            5–14 дней, данные нужно сравнивать корректно.
          </li>
        </ol>

        <h2 style={styles.h2}>Требования к видео для Rich-контента WB</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Требование WB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Формат файла</td>
              <td style={styles.td}>MP4 (H.264)</td>
            </tr>
            <tr>
              <td style={styles.td}>Максимальный размер</td>
              <td style={styles.td}>2 ГБ</td>
            </tr>
            <tr>
              <td style={styles.td}>Разрешение</td>
              <td style={styles.tdAccent}>
                <strong>1080p минимум</strong> (рекомендуется 1080×1920 вертикально)
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Длительность</td>
              <td style={styles.td}>15 сек – 3 мин (оптимально 30–60 сек)</td>
            </tr>
            <tr>
              <td style={styles.td}>Субтитры</td>
              <td style={styles.td}>Не обязательны, но повышают просмотры (звук часто выключен)</td>
            </tr>
            <tr>
              <td style={styles.td}>Логотип / водяной знак</td>
              <td style={styles.td}>Разрешены, не перекрывать товар</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Топ-5 ошибок при создании Rich-контента на WB</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Копируете описание товара как текст.</strong> Rich-контент — это визуальная
            страница, не статья. Большой абзац без структуры никто не читает.
          </li>
          <li style={styles.li}>
            <strong>Используете маркетинговые фразы без цифр.</strong> «Высокое качество»,
            «инновационные материалы» — пустые слова. Пишите: «Плотность ткани: 240 г/м²»,
            «Держит форму 150+ стирок (подтверждено лаб. испытаниями)».
          </li>
          <li style={styles.li}>
            <strong>Не проверяете мобильный вид.</strong> На десктопе Rich-контент может выглядеть
            отлично, а на телефоне текст налезает на картинку. Всегда проверяйте превью на
            мобильном перед публикацией.
          </li>
          <li style={styles.li}>
            <strong>Загружаете видео в низком качестве.</strong> WB сжимает видео при обработке.
            Загружайте исходник в 1080p — после сжатия получите приемлемое 720p. Загрузите 480p —
            получите размытую картинку.
          </li>
          <li style={styles.li}>
            <strong>Делаете Rich-контент ради галочки.</strong> Один блок с логотипом компании не
            считается. У Ozon есть порог качества — у WB его пока нет официально, но карточки с
            минимальным Rich-контентом не дают заметного эффекта на конверсию.
          </li>
        </ul>

        <h2 style={styles.h2}>Что делать если нет фотографа и дизайнера</h2>
        <p style={styles.p}>
          Rich-контент кажется сложным, пока не попробуешь. Реально нужно:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Фото для баннеров</strong> — их можно сгенерировать через{" "}
            <Link href="/" style={{ color: "#7c3aed" }}>
              Aiviso
            </Link>
            : загружаете исходное фото товара, получаете lifestyle-кадры с нужным фоном и сценой,
            готовые к загрузке в конструктор WB.
          </li>
          <li style={styles.li}>
            <strong>Видео</strong> — снимите на телефон в горизонтальном или вертикальном формате,
            в нейтральном освещении (подоконник днём — отлично). Монтаж не нужен: статичный кадр
            «товар крутится в руках» уже работает.
          </li>
          <li style={styles.li}>
            <strong>Иконки для блока преимуществ</strong> — WB предоставляет базовый набор иконок
            прямо в конструкторе. Этого хватает для старта.
          </li>
          <li style={styles.li}>
            <strong>Тексты</strong> — напишите от себя. Что вы рассказываете покупателю когда
            показываете товар лично? Запишите это — и это и будет ваш Rich-контент.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: Rich-контент для WB готов к публикации</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Есть минимум одно видео (30–90 сек, 1080p)</li>
          <li style={styles.li}>Блок с 4–6 преимуществами с конкретными характеристиками</li>
          <li style={styles.li}>Размерная сетка или инфографика с составом (если актуально)</li>
          <li style={styles.li}>Блок FAQ с 4–5 реальными вопросами покупателей</li>
          <li style={styles.li}>Все изображения не менее 600×600 px, баннеры 1440×540 px</li>
          <li style={styles.li}>Текст читается на мобильном без масштабирования</li>
          <li style={styles.li}>Нет стоковых фраз («высокое качество», «лучшая цена»)</li>
          <li style={styles.li}>Нет текста поверх мелких деталей на фото</li>
          <li style={styles.li}>Видео загружено в MP4, размер &lt; 2 ГБ</li>
          <li style={styles.li}>Проверен превью на мобильном устройстве</li>
          <li style={styles.li}>Информация в Rich-контенте соответствует фото и описанию товара</li>
          <li style={styles.li}>Записана дата публикации для последующего анализа конверсии</li>
        </ul>

        <h2 style={styles.h2}>Сколько стоит создать Rich-контент</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Вариант</th>
              <th style={styles.th}>Стоимость</th>
              <th style={styles.th}>Время</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Сам через конструктор WB (текст + загруженные фото)</td>
              <td style={styles.tdAccent}>
                <strong>0 ₽</strong>
              </td>
              <td style={styles.td}>2–4 часа</td>
            </tr>
            <tr>
              <td style={styles.td}>AI-генерация фото для баннеров (Aiviso) + конструктор WB</td>
              <td style={styles.td}>~300–600 ₽ на товар</td>
              <td style={styles.td}>1–2 часа</td>
            </tr>
            <tr>
              <td style={styles.td}>Фрилансер-дизайнер (Кейворд, FL.ru)</td>
              <td style={styles.td}>3 000–8 000 ₽ за карточку</td>
              <td style={styles.td}>3–7 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Агентство «под ключ» (съёмка + Rich)</td>
              <td style={styles.td}>15 000–40 000 ₽</td>
              <td style={styles.td}>7–14 дней</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Для каталога из 20–50 товаров оптимальный маршрут: AI-генерация фото через{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>{" "}
          + самостоятельная сборка в конструкторе WB. Итоговая стоимость — 6 000–15 000 ₽ на весь
          каталог против 300 000–600 000 ₽ у агентства.
        </p>

        <h2 style={styles.h2}>Вывод</h2>
        <p style={styles.p}>
          Rich-контент на WB — не опция, а конкурентное преимущество, которое большинство
          продавцов пропускает. Создать базовую версию можно за один день без дизайнера и
          фотостудии. Эффект — рост конверсии на 20–40%, снижение возвратов и постепенный рост
          позиций за счёт поведенческих факторов.
        </p>
        <p style={styles.p}>
          Начните с одной карточки. Добавьте видео и блок преимуществ. Через две недели сравните
          конверсию — и вы сами увидите, зачем это нужно остальным 85 позициям каталога.
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
            <strong>Нужны фото для Rich-контента?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso
            </Link>{" "}
            — загрузите одно фото товара, получите готовые lifestyle-кадры и баннеры для
            конструктора WB за 2 минуты. 13 кредитов бесплатно при регистрации.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li>
            <Link href="/blog/rich-kontent-ozon" style={{ color: "#7c3aed" }}>
              RICH-контент для Ozon: пошаговый гайд
            </Link>
          </li>
          <li>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              Главное фото карточки: 8 правил первого слайда
            </Link>
          </li>
          <li>
            <Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>
              Как поднять конверсию карточки на 30%
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
