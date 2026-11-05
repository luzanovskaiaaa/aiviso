import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Промокоды на Wildberries и Ozon: как создать и поднять продажи — Aiviso",
  description: "Как создать промокод на WB и Ozon, раздать покупателям и не уйти в минус. Расчёт экономики, механики раздачи и чек-лист из 14 пунктов.",
  keywords: [
    "промокод wildberries",
    "промокод ozon",
    "как создать промокод wb",
    "скидочный купон ozon",
    "промокод для покупателей маркетплейс",
    "как раздать промокод селлеру",
    "промокод в telegram канале",
    "скидка через промокод wb",
  ],
  alternates: { canonical: "/blog/promokody-wb-ozon" },
  openGraph: {
    title: "Промокоды на Wildberries и Ozon: как создать и поднять продажи",
    description: "Как создать промокод на WB и Ozon, раздать покупателям и не уйти в минус. Расчёт экономики, механики раздачи и чек-лист.",
    url: "/blog/promokody-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Промокоды на Wildberries и Ozon: как создать, раздать и поднять продажи",
  description: "Как создать промокод на WB и Ozon, раздать покупателям и не уйти в минус. Расчёт экономики, механики раздачи и чек-лист из 14 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/promokody-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Промокоды на WB и Ozon", item: "https://aiviso.ru/blog/promokody-wb-ozon" },
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

export default function PromokodiWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Промокоды на WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Промокоды на Wildberries и Ozon: как создать, раздать и не уйти в минус
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>5 ноября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Промокод — один из немногих легальных инструментов маркетплейса, который позволяет
          самому управлять скидкой: не через акцию WB, которая срезает 50% маржи, а точечно —
          нужному сегменту покупателей, в нужный момент. Разбираем, как это работает на WB
          и Ozon с реальными цифрами.
        </p>

        <h2 style={styles.h2}>Что такое промокоды на маркетплейсах и зачем они нужны</h2>
        <p style={styles.p}>
          Промокод на Wildberries и Ozon — это буквенно-цифровой код, который покупатель вводит
          при оформлении заказа и получает скидку на товар конкретного продавца. В отличие от
          участия в акции маркетплейса, промокод создаёт сам селлер: он задаёт размер скидки,
          срок действия и лимит использований.
        </p>
        <p style={styles.p}>
          Зачем это нужно? Четыре конкретных сценария:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Внешний трафик.</strong> Вы делаете посев в Telegram-каналах или у блогера — промокод отслеживает конверсию и даёт покупателю мотивацию купить сейчас, а не «потом».</li>
          <li style={styles.li}><strong>Вкладыши в упаковку.</strong> Покупатель получает код на следующий заказ — это самый дешёвый способ получить повторную покупку.</li>
          <li style={styles.li}><strong>Запуск нового товара.</strong> Первые 50–100 заказов получают скидку 15% — разгон позиций без участия в массовых акциях маркетплейса.</li>
          <li style={styles.li}><strong>Удержание покупателя от ухода к конкуренту.</strong> Пользователь лайкнул товар, но не купил три дня — промокод в письме (Ozon) или через внешний канал возвращает его.</li>
        </ul>

        <h2 style={styles.h2}>Как создать промокод на Wildberries</h2>
        <p style={styles.p}>
          WB называет инструмент «персональными промокодами» — он доступен в личном кабинете
          продавца в разделе <strong>«Акции → Промокоды»</strong>.
        </p>

        <h3 style={styles.h3}>Шаги создания промокода на WB</h3>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>Перейдите в раздел <strong>Маркетинг → Промокоды</strong> в личном кабинете WB Партнёров.</li>
          <li style={styles.li}>Нажмите «Создать промокод».</li>
          <li style={styles.li}>Введите код — от 4 до 20 символов, только латиница и цифры. Лучше делать читаемым: <strong>LETO2026</strong>, <strong>NEWCLIENT</strong>.</li>
          <li style={styles.li}>Укажите процент скидки (от 1% до 99%). Маркетплейс скидку вычитает из суммы, которую перечисляет вам — не из своей комиссии.</li>
          <li style={styles.li}>Задайте период действия и лимит использований. Если лимит не нужен — поставьте 9999.</li>
          <li style={styles.li}>Выберите товары, на которые распространяется код, или оставьте «Весь каталог».</li>
          <li style={styles.li}>Сохраните и активируйте промокод.</li>
        </ol>

        <div style={{ background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 12, padding: "16px 20px", margin: "20px 0" }}>
          <p style={{ margin: 0, fontSize: 14, color: "#92400e" }}>
            <strong>Важно:</strong> WB иногда ограничивает промокоды для товаров, которые и так участвуют
            в акции маркетплейса. Если кнопка «Создать» неактивна для конкретной позиции — снимите
            товар с текущей акции WB или создайте промокод на весь магазин.
          </p>
        </div>

        <h2 style={styles.h2}>Как создать промокод на Ozon</h2>
        <p style={styles.p}>
          На Ozon механика называется <strong>«купоны»</strong> и работает несколько иначе —
          здесь купон привязывается к конкретной группе товаров или всему магазину, а покупатель
          видит его в корзине или получает по ссылке.
        </p>

        <h3 style={styles.h3}>Шаги создания купона на Ozon</h3>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>В кабинете Ozon Seller откройте <strong>Продвижение → Купоны</strong>.</li>
          <li style={styles.li}>Нажмите «Создать купон».</li>
          <li style={styles.li}>Введите название (внутреннее — покупатель не видит) и код купона.</li>
          <li style={styles.li}>Выберите тип скидки: процент или фиксированная сумма. Фикс лучше работает для товаров до 1 000 ₽ («-150 ₽ от 500 ₽»), процент — для дорогих.</li>
          <li style={styles.li}>Укажите минимальную сумму заказа, если нужно (например, купон работает только от 800 ₽ — снижает риск применения на случайно купленную мелочь).</li>
          <li style={styles.li}>Добавьте товары и активируйте.</li>
        </ol>
        <p style={styles.p}>
          Ozon также даёт возможность выдать купон через <strong>«Баллы за отзыв»</strong> —
          покупатель оставляет отзыв и автоматически получает купон на следующую покупку у вас.
          Это легальный инструмент для роста рейтинга, который часто обходят стороной.
        </p>

        <h2 style={styles.h2}>Экономика промокода: как не уйти в минус</h2>
        <p style={styles.p}>
          Главная ошибка — создать промокод на 20% не посчитав маржу. Если юнит-экономика даёт
          18% чистой прибыли, промокод на 20% приведёт к убытку с каждого заказа.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Показатель</th>
              <th style={styles.th}>Пример: кружка 850 ₽</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Цена продажи</td>
              <td style={styles.td}>850 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Комиссия WB (15%)</td>
              <td style={styles.td}>−127 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Логистика</td>
              <td style={styles.td}>−95 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Себестоимость</td>
              <td style={styles.td}>−380 ₽</td>
            </tr>
            <tr>
              <td style={styles.td}>Прибыль без промокода</td>
              <td style={styles.td}>248 ₽ (29%)</td>
            </tr>
            <tr>
              <td style={styles.tdAccent}>Промокод 10%</td>
              <td style={styles.tdAccent}>−85 ₽ → прибыль 163 ₽ (19%) — приемлемо</td>
            </tr>
            <tr>
              <td style={styles.td}>Промокод 20%</td>
              <td style={styles.td}>−170 ₽ → прибыль 78 ₽ (9%) — почти ноль</td>
            </tr>
            <tr>
              <td style={styles.td}>Промокод 30%</td>
              <td style={styles.td}>−255 ₽ → убыток −7 ₽ — нельзя</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Правило: <strong>размер промокода не должен превышать 60–70% от вашей фактической маржи.</strong>
          Если маржа 25%, промокод максимум 15%. Оставшиеся 10% — буфер на случай,
          если вырастет логистика или цена закупки.
        </p>

        <h2 style={styles.h2}>Механики раздачи промокодов</h2>

        <h3 style={styles.h3}>1. Вкладыш в упаковку</h3>
        <p style={styles.p}>
          Самый дешёвый канал. Печать одного вкладыша 10×7 см стоит 3–5 ₽. На нём — код на
          следующую покупку и короткий текст: «Код REPEAT10 даёт −10% на следующий заказ до
          15 декабря». Один из наших клиентов в категории посуды получил 23% повторных заказов
          через вкладыши за 2 месяца — до этого показатель был 6%.
        </p>

        <h3 style={styles.h3}>2. Telegram-канал магазина</h3>
        <p style={styles.p}>
          Если у вас есть канал, промокод — один из лучших поводов для поста: «Только сегодня
          код <strong>NOV500</strong> на −15%». Это повышает вовлечённость подписчиков и даёт
          измеримый результат — видно сколько раз применили. Даже небольшой канал на 300–500
          подписчиков при правильной механике даёт 30–50 заказов с одного поста.
        </p>

        <h3 style={styles.h3}>3. Посевы у блогеров</h3>
        <p style={styles.p}>
          Уникальный код для каждого блогера (MASHA15, OLGA15) позволяет точно считать
          конверсию из каждого канала. Вы платите блогеру за охват, промокод показывает,
          сколько из охвата стало реальными покупателями. Без уникального кода вы не узнаете,
          кто принёс результат — деньги уходят в пустоту.
        </p>

        <h3 style={styles.h3}>4. Email-рассылка через Ozon</h3>
        <p style={styles.p}>
          Ozon даёт инструмент рассылки купонов покупателям, которые добавили ваш товар
          в «Избранное» или смотрели карточку. Это тёплая аудитория — они уже знакомы с
          товаром, нужен лишь повод нажать «Купить». Конверсия таких рассылок обычно 8–15%,
          что в несколько раз выше холодного трафика.
        </p>

        <h3 style={styles.h3}>5. QR-код на упаковке</h3>
        <p style={styles.p}>
          QR-код ведёт на страницу с промокодом и инструкцией по применению. Плюс — работает
          не только для следующей покупки, но и для подписки на Telegram-канал или отзыва.
          Такая механика совмещает несколько целей в одном касании с покупателем.
        </p>

        <h2 style={styles.h2}>Когда промокод работает, а когда нет</h2>
        <p style={styles.p}>Промокод хорошо работает если:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Есть внешний трафик (Telegram, блогеры, реклама) — промокод конвертирует его в заказы</li>
          <li style={styles.li}>Вы запускаете новый товар и хотите ускорить первые заказы</li>
          <li style={styles.li}>Высокий LTV категории — покупатели возвращаются (косметика, питание, расходники)</li>
          <li style={styles.li}>Есть упаковка с вкладышем — встроенный канал раздачи без затрат</li>
        </ul>
        <p style={styles.p}>Промокод <strong>не поможет</strong> если:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Нет канала раздачи — промокод просто существует, никто о нём не знает</li>
          <li style={styles.li}>Маржа слишком мала — любая скидка уводит в убыток</li>
          <li style={styles.li}>Категория с разовыми покупками (мебель, крупная техника) — повторный заказ маловероятен</li>
          <li style={styles.li}>Карточка плохо оформлена — промокод не компенсирует слабое фото и описание</li>
        </ul>

        <h2 style={styles.h2}>7 ошибок с промокодами</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Не считают экономику.</strong> Запускают промокод на 25% при марже 20% и удивляются убыткам.</li>
          <li style={styles.li}><strong>Один код на всех.</strong> Не могут понять, откуда пришли покупатели — деньги на рекламу потрачены, результат неизвестен.</li>
          <li style={styles.li}><strong>Забывают про срок.</strong> Промокод без дедлайна не создаёт срочности — покупатель думает «воспользуюсь потом» и забывает.</li>
          <li style={styles.li}><strong>Слишком длинный или непонятный код.</strong> XQLM2026BEST — покупатель не запомнит и не введёт. Код должен быть коротким и читаемым.</li>
          <li style={styles.li}><strong>Создают промокод на товар в акции WB.</strong> WB блокирует применение или считает скидки накопительно — проверяйте совместимость заранее.</li>
          <li style={styles.li}><strong>Не отслеживают использования.</strong> В ЛК WB и Ozon есть статистика по промокодам — сколько раз применён, на какую сумму. Если её не смотреть, нет базы для следующего решения.</li>
          <li style={styles.li}><strong>Дают промокод всем подряд.</strong> Если код опубликовали в паблике с миллионной аудиторией, а лимит не выставили — за день могут применить тысячи раз и съесть всю маржу.</li>
        </ul>

        <h2 style={styles.h2}>Чек-лист: 14 шагов перед запуском промокода</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Посчитана юнит-экономика — знаю маржу на этот товар</li>
          <li style={styles.li}>Размер скидки не превышает 60% от маржи</li>
          <li style={styles.li}>Код короткий и читаемый (не более 10 символов)</li>
          <li style={styles.li}>Уникальный код для каждого канала раздачи</li>
          <li style={styles.li}>Установлен срок действия (дедлайн повышает конверсию)</li>
          <li style={styles.li}>Установлен лимит использований — не оставляю открытым</li>
          <li style={styles.li}>Проверил, что товар не участвует в конфликтующей акции маркетплейса</li>
          <li style={styles.li}>Есть канал раздачи (вкладыш, Telegram, блогер)</li>
          <li style={styles.li}>Написан текст для поста/вкладыша с чётким CTA</li>
          <li style={styles.li}>Включена аналитика использований в ЛК</li>
          <li style={styles.li}>Сфотографировано или подготовлено хорошее фото для поста с промокодом</li>
          <li style={styles.li}>Знаю дату окончания — поставил напоминание деактивировать</li>
          <li style={styles.li}>Карточка оформлена хорошо — промокод не поднимет продажи плохой карточки</li>
          <li style={styles.li}>Знаю цель: новые покупатели, повторные покупки или запуск товара</li>
        </ul>

        <h2 style={styles.h2}>Кейс: как промокоды помогли выйти в топ без рекламного бюджета</h2>
        <p style={styles.p}>
          Один из селлеров категории «Уход за телом» запустил новый товар — скраб для тела.
          Вместо платной рекламы на WB использовал схему: 200 вкладышей в первые заказы
          с кодом SCRUB15 (-15%, лимит 50 использований) + посев в трёх Telegram-каналах
          про уходовую косметику (общий охват 80 000, стоимость посева 4 500 ₽).
        </p>
        <p style={styles.p}>
          Результат за 3 недели: 47 использований промокода из Telegram, 31 — из вкладышей.
          78 дополнительных заказов дали карточке 94 отзыва (часть покупателей написали сами)
          и подтолкнули алгоритм вверх. Товар занял 14-е место в категории без ни одного рубля
          внутренней рекламы WB. Общие затраты — 4 500 ₽ на посев плюс вкладыши по 4 ₽ штука.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь обновить фото под промокод-кампанию за 2 минуты?</strong>
          </p>
          <p style={{ margin: 0, fontSize: 15, color: "#374151" }}>
            Новое главное фото с оффером (например, «–15% по коду SALE15») делается через{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link>
            {" "}— загружаешь фото товара, добавляешь текст, получаешь готовый слайд 900×1200 для WB и Ozon.{" "}
            <Link href="/" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробовать бесплатно</Link>
            {" "}— 13 кредитов на старте, без привязки карты.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/vkladyshi-upakovka-marketpleys" style={{ color: "#7c3aed" }}>Вкладыши в упаковку: как получить больше отзывов и поднять рейтинг</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/vneshniy-trafik-wildberries-ozon-2026" style={{ color: "#7c3aed" }}>Внешний трафик для WB и Ozon: Telegram, VK и YouTube</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/aktsii-wb-ozon" style={{ color: "#7c3aed" }}>Акции на Wildberries и Ozon: как участвовать и не уйти в минус</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
