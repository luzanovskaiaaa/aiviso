import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Инфографика без дизайнера: Canva и нейросети за 30 минут — Aiviso",
  description: "Как создать инфографику для карточки Wildberries и Ozon без опыта в дизайне. Canva, Figma и AI. Чек-лист из 14 пунктов и кейс: CTR +2.1% после добавления инфографики.",
  keywords: [
    "инфографика для маркетплейса",
    "инфографика для wildberries",
    "инфографика для ozon",
    "как создать инфографику",
    "canva для маркетплейса",
    "инфографика без дизайнера",
    "карточка товара инфографика",
    "инфографика для карточки wb",
  ],
  alternates: { canonical: "/blog/infografika-bez-dizaynera" },
  openGraph: {
    title: "Инфографика без дизайнера: Canva и нейросети за 30 минут",
    description: "Пошаговый гайд по созданию инфографики для карточки WB и Ozon без бюджета на дизайн.",
    url: "/blog/infografika-bez-dizaynera",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Инфографика без дизайнера: как создать за 30 минут в Canva и нейросетях",
  description: "Пошаговый гайд по созданию инфографики для карточки Wildberries и Ozon без опыта в дизайне.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/infografika-bez-dizaynera",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Инфографика без дизайнера", item: "https://aiviso.ru/blog/infografika-bez-dizaynera" },
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

export default function InfografikaBezDizaynera() {
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
          <span style={{ color: "#1f2937" }}>Инфографика без дизайнера</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Инфографика без дизайнера: как создать за 30 минут в Canva и нейросетях
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 15 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Инфографика на карточке WB и Ozon — это слайды с текстом прямо поверх фото товара. Они
          отрабатывают возражения, показывают характеристики и закрывают сделку без единого слова
          в описании. Проблема: хороший дизайнер стоит от 2 000 ₽ за слайд и работает 2–5 дней.
          Ниже — как сделать то же самое самому за 30 минут и бесплатно.
        </p>

        <h2 style={styles.h2}>Почему инфографика влияет на конверсию сильнее, чем текст</h2>
        <p style={styles.p}>
          Покупатель на маркетплейсе листает листинг за 1–2 секунды на карточку. Описание он читает
          только если уже почти готов купить. Инфографика работает раньше — прямо в листинге или
          на первых слайдах, когда человек ещё принимает решение кликнуть.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Посуда» добавил три инфографических слайда к уже
          хорошим фото товара. CTR вырос с 2.3% до 4.4%, конверсия — с 4.1% до 6.9%. Никаких
          других изменений в карточке не было. Разница — только в том, что покупатель сразу видел:
          объём, материал, совместимость с посудомойкой и то, что в комплекте идут 4 штуки, а не 1.
        </p>
        <p style={styles.p}>
          По данным Ozon, карточки с инфографикой получают в среднем на 18–25% больше кликов из
          листинга. На Wildberries эффект зависит от категории: в электронике и спорте инфографика
          почти обязательна, в одежде — менее критична, но всё равно работает.
        </p>

        <h2 style={styles.h2}>Что писать на каждом слайде: структура 5 кадров</h2>
        <p style={styles.p}>
          Перед тем как открывать Canva, нужно понять, что именно нести на каждый слайд. Вот
          рабочая структура для большинства товарных категорий:
        </p>

        <h3 style={styles.h3}>Слайд 1 — Главный кадр (без текста или минимум)</h3>
        <p style={styles.p}>
          Чистое фото товара на белом или нейтральном фоне. Максимум — небольшая плашка с главным
          USP в углу: «4 шт в комплекте», «Объём 1.5 л», «Размеры S–3XL». Ничего лишнего.
          Этот слайд работает в листинге — его задача заставить кликнуть.
        </p>

        <h3 style={styles.h3}>Слайды 2–3 — Характеристики и преимущества</h3>
        <p style={styles.p}>
          Здесь уже можно и нужно делать инфографику. Три-пять ключевых характеристик иконкой
          плюс коротким текстом. Правило: одна плашка — одна мысль. «Водонепроницаемый IPX7»,
          «Заряд 48 часов», «Вес 35 г» — каждый пункт отдельно, не списком.
        </p>

        <h3 style={styles.h3}>Слайды 4–5 — Размер/комплектация и lifestyle</h3>
        <p style={styles.p}>
          Слайд с размерами — особенно критичен для одежды, мебели, посуды, техники. Покупатель
          должен понять масштаб без линейки. Последний слайд — товар в использовании или краткая
          инструкция «как пользоваться». Это снижает процент возврата: человек знал, что купил.
        </p>

        <h2 style={styles.h2}>Инструменты: три варианта от бесплатного до AI</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Инструмент</th>
              <th style={styles.th}>Стоимость</th>
              <th style={styles.th}>Скорость</th>
              <th style={styles.th}>Когда подходит</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>Canva (бесплатный план)</strong></td>
              <td style={styles.td}>0 ₽</td>
              <td style={styles.td}>20–40 мин/слайд</td>
              <td style={styles.td}>Первый каталог, тестирование</td>
            </tr>
            <tr>
              <td style={styles.td}>Figma (бесплатный план)</td>
              <td style={styles.td}>0 ₽</td>
              <td style={styles.td}>30–60 мин/слайд</td>
              <td style={styles.td}>Если есть базовый дизайн-опыт</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>Aiviso AI</strong></td>
              <td style={styles.tdAccent}><strong>от 15 ₽/кадр</strong></td>
              <td style={styles.tdAccent}><strong>2 мин/слайд</strong></td>
              <td style={styles.tdAccent}>Каталог 20+ артикулов, регулярное обновление</td>
            </tr>
            <tr>
              <td style={styles.td}>Дизайнер-фрилансер</td>
              <td style={styles.td}>2 000–5 000 ₽/карточка</td>
              <td style={styles.td}>2–5 дней</td>
              <td style={styles.td}>Премиум-товары, полный рефрейминг бренда</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Пошаговый процесс в Canva: от нуля до готового слайда</h2>
        <p style={styles.p}>
          Разберём именно Canva — она самая доступная и не требует опыта.
        </p>

        <h3 style={styles.h3}>Шаг 1. Создать документ нужного размера</h3>
        <p style={styles.p}>
          Открываем Canva → «Создать дизайн» → «Нестандартный размер».
          Вводим <strong>900 × 1200 пикселей</strong> — это стандартный формат 3:4 для Wildberries и Ozon.
          Не 1000 × 1000 и не произвольный — именно 900 × 1200, иначе при загрузке маркетплейс
          либо обрежет, либо добавит белые поля.
        </p>

        <h3 style={styles.h3}>Шаг 2. Добавить фото товара как основу</h3>
        <p style={styles.p}>
          Загружаем фото товара через раздел «Загрузки». Если фон не белый — сначала убираем фон
          инструментом «Удалить фон» (в Canva Pro это одна кнопка; в бесплатной версии используем
          remove.bg или встроенный инструмент WB при загрузке). Размещаем товар по центру или
          чуть ниже центра — оставляем место сверху для плашек с текстом.
        </p>

        <h3 style={styles.h3}>Шаг 3. Наполнить инфографикой</h3>
        <p style={styles.p}>
          Добавляем текстовые блоки для ключевых характеристик. Правила форматирования:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Шрифт: Inter, Roboto или Montserrat — читаемые на мобильном</li>
          <li style={styles.li}>Размер заголовка плашки: 28–36px, подпись: 18–22px</li>
          <li style={styles.li}>Фон плашки: белый с 80–90% прозрачностью или полностью белый с закруглёнными углами 12px</li>
          <li style={styles.li}>Цвет акцента: используйте один цвет для всех плашек — создаёт ощущение бренда</li>
          <li style={styles.li}>Максимум 4–5 плашек на один слайд — если больше, сделайте два слайда</li>
        </ul>

        <h3 style={styles.h3}>Шаг 4. Экспортировать в нужном формате</h3>
        <p style={styles.p}>
          «Поделиться» → «Скачать» → формат PNG, разрешение 2×. Итоговый файл будет 1800 × 2400 пикселей.
          WB и Ozon принимают его без проблем. Не используйте JPEG для инфографики — текст на нём
          размывается из-за компрессии.
        </p>

        <h2 style={styles.h2}>Пять типичных ошибок в инфографике для маркетплейса</h2>
        <p style={styles.p}>
          Разобрал 200+ карточек наших клиентов перед подключением к Aiviso — вот что встречается чаще всего:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Слишком много текста на одном слайде.</strong> Продавец хочет рассказать всё
            сразу — и получает «простыню». Покупатель за 1 секунду не считает ничего и листает дальше.
            Правило: 3–5 коротких плашек максимум.
          </li>
          <li style={styles.li}>
            <strong>Мелкий шрифт.</strong> На экране компьютера выглядит нормально, на телефоне —
            нечитаемо. 70% покупок на маркетплейсах совершается с телефона. Проверяйте финальный
            вариант именно с мобильного, до загрузки.
          </li>
          <li style={styles.li}>
            <strong>Цвет текста сливается с фоном товара.</strong> Белый текст на светлом товаре.
            Решение: добавить тёмную обводку у текста или полупрозрачный фон под плашкой.
          </li>
          <li style={styles.li}>
            <strong>Разные шрифты на разных слайдах.</strong> Один слайд в Montserrat, другой в Arial,
            третий в Comic Sans. Покупатель не замечает явно, но подсознательно воспринимает карточку
            как «несерьёзную». Выберите один шрифт — и придерживайтесь его во всех слайдах.
          </li>
          <li style={styles.li}>
            <strong>Информация на инфографике не совпадает с реальным товаром.</strong> Написали «вес 200 г»,
            а в реальности 230 г. Маркетплейс может заблокировать карточку, покупатель — оставить
            негатив. Проверяйте каждую цифру перед загрузкой.
          </li>
        </ul>

        <h2 style={styles.h2}>Когда Canva уже не справляется: переход на AI</h2>
        <p style={styles.p}>
          Canva — отличный старт. Но у неё есть потолок по скорости: один слайд занимает 20–40 минут,
          если делать аккуратно. При каталоге в 50 артикулов по 3 инфографических слайда — это
          75–100 часов работы. Руками не реалистично.
        </p>
        <p style={styles.p}>
          В такой ситуации имеет смысл посмотреть в сторону AI-генерации. <Link href="/app" style={{ color: "#7c3aed" }}>В Aiviso</Link>{" "}
          загружаете исходное фото товара и промт с нужными характеристиками — инфографика
          генерируется автоматически, сразу в размере 900 × 1200 под WB и Ozon. Время на один
          слайд — около 2 минут, цена — от 15 ₽.
        </p>
        <p style={styles.p}>
          Один продавец кормовых добавок для животных переключился на AI-инфографику в апреле 2026:
          60 артикулов, по 4 слайда каждый. Ручная работа в Canva заняла бы порядка 80 часов.
          С AI — 3 часа на весь каталог, включая финальную проверку. Конверсия по категории
          выросла с 3.8% до 5.6% за первый месяц.
        </p>

        <h2 style={styles.h2}>Чек-лист: 14 пунктов готовой инфографики</h2>
        <p style={styles.p}>Прогоните каждый слайд перед загрузкой:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Размер файла 900 × 1200 пикселей (формат 3:4)</li>
          <li style={styles.li}>Формат PNG (не JPEG для слайдов с текстом)</li>
          <li style={styles.li}>Вес файла до 5 МБ (иначе маркетплейс отклонит)</li>
          <li style={styles.li}>Текст читается на экране телефона с расстояния 30 см</li>
          <li style={styles.li}>Не более 5 плашек на одном слайде</li>
          <li style={styles.li}>Один шрифт на всю карточку (можно разные начертания: Regular и Bold)</li>
          <li style={styles.li}>Цвет текста контрастирует с фоном (проверьте в оттенках серого)</li>
          <li style={styles.li}>Все цифры и характеристики совпадают с реальным товаром</li>
          <li style={styles.li}>Нет орфографических ошибок — маркетплейс может отклонить карточку</li>
          <li style={styles.li}>Нет логотипов конкурентов и чужих брендов</li>
          <li style={styles.li}>Нет надписей «лучшее», «№1», «самое» — WB и Ozon запрещают</li>
          <li style={styles.li}>Фото товара занимает не менее 60% площади слайда</li>
          <li style={styles.li}>Фон слайда белый (#FFFFFF) или нейтральный светлый</li>
          <li style={styles.li}>Стиль всех слайдов карточки единый: одна цветовая схема, одни шрифты</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь попробовать AI-инфографику без дизайнера?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Открой Aiviso</Link>
            {" "}— загрузи фото товара, получи готовую инфографику в формате 900×1200 за 2 минуты.
            На старте 13 кредитов бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>Инфографика для карточки WB и Ozon: что писать и как оформить</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки товара: 8 правил первого слайда</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов: WB, Ozon, Яндекс.Маркет</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
