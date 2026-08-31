import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Аудит карточки товара WB и Ozon: разбор за 30 минут — Aiviso",
  description: "Пошаговый аудит карточки товара на Wildberries и Ozon: фото, SEO, характеристики, инфографика, цена. Чек-лист из 25 пунктов и кейс: рост продаж на 67% без рекламы.",
  keywords: [
    "аудит карточки товара",
    "оптимизация карточки wildberries",
    "аудит карточки ozon",
    "как улучшить карточку товара",
    "увеличить продажи на маркетплейсе",
    "конверсия карточки wb",
    "SEO карточка маркетплейс",
    "чек-лист карточки товара",
  ],
  alternates: { canonical: "/blog/audit-kartochki-tovara" },
  openGraph: {
    title: "Аудит карточки товара WB и Ozon: пошаговый разбор за 30 минут",
    description: "Чек-лист из 25 пунктов для самостоятельного аудита карточки. Кейс: продажи выросли на 67% без рекламы после разбора по этому алгоритму.",
    url: "/blog/audit-kartochki-tovara",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Аудит карточки товара на Wildberries и Ozon: пошаговый разбор за 30 минут",
  description: "Пошаговый алгоритм аудита карточки товара на WB и Ozon: фото, SEO, характеристики, инфографика, цена и отзывы. Чек-лист из 25 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-31",
  dateModified: "2026-08-31",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/audit-kartochki-tovara",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Аудит карточки товара", item: "https://aiviso.ru/blog/audit-kartochki-tovara" },
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

export default function AuditKartochkiTovara() {
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
          <span style={{ color: "#1f2937" }}>Аудит карточки товара</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Аудит карточки товара на Wildberries и Ozon: пошаговый разбор за 30 минут
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>31 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство селлеров знают, что карточку надо «улучшать» — но не знают, с чего начать.
          Этот гайд даёт конкретный алгоритм: 7 блоков, 30 минут, чек-лист из 25 пунктов.
          После него понятно, что именно мешает карточке продавать — и в каком порядке это чинить.
        </p>

        <h2 style={styles.h2}>Зачем делать аудит карточки</h2>
        <p style={styles.p}>
          Карточка товара — это воронка. Сначала покупатель видит её в листинге (первое фото + цена),
          кликает, читает описание и характеристики, смотрит инфографику, проверяет отзывы — и либо
          добавляет в корзину, либо уходит к конкуренту. Каждый из этих шагов можно измерить.
        </p>
        <p style={styles.p}>
          Проблема в том, что большинство селлеров видят только итог — «продажи маленькие» — но
          не понимают, на каком шаге теряются покупатели. Аудит отвечает именно на этот вопрос.
        </p>
        <p style={styles.p}>
          Один наш клиент из категории «домашний текстиль» три месяца гнал платный трафик на
          карточку с CTR 1.2% и конверсией 2.1%. После аудита выяснилось: заголовок не содержал
          главного ключа, а первый слайд был снят на сером фоне — в категории стандарт белый.
          После правок без рекламы продажи выросли на 67% за 4 недели.
        </p>

        <h2 style={styles.h2}>Шаг 1. Главное фото: проверяем CTR-фактор</h2>
        <p style={styles.p}>
          Главное фото — единственное, что видит покупатель в поиске. Если оно не цепляет,
          остальная карточка не имеет значения.
        </p>

        <h3 style={styles.h3}>Как проверить свой CTR</h3>
        <p style={styles.p}>
          Wildberries: Личный кабинет → Аналитика → Воронка продаж. CTR показан как «Переходы / Показы».
          Ozon: ЛК → Аналитика → Показатели → столбец «CTR».
        </p>
        <p style={styles.p}>Нормы по категориям:</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Слабый CTR</th>
              <th style={styles.th}>Хороший CTR</th>
              <th style={styles.th}>Отличный CTR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Одежда и обувь</td>
              <td style={styles.td}>менее 2%</td>
              <td style={styles.td}>3–5%</td>
              <td style={styles.td}>6%+</td>
            </tr>
            <tr>
              <td style={styles.td}>Электроника</td>
              <td style={styles.td}>менее 1.5%</td>
              <td style={styles.td}>2.5–4%</td>
              <td style={styles.td}>5%+</td>
            </tr>
            <tr>
              <td style={styles.td}>Косметика</td>
              <td style={styles.td}>менее 2.5%</td>
              <td style={styles.td}>3.5–5.5%</td>
              <td style={styles.td}>6%+</td>
            </tr>
            <tr>
              <td style={styles.td}>Товары для дома</td>
              <td style={styles.td}>менее 1.5%</td>
              <td style={styles.td}>2.5–4%</td>
              <td style={styles.td}>5%+</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Что смотреть на главном фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар занимает не менее 70% кадра — мелкий продукт на пустом фоне не продаёт</li>
          <li style={styles.li}>Фон соответствует стандарту категории: белый для большинства, lifestyle для одежды</li>
          <li style={styles.li}>На мобильном экране (375px) детали товара хорошо различимы</li>
          <li style={styles.li}>Нет бликов, теней, размытия, кадрирования с обрезанными частями</li>
          <li style={styles.li}>Если есть текстовый оверлей — он читается даже на маленьком экране</li>
        </ul>
        <p style={styles.p}>
          Практический тест: откройте свою карточку в режиме листинга (поиск по запросу) и
          посмотрите, как она смотрится среди карточек конкурентов на первом экране смартфона.
          Если взгляд не цепляется за вашу — надо менять фото.
        </p>

        <h2 style={styles.h2}>Шаг 2. Заголовок и SEO</h2>
        <p style={styles.p}>
          Заголовок влияет одновременно на позицию в поиске и на кликабельность в листинге.
          Это двойной рычаг, которым пользуются немногие.
        </p>

        <h3 style={styles.h3}>Формула проверки заголовка</h3>
        <p style={styles.p}>Хороший заголовок строится по схеме:</p>
        <p style={{ padding: "12px 16px", background: "#f5f3ff", borderRadius: 8, fontWeight: 600, color: "#5b21b6" }}>
          [Тип товара] + [главный признак/материал] + [применение/для кого] + [ключевые характеристики]
        </p>
        <p style={styles.p}>
          Пример для WB: «Термос для чая и кофе 1 литр, нержавеющая сталь, с кнопкой, для термоса
          в автомобиль, мужской» — длина ~80 символов (WB допускает до 100).
        </p>
        <p style={styles.p}>Что проверить в заголовке:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Первые 40 символов содержат главный поисковый запрос — его видят в листинге</li>
          <li style={styles.li}>Нет стоп-слов: «лучший», «топ», «акция», «скидка», «новинка», «оригинал» — WB их отфильтровывает</li>
          <li style={styles.li}>Нет Caps Lock целыми словами — это нарушение правил WB</li>
          <li style={styles.li}>Длина не превышает лимит: WB — 100 символов, Ozon — 255 символов</li>
        </ul>
        <p style={styles.p}>
          Быстрая проверка: введите в поиск WB/Ozon главный запрос вашего товара и посмотрите
          заголовки ТОП-5. Если ваш заголовок явно отличается по структуре — это сигнал пересмотреть.
        </p>

        <h2 style={styles.h2}>Шаг 3. Характеристики и атрибуты</h2>
        <p style={styles.p}>
          Характеристики — это SEO-инструмент, о котором забывают 70% продавцов. На Wildberries
          пустой атрибут «Цвет» или «Материал» буквально исключает карточку из фильтрованных
          поисков: покупатель выбирает «синий» — ваш товар не показывается, даже если он синий.
        </p>

        <h3 style={styles.h3}>Как аудировать характеристики</h3>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            Откройте карточку конкурента из ТОП-3 по вашему запросу. Перейдите в раздел
            «Характеристики» — посмотрите, какие поля заполнены у них.
          </li>
          <li style={styles.li}>
            Сравните со своей карточкой: какие поля пустые у вас, но заполнены у конкурента?
          </li>
          <li style={styles.li}>
            Особое внимание: «Цвет», «Размер», «Материал», «Назначение», «Страна производства»,
            «Гендер» (для одежды). Это фильтры, которые покупатели используют активно.
          </li>
        </ol>
        <p style={styles.p}>
          Один из продавцов в категории «спортивные сумки» после заполнения 14 пустых атрибутов
          без изменения фото и заголовка поднялся с 84-й на 19-ю позицию за 12 дней. Трафик
          вырос в 3.4 раза — только за счёт попадания в фильтры.
        </p>

        <h2 style={styles.h2}>Шаг 4. Описание: ключи и читаемость</h2>
        <p style={styles.p}>
          На WB описание напрямую не влияет на позиции в поиске — алгоритм его не индексирует
          так же, как атрибуты. Но оно работает на конверсию: покупатель, дошедший до описания,
          — уже тёплый. Задача описания — закрыть возражения и дать повод нажать «Купить».
        </p>
        <p style={styles.p}>
          На Ozon описание участвует в поиске. Правило: первые 200 символов должны содержать
          главный поисковый запрос — именно их обрабатывает алгоритм.
        </p>

        <h3 style={styles.h3}>Чек-лист описания</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый абзац отвечает на вопрос «для кого этот товар и чем он хорош»</li>
          <li style={styles.li}>Есть конкретные цифры: размер, вес, объём, температура, срок службы</li>
          <li style={styles.li}>Перечислены ситуации использования — «подойдёт для пикника», «идеально в подарок»</li>
          <li style={styles.li}>Закрыты типичные возражения из отзывов конкурентов — берём из их карточек</li>
          <li style={styles.li}>Нет шаблонного текста «высокое качество», «надёжный товар», «отличная покупка»</li>
          <li style={styles.li}>Нет ключевых слов через запятую списком — это не 2015 год, поисковики это игнорируют</li>
        </ul>

        <h2 style={styles.h2}>Шаг 5. Инфографика и слайдеры</h2>
        <p style={styles.p}>
          После главного фото покупатель листает слайды. Здесь задача — ответить на вопросы,
          которые остались после первого взгляда: «А какой размер?», «Из чего сделано?»,
          «Как выглядит в использовании?»
        </p>
        <p style={styles.p}>Стандарт для хорошей карточки — 6–9 слайдов по структуре:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слайд 1:</strong> главное фото, товар на нейтральном фоне</li>
          <li style={styles.li}><strong>Слайд 2:</strong> инфографика с 3–5 ключевыми преимуществами</li>
          <li style={styles.li}><strong>Слайд 3:</strong> размерная таблица или состав/материал крупным планом</li>
          <li style={styles.li}><strong>Слайд 4:</strong> lifestyle — товар в использовании, в реальной ситуации</li>
          <li style={styles.li}><strong>Слайды 5–7:</strong> детали: швы, механизм, текстура, комплектация</li>
          <li style={styles.li}><strong>Слайд 8–9:</strong> сравнение с конкурентами, сертификат, USP</li>
        </ul>
        <p style={styles.p}>
          Что точно должно быть на инфографике: не более 5 тезисов, шрифт читаем на мобиле
          (минимум 24px в оригинале), иконки понятны без подписей. Текст на инфографике должен
          отвечать на один из трёх вопросов: «Зачем мне это?», «Из чего это?», «Насколько это большое?»
        </p>

        <h2 style={styles.h2}>Шаг 6. Отзывы и рейтинг</h2>
        <p style={styles.p}>
          Рейтинг и количество отзывов — социальное доказательство. Покупатель не видит вашу
          карточку изолированно: он сравнивает с конкурентами, у которых 4.8 и 500 отзывов против
          вашего 4.2 и 12 отзывов.
        </p>

        <h3 style={styles.h3}>Что проверить в блоке отзывов</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Рейтинг ниже 4.4 — карточка теряет позиции в органике на WB</li>
          <li style={styles.li}>Последний отзыв старше 30 дней — алгоритм считает товар «засыпающим»</li>
          <li style={styles.li}>Есть негативные отзывы без ответа продавца — это видит каждый новый покупатель</li>
          <li style={styles.li}>Если негатив повторяется (3+ отзыва об одном дефекте) — это сигнал к правке описания или фото</li>
        </ul>
        <p style={styles.p}>
          Важно: ответы на негативные отзывы читают будущие покупатели не меньше, чем сами отзывы.
          Грамотный ответ «Уважаемый покупатель, приносим извинения. Обратитесь в поддержку —
          обменяем или вернём деньги» закрывает 60–70% тревог потенциального покупателя,
          который видит этот негатив.
        </p>

        <h2 style={styles.h2}>Шаг 7. Цена и конкурентный анализ</h2>
        <p style={styles.p}>
          Цена — один из главных факторов ранжирования на WB. Алгоритм продвигает карточки
          с активными продажами, а продажи напрямую зависят от цены относительно конкурентов.
        </p>
        <p style={styles.p}>Быстрый тест цены:</p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            Найдите в листинге ТОП-5 конкурентов по вашему главному запросу.
          </li>
          <li style={styles.li}>
            Посмотрите их цены. Ваша цена должна быть в пределах ±15% от медианы ТОП-5
            (если у вас сопоставимые характеристики).
          </li>
          <li style={styles.li}>
            Если вы дороже — проверьте, есть ли обоснование: более высокий рейтинг, больше
            отзывов, лучше фото, уникальная функция. Без этого покупатель выберет дешевле.
          </li>
        </ol>
        <p style={styles.p}>
          Частая ошибка: продавцы ставят цену выше конкурентов «чтобы было куда давать скидку
          на акциях». Но алгоритм видит вашу обычную цену — и в органике продвигает дешевле.
          Правильная стратегия: рассчитать минимальную рентабельную цену → выставить конкурентную →
          участвовать в акциях за счёт объёма, а не накрутки.
        </p>

        <h2 style={styles.h2}>Итоговый чек-лист аудита: 25 пунктов</h2>
        <p style={styles.p}>Распечатайте и проверяйте каждую карточку по этому списку раз в 2–4 недели:</p>

        <p style={{ fontWeight: 700, margin: "20px 0 8px", color: "#7c3aed" }}>Фото и визуал</p>
        <ul style={styles.ul}>
          <li style={styles.li}>CTR главного фото выше нормы категории</li>
          <li style={styles.li}>Товар занимает 70%+ кадра</li>
          <li style={styles.li}>Фон соответствует стандарту категории</li>
          <li style={styles.li}>Фото читается на экране 375px (маленький смартфон)</li>
          <li style={styles.li}>В карточке 6+ слайдов</li>
          <li style={styles.li}>Есть инфографика с конкретными преимуществами</li>
          <li style={styles.li}>Есть lifestyle-кадр</li>
        </ul>

        <p style={{ fontWeight: 700, margin: "20px 0 8px", color: "#7c3aed" }}>SEO и заголовок</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главный ключевой запрос — в первых 40 символах заголовка</li>
          <li style={styles.li}>Нет стоп-слов и Caps Lock в заголовке</li>
          <li style={styles.li}>Длина заголовка соответствует лимиту площадки</li>
          <li style={styles.li}>Описание начинается с главного ключа (для Ozon)</li>
        </ul>

        <p style={{ fontWeight: 700, margin: "20px 0 8px", color: "#7c3aed" }}>Характеристики</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Заполнены все атрибуты, задействованные в фильтрах категории</li>
          <li style={styles.li}>Заполнены: Цвет, Размер, Материал, Назначение</li>
          <li style={styles.li}>Нет явных несоответствий между атрибутами и фото</li>
        </ul>

        <p style={{ fontWeight: 700, margin: "20px 0 8px", color: "#7c3aed" }}>Отзывы и репутация</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Рейтинг 4.4+</li>
          <li style={styles.li}>Последний отзыв — не позднее 14 дней назад</li>
          <li style={styles.li}>Все негативные отзывы получили ответ продавца</li>
          <li style={styles.li}>Повторяющийся негатив учтён в описании или инфографике</li>
        </ul>

        <p style={{ fontWeight: 700, margin: "20px 0 8px", color: "#7c3aed" }}>Цена и аналитика</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Цена в пределах ±15% от медианы ТОП-5 конкурентов</li>
          <li style={styles.li}>Конверсия (переход в корзину) выше 5%</li>
          <li style={styles.li}>Процент выкупа выше нормы по категории</li>
          <li style={styles.li}>Остатки на складе — страховой запас на 14+ дней продаж</li>
          <li style={styles.li}>Карточка участвует в актуальных акциях площадки</li>
        </ul>

        <h2 style={styles.h2}>Реальный кейс: аудит в категории «Детская посуда»</h2>
        <p style={styles.p}>
          Продавец из Екатеринбурга обратился с жалобой на стагнацию: 3 месяца без роста
          продаж, платный трафик «не окупается». Провели аудит по описанному алгоритму.
          Нашли 11 проблем из 25 пунктов.
        </p>
        <p style={styles.p}>Топ-4 проблемы:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>CTR 1.4%</strong> при норме 3% в категории — главное фото сделано на бежевом фоне,
            а конкуренты используют белый с контрастной подачей цветной посуды
          </li>
          <li style={styles.li}>
            <strong>Атрибут «Материал» пустой</strong> — карточка не попадала в фильтр
            «Пищевой пластик», который используют 40% покупателей в категории
          </li>
          <li style={styles.li}>
            <strong>8 негативных отзывов без ответа</strong> — все про крышку, которая якобы
            плохо закрывается. В описании про закрытие — ни слова
          </li>
          <li style={styles.li}>
            <strong>Цена на 22% выше медианы</strong> без видимого преимущества в характеристиках
          </li>
        </ul>
        <p style={styles.p}>
          После правок: новое главное фото (белый фон, крупно, яркие тарелки на переднем плане),
          заполнены все атрибуты, добавлен слайд «Механизм крышки» с инструкцией, ответы на
          все отзывы, цена скорректирована на -8%.
        </p>
        <p style={styles.p}>
          Результат через 4 недели: CTR вырос с 1.4% до 3.8%, конверсия с 2.3% до 4.1%,
          продажи выросли на 67% при том же рекламном бюджете.
        </p>
        <p style={styles.p}>
          Ключевой вывод: большинство проблем карточки решаются без рекламы. Реклама только
          усиливает то, что уже работает — или сливает деньги на то, что не работает.
        </p>

        <h2 style={styles.h2}>Когда проводить аудит</h2>
        <p style={styles.p}>Рекомендую делать аудит в четырёх случаях:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>При запуске новой карточки</strong> — через 2–3 недели после первых продаж, когда есть данные CTR и конверсии</li>
          <li style={styles.li}><strong>При падении продаж</strong> — сначала аудит, потом реклама. Иначе деньги улетят в трубу</li>
          <li style={styles.li}><strong>Раз в квартал</strong> — плановый осмотр, конкуренты не стоят на месте</li>
          <li style={styles.li}><strong>Перед акцией или сезоном</strong> — убедиться, что карточка готова к росту трафика</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Проблема с фото карточки?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— загрузите фото товара и получите профессиональный кадр для маркетплейса за 2 минуты.
            13 кредитов бесплатно при регистрации. Никакой студии, никаких фотографов.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 6 }}><Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как измерить и поднять кликабельность</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки товара на 30%: чек-лист из 25 пунктов</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки: 8 правил первого слайда который продаёт</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/" style={{ color: "#7c3aed" }}>Главная — AI-фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}
