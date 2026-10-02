import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Карточка товара к Новому году 2026: чек-лист для WB и Ozon — Aiviso",
  description: "Как подготовить фото, описание и инфографику карточки к новогодним продажам на Wildberries и Ozon. Чек-лист из 18 пунктов и кейс: выручка ×2.3 за 4 недели.",
  keywords: [
    "карточка товара новый год",
    "подготовка к новому году wildberries",
    "новогодние продажи ozon",
    "фото товара новый год маркетплейс",
    "сезонные карточки wb",
    "оформление карточки к новому году",
    "новогодний листинг маркетплейс",
    "подготовка к распродажам wb ozon",
  ],
  alternates: { canonical: "/blog/kartochka-tovara-novyy-god-2026" },
  openGraph: {
    title: "Карточка товара к Новому году: чек-лист для WB и Ozon 2026",
    description: "Как подготовить фото, описание и инфографику к новогодним продажам. Кейс: выручка ×2.3 за 4 недели без рекламы.",
    url: "/blog/kartochka-tovara-novyy-god-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Карточка товара к Новому году 2026: чек-лист для WB и Ozon",
  description:
    "Как подготовить фото, описание и инфографику карточки к новогодним продажам на Wildberries и Ozon. Чек-лист из 18 пунктов и кейс с реальными цифрами.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kartochka-tovara-novyy-god-2026",
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
      name: "Карточка товара к Новому году",
      item: "https://aiviso.ru/blog/kartochka-tovara-novyy-god-2026",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "24px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
};

export default function KartochkaNovyGod() {
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
          <span style={{ color: "#1f2937" }}>Карточка товара к Новому году</span>
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
          Карточка товара к Новому году: как подготовить фото и описание на WB и Ozon
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>2 октября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Новогодний сезон — самый дорогой трафик в году. С середины октября покупатели начинают
          искать подарки, и тот, кто обновил карточку раньше, снимает основной объём продаж. У вас
          есть примерно 6–8 недель до пика — и этот гайд поможет потратить их правильно.
        </p>

        <h2 style={styles.h2}>Когда готовить и почему нельзя тянуть</h2>
        <p style={styles.p}>
          По данным продавцов из категорий «Подарки», «Декор» и «Аксессуары», пик заказов
          приходится на 10–20 декабря. Алгоритм WB поднимает карточки в поиске через{" "}
          <strong>2–4 недели</strong> после обновления — при условии, что улучшился CTR. То есть
          обновлять карточку 1 декабря уже поздно: за 10 дней до пика позиции не успеют вырасти.
        </p>
        <p style={styles.p}>Оптимальный календарь:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>1–15 октября</strong> — обновить фото главного слайда, добавить новогодний фон
          </li>
          <li style={styles.li}>
            <strong>15–31 октября</strong> — переписать заголовок и описание под сезонные запросы,
            добавить инфографику «идея подарка»
          </li>
          <li style={styles.li}>
            <strong>1–10 ноября</strong> — запустить рекламу, участвовать в акции ноября, проверить
            остатки на складе
          </li>
          <li style={styles.li}>
            <strong>С 11 ноября</strong> — мониторить CTR, корректировать ставки
          </li>
        </ul>

        <h2 style={styles.h2}>Кейс: как обновление карточки дало ×2.3 к выручке</h2>
        <p style={styles.p}>
          Один из наших клиентов продаёт деревянные шкатулки в категории «Подарки». В октябре 2025
          они обновили главный слайд: убрали нейтральный серый фон и добавили{" "}
          <strong>тёмно-зелёный с хвойными ветками</strong> вокруг шкатулки. В описании добавили
          слово «подарок» и «упаковка в подарок». Больше ничего не трогали — ни цену, ни рекламу.
        </p>
        <p style={styles.p}>
          CTR вырос с 2.1% до 4.8% за первые 10 дней. Выручка за ноябрь составила{" "}
          <strong>2.3× от октябрьской</strong>, а позиция в поиске по запросу «шкатулка подарок»
          поднялась с 34-й на 11-ю. Всё это без рекламы и без снижения цены.
        </p>

        <h2 style={styles.h2}>Что менять в фото</h2>

        <h3 style={styles.h3}>Главный слайд</h3>
        <p style={styles.p}>
          Это единственное, что покупатель видит в листинге. Правило простое: если товар может быть
          подарком — покупатель должен это увидеть за 0.5 секунды.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Фон:</strong> тёмно-зелёный, бордовый, белый «зимний» или золотой. Избегайте
            кричащего красного — он ассоциируется с ошибкой, а не с праздником.
          </li>
          <li style={styles.li}>
            <strong>Реквизит:</strong> хвойные ветки, шишки, ленты, упаковочная бумага рядом с
            товаром — сигнализируют «это подарок». Не перегружайте: 1–2 элемента.
          </li>
          <li style={styles.li}>
            <strong>Плашка:</strong> «Идея подарка» или «В подарочной упаковке» — небольшой
            прямоугольник в углу 120–140px шириной. Текст — белый на зелёном или золотом фоне.
          </li>
          <li style={styles.li}>
            <strong>Формат:</strong> строго 900×1200, вертикаль 3:4. Квадрат теряет 20–30% площади
            в листинге на мобильных — это прямой урон CTR.
          </li>
        </ul>

        <h3 style={styles.h3}>Слайды 2–5</h3>
        <p style={styles.p}>
          Внутренние слайды смотрят только те, кто уже кликнул. Здесь задача — убедить купить и
          снять страхи.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Слайд 2 — товар «в руках» или в использовании (lifestyle). Для Нового года это может
            быть сцена с ёлкой или праздничным столом на фоне.
          </li>
          <li style={styles.li}>
            Слайд 3 — инфографика: главные характеристики, размер, материал. Для подарочных товаров
            добавьте «Можно заказать упаковку».
          </li>
          <li style={styles.li}>
            Слайд 4 — размер / состав / комплектация. Особенно важно если товар едет в подарок
            незнакомому человеку — покупатель хочет быть уверен, что не ошибётся.
          </li>
          <li style={styles.li}>
            Слайд 5 — отзыв или отметка «1 000+ покупок в этом месяце» если есть достаточно
            продаж. Социальное доказательство работает в пиковый сезон особенно сильно.
          </li>
        </ul>

        <h2 style={styles.h2}>Что менять в заголовке и описании</h2>

        <h3 style={styles.h3}>Заголовок</h3>
        <p style={styles.p}>
          Алгоритмы WB и Ozon индексируют заголовок как главный текстовый фактор. В ноябре–декабре
          объём запросов со словом «подарок» вырастает в 4–7 раз по данным MPStats. Используйте это.
        </p>
        <p style={styles.p}>
          Пример для шкатулки:{" "}
          <em>«Шкатулка для украшений деревянная подарок женщине девушке на Новый год»</em> — вместо
          обычного <em>«Шкатулка для украшений деревянная резная»</em>.
        </p>
        <p style={styles.p}>
          Не переспамьте: WB разрешает не более 2–3 SEO-ключей в заголовке, остальное — характеристики.
          Ozon — до 255 символов, используйте пространство полностью.
        </p>

        <h3 style={styles.h3}>Описание</h3>
        <p style={styles.p}>
          В Новый год покупатель часто не знает, что именно хочет человек, которому покупает
          подарок. Ваше описание должно снять этот страх:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Укажите для кого подойдёт: «подойдёт маме, бабушке, подруге», «универсальный подарок
            для женщины 30–60 лет».
          </li>
          <li style={styles.li}>
            Опишите «что человек почувствует»: не «шкатулка 20×15 см», а «вмещает до 40 украшений —
            браслеты, кольца и серьги больше не запутаются».
          </li>
          <li style={styles.li}>
            Добавьте инфо про упаковку: «поставляется в подарочной коробке», «возможна брендированная
            лента по запросу».
          </li>
          <li style={styles.li}>
            Срок доставки до НГ: «При заказе до 20 декабря — доставка гарантированно до 25 декабря»
            — этот триггер повышает конверсию на 15–20% по нашим замерам.
          </li>
        </ul>

        <h2 style={styles.h2}>Инфографика для новогодней карточки</h2>
        <p style={styles.p}>
          Инфографика — это второй слайд для тех, кто читает. На новогоднюю версию добавьте:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Плашку «Идея подарка» с иконкой бантика или подарочной коробки (line-art SVG, не эмодзи)
          </li>
          <li style={styles.li}>
            Блок «Для кого» — короткий список: мама, сестра, подруга, коллега
          </li>
          <li style={styles.li}>
            Блок «Доставка к Новому году» с датой последнего заказа
          </li>
          <li style={styles.li}>
            Если есть подарочная упаковка — большой акцент на это, с фото
          </li>
        </ul>
        <p style={styles.p}>
          Цвета инфографики на новогодний период: тёмно-зелёный (#1a4731), золотой (#b45309) и белый.
          Фиолетовый бренд Aiviso (#7c3aed) можно оставить если он есть в вашей карточке постоянно
          — резкая смена стиля путает алгоритм CTR-анализа.
        </p>

        <h2 style={styles.h2}>Ключевые слова для сезонного SEO</h2>
        <p style={styles.p}>
          Собирать ключи под сезон нужно за 3–4 недели до его старта — к этому моменту появляются
          реальные объёмы запросов. В конце октября запросы «подарок на Новый год» начинают расти,
          к 15 ноября уже видна устойчивая тенденция.
        </p>
        <p style={styles.p}>Какие добавить к существующим ключам:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>«[товар] подарок» — «шкатулка подарок», «кружка подарок»</li>
          <li style={styles.li}>«[товар] на новый год» — «свеча на новый год», «набор на новый год»</li>
          <li style={styles.li}>«подарок женщине / мужчине / маме / папе»</li>
          <li style={styles.li}>«подарочный набор [категория]»</li>
          <li style={styles.li}>«подарок до [цена] рублей» — популярен в сегменте 500–2000 ₽</li>
        </ul>
        <p style={styles.p}>
          Инструменты для поиска: MPStats, Sellmonitor или бесплатная вкладка «Аналитика» в личном
          кабинете Ozon — там есть поисковые запросы за последние 7 дней.
        </p>

        <h2 style={styles.h2}>Чек-лист подготовки карточки к Новому году</h2>
        <p style={styles.p}>Пройдитесь по каждому пункту до 15 октября:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Главный слайд обновлён: зимний фон или реквизит</li>
          <li style={styles.li}>Плашка «Идея подарка» добавлена на главный слайд</li>
          <li style={styles.li}>Lifestyle-слайд с праздничной сценой добавлен</li>
          <li style={styles.li}>В заголовок вписаны ключи «подарок», «новый год»</li>
          <li style={styles.li}>Описание начинается с выгоды для получателя подарка</li>
          <li style={styles.li}>Указано для кого подходит (возраст, пол, интересы)</li>
          <li style={styles.li}>Срок доставки до НГ прописан в описании</li>
          <li style={styles.li}>Подарочная упаковка упомянута и сфотографирована</li>
          <li style={styles.li}>Характеристики заполнены полностью (цвет, размер, материал)</li>
          <li style={styles.li}>Инфографика обновлена под зимнюю тематику</li>
          <li style={styles.li}>Остатки на FBO пополнены минимум на 6 недель вперёд</li>
          <li style={styles.li}>Цена проверена: не ниже себестоимости с учётом комиссии и рекламы</li>
          <li style={styles.li}>Карточка проверена в мобильном отображении</li>
          <li style={styles.li}>CTR и конверсия сохранены для сравнения «до» обновления</li>
          <li style={styles.li}>Заявка на участие в новогодней акции WB/Ozon подана</li>
          <li style={styles.li}>Рекламная кампания запланирована на начало ноября</li>
          <li style={styles.li}>Все фото соответствуют размерам 900×1200</li>
          <li style={styles.li}>Возможность возврата прописана (снижает барьер для «подарочных» покупок)</li>
        </ul>

        <h2 style={styles.h2}>Как быстро обновить фото для всего каталога</h2>
        <p style={styles.p}>
          Если у вас 30–50 карточек, пересъёмка в студии обойдётся в{" "}
          <strong>150 000–400 000 ₽</strong> и займёт 2–3 недели. К тому моменту пик уже начнётся.
        </p>
        <p style={styles.p}>
          AI-генерация позволяет обновить всю галерею за 1–2 дня. Процесс:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Загружаете текущее фото товара на белом фоне (или из уже существующей карточки)
          </li>
          <li style={styles.li}>
            Указываете сцену: «зимний интерьер с камином», «стол с подарками», «хвойные ветки на
            тёмном фоне»
          </li>
          <li style={styles.li}>
            AI генерирует 3–5 вариантов за 2 минуты — выбираете лучший
          </li>
          <li style={styles.li}>
            Получаете файл 900×1200 готовый к загрузке на WB или Ozon
          </li>
        </ul>
        <p style={styles.p}>
          Стоимость — от 30 ₽ за кадр. 50 карточек × 3 кадра = ~4 500 ₽ вместо 200 000 ₽ в
          студии. При этом детали товара (фурнитура, текстура, цвет) контролируются автоматически —
          карточка не будет расходиться с реальным товаром.
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
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Успейте к сезону:</strong> у вас есть 6 недель до пика новогодних продаж.{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Откройте Aiviso
            </Link>{" "}
            и обновите карточки за один день — без студии и без очереди у фотографа. 13 кредитов на
            старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              Главное фото карточки: 8 правил первого слайда который продаёт
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>
              Инфографика для карточки WB и Ozon: что писать и как оформить
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/ctr-kartochki-wb-ozon" style={{ color: "#7c3aed" }}>
              CTR карточки на WB и Ozon: как измерить и поднять кликабельность
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "#7c3aed" }}>
              Главная — AI-генерация фото товара
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
