import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Продажи встали: как реанимировать карточку товара — Aiviso",
  description: "Пошаговый план реанимации карточки на Wildberries и Ozon: диагностика, аудит фото, SEO, цена, акции. Чек-лист из 20 пунктов и кейс: с 3 заказов до 47 в неделю.",
  keywords: [
    "реанимация карточки товара",
    "продажи встали wildberries",
    "карточка не продаёт ozon",
    "как поднять продажи wildberries",
    "аудит карточки товара",
    "почему не продаётся товар на wb",
    "падение продаж маркетплейс",
    "как исправить карточку ozon",
  ],
  alternates: { canonical: "/blog/reanimatsiya-kartochki-tovara" },
  openGraph: {
    title: "Продажи встали: как реанимировать карточку товара на WB и Ozon",
    description: "Диагностика за 15 минут, аудит фото, SEO и цены. Чек-лист из 20 пунктов и кейс: с 3 до 47 заказов в неделю.",
    url: "/blog/reanimatsiya-kartochki-tovara",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Продажи встали: как реанимировать карточку товара на Wildberries и Ozon",
  description: "Пошаговый план реанимации карточки на WB и Ozon: диагностика, аудит фото, SEO, цена, акции. Чек-лист из 20 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/reanimatsiya-kartochki-tovara",
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
      name: "Реанимация карточки товара",
      item: "https://aiviso.ru/blog/reanimatsiya-kartochki-tovara",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "28px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  ol: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "7px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function ReanimatsiyaKartochkiTovara() {
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
          <span style={{ color: "#1f2937" }}>Реанимация карточки товара</span>
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
          Продажи встали: пошаговый план реанимации карточки на WB и Ozon
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>23 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Вчера было 12 заказов, сегодня — ноль. Или карточку загрузили месяц назад, а продаж
          до сих пор нет. Это не всегда плохой товар — чаще это лечится за 2–3 дня если знать
          где смотреть.
        </p>

        <h2 style={styles.h2}>Почему продажи останавливаются: 5 причин</h2>
        <p style={styles.p}>
          Прежде чем что-то менять — нужно понять причину. Хаотичные правки без диагностики
          тратят время и могут опустить позиции ещё ниже.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Причина</th>
              <th style={styles.th}>Признак</th>
              <th style={styles.th}>Что смотреть</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Потеря позиций в поиске</td>
              <td style={styles.td}>Показы упали в 3–5 раз</td>
              <td style={styles.td}>Раздел «Аналитика» → Показы в ЛК</td>
            </tr>
            <tr>
              <td style={styles.td}>Плохое главное фото</td>
              <td style={styles.td}>CTR ниже 1.5%, показы есть — кликов нет</td>
              <td style={styles.td}>Метрика CTR в ЛК WB / Seller Analytics Ozon</td>
            </tr>
            <tr>
              <td style={styles.td}>Цена выше рынка</td>
              <td style={styles.td}>Клики есть, добавлений в корзину мало</td>
              <td style={styles.td}>Сравнить с ТОП-5 конкурентов прямо сейчас</td>
            </tr>
            <tr>
              <td style={styles.td}>Нет отзывов / низкий рейтинг</td>
              <td style={styles.td}>Конверсия ниже 3% при нормальном CTR</td>
              <td style={styles.td}>Рейтинг карточки и количество отзывов</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Out-of-stock или стоп-лист</td>
              <td style={styles.tdAccent}>Резкое падение позиций за 1–2 дня</td>
              <td style={styles.tdAccent}>Остатки на складах, штрафы, блокировки</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Шаг 1. Диагностика за 15 минут — что смотреть первым</h2>
        <p style={styles.p}>
          Зайдите в личный кабинет и откройте статистику по проблемной карточке. Нужно
          получить три числа за последние 7 дней:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Показы</strong> — сколько раз карточка появилась в листинге</li>
          <li style={styles.li}><strong>Клики / CTR</strong> — сколько человек кликнули и перешли</li>
          <li style={styles.li}><strong>Заказы / Конверсия</strong> — сколько купили из тех, кто зашёл</li>
        </ul>
        <p style={styles.p}>Дальше смотрите где воронка обрывается:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Показов мало (меньше 500 в неделю)</strong> — проблема в позициях. Нужно SEO-аудит, наполнение атрибутов, работа с остатками.</li>
          <li style={styles.li}><strong>Показов достаточно, CTR ниже 2%</strong> — проблема в главном фото. Оно не цепляет в листинге среди конкурентов.</li>
          <li style={styles.li}><strong>CTR нормальный (3%+), конверсия ниже 4%</strong> — проблема внутри карточки: фото слайдов, описание, цена, отзывы.</li>
        </ul>

        <h3 style={styles.h3}>Контрольные цифры — нормы по маркетплейсам</h3>
        <p style={styles.p}>
          Ориентиры сильно зависят от категории, но в среднем по массовым товарам:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>CTR в листинге: 2–5% — нормально, выше 5% — отлично, ниже 1.5% — критично</li>
          <li style={styles.li}>Конверсия карточки: 4–8% — нормально, ниже 3% — плохо</li>
          <li style={styles.li}>Процент выкупа: для одежды 40–55%, для непродовольственного 65–80%</li>
        </ul>

        <h2 style={styles.h2}>Шаг 2. Аудит фото — самая частая причина нулей</h2>
        <p style={styles.p}>
          Один наш клиент в категории «товары для кухни» три недели получал по 2–4 заказа
          в неделю при нормальной SEO-оптимизации. После замены главного фото — с белого
          предметного на lifestyle-сцену с едой — CTR вырос с 1.8% до 4.3%, а заказы за
          первую неделю выросли до 31. Фото — это первое что видит покупатель, ещё до названия.
        </p>

        <h3 style={styles.h3}>Чек-лист главного фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Товар занимает не менее 70% площади кадра — он хорошо виден в маленьком превью</li>
          <li style={styles.li}>Фон не сливается с соседними карточками конкурентов (откройте листинг и сравните)</li>
          <li style={styles.li}>Нет водяных знаков, рамок, логотипов поверх товара</li>
          <li style={styles.li}>Формат 3:4, размер не менее 900×1200 пикселей</li>
          <li style={styles.li}>Для одежды — на модели или Ghost Mannequin, не flat lay как первый слайд</li>
          <li style={styles.li}>Для бытовых товаров — лучше lifestyle (в контексте использования), чем белый фон</li>
          <li style={styles.li}>Нет пересвета, нет синевы от дешёвого LED-освещения</li>
        </ul>

        <h3 style={styles.h3}>Что делать с остальными слайдами</h3>
        <p style={styles.p}>
          После главного слайда покупатель решает: остаться или уйти. Логика слайдов должна
          вести к заказу:
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}><strong>Слайд 1</strong> — главное фото, CTR-зависимый</li>
          <li style={styles.li}><strong>Слайды 2–3</strong> — ключевые преимущества товара через инфографику</li>
          <li style={styles.li}><strong>Слайд 4–5</strong> — детали, размеры, материал, технические характеристики</li>
          <li style={styles.li}><strong>Слайд 6–7</strong> — lifestyle, товар в использовании</li>
          <li style={styles.li}><strong>Слайд 8+</strong> — упаковка, комплектация, гарантия</li>
        </ol>
        <p style={styles.p}>
          Если у вас 2–3 слайда — это уже проблема. Карточки с 7–8 фото конвертируют на
          25–40% лучше, чем с 3–4 кадрами.
        </p>

        <h2 style={styles.h2}>Шаг 3. SEO-аудит заголовка и характеристик</h2>
        <p style={styles.p}>
          Если показов мало — скорее всего товар не индексируется по нужным запросам.
          Wildberries и Ozon используют разные алгоритмы, но общий принцип один:
          чем точнее заполнены атрибуты, тем чаще карточка появляется в поиске.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Заголовок:</strong> проверьте по формуле «Бренд + Тип товара + Ключевой признак + Для кого».
            Пример: «Термокружка металлическая 450 мл для кофе с крышкой»
          </li>
          <li style={styles.li}>
            <strong>Атрибуты:</strong> заполните все незаполненные поля категории. На WB незаполненные
            атрибуты напрямую снижают индексацию — проверьте в разделе «Управление карточками».
          </li>
          <li style={styles.li}>
            <strong>Описание:</strong> добавьте LSI-слова — синонимы и смежные запросы. Для кружки:
            «подарок на новый год», «в поход», «для офиса», «не проливается».
          </li>
          <li style={styles.li}>
            <strong>Ключи в характеристиках:</strong> поле «Назначение» и «Комплектация» на Ozon
            индексируются поиском — заполняйте их развёрнуто.
          </li>
        </ul>
        <p style={styles.p}>
          Конкретный кейс: продавец ортопедических стелек не заполнил поле «Размер» и «Тип
          подъёма стопы». Карточка не появлялась в фильтрах. После заполнения — 3 недели
          и карточка вышла с 89-й позиции на 21-ю без рекламы.
        </p>

        <h2 style={styles.h2}>Шаг 4. Работа с ценой и конкурентами</h2>
        <p style={styles.p}>
          Цена — один из главных факторов конверсии. Если конкурент продаёт аналогичный
          товар на 15–20% дешевле — ваша карточка будет терять покупателей даже при
          идеальных фото и SEO.
        </p>

        <h3 style={styles.h3}>Как быстро проверить ценовую позицию</h3>
        <ol style={styles.ol}>
          <li style={styles.li}>Откройте поиск по вашему основному ключевому слову</li>
          <li style={styles.li}>Запишите цены ТОП-10 карточек (не рекламных — органических)</li>
          <li style={styles.li}>Посчитайте медиану — это рыночная цена по категории</li>
          <li style={styles.li}>Если ваша цена выше медианы на 20%+ без явного преимущества — проблема в цене</li>
        </ol>
        <p style={styles.p}>
          Важно: снижать цену в убыток — не выход. Сначала посчитайте юнит-экономику.
          Если цена уже на минимуме — значит нужно поднимать воспринимаемую ценность
          через фото и описание, а не продавать дешевле.
        </p>

        <h3 style={styles.h3}>Ценовые триггеры которые работают</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Перечёркнутая цена (скидка) — даже 5% увеличивает CTR на 10–15%</li>
          <li style={styles.li}>Цена «Х₽/шт при покупке от 2» — поднимает средний чек</li>
          <li style={styles.li}>Участие в акции маркетплейса — карточка получает специальный бейдж в листинге</li>
        </ul>

        <h2 style={styles.h2}>Шаг 5. Инструменты реанимации — акции, реклама, внешний трафик</h2>
        <p style={styles.p}>
          После того как вы устранили технические причины (SEO, фото, цену) — время дать
          карточке «разгон». Алгоритм маркетплейса учитывает динамику продаж: резкий рост
          заказов сигнализирует о популярности и поднимает карточку в поиске.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Акция маркетплейса.</strong> Участие в WB-акции или Ozon-распродаже даёт
            дополнительное продвижение в листинге. Рассчитайте цену безубыточности заранее
            — некоторые акции требуют скидки 30–40%.
          </li>
          <li style={styles.li}>
            <strong>Внутренняя реклама.</strong> Запустите рекламу на 3–5 дней с бюджетом
            3 000–5 000 ₽ — не чтобы заработать, а чтобы получить данные о CTR и конверсии
            на обновлённой карточке. Потом оцените эффект.
          </li>
          <li style={styles.li}>
            <strong>Внешний трафик.</strong> Telegram-посевы в нишевых каналах стоят от
            3 000–5 000 ₽ за публикацию. Один пост в канале про кулинарию для термокружки
            может дать 15–30 заказов за сутки — и алгоритм это заметит.
          </li>
          <li style={styles.li}>
            <strong>Сбор первых отзывов.</strong> Если у карточки 0–2 отзыва — используйте
            программу WB «Отзывы за баллы» или Ozon «Бонус за отзыв». Первые 5–10 отзывов
            увеличивают конверсию в среднем на 18–25%.
          </li>
        </ul>

        <h2 style={styles.h2}>Кейс: с 3 заказов до 47 в неделю за 12 дней</h2>
        <p style={styles.p}>
          Селлер из категории «Кухня» обратился с проблемой: деревянная разделочная доска
          с гравировкой продавалась по 2–4 штуки в неделю при хорошей марже. Анализ показал:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Показы — 1 200/неделю (мало для категории)</li>
          <li style={styles.li}>CTR — 1.3% (критически низко)</li>
          <li style={styles.li}>Конверсия — 14% (хорошо, проблема не в карточке)</li>
          <li style={styles.li}>Атрибуты «Материал», «Размер», «Назначение» — не заполнены</li>
          <li style={styles.li}>Главное фото — товар на кухонном столе, плохое освещение, конкуренты выглядят ярче</li>
        </ul>
        <p style={styles.p}>Что сделали за 2 дня:</p>
        <ol style={styles.ol}>
          <li style={styles.li}>Заполнили все атрибуты: материал «акация», размер 35×25 см, назначение «для мяса, для подачи, подарок»</li>
          <li style={styles.li}>Обновили главное фото через AI — lifestyle-сцена: доска на деревянном столе с оливками и зеленью</li>
          <li style={styles.li}>Добавили инфографику: размеры, материал, уход за доской</li>
          <li style={styles.li}>Снизили цену на 8% и участвовали в недельной акции</li>
        </ol>
        <p style={styles.p}>
          Результат на 12-й день: показы выросли до 4 800/неделю, CTR вырос до 4.1%,
          заказы — 47 штук за неделю. Карточка поднялась с 67-й позиции на 14-ю в своём кластере.
        </p>

        <h2 style={styles.h2}>Чек-лист реанимации: 20 пунктов по порядку</h2>
        <p style={styles.p}>Работайте по этому списку сверху вниз. Не перепрыгивайте через пункты.</p>

        <h3 style={styles.h3}>Диагностика (делаем первым)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Снять показы, CTR и конверсию за последние 7 и 30 дней</li>
          <li style={styles.li}>Проверить позицию карточки по 3–5 ключевым запросам вручную</li>
          <li style={styles.li}>Проверить остатки — нет ли out-of-stock по регионам</li>
          <li style={styles.li}>Проверить отсутствие штрафов и блокировок в ЛК</li>
        </ul>

        <h3 style={styles.h3}>Фото и визуал</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Открыть листинг конкурентов — как выглядит карточка среди других?</li>
          <li style={styles.li}>Заменить главное фото если CTR ниже 2%</li>
          <li style={styles.li}>Добавить слайды до 7–8 штук если их меньше</li>
          <li style={styles.li}>Добавить инфографику с ключевыми преимуществами (слайды 2–3)</li>
          <li style={styles.li}>Добавить lifestyle-кадр (товар в использовании)</li>
        </ul>

        <h3 style={styles.h3}>SEO и текст</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Переписать заголовок по формуле: Тип + Материал/Функция + Применение</li>
          <li style={styles.li}>Заполнить все незаполненные атрибуты категории</li>
          <li style={styles.li}>Расширить описание: добавить синонимы, сценарии использования</li>
          <li style={styles.li}>Проверить ключевые слова через MPStats или Wildberries Insider</li>
        </ul>

        <h3 style={styles.h3}>Цена и конкурентность</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Сравнить цену с ТОП-10 органики по основному запросу</li>
          <li style={styles.li}>Добавить перечёркнутую цену или скидку если не участвуете в акциях</li>
          <li style={styles.li}>Просчитать участие в ближайшей акции маркетплейса</li>
        </ul>

        <h3 style={styles.h3}>Отзывы и социальное доказательство</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Если меньше 5 отзывов — запустить WB «Отзывы за баллы» / Ozon «Бонус»</li>
          <li style={styles.li}>Ответить на все негативные отзывы — без защиты, с решением</li>
        </ul>

        <h3 style={styles.h3}>Дополнительный разгон</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Запустить трафаретную рекламу на 5 дней для сбора данных о CTR</li>
          <li style={styles.li}>Если есть Telegram-канал — опубликовать пост с прямой ссылкой на карточку</li>
        </ul>

        <h2 style={styles.h2}>Сколько ждать результата</h2>
        <p style={styles.p}>
          Алгоритмы WB и Ozon обновляют позиции с разной скоростью. После правок ждите:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Смена фото</strong> — CTR меняется сразу, позиции реагируют через 3–5 дней</li>
          <li style={styles.li}><strong>SEO-правки</strong> — переиндексация занимает 5–14 дней на WB, 3–7 на Ozon</li>
          <li style={styles.li}><strong>Акция + реклама</strong> — рост заказов в течение суток, эффект на позиции через 7–10 дней</li>
        </ul>
        <p style={styles.p}>
          Не меняйте всё сразу хаотично — тогда вы не поймёте что именно сработало.
          Идеальная последовательность: сначала SEO и атрибуты, через 5 дней оцениваем
          показы. Потом фото — оцениваем CTR. Потом цена и акции — оцениваем конверсию.
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "24px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#5b21b6" }}>
            Обновите фото за 2 минуты — без фотографа
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
            Загрузите фото товара в <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> — AI создаст lifestyle-сцены,
            инфографику и готовые кадры 900×1200 для WB и Ozon. 13 кредитов бесплатно на старте.
            Один кадр стоит от 15 ₽.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              padding: "12px 24px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li>
            <Link href="/blog/audit-kartochki-tovara" style={{ color: "#7c3aed" }}>
              Аудит карточки товара за 30 минут: 7 блоков и 25 пунктов
            </Link>
          </li>
          <li>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              8 правил главного фото карточки — как поднять CTR
            </Link>
          </li>
          <li>
            <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
              SEO для карточки Wildberries: пошаговый гайд 2026
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
