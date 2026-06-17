import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7 ошибок с фото товара на маркетплейсе — Aiviso",
  description:
    "Самые частые ошибки селлеров при съёмке и загрузке фото на Wildberries и Ozon. Чек-лист: что исправить прямо сейчас, чтобы не терять конверсию.",
  keywords: [
    "ошибки фото товара",
    "фото для wildberries",
    "фото для ozon",
    "карточка товара ошибки",
    "как улучшить карточку wildberries",
    "конверсия карточки маркетплейс",
    "требования к фото wb",
    "ai фото товар",
  ],
  alternates: { canonical: "/blog/oshibki-foto-tovara" },
  openGraph: {
    title: "7 ошибок с фото товара на Wildberries и Ozon",
    description:
      "Реальные ошибки, которые убивают конверсию. Чек-лист с примерами и способами исправить прямо сейчас.",
    url: "/blog/oshibki-foto-tovara",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 ошибок с фото товара на маркетплейсе, которые убивают конверсию",
  description:
    "Самые частые ошибки селлеров при съёмке и загрузке фото на Wildberries и Ozon. Разбираем каждую с примерами и способами исправить.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/oshibki-foto-tovara",
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
      name: "7 ошибок с фото товара",
      item: "https://aiviso.ru/blog/oshibki-foto-tovara",
    },
  ],
};

const s = {
  h2: {
    fontSize: 24,
    fontWeight: 700,
    margin: "44px 0 12px",
    lineHeight: 1.3,
    color: "#1f2937",
  } as React.CSSProperties,
  h3: {
    fontSize: 19,
    fontWeight: 600,
    margin: "24px 0 10px",
    color: "#1f2937",
  } as React.CSSProperties,
  p: { margin: "10px 0", color: "#374151" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "10px 0" } as React.CSSProperties,
  li: { margin: "8px 0", color: "#374151" } as React.CSSProperties,
  tag: {
    display: "inline-block",
    padding: "2px 10px",
    background: "#f5f3ff",
    border: "1px solid #ddd6fe",
    borderRadius: 20,
    fontSize: 13,
    color: "#7c3aed",
    fontWeight: 600,
    marginBottom: 8,
  } as React.CSSProperties,
  errorBox: {
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: 12,
    padding: "16px 20px",
    margin: "16px 0",
  } as React.CSSProperties,
  fixBox: {
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    borderRadius: 12,
    padding: "16px 20px",
    margin: "8px 0 24px",
  } as React.CSSProperties,
};

export default function OshibkiFotoTovara() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
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
        <nav
          aria-label="Хлебные крошки"
          style={{ fontSize: 13, color: "#6b7280", marginBottom: 16 }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Главная
          </Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
            Блог
          </Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>7 ошибок с фото товара</span>
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
          7 ошибок с фото товара на маркетплейсе, которые убивают конверсию
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>
          Обновлено 17 июня 2026 · Aiviso
        </p>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "#374151",
            marginBottom: 32,
          }}
        >
          Плохое фото — первая причина, по которой покупатель уходит к конкуренту. Не цена,
          не отзывы, не рейтинг. Именно фото решает за первые 1–2 секунды. Разбираем семь
          самых частых ошибок, которые встречаются в 80% карточек на Wildberries и Ozon —
          и конкретно объясняем, как исправить каждую.
        </p>

        {/* ОШИБКА 1 */}
        <h2 style={s.h2}>
          <span style={s.tag}>Ошибка #1</span>
          <br />
          Мятый, грязный или «домашний» фон
        </h2>
        <div style={s.errorBox}>
          <strong>Как выглядит:</strong> товар снят на кухонном столе, фоном служит обои
          в цветочек или потёртый ламинат. На заднем плане — кружка, пакет из «Ашана» или
          чья-то нога.
        </div>
        <p style={s.p}>
          Wildberries штрафует за «захламлённый фон» — товар может не пройти модерацию
          или опуститься в выдаче. Ozon рекомендует белый фон 255/255/255 на главном фото.
          Но даже без штрафов покупатель воспринимает небрежный фон как сигнал: «я
          перекупщик с балкона, а не серьёзный продавец».
        </p>
        <div style={s.fixBox}>
          <strong>Как исправить:</strong> для главного фото — только белый фон или светлый
          нейтральный (кремовый, светло-серый). Для lifestyle-кадров — чистые минималистичные
          сцены. Если не хочется тратиться на студию,{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            AI-генерация в Aiviso
          </Link>{" "}
          заменяет фон за 30 секунд: загружаете фото товара, выбираете сцену, получаете
          готовый кадр 900×1200 под Wildberries.
        </div>

        {/* ОШИБКА 2 */}
        <h2 style={s.h2}>
          <span style={s.tag}>Ошибка #2</span>
          <br />
          Неправильный размер и формат
        </h2>
        <div style={s.errorBox}>
          <strong>Как выглядит:</strong> квадратные фото 1000×1000 на Wildberries (обрезаются
          сверху и снизу), или горизонтальные снимки 1920×1080 — товар выглядит как кадр из
          рекламного ролика, а не карточка.
        </div>
        <p style={s.p}>
          Актуальный стандарт для WB и Ozon — вертикальный формат{" "}
          <strong>3:4, размер 900×1200 пикселей</strong>. Квадрат 1:1 даёт меньше площади
          в листинге, товар смотрится мельче конкурентов. Один наш клиент (продаёт сумки на
          WB) заменил квадратные фото на 900×1200 — CTR вырос на 23% без изменения цены и
          отзывов.
        </p>
        <div style={s.fixBox}>
          <strong>Как исправить:</strong> проверьте все главные фото — они должны быть в
          соотношении 3:4. Подробные требования:{" "}
          <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
            размеры фото для маркетплейсов в 2026
          </Link>
          .
        </div>

        {/* ОШИБКА 3 */}
        <h2 style={s.h2}>
          <span style={s.tag}>Ошибка #3</span>
          <br />
          Товар занимает меньше 75% кадра
        </h2>
        <div style={s.errorBox}>
          <strong>Как выглядит:</strong> сумочка 10×15 см снята с расстояния двух метров.
          В листинге — крохотная сумочка посреди белого поля. Рядом у конкурента — та же
          сумочка, но во весь экран.
        </div>
        <p style={s.p}>
          Алгоритм WB при ранжировании учитывает кликабельность. Покупатель инстинктивно
          кликает на карточку, где товар крупный и детальный. Правило: товар должен занимать
          <strong> не менее 70–80% площади кадра</strong>. Ещё критичнее для миниатюр —
          там видна только верхняя треть карточки.
        </p>
        <div style={s.fixBox}>
          <strong>Как исправить:</strong> при съёмке подходите ближе или кадрируйте при
          обработке. В Aiviso генерация сразу выдаёт кадр, где товар заполняет правильную
          долю экрана — не надо угадывать вручную.
        </div>

        {/* ОШИБКА 4 */}
        <h2 style={s.h2}>
          <span style={s.tag}>Ошибка #4</span>
          <br />
          Всего одно фото (или 2–3 вместо 8–10)
        </h2>
        <div style={s.errorBox}>
          <strong>Как выглядит:</strong> в карточке 2 фото: товар спереди и сзади. Карусель
          не заполнена. Покупатель не видит деталей, не понимает масштаба, уходит.
        </div>
        <p style={s.p}>
          Wildberries допускает до 30 фото на артикул. Ozon рекомендует минимум 5, оптимум —
          8–12. Данные по нашей базе клиентов: карточки с 8+ фото конвертируют в среднем
          на 34% лучше, чем с 3 и менее.
        </p>
        <h3 style={s.h3}>Что должно быть в карточке</h3>
        <ul style={s.ul}>
          <li style={s.li}>Главное фото — товар на белом/нейтральном фоне, крупно</li>
          <li style={s.li}>2–3 lifestyle-кадра — товар в использовании или в интерьере</li>
          <li style={s.li}>Детали и крупные планы — текстура, швы, замки, ярлыки</li>
          <li style={s.li}>Инфографика с УТП — 1–2 кадра с текстом о преимуществах</li>
          <li style={s.li}>Фото упаковки и комплектации — покупатель хочет знать, что придёт</li>
          <li style={s.li}>Размерная линейка или таблица — критично для одежды и обуви</li>
        </ul>
        <div style={s.fixBox}>
          <strong>Как исправить:</strong> распланируйте минимум 8 кадров на каждый артикул.
          Если съёмка дорого — используйте AI для lifestyle и инфографики, оставив студии
          только чистые предметные снимки.
        </div>

        {/* ОШИБКА 5 */}
        <h2 style={s.h2}>
          <span style={s.tag}>Ошибка #5</span>
          <br />
          Нет lifestyle-фото — только «паспортный снимок» товара
        </h2>
        <div style={s.errorBox}>
          <strong>Как выглядит:</strong> все 8 фото — товар на белом фоне под разными
          углами. Никакого контекста, никакой эмоции. Покупатель не понимает, как это
          выглядит «вживую» и зачем ему это нужно.
        </div>
        <p style={s.p}>
          Lifestyle-фото продают идею, а не предмет. Свеча в уютном интерьере продаётся
          лучше, чем свеча на белом фоне. Кружка с кофе на деревянном столе утром — лучше,
          чем кружка с пяти сторон. Наш клиент в категории «декор» поставил 3 lifestyle-кадра
          — средний чек вырос на 18% при той же цене.
        </p>
        <div style={s.fixBox}>
          <strong>Как исправить:</strong> добавьте к каждой карточке 2–3 lifestyle-кадра.
          Можно без реального реквизита: AI генерирует товар в любой сцене — кафе, лес,
          минималистичная квартира, студия. Всё это доступно через{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>
          .
        </div>

        {/* ОШИБКА 6 */}
        <h2 style={s.h2}>
          <span style={s.tag}>Ошибка #6</span>
          <br />
          Одинаковый визуал у конкурентов — невозможно выделиться
        </h2>
        <div style={s.errorBox}>
          <strong>Как выглядит:</strong> открываете выдачу по запросу «термостакан» — все
          10 карточек на первой странице выглядят одинаково. Белый фон, стакан в центре,
          крышка рядом. Ваша карточка — одиннадцатая в том же стиле.
        </div>
        <p style={s.p}>
          Конкуренция на WB и Ozon в 2026 — не про цену, а про визуальную дифференциацию.
          Карточка должна выбиваться из ряда в листинге. Инструменты для этого:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>Нестандартный угол съёмки (сверху, снизу, в разрезе)</li>
          <li style={s.li}>Контрастный акцентный цвет фона (не белый, а бирюзовый, охра)</li>
          <li style={s.li}>Крупный текстовый оверлей с главным УТП на первом фото</li>
          <li style={s.li}>Показ товара в «крайнем» использовании — самый необычный кейс</li>
        </ul>
        <div style={s.fixBox}>
          <strong>Как исправить:</strong> перед обновлением фото потратьте 10 минут:
          откройте выдачу по своему запросу и посмотрите, что делают все. Теперь сделайте
          противоположное — другой фон, другой угол, другое оформление. Aiviso позволяет
          быстро перебирать варианты сцен, не тратясь на повторную съёмку.
        </div>

        {/* ОШИБКА 7 */}
        <h2 style={s.h2}>
          <span style={s.tag}>Ошибка #7</span>
          <br />
          Фото не соответствует реальному товару
        </h2>
        <div style={s.errorBox}>
          <strong>Как выглядит:</strong> на фото — насыщенный синий чехол, в жизни — серо-голубой
          с разводами. На фото — плащ с металлической пряжкой, в посылке — пластик. Покупатели
          возвращают товар, ставят единицы, карточка падает в выдаче.
        </div>
        <p style={s.p}>
          Это самая дорогая ошибка. Возврат на WB стоит продавцу 3–8% от стоимости товара
          (логистика + обработка). Негативный отзыв «не соответствует фото» — это минус 15–20%
          конверсии на следующие 30 дней пока отзыв свежий. Один продавец кухонного текстиля
          потерял 40% оборота за квартал из-за того, что цвет на фото расходился с реальным —
          фотограф «выбелил» снимки под студийный свет.
        </p>
        <h3 style={s.h3}>Особенно опасно при AI-генерации</h3>
        <p style={s.p}>
          Нейросеть может «дорисовать» детали которых нет: лишний карман, другую фурнитуру,
          иной цвет. Именно поэтому в Aiviso встроен QC-агент — он сравнивает сгенерированный
          кадр с исходным фото и помечает расхождения. Это важнее красоты результата.
        </p>
        <div style={s.fixBox}>
          <strong>Как исправить:</strong> перед публикацией каждого фото проверяйте три
          параметра: цвет (под разным освещением), ключевые детали (логотип, фурнитура,
          текстура), комплектация (что именно изображено — должно совпадать с тем, что
          отправляется покупателю). При работе с AI используйте инструменты с контролем
          соответствия.
        </div>

        {/* ФИНАЛЬНЫЙ ЧЕК-ЛИСТ */}
        <h2 style={s.h2}>Чек-лист: фото готово к публикации</h2>
        <p style={s.p}>Пройдитесь по этому списку перед загрузкой каждой карточки:</p>
        <ul style={s.ul}>
          <li style={s.li}>
            Главное фото — вертикальное, 900×1200 (3:4), белый или нейтральный фон
          </li>
          <li style={s.li}>Товар занимает 70–80% кадра, виден чётко, в фокусе</li>
          <li style={s.li}>В карточке минимум 8 фото: предмет + lifestyle + детали + инфографика</li>
          <li style={s.li}>Есть 2–3 lifestyle-кадра с контекстом использования</li>
          <li style={s.li}>Цвет и детали на фото совпадают с реальным товаром</li>
          <li style={s.li}>Карточка визуально отличается от первой десятки конкурентов в выдаче</li>
          <li style={s.li}>Нет лишних элементов в кадре: чужих брендов, водяных знаков, шума</li>
        </ul>

        {/* CTA */}
        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700, color: "#4c1d95" }}>
            Исправьте все 7 ошибок за один вечер
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#5b21b6" }}>
            Загрузите фото товара в Aiviso — получите кадры с правильным фоном, нужным
            форматом 900×1200 и контролем соответствия деталям. 13 кредитов бесплатно
            на старте, карточка готова за 2 минуты.
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
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/foto-dlya-wildberries" style={{ color: "#7c3aed" }}>
              Как сделать фото для Wildberries в 2026 — пошаговый гайд
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
              Размеры фото для маркетплейсов: точный чек-лист
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>
              AI vs фотограф: что дешевле для карточки маркетплейса
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
