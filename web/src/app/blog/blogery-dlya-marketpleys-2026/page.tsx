import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блогеры для маркетплейса: как работать с инфлюенсерами в 2026 — Aiviso",
  description: "Как найти блогера для продвижения товара на WB и Ozon, договориться по цене и получить заказы. Чек-лист из 18 пунктов и кейс: +230 заказов за неделю.",
  keywords: [
    "блогеры для маркетплейса",
    "инфлюенсеры wildberries",
    "продвижение через блогеров ozon",
    "реклама у блогера wb",
    "как найти блогера для маркетплейса",
    "внешний трафик wildberries",
    "коллаборация с инфлюенсером",
    "реклама в telegram для продавца",
  ],
  alternates: { canonical: "/blog/blogery-dlya-marketpleys-2026" },
  openGraph: {
    title: "Как работать с блогерами для продвижения на маркетплейсе в 2026",
    description: "Пошаговый гайд: где найти блогера, как договориться, сколько платить и что считать. Кейс: +230 заказов за неделю без рекламного кабинета.",
    url: "/blog/blogery-dlya-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как работать с блогерами для продвижения товара на маркетплейсе в 2026",
  description: "Пошаговый гайд: где найти блогера, как договориться, сколько платить и что считать. Кейс: +230 заказов за неделю.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/blogery-dlya-marketpleys-2026",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Блогеры для маркетплейса", item: "https://aiviso.ru/blog/blogery-dlya-marketpleys-2026" },
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

export default function BlogeryDlyaMarketpleys() {
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
          <span style={{ color: "#1f2937" }}>Блогеры для маркетплейса</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как работать с блогерами для продвижения товара на маркетплейсе в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>19 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          WB и Ozon дают бонус к позициям за внешний трафик — и блогеры остаются одним из самых конверсионных каналов его привлечения. Одна интеграция у нишевого блогера с 50 000 подписчиков даёт больше заказов, чем неделя внутренней рекламы на том же бюджете. Разберём: где искать, как договариваться и как считать результат.
        </p>

        <h2 style={styles.h2}>Почему блогеры работают для маркетплейсов</h2>
        <p style={styles.p}>
          Wildberries с 2024 года начисляет дополнительные баллы к ранжированию за заказы из внешних источников. Ozon работает аналогично — карточки с трафиком из Telegram, YouTube и ВКонтакте получают буст в поиске на 72 часа после всплеска. Это делает блогерский трафик дважды выгодным: и прямые продажи, и рост органических позиций.
        </p>
        <p style={styles.p}>
          Второй момент — доверие. Человек купил у блогера, которому доверяет, а не у незнакомого продавца в листинге. Конверсия в выкуп у таких заказов выше на 12–18% по нашей статистике — покупатель понимает, что берёт, и не возвращает из-за несоответствия ожиданиям.
        </p>

        <h2 style={styles.h2}>Какие форматы существуют и сколько стоят</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Формат</th>
              <th style={styles.th}>Площадка</th>
              <th style={styles.th}>Охват (ср.)</th>
              <th style={styles.th}>Цена</th>
              <th style={styles.th}>Конверсия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Пост с промокодом</td>
              <td style={styles.td}>Telegram-канал</td>
              <td style={styles.td}>20–80% от подписчиков</td>
              <td style={styles.td}>3 000 – 30 000 ₽</td>
              <td style={styles.td}>2–6% от охвата</td>
            </tr>
            <tr>
              <td style={styles.td}>Shorts / Reels / TikTok</td>
              <td style={styles.td}>VK, YouTube</td>
              <td style={styles.td}>5 000 – 500 000 просмотров</td>
              <td style={styles.td}>5 000 – 80 000 ₽</td>
              <td style={styles.tdAccent}><strong>до 8%</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Развёрнутый обзор</td>
              <td style={styles.td}>YouTube</td>
              <td style={styles.td}>10 000 – 1 000 000 просмотров</td>
              <td style={styles.td}>15 000 – 300 000 ₽</td>
              <td style={styles.td}>1–4%</td>
            </tr>
            <tr>
              <td style={styles.td}>Сторис + ссылка на карточку</td>
              <td style={styles.td}>ВКонтакте</td>
              <td style={styles.td}>3 000 – 50 000 показов</td>
              <td style={styles.td}>2 000 – 15 000 ₽</td>
              <td style={styles.td}>1–3%</td>
            </tr>
            <tr>
              <td style={styles.td}>Бартер (товар без доплаты)</td>
              <td style={styles.td}>Любая</td>
              <td style={styles.td}>Зависит от блогера</td>
              <td style={styles.tdAccent}><strong>Себестоимость товара</strong></td>
              <td style={styles.td}>Непредсказуемо</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Самый рабочий формат для маркетплейсов — Telegram-пост с прямой ссылкой на карточку и промокодом. Читатель видит продукт, получает скидку, переходит по ссылке — и WB или Ozon фиксирует источник трафика.
        </p>

        <h2 style={styles.h2}>Как найти подходящего блогера</h2>

        <h3 style={styles.h3}>1. Нишевые каналы — ваш главный актив</h3>
        <p style={styles.p}>
          Мегаблогер с 2 миллионами подписчиков хуже нишевого с 30 000, если ваш товар — уходовая косметика или детские игрушки. У нишевого — точная аудитория, которая уже ищет ваш продукт. ДРР у нишевых блогеров в среднем 8–12% против 25–40% у широких.
        </p>
        <p style={styles.p}>Где искать нишевых блогеров:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>TGStat.ru — поиск Telegram-каналов по теме и охвату, бесплатно</li>
          <li style={styles.li}>Telemetr.info — статистика каналов, реальный охват, стоимость поста</li>
          <li style={styles.li}>ВКонтакте: поиск сообществ по ключевым словам, фильтр по числу участников</li>
          <li style={styles.li}>YouTube: поиск по ключевым словам, сортировка по числу просмотров за 6 месяцев</li>
          <li style={styles.li}>GetBlogger, Epicstars — биржи инфлюенсеров с готовыми прайсами</li>
        </ul>

        <h3 style={styles.h3}>2. Как проверить блогера перед сделкой</h3>
        <p style={styles.p}>Прежде чем платить — проверяем три вещи:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Охват vs подписчики.</strong> Нормальный охват поста в Telegram — 25–50% от числа подписчиков. Если у канала 100 000 подписчиков, а посты набирают 5 000 просмотров — накрутка.</li>
          <li style={styles.li}><strong>Вовлечённость.</strong> Лайки, комментарии, репосты — проверьте 10 последних постов. Если под каждым постом 2–3 комментария при 50 000 подписчиков — мёртвая аудитория.</li>
          <li style={styles.li}><strong>Тематическое соответствие.</strong> Блогер про путешествия не продаст детскую одежду — даже если у него 500 000 подписчиков. Нужно пересечение с вашим товаром.</li>
        </ul>

        <h2 style={styles.h2}>Как составить техническое задание для блогера</h2>
        <p style={styles.p}>
          Слабое ТЗ — главная причина провала кампании. Блогер напишет что-то общее, аудитория не купит, деньги потрачены. Хорошее ТЗ занимает один экран и содержит конкретику.
        </p>
        <p style={styles.p}>Структура ТЗ:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Продукт и его главная польза.</strong> Одно предложение: «Крем для рук с маслом ши — впитывается за 30 секунд, нет жирной плёнки». Не «качественный крем из натуральных компонентов».</li>
          <li style={styles.li}><strong>Целевое действие.</strong> Перейти по ссылке и оформить заказ. Промокод — если он есть. Прямая ссылка на карточку (не на главную WB).</li>
          <li style={styles.li}><strong>Что сказать про товар.</strong> 2–3 конкретных факта: состав, результат от использования, отличие от аналогов. Блогер адаптирует под свою аудиторию — не пишите скрипт дословно.</li>
          <li style={styles.li}><strong>Что нельзя говорить.</strong> Никаких «лечит», «избавляет от болезней», нельзя сравнивать с конкретными конкурентами по имени.</li>
          <li style={styles.li}><strong>Сроки публикации.</strong> Конкретная дата и время. Суббота 10–12 утра — лучшее окно для товарной рекламы в Telegram по статистике открываемости.</li>
          <li style={styles.li}><strong>Формат согласования.</strong> Пост присылают на проверку за 24 часа. Максимум одна правка.</li>
        </ul>

        <h2 style={styles.h2}>Как договориться о цене</h2>
        <p style={styles.p}>
          Большинство блогеров указывают прайс на сайте или в шапке профиля. Но реальная цена сделки часто на 20–40% ниже прайса — если знать, как торговаться.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Предложите несколько публикаций сразу.</strong> «Сделаем 3 поста за квартал» — скидка 25–35% к цене одного.</li>
          <li style={styles.li}><strong>Предложите бартер плюс небольшую доплату.</strong> Товар себестоимостью 800 ₽ + 2 000 ₽ деньгами — вместо 5 000 ₽ за пост.</li>
          <li style={styles.li}><strong>Оплата по результату (CPA).</strong> Небольшие каналы часто соглашаются: фиксированная цена за каждый заказ. Риск для вас ниже, блогер мотивирован продать.</li>
          <li style={styles.li}><strong>Эксклюзивность в категории.</strong> «Мы — единственный бренд X в вашем канале на 3 месяца». Это ценность — можно торговаться на скидку.</li>
        </ul>

        <h2 style={styles.h2}>Как подготовить карточку перед кампанией</h2>
        <p style={styles.p}>
          Трафик от блогера приходит через 2–6 часов после публикации. Если в этот момент ваша карточка не готова — деньги потрачены впустую. Перед запуском кампании проверьте:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото привлекательное — CTR от 3% и выше</li>
          <li style={styles.li}>Есть минимум 5–8 фото в карточке, включая lifestyle и инфографику</li>
          <li style={styles.li}>Есть хотя бы 10 отзывов со средним рейтингом 4.5+</li>
          <li style={styles.li}>Остаток на складе покрывает прогнозируемый спрос (минимум 50–100 единиц)</li>
          <li style={styles.li}>Описание отвечает на возражения, которые может поднять аудитория блогера</li>
          <li style={styles.li}>Промокод активирован и даёт скидку, которую объявит блогер</li>
        </ul>
        <p style={styles.p}>
          Слабое фото убивает конверсию даже при горячем трафике. Если карточка не готова — сначала обновите фото через{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>AI-генератор Aiviso</Link>, потом запускайте рекламу.
        </p>

        <h2 style={styles.h2}>Как считать эффективность</h2>

        <h3 style={styles.h3}>Три метрики, которые важны</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>ДРР (доля рекламных расходов).</strong> Формула: стоимость интеграции / выручка от интеграции × 100%. Норма для маркетплейса — до 15%. Если ДРР выше — интеграция убыточная на текущем масштабе.</li>
          <li style={styles.li}><strong>Позиции после кампании.</strong> Снимайте позицию по ключевым запросам за день до публикации и через 72 часа после. Если WB или Ozon дали буст — увидите рост на 5–20 строк.</li>
          <li style={styles.li}><strong>Трафик в карточку.</strong> В личном кабинете WB — раздел «Аналитика», «Воронка». Ozon — «Статистика», «Источники трафика». Смотрите всплеск в день публикации.</li>
        </ul>

        <h3 style={styles.h3}>Как отследить заказы от конкретного блогера</h3>
        <p style={styles.p}>Три способа:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Промокод.</strong> Уникальный промокод на скидку — маркетплейс учитывает его применение. Минус: не все покупают со скидкой, часть приходит органически.</li>
          <li style={styles.li}><strong>UTM-ссылка через Ozon/WB.</strong> Ozon позволяет создавать партнёрские ссылки с UTM-метками — видно, сколько переходов принёс конкретный канал. WB пока такой возможности нет напрямую.</li>
          <li style={styles.li}><strong>Всплеск продаж.</strong> Если у вас стабильно 15–20 заказов в день, а в день публикации стало 70 — разница (~50 заказов) приходится на блогера. Грубо, но работает для первичной оценки.</li>
        </ul>

        <h2 style={styles.h2}>Кейс: 230 заказов за неделю с одной интеграции</h2>
        <p style={styles.p}>
          Один из наших клиентов — продавец средств по уходу за волосами — работал только с внутренней рекламой WB с ДРР 28%. В августе 2026 года попробовал интеграцию в Telegram-канале про уход за собой (85 000 подписчиков, охват поста 22 000).
        </p>
        <p style={styles.p}>Условия сделки: 7 500 ₽ за пост + бартер (3 набора себестоимостью 1 200 ₽ каждый). Итого затраты: 11 100 ₽.</p>
        <p style={styles.p}>Результат за 7 дней после публикации:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>230 заказов по промокоду (подтверждённые), ещё около 40–60 без промокода</li>
          <li style={styles.li}>Средний чек 890 ₽, выручка от промокодных заказов — 204 700 ₽</li>
          <li style={styles.li}>ДРР интеграции: 5,4%</li>
          <li style={styles.li}>Позиция по ключевому запросу выросла с 34-й на 11-ю и держалась 3 недели</li>
        </ul>
        <p style={styles.p}>
          До этой интеграции карточка была обновлена — сделали новый главный слайд с lifestyle-фоном через Aiviso. Это критично: на старое фото конверсия была 2.1%, на новое — 4.6%. Без этого половина трафика от блогера ушла бы впустую.
        </p>

        <h2 style={styles.h2}>Чего избегать при работе с блогерами</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Не платите наперёд крупным суммам незнакомым блогерам.</strong> Первая сделка — 50% предоплата, 50% после публикации. Или через биржу с эскроу.</li>
          <li style={styles.li}><strong>Не запускайте блогера на карточку с рейтингом ниже 4.3.</strong> Горячая аудитория придёт — увидит плохие отзывы и уйдёт. Вы оплатили трафик, который конвертировался в отказы.</li>
          <li style={styles.li}><strong>Не запускайте несколько блогеров одновременно в начале.</strong> Если одновременно горит 5 интеграций, вы не поймёте, кто дал результат, а кто потратил деньги впустую. Тестируйте последовательно.</li>
          <li style={styles.li}><strong>Не игнорируйте нишевых блогеров с малым охватом.</strong> Канал про детское питание с 8 000 подписчиков продаёт детские смеси эффективнее канала про общий лайфстайл с 300 000. Аудитория решает, а не цифра подписчиков.</li>
          <li style={styles.li}><strong>Не забывайте про остатки.</strong> Один кейс: интеграция дала 400 заказов за сутки, но на складе было 60 единиц. Карточка ушла в out-of-stock, позиции рухнули. Деньги потрачены, рост аннулирован.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 18 шагов для работы с блогером</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Определить целевую аудиторию и площадку (Telegram, ВКонтакте, YouTube)</li>
          <li style={styles.li}>Найти 5–10 кандидатов через TGStat или биржи</li>
          <li style={styles.li}>Проверить охват последних 20 постов (не подписчиков)</li>
          <li style={styles.li}>Проверить вовлечённость: комментарии, репосты на последних постах</li>
          <li style={styles.li}>Убедиться в тематическом соответствии аудитории</li>
          <li style={styles.li}>Запросить прайс и медиакит</li>
          <li style={styles.li}>Уточнить: были ли уже рекламированы конкуренты</li>
          <li style={styles.li}>Согласовать формат оплаты (деньги / бартер / CPA)</li>
          <li style={styles.li}>Создать или активировать промокод на маркетплейсе</li>
          <li style={styles.li}>Написать ТЗ: польза продукта, факты, что нельзя говорить</li>
          <li style={styles.li}>Проверить карточку: фото, рейтинг, остатки на складе</li>
          <li style={styles.li}>Согласовать дату и время публикации</li>
          <li style={styles.li}>Получить черновик поста за 24 часа, дать одну правку</li>
          <li style={styles.li}>Снять базовые показатели карточки до публикации (позиции, конверсия)</li>
          <li style={styles.li}>Убедиться, что остатков достаточно для прогнозируемого спроса</li>
          <li style={styles.li}>Отслеживать всплеск трафика и заказов в день публикации</li>
          <li style={styles.li}>Снять позиции через 72 часа после публикации</li>
          <li style={styles.li}>Посчитать ДРР и решить: повторять с этим блогером или нет</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Перед запуском блогерской рекламы — обновите фото карточки.</strong>{" "}
            Горячий трафик конвертируется только если карточка готова. Попробуйте{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>AI-генератор Aiviso</Link>
            {" "}— 13 кредитов бесплатно на старте. Загрузите фото товара, получите lifestyle-слайд за 2 минуты, и только потом запускайте блогера.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 6 }}><Link href="/blog/vneshniy-trafik-wildberries-ozon-2026" style={{ color: "#7c3aed" }}>Внешний трафик для WB и Ozon: Telegram, VK и YouTube</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>CTR карточки на WB и Ozon: как поднять кликабельность</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li style={{ marginBottom: 6 }}><Link href="/" style={{ color: "#7c3aed" }}>AI-генерация фото товара — Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
