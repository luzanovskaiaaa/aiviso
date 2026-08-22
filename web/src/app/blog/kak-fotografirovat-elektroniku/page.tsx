import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать электронику для маркетплейсов: гайд 2026",
  description: "Съёмка без бликов, освещение, ракурсы и фоны для телефонов, наушников, умных часов. Чек-лист из 18 пунктов и кейс: CTR с 2.4% до 5.1% после пересъёмки.",
  keywords: [
    "как фотографировать электронику",
    "съёмка гаджетов для маркетплейса",
    "фото электроники wildberries",
    "съёмка наушников ozon",
    "блики при съёмке электроники",
    "фото телефона для маркетплейса",
    "предметная съёмка гаджетов",
    "как снять умные часы для wildberries",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-elektroniku" },
  openGraph: {
    title: "Как фотографировать электронику для маркетплейсов: гайд 2026",
    description: "Съёмка без бликов и отражений: освещение, ракурсы, фоны для телефонов, наушников и умных часов.",
    url: "/blog/kak-fotografirovat-elektroniku",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать электронику и гаджеты для маркетплейсов: гайд 2026",
  description: "Съёмка без бликов, освещение, ракурсы и фоны для телефонов, наушников, умных часов. Чек-лист из 18 пунктов.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-22",
  dateModified: "2026-08-22",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-elektroniku",
  inLanguage: "ru-RU",
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://aiviso.ru/" },
    { "@type": "ListItem", position: 2, name: "Блог", item: "https://aiviso.ru/blog" },
    { "@type": "ListItem", position: 3, name: "Как фотографировать электронику", item: "https://aiviso.ru/blog/kak-fotografirovat-elektroniku" },
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

export default function KakFotografirovatElektroniku() {
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
          <span style={{ color: "#1f2937" }}>Как фотографировать электронику</span>
        </nav>

        <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "8px 0 12px", lineHeight: 1.15 }}>
          Как фотографировать электронику и гаджеты для маркетплейсов: гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>22 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Электроника — одна из самых сложных категорий для съёмки: глянцевые корпуса, стеклянные экраны и металлические вставки собирают блики со всего студийного света. Один наш клиент, продавец TWS-наушников в категории «Электроника» на Wildberries, поднял CTR с 2.4% до 5.1% после пересъёмки по этому алгоритму — без покупки нового оборудования.
        </p>

        <h2 style={styles.h2}>Почему электроника сложнее других категорий</h2>
        <p style={styles.p}>
          Косметику и одежду испортить светом сложно — матовые поверхности прощают многое. Гаджет с глянцевым экраном или хромированной рамкой мгновенно поймает белое пятно от каждого источника света, который видит поверхность. Это три структурных проблемы:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Зеркальные поверхности</strong> — отражают весь окружающий реквизит, студию и фотографа. На финальном кадре видно потолок, штативы и ваш силуэт.</li>
          <li style={styles.li}><strong>Тёмные дисплеи</strong> — выглядят как чёрная дыра на фото, не передают ощущение работающего устройства.</li>
          <li style={styles.li}><strong>Мелкие детали</strong> — порты, кнопки, маркировка — именно они убеждают покупателя в качестве. Если они смазаны или пересвечены, карточка проигрывает конкурентам.</li>
        </ul>
        <p style={styles.p}>
          Стандартная студийная схема с двумя стрипбоксами по бокам, которая хорошо работает для бытовых товаров, для гаджетов даёт «двойное отражение полос» — особенно заметно на наушниках и умных часах.
        </p>

        <h2 style={styles.h2}>Освещение: как убрать блики</h2>
        <p style={styles.p}>
          Главный принцип съёмки электроники — <strong>мягкий, рассеянный свет с большой площадью источника</strong>. Точечный свет (лампочки, LED-ленты, маленькие вспышки) гарантируют блики. Вот три рабочих схемы:
        </p>

        <h3 style={styles.h3}>Схема 1: лайтбокс или диффузная палатка</h3>
        <p style={styles.p}>
          Съёмочная палатка-куб (40×40 или 60×60 см) рассеивает свет со всех сторон и практически полностью убирает зеркальные отражения. Стоимость — от 1 500 до 4 000 ₽. Это стандарт для массовой съёмки мелкой электроники: наушников, power bank, смарт-браслетов.
        </p>

        <h3 style={styles.h3}>Схема 2: большой октабокс сверху</h3>
        <p style={styles.p}>
          Один большой источник (октабокс 90–120 см) расположен строго сверху под углом 10–15° от вертикали даёт равномерную подсветку без перекрёстных бликов. Рефлектор снизу подсвечивает тени. Минимальный комплект: стойка + октабокс + белый пенопласт как рефлектор.
        </p>

        <h3 style={styles.h3}>Схема 3: подсветка через матовое стекло или акрил</h3>
        <p style={styles.p}>
          Товар кладут на акриловую пластину, под которой — источник света. Эффект: предмет «парит» на светящемся фоне. Отлично работает для наушников и кейсов, хуже — для больших устройств (телефоны, ноутбуки), потому что дисплей при этом остаётся тёмным.
        </p>

        <h2 style={styles.h2}>Фоны по типу товара</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Тип товара</th>
              <th style={styles.th}>Рекомендуемый фон</th>
              <th style={styles.th}>Почему</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Белые и светлые гаджеты (AirPods, белые TWS)</td>
              <td style={styles.td}>Светло-серый (#f0f0f0), не чисто белый</td>
              <td style={styles.td}>Белый фон «съедает» края белого корпуса — товар теряет форму</td>
            </tr>
            <tr>
              <td style={styles.td}>Чёрная электроника (наушники, power bank)</td>
              <td style={styles.td}>Белый или светло-серый</td>
              <td style={styles.td}>Максимальный контраст, чёрный товар не «тонет»</td>
            </tr>
            <tr>
              <td style={styles.td}>Умные часы, браслеты</td>
              <td style={styles.tdAccent}>Тёмный градиент (#1a1a2e → #16213e)</td>
              <td style={styles.td}>Премиальный вид, экран выглядит активным на тёмном фоне</td>
            </tr>
            <tr>
              <td style={styles.td}>Телефоны и планшеты</td>
              <td style={styles.td}>Нейтральный серый или lifestyle-сцена (стол, рука)</td>
              <td style={styles.td}>На белом фоне дисплей — просто чёрный прямоугольник, нет контекста</td>
            </tr>
            <tr>
              <td style={styles.td}>Портативные колонки, клавиатуры</td>
              <td style={styles.td}>Деревянная поверхность или конкретная lifestyle-сцена</td>
              <td style={styles.td}>Показывает товар в контексте использования — работает на конверсию</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.h2}>Ракурсы которые работают в листинге</h2>
        <p style={styles.p}>
          Алгоритмы WB и Ozon показывают первый кадр в 3:4, и этот кадр — единственное, что видит покупатель перед кликом. Для электроники оптимальные ракурсы главного фото:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Фронт + угол 30°.</strong> Три четверти спереди — самый информативный вид: видно фронтальную панель, боковой профиль и объём. Работает для телефонов, ноутбуков, колонок.</li>
          <li style={styles.li}><strong>Вид сверху.</strong> Для плоских объектов — наушники в кейсе, умные часы на ремешке, клавиатура. Показывает товар полностью без искажений.</li>
          <li style={styles.li}><strong>Контекст в руке.</strong> Для носимых гаджетов (браслеты, TWS, кольцо) — товар на запястье или пальце. Покупатель сразу понимает размер и то, как будет выглядеть.</li>
        </ul>
        <p style={styles.p}>
          Последующие кадры (слайды 2–7) должны показывать: разъёмы и порты крупным планом, комплектацию, функциональные характеристики в инфографике, товар в работе или в использовании.
        </p>

        <h2 style={styles.h2}>Типичные ошибки при съёмке электроники</h2>
        <p style={styles.p}>
          Разбор карточек конкурентов в категориях «Электроника», «Наушники» и «Умные часы» показывает одни и те же промахи:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Тёмный экран.</strong> Телефон или умные часы с выключенным экраном выглядят как муляж. Либо монтируют mock-up интерфейса в Photoshop, либо фотографируют с включённым экраном через поляризационный фильтр.</li>
          <li style={styles.li}><strong>Белая полоса-отражение.</strong> Характерна для наушников с глянцевым кейсом — в центре кейса белое пятно от источника света. Убирается переходом к мягкому свету из куба или октабокса.</li>
          <li style={styles.li}><strong>Отражение фотографа</strong> в чёрном экране или хромированной вставке. Решение: полная чёрная съёмочная коробка (flag) со щелью для объектива.</li>
          <li style={styles.li}><strong>Кривой горизонт.</strong> Для плоских объектов вид сверху должен быть строго перпендикулярен плоскости. 2–3° отклонения — и карточка выглядит небрежно.</li>
          <li style={styles.li}><strong>Пыль и отпечатки.</strong> На глянцевых поверхностях видна каждая пылинка. Протирать микрофиброй прямо перед каждой серией кадров — не опция, а обязательный шаг.</li>
          <li style={styles.li}><strong>Кадрирование без запаса.</strong> Маркетплейсы кадрируют превью автоматически. Если товар вплотную к краям кадра — часть обрежется. Нужен запас 15–20% от каждого края.</li>
        </ul>

        <h2 style={styles.h2}>AI-генерация для электроники: когда это работает</h2>
        <p style={styles.p}>
          AI-генерация (как в <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link>) особенно хорошо справляется с задачами, где реальная съёмка дорогая или неудобная:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Lifestyle-сцены без студии.</strong> Наушники на рабочем столе с ноутбуком, умные часы на запястье во время пробежки — AI генерирует такие сцены по исходному фото товара за 2–3 минуты. Реальная съёмка подобного стоила бы 8 000–15 000 ₽ с моделью.</li>
          <li style={styles.li}><strong>Цветовые вариации.</strong> Если у вас наушники в 5 цветах, но образцы не все на руках — AI генерирует недостающие варианты из одного исходника.</li>
          <li style={styles.li}><strong>Фон под сезон.</strong> Зимние подарочные промо, летние коллекции — смена сцены без пересъёмки.</li>
          <li style={styles.li}><strong>Инфографика поверх фото.</strong> AI + редактор — быстрее, чем работа с дизайнером, когда нужно добавить надписи о ёмкости аккумулятора или времени работы.</li>
        </ul>
        <p style={styles.p}>
          Один из наших клиентов — продавец power bank на WB — обновил все 6 карточек за одну неделю через AI: сделал предметку на белом фоне сам дома, загрузил в Aiviso, получил lifestyle-сцены и инфографику. CTR вырос в среднем на 1.8 п.п., продажи за следующие 14 дней — на 34%.
        </p>

        <h2 style={styles.h2}>Чек-лист: 18 пунктов перед загрузкой на WB и Ozon</h2>
        <p style={styles.p}>Пройдитесь по каждому пункту перед публикацией карточки:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Поверхность товара протёрта микрофиброй, нет пыли и отпечатков</li>
          <li style={styles.li}>Нет белых пятен или полос-отражений на корпусе</li>
          <li style={styles.li}>Нет отражения фотографа или студийного оборудования в экране</li>
          <li style={styles.li}>Горизонт ровный (для топ-вью: строго перпендикулярно)</li>
          <li style={styles.li}>Товар занимает 70–80% кадра, с запасом от краёв 15–20%</li>
          <li style={styles.li}>Главный кадр — лучший угол обзора, максимально информативный</li>
          <li style={styles.li}>Экран: либо выключен и это нормально смотрится, либо показывает дизайн интерфейса (mock-up)</li>
          <li style={styles.li}>Фон не конфликтует с цветом корпуса (белый на белом — плохо)</li>
          <li style={styles.li}>Размер кадра для WB: 900×1200 px, формат JPEG или PNG</li>
          <li style={styles.li}>Размер кадра для Ozon: 900×1200 px (не 1000×1000)</li>
          <li style={styles.li}>В наборе минимум 6–8 кадров: фронт, три четверти, детали, комплектация</li>
          <li style={styles.li}>Есть кадр с масштабной линейкой или предметом-маркером размера (рука, монета)</li>
          <li style={styles.li}>Порты, кнопки и разъёмы показаны крупным планом хотя бы на одном кадре</li>
          <li style={styles.li}>Комплектация (кабель, чехол, ушные вкладыши) показана отдельным кадром</li>
          <li style={styles.li}>Есть инфографика с ключевыми характеристиками (ёмкость, время работы, совместимость)</li>
          <li style={styles.li}>Все кадры единого стиля, одинакового фона (нет разнобоя)</li>
          <li style={styles.li}>Кадры не содержат логотипов конкурентов или чужого бренда</li>
          <li style={styles.li}>Фото соответствует реальному товару — нет «дорисованных» функций</li>
        </ul>

        <div style={{ marginTop: 48, padding: "20px 24px", background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 16 }}>
          <p style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 700, color: "#5b21b6" }}>
            Хотите получить профессиональные lifestyle-кадры без студии?
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Загрузите фото вашего гаджета в <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>Aiviso</Link> — AI поместит товар в любую сцену: рабочий стол, сумка, lifestyle с использованием. 13 кредитов бесплатно на старте, один кадр — от 15 ₽.
          </p>
          <Link
            href="/app"
            style={{ display: "inline-block", background: "#7c3aed", color: "white", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 15 }}
          >
            Попробовать бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>Читайте также:</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <li><Link href="/blog/kak-fotografirovat-ukrasheniya" style={{ color: "#7c3aed" }}>Как фотографировать украшения и бижутерию для маркетплейса</Link></li>
          <li><Link href="/blog/kak-fotografirovat-kosmetiku" style={{ color: "#7c3aed" }}>Как фотографировать косметику и уход для маркетплейсов</Link></li>
          <li><Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>Главное фото карточки: 8 правил первого слайда</Link></li>
          <li><Link href="/blog/infografika-dlya-marketpleysa" style={{ color: "#7c3aed" }}>Инфографика для карточки: что писать и как оформить</Link></li>
          <li><Link href="/blog" style={{ color: "#7c3aed" }}>Все статьи блога Aiviso</Link></li>
        </ul>
      </article>
    </>
  );
}
