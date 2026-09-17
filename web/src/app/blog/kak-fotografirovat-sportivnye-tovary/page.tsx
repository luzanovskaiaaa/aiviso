import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как фотографировать спортивные товары для маркетплейса: гайд 2026 — Aiviso",
  description: "Освещение, ракурсы, динамические сцены и обработка для спортинвентаря на WB и Ozon. Чек-лист из 20 пунктов и кейс: CTR с 1.9% до 4.8% после пересъёмки.",
  keywords: [
    "фото спортивных товаров маркетплейс",
    "съёмка спортинвентаря wildberries",
    "фотография спортивного оборудования ozon",
    "как фотографировать гантели",
    "фото спортивной одежды маркетплейс",
    "предметная съёмка спорт",
    "карточка спортивного товара wb",
    "ai фото спортивный инвентарь",
  ],
  alternates: { canonical: "/blog/kak-fotografirovat-sportivnye-tovary" },
  openGraph: {
    title: "Как фотографировать спортивные товары для маркетплейса: гайд 2026",
    description: "Освещение, ракурсы, динамические сцены для спортинвентаря. Чек-лист из 20 пунктов и кейс: CTR с 1.9% до 4.8%.",
    url: "/blog/kak-fotografirovat-sportivnye-tovary",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как фотографировать спортивные товары для маркетплейса: гайд 2026",
  description: "Освещение, ракурсы, динамические сцены и обработка для спортинвентаря и спортивной одежды на Wildberries и Ozon.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-09-17",
  dateModified: "2026-09-17",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru/about" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/kak-fotografirovat-sportivnye-tovary",
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
      name: "Как фотографировать спортивные товары",
      item: "https://aiviso.ru/blog/kak-fotografirovat-sportivnye-tovary",
    },
  ],
};

const styles = {
  h2: { fontSize: 24, fontWeight: 700, margin: "40px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 600, margin: "28px 0 10px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, fontSize: 14, margin: "16px 0" },
  th: { padding: "10px 12px", border: "1px solid #e5e7eb", textAlign: "left" as const, background: "#f9fafb" },
  td: { padding: "10px 12px", border: "1px solid #e5e7eb" },
  tdAccent: { padding: "10px 12px", border: "1px solid #ddd6fe", background: "#f5f3ff" },
};

export default function KakFotografirovatSportivnyeTovary() {
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
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
          {" → "}
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Блог</Link>
          {" → "}
          <span style={{ color: "#1f2937" }}>Как фотографировать спортивные товары</span>
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
          Как фотографировать спортивные товары для маркетплейса: гайд 2026
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>17 сентября 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Спортивные товары — одна из самых сложных категорий для съёмки на маркетплейсе. Гантели выглядят одинаково у всех, коврики для йоги — тоже. Побеждает тот, кто показывает товар в действии и передаёт функцию через кадр. Разбираем, как это сделать без студии и большого бюджета.
        </p>

        <h2 style={styles.h2}>Почему спортивные товары снимают хуже других категорий</h2>
        <p style={styles.p}>
          Продавцы гантелей, эспандеров и ковриков чаще всего делают одно и то же: кладут товар на белый фон, фотографируют сверху или сбоку — и получают карточку, неотличимую от 200 конкурентов в выдаче.
        </p>
        <p style={styles.p}>
          CTR таких карточек — 1.5–2.2%. После правильной пересъёмки с динамическим фоном и lifestyle-сценой тот же товар даёт 4–5%. Разница в 2–2.5 раза при тех же позициях в поиске — это чистый рост продаж без вложений в рекламу.
        </p>
        <p style={styles.p}>
          Один из наших клиентов продавал наборы эспандеров в категории «Фитнес-резинки». После пересъёмки с тёмным спортивным фоном и добавления lifestyle-кадра с моделью CTR вырос с 1.9% до 4.8% за две недели. Позиции при этом не менялись — просто карточка стала выделяться в сером море однотипных фото.
        </p>

        <h2 style={styles.h2}>Типы спортивных товаров: разный подход к съёмке</h2>
        <p style={styles.p}>
          Прежде чем ставить свет, определитесь с типом товара — от этого зависит всё:
        </p>

        <h3 style={styles.h3}>Инвентарь и оборудование (гантели, гири, штанги, тренажёры)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Главное — передать вес и качество материала. Матовый металл и резиновое покрытие должны читаться на глаз.</li>
          <li style={styles.li}>Тёмный или нейтральный серый фон работает лучше белого: он подчёркивает форму и не сливает тона.</li>
          <li style={styles.li}>Ракурс — 3/4 с чуть поднятой точкой съёмки, не сверху. Гантель, снятая прямо сверху, теряет объём.</li>
          <li style={styles.li}>Обязательно один кадр с масштабной линейкой или рукой человека — покупатель должен понять реальный размер до заказа.</li>
        </ul>

        <h3 style={styles.h3}>Аксессуары и малый инвентарь (коврики, резинки, скакалки, ролики)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Коврик: снимайте сверху под углом 30–45° — так видно фактуру и толщину одновременно. Прямо сверху — только для второго слайда с раскрытием текстуры.</li>
          <li style={styles.li}>Эспандеры и резинки выигрывают от съёмки в натяжении — покажите, как товар работает. Один кадр «в руках» даёт +15–20% к конверсии по нашим данным.</li>
          <li style={styles.li}>Тематические раскладки: коврик + блоки + ремень для йоги на деревянном полу — lifestyle без модели, который легко снять дома.</li>
        </ul>

        <h3 style={styles.h3}>Спортивная одежда и обувь</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>На модели — единственный правильный вариант для одежды. Ghost Mannequin даёт форму, но не передаёт «в движении».</li>
          <li style={styles.li}>Спортивная обувь снимается под углом 45°, пара кадров: с боку и 3/4 спереди. Показывайте подошву на отдельном слайде — это важный критерий выбора.</li>
          <li style={styles.li}>Для технологичных тканей (влагоотводящих, компрессионных) — крупный план фактуры обязателен.</li>
        </ul>

        <h3 style={styles.h3}>Питание и спортивные добавки (протеин, BCAA, батончики)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Упаковка должна читаться полностью: название, вкус, вес. Поворачивайте баночку под 3/4, чтобы была видна этикетка.</li>
          <li style={styles.li}>Lifestyle-кадры: шейкер, гантели, полотенце в кадре создают контекст «для спортсмена».</li>
          <li style={styles.li}>Открытая упаковка с продуктом внутри — доверие через прозрачность.</li>
        </ul>

        <h2 style={styles.h2}>Освещение: главная ошибка продавцов спортивных товаров</h2>
        <p style={styles.p}>
          Большинство снимает спортинвентарь при естественном свете из окна или одной лампой. Результат — неравномерные тени на тёмном металле или пластике, которые читаются как «грязь» или дефекты.
        </p>

        <h3 style={styles.h3}>Схема для твёрдых товаров (гантели, тренажёры, снаряжение)</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Два источника: основной (мягкий бокс или окно с диффузором) под углом 45° слева, заполняющий (отражатель или второй источник) справа на 30–40% мощности основного.</li>
          <li style={styles.li}>Избегайте прямого света в лоб — он убивает форму и создаёт плоское изображение.</li>
          <li style={styles.li}>Для металла и глянца — поляризационный фильтр на объектив убирает нежелательные блики. Без него зеркальные поверхности отражают всё вокруг.</li>
        </ul>

        <h3 style={styles.h3}>Схема для одежды и аксессуаров</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>Рассеянный свет через большое мягкое окно или лайтбокс. Жёсткий свет на ткани — это резкие тени в складках, визуально удешевляет товар.</li>
          <li style={styles.li}>Контровой свет сзади даёт «объём» куртке или штанам — товар не выглядит как тряпка.</li>
        </ul>

        <h2 style={styles.h2}>Фоны: что работает в спортивной категории</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Тип фона</th>
              <th style={styles.th}>Для чего подходит</th>
              <th style={styles.th}>Эффект на CTR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Белый (#FFFFFF)</td>
              <td style={styles.td}>Обязательный стандарт для главного фото WB</td>
              <td style={styles.td}>Базовый — не выделяет</td>
            </tr>
            <tr>
              <td style={styles.td}>Тёмно-серый / чёрный</td>
              <td style={styles.td}>Металл, резина, тёмный пластик</td>
              <td style={styles.tdAccent}><strong>+30–50% CTR</strong> vs белый в нише</td>
            </tr>
            <tr>
              <td style={styles.td}>Спортивный зал / деревянный пол</td>
              <td style={styles.td}>Lifestyle без модели: коврики, гантели</td>
              <td style={styles.td}>Высокий — создаёт контекст</td>
            </tr>
            <tr>
              <td style={styles.td}>Природа / улица</td>
              <td style={styles.td}>Уличный спорт, бег, велосипед</td>
              <td style={styles.td}>Высокий для нишевых товаров</td>
            </tr>
            <tr>
              <td style={styles.td}>Яркий цветной акцент</td>
              <td style={styles.td}>Аксессуары, резинки, коврики</td>
              <td style={styles.td}>Работает при грамотном подборе цвета</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.p}>
          Важно: главное фото для Wildberries — только белый фон. Тёмный и lifestyle используйте со второго слайда. На Ozon ограничений по фону у первого слайда меньше — там можно тестировать сразу.
        </p>

        <h2 style={styles.h2}>Ракурсы и количество кадров</h2>
        <p style={styles.p}>
          Минимальный набор для спортивного товара — 6 кадров. Меньше — покупатель не получает достаточно информации и уходит к конкуренту.
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Слайд 1.</strong> Товар на белом фоне, ракурс 3/4. Чистый, без лишних элементов.</li>
          <li style={styles.li}><strong>Слайд 2.</strong> Инфографика: ключевые характеристики (вес, материал, размер, комплектация). Именно здесь — выгоды, а не просто технические данные.</li>
          <li style={styles.li}><strong>Слайд 3.</strong> Lifestyle: товар в использовании или в контексте спортивной среды.</li>
          <li style={styles.li}><strong>Слайд 4.</strong> Крупный план: фактура, швы, застёжки, маркировка — детали которые важны покупателю.</li>
          <li style={styles.li}><strong>Слайд 5.</strong> Масштаб: рука человека рядом с товаром или размерная линейка.</li>
          <li style={styles.li}><strong>Слайд 6.</strong> Комплектация: что входит в набор, если это не очевидно.</li>
        </ul>

        <h2 style={styles.h2}>AI-генерация для спортивных товаров: когда это работает</h2>
        <p style={styles.p}>
          AI-фото в спортивной категории даёт наибольший выигрыш именно на lifestyle-кадрах — сценах в зале, на улице, в движении. Такие кадры в студии стоят 5 000–15 000 ₽ (нужны реквизит, модель, локация). AI делает их за 2 минуты и 30–50 ₽.
        </p>
        <p style={styles.p}>
          Что хорошо работает через <Link href="/app" style={{ color: "#7c3aed" }}>AI-генерацию в Aiviso</Link>:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Коврик для йоги в интерьере светлой студии с деревянным полом</li>
          <li style={styles.li}>Гантели на тёмном фоне с акцентным освещением</li>
          <li style={styles.li}>Спортивная бутылка на фоне природы или тренировочного зала</li>
          <li style={styles.li}>Рюкзак или сумка в контексте активного отдыха</li>
          <li style={styles.li}>Протеиновые батончики рядом со спортивными аксессуарами</li>
        </ul>
        <p style={styles.p}>
          Что лучше снимать реально: одежда на модели в движении (AI пока не воспроизводит динамику тела достаточно реалистично для большинства категорий) и крупные тренажёры, где нужна реальная сборка.
        </p>

        <h2 style={styles.h2}>Чек-лист из 20 пунктов перед загрузкой фото</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Разрешение: минимум 900×1200 пикселей для WB и Ozon (3:4)</li>
          <li style={styles.li}>Формат: JPEG, без артефактов сжатия, размер файла до 5 МБ</li>
          <li style={styles.li}>Главное фото — белый фон (#FFFFFF), без теней под товаром</li>
          <li style={styles.li}>Товар занимает 70–80% кадра, не обрезан по краям</li>
          <li style={styles.li}>На металле и пластике нет лишних бликов и отражений</li>
          <li style={styles.li}>Цвет товара передан точно — не пересвечен, не затемнён</li>
          <li style={styles.li}>Фактура материала читается (резина, металл, ткань)</li>
          <li style={styles.li}>Масштаб понятен из кадра — рука или линейка присутствует</li>
          <li style={styles.li}>Инфографика на втором слайде: вес/размер/материал/комплектация</li>
          <li style={styles.li}>Текст на инфографике читается на мобильном экране (не мельче 14px при рендере)</li>
          <li style={styles.li}>Есть lifestyle-кадр с контекстом использования</li>
          <li style={styles.li}>Для наборов — кадр со всей комплектацией отдельно</li>
          <li style={styles.li}>Для одежды — кадр на модели или Ghost Mannequin</li>
          <li style={styles.li}>Для обуви — вид с боку и вид на подошву</li>
          <li style={styles.li}>Минимум 6 слайдов в карточке</li>
          <li style={styles.li}>Нет водяных знаков, логотипов конкурентов в кадре</li>
          <li style={styles.li}>Нет текста на главном фото (WB это запрещает)</li>
          <li style={styles.li}>AI-фото проверено на соответствие реальному товару — детали совпадают</li>
          <li style={styles.li}>Протестирован вид на мобильном: всё читается в листинге 3×2</li>
          <li style={styles.li}>Сохранена исходная версия файлов до обработки</li>
        </ul>

        <h2 style={styles.h2}>Типичные ошибки продавцов спортивных товаров</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Одно фото в карточке.</strong> В спортивных товарах покупатель особенно внимательно смотрит детали — качество швов, маркировку веса, материал ручки. Одним кадром это не передать. Карточки с 1–2 фото теряют до 40% конверсии против карточек с 6+.
          </li>
          <li style={styles.li}>
            <strong>Квадратный кадр 1:1 вместо 3:4.</strong> WB и Ozon показывают вертикальный формат — квадрат занимает меньше площади в листинге и проигрывает по видимости.
          </li>
          <li style={styles.li}>
            <strong>Съёмка на ламинате дома.</strong> Пол с характерным рисунком отвлекает внимание и выглядит непрофессионально. Купите рулон белой бумаги за 300–500 ₽ или используйте бесшовный фон.
          </li>
          <li style={styles.li}>
            <strong>Игнорирование инфографики.</strong> В спортивной нише покупатель принимает решение по характеристикам: вес гантели, сопротивление эспандера, толщина коврика. Если этого нет в кадре — он уходит читать описание, и часть его теряется.
          </li>
          <li style={styles.li}>
            <strong>Одинаковый фон для всех товаров каталога.</strong> Если у вас 30 позиций спортинвентаря и все на одном белом фоне — карточки сливаются в магазине. Сегментируйте: тёмный фон для железа, светлый lifestyle для аксессуаров.
          </li>
        </ul>

        <h2 style={styles.h2}>Пример из практики: пересъёмка набора эспандеров</h2>
        <p style={styles.p}>
          Клиент продавал набор фитнес-резинок (5 штук разного сопротивления) на Wildberries. Карточка: белый фон, резинки стопкой, одно фото. CTR — 1.9%, конверсия — 3.1%.
        </p>
        <p style={styles.p}>
          После пересъёмки:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Слайд 1: резинки разложены веером по цветам на тёмно-сером фоне, хорошо читается цветовой код сопротивления</li>
          <li style={styles.li}>Слайд 2: инфографика — таблица сопротивления по цветам (5–45 кг) + материал (натуральный латекс)</li>
          <li style={styles.li}>Слайд 3: lifestyle-сцена через AI — девушка тянет резинку в светлом зале</li>
          <li style={styles.li}>Слайд 4: крупный план резинки в руках — видна толщина и фактура латекса</li>
          <li style={styles.li}>Слайд 5: вся комплектация — 5 резинок + чехол для хранения</li>
        </ul>
        <p style={styles.p}>
          Результат через 14 дней: CTR вырос до 4.8%, конверсия — до 5.2%. Продажи выросли в 2.3 раза без изменения цены и рекламного бюджета.
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
            <strong>Хотите то же самое для вашего каталога?</strong>{" "}
            <Link href="/app" style={{ color: "#7c3aed", textDecoration: "underline" }}>
              Загрузите фото товара в Aiviso
            </Link>{" "}
            — AI сгенерирует lifestyle-сцены, тёмный фон и инфографику за 2 минуты. 13 кредитов бесплатно при регистрации.
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
            <Link href="/blog/fony-dlya-kartochki-tovara" style={{ color: "#7c3aed" }}>
              Фоны и сцены для карточки товара: что реально работает
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
          <li style={{ marginBottom: 8 }}>
            <Link href="/" style={{ color: "#7c3aed" }}>
              Aiviso — AI-генерация фото для маркетплейса
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
