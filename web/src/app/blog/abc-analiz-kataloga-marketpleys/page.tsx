import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABC-анализ каталога маркетплейса: что оставить, что улучшить — Aiviso",
  description:
    "Пошаговый ABC-анализ товаров на Wildberries и Ozon: как разделить каталог на A, B, C-категории, какие метрики смотреть и что делать с каждой группой. Чек-лист из 18 пунктов.",
  keywords: [
    "ABC-анализ маркетплейс",
    "ABC-анализ Wildberries",
    "ABC-анализ Ozon",
    "анализ каталога WB",
    "какие товары убрать с маркетплейса",
    "оптимизация каталога WB Ozon",
    "аналитика продавца wildberries",
    "управление ассортиментом маркетплейс",
  ],
  alternates: { canonical: "/blog/abc-analiz-kataloga-marketpleys" },
  openGraph: {
    title: "ABC-анализ каталога на WB и Ozon: что оставить, что улучшить, что убрать",
    description:
      "Пошаговый метод разделения товаров на группы A, B, C по выручке и марже. Чек-лист из 18 пунктов и кейс: убрали 11 аутсайдеров — средняя маржа выросла с 14% до 23%.",
    url: "/blog/abc-analiz-kataloga-marketpleys",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ABC-анализ каталога на маркетплейсе: что оставить, что улучшить, что убрать",
  description:
    "Пошаговый ABC-анализ товаров на Wildberries и Ozon: как разделить каталог на A, B, C-категории, какие метрики смотреть и что делать с каждой группой.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/abc-analiz-kataloga-marketpleys",
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
      name: "ABC-анализ каталога маркетплейса",
      item: "https://aiviso.ru/blog/abc-analiz-kataloga-marketpleys",
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

export default function AbcAnalizKataloga() {
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
          <span style={{ color: "#1f2937" }}>ABC-анализ каталога</span>
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
          ABC-анализ каталога на маркетплейсе: что оставить, что улучшить, что убрать
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>8 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          У большинства продавцов WB и Ozon 20% товаров приносят 80% прибыли, а остальные 80% либо
          еле окупаются, либо тянут деньги в заморозку. ABC-анализ — это метод за два часа разобраться,
          какие SKU реально работают, а какие просто занимают место на складе и в ЛК.
        </p>

        <h2 style={styles.h2}>Зачем делать ABC-анализ</h2>
        <p style={styles.p}>
          Типичная картина: у продавца 60 артикулов. Он смотрит общую выручку — 1,2 млн в месяц,
          кажется всё хорошо. Но если разобрать по каждому SKU, окажется что 8 позиций дают
          900 000 ₽, 15 позиций — ещё 250 000 ₽, а оставшиеся 37 артикулов делят между собой
          50 000 ₽ выручки и при этом замораживают 400 000 ₽ в стоке.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Спорт и отдых» провёл такой разбор и убрал 11 аутсайдеров.
          Средняя маржа по каталогу выросла с 14% до 23%, а оборотные деньги освободились для закупки
          топовых позиций — выручка от них выросла на 34% за 6 недель.
        </p>
        <p style={styles.p}>
          ABC-анализ работает как для продавца с 10 артикулами, так и с 500. Принцип один: фокус
          на том, что реально зарабатывает.
        </p>

        <h2 style={styles.h2}>Что собрать перед анализом</h2>
        <p style={styles.p}>
          Вам нужна таблица — Excel или Google Sheets — со следующими колонками для каждого SKU
          за последние 60-90 дней:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Артикул и название товара</strong></li>
          <li style={styles.li}><strong>Выручка</strong> (продажи за период в рублях)</li>
          <li style={styles.li}><strong>Количество продаж</strong> (штук)</li>
          <li style={styles.li}><strong>Себестоимость одной единицы</strong> (закупка + упаковка + маркировка)</li>
          <li style={styles.li}><strong>Комиссия маркетплейса</strong> (% или сумма)</li>
          <li style={styles.li}><strong>Логистика</strong> (доставка до покупателя + возвраты)</li>
          <li style={styles.li}><strong>Процент выкупа</strong></li>
          <li style={styles.li}><strong>Текущий остаток на складе</strong> и его стоимость</li>
        </ul>
        <p style={styles.p}>
          Всё это берётся из ЛК Wildberries (раздел «Аналитика» → «Сводный отчёт») или Ozon
          (раздел «Аналитика» → «Отчёты»). Выгружайте за 60-90 дней — месяц слишком коротко,
          могут быть случайные выбросы из акций.
        </p>

        <h2 style={styles.h2}>Как разделить товары на группы A, B, C</h2>
        <p style={styles.p}>
          Стандартный ABC-анализ делится по выручке. Сортируете все товары по выручке
          от большего к меньшему, считаете накопленный процент:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Группа</th>
              <th style={styles.th}>Доля в выручке</th>
              <th style={styles.th}>Доля в каталоге</th>
              <th style={styles.th}>Что это</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...styles.tdAccent, fontWeight: 700 }}>A</td>
              <td style={styles.tdAccent}>0–80%</td>
              <td style={styles.td}>обычно 10–20% SKU</td>
              <td style={styles.td}>Локомотивы. Приносят большую часть денег.</td>
            </tr>
            <tr>
              <td style={{ ...styles.td, fontWeight: 700 }}>B</td>
              <td style={styles.td}>80–95%</td>
              <td style={styles.td}>обычно 20–30% SKU</td>
              <td style={styles.td}>Середняки. Работают, но не в полную силу.</td>
            </tr>
            <tr>
              <td style={{ ...styles.td, fontWeight: 700 }}>C</td>
              <td style={styles.td}>95–100%</td>
              <td style={styles.td}>обычно 50–70% SKU</td>
              <td style={styles.td}>Аутсайдеры. Дают копейки, но отнимают ресурсы.</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Один важный нюанс: анализировать только по выручке недостаточно. Товар с выручкой
          200 000 ₽ и маржой 2% хуже товара с выручкой 80 000 ₽ и маржой 30%. Поэтому после
          первичного деления по выручке делаем второй проход — по <strong>маржинальной прибыли</strong>.
          Товары, у которых высокая выручка, но маржа ниже 10%, переносим из A в B или вообще
          в отдельную категорию D (убыточные).
        </p>

        <h3 style={styles.h3}>Формула маржинальной прибыли</h3>
        <p style={styles.p}>
          Маржа на единицу = Цена продажи × (1 − % выкупа) − Себестоимость − Комиссия − Логистика
        </p>
        <p style={styles.p}>
          Пример: кружка продаётся за 450 ₽, выкуп 78%, комиссия 12% = 54 ₽, логистика 80 ₽,
          себестоимость 90 ₽. Тогда: 450 × 0.78 − 90 − 54 − 80 = 351 − 224 = <strong>127 ₽ с единицы</strong>,
          маржа 28%. Неплохо.
        </p>
        <p style={styles.p}>
          Если считаете это вручную — трудоёмко, но делается один раз. Дальше таблица обновляется
          ежеквартально. Подробнее о юнит-экономике читайте в статье{" "}
          <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>«Юнит-экономика для маркетплейса»</Link>.
        </p>

        <h2 style={styles.h2}>Что делать с группой A</h2>
        <p style={styles.p}>
          Локомотивы — это ваш главный актив. С ними работа по принципу «не испорти».
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Никогда не допускайте out-of-stock.</strong> Пропадание из листинга хотя бы на 48 часов
            роняет позиции, которые потом придётся отвоёвывать неделями. Страховой запас — минимум
            на 21 день продаж.
          </li>
          <li style={styles.li}>
            <strong>Инвестируйте в фото и карточку.</strong> Если у локомотива старые или слабые фото —
            это первое на что тратить ресурс. Даже небольшой рост CTR с 3% до 4% при 10 000 показов
            в день даёт +100 кликов ежедневно.
          </li>
          <li style={styles.li}>
            <strong>Защищайте рейтинг.</strong> Отвечайте на негативные отзывы на A-позициях в течение
            24 часов. Падение рейтинга с 4.8 до 4.3 снижает конверсию в среднем на 8-12%.
          </li>
          <li style={styles.li}>
            <strong>Тестируйте расширение линейки.</strong> Если кружка синяя продаётся в A-группе,
            пробуйте добавить зелёную и белую — часть аудитории хочет тот же товар в другом цвете.
          </li>
          <li style={styles.li}>
            <strong>Не трогайте работающую карточку без причины.</strong> Порывы «а давайте обновим
            главное фото» у A-товаров без данных A/B-теста — риск зря просадить позиции.
          </li>
        </ul>

        <h2 style={styles.h2}>Что делать с группой B</h2>
        <p style={styles.p}>
          Середняки — это потенциал, который пока не реализован. Здесь три варианта: дотянуть до A,
          оставить как есть, или перевести в C.
        </p>

        <h3 style={styles.h3}>Сначала разберитесь — почему B не стал A</h3>
        <p style={styles.p}>
          Для каждого B-товара задайте вопрос: что мешает ему продавать больше? Обычно это одна
          из пяти причин:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слабые фото.</strong> CTR ниже 2% — значит из листинга почти не кликают. Обновление главного фото часто решает за 2 недели.</li>
          <li style={styles.li}><strong>Плохой SEO.</strong> Товар не попадает в нужные поисковые запросы. Проверьте позиции по ключам через ЛК или Mpstats.</li>
          <li style={styles.li}><strong>Завышенная цена.</strong> Если конкуренты дешевле на 15%+ — покупатель уходит к ним. Пересчитайте юнит-экономику и попробуйте снизить цену.</li>
          <li style={styles.li}><strong>Низкий рейтинг.</strong> Меньше 4.3 — алгоритм прячет карточку. Работа с отзывами и повышение качества упаковки обычно поднимают рейтинг за 60-90 дней.</li>
          <li style={styles.li}><strong>Сезонность.</strong> Товар в B-группе сейчас, но в сезон он A. Это нормально — просто знайте об этом и планируйте запасы заранее.</li>
        </ul>

        <h3 style={styles.h3}>Сколько вкладывать в B-товары</h3>
        <p style={styles.p}>
          Простое правило: если за 4-6 недель активных действий (новое фото, SEO, небольшая реклама)
          товар не сдвинулся — его потолок ниже, чем вы думали. Переводите в C и не тратьте больше
          ресурс.
        </p>

        <h2 style={styles.h2}>Что делать с группой C и убыточными D</h2>
        <p style={styles.p}>
          Это самое неприятное, но и самое ценное решение. C-товары делятся на два подтипа:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Подтип</th>
              <th style={styles.th}>Признаки</th>
              <th style={styles.th}>Что делать</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>C-живой</strong></td>
              <td style={styles.td}>Продаётся редко, но с нормальной маржой. Остатки небольшие.</td>
              <td style={styles.td}>Оставить, не вкладываться. Пусть продаётся сам.</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>C-замороженный</strong></td>
              <td style={styles.td}>Большой сток, продаётся медленно. Оборачиваемость 60+ дней.</td>
              <td style={styles.td}>Снизить цену для быстрой ликвидации или вывезти с FBO.</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}><strong>D-убыточный</strong></td>
              <td style={styles.tdAccent}>Маржа отрицательная с учётом возвратов и логистики.</td>
              <td style={styles.tdAccent}>Убрать немедленно. Каждая продажа — это убыток.</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Психологически сложно убрать товар, в который вложили деньги — кажется «ещё немного и
          пойдёт». Но если юнит-экономика отрицательная и вы уже пробовали оптимизировать 2-3 месяца
          — это не вопрос времени, это структурная проблема (неправильная закупочная цена, слишком
          дорогая логистика, высокий процент возврата).
        </p>
        <p style={styles.p}>
          Как быстро продать C-замороженные позиции: поставьте цену чуть ниже себестоимости — да,
          вы потеряете деньги, но прекратите платить за хранение и освободите оборотку для A-группы.
          Часто это выгоднее чем держать сток ещё полгода.
        </p>

        <h2 style={styles.h2}>ABC + XYZ: продвинутый вариант</h2>
        <p style={styles.p}>
          Базовый ABC делится по выручке, но не учитывает стабильность спроса. XYZ-анализ добавляет
          третье измерение — насколько ровно продаётся товар:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>X</strong> — продажи стабильны, коэффициент вариации менее 10%. Можно точно планировать закупки.</li>
          <li style={styles.li}><strong>Y</strong> — умеренные колебания, вариация 10–25%. Нужен страховой запас.</li>
          <li style={styles.li}><strong>Z</strong> — хаотичный спрос, вариация более 25%. Трудно планировать, рискуем перезатарить склад.</li>
        </ul>
        <p style={styles.p}>
          Комбинация AX — идеальный товар: много выручки и стабильные продажи. AZ — хорошая выручка,
          но непредсказуемый спрос, сложнее управлять остатками. CZ — кандидат на выход из каталога.
        </p>
        <p style={styles.p}>
          Для большинства продавцов с каталогом до 100 SKU достаточно базового ABC. XYZ имеет смысл
          при 200+ артикулах или когда товар явно сезонный и вы хотите точнее планировать поставки.
          Об управлении остатками подробнее —{" "}
          <Link href="/blog/upravlenie-ostatkami-wb-ozon" style={{ color: "#7c3aed" }}>
            «Управление остатками на WB и Ozon»
          </Link>.
        </p>

        <h2 style={styles.h2}>Роль фото в ABC-результатах</h2>
        <p style={styles.p}>
          Делая анализ, вы неизбежно обнаружите B-товары с хорошим продуктом, но слабым CTR.
          В большинстве случаев причина — фото. Посмотрите: если кликабельность ниже 2,5% при
          нормальной цене — карточка проигрывает конкурентам на уровне первого касания.
        </p>
        <p style={styles.p}>
          Новое главное фото в среднем поднимает CTR на 30-60% — это самая быстрая точка роста
          из всех доступных. Наш клиент из категории «Товары для дома» перефотографировал
          7 B-артикулов через <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> за
          один вечер — за 3 недели 4 из них перешли в группу A.
        </p>
        <p style={styles.p}>
          Когда делаете ABC-анализ — добавьте в таблицу столбец CTR для каждого SKU. Это сразу
          покажет, где проблема в фото, а где в чём-то другом.
        </p>

        <h2 style={styles.h2}>Как часто делать ABC-анализ</h2>
        <p style={styles.p}>
          Оптимально — раз в квартал. Если у вас активно меняется ассортимент или вы часто запускаете
          новинки — раз в 6 недель. После крупных сезонных акций (Чёрная пятница, 8 марта, 1 сентября)
          делайте внеплановый разбор — акции сильно искажают картину, и после них часть C-товаров
          надо переоценить.
        </p>
        <p style={styles.p}>
          Первый раз анализ занимает 3-4 часа. Повторный — 40-60 минут, если таблица уже готова.
        </p>

        <h2 style={styles.h2}>Чек-лист ABC-анализа каталога</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Выгрузить отчёт по продажам за 60-90 дней из ЛК WB или Ozon</li>
          <li style={styles.li}>Добавить колонки: себестоимость, комиссия, логистика, % выкупа</li>
          <li style={styles.li}>Посчитать маржу на единицу для каждого SKU</li>
          <li style={styles.li}>Посчитать маржинальную прибыль за период (маржа × кол-во продаж)</li>
          <li style={styles.li}>Отсортировать по выручке, посчитать накопленный %</li>
          <li style={styles.li}>Разделить на A (0-80%), B (80-95%), C (95-100%)</li>
          <li style={styles.li}>Выделить D-группу — товары с отрицательной маржой</li>
          <li style={styles.li}>Добавить CTR для каждого SKU (из ЛК)</li>
          <li style={styles.li}>Для A-товаров: проверить страховой запас и актуальность фото</li>
          <li style={styles.li}>Для B-товаров: найти одну главную причину почему не в A</li>
          <li style={styles.li}>Составить план действий по B-товарам (срок: 4-6 недель)</li>
          <li style={styles.li}>Для C-замороженных: посчитать стоимость хранения vs ликвидация</li>
          <li style={styles.li}>D-товары: принять решение о выводе из ассортимента</li>
          <li style={styles.li}>Зафиксировать текущее распределение A/B/C для сравнения через квартал</li>
          <li style={styles.li}>Обновить фото у B-товаров с CTR ниже 2.5%</li>
          <li style={styles.li}>Пересчитать юнит-экономику для A-товаров с маржой ниже 15%</li>
          <li style={styles.li}>Сформировать план закупки: A-товары в приоритете по объёму</li>
          <li style={styles.li}>Поставить напоминание на повторный анализ через 6-10 недель</li>
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
          <p style={{ margin: "0 0 12px", fontSize: 16, color: "#5b21b6", fontWeight: 700 }}>
            B-товары с плохим CTR — это первое место для роста
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            После ABC-анализа вы поймёте, каким карточкам нужно новое главное фото. В{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Aiviso
            </Link>{" "}
            это занимает 2 минуты: загружаете фото товара, получаете готовый кадр в нужном
            размере 900×1200 для WB и Ozon. 13 кредитов на старте бесплатно.
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
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула и чек-лист
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/upravlenie-ostatkami-wb-ozon" style={{ color: "#7c3aed" }}>
              Управление остатками на WB и Ozon: как не уйти в out-of-stock
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/analitika-prodazh-wb-ozon-2026" style={{ color: "#7c3aed" }}>
              Аналитика продаж на Wildberries и Ozon: как читать цифры
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
