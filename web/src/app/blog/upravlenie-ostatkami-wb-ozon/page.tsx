import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Управление остатками на WB и Ozon: чек-лист — Aiviso",
  description: "Как не уйти в out-of-stock и не заморозить деньги на складе. Формула страхового запаса, сигналы тревоги и чек-лист из 15 пунктов для селлеров WB и Ozon.",
  keywords: [
    "управление остатками wildberries",
    "out-of-stock ozon",
    "страховой запас маркетплейс",
    "оборачиваемость wb",
    "индекс локализации ozon",
    "сток wildberries",
    "остатки товара маркетплейс",
    "как не потерять позиции wb",
  ],
  alternates: { canonical: "/blog/upravlenie-ostatkami-wb-ozon" },
  openGraph: {
    title: "Управление остатками на WB и Ozon: как не терять позиции",
    description: "Формула страхового запаса, сигналы для срочной поставки и чек-лист из 15 пунктов.",
    url: "/blog/upravlenie-ostatkami-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Управление остатками на WB и Ozon: как не уйти в out-of-stock и не замораживать деньги",
  description: "Как рассчитать страховой запас, когда делать поставку и что делать если ушли в ноль. Чек-лист из 15 пунктов для селлеров Wildberries и Ozon.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/upravlenie-ostatkami-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Управление остатками WB и Ozon", item: "https://aiviso.ru/blog/upravlenie-ostatkami-wb-ozon" },
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

export default function UpravljenieOstatkamiWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Управление остатками WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Управление остатками на WB и Ozon: как не уйти в out-of-stock и не заморозить деньги
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 10 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Ноль на остатках — это не просто «временно нет в наличии». Это потеря позиций, слив рекламного бюджета
          впустую и недели на восстановление органики. Разбираем, как выстроить управление стоком так, чтобы
          карточка всегда была в продаже и деньги не замерзали на складе мёртвым грузом.
        </p>

        <h2 style={styles.h2}>Почему out-of-stock — это катастрофа для позиций</h2>
        <p style={styles.p}>
          Алгоритмы Wildberries и Ozon учитывают доступность товара в режиме реального времени. Как только
          остаток уходит в ноль, карточка перестаёт показываться в поиске — сначала падает в конец листинга,
          потом исчезает совсем.
        </p>
        <p style={styles.p}>
          Один из наших клиентов в категории «Садовый инвентарь» весной 2026 попал в такую ловушку: товар
          разлетелся за три дня майских праздников, карточка ушла в ноль. За 48 часов позиция упала с 12-го
          на 89-е место в своей категории. После новой поставки восстановление заняло 19 дней и ещё
          12 000 ₽ рекламного бюджета — просто чтобы вернуться туда, где уже были.
        </p>
        <p style={styles.p}>Конкретные последствия out-of-stock:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Wildberries:</strong> позиция в поиске падает мгновенно. Алгоритм видит нулевые продажи и понижает ранжирование</li>
          <li style={styles.li}><strong>Ozon:</strong> карточка скрывается из листинга, рекламные кампании продолжают списывать бюджет за показы которых нет</li>
          <li style={styles.li}><strong>Оба маркетплейса:</strong> конкуренты занимают освободившееся место и переманивают покупателей, которые приходили именно на ваш товар</li>
          <li style={styles.li}>Отзывы с текстом «нет в наличии» или «долгая доставка» снижают рейтинг продавца</li>
        </ul>

        <h2 style={styles.h2}>Как WB и Ozon по-разному штрафуют за плохое управление стоком</h2>

        <h3 style={styles.h3}>Wildberries: оборачиваемость и платное хранение</h3>
        <p style={styles.p}>
          WB считает оборачиваемость — сколько дней уйдёт на продажу текущего остатка при текущем темпе
          продаж. Норматив: <strong>не более 60 дней</strong>. Если у вас 200 единиц товара, а продаёте вы
          по 2 в день — оборачиваемость 100 дней. WB будет начислять повышенную плату за хранение и понизит
          приоритет карточки в поиске.
        </p>
        <p style={styles.p}>
          С другой стороны, если остаток ниже 5–10 единиц, WB помечает товар как «заканчивается» и снижает
          его позицию — алгоритм считает, что скоро карточка уйдёт в ноль и перестаёт «вкладываться» в её продвижение.
        </p>

        <h3 style={styles.h3}>Ozon: индекс локализации</h3>
        <p style={styles.p}>
          Ozon дополнительно считает индекс локализации — насколько ваши товары распределены по складам в
          регионах покупателей. Чем выше индекс, тем лучше позиции в поиске и ниже стоимость доставки
          (которую Ozon компенсирует скидкой на комиссию).
        </p>
        <p style={styles.p}>
          Если товар есть только на московском складе, а покупатель из Новосибирска — Ozon покажет ваш
          товар ниже конкурентов у которых есть остаток в Сибири. Это не out-of-stock технически, но по
          эффекту почти то же самое для покупателя из другого региона.
        </p>

        <h2 style={styles.h2}>Формула страхового запаса</h2>
        <p style={styles.p}>
          Страховой запас — это количество единиц товара, которое покрывает продажи пока едет следующая партия.
          Базовая формула:
        </p>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 12, padding: "16px 20px", margin: "16px 0", fontFamily: "monospace", fontSize: 15 }}>
          Страховой запас = Средние продажи в день × (Срок производства + Срок логистики) × Коэффициент сезонности
        </div>
        <p style={styles.p}><strong>Пример расчёта для интернет-магазина аксессуаров:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Средние продажи: 8 единиц в день</li>
          <li style={styles.li}>Производство в Китае + логистика до склада WB: 45 дней</li>
          <li style={styles.li}>Коэффициент сезонности (накануне НГ): 1.8</li>
          <li style={styles.li}><strong>Страховой запас = 8 × 45 × 1.8 = 648 единиц</strong></li>
        </ul>
        <p style={styles.p}>
          Плюс к этому добавьте буфер 15–20% на случай задержки поставки или неожиданного всплеска спроса.
          Итого держите на складе не менее 750–780 единиц до момента когда следующая партия уже отгружена от поставщика.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Схема работы</th>
              <th style={styles.th}>Типичный срок пополнения</th>
              <th style={styles.th}>Рекомендуемый страховой запас (дней)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Российский поставщик + FBO</td>
              <td style={styles.td}>7–14 дней</td>
              <td style={styles.tdAccent}><strong>20–25 дней продаж</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Китай авиа + FBO</td>
              <td style={styles.td}>25–35 дней</td>
              <td style={styles.tdAccent}><strong>45–55 дней продаж</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Китай море + FBO</td>
              <td style={styles.td}>45–75 дней</td>
              <td style={styles.tdAccent}><strong>90–100 дней продаж</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>FBS (свой склад)</td>
              <td style={styles.td}>Гибко</td>
              <td style={styles.td}>10–15 дней (при наличии запасного стока)</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Сигналы тревоги: когда пора делать поставку</h2>
        <p style={styles.p}>
          Не ждите когда на складе останется 5 единиц — к тому времени будет поздно. Настройте систему
          оповещений заранее.
        </p>

        <h3 style={styles.h3}>Красный уровень — немедленное действие</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Остаток меньше 10–15 дней продаж при вашем типовом сроке пополнения</li>
          <li style={styles.li}>Продажи последних 3 дней в 1.5× выше среднего (всплеск спроса)</li>
          <li style={styles.li}>Карточка уже получила пометку «заканчивается» в ЛК WB</li>
        </ul>

        <h3 style={styles.h3}>Жёлтый уровень — запланировать поставку в течение недели</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Остаток меньше 30 дней продаж при логистике из Китая</li>
          <li style={styles.li}>Приближается сезонный пик (праздники, смена сезона) — начинайте готовиться за 2 месяца</li>
          <li style={styles.li}>Конкурент похожего товара внезапно вырос в рейтинге — вероятно, его карточка ушла в ноль и перетряхнула листинг</li>
        </ul>

        <h2 style={styles.h2}>Что делать если всё-таки ушли в ноль</h2>
        <p style={styles.p}>
          Ситуацию можно исправить, но действовать нужно быстро. Алгоритм восстановления:
        </p>
        <ol style={{ paddingLeft: 24 }}>
          <li style={styles.li}>
            <strong>Не снимайте рекламу.</strong> Парадоксально, но если есть хоть минимальный остаток
            на FBS (ваш склад) — оставьте рекламу работать. Карточка живёт, позиции чуть падают, но не обнуляются.
          </li>
          <li style={styles.li}>
            <strong>Срочно найдите альтернативный сток.</strong> У российских поставщиков попросите отгрузку
            под будущую поставку — многие соглашаются на небольшую партию с оплатой по факту.
          </li>
          <li style={styles.li}>
            <strong>Переключитесь на FBS.</strong> Если есть хоть что-то на своём складе — активируйте
            FBS-отгрузку. Даже 10–20 единиц дадут возможность карточке оставаться в продаже пока едет основная партия.
          </li>
          <li style={styles.li}>
            <strong>После восстановления — разгонный бустинг.</strong> Потратьте 5 000–10 000 ₽ на рекламу
            в первую неделю после появления товара. Алгоритм видит продажи и начинает возвращать позиции.
          </li>
          <li style={styles.li}>
            <strong>Обновите фото карточки.</strong> Если позиции упали сильно — свежие фотографии
            помогают алгоритму «переоценить» карточку. <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> делает
            новые варианты за 2 минуты из уже имеющегося фото.
          </li>
        </ol>

        <h2 style={styles.h2}>Инструменты для мониторинга остатков</h2>
        <p style={styles.p}>
          Вручную следить за остатками по 50+ позициям — не реально. Вот что реально используют селлеры:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Личный кабинет WB → Аналитика → Остатки.</strong> Базово, бесплатно. Показывает
            оборачиваемость по каждой позиции. Настройте уведомление по email на минимальный порог.
          </li>
          <li style={styles.li}>
            <strong>Ozon Seller → Товары → Остатки FBO/FBS.</strong> Аналогично. Ozon дополнительно
            показывает прогноз дней до out-of-stock прямо в интерфейсе.
          </li>
          <li style={styles.li}>
            <strong>MPStats.</strong> Платный сервис аналитики. Показывает тренды продаж по дням,
            сезонность, прогнозирует пики. Особенно полезен для товаров с выраженной сезональностью.
            Тарифы от 4 900 ₽/мес.
          </li>
          <li style={styles.li}>
            <strong>SellerFox / Shopstat.</strong> Альтернативы MPStats с похожими функциями,
            тарифы от 1 500 ₽/мес. Есть бесплатный пробный период.
          </li>
          <li style={styles.li}>
            <strong>Google Таблицы + API.</strong> Если у вас есть технический партнёр или разработчик
            — WB и Ozon предоставляют API для получения данных об остатках. Можно сделать дашборд
            с цветовой индикацией и автоматическими алертами в Telegram.
          </li>
        </ul>

        <h2 style={styles.h2}>Как остатки связаны с фото карточки</h2>
        <p style={styles.p}>
          Многие селлеры не знают, но обновление фото карточки влияет на алгоритмы — и это можно
          использовать при восстановлении после out-of-stock. Когда карточка обновляется (новое главное
          фото, новый инфографический слайд), алгоритм WB и Ozon «переперсонализирует» показы — товар
          начинает показываться новой аудитории и получает небольшой буст видимости.
        </p>
        <p style={styles.p}>
          Это не замена рекламному бюджету, но как дополнение работает. После возобновления поставки
          обновите хотя бы первый слайд карточки — это даст алгоритму сигнал что карточка «активна».
          Подробнее о правильных фото читайте в статье про{" "}
          <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>главное фото карточки которое продаёт</Link>.
        </p>

        <h2 style={styles.h2}>Чек-лист управления остатками: 15 пунктов</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Рассчитан страховой запас для каждой позиции с учётом срока логистики</li>
          <li style={styles.li}>Установлен порог тревоги в ЛК WB и Ozon (email-уведомление)</li>
          <li style={styles.li}>Оборачиваемость по каждой позиции не превышает 60 дней (WB)</li>
          <li style={styles.li}>Составлен календарь сезонных пиков на год вперёд</li>
          <li style={styles.li}>Поставщик предупреждён за 2–3 недели до планируемой даты отгрузки</li>
          <li style={styles.li}>Есть резервный поставщик или минимальный запас на собственном складе (FBS)</li>
          <li style={styles.li}>Для товаров из Китая — запас рассчитан с учётом 75+ дней (море + форс-мажоры)</li>
          <li style={styles.li}>На Ozon товар распределён по региональным складам для индекса локализации</li>
          <li style={styles.li}>Рекламные кампании настроены на автостоп при нулевом остатке</li>
          <li style={styles.li}>В ЛК Ozon включён прогноз «дней до out-of-stock» — смотреть еженедельно</li>
          <li style={styles.li}>Для сезонных товаров бронируется квота на поставку за 6–8 недель до пика</li>
          <li style={styles.li}>После восстановления после нуля — выделен рекламный бюджет на разгон (3 000–10 000 ₽)</li>
          <li style={styles.li}>Карточка обновляется (фото / инфографика) после каждого простоя дольше 5 дней</li>
          <li style={styles.li}>Данные об остатках отслеживаются в одном месте (ЛК, сервис аналитики или таблица)</li>
          <li style={styles.li}>Один раз в квартал — ревизия: какие позиции замораживают деньги с оборачиваемостью 90+ дней</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Вернули товар в продажу после простоя?</strong> Обновите фото карточки — алгоритм
            получит сигнал активности и быстрее восстановит позиции.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— 13 кредитов бесплатно, новый вариант главного фото за 2 минуты из уже имеющегося кадра.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки: 8 правил первого слайда который продаёт</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/obnovit-foto-kartochki-bez-poteri-pozitsiy" style={{ color: "#7c3aed" }}>Как обновить фото карточки и не потерять позиции</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/analitika-prodazh-wb-ozon-2026" style={{ color: "#7c3aed" }}>Аналитика продаж на WB и Ozon: как читать цифры</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Главная — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}
