import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Акции на Wildberries и Ozon: как участвовать и не уйти в минус — Aiviso",
  description: "Как рассчитать участие в акциях WB и Ozon без убытка. Формула минимальной цены, чек-лист из 14 пунктов и кейсы селлеров: кто заработал, кто потерял.",
  keywords: [
    "акции wildberries",
    "акции ozon",
    "распродажи на маркетплейсе",
    "как участвовать в акции wildberries",
    "участие в акции ozon",
    "скидки на wildberries",
    "как не уйти в минус на акции",
    "юнит-экономика акции",
    "черная пятница wildberries",
    "акции для селлеров",
  ],
  alternates: { canonical: "/blog/aktsii-wb-ozon" },
  openGraph: {
    title: "Акции на WB и Ozon: как участвовать и не уйти в минус",
    description: "Формула минимальной цены, чек-лист 14 пунктов и кейсы: кто заработал на акции, кто ушёл в минус.",
    url: "/blog/aktsii-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Акции на Wildberries и Ozon: как участвовать и не уйти в минус",
  description: "Как рассчитать участие в акциях WB и Ozon без убытка. Формула минимальной цены, чек-лист из 14 пунктов и реальные кейсы селлеров.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-17",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/aktsii-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Акции на WB и Ozon", item: "https://aiviso.ru/blog/aktsii-wb-ozon" },
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

export default function AktsiiWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Акции на WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Акции на Wildberries и Ozon: как участвовать и не уйти в минус
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>17 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Wildberries и Ozon проводят акции почти каждую неделю. Маркетплейсы давят на
          участников скидками до 50% — и часть селлеров действительно теряет деньги на каждой
          проданной единице. Разбираем, когда участвовать выгодно, а когда лучше отказаться,
          и как считать минимальную цену, ниже которой заходить в акцию нельзя.
        </p>

        <h2 style={styles.h2}>Почему акции — обязательная история для маркетплейса</h2>
        <p style={styles.p}>
          Алгоритмы WB и Ozon дают приоритет в поиске товарам, которые участвуют в акциях. Это не
          маркетинговый миф — это задокументированный факт: во время распродажи «11.11» или «Чёрная
          пятница» карточки со скидкой получают в среднем в 2–3 раза больше показов, чем аналогичные
          без скидки. На Ozon участники акции попадают в отдельный каталог, который дополнительно
          продвигается баннерами на главной.
        </p>
        <p style={styles.p}>
          Один из наших клиентов, селлер в категории «Посуда», во время «Большой распродажи» Ozon
          в октябре 2025 получил 4 800 заказов за 5 дней при обычном темпе 300–400 в неделю.
          Маржа на единицу упала с 38% до 22%, но из-за объёма месяц стал самым прибыльным за год.
        </p>
        <p style={styles.p}>
          Другой кейс — продавец чехлов на WB зашёл в акцию без расчёта, поставил скидку 40%,
          и при комиссии 23% + логистике + акционной скидке получил минус 4 рубля с каждой продажи.
          За 10 дней слил 78 000 рублей чистого убытка.
        </p>

        <h2 style={styles.h2}>Как устроены акции на Wildberries и Ozon: в чём разница</h2>

        <h3 style={styles.h3}>Wildberries</h3>
        <p style={styles.p}>
          WB проводит как глобальные распродажи (Чёрная пятница, День рождения WB, Новый год),
          так и еженедельные акции с пятницы по воскресенье. Участие технически добровольное, но
          в личном кабинете маркетплейс подсвечивает товары «рекомендованных участников» и понижает
          в поиске тех, кто отказывается от системных акций подряд несколько недель.
        </p>
        <p style={styles.p}>
          Размер скидки WB запрашивает от цены на момент вступления в акцию. Поэтому классическая
          схема — поднять цену за 2 недели до акции, потом снизить. Маркетплейс это видит и в
          2024 году ввёл ограничение: скидка считается от минимальной цены за последние 30 дней.
          Схему задрать-опустить стало сложнее, но всё ещё частично работает при заходе за 35+ дней.
        </p>

        <h3 style={styles.h3}>Ozon</h3>
        <p style={styles.p}>
          Ozon работает по аналогичной логике, но акции здесь структурированы чётче:
          в «Акциях» в личном кабинете всегда есть список активных кампаний с датами и требуемыми
          скидками. Ozon показывает расчётную выручку при участии — эту цифру нельзя принимать
          за прибыль, это только оборот.
        </p>
        <p style={styles.p}>
          Важный нюанс Ozon: маркетплейс может автоматически включить ваш товар в акцию, если вы
          дали «разрешение на автоприменение» в настройках. Проверьте этот пункт в кабинете —
          многие селлеры узнавали об акции уже по факту возросших заказов.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>Wildberries</th>
              <th style={styles.th}>Ozon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Частота акций</td>
              <td style={styles.td}>Еженедельные + 4–6 крупных в год</td>
              <td style={styles.td}>Постоянные кампании + 5–7 крупных</td>
            </tr>
            <tr>
              <td style={styles.td}>Минимальная скидка</td>
              <td style={styles.td}>10–30% (зависит от акции)</td>
              <td style={styles.td}>10–50% (зависит от кампании)</td>
            </tr>
            <tr>
              <td style={styles.td}>База для скидки</td>
              <td style={styles.td}>Минимальная цена за 30 дней</td>
              <td style={styles.td}>Цена на момент вступления</td>
            </tr>
            <tr>
              <td style={styles.td}>Авто-участие</td>
              <td style={styles.td}>Нет (только по согласию)</td>
              <td style={styles.tdAccent}><strong>Есть — отключить в настройках</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Буст в поиске</td>
              <td style={styles.td}>Есть</td>
              <td style={styles.td}>Есть + отдельный каталог акций</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Формула минимальной цены участия в акции</h2>
        <p style={styles.p}>
          Перед тем как соглашаться на скидку, посчитайте <strong>цену безубытка</strong> — ниже
          неё участвовать нельзя. Формула:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 14 }}>
          <strong>Цена безубытка = (Себестоимость + Логистика + Хранение) / (1 − Комиссия маркетплейса)</strong>
        </div>
        <p style={styles.p}>Пример для носков на WB:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Себестоимость: 80 ₽</li>
          <li style={styles.li}>Логистика (доставка до покупателя + обратная): 80 ₽</li>
          <li style={styles.li}>Хранение (в пересчёте на единицу): 8 ₽</li>
          <li style={styles.li}>Комиссия WB в категории «Носки»: 23%</li>
          <li style={styles.li}><strong>Цена безубытка = (80 + 80 + 8) / (1 − 0.23) = 168 / 0.77 ≈ 218 ₽</strong></li>
        </ul>
        <p style={styles.p}>
          Если WB просит скидку 30% с текущей цены 280 ₽, акционная цена = 196 ₽.
          196 &lt; 218 — участвовать нельзя, каждая продажа приносит убыток.
        </p>
        <p style={styles.p}>
          Если хотите сохранить минимальную маржу 15%, добавьте её в числитель:
          <strong> (168 × 1.15) / 0.77 ≈ 251 ₽</strong> — минимальная «живая» цена.
        </p>

        <h2 style={styles.h2}>Чек-лист перед участием в акции</h2>
        <p style={styles.p}>Пройдитесь по каждому пункту перед тем, как нажать «Участвовать»:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Посчитана цена безубытка по формуле выше</li>
          <li style={styles.li}>Акционная цена выше цены безубытка (хотя бы на 5–10%)</li>
          <li style={styles.li}>Проверен остаток на складе — хватит ли на весь период акции</li>
          <li style={styles.li}>Проверена скорость поставки: если склад опустеет на 3-й день, весь буст пропадёт впустую</li>
          <li style={styles.li}>Оценён риск возвратов: при высоком проценте возврата (20%+) акция может уйти в минус даже с положительной маржой</li>
          <li style={styles.li}>Фото товара обновлено и конкурентоспособно — трафик придёт, но конверсия зависит от карточки</li>
          <li style={styles.li}>Инфографика с УТП есть на первом слайде — в акционном листинге решение принимается за 1–2 секунды</li>
          <li style={styles.li}>Рейтинг товара выше 4.3 — при низком рейтинге трафик конвертирует плохо, и вы оплатите скидку без отдачи</li>
          <li style={styles.li}>Проверено автоприменение акций в настройках кабинета (особенно на Ozon)</li>
          <li style={styles.li}>Цена в других каналах не сильно выше акционной — иначе нарушите требование о паритете цен</li>
          <li style={styles.li}>Дата окончания акции не совпадает с запланированной поставкой — дефицит в конце убивает позиции</li>
          <li style={styles.li}>Настроен мониторинг продаж на период акции (кабинет или сторонний сервис)</li>
          <li style={styles.li}>Готов ответ на всплеск отзывов — объём вырастет, и плохие отзывы тоже</li>
          <li style={styles.li}>Есть запасной план выхода: если первые 2 дня идут в минус — заранее решено, когда выходить из акции</li>
        </ul>

        <h2 style={styles.h2}>Когда акция выгодна, даже если маржа упала</h2>
        <p style={styles.p}>
          Участие в акции с пониженной маржой может быть стратегически верным решением в трёх случаях:
        </p>

        <h3 style={styles.h3}>1. Выход в ТОП поиска</h3>
        <p style={styles.p}>
          После крупной акции товар может закрепиться в ТОП-30 по ключевым запросам за счёт
          накопленных продаж и отзывов. Один из наших клиентов вошёл в «Чёрную пятницу» WB
          с маржой 8%, но за 10 дней собрал 340 отзывов и с тех пор держится в ТОП-20 органики,
          зарабатывая 28% маржи без рекламы.
        </p>

        <h3 style={styles.h3}>2. Сброс зависшего остатка</h3>
        <p style={styles.p}>
          Если товар лежит на складе больше 90 дней, плата за хранение накапливается. Продать
          в ноль или даже в небольшой минус иногда выгоднее, чем платить хранение ещё 2–3 месяца.
          Считайте совокупную стоимость хранения на горизонте 60–90 дней и сравнивайте с потерей
          на акционной скидке.
        </p>

        <h3 style={styles.h3}>3. Сезонный пик с коротким окном</h3>
        <p style={styles.p}>
          Для ёлочных игрушек, школьных ранцев, купальников — товаров с коротким сезоном —
          важнее продать максимум за 4–6 недель пика, чем сохранить маржу. После сезона
          остатки либо лежат до следующего года, либо уходят в убыточные акции принудительно.
          Лучше участвовать на условиях, которые вы сами выбрали.
        </p>

        <h2 style={styles.h2}>Типичные ошибки при участии в акциях</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Считают скидку от розничной цены, а не от цены безубытка.</strong> «У меня цена
            1 000 ₽, скидка 30% — остаётся 700 ₽, явно хватит». Но при себестоимости 600 ₽ и комиссии 25%
            цена безубытка — 800 ₽. Итог: убыток 100 ₽ с каждой единицы.
          </li>
          <li style={styles.li}>
            <strong>Не учитывают обратную логистику.</strong> При 20% возвратов стоимость логистики
            на единицу фактически вырастает на 20–40%. На акции, где объём возвратов нередко выше
            обычного (покупатели берут «попробовать»), это критично.
          </li>
          <li style={styles.li}>
            <strong>Выходят на акцию с пустым складом.</strong> Заказы идут, система бронирует слоты,
            потом показывает «нет в наличии». Позиции падают, клиенты злятся, отзывы ухудшаются.
          </li>
          <li style={styles.li}>
            <strong>Используют некачественные фото в акции.</strong> Трафик вырастает в разы, но
            конверсия остаётся низкой — деньги потрачены на скидку, а продажи не выросли пропорционально.
            Перед акцией обновите главный слайд: он должен работать в условиях быстрого скролла.
          </li>
          <li style={styles.li}>
            <strong>Не следят за акцией в реальном времени.</strong> Если за первые 6 часов продаж
            меньше ожидаемого, возможно, конкуренты демпингуют сильнее. Надо реагировать — либо
            снизить цену ещё, либо выйти из акции, пока не потеряли много.
          </li>
        </ul>

        <h2 style={styles.h2}>Как карточка влияет на результат акции</h2>
        <p style={styles.p}>
          Акция приводит трафик. Карточка конвертирует его в деньги. Если карточка слабая,
          вы оплачиваете скидку и получаете показы, которые не превращаются в заказы.
        </p>
        <p style={styles.p}>
          Перед крупной акцией стоит обновить:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото — максимально чёткое, товар крупным планом, фон светлый</li>
          <li style={styles.li}>Инфографику — 3–4 ключевых УТП, читаемых с миниатюры</li>
          <li style={styles.li}>Заголовок — проверить, есть ли ключевые слова по которым идёт трафик в акции</li>
          <li style={styles.li}>Цены и акционный бейдж — убедитесь, что зачёркнутая старая цена выглядит убедительно</li>
        </ul>
        <p style={styles.p}>
          Один из клиентов Aiviso перед «Днём рождения WB» в 2025 году заменил главное фото —
          сделал AI-генерацию с lifestyle-сценой вместо белого фона. CTR вырос с 3.1% до 5.8%,
          конверсия в заказ — с 4.4% до 7.1%. При том же трафике и той же скидке прибыль
          выросла на 62% только за счёт карточки.
        </p>

        <h2 style={styles.h2}>Главные выводы</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Акции — обязательный инструмент для роста позиций на WB и Ozon, но без расчёта они уничтожают маржу</li>
          <li style={styles.li}>Всегда считайте цену безубытка до участия: (себестоимость + логистика + хранение) / (1 − комиссия)</li>
          <li style={styles.li}>На Ozon обязательно отключите автоприменение акций, если не хотите участвовать по умолчанию</li>
          <li style={styles.li}>Перед акцией обновите фото карточки — трафик вырастет, но конвертирует только сильная карточка</li>
          <li style={styles.li}>Иногда участие с нулевой маржой оправдано: выход в ТОП, сброс остатков, сезонный пик</li>
          <li style={styles.li}>Следите за продажами в реальном времени — если первые 6–12 часов не идут по плану, реагируйте</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#5b21b6" }}>
            Обновите карточку перед следующей акцией
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            AI-генерация фото в Aiviso занимает 2 минуты. Загрузите исходное фото товара —
            получите lifestyle-сцену, инфографику и готовые размеры 900×1200 для WB и Ozon.
            13 кредитов бесплатно на старте.
          </p>
          <Link
            href="/app"
            style={{ display: "inline-block", padding: "12px 24px", background: "#7c3aed", color: "white", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 15 }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ margin: "6px 0" }}><Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>Юнит-экономика для маркетплейса: формула и типичные ошибки</Link></li>
          <li style={{ margin: "6px 0" }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%: чек-лист</Link></li>
          <li style={{ margin: "6px 0" }}><Link href="/blog/prodvizhenie-kartochki-bez-reklamy" style={{ color: "#7c3aed" }}>Как продвигать карточку без рекламы</Link></li>
          <li style={{ margin: "6px 0" }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
