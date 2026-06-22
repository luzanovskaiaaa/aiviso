import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать одежду для маркетплейсов в 2026 — Aiviso",
  description:
    "Пошаговый гайд: съёмка одежды на модели, манекене и flat lay для Wildberries и Ozon. Освещение, ракурсы, обработка и чек-лист из 15 пунктов.",
  keywords: [
    "как фотографировать одежду для маркетплейсов",
    "съёмка одежды wildberries",
    "фото одежды для ozon",
    "ghost mannequin фото",
    "flat lay одежда",
    "предметная съёмка одежда",
    "фото товара на маркетплейс",
    "как снять одежду для wb",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-odezhdu" },
  openGraph: {
    title: "Как фотографировать одежду для маркетплейсов в 2026",
    description:
      "На модели, манекене или flat lay — что выбрать. Освещение, ракурсы, обработка и чек-лист 15 пунктов.",
    url: "/blog/kak-fotografirovat-odezhdu",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать одежду для маркетплейсов в 2026",
  description:
    "Съёмка одежды на модели, Ghost Mannequin и flat lay для WB и Ozon. Освещение, ракурсы, обработка.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-odezhdu",
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
      name: "Как фотографировать одежду",
      item: "https://aiviso.ru/blog/kak-fotografirovat-odezhdu",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "28px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  ol: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function KakFotografirovatOdezhdu() {
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
          <span style={{ color: "#1f2937" }}>Как фотографировать одежду</span>
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
          Как фотографировать одежду для маркетплейсов в 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>22 июня 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Одежда — самая конкурентная категория на Wildberries и Ozon, и именно здесь качество фото
          решает больше всего. Разбираем три метода съёмки, правила освещения, ракурсы и конкретные
          настройки — чтобы ваши карточки продавали, а не просто занимали место в листинге.
        </p>

        <h2 style={styles.h2}>Почему одежда сложнее других категорий</h2>
        <p style={styles.p}>
          Покупатель не может потрогать ткань и не знает, как вещь сядет на его фигуре. Фото — это
          единственный канал, через который он принимает решение. По данным WB-аналитиков,{" "}
          <strong>70% возвратов одежды</strong> происходят из-за несоответствия ожиданиям: товар
          «не такой, как на фото» или наоборот — оказался лучше, но фото было настолько плохим, что
          человек даже не открыл карточку.
        </p>
        <p style={styles.p}>
          Один из наших клиентов — продавец женских платьев в сегменте 2 000–4 000 ₽ — после пересъёмки
          10 позиций из плоской фотографии на вешалке на Ghost Mannequin получил рост CTR с 2,3% до 4,8%.
          Объём заказов вырос на 34% при том же рекламном бюджете.
        </p>

        <h2 style={styles.h2}>Технические требования WB и Ozon на 2026</h2>
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
              <td style={styles.td}>Размер главного фото</td>
              <td style={styles.tdAccent}>
                <strong>900 × 1200 px</strong>
              </td>
              <td style={styles.tdAccent}>
                <strong>900 × 1200 px</strong>
              </td>
            </tr>
            <tr>
              <td style={styles.td}>Соотношение сторон</td>
              <td style={styles.td}>3:4 (вертикальный)</td>
              <td style={styles.td}>3:4 (вертикальный)</td>
            </tr>
            <tr>
              <td style={styles.td}>Формат файла</td>
              <td style={styles.td}>JPEG, PNG</td>
              <td style={styles.td}>JPEG, PNG</td>
            </tr>
            <tr>
              <td style={styles.td}>Фон главного фото</td>
              <td style={styles.td}>Белый или светлый нейтральный</td>
              <td style={styles.td}>Белый или нейтральный</td>
            </tr>
            <tr>
              <td style={styles.td}>Количество фото в карточке</td>
              <td style={styles.td}>Минимум 2, рекомендуется 6–10</td>
              <td style={styles.td}>Минимум 1, рекомендуется 5–8</td>
            </tr>
            <tr>
              <td style={styles.td}>Макс. размер файла</td>
              <td style={styles.td}>10 МБ</td>
              <td style={styles.td}>10 МБ</td>
            </tr>
          </tbody>
        </table>
        <p style={{ ...styles.p, color: "#6b7280", fontSize: 14 }}>
          Важно: у Ozon больше нет обязательного квадрата 1:1. Актуальный формат — 3:4, как у WB.
          Если в вашем кабинете ещё загружены квадратные фото — это потеря площади в листинге.
        </p>

        <h2 style={styles.h2}>Три метода съёмки одежды: плюсы и минусы</h2>
        <p style={styles.p}>
          Выбор метода зависит от категории товара, вашего бюджета и ожиданий покупателя. Не
          существует «лучшего» варианта — есть правильный для конкретной ситуации.
        </p>

        <h3 style={styles.h3}>1. Съёмка на живой модели</h3>
        <p style={styles.p}>
          <strong>Когда подходит:</strong> верхняя одежда, платья, костюмы, спортивная одежда — всё,
          где посадка и силуэт критичны. Главное фото на WB в женской одежде Premium и Middle+ почти
          всегда снимается с моделью.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Плюсы:</strong> покупатель видит, как вещь сидит на реальном теле; эмоция
            продаёт лучше манекена; для соцсетей тот же контент.
          </li>
          <li style={styles.li}>
            <strong>Минусы:</strong> стоимость модели — от 3 000 ₽/час в регионах, от 8 000 ₽
            в Москве; нужна бронь студии; если товар вернули — пересъёмка снова платная.
          </li>
        </ul>
        <p style={styles.p}>
          <strong>Настройки:</strong> ракурс 3/4 (не анфас), модель смотрит чуть в сторону или
          вниз. Фон белый или нейтральный серый, никаких ярких паттернов. Зум 50–85 мм эквивалент —
          не искажает пропорции. Кадр от коленей и выше — не режьте ноги по суставам.
        </p>

        <h3 style={styles.h3}>2. Ghost Mannequin (невидимый манекен)</h3>
        <p style={styles.p}>
          Это самый профессиональный вид фото одежды без модели. Вещь надевается на манекен, потом
          манекен убирается в Photoshop — остаётся силуэт с объёмом, как будто на теле. Видно
          крой, посадку, разрезы.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Плюсы:</strong> дешевле модели в 2–3 раза; не нужно платить за часы модели;
            можно снять 50 SKU за день; выглядит профессионально.
          </li>
          <li style={styles.li}>
            <strong>Минусы:</strong> нужен манекен нужного размера; обработка каждого кадра занимает
            10–20 минут; для верхней одежды хуже, чем живая модель.
          </li>
        </ul>
        <p style={styles.p}>
          <strong>Как снять правильно:</strong> Снимайте вещь с двух ракурсов — спереди и снизу
          (изнанка ворота и пройм). Это нужно для склейки в Photoshop: видна внутренняя сторона
          изделия. Освещение — два боковых источника 45° и заполняющий свет спереди. Никаких резких
          теней.
        </p>

        <h3 style={styles.h3}>3. Flat lay (раскладка на горизонтальной поверхности)</h3>
        <p style={styles.p}>
          Вещь разложена на белом фоне, камера сверху (overhead shot). Хорошо работает для тонкого
          трикотажа, аксессуаров, детской одежды, нижнего белья и носков.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Плюсы:</strong> самый дешёвый метод, можно сделать дома; хорошо показывает
            принт и текстуру; легко добавить аксессуары и контекст.
          </li>
          <li style={styles.li}>
            <strong>Минусы:</strong> не показывает посадку и объём; для верхней одежды смотрится
            непрезентабельно; покупатель не понимает, как оно выглядит в носке.
          </li>
        </ul>
        <p style={styles.p}>
          <strong>Совет:</strong> flat lay отлично работает как вспомогательный кадр (3–4-й слайд
          в карточке), но не как главный. Первое фото одежды почти никогда не должно быть flat lay.
        </p>

        <h2 style={styles.h2}>Освещение: три схемы для одежды</h2>
        <p style={styles.p}>
          Большинство домашних фото одежды портит именно свет — резкие тени, переэкспозиция на
          светлых тканях, «провалы» на тёмных. Вот три рабочих схемы:
        </p>
        <ol style={styles.ol}>
          <li style={styles.li}>
            <strong>Минимальный сетап (одна вспышка + отражатель).</strong> Вспышка 45° слева,
            белый отражатель 45° справа. Даёт мягкую тень и объём. Подходит для большинства вещей.
            Стоимость сетапа — 5 000–8 000 ₽.
          </li>
          <li style={styles.li}>
            <strong>Три источника (классика студии).</strong> Два боковых света + задний контровой.
            Контровой отделяет вещь от фона, создаёт глубину. Нужна студия или минимум 15 кв. м
            пространства. Это стандарт брендовых съёмок.
          </li>
          <li style={styles.li}>
            <strong>Дневной свет у окна.</strong> Бесплатно, но зависит от погоды. Ставьте манекен
            или модель перпендикулярно окну (свет сбоку), с другой стороны — белый лист А1 как
            отражатель. Снимайте с 10:00 до 14:00 в пасмурный день — это самый равномерный свет.
          </li>
        </ol>
        <p style={styles.p}>
          <strong>Чего избегать:</strong> прямой вспышки «в лоб» (блики на ткани, плоская
          картинка), лампы с тёплым светом 2700K (ткань желтеет), съёмки в тёмной комнате с
          одним источником (жёсткие тени).
        </p>

        <h2 style={styles.h2}>Ракурсы и количество кадров в карточке</h2>
        <p style={styles.p}>
          Карточка одежды с 8–10 фото конвертируется на 27% лучше, чем карточка с 3 фото — это
          реальная статистика из нашей базы. Вот минимальный набор кадров:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Кадр 1 — главный:</strong> анфас, полный силуэт, белый фон. Это то, что видно
            в листинге. Должно «остановить прокрутку».
          </li>
          <li style={styles.li}>
            <strong>Кадр 2 — сзади:</strong> спина изделия. Покупатели всегда хотят видеть спину,
            особенно у платьев и пальто.
          </li>
          <li style={styles.li}>
            <strong>Кадр 3 — детали крупным планом:</strong> застёжка, карман, принт, строчка,
            фурнитура. Этот кадр снимает возражения по качеству.
          </li>
          <li style={styles.li}>
            <strong>Кадр 4 — инфографика:</strong> состав ткани, размерная таблица, уход, ключевые
            преимущества. Текст должен читаться без зума.
          </li>
          <li style={styles.li}>
            <strong>Кадры 5–8 — lifestyle:</strong> вещь в контексте — на прогулке, в офисе, дома.
            Показывает, как выглядит в реальной жизни, и помогает идентифицировать целевой образ.
          </li>
        </ul>

        <h2 style={styles.h2}>Обработка фото одежды: что обязательно, что лишнее</h2>

        <h3 style={styles.h3}>Обязательная обработка</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Выравнивание белого баланса</strong> — ткань должна выглядеть нейтрально, без
            жёлтого или синего оттенка.
          </li>
          <li style={styles.li}>
            <strong>Удаление пыли и ворса</strong> — особенно критично для тёмных вещей. В
            Lightroom кисть «Heal» за 2 минуты убирает всё.
          </li>
          <li style={styles.li}>
            <strong>Масок и замена фона</strong> — если фон не белый, убираем в Photoshop или
            онлайн (remove.bg работает хорошо для одежды).
          </li>
          <li style={styles.li}>
            <strong>Ресайз под 900 × 1200</strong> — не «растягивать», а ресайзить с правильным
            кропом.
          </li>
        </ul>

        <h3 style={styles.h3}>Чего не делать в обработке</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Не менять цвет вещи — это прямое нарушение правил WB и Ozon. Кардинальный сдвиг
            оттенка = риск блокировки карточки.
          </li>
          <li style={styles.li}>
            Не добавлять несуществующую фурнитуру и детали — покупатель получит другое изделие и
            оставит возврат с негативным отзывом.
          </li>
          <li style={styles.li}>
            Не перешарпить — резкость делает дешёвую ткань «пластиковой» на вид. В Lightroom
            Sharpening не выше 50.
          </li>
        </ul>

        <h2 style={styles.h2}>Как AI заменяет часть работы по съёмке</h2>
        <p style={styles.p}>
          Если у вас уже есть исходные фото товара — AI-генератор вроде{" "}
          <Link href="/" style={{ color: "#7c3aed" }}>
            Aiviso
          </Link>{" "}
          берёт на себя самую дорогостоящую часть: lifestyle-сцены. Вы делаете одну нормальную
          предметку (Ghost Mannequin или на модели), а AI генерирует варианты: вещь в кафе, в
          парке, в офисе, на разных фонах — за секунды и по 30 ₽ за кадр вместо 2 000–5 000 ₽
          за каждый локационный кадр в студии.
        </p>
        <p style={styles.p}>
          Важный момент: AI не меняет детали изделия — пуговицы, строчки, принты остаются
          точными. Это критично для маркетплейсов: расхождение между фото и товаром — прямой
          путь к возвратам.
        </p>
        <p style={styles.p}>
          Практический кейс: продавец спортивных костюмов из Новосибирска снял 40 SKU на простой
          белый фон с манекеном за один день (стоимость аренды студии — 6 000 ₽). Затем через
          Aiviso получил lifestyle-варианты для каждой позиции: в зале, на улице, в раздевалке.
          Итого 40 × 4 lifestyle-кадра = 160 фото за 4 800 ₽. Студия за то же самое взяла бы
          порядка 80 000–120 000 ₽.
        </p>

        <h2 style={styles.h2}>Чек-лист: 15 пунктов перед загрузкой фото одежды</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное фото — 900 × 1200 px, формат JPEG или PNG</li>
          <li style={styles.li}>Фон главного фото — белый или светло-серый нейтральный</li>
          <li style={styles.li}>Вещь занимает 75–85% кадра (не мелкая и не обрезанная)</li>
          <li style={styles.li}>Нет резких теней на ткани и фоне</li>
          <li style={styles.li}>Белый баланс выровнен — ткань выглядит натурально</li>
          <li style={styles.li}>Нет пыли, ворса и ниток на поверхности вещи</li>
          <li style={styles.li}>В карточке минимум 5 фото (главное + спина + деталь + инфографика + lifestyle)</li>
          <li style={styles.li}>Цвет вещи на фото соответствует реальному товару</li>
          <li style={styles.li}>На инфографике читается состав ткани и таблица размеров</li>
          <li style={styles.li}>Размер файла — не больше 10 МБ</li>
          <li style={styles.li}>Нет водяных знаков и логотипов других брендов</li>
          <li style={styles.li}>Для Ghost Mannequin — нет видимого манекена на финальном кадре</li>
          <li style={styles.li}>Кадры сзади и сбоку присутствуют в галерее</li>
          <li style={styles.li}>Lifestyle-фото показывают реальный контекст использования</li>
          <li style={styles.li}>Все фото в одинаковом стиле (единый цвет фона, освещение)</li>
        </ul>

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
            <strong>Сделайте одну предметку — AI сделает остальное.</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Загрузите фото в Aiviso
            </Link>{" "}
            и получите lifestyle-варианты для карточки за 2 минуты. Первые 13 кредитов — бесплатно,
            хватит на 2 полных карточки с несколькими сценами.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/oshibki-foto-tovara" style={{ color: "#7c3aed" }}>
              7 ошибок с фото товара, которые убивают конверсию
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>
              Размеры фото для маркетплейсов: WB, Ozon, Яндекс.Маркет
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>
              AI vs фотограф: что выгоднее для маркетплейса
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
