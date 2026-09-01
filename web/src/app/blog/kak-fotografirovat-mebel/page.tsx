import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать мебель для маркетплейсов: гайд 2026",
  description: "Освещение, ракурсы, фоны и постановка сцен для мебели. Чек-лист из 20 пунктов и кейс: CTR с 1.6% до 4.2% после пересъёмки дивана без студии.",
  keywords: [
    "фото мебели для маркетплейса",
    "съёмка мебели wildberries",
    "фотографировать мебель ozon",
    "карточка мебели wb",
    "lifestyle фото мебели",
    "фото интерьера для маркетплейса",
    "как сделать фото мебели",
    "ai фото мебели",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-mebel" },
  openGraph: {
    title: "Как фотографировать мебель для маркетплейсов: гайд 2026",
    description: "Освещение, ракурсы, фоны и постановка сцен для мебели. Чек-лист из 20 пунктов и кейс: CTR с 1.6% до 4.2% после пересъёмки дивана без студии.",
    url: "/blog/kak-fotografirovat-mebel",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать мебель для маркетплейсов: гайд 2026",
  description: "Освещение, ракурсы, фоны и постановка сцен для мебели на WB и Ozon. Чек-лист из 20 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-01",
  dateModified: "2026-09-01",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-mebel",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Как фотографировать мебель", item: "https://aiviso.ru/blog/kak-fotografirovat-mebel" },
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

export default function KakFotografirovatMebel() {
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
          <span style={{ color: "#1f2937" }}>Как фотографировать мебель</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как фотографировать мебель для маркетплейсов: пошаговый гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>1 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Мебель — одна из самых сложных категорий для фотосъёмки на маркетплейсах: крупный габарит,
          проблемы с отражениями, необходимость передать масштаб и текстуру материала. Один наш клиент,
          продавец диванов на Wildberries, поднял CTR с 1.6% до 4.2% за три недели — без новой студии
          и без фотографа, только сменив подход к освещению и ракурсам. В этом гайде разбираем, как это работает.
        </p>

        <h2 style={styles.h2}>Почему фото мебели — это отдельная задача</h2>
        <p style={styles.p}>
          Покупатель мебели на маркетплейсе не может потрогать диван или проверить, войдёт ли шкаф в нишу.
          Всё решение принимается по фото. Три главных вопроса, на которые должна отвечать карточка:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Как это выглядит в реальной комнате?</strong> — нужны lifestyle-кадры в интерьере</li>
          <li style={styles.li}><strong>Какой размер?</strong> — без масштабного объекта (человека, стандартного предмета) понять размер невозможно</li>
          <li style={styles.li}><strong>Какой материал?</strong> — текстура ткани, фактура дерева, блеск металла передаются только правильным светом</li>
        </ul>
        <p style={styles.p}>
          По статистике WB, карточки мебели с lifestyle-фоном показывают на 60–80% выше CTR, чем карточки
          на белом фоне. При этом большинство селлеров до сих пор загружают только белый фон — это прямая
          возможность обогнать конкурентов без рекламы.
        </p>

        <h2 style={styles.h2}>Освещение: главное правило для мебели</h2>
        <p style={styles.p}>
          Мебель хорошо выглядит при мягком рассеянном свете. Жёсткий прямой свет от вспышки даёт резкие
          тени, «выжигает» текстуру ткани и создаёт блики на лакированных поверхностях.
        </p>

        <h3 style={styles.h3}>Схема освещения для домашней съёмки</h3>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Основной источник — большое окно сбоку.</strong> Ставьте диван или стул так, чтобы окно
            было справа или слева от объекта под углом 45°. Прямой свет из окна даёт длинную тень — красиво.</li>
          <li style={styles.li}><strong>Заполнение теневой стороны — белый отражатель или лист пенокартона.</strong>
            Прибейте к стене лист белого пенокартона 1×1.5 м напротив окна. Он смягчит тени и не даст провалиться фактуре.</li>
          <li style={styles.li}><strong>Тёплый свет вечером — хуже.</strong> Утренний или дневной свет даёт нейтральный баланс белого,
            вечерний — жёлтый оттенок. Снимайте с 10 до 16 часов.</li>
          <li style={styles.li}><strong>Если нет окна достаточного размера</strong> — два LED-панели на штативах, каждая прикрыта
            диффузором (матовая ткань). Цветовая температура 5500–6000K.</li>
        </ul>

        <h3 style={styles.h3}>Распространённые ошибки с освещением</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Вспышка в лоб — даёт плоскую картинку, убивает объём</li>
          <li style={styles.li}>Съёмка в пасмурный день без дополнительного света — серые провальные тени</li>
          <li style={styles.li}>Два источника с разной цветовой температурой — один синий, другой жёлтый, мебель
            выглядит с цветными пятнами</li>
          <li style={styles.li}>Прямые солнечные полосы на поверхности — резкие светлые пятна, которые отвлекают</li>
        </ul>

        <h2 style={styles.h2}>Ракурсы: сколько и каких кадров нужно</h2>
        <p style={styles.p}>
          WB рекомендует минимум 5–7 фото в карточке, Ozon — 6–8. Для мебели оптимально 8–10 кадров.
          Вот разбивка по типам:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Кадр</th>
              <th style={styles.th}>Что показывает</th>
              <th style={styles.th}>Слайд</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Lifestyle в интерьере — 3/4 спереди</td>
              <td style={styles.td}>Общий вид, вписанность в комнату</td>
              <td style={styles.tdAccent}><strong>1 (главный)</strong></td>
            </tr>
            <tr>
              <td style={styles.td}>Белый фон — анфас</td>
              <td style={styles.td}>Чистые пропорции, цвет без искажений</td>
              <td style={styles.td}>2</td>
            </tr>
            <tr>
              <td style={styles.td}>Крупный план текстуры</td>
              <td style={styles.td}>Материал: ткань, дерево, металл</td>
              <td style={styles.td}>3</td>
            </tr>
            <tr>
              <td style={styles.td}>Вид сбоку с размерами</td>
              <td style={styles.td}>Глубина, высота, функция</td>
              <td style={styles.td}>4</td>
            </tr>
            <tr>
              <td style={styles.td}>Lifestyle с человеком</td>
              <td style={styles.td}>Масштаб относительно тела</td>
              <td style={styles.td}>5</td>
            </tr>
            <tr>
              <td style={styles.td}>Детали и фурнитура</td>
              <td style={styles.td}>Ножки, ручки, швы, стыки</td>
              <td style={styles.td}>6–7</td>
            </tr>
            <tr>
              <td style={styles.td}>Инфографика с размерами</td>
              <td style={styles.td}>Точные габариты без чертежей</td>
              <td style={styles.td}>8</td>
            </tr>
          </tbody>
        </table>

        <h3 style={styles.h3}>Главный слайд: lifestyle, не белый фон</h3>
        <p style={styles.p}>
          Для мебели первый слайд на белом фоне — это потеря CTR. Покупатель видит безликий предмет,
          который не вызывает эмоции. Первый кадр должен показывать мебель в комнате — пусть это будет
          минималистичный угол квартиры с тремя декоративными предметами. Именно такой кадр стал причиной
          роста CTR нашего клиента: диван в реальной гостиной против дивана на белом фоне у конкурентов.
        </p>

        <h2 style={styles.h2}>Фоны и сцены: как создать интерьер без ремонта</h2>
        <p style={styles.p}>
          Не нужна дизайнерская квартира. Достаточно трёх-пяти предметов, которые создают «настроение» комнаты.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Нейтральная стена.</strong> Белая, светло-серая или светло-бежевая стена — универсальный
            фон для любой мебели. Избегайте обоев с рисунком — они конкурируют с товаром.</li>
          <li style={styles.li}><strong>Деревянный или ламинатный пол.</strong> Паркет или ламинат смотрится лучше плитки
            в большинстве категорий. Если пол неподходящий — стелите ковёр под мебель.</li>
          <li style={styles.li}><strong>Декор: минимум три предмета.</strong> Вазочка, книга и плед на диване уже создают
            «жилой» вид. Четыре-пять предметов — максимум, иначе перегруженность.</li>
          <li style={styles.li}><strong>Растение.</strong> Небольшой фикус или суккулент в углу — мгновенно оживляет сцену
            и не привлекает лишнего внимания.</li>
          <li style={styles.li}><strong>Свет в кадре.</strong> Торшер или настольная лампа как реквизит (не как источник
            света) делает сцену уютной и реалистичной.</li>
        </ul>

        <h3 style={styles.h3}>Что не работает в мебельных сценах</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Слишком много предметов — смотрится как склад</li>
          <li style={styles.li}>Дешёвый текстиль как декор — дешёвый плед «топит» даже хороший диван</li>
          <li style={styles.li}>Несочетающиеся стили — минималистичный диван и викторианская рама на стене</li>
          <li style={styles.li}>Видимые провода, выключатели, плинтусы в плохом состоянии — клиент
            замечает детали, которые продавец уже не видит</li>
        </ul>

        <h2 style={styles.h2}>Передача масштаба: обязательный элемент</h2>
        <p style={styles.p}>
          Человек на фото с диваном мгновенно даёт понимание размера — лучше любых цифр в описании.
          Проблема: не все продавцы готовы снимать с моделью. Три способа обозначить масштаб без модели:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Инфографика с размерами прямо на кадре.</strong> Белая стрелка с подписью
            «210 см» вдоль дивана снимает вопрос. Делается в любом редакторе за 3 минуты.</li>
          <li style={styles.li}><strong>Стандартный предмет рядом.</strong> Торшер стандартной высоты (около 170 см),
            прикроватная тумба известного размера — покупатель интуитивно ощущает пропорции.</li>
          <li style={styles.li}><strong>Человеческий силуэт.</strong> Если не хочется показывать лицо — фото сзади
            или силуэт в проёме. Работает хуже полноценной модели, но лучше отсутствия человека.</li>
        </ul>

        <h2 style={styles.h2}>Съёмка крупных предметов: практика</h2>
        <h3 style={styles.h3}>Диваны и кресла</h3>
        <p style={styles.p}>
          Снимайте с высоты около 120–130 см от пола (чуть ниже уровня глаз стоячего человека), угол
          45° к фронту. Этот ракурс передаёт глубину сиденья и не делает диван «плоским». Избегайте
          съёмки снизу — диван выглядит нависающим.
        </p>

        <h3 style={styles.h3}>Шкафы и стеллажи</h3>
        <p style={styles.p}>
          Для высоких предметов нужно отойти дальше или снять чуть сверху (встать на стул). Главная
          проблема — «падающая» вертикаль: если снимать снизу, шкаф выглядит трапецией, которая
          сужается вверху. Исправляется либо отходом на 3–4 метра с длинным фокусом, либо коррекцией
          перспективы в редакторе.
        </p>

        <h3 style={styles.h3}>Столы и письменные столешницы</h3>
        <p style={styles.p}>
          Снимайте с уровня столешницы плюс 20–30 см. Этот ракурс показывает рабочую поверхность
          и ножки одновременно. Положите на стол один-два реквизитных предмета (книга, чашка, ноутбук)
          — стол из пустого «деревянного прямоугольника» превращается в рабочее место.
        </p>

        <h2 style={styles.h2}>Обработка фото мебели</h2>
        <p style={styles.p}>
          Мебель требует минимальной ретуши — главное не «пережарить». Покупатель хочет видеть
          реальный цвет, а не идеализированный.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Баланс белого.</strong> Главное — нейтральный, не жёлтый и не синий. Проверьте
            по белым или серым поверхностям в кадре.</li>
          <li style={styles.li}><strong>Контраст умеренно.</strong> Небольшое поднятие контраста подчёркивает текстуру.
            Слишком сильное — делает ткань «искусственной».</li>
          <li style={styles.li}><strong>Тени не убирать в ноль.</strong> Полное осветление теней убирает объём.
            Оставьте лёгкую тень под ножками — она «приземляет» предмет на пол.</li>
          <li style={styles.li}><strong>Кроп под 3:4.</strong> Обязательный формат для WB и Ozon — вертикальный 900×1200.
            Для мебели это может быть сложно: широкий диван плохо вписывается в вертикаль. Решение —
            снять чуть дальше и оставить воздух сверху и снизу.</li>
        </ul>

        <h2 style={styles.h2}>AI-генерация для мебели: когда это работает</h2>
        <p style={styles.p}>
          AI-инструменты вроде <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> особенно
          полезны для мебели в двух сценариях:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Смена интерьера без переезда.</strong> Один и тот же диван в пяти разных
            интерьерах — скандинавском, лофт, классика, минимализм, прованс. На студии это пять разных
            съёмок. В Aiviso — 15 минут и 150 ₽.</li>
          <li style={styles.li}><strong>Вариации цвета.</strong> Диван продаётся в шести расцветках, снимать все
            нет возможности — AI перекрашивает обивку сохраняя текстуру и форму.</li>
          <li style={styles.li}><strong>Сезонные обновления.</strong> Один и тот же стеллаж с летним декором
            (светлые тона, зелень) и с зимним (тёплые пледы, свечи) — повышает кликабельность
            в соответствующие периоды.</li>
        </ul>
        <p style={styles.p}>
          Важный момент: AI хорошо справляется с фоновой заменой и перестановкой акцентов. Для
          передачи тонкой текстуры тканей (велюр, рогожка) и деревянных фактур — исходное фото
          должно быть чётким, с хорошим светом. AI работает от исходника, плохое фото даст плохой результат.
        </p>

        <h2 style={styles.h2}>Чек-лист: 20 пунктов перед загрузкой фото мебели</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Первый слайд — lifestyle в интерьере, не белый фон</li>
          <li style={styles.li}>На главном фото нет провалившихся теней</li>
          <li style={styles.li}>Цвет мебели соответствует реальному (проверьте на экране рядом с образцом)</li>
          <li style={styles.li}>Есть хотя бы один кадр с человеком или масштабным объектом</li>
          <li style={styles.li}>Есть инфографика с размерами (ДxВxШ)</li>
          <li style={styles.li}>Есть крупный план текстуры материала</li>
          <li style={styles.li}>Вертикали шкафов и стеллажей не «падают» (нет трапецевидного искажения)</li>
          <li style={styles.li}>Все кадры в формате 3:4 (900×1200 для WB и Ozon)</li>
          <li style={styles.li}>Нет бликов на лакированных поверхностях</li>
          <li style={styles.li}>Нет видимых проводов, розеток и мусора в кадре</li>
          <li style={styles.li}>Фоновые стены нейтральных цветов, без пёстрых обоев</li>
          <li style={styles.li}>Декора в сцене не больше 4–5 предметов</li>
          <li style={styles.li}>Декор сочетается по стилю с мебелью</li>
          <li style={styles.li}>Есть кадр анфас на белом или нейтральном фоне</li>
          <li style={styles.li}>Есть кадр сбоку для оценки глубины</li>
          <li style={styles.li}>Для разборной мебели — кадр со вскрытой упаковкой или схема сборки</li>
          <li style={styles.li}>Для мягкой мебели — кадр крупным планом шва и фурнитуры</li>
          <li style={styles.li}>Минимум 7 фото в карточке (Ozon рекомендует 8, WB — 7)</li>
          <li style={styles.li}>Файлы не менее 900×1200px, формат JPEG или PNG</li>
          <li style={styles.li}>Нет водяных знаков и логотипов на фото (нарушение правил маркетплейсов)</li>
        </ul>

        <h2 style={styles.h2}>Сколько стоит съёмка мебели и что выгоднее</h2>
        <p style={styles.p}>
          Мебель — самый дорогой сегмент для профессиональной съёмки. Вот реальные цифры рынка 2026:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Формат</th>
              <th style={styles.th}>Стоимость (1 предмет)</th>
              <th style={styles.th}>Сроки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Фотостудия с интерьером</td>
              <td style={styles.td}>15 000 – 40 000 ₽</td>
              <td style={styles.td}>5–14 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Фотограф на выезде</td>
              <td style={styles.td}>8 000 – 20 000 ₽</td>
              <td style={styles.td}>3–7 дней</td>
            </tr>
            <tr>
              <td style={styles.td}>Самостоятельно + обработка</td>
              <td style={styles.td}>500 – 2 000 ₽ (редактор)</td>
              <td style={styles.td}>1–2 дня</td>
            </tr>
            <tr>
              <td style={styles.td}>AI (lifestyle-фоны из предметки)</td>
              <td style={styles.tdAccent}><strong>300 – 600 ₽</strong></td>
              <td style={styles.tdAccent}><strong>30 минут</strong></td>
            </tr>
          </tbody>
        </table>
        <p style={styles.p}>
          Оптимальный путь для большинства мебельных селлеров: один раз снять предметку на нейтральном
          фоне (самостоятельно или с фотографом на несложном выезде), а затем с помощью AI создать
          lifestyle-сцены для разных интерьеров и сезонов. Итого на 10 предметов мебели — около
          15 000 ₽ вместо 150 000 ₽ на студии.
        </p>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: 0, fontSize: 15, color: "#5b21b6" }}>
            <strong>Хочешь попробовать AI-интерьеры для своей мебели?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Открыть Aiviso</Link>
            {" "}— загрузи фото дивана или стола на белом фоне, и получи 5 вариантов в разных
            интерьерных стилях за 2 минуты. 13 кредитов бесплатно на старте.
          </p>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14 }}>
          <li style={{ margin: "6px 0" }}><Link href="/blog/fony-dlya-kartochki-tovara" style={{ color: "#7c3aed" }}>Фоны и сцены для карточки товара: что реально работает на WB и Ozon</Link></li>
          <li style={{ margin: "6px 0" }}><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки товара: 8 правил первого слайда</Link></li>
          <li style={{ margin: "6px 0" }}><Link href="/blog/ai-vs-fotograf" style={{ color: "#7c3aed" }}>AI vs фотограф: что выгоднее для карточки на маркетплейсе</Link></li>
          <li style={{ margin: "6px 0" }}><Link href="/blog/razmery-foto-marketpleysov" style={{ color: "#7c3aed" }}>Размеры фото для маркетплейсов: чек-лист</Link></li>
          <li style={{ margin: "6px 0" }}><Link href="/" style={{ color: "#7c3aed" }}>Aiviso — AI-генерация фото для маркетплейсов</Link></li>
        </ul>
      </article>
    </>
  );
}
