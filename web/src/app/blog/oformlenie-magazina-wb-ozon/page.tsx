import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Оформление магазина на WB и Ozon: баннеры и брендинг — Aiviso",
  description: "Как оформить страницу магазина на Wildberries и Ozon: баннеры, логотип, описание, цветовой стиль. Чек-лист из 18 пунктов и реальные кейсы.",
  keywords: [
    "оформление магазина wildberries",
    "оформление магазина ozon",
    "баннер для wildberries",
    "баннер для ozon",
    "брендинг магазина маркетплейс",
    "страница продавца wb",
    "как оформить карточку продавца",
    "фирменный стиль на маркетплейсе",
  ],
  alternates: { canonical: "/blog/oformlenie-magazina-wb-ozon" },
  openGraph: {
    title: "Оформление магазина на Wildberries и Ozon: баннеры и брендинг",
    description: "Как оформить страницу магазина, загрузить баннер и создать фирменный стиль на WB и Ozon. Чек-лист из 18 пунктов.",
    url: "/blog/oformlenie-magazina-wb-ozon",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Оформление магазина на Wildberries и Ozon: баннеры, брендинг и первое впечатление",
  description: "Как оформить страницу магазина на WB и Ozon: баннеры, логотип, описание, цветовой стиль. Чек-лист и кейсы.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/oformlenie-magazina-wb-ozon",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Оформление магазина WB и Ozon", item: "https://aiviso.ru/blog/oformlenie-magazina-wb-ozon" },
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

export default function OformlenieMagazinaWbOzon() {
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
          <span style={{ color: "#1f2937" }}>Оформление магазина WB и Ozon</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Оформление магазина на Wildberries и Ozon: баннеры, брендинг и первое впечатление
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>2 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Большинство селлеров тратят всё время на карточки товара и забывают про страницу магазина. А зря: покупатель, который зашёл в ваш магазин через поиск или после первой покупки, принимает решение о повторной покупке именно там. Хорошо оформленная страница увеличивает процент подписчиков на магазин, повышает доверие и снижает возвраты.
        </p>

        <h2 style={styles.h2}>Зачем вообще оформлять страницу магазина</h2>
        <p style={styles.p}>
          Страница магазина — это ваш «второй этаж» на маркетплейсе. Покупатель попадает туда, когда:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>кликает на название магазина с карточки товара</li>
          <li style={styles.li}>ищет конкретный бренд в поиске</li>
          <li style={styles.li}>хочет посмотреть другие товары продавца после первой покупки</li>
          <li style={styles.li}>видит ссылку на магазин в рекламе или у блогера</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «посуда» добавил баннер и заполнил описание магазина — процент подписчиков на магазин вырос с 0,3% до 1,8% от посетителей. За месяц накопилось 400 подписчиков, которые получали пуш-уведомления о новинках. Это бесплатный возвратный трафик.
        </p>

        <h2 style={styles.h2}>Требования к баннерам: WB и Ozon</h2>
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
              <td style={styles.td}>Размер баннера (десктоп)</td>
              <td style={styles.td}>1920 × 480 px</td>
              <td style={styles.td}>1920 × 400 px</td>
            </tr>
            <tr>
              <td style={styles.td}>Размер баннера (мобайл)</td>
              <td style={styles.td}>750 × 500 px</td>
              <td style={styles.td}>750 × 750 px</td>
            </tr>
            <tr>
              <td style={styles.td}>Формат файла</td>
              <td style={styles.td}>JPG, PNG</td>
              <td style={styles.td}>JPG, PNG</td>
            </tr>
            <tr>
              <td style={styles.td}>Вес файла</td>
              <td style={styles.td}>до 5 МБ</td>
              <td style={styles.td}>до 10 МБ</td>
            </tr>
            <tr>
              <td style={styles.td}>Логотип магазина</td>
              <td style={styles.td}>200 × 200 px (PNG с прозрачностью)</td>
              <td style={styles.tdAccent}>800 × 800 px (PNG с прозрачностью)</td>
            </tr>
            <tr>
              <td style={styles.td}>Количество баннеров</td>
              <td style={styles.td}>до 10 слайдов</td>
              <td style={styles.td}>до 5 слайдов</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Важно: на WB баннер отображается по-разному на десктопе и в приложении. Делайте два варианта — широкий и мобильный. Текст на баннере должен читаться при обрезке до 750px по ширине.
        </p>

        <h2 style={styles.h2}>Что должно быть на баннере</h2>
        <p style={styles.p}>
          Баннер магазина — не место для длинного текста. Здесь работает другая логика: один посыл, одно действие.
        </p>

        <h3 style={styles.h3}>Структура хорошего баннера</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Левая треть:</strong> логотип или название бренда</li>
          <li style={styles.li}><strong>Центр:</strong> главный месседж (например: «Российский производитель постельного белья» или «Скидка 20% при заказе от 3 единиц»)</li>
          <li style={styles.li}><strong>Правая треть:</strong> изображение флагманского товара или lifestyle-кадр</li>
          <li style={styles.li}><strong>Фон:</strong> однотонный или мягкий градиент в фирменных цветах</li>
        </ul>

        <h3 style={styles.h3}>Чего не надо делать</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Перегружать баннер текстом — покупатель видит его 2 секунды</li>
          <li style={styles.li}>Использовать сток-фото улыбающихся незнакомцев — это выглядит как шаблон</li>
          <li style={styles.li}>Писать цены на баннере — акционные цены меняются, а баннер останется</li>
          <li style={styles.li}>Делать баннер в других пропорциях — маркетплейс обрежет изображение по краям</li>
        </ul>

        <h2 style={styles.h2}>Оформление страницы магазина на Wildberries</h2>
        <p style={styles.p}>
          На WB страница магазина называется «Бренд-зона» (для официальных брендов) или просто страница продавца. Вот что можно заполнить:
        </p>

        <h3 style={styles.h3}>Логотип</h3>
        <p style={styles.p}>
          Загружается в личном кабинете: раздел «Магазин» → «Информация о магазине». Формат PNG с прозрачным фоном, 200×200 px. Отображается рядом с названием магазина в карточке и на странице.
        </p>
        <p style={styles.p}>
          Если у вас нет логотипа — сделайте минималистичный: название бренда в одном шрифте на прозрачном фоне. Это лучше, чем пустое место.
        </p>

        <h3 style={styles.h3}>Баннер</h3>
        <p style={styles.p}>
          Загружается в разделе «Магазин» → «Витрина». WB позволяет загрузить отдельные баннеры для десктопа и мобайла. Используйте оба слота — мобильная аудитория на WB составляет более 70%.
        </p>

        <h3 style={styles.h3}>Описание магазина</h3>
        <p style={styles.p}>
          Поле на 2000 символов. Пишите как для человека, не для алгоритма: кто вы, что производите/продаёте, почему вам можно доверять. Одна клиентка в категории «детская одежда» написала про собственное производство в Иваново и контроль качества — процент подписчиков вырос втрое за две недели.
        </p>
        <p style={styles.p}>
          Структура описания:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>1–2 предложения о бренде (что, для кого)</li>
          <li style={styles.li}>Ключевое преимущество (российский производитель, сертифицировано, гарантия, быстрая доставка)</li>
          <li style={styles.li}>Ассортимент (категории, размерные ряды, материалы)</li>
          <li style={styles.li}>Контакт или призыв подписаться</li>
        </ul>

        <h2 style={styles.h2}>Оформление страницы магазина на Ozon</h2>
        <p style={styles.p}>
          У Ozon более гибкие инструменты для оформления витрины. Кроме баннера и логотипа, можно создать:
        </p>

        <h3 style={styles.h3}>Витрина с подборками</h3>
        <p style={styles.p}>
          В личном кабинете Ozon (раздел «Витрина магазина») можно добавить блоки: «Популярные товары», «Новинки», «Товары со скидкой», а также вручную собирать тематические подборки. Например, «Подарки до 1 000 ₽» или «Коллекция для кухни».
        </p>
        <p style={styles.p}>
          Селлер в категории «товары для дома» добавил три подборки по стилю интерьера (скандинавский, лофт, классика) — время на сайте выросло с 48 секунд до 2 минут 10 секунд. Люди листали, а не уходили.
        </p>

        <h3 style={styles.h3}>Описание бренда</h3>
        <p style={styles.p}>
          Ozon разрешает HTML-форматирование в описании магазина. Используйте жирный текст для ключевых фактов, списки для преимуществ. Укажите:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>год основания или количество лет на рынке</li>
          <li style={styles.li}>тип продавца (производитель / дистрибьютор / импортёр)</li>
          <li style={styles.li}>геграфия: откуда доставляете, где производите</li>
          <li style={styles.li}>сертификаты и гарантии если есть</li>
        </ul>

        <h3 style={styles.h3}>Брендовая полка</h3>
        <p style={styles.p}>
          Брендовая полка — специальный формат рекламы на Ozon, который показывает баннер магазина в поисковой выдаче. Доступна в рекламном кабинете. Цена за клик от 3 ₽, CTR у хорошо оформленных баннеров — 1,5–3%. Если у вас уже есть красивый баннер для витрины, его можно использовать и в этом формате без доработки.
        </p>

        <h2 style={styles.h2}>Фирменный стиль: как создать без дизайнера</h2>
        <p style={styles.p}>
          Фирменный стиль на маркетплейсе — это не логотип за 50 000 ₽. Это три-четыре решения, которые делают ваши карточки и баннер узнаваемыми:
        </p>

        <h3 style={styles.h3}>1. Один фоновый цвет для всех карточек</h3>
        <p style={styles.p}>
          Выберите один цвет фона и используйте его во всех карточках магазина. Покупатель, видя вашу страницу, сразу замечает единый стиль. Например, нежно-зелёный фон для органической косметики или тёмно-синий для мужских аксессуаров.
        </p>
        <p style={styles.p}>
          Это решение занимает 20 минут в <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> — задаёте фон один раз, генерируете все карточки в едином стиле.
        </p>

        <h3 style={styles.h3}>2. Одинаковые шрифт и цвет текста на инфографике</h3>
        <p style={styles.p}>
          Если на ваших инфографиках разные шрифты — это смотрится как «сборная солянка». Один шрифт, один основной цвет текста, один акцентный — и магазин выглядит профессионально.
        </p>

        <h3 style={styles.h3}>3. Логотип или водяной знак на каждом кадре</h3>
        <p style={styles.p}>
          Небольшой логотип в углу карточки работает на двух фронтах: защита от копирования конкурентами и узнаваемость при повторном просмотре. Размещайте в правом нижнем углу, не перекрывая товар.
        </p>

        <h3 style={styles.h3}>4. Единый баннер и карточки в одном цвете</h3>
        <p style={styles.p}>
          Когда баннер магазина и миниатюры карточек выполнены в одной палитре, страница продавца выглядит как витрина, а не как склад. Это не требует перефотографировать всё с нуля — достаточно обновить фон через <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерацию</Link>.
        </p>

        <h2 style={styles.h2}>Чек-лист: оформление магазина на WB и Ozon</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Загружен логотип PNG с прозрачным фоном (WB 200×200, Ozon 800×800)</li>
          <li style={styles.li}>Баннер десктоп загружен (WB 1920×480, Ozon 1920×400)</li>
          <li style={styles.li}>Баннер мобайл загружен (WB 750×500, Ozon 750×750)</li>
          <li style={styles.li}>На баннере один чёткий месседж, не более 10 слов текста</li>
          <li style={styles.li}>Заполнено описание магазина (минимум 300 символов, максимум — 2000)</li>
          <li style={styles.li}>В описании указан тип продавца (производитель/дистрибьютор)</li>
          <li style={styles.li}>На Ozon созданы минимум 2 тематические подборки товаров</li>
          <li style={styles.li}>Все карточки в одном цвете фона или едином стиле</li>
          <li style={styles.li}>На карточках присутствует логотип или водяной знак</li>
          <li style={styles.li}>Название магазина читаемо и не содержит спецсимволов</li>
          <li style={styles.li}>Баннер проверен в мобильном браузере — текст не обрезается</li>
          <li style={styles.li}>Страница магазина открыта и не скрыта настройками приватности</li>
        </ul>

        <h2 style={styles.h2}>Сколько времени занимает оформление</h2>
        <p style={styles.p}>
          Реалистичная оценка для селлера, который делает это первый раз:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Задача</th>
              <th style={styles.th}>Без инструментов</th>
              <th style={styles.th}>С Aiviso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Создать баннер для десктопа</td>
              <td style={styles.td}>3–6 часов (Figma или дизайнер)</td>
              <td style={styles.tdAccent}>15–20 минут</td>
            </tr>
            <tr>
              <td style={styles.td}>Адаптировать под мобайл</td>
              <td style={styles.td}>1–2 часа</td>
              <td style={styles.tdAccent}>5 минут</td>
            </tr>
            <tr>
              <td style={styles.td}>Подготовить логотип PNG</td>
              <td style={styles.td}>30–60 минут (удаление фона)</td>
              <td style={styles.td}>2 минуты</td>
            </tr>
            <tr>
              <td style={styles.td}>Обновить фон у 20 карточек</td>
              <td style={styles.td}>8–16 часов (фотограф или ретушёр)</td>
              <td style={styles.tdAccent}>40 минут</td>
            </tr>
            <tr>
              <td style={styles.td}>Написать описание магазина</td>
              <td style={styles.td}>30–60 минут</td>
              <td style={styles.td}>30–60 минут</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Ошибки которые чаще всего встречаются</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Баннер только для десктопа.</strong> Более 70% покупок на WB и Ozon совершаются с телефона. Мобильный баннер обязателен — без него страница выглядит сломанной.</li>
          <li style={styles.li}><strong>Логотип на белом фоне вместо прозрачного.</strong> На тёмных темах интерфейса вокруг логотипа появляется белый квадрат. Всегда используйте PNG с альфа-каналом.</li>
          <li style={styles.li}><strong>Разные стили карточек в одном магазине.</strong> Одни товары на белом фоне, другие — на сером, третьи с инфографикой в разных шрифтах. Это разрушает доверие: покупатель думает, что это разные продавцы.</li>
          <li style={styles.li}><strong>Описание магазина скопировано с сайта.</strong> Длинные корпоративные тексты про «миссию и ценности» работают на сайте, но не на маркетплейсе. Нужна конкретика: что за товар, откуда, почему брать у вас.</li>
          <li style={styles.li}><strong>Баннер не обновляется под сезон.</strong> Новогодний баннер в марте — сигнал, что продавец не следит за магазином. Меняйте баннер под сезонные акции и праздники.</li>
        </ul>

        <h2 style={styles.h2}>Как оформление магазина влияет на SEO</h2>
        <p style={styles.p}>
          Прямого влияния на позиции карточек в поиске у оформления магазина нет. Но есть косвенное:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Подписчики → повторные покупки.</strong> Чем больше подписчиков, тем больше прямых переходов в магазин. Прямой трафик WB и Ozon учитывают как сигнал лояльности к продавцу.</li>
          <li style={styles.li}><strong>Единый стиль → меньше возвратов.</strong> Когда карточки выглядят профессионально, покупатель лучше понимает товар до покупки. Возвраты снижаются, рейтинг растёт, позиции улучшаются.</li>
          <li style={styles.li}><strong>Описание магазина индексируется поиском Ozon.</strong> Ключевые слова в описании магазина могут помочь при поиске бренда напрямую.</li>
        </ul>
        <p style={styles.p}>
          Читайте подробнее про органическое продвижение в нашем <Link href="/blog/prodvizhenie-kartochki-bez-reklamy" style={{ color: "#7c3aed" }}>гайде по продвижению без рекламы</Link>.
        </p>

        <h2 style={styles.h2}>Когда обновлять оформление магазина</h2>
        <p style={styles.p}>
          Минимальный план — 4 раза в год под смену сезонов:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Январь-февраль:</strong> зимняя распродажа → 14 февраля → 23 февраля → 8 марта</li>
          <li style={styles.li}><strong>Апрель-май:</strong> весенние новинки, 1 мая, 9 мая</li>
          <li style={styles.li}><strong>Август-сентябрь:</strong> «Назад в школу», осенний запуск</li>
          <li style={styles.li}><strong>Ноябрь-декабрь:</strong> 11.11, Чёрная пятница, новогодний</li>
        </ul>
        <p style={styles.p}>
          Детальный календарь акций и пиков — в статье <Link href="/blog" style={{ color: "#7c3aed" }}>про сезонные товары и календарь продаж</Link>.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите единый стиль для всех карточек без фотографа?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— загрузите одно фото товара, выберите фон и стиль, получите готовые кадры в нужных размерах для WB и Ozon. 13 кредитов на старте бесплатно.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки товара: 8 правил первого слайда</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>Инфографика для карточки WB и Ozon: что писать и как оформить</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/fony-dlya-kartochki-tovara" style={{ color: "#7c3aed" }}>Фоны и сцены для карточки товара: что реально работает</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/" style={{ color: "#7c3aed" }}>Главная Aiviso — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}
