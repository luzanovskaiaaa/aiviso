import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как масштабировать продажи на маркетплейсе до 1 млн ₽ — Aiviso",
  description: "Пошаговый гайд: как вырасти с 100 000 до 1 000 000 ₽/мес на WB и Ozon. Ассортимент, реклама, FBO, фото и чек-лист из 20 шагов с реальными кейсами.",
  keywords: [
    "масштабирование продаж wildberries",
    "как увеличить продажи на ozon",
    "рост продаж маркетплейс",
    "как выйти на миллион на wb",
    "масштабирование селлера",
    "увеличить оборот маркетплейс",
    "план роста wildberries ozon",
    "расширение ассортимента wb",
  ],
  alternates: { canonical: "/blog/masshtabirovanie-prodazh-marketpleys" },
  openGraph: {
    title: "Как масштабировать продажи на маркетплейсе до 1 млн ₽ в месяц",
    description: "Пошаговый план: ассортимент, реклама, FBO и фото. Кейсы реальных селлеров с цифрами.",
    url: "/blog/masshtabirovanie-prodazh-marketpleys",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как масштабировать продажи на маркетплейсе до 1 000 000 ₽ в месяц",
  description: "Пошаговый гайд для селлеров Wildberries и Ozon: как вырасти с 100 000 до 1 000 000 ₽ в месяц. Ассортимент, реклама, FBO, фото и чек-лист.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/masshtabirovanie-prodazh-marketpleys",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Масштабирование продаж на маркетплейсе", item: "https://aiviso.ru/blog/masshtabirovanie-prodazh-marketpleys" },
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

export default function MasshtabirovanieProdazh() {
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
          <span style={{ color: "#1f2937" }}>Масштабирование продаж на маркетплейсе</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как масштабировать продажи на маркетплейсе: от 100 000 до 1 000 000 ₽ в месяц
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 26 июля 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство селлеров выходят на WB или Ozon, делают первые продажи и застревают на 100–200 тысячах рублей в месяц. Не потому что ниша плохая — а потому что то, что привело к первым продажам, не масштабируется само по себе. Эта статья — пошаговый разбор того, как сдвинуться с этой отметки и выйти на миллион в месяц.
        </p>

        <h2 style={styles.h2}>Почему 90% селлеров застревают на 150–200 тысячах</h2>
        <p style={styles.p}>
          На старте всё держится на ручном труде: сам снял фото, сам написал карточку, сам отвёз на склад. На 5–10 товарах это работает. Но как только ассортимент растёт до 30–50 позиций, всё начинает сыпаться.
        </p>
        <p style={styles.p}>
          Характерная картина: селлер из Екатеринбурга с 12 товарами в категории «декор для дома» держался на 170 000 ₽/мес восемь месяцев подряд. Добавил ещё 6 позиций — оборот упал до 130 000 ₽. Проблема была не в товарах, а в том, что при расширении просела конверсия старых карточек — фото устарели, SEO не обновлялось, реклама сжирала маржу без оптимизации.
        </p>
        <p style={styles.p}>Типичные причины застоя:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Нет системы обновления карточек — фото сделаны раз и забыты</li>
          <li style={styles.li}>Реклама запущена без анализа ДРР — деньги уходят, прибыли нет</li>
          <li style={styles.li}>Всё на FBS, но склад не успевает — заказы теряются из-за просрочки отгрузки</li>
          <li style={styles.li}>Ассортимент расширяется хаотично, без проверки спроса</li>
          <li style={styles.li}>Нет понимания, какой товар реально тянет маржу, а какой просто создаёт оборот</li>
        </ul>

        <h2 style={styles.h2}>Шаг 1: Разберитесь с тем, что работает сейчас</h2>
        <p style={styles.p}>
          Прежде чем масштабироваться — найдите свой «локомотив». Откройте аналитику и выпишите 3–5 товаров, которые дают больше всего маржи (не оборота). Маржа — это выручка минус комиссия, логистика, реклама, себестоимость и возвраты.
        </p>
        <h3 style={styles.h3}>Что делать с локомотивами</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Увеличить остатки на складе — чтобы не улетали в аут-оф-сток в пиковые дни</li>
          <li style={styles.li}>Обновить фото под текущие стандарты — если карточка сделана год назад, скорее всего главный слайд слабее чем у конкурентов</li>
          <li style={styles.li}>Добавить SEO-обновление: ключи меняются, конкуренты догоняют</li>
          <li style={styles.li}>Проверить инфографику — актуальна ли она, отвечает ли на вопросы покупателей</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «товары для кухни» получил +38% конверсии только от обновления главного фото на трёх топ-товарах — без изменения цены и без рекламы. Это прямая прибыль, без затрат на привлечение.
        </p>

        <h2 style={styles.h2}>Шаг 2: Перейдите на FBO до масштабирования</h2>
        <p style={styles.p}>
          FBS (отгрузка со своего склада) работает на старте, но при росте превращается в узкое горло. Вы физически не успеваете отгружать 50–100 заказов в день без найма сотрудников. А алгоритмы WB и Ozon дают преимущество в ранжировании товарам с FBO — скорость доставки влияет на позицию в поиске.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Параметр</th>
              <th style={styles.th}>FBS (свой склад)</th>
              <th style={styles.th}>FBO (склад WB/Ozon)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Позиция в поиске</td>
              <td style={styles.td}>Средняя</td>
              <td style={styles.tdAccent}><strong>Выше</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Скорость доставки</td>
              <td style={styles.td}>1–5 дней</td>
              <td style={styles.tdAccent}><strong>1–2 дня</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Нагрузка на вас</td>
              <td style={styles.td}>Высокая (каждый заказ)</td>
              <td style={styles.td}>Низкая (партия раз в 1–2 нед)</td>
            </tr>
            <tr>
              <td style={styles.td}>Гибкость цены</td>
              <td style={styles.tdAccent}><strong>Высокая</strong></td>
              <td style={styles.td}>Ниже (плата за хранение)</td>
            </tr>
            <tr>
              <td style={styles.td}>Риск штрафов за просрочку</td>
              <td style={styles.td}>Высокий</td>
              <td style={styles.td}>Нет (за отгрузку отвечает WB/Ozon)</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Переход на FBO для топ-товаров — один из самых быстрых способов поднять позиции в поиске без изменения цены. Оставьте на FBS только товары с высокой маржой и маленьким оборотом — там логистика маркетплейса будет дорогой.
        </p>

        <h2 style={styles.h2}>Шаг 3: Расширяйте ассортимент системно</h2>
        <p style={styles.p}>
          Хаотичное добавление новых SKU убивает деньги. Каждый новый товар требует карточку, фото, продвижение, закупку. Если товар не выстрелил за 60–90 дней — вы заморозили деньги в остатках.
        </p>
        <h3 style={styles.h3}>Принцип «звёздочки»</h3>
        <p style={styles.p}>
          Находите один проверенный товар-локомотив и расширяете вокруг него: добавляете цвета, размеры, комплекты, аксессуары. Покупатель, который зашёл за основным товаром, видит дополнение и берёт сразу два.
        </p>
        <p style={styles.p}>
          Пример: продаёте органайзер для кухни — добавьте подставку под специи того же цвета, крючки, коробки для хранения. Это не просто кросс-сейл, это повышение среднего чека без дополнительного трафика.
        </p>
        <h3 style={styles.h3}>Чек-лист перед добавлением нового товара</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Спрос подтверждён через Mpstats, Moneyplace или аналог — не менее 300 продаж в месяц по категории</li>
          <li style={styles.li}>Юнит-экономика сходится при цене на 15–20% выше себестоимости+логистика+реклама</li>
          <li style={styles.li}>Есть возможность сделать фото и карточку за 2–3 дня, не за 3 недели</li>
          <li style={styles.li}>Конкурентов не более 50–80 в топ-100 с рейтингом выше 4.5 и более 200 отзывами</li>
          <li style={styles.li}>Товар не требует сертификации, которой у вас нет</li>
        </ul>

        <h2 style={styles.h2}>Шаг 4: Реклама — только когда органика работает</h2>
        <p style={styles.p}>
          Самая частая ошибка при масштабировании — запускать рекламу на карточки с конверсией 0.5%. Реклама умножает то что уже есть. Если карточка не конвертит органически — реклама просто сольёт бюджет.
        </p>
        <p style={styles.p}>
          Базовый тест: если у товара конверсия из просмотра в заказ ниже 2% на WB или ниже 3% на Ozon — сначала чините карточку, потом включаете рекламу.
        </p>
        <h3 style={styles.h3}>Что чинить в карточке перед рекламой</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Главное фото.</strong> Именно оно определяет CTR в листинге — первое впечатление за 200 мс. Если главный слайд похож на сотни конкурентов, кликов не будет</li>
          <li style={styles.li}><strong>Цена относительно конкурентов.</strong> Не демпинг, но в рамках ±10–15% от медианы категории</li>
          <li style={styles.li}><strong>Количество фото.</strong> Минимум 6–8 кадров: предмет на белом, lifestyle, детали, размерная линейка, инфографика с ключевыми свойствами</li>
          <li style={styles.li}><strong>Отзывы.</strong> Хотя бы 15–20 отзывов с рейтингом 4.4+ перед запуском рекламы</li>
          <li style={styles.li}><strong>Характеристики заполнены полностью.</strong> Пустые атрибуты срезают позиции в фильтрах</li>
        </ul>
        <p style={styles.p}>
          После починки карточки — запускайте рекламу с небольшим бюджетом (500–1 000 ₽/день) и смотрите ДРР. Целевой ДРР для масс-маркета — 10–18%. Если выше — либо ставка слишком высокая, либо конверсия карточки всё ещё плохая.
        </p>

        <h2 style={styles.h2}>Шаг 5: Качество фото — точка роста которую все откладывают</h2>
        <p style={styles.p}>
          На пути к миллиону в месяц фото становится не «красивостью», а инструментом конверсии. Разница между CTR 1.8% и 4.1% — это в два раза больше трафика при тех же позициях и том же рекламном бюджете.
        </p>
        <p style={styles.p}>
          При этом большинство селлеров обновляют фото раз в год в лучшем случае. Пока конкуренты продолжают улучшать карточки — ваше фото годовалой давности становится слабее относительно рынка каждый месяц.
        </p>
        <h3 style={styles.h3}>Почему AI меняет расчёт</h3>
        <p style={styles.p}>
          Раньше обновить фото у 30 товаров означало: 3 недели ожидания студии, 300 000+ рублей бюджета, ещё неделя на правки. Сейчас это 2–3 дня и 4 500–9 000 ₽ через AI-генерацию. Это значит, что обновлять фото можно под каждый сезон — и это уже не роскошь, а стандарт конкурентного магазина.
        </p>
        <p style={styles.p}>
          Один из клиентов Aiviso в категории «товары для спорта» обновил 24 карточки перед майскими праздниками через AI-генерацию. Потратил 3 дня и 8 600 ₽. Результат за первые две недели: средний CTR по обновлённым карточкам вырос с 2.3% до 3.8%, оборот за май — плюс 67% к апрелю.
        </p>

        <h2 style={styles.h2}>Шаг 6: Когда выходить на второй маркетплейс</h2>
        <p style={styles.p}>
          Логика простая: сначала достигаете стабильного оборота на одном маркетплейсе, потом дублируете на второй. Не наоборот. Параллельный запуск на WB и Ozon одновременно с нуля — распыление ресурсов, которое заканчивается тем, что ни там ни там нет результата.
        </p>
        <p style={styles.p}>
          Готовность к выходу на второй маркетплейс — если на первом вы уже держите 400 000+ ₽/мес стабильно три месяца подряд, у вас есть свежие фото в формате 900×1200 (подходят для обоих), заполнены характеристики и есть понимание своей аудитории.
        </p>
        <p style={styles.p}>
          Перенос карточек занимает 2–5 дней технически — но не забудьте про различия в требованиях: <Link href="/blog/wb-vs-ozon-foto-trebovaniya" style={{ color: "#7c3aed" }}>подробно про отличия WB и Ozon по фото и требованиям к карточкам</Link>.
        </p>

        <h2 style={styles.h2}>Чек-лист масштабирования: 20 пунктов</h2>
        <p style={styles.p}>Пройдитесь по каждому пункту раз в квартал:</p>
        <h3 style={styles.h3}>Аналитика и товар</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Определены 3–5 товаров-локомотивов с наибольшей маржой</li>
          <li style={styles.li}>По каждому локомотиву рассчитана юнит-экономика с учётом всех затрат</li>
          <li style={styles.li}>Остатки на складе WB/Ozon покрывают минимум 14 дней продаж по прогнозу</li>
          <li style={styles.li}>Есть чёткий список «мёртвых» товаров которые нужно ликвидировать</li>
          <li style={styles.li}>Новые SKU добавляются только с подтверждённым спросом</li>
        </ul>
        <h3 style={styles.h3}>Карточки и фото</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото каждого топ-товара обновлялось не позднее 3 месяцев назад</li>
          <li style={styles.li}>В каждой карточке 7–10 фото: белый фон, lifestyle, детали, инфографика</li>
          <li style={styles.li}>Все характеристики заполнены полностью, нет пустых атрибутов</li>
          <li style={styles.li}>SEO обновлялось в последние 2 месяца — ключи, заголовок, описание</li>
          <li style={styles.li}>Конверсия карточки из просмотра в заказ выше 2% на WB / 3% на Ozon</li>
        </ul>
        <h3 style={styles.h3}>Логистика</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Топ-товары переведены на FBO</li>
          <li style={styles.li}>На FBS остались только товары с высокой маржой и малым оборотом</li>
          <li style={styles.li}>Упаковка соответствует требованиям, штрафов за последние 30 дней нет</li>
          <li style={styles.li}>Есть поставщик с гарантией сроков — критично для сезонных товаров</li>
        </ul>
        <h3 style={styles.h3}>Реклама</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>ДРР по каждой активной кампании отслеживается еженедельно</li>
          <li style={styles.li}>Ставки скорректированы — нет кампаний с ДРР выше 25%</li>
          <li style={styles.li}>Реклама запущена только на товары с конверсией выше базового порога</li>
          <li style={styles.li}>Есть понимание какой трафик органический, какой рекламный</li>
        </ul>
        <h3 style={styles.h3}>Отзывы и репутация</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Рейтинг магазина выше 4.6 на обеих платформах</li>
          <li style={styles.li}>На все негативные отзывы даны ответы в течение 48 часов</li>
        </ul>

        <h2 style={styles.h2}>Сколько реально занимает путь до миллиона</h2>
        <p style={styles.p}>
          Честный ответ: от 4 до 18 месяцев в зависимости от ниши, стартового капитала и скорости работы. Быстрее всего растут те, кто не ждёт «идеального момента» для обновления карточек или перехода на FBO, а делает это итерационно — каждые 4–6 недель закрывает один блок из чек-листа выше.
        </p>
        <p style={styles.p}>
          Самый медленный элемент в этой цепочке — обычно фото. Селлеры откладывают обновление карточек потому что это «дорого и долго». Но с <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерацией в Aiviso</Link> это перестало быть узким местом: 30 карточек обновляются за 2–3 дня, а не за месяц.
        </p>
        <p style={styles.p}>
          Подробнее про то, как выстроить весь процесс работы с фото для маркетплейса — в статье <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>«Как сделать фото для Wildberries: пошаговый гайд»</Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#5b21b6" }}>
            Обновите фото — это самый быстрый рычаг роста конверсии
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Начните с одного товара-локомотива: загрузите исходное фото в Aiviso, получите 2 готовых кадра за 2 минуты и сравните с тем что в карточке сейчас. 13 кредитов на старте — бесплатно.
          </p>
          <Link
            href="/app"
            style={{
              display: "inline-block",
              background: "#7c3aed",
              color: "white",
              padding: "12px 24px",
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
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/konversiya-kartochki-cheklist" style={{ color: "#7c3aed" }}>Как поднять конверсию карточки на 30%: чек-лист из 25 пунктов</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>SEO для карточки Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/reklama-na-wildberries" style={{ color: "#7c3aed" }}>Реклама на Wildberries в 2026: пошаговый гайд</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
