import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Хэндмейд на Wildberries и Ozon: как продавать авторские товары — Aiviso",
  description:
    "Как продавать хэндмейд на WB и Ozon в 2026: категории, ценообразование, фото, SEO и защита авторства. Чек-лист из 20 пунктов и кейс: 0 до 180 000 ₽/мес.",
  keywords: [
    "хэндмейд на wildberries",
    "как продавать хэндмейд на маркетплейсе",
    "авторские товары ozon",
    "ручная работа маркетплейс",
    "продажа хэндмейд wb",
    "хэндмейд бизнес маркетплейс 2026",
    "как фотографировать хэндмейд",
    "хэндмейд ценообразование",
  ],
  alternates: { canonical: "/blog/hendmejd-na-marketpleyse-2026" },
  openGraph: {
    title: "Хэндмейд на WB и Ozon: полный гайд для авторских продавцов 2026",
    description:
      "Категории, ценообразование, фото и SEO для хэндмейд-товаров. Кейс: 0 до 180 000 ₽/мес на авторских украшениях.",
    url: "/blog/hendmejd-na-marketpleyse-2026",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Хэндмейд на Wildberries и Ozon: как продавать авторские товары в 2026",
  description:
    "Полный гайд по продаже хэндмейд и авторских товаров на российских маркетплейсах: категории, ценообразование, фото, SEO и защита бренда.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/hendmejd-na-marketpleyse-2026",
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
      name: "Хэндмейд на маркетплейсе",
      item: "https://aiviso.ru/blog/hendmejd-na-marketpleyse-2026",
    },
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

export default function HendmejdNaMarketpleyse() {
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
          <span style={{ color: "#1f2937" }}>Хэндмейд на маркетплейсе</span>
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
          Хэндмейд на Wildberries и Ozon: как продавать авторские товары в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>24 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Маркетплейсы перестали быть площадкой только для оптовых перекупщиков. Авторы украшений,
          керамики, вязаных вещей и декора делают на WB и Ozon от 50 000 до 300 000 ₽ в месяц —
          без шоурума, без Instagram и без личных продаж. Разберём, как построить это с нуля.
        </p>

        <h2 style={styles.h2}>Почему хэндмейд продаётся на маркетплейсах</h2>
        <p style={styles.p}>
          До 2022 года мастера работали через ярмарки и Instagram. Потом аудитория переместилась на
          маркетплейсы, и теперь покупатель ищет «вязаный свитер ручной работы» именно на WB —
          там есть доставка за два дня, возможность вернуть и защита покупателя.
        </p>
        <p style={styles.p}>
          Для мастера это означает: миллионная аудитория без затрат на рекламу. Алгоритм WB
          сам выдаёт карточку тем, кто ищет нужный товар. Один наш клиент — мастер по авторским
          кожаным кошелькам — получил первые 47 заказов за 11 дней без рубля рекламы, просто
          выложив карточку с хорошими фотографиями и правильными ключевыми словами.
        </p>

        <h2 style={styles.h2}>Какие категории хэндмейда продаются лучше всего</h2>
        <p style={styles.p}>
          Не весь хэндмейд одинаково хорошо работает на маркетплейсах. Вот категории с живым
          спросом и приемлемой конкуренцией в 2026:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Категория</th>
              <th style={styles.th}>Ср. цена</th>
              <th style={styles.th}>Конкуренция</th>
              <th style={styles.th}>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Украшения и бижутерия</td>
              <td style={styles.td}>800–3 500 ₽</td>
              <td style={styles.td}>Высокая</td>
              <td style={styles.td}>Выигрывает качество фото</td>
            </tr>
            <tr>
              <td style={styles.td}>Вязаные вещи (одежда, аксессуары)</td>
              <td style={styles.td}>1 200–6 000 ₽</td>
              <td style={styles.td}>Средняя</td>
              <td style={styles.tdAccent}>Хороший спрос осенью и зимой</td>
            </tr>
            <tr>
              <td style={styles.td}>Свечи и декор</td>
              <td style={styles.td}>400–2 000 ₽</td>
              <td style={styles.td}>Средняя</td>
              <td style={styles.td}>Высокий сезон — ноябрь–январь</td>
            </tr>
            <tr>
              <td style={styles.td}>Керамика и посуда</td>
              <td style={styles.td}>1 500–8 000 ₽</td>
              <td style={styles.td}>Низкая</td>
              <td style={styles.tdAccent}>Мало предложения, высокая маржа</td>
            </tr>
            <tr>
              <td style={styles.td}>Кожгалантерея</td>
              <td style={styles.td}>2 000–12 000 ₽</td>
              <td style={styles.td}>Низкая</td>
              <td style={styles.td}>Долгий цикл производства, но стабильный спрос</td>
            </tr>
            <tr>
              <td style={styles.td}>Текстиль и постельное бельё</td>
              <td style={styles.td}>1 800–7 000 ₽</td>
              <td style={styles.td}>Высокая</td>
              <td style={styles.td}>Нужен чёткий отличительный USP</td>
            </tr>
            <tr>
              <td style={styles.td}>Картины и принты</td>
              <td style={styles.td}>1 200–15 000 ₽</td>
              <td style={styles.td}>Средняя</td>
              <td style={styles.td}>Работает в подарочном сегменте</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Что не стоит нести на маркетплейс</h3>
        <p style={styles.p}>
          Хэндмейд с высокой трудоёмкостью и маленькой ценой — ловушка. Если изделие занимает
          6 часов работы, а продаётся за 600 ₽, после вычета комиссии 15–25% и логистики
          остаётся 400–450 ₽. Час труда — меньше 80 ₽. Это не бизнес.
        </p>
        <p style={styles.p}>
          Также сложно продавать очень крупные вещи — маркетплейс берёт дорогую логистику,
          и себестоимость улетает. Крупная мебель, массивная скульптура — тут лучше работают
          прямые продажи или Авито.
        </p>

        <h2 style={styles.h2}>Как считать цену на хэндмейд</h2>
        <p style={styles.p}>
          Самая частая ошибка начинающих мастеров — занижать цену «чтобы купили». Это путь
          к выгоранию. Правильная формула:
        </p>
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "16px 0",
          }}
        >
          <p style={{ margin: 0, fontFamily: "monospace", fontSize: 15 }}>
            Цена продажи = (Материалы + Время × ставка) × 3–4 + логистика + комиссия
          </p>
        </div>
        <p style={styles.p}>Пример для кожаного кошелька:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Материалы: 350 ₽</li>
          <li style={styles.li}>Время работы: 3 часа × 300 ₽/ч = 900 ₽</li>
          <li style={styles.li}>Итого себестоимость: 1 250 ₽</li>
          <li style={styles.li}>× 3 = 3 750 ₽ — минимальная продажная цена</li>
          <li style={styles.li}>Комиссия WB 15%: −562 ₽</li>
          <li style={styles.li}>Логистика: −100 ₽</li>
          <li style={styles.li}>
            <strong>Чистая прибыль: ~2 088 ₽ с единицы</strong>
          </li>
        </ul>
        <p style={styles.p}>
          Многие боятся ставить 3 750 ₽, думая «у конкурентов дешевле». Но на маркетплейсах
          высокая цена — это сигнал качества. Керамист из Краснодара поставил чашки по 1 800 ₽
          вместо 900 ₽, и конверсия выросла с 2.1% до 3.8% — покупатели стали воспринимать
          товар как авторский, а не ширпотреб.
        </p>

        <h2 style={styles.h2}>Как фотографировать хэндмейд для маркетплейса</h2>
        <p style={styles.p}>
          Для авторских товаров фото — половина продажи. Покупатель не может потрогать изделие,
          не видит текстуру и не чувствует размер. Ваша задача — передать это через кадр.
        </p>

        <h3 style={styles.h3}>Главное фото: белый фон или сцена</h3>
        <p style={styles.p}>
          Для хэндмейда, в отличие от стандартного товара, lifestyle-сцена часто работает лучше
          белого фона. Кожаный кошелёк на деревянном столе с кофе передаёт образ жизни.
          Вязаный свитер на вешалке у окна — уют. Керамическая кружка на утреннем подносе —
          эстетику. Это даёт CTR выше на 30–50% по сравнению с «предметкой на белом».
        </p>
        <p style={styles.p}>
          Но первый слайд должен чётко показывать сам товар — без лишних деталей,
          которые отвлекают внимание.
        </p>

        <h3 style={styles.h3}>Сколько фото делать</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Слайд 1:</strong> Товар крупно, чистый фон или нейтральная сцена
          </li>
          <li style={styles.li}>
            <strong>Слайды 2–3:</strong> Детали и текстура — то, что отличает ваш товар от
            фабричного
          </li>
          <li style={styles.li}>
            <strong>Слайд 4:</strong> Инфографика с размерами или составом материала
          </li>
          <li style={styles.li}>
            <strong>Слайд 5:</strong> Lifestyle-сцена «в использовании»
          </li>
          <li style={styles.li}>
            <strong>Слайд 6:</strong> Упаковка (для подарочного сегмента — критично)
          </li>
        </ul>
        <p style={styles.p}>
          AI-генерация отлично подходит для хэндмейда: можно создать lifestyle-сцены из
          исходной предметки, поменять фон и контекст — за минуты и без студии.{" "}
          <Link href="/app" style={{ color: "#7c3aed" }}>
            Попробуйте Aiviso
          </Link>{" "}
          — загружаете фото своего изделия, выбираете сцену и получаете готовые кадры для
          карточки.
        </p>

        <h2 style={styles.h2}>SEO для хэндмейд-карточки</h2>
        <p style={styles.p}>
          Маркетплейсы не знают слова «хэндмейд» в алгоритме — они знают конкретные запросы
          покупателей. Ваша карточка должна называть товар так, как его ищут.
        </p>

        <h3 style={styles.h3}>Как собрать ключевые слова</h3>
        <p style={styles.p}>Введите в поисковую строку WB или Ozon ваш тип товара и запишите подсказки:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>«кошелёк кожаный» → кошелёк кожаный женский, кошелёк кожаный ручной работы</li>
          <li style={styles.li}>«свитер вязаный» → свитер вязаный женский оверсайз, свитер ручной вязки</li>
          <li style={styles.li}>«кружка керамическая» → кружка керамическая ручная работа, кружка авторская</li>
        </ul>
        <p style={styles.p}>
          Слова «ручная работа», «авторский», «хэндмейд» — добавляйте в заголовок только если
          они реально ищутся. Проверьте через WordStat или MPStats. Если частотность меньше
          500 запросов в месяц — не тратьте место в заголовке.
        </p>

        <h3 style={styles.h3}>Структура заголовка</h3>
        <p style={styles.p}>
          Формула: <em>Тип товара + Ключевое свойство + Материал + Назначение</em>
        </p>
        <p style={styles.p}>
          Пример: «Кошелёк кожаный женский ручной работы bifold тёмно-коричневый» — это
          и что за товар, и из чего, и для кого. Заголовок вмещает 3–4 главных ключа.
        </p>

        <h2 style={styles.h2}>Документы и юридические вопросы</h2>
        <p style={styles.p}>
          Многие мастера думают, что хэндмейд продавать без документов нельзя. На практике
          всё зависит от категории:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Украшения без камней и металлов под Честный знак:</strong> обычно достаточно
            отказного письма
          </li>
          <li style={styles.li}>
            <strong>Вязаные изделия (одежда):</strong> нужна декларация соответствия ГОСТ Р — её
            делают аккредитованные лаборатории, стоит 5 000–15 000 ₽
          </li>
          <li style={styles.li}>
            <strong>Свечи:</strong> сертификат пожарной безопасности — специфика категории
          </li>
          <li style={styles.li}>
            <strong>Керамика (посуда для еды):</strong> требуется санитарно-эпидемиологическое
            заключение
          </li>
          <li style={styles.li}>
            <strong>Декор, картины, украшения интерьера:</strong> чаще всего достаточно
            отказного письма
          </li>
        </ul>
        <p style={styles.p}>
          Перед запуском — проверьте требования вашей категории в личном кабинете WB или Ozon
          в разделе «Документы». Маркетплейс прямо пишет, что нужно для каждой категории.
        </p>

        <h2 style={styles.h2}>Защита авторских товаров: стоит ли регистрировать торговый знак</h2>
        <p style={styles.p}>
          Проблема реальная: конкурент видит, что ваш хэндмейд продаётся, заказывает аналог
          в Китае и продаёт дешевле с похожим названием. Защита от этого — регистрация
          товарного знака (торговой марки).
        </p>
        <p style={styles.p}>
          Стоит ли это делать с первого дня? Нет. Начните регистрацию, когда оборот перевалил
          за 200 000 ₽/мес и у вас есть стабильное название бренда. Регистрация через Роспатент
          стоит около 33 000 ₽ госпошлины + услуги поверенного, занимает 12–18 месяцев.
        </p>
        <p style={styles.p}>
          До регистрации — защищайте через контент. Делайте фото с брендированной упаковкой,
          добавляйте логотип в уголок изображений, ведите страницу магазина с историей бренда.
          Это усложняет жизнь копировщикам.
        </p>

        <h2 style={styles.h2}>Чек-лист запуска хэндмейда на маркетплейсе</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Выбрана категория с достаточным спросом (проверено через MPStats или WB Аналитику)</li>
          <li style={styles.li}>Посчитана юнит-экономика: цена покрывает материалы, время, комиссию и логистику с маржой 30%+</li>
          <li style={styles.li}>Проверены документы — что нужно для вашей категории</li>
          <li style={styles.li}>Сделано 6+ фото: предметка, детали, инфографика, lifestyle, упаковка</li>
          <li style={styles.li}>Написан заголовок по формуле: тип + свойство + материал + назначение</li>
          <li style={styles.li}>Заполнены все характеристики (не оставлено пустых полей)</li>
          <li style={styles.li}>Написано описание 500–800 символов с ключевыми словами в начале</li>
          <li style={styles.li}>Сделан мини-запас: минимум 5–10 единиц перед запуском (иначе алгоритм не выдаёт карточку)</li>
          <li style={styles.li}>Выбрана схема FBS (самовыкуп) или FBO (склад маркетплейса) — для хэндмейда лучше FBS пока объём маленький</li>
          <li style={styles.li}>Первые 3–5 покупок сделаны через знакомых с реальным отзывом (белая схема — купить, использовать, написать честно)</li>
          <li style={styles.li}>Настроена упаковка с вложением-вкладышем (название бренда, инструкция по уходу, соцсети)</li>
          <li style={styles.li}>Отслеживаются CTR и конверсия в ЛК через 2 недели после запуска</li>
          <li style={styles.li}>Если CTR меньше 2% — меняется главное фото</li>
          <li style={styles.li}>Если конверсия меньше 3% — пересматривается описание и инфографика</li>
          <li style={styles.li}>Включена хотя бы одна акция маркетплейса (WB Подборки, Ozon Скидки) для первого буста</li>
          <li style={styles.li}>После 20 заказов — анализ возвратов: что покупатели пишут, что не совпало с ожиданиями</li>
          <li style={styles.li}>Цена пересмотрена через 30 дней: при хорошем спросе можно поднять на 10–15%</li>
          <li style={styles.li}>Расширяется ассортимент: добавляются варианты цветов, размеров или дополняющих товаров</li>
          <li style={styles.li}>Оформлена страница магазина: логотип, баннер, описание с историей бренда</li>
          <li style={styles.li}>При обороте 200 000+ ₽/мес рассматривается регистрация торговой марки</li>
        </ul>

        <h2 style={styles.h2}>Кейс: с нуля до 180 000 ₽/мес на авторских свечах</h2>
        <p style={styles.p}>
          Мастер из Нижнего Новгорода делала свечи с сухоцветами и продавала через Instagram —
          максимум 12 000 ₽/мес. В феврале 2025 зарегистрировалась на Ozon и Wildberries.
        </p>
        <p style={styles.p}>Что сделала по шагам:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Фото:</strong> сделала 8 кадров дома, потом добавила AI-lifestyle-сцены
            через Aiviso — стоимость 15 генераций около 450 ₽
          </li>
          <li style={styles.li}>
            <strong>Цена:</strong> подняла с 490 ₽ до 890 ₽ — и конверсия не упала
          </li>
          <li style={styles.li}>
            <strong>SEO:</strong> добавила «свеча с сухоцветами», «свеча ароматическая ручной
            работы» в заголовок и характеристики
          </li>
          <li style={styles.li}>
            <strong>Запас:</strong> начала с 30 штук на складе FBO
          </li>
        </ul>
        <p style={styles.p}>
          Через 3 месяца вышла на 180 000 ₽/мес оборота. После вычета материалов (себестоимость
          ~180 ₽/шт) и комиссий — около 65 000 ₽ чистыми. Ключевым оказался переход на FBO:
          алгоритм WB начал активнее выдавать карточку после того, как товар лёг на склад.
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
            <strong>Сделайте фото для карточки за 2 минуты.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Попробуйте Aiviso
            </Link>{" "}
            — загрузите фото своего изделия, и AI создаст lifestyle-сцены для WB и Ozon. 13 кредитов
            бесплатно на старте — хватит на 2 полных карточки.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/kak-fotografirovat-ukrasheniya" style={{ color: "#7c3aed" }}>
              Как фотографировать украшения и бижутерию для маркетплейса
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/unit-ekonomika-marketpleis" style={{ color: "#7c3aed" }}>
              Юнит-экономика для маркетплейса: формула и типичные ошибки
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              Главное фото карточки товара: 8 правил первого слайда
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
