import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать детские товары для маркетплейсов — Aiviso",
  description: "Освещение, фоны, ракурсы и правила съёмки детских товаров для WB и Ozon. Чек-лист из 20 пунктов и кейс: CTR с 2.1% до 5.4% после пересъёмки игрушек.",
  keywords: [
    "фото детских товаров для wildberries",
    "съёмка детских товаров ozon",
    "как фотографировать игрушки для маркетплейса",
    "фото детской одежды wildberries",
    "детские товары карточка wb",
    "фотосъёмка детского питания",
    "требования к фото детских товаров",
    "ai фото детский товар",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-detskie-tovary" },
  openGraph: {
    title: "Как фотографировать детские товары для маркетплейсов: гайд 2026",
    description: "Освещение, фоны, ракурсы для игрушек, одежды и питания. Чек-лист из 20 пунктов и кейс: CTR с 2.1% до 5.4%.",
    url: "/blog/kak-fotografirovat-detskie-tovary",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать детские товары для маркетплейсов: гайд 2026",
  description: "Освещение, фоны, ракурсы и правила съёмки детских товаров для Wildberries и Ozon. Чек-лист из 20 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-detskie-tovary",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Фото детских товаров", item: "https://aiviso.ru/blog/kak-fotografirovat-detskie-tovary" },
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

export default function KakFotografirovatDetskieTovary() {
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
          <span style={{ color: "#1f2937" }}>Фото детских товаров</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как фотографировать детские товары для маркетплейсов: гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Обновлено 26 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Детские товары — одна из самых конкурентных категорий на Wildberries и Ozon: покупатели здесь
          изучают каждый кадр внимательнее, чем в любой другой категории. Родители смотрят на цвет,
          фактуру, размер, состав — и если фото не отвечает на эти вопросы, уходят к конкуренту.
          Разбираем, как снимать игрушки, детскую одежду, питание и аксессуары так, чтобы карточка
          продавала.
        </p>

        <h2 style={styles.h2}>Почему детские товары снимать сложнее</h2>
        <p style={styles.p}>
          В категории «Детские товары» покупатель принимает решение за другого человека — за ребёнка.
          Это создаёт повышенную тревожность: родитель боится ошибиться с размером, купить что-то
          небезопасное или получить товар, который окажется дешевле на вид чем в жизни.
        </p>
        <p style={styles.p}>
          Из-за этого фото должно делать три вещи одновременно:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Показывать реальный размер</strong> — игрушка рядом с предметом или рукой взрослого.</li>
          <li style={styles.li}><strong>Транслировать безопасность</strong> — мягкие края, нетоксичные цвета, аккуратные швы.</li>
          <li style={styles.li}><strong>Создавать эмоцию</strong> — ребёнок счастлив, игрушка в действии, одежда на живой модели.</li>
        </ul>
        <p style={styles.p}>
          Один наш клиент в категории «Мягкие игрушки» получил рост CTR с 2.1% до 5.4% после того,
          как добавил в карточку кадр с рукой взрослого рядом с игрушкой. Покупатели наконец поняли
          реальный размер зайца — оказалось, что предыдущие фото создавали ощущение маленького
          брелока, а товар был 40 см.
        </p>

        <h2 style={styles.h2}>Типы детских товаров и подход к съёмке</h2>
        <p style={styles.p}>
          У каждой подкатегории свои правила. Один подход для всего не работает.
        </p>

        <h3 style={styles.h3}>Игрушки и развивающие материалы</h3>
        <p style={styles.p}>
          Главное — показать масштаб и функцию. Для кубиков, пазлов и сортеров обязателен кадр
          «в процессе использования» — частично собранная картинка или рассыпанные элементы
          выглядят вовлечённо и натурально.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый слайд: товар целиком на белом или пастельном фоне, крупно.</li>
          <li style={styles.li}>Второй слайд: рядом с рукой взрослого или линейкой — для передачи размера.</li>
          <li style={styles.li}>Третий слайд: крупный план деталей — текстура, швы, замки, кнопки.</li>
          <li style={styles.li}>Четвёртый слайд: lifestyle — ребёнок играет (если есть фотограф с моделью) или товар в среде обитания: на ковре, на полке, в руках взрослого.</li>
          <li style={styles.li}>Пятый слайд: инфографика с указанием возраста, материала и ключевых характеристик.</li>
        </ul>

        <h3 style={styles.h3}>Детская одежда</h3>
        <p style={styles.p}>
          Детская одежда продаётся лучше на манекене или модели, чем в flat lay. Плоский вид
          не передаёт посадку и скрывает объём — особенно важно для курток и комбинезонов.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Манекен-невидимка (Ghost Mannequin)</strong> — лучший вариант для большинства позиций: объём есть, модели нет, цена ниже.</li>
          <li style={styles.li}><strong>Flat lay</strong> — подходит для боди, носков, шапок, платков. Фон — светло-серый или мятный, не белый (сливается с белыми изделиями).</li>
          <li style={styles.li}>Для маленьких размеров (0–12 мес.) добавляйте кадр рядом с взрослой ладонью или мерной лентой.</li>
          <li style={styles.li}>Цвет на фото должен совпадать с реальным: снимайте при дневном свете или нейтральном 5500K. Перенасыщенные цвета — главная причина возвратов в детской одежде.</li>
        </ul>

        <h3 style={styles.h3}>Детское питание и гигиена</h3>
        <p style={styles.p}>
          Для питания и косметики правило одно: покупатель должен прочитать состав и сроки на фото.
          Не заставляйте его идти в описание.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый слайд: упаковка крупно, лицевая сторона. Текст на этикетке читабелен.</li>
          <li style={styles.li}>Второй слайд: задняя сторона упаковки с составом — именно её ищут родители.</li>
          <li style={styles.li}>Третий слайд: инфографика с возрастом от, ключевыми ингредиентами и отличиями от конкурентов.</li>
          <li style={styles.li}>Для кремов и мазей — кадр с нанесением текстуры на руку (показывает консистенцию).</li>
        </ul>

        <h2 style={styles.h2}>Освещение: главная ошибка в детской съёмке</h2>
        <p style={styles.p}>
          Самый частый провал — жёсткий верхний свет. Он создаёт резкие тени под игрушками и делает
          мягкие материалы (плюш, трикотаж) похожими на пластик. Для детских товаров нужен мягкий
          рассеянный свет.
        </p>
        <p style={styles.p}>
          Бюджетная схема без студии:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Основной источник</strong> — окно с рассеянным дневным светом (не прямые лучи). Товар ставится в 50–80 см от окна.</li>
          <li style={styles.li}><strong>Отражатель</strong> — лист белого пенопласта или белый картон с противоположной стороны. Убирает тени, делает свет равномерным.</li>
          <li style={styles.li}><strong>Цветовая температура</strong> — 5000–5500K. При другой температуре белая одежда уходит в жёлтый или синий, и товар выглядит грязным.</li>
          <li style={styles.li}>Мягкие игрушки снимайте немного под углом 45° сверху — так видно объём и фактуру ворса.</li>
        </ul>

        <h2 style={styles.h2}>Фоны по категориям</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Рабочий фон</th>
              <th style={styles.th}>Чего избегать</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Мягкие игрушки</td>
              <td style={styles.tdAccent}>Белый, светло-серый, пастельный (мятный, персиковый)</td>
              <td style={styles.td}>Тёмный — теряется фактура ворса</td>
            </tr>
            <tr>
              <td style={styles.td}>Деревянные игрушки</td>
              <td style={styles.td}>Белый или натуральный (светлое дерево, лён)</td>
              <td style={styles.td}>Яркий — уводит внимание от натуральной текстуры</td>
            </tr>
            <tr>
              <td style={styles.td}>Детская одежда 0–3 года</td>
              <td style={styles.tdAccent}>Светло-серый, белый, молочный</td>
              <td style={styles.td}>Белый для белых вещей — сливается</td>
            </tr>
            <tr>
              <td style={styles.td}>Детское питание</td>
              <td style={styles.td}>Белый или чистый светлый — нейтрально, медицинский вид</td>
              <td style={styles.td}>Lifestyle-фоны с едой рядом — WB и Ozon не пропускают</td>
            </tr>
            <tr>
              <td style={styles.td}>Развивающие материалы</td>
              <td style={styles.td}>Белый или деревянный (столешница)</td>
              <td style={styles.td}>Слишком яркий — конкурирует с цветами самого товара</td>
            </tr>
            <tr>
              <td style={styles.td}>Коляски и крупный товар</td>
              <td style={styles.td}>Белый (студия) или lifestyle на нейтральном фоне улицы</td>
              <td style={styles.td}>Загромождённый фон — покупатель смотрит не на коляску</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Сколько фото нужно в карточке</h2>
        <p style={styles.p}>
          Для детских товаров минимум — 6 кадров. Оптимум — 8–10. Логика такая:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>1 кадр</strong> — главное фото: товар целиком, крупно, белый/пастельный фон.</li>
          <li style={styles.li}><strong>2 кадр</strong> — масштаб: рядом с ладонью, линейкой или знакомым предметом.</li>
          <li style={styles.li}><strong>3 кадр</strong> — детали: швы, застёжки, текстура, состав (этикетка).</li>
          <li style={styles.li}><strong>4 кадр</strong> — другой ракурс или вариант цвета/размера.</li>
          <li style={styles.li}><strong>5–6 кадр</strong> — инфографика: возраст, материал, сертификаты, преимущества.</li>
          <li style={styles.li}><strong>7–8 кадр</strong> — lifestyle или товар «в действии» (если есть).</li>
        </ul>
        <p style={styles.p}>
          WB позволяет загрузить до 30 фото, Ozon — до 15. Но покупатель смотрит первые 4–5 на
          листинге. Именно они решают, откроет ли он карточку вообще.
        </p>

        <h2 style={styles.h2}>Особые правила для детских товаров на WB и Ozon</h2>
        <p style={styles.p}>
          Маркетплейсы строже относятся к фото детских товаров, чем к большинству других категорий.
          Вот что реально проверяют модераторы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Детские модели в карточке</strong> — допустимо при наличии согласия родителей, но WB периодически просит документы. Проще использовать манекен-невидимку или безмодельный flat lay.</li>
          <li style={styles.li}><strong>Сертификаты безопасности</strong> — отдельный кадр с плашкой «Сертифицировано» или ЕАС повышает доверие и снижает возвраты. Не замена реальному сертификату, но визуальный маркер для родителей.</li>
          <li style={styles.li}><strong>Возраст на фото</strong> — обязательно указывайте «от X лет» или «0+» на инфографике. Покупатели ищут именно по этому критерию, и видимость в листинге фильтра по возрасту зависит от атрибутов карточки, а не от фото — но дублирование в инфографике снижает возвраты.</li>
          <li style={styles.li}><strong>Опасные элементы на фото</strong> — не показывайте товар в сценах, где ребёнок явно в опасности (например, игрушка рядом с острыми предметами для «художественности»). Модерация снимет.</li>
          <li style={styles.li}><strong>Несоответствие цвета</strong> — самая частая причина возврата в детской одежде. Снимайте при нейтральном свете, не корректируйте насыщенность в обработке.</li>
        </ul>

        <h2 style={styles.h2}>AI-генерация для детских товаров: где работает, где нет</h2>
        <p style={styles.p}>
          AI справляется с большинством задач при съёмке детских товаров, но есть нюансы.
        </p>
        <h3 style={styles.h3}>Что AI делает хорошо</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Lifestyle-фоны для игрушек: детская комната, деревянный пол, ковёр — AI генерирует реалистично.</li>
          <li style={styles.li}>Смена фона с белого на пастельный без пересъёмки — быстро и точно.</li>
          <li style={styles.li}>Масштабирование под форматы WB и Ozon (900×1200) из одного исходного кадра.</li>
          <li style={styles.li}>Инфографика с добавлением текста и иконок поверх фото товара.</li>
        </ul>
        <h3 style={styles.h3}>Где AI требует проверки</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Мелкие детали игрушек — пуговицы, вышивка, застёжки. AI может «доработать» их иначе. В <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> есть QC-агент, который сравнивает результат с оригиналом и отмечает расхождения.</li>
          <li style={styles.li}>Цвет одежды — особенно пастельные оттенки. Всегда сверяйте с оригиналом в нейтральном освещении.</li>
          <li style={styles.li}>Lifestyle с детьми — AI не рисует детские лица (политика безопасности моделей). Для таких кадров нужен реальный фотограф.</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов в категории «Детские развивающие игрушки» перешёл на гибридную схему:
          предметная съёмка на белом фоне дома (15 минут на 1 товар) + AI-генерация lifestyle-сцен.
          Стоимость кадра упала с 800 ₽ (студия) до 45 ₽. CTR вырос с 3.1% до 4.7% — родители
          увидели игрушку в живой обстановке детской комнаты.
        </p>

        <h2 style={styles.h2}>Чек-лист: 20 пунктов перед загрузкой фото детского товара</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото — товар целиком, занимает 80–90% кадра.</li>
          <li style={styles.li}>Фон белый или пастельный, без текстуры которая конкурирует с товаром.</li>
          <li style={styles.li}>Цветовая температура съёмки 5000–5500K (нейтральный белый).</li>
          <li style={styles.li}>Нет резких теней под товаром (мягкий рассеянный свет).</li>
          <li style={styles.li}>Масштаб понятен без описания (рядом линейка, ладонь или знакомый предмет).</li>
          <li style={styles.li}>Фактура материала читается: видны ворс, трикотажная петля, деревянная текстура.</li>
          <li style={styles.li}>Все швы и застёжки в порядке — нет торчащих ниток, перекошенных деталей.</li>
          <li style={styles.li}>Цвет на экране совпадает с реальным товаром (сверьте при дневном свете).</li>
          <li style={styles.li}>Для одежды: вещь расправлена, нет складок которых нет на товаре.</li>
          <li style={styles.li}>Состав/этикетка читается хотя бы на одном кадре.</li>
          <li style={styles.li}>Возраст («от 3 лет», «0+») указан на инфографике.</li>
          <li style={styles.li}>Инфографика содержит ключевые характеристики: материал, размер, что входит в набор.</li>
          <li style={styles.li}>Если есть сертификат — плашка ЕАС или «Сертифицировано» на одном из слайдов.</li>
          <li style={styles.li}>Карточка содержит минимум 6 кадров.</li>
          <li style={styles.li}>Разрешение каждого кадра минимум 900×1200 пикс (формат 3:4).</li>
          <li style={styles.li}>Нет водяных знаков фотографа или стоков.</li>
          <li style={styles.li}>Для наборов: показан весь комплект + каждый элемент отдельно.</li>
          <li style={styles.li}>Lifestyle-кадр (если есть) — товар «в действии» или в обстановке детской.</li>
          <li style={styles.li}>AI-результат сверен с оригиналом: детали не изменены, цвет не ушёл.</li>
          <li style={styles.li}>Первые 4 кадра проверены в мобильном браузере — они отображаются в листинге.</li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки и как их исправить</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ошибка</th>
              <th style={styles.th}>Что происходит</th>
              <th style={styles.th}>Как исправить</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Нет кадра с масштабом</td>
              <td style={styles.td}>Покупатель не понимает размер, боится ошибиться, уходит</td>
              <td style={styles.tdAccent}>Добавить кадр с ладонью или линейкой</td>
            </tr>
            <tr>
              <td style={styles.td}>Белая вещь на белом фоне</td>
              <td style={styles.td}>Товар сливается, форма теряется</td>
              <td style={styles.td}>Сменить фон на светло-серый (#f3f4f6)</td>
            </tr>
            <tr>
              <td style={styles.td}>Один кадр в карточке</td>
              <td style={styles.td}>WB и Ozon понижают позиции, покупатель не доверяет</td>
              <td style={styles.td}>Минимум 6 кадров по схеме выше</td>
            </tr>
            <tr>
              <td style={styles.td}>Перенасыщенный цвет в обработке</td>
              <td style={styles.td}>Товар выглядит ярче, возвраты из-за несоответствия ожиданиям</td>
              <td style={styles.td}>Убрать коррекцию насыщенности, снять при 5500K</td>
            </tr>
            <tr>
              <td style={styles.td}>Состав не виден</td>
              <td style={styles.td}>Родители уходят к конкуренту, который показал состав</td>
              <td style={styles.td}>Отдельный кадр с задней стороной упаковки или инфографикой</td>
            </tr>
            <tr>
              <td style={styles.td}>Нет инфографики с возрастом</td>
              <td style={styles.td}>Сомнения в подходящем возрасте — отказ от покупки</td>
              <td style={styles.td}>Добавить плашку «от 3 лет» / «0+» на 5–6 слайде</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хотите сделать lifestyle-фото детского товара без студии?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Попробуйте Aiviso</Link>
            {" "}— загрузите фото на белом фоне, выберите сцену «детская комната», получите готовый
            кадр за 2 минуты. 13 кредитов бесплатно при регистрации. QC-агент проверит, что все
            детали игрушки сохранены.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}><Link href="/blog/kak-fotografirovat-odezhdu" style={{ color: "#7c3aed" }}>Как фотографировать одежду для маркетплейсов</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>7 ошибок с фото товара, которые убивают конверсию</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>Инфографика для карточки WB и Ozon: что писать и как оформить</Link></li>
          <li style={{ marginBottom: 8 }}><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
