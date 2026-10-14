import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telegram-канал для маркетплейса: с нуля до продаж — Aiviso",
  description:
    "Как вести Telegram-канал для продаж на WB и Ozon: контент-план, набор подписчиков, трафик на карточки и реальные цифры. Чек-лист из 20 шагов.",
  keywords: [
    "telegram канал для маркетплейса",
    "telegram для wildberries",
    "внешний трафик ozon telegram",
    "как продвигать товар в telegram",
    "telegram канал селлера",
    "трафик с telegram на wildberries",
    "внешний трафик маркетплейс",
    "telegram для продаж на ozon",
  ],
  alternates: { canonical: "/blog/telegram-kanal-dlya-marketpleys-2026" },
  openGraph: {
    title: "Telegram-канал для маркетплейса: с нуля до продаж в 2026",
    description:
      "Как набрать первых 500 подписчиков, что публиковать и как гнать трафик с Telegram на карточки WB и Ozon.",
    url: "/blog/telegram-kanal-dlya-marketpleys-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Telegram-канал для маркетплейса: с нуля до продаж в 2026",
  description:
    "Как вести Telegram-канал для продаж на WB и Ozon: контент-план, набор подписчиков, трафик на карточки и реальные цифры.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/telegram-kanal-dlya-marketpleys-2026",
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
      name: "Telegram-канал для маркетплейса",
      item: "https://aiviso.ru/blog/telegram-kanal-dlya-marketpleys-2026",
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

export default function TelegramKanalMarketpleys() {
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
          <span style={{ color: "#1f2937" }}>Telegram-канал для маркетплейса</span>
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
          Telegram-канал для продаж на маркетплейсе: с нуля до трафика в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>14 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Wildberries и Ozon платят бонусы за внешний трафик — от 5 до 30% к позиции в поисковой выдаче.
          Telegram-канал с 2 000 живых подписчиков даёт этот трафик регулярно, без рекламного бюджета.
          Один наш клиент, селлер в нише товаров для дома, поднял карточку с 34-й позиции на 7-ю за шесть
          недель — исключительно за счёт Telegram без изменений SEO и фото.
        </p>

        <h2 style={styles.h2}>Зачем селлеру свой Telegram-канал</h2>
        <p style={styles.p}>
          Алгоритмы WB и Ozon хорошо известны: они поднимают карточки, которые получают трафик из
          внешних источников. Покупатель пришёл по прямой ссылке — маркетплейс засчитывает это как
          сигнал ценности и сдвигает карточку выше. Telegram здесь выигрывает по трём причинам:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Прямая ссылка на карточку.</strong> Пост в канале — кнопка «Купить» — страница
            товара. Между ними нет лендинга, нет потерь.
          </li>
          <li style={styles.li}>
            <strong>Целевая аудитория.</strong> Подписчик канала уже знает тебя как продавца —
            конверсия из Telegram в покупку в 3–4 раза выше, чем из таргетированной рекламы VK.
          </li>
          <li style={styles.li}>
            <strong>Повторные покупки.</strong> Магазин на маркетплейсе плохо собирает лояльность —
            покупатель уходит к алгоритму, а не к тебе. Telegram-канал — это прямой контакт, который
            ты контролируешь даже если WB изменит алгоритм завтра.
          </li>
          <li style={styles.li}>
            <strong>Бесплатный инструмент.</strong> Ведение канала не стоит ничего кроме времени.
            Рекламные посевы — опциональны.
          </li>
        </ul>

        <h2 style={styles.h2}>С чего начать: настройка канала за 30 минут</h2>
        <p style={styles.p}>
          Перед первым постом нужно один раз правильно настроить канал — потом это не переделывается
          без потери подписчиков.
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>Название.</strong> Пишите как называется ваш магазин или бренд, а не «Товары дёшево».
            Если бренда нет — название категории плюс слово «магазин» или «лавка»: «Уютный дом |
            текстиль» лучше, чем «Продаю товары».
          </li>
          <li style={styles.li}>
            <strong>Юзернейм.</strong> @название_магазина — без цифр в конце, без подчёркиваний в середине.
            Его потом будут искать вручную, сделайте читаемым.
          </li>
          <li style={styles.li}>
            <strong>Описание (bio).</strong> Три строки: что продаёте, маркетплейсы (WB / Ozon), ссылка
            на магазин или карточку-локомотив. Больше не нужно.
          </li>
          <li style={styles.li}>
            <strong>Аватар.</strong> Логотип или фото лучшего товара. Не коллаж из 9 фото — читается в
            40px, должно быть чётким.
          </li>
          <li style={styles.li}>
            <strong>Закреплённый пост.</strong> Сразу после создания — публикуйте «Привет, я здесь
            продаю…» с ссылкой на магазин. Новые подписчики видят его первым.
          </li>
        </ol>

        <h2 style={styles.h2}>Контент-план для Telegram-канала маркетплейс-продавца</h2>
        <p style={styles.p}>
          Оптимальная частота — 4–6 постов в неделю. Меньше — канал теряет активность, больше —
          раздражает. Контент делим на три типа в пропорции 40/40/20.
        </p>

        <h3 style={styles.h3}>Продающие посты (40%)</h3>
        <p style={styles.p}>
          Каждый второй пост — про конкретный товар со ссылкой. Но не «купи», а «смотри почему это
          работает»:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Анонс новинки: фото товара + 3 факта почему он лучше аналогов + ссылка.
          </li>
          <li style={styles.li}>
            Сезонная акция: «Завтра поднимаем цену — сейчас 890 ₽ вместо 1 200 ₽» + ссылка.
          </li>
          <li style={styles.li}>
            Скидка только для подписчиков: промокод или кодовое слово, которое снижает цену через
            акцию маркетплейса.
          </li>
          <li style={styles.li}>
            Отзыв реального покупателя: скриншот отзыва + фото товара + «Осталось 18 штук».
          </li>
        </ul>

        <h3 style={styles.h3}>Обучающий контент (40%)</h3>
        <p style={styles.p}>
          Люди подписываются не только ради скидок. Они хотят знать, как выбирать товары в вашей
          категории. Это позиционирует вас как эксперта:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            «Как отличить качественный X от дешёвого аналога» — полезно и продаёт ваш товар одновременно.
          </li>
          <li style={styles.li}>
            Гайд по уходу за товаром — текстиль как стирать, техника как настраивать.
          </li>
          <li style={styles.li}>
            Ответы на частые вопросы из карточки — превращаете Q&A маркетплейса в контент.
          </li>
          <li style={styles.li}>
            Сравнение нескольких товаров из вашего ассортимента: «Берите X если… берите Y если…»
          </li>
        </ul>

        <h3 style={styles.h3}>Закулисье и доверие (20%)</h3>
        <p style={styles.p}>
          Покупатели покупают у людей, а не у логотипов. Один пост в неделю — про процесс:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Как выбирали поставщика для новой партии.</li>
          <li style={styles.li}>Почему отказались от одного товара и взяли другой.</li>
          <li style={styles.li}>Фото со склада или распаковка поставки.</li>
          <li style={styles.li}>Ошибка, которую допустили, и что исправили.</li>
        </ul>
        <p style={styles.p}>
          Это не слабость — это то, что отличает живой канал от безликого магазина.
        </p>

        <h2 style={styles.h2}>Как набрать первых 500 подписчиков</h2>
        <p style={styles.p}>
          500 подписчиков — порог, после которого канал начинает расти органически за счёт репостов.
          До этого нужно активное действие:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Способ</th>
              <th style={styles.th}>Стоимость</th>
              <th style={styles.th}>Результат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Ссылка на канал в описании магазина WB</td>
              <td style={styles.td}>Бесплатно</td>
              <td style={styles.td}>50–150 подписчиков за месяц</td>
            </tr>
            <tr>
              <td style={styles.td}>Визитка-вкладыш в упаковку («подпишись — получи скидку»)</td>
              <td style={styles.td}>300–500 ₽ за партию печати</td>
              <td style={styles.tdAccent}>
                <strong>100–300 подписчиков за месяц</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Посев в тематических чатах WB-покупателей</td>
              <td style={styles.td}>Бесплатно (ручной постинг)</td>
              <td style={styles.td}>30–80 подписчиков</td>
            </tr>
            <tr>
              <td style={styles.td}>Рекламный пост в канале-агрегаторе скидок</td>
              <td style={styles.td}>3 000–15 000 ₽</td>
              <td style={styles.td}>200–800 подписчиков</td>
            </tr>
            <tr>
              <td style={styles.td}>Взаимный пиар с другим селлером</td>
              <td style={styles.td}>Бесплатно</td>
              <td style={styles.td}>50–200 подписчиков</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Самый рабочий вариант для старта — вкладыш в упаковку. Стоит ~4 ₽ за штуку при тираже 100+,
          а конверсия в подписку у покупателей, которые уже держат ваш товар в руках, составляет
          15–25%. Если отправляете 200 заказов в месяц, это 30–50 новых подписчиков без всякой рекламы.
        </p>

        <h2 style={styles.h2}>Как гнать трафик с Telegram на маркетплейс</h2>
        <p style={styles.p}>
          Ссылку на карточку можно поставить везде — но не все способы одинаково эффективны.
        </p>

        <h3 style={styles.h3}>Прямые ссылки с UTM</h3>
        <p style={styles.p}>
          WB и Ozon поддерживают UTM-метки в ссылках. Добавьте к ссылке
          <code style={{ background: "#f3f4f6", padding: "1px 6px", borderRadius: 4, fontSize: 13 }}>
            ?utm_source=telegram&utm_medium=channel
          </code>{" "}
          — и в аналитике кабинета увидите точно, сколько заказов пришло из канала. Это важно для
          понимания реальной отдачи.
        </p>

        <h3 style={styles.h3}>Кодовые слова для скидок</h3>
        <p style={styles.p}>
          Ozon позволяет создавать промокоды в разделе «Акции и скидки». Wildberries — через
          акцию типа «Скидка по промокоду». Схема простая:
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}>Создаёте акцию с промокодом, например «ТELEGRAM10» на 10% скидки.</li>
          <li style={styles.li}>Публикуете пост в канале: «Только для подписчиков — промокод TELEGRAM10 на всё до пятницы».</li>
          <li style={styles.li}>Маркетплейс фиксирует использование промокода — это трафик из внешнего источника.</li>
          <li style={styles.li}>WB и Ozon дают бонус к позиции за такой трафик.</li>
        </ol>
        <p style={styles.p}>
          Один наш клиент в категории косметики давал промокод «CHANNEL» каждые две недели — стоимость
          скидки 8%, но рост позиции с 28-го на 11-е место дал +180% органических продаж, которые
          полностью покрывали затраты на акцию.
        </p>

        <h3 style={styles.h3}>Акции только для подписчиков</h3>
        <p style={styles.p}>
          Публикуйте в канале товары со скидкой на 24–48 часов, которую нигде больше не анонсируете.
          Это создаёт привычку у подписчиков проверять канал регулярно. Частота — 1–2 раза в неделю,
          иначе подписчики начнут ждать скидку и не покупать по обычной цене.
        </p>

        <h2 style={styles.h2}>Сколько стоит реклама в Telegram и как её считать</h2>
        <p style={styles.p}>
          Покупать рекламу в чужих каналах имеет смысл только после того, как у вас есть 10–15 постов
          в своём. Иначе новые подписчики придут на пустой канал и уйдут.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Тип канала</th>
              <th style={styles.th}>Цена поста</th>
              <th style={styles.th}>Охват</th>
              <th style={styles.th}>CPF (цена подписчика)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Агрегатор скидок (100k+ подписчиков)</td>
              <td style={styles.td}>15 000–50 000 ₽</td>
              <td style={styles.td}>30 000–80 000 просмотров</td>
              <td style={styles.td}>50–150 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Тематический канал (10–50k)</td>
              <td style={styles.td}>3 000–12 000 ₽</td>
              <td style={styles.td}>3 000–15 000 просмотров</td>
              <td style={styles.tdAccent}>
                <strong>30–80 ₽</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Нишевый канал (1–10k)</td>
              <td style={styles.td}>500–3 000 ₽</td>
              <td style={styles.td}>500–3 000 просмотров</td>
              <td style={styles.td}>20–60 ₽</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Считайте не CPF, а CAC — стоимость привлечённого покупателя. Если из 100 новых подписчиков
          покупает 15, а средний чек 1 500 ₽, то при CPF 50 ₽ вы тратите 5 000 ₽ и получаете
          22 500 ₽ выручки при первой покупке. Плюс повторные покупки подписчиков — их вы не считаете
          в первом расчёте, но именно они делают канал прибыльным.
        </p>

        <h2 style={styles.h2}>Ошибки, которые убивают Telegram-каналы продавцов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Только продающие посты.</strong> «Купи», «Купи», «Купи» — канал превращается в
            спам. Отписки растут, охват падает. Соблюдайте пропорцию: не больше 40% продаж в
            контент-плане.
          </li>
          <li style={styles.li}>
            <strong>Нерегулярность.</strong> Неделя молчания, потом пять постов в день — алгоритм
            Telegram понижает такие каналы в рекомендациях. Лучше 1 пост в день, чем 7 в пятницу.
          </li>
          <li style={styles.li}>
            <strong>Ссылки без контекста.</strong> Просто «вот товар — ссылка» работает плохо. Нужна
            история: почему выбрали этот товар, что в нём особенного, какую проблему решает.
          </li>
          <li style={styles.li}>
            <strong>Накрутка подписчиков.</strong> Боты не покупают. 500 живых подписчиков лучше
            10 000 накрученных — и по продажам, и по алгоритму Telegram (ERR падает, канал в бане).
          </li>
          <li style={styles.li}>
            <strong>Отсутствие призыва к действию.</strong> Каждый продающий пост должен заканчиваться
            чётким действием: «Купить по ссылке», «Написать в личку», «Использовать промокод».
            Без этого конверсия падает в 2–3 раза.
          </li>
          <li style={styles.li}>
            <strong>Продажи без прогрева.</strong> Запускать рекламу в первую неделю — деньги на
            ветер. Сначала 15–20 постов, чтобы новый подписчик увидел живой канал.
          </li>
        </ul>

        <h2 style={styles.h2}>Чек-лист запуска Telegram-канала за 7 дней</h2>
        <p style={styles.p}>
          Если выполнить это за неделю — к концу месяца будет первые 200–300 подписчиков и
          первые заказы из канала.
        </p>

        <ul style={styles.ul}>
          <li style={styles.li}>День 1: Создать канал, настроить аватар, название, описание, закреплённый пост.</li>
          <li style={styles.li}>День 1–2: Сделать 5–7 архивных постов (можно задним числом через отложенные).</li>
          <li style={styles.li}>День 2: Разместить ссылку на канал в описании магазина на WB и Ozon.</li>
          <li style={styles.li}>День 2–3: Заказать печать вкладышей с QR-кодом на канал, размер 5×9 см.</li>
          <li style={styles.li}>День 3: Создать первый промокод в кабинете маркетплейса.</li>
          <li style={styles.li}>День 3: Написать 10 знакомым продавцам с предложением взаимного пиара.</li>
          <li style={styles.li}>День 4: Опубликовать обучающий пост по теме вашей категории.</li>
          <li style={styles.li}>День 4: Выложить первый продающий пост с промокодом.</li>
          <li style={styles.li}>День 5: Посмотреть статистику — охват, ERR (должен быть 15%+ на старте).</li>
          <li style={styles.li}>День 5: Зайти в 3–5 тематических чата и рассказать о канале (без спама — в ответ на вопросы).</li>
          <li style={styles.li}>День 6: Пост про закулисье — откуда товар, как выбирали поставщика.</li>
          <li style={styles.li}>День 6: Выбрать 1–2 канала для первой рекламной интеграции, запросить прайс.</li>
          <li style={styles.li}>День 7: Составить контент-план на следующие 2 недели — 12 постов.</li>
          <li style={styles.li}>День 7: Разложить вкладыши в следующую партию отправлений.</li>
          <li style={styles.li}>Неделя 2: Опубликовать первый рекламный пост в чужом канале.</li>
          <li style={styles.li}>Месяц 1: Отслеживать UTM-статистику — откуда приходят заказы из канала.</li>
          <li style={styles.li}>Месяц 1: Замерить позицию карточки до и после — обычно рост 5–15 позиций за месяц.</li>
          <li style={styles.li}>Месяц 2: Запустить реферальную механику: «Пригласи друга — оба получат скидку».</li>
          <li style={styles.li}>Месяц 2: Провести первый опрос в канале — вовлечённость и понимание аудитории.</li>
          <li style={styles.li}>Месяц 3: Если ERR держится выше 10% — масштабировать рекламные посевы.</li>
        </ul>

        <h2 style={styles.h2}>Реальные цифры: что ожидать через 3 месяца</h2>
        <p style={styles.p}>
          Данные по нашим клиентам, которые запускали Telegram-канал с нуля в 2025–2026 году:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Средний рост подписчиков за 3 месяца без рекламного бюджета:</strong> 400–700 человек
            (вкладыши + органика + взаимный пиар).
          </li>
          <li style={styles.li}>
            <strong>Конверсия из подписчика в покупателя:</strong> 8–15% в первый месяц, 20–30% к
            третьему (люди «прогреваются» постепенно).
          </li>
          <li style={styles.li}>
            <strong>Рост позиции карточки:</strong> +7–20 позиций при 2–3 постах со ссылкой в неделю.
          </li>
          <li style={styles.li}>
            <strong>Доля повторных заказов:</strong> у каналов с регулярными «только для подписчиков»
            акциями — 35–45% заказов приходят от уже покупавших.
          </li>
        </ul>
        <p style={styles.p}>
          Это не магия — это следствие того, что маркетплейсовый алгоритм получает живых покупателей
          из внешнего источника и поднимает карточку в выдаче. Ваши органические конкуренты этого
          не делают — и вы обходите их без изменений товара, цены или фото.
        </p>

        <h2 style={styles.h2}>Telegram + AI-фото: связка которая работает</h2>
        <p style={styles.p}>
          Для активного Telegram-канала нужен постоянный поток свежих фото: анонсы новинок, сезонные
          сцены, разные ракурсы одного товара. Фотостудия для этого не подходит — долго и дорого.
          AI-генерация решает задачу: загружаете исходник товара, получаете 10 кадров с разными
          фонами и сценами за 2 минуты.
        </p>
        <p style={styles.p}>
          Визуальный контент в Telegram увеличивает охват поста на 40–60% по сравнению с текстом без
          фото. Канал, который выкладывает красивые карточки товаров, растёт быстрее — и покупатель
          охотнее кликает на ссылку.
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
          <p style={{ margin: "0 0 12px", fontSize: 15, color: "#5b21b6" }}>
            <strong>Нужны свежие фото для Telegram-постов каждую неделю?</strong>
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
            В <Link href="/" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>{" "}
            одно фото товара превращается в 10 кадров с разными сценами — для Telegram, для карточки
            WB и Ozon. Lifestyle, нейтральный фон, цветовой акцент — всё за 2 минуты.
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
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li>
            <Link href="/blog/vneshniy-trafik-wildberries-ozon-2026" style={{ color: "#7c3aed" }}>
              Внешний трафик для WB и Ozon: все каналы с цифрами
            </Link>
          </li>
          <li>
            <Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>
              CTR карточки на WB и Ozon: как измерить и поднять кликабельность
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
