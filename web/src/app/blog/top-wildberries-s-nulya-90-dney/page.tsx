import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Как выйти в ТОП на Wildberries с нуля: план на 90 дней — Aiviso",
  description:
    "Пошаговый план на 90 дней для новых селлеров Wildberries: от выбора ниши до первой тысячи продаж. Конкретные цифры, чек-листы и кейсы с реальными результатами.",
  keywords: [
    "топ wildberries с нуля",
    "как выйти в топ wildberries",
    "план продаж wildberries",
    "первые продажи wildberries",
    "wildberries новый продавец",
    "продвижение карточки wildberries",
    "wildberries 90 дней",
    "запуск товара wildberries",
  ],
  alternates: { canonical: "/blog/top-wildberries-s-nulya-90-dney" },
  openGraph: {
    title: "Как выйти в ТОП на Wildberries с нуля: пошаговый план на 90 дней",
    description:
      "От регистрации до стабильных продаж: что делать каждую неделю первых трёх месяцев. Кейсы, цифры и чек-листы.",
    url: "/blog/top-wildberries-s-nulya-90-dney",
    type: "article",
    locale: "ru_RU",
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как выйти в ТОП на Wildberries с нуля: пошаговый план на 90 дней",
  description:
    "Пошаговый план на 90 дней для новых селлеров Wildberries: от выбора ниши до первой тысячи продаж.",
  image: "https://aiviso.ru/og.png",
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
  author: { "@type": "Organization", name: "Aiviso", url: "https://aiviso.ru" },
  publisher: {
    "@type": "Organization",
    name: "Aiviso",
    logo: { "@type": "ImageObject", url: "https://aiviso.ru/logo.png" },
  },
  mainEntityOfPage: "https://aiviso.ru/blog/top-wildberries-s-nulya-90-dney",
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
      name: "ТОП Wildberries с нуля за 90 дней",
      item: "https://aiviso.ru/blog/top-wildberries-s-nulya-90-dney",
    },
  ],
};

const s = {
  h2: {
    fontSize: 24,
    fontWeight: 700,
    margin: "40px 0 12px",
    lineHeight: 1.3,
    color: "#1f2937",
  } as React.CSSProperties,
  h3: {
    fontSize: 19,
    fontWeight: 600,
    margin: "28px 0 10px",
    color: "#1f2937",
  } as React.CSSProperties,
  p: { margin: "10px 0", color: "#374151" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0", color: "#374151" } as React.CSSProperties,
};

export default function TopWildberriesNulya90Dney() {
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
          <span style={{ color: "#1f2937" }}>ТОП Wildberries с нуля за 90 дней</span>
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
          Как выйти в ТОП на Wildberries с нуля: пошаговый план на 90 дней
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>9 августа 2026 · Aiviso</p>

        <p style={{ fontSize: 18, lineHeight: 1.65, color: "#374151", marginBottom: 32 }}>
          Три месяца — достаточный срок, чтобы выйти в ТОП-20 Wildberries с нуля при правильной
          последовательности действий. Не через накрутки и серые схемы, а через алгоритм, который
          WB сам же вознаграждает: качественная карточка, хорошая конверсия, своевременные отгрузки
          и работа с отзывами. Разбиваем 90 дней на четыре фазы с конкретными задачами на каждой.
        </p>

        {/* Phase 1 */}
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Дни 1–14 · Фаза 1
          </span>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, color: "#1f2937" }}>
            Фундамент: ниша, товар, документы
          </div>
        </div>

        <h2 style={s.h2}>Дни 1–14: выбор ниши и подготовка</h2>

        <p style={s.p}>
          Самая дорогая ошибка новичка — зайти с товаром, который нельзя продать. Не потому что
          он плохой, а потому что ниша перегрета, маржа не даёт жить, или конкуренты стоят на ТОПе
          уже три года с тысячами отзывов. Поэтому первые две недели — только аналитика и
          документы.
        </p>

        <h3 style={s.h3}>Как выбрать нишу, которая даст первые продажи за 30 дней</h3>
        <p style={s.p}>
          Ищем категорию, где одновременно выполняются три условия:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Спрос есть.</strong> В WB Analytics (или внешних сервисах — Mpstats, Sellmonitor)
            категория показывает оборот от 5 млн ₽/мес и растёт год к году.
          </li>
          <li style={s.li}>
            <strong>Конкуренция средняя.</strong> В ТОП-10 нет позиций с 10 000+ отзывами — это
            значит, рынок ещё не монополизирован. Ориентир: ТОП-3 — до 500 отзывов.
          </li>
          <li style={s.li}>
            <strong>Маржа позволяет жить.</strong> После комиссии WB (15–25% в зависимости от
            категории), логистики, хранения и рекламы должно оставаться минимум 25–30%.
          </li>
        </ul>
        <p style={s.p}>
          Один из наших клиентов в категории «Декор для дома» долго смотрел на популярные LED-гирлянды.
          Сделали срез аналитики — у ТОПа 8 000 отзывов и автореклама с бюджетом 200 000 ₽/мес.
          Переключились на ароматические свечи в том же разделе: ТОП с 200 отзывами, маржа 38%.
          Через 90 дней заняли 14-е место без рекламного бюджета.
        </p>

        <h3 style={s.h3}>Чек-лист первых двух недель</h3>
        <ul style={s.ul}>
          <li style={s.li}>Зарегистрировать ИП или ООО, открыть счёт</li>
          <li style={s.li}>Подать заявку на регистрацию продавца на WB (гарантийный взнос 10 000 ₽)</li>
          <li style={s.li}>Выбрать нишу через аналитику (минимум 10 гипотез, выбрать 1–2)</li>
          <li style={s.li}>Найти поставщика — запросить образцы и прайс у 5–7 кандидатов</li>
          <li style={s.li}>Посчитать юнит-экономику до копейки: закупка + логистика + комиссия + реклама</li>
          <li style={s.li}>Получить сертификат/отказное письмо если нужно (ГОСТ, ТР ЕАЭС)</li>
          <li style={s.li}>Купить штрихкоды EAN-13 (GS1 или генерируем в ЛК WB)</li>
        </ul>

        {/* Phase 2 */}
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "40px 0 8px",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Дни 15–30 · Фаза 2
          </span>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, color: "#1f2937" }}>
            Запуск: карточка, первая поставка, первые продажи
          </div>
        </div>

        <h2 style={s.h2}>Дни 15–30: создание карточки и первая отгрузка</h2>

        <p style={s.p}>
          Карточка на Wildberries — это ваш продавец, работающий 24/7. Плохая карточка сведёт на
          нет даже идеальный товар. На этом этапе нельзя экономить ни время, ни деньги.
        </p>

        <h3 style={s.h3}>Фото — главный фактор первых кликов</h3>
        <p style={s.p}>
          Алгоритм WB показывает новые карточки по умолчанию в конце выдачи. Единственный способ
          получить первые клики без рекламы — главное фото, которое выбивается из общего ряда.
        </p>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Формат 3:4 обязательно</strong> — 900×1200 пикселей. Квадратные фото занимают
            меньше места на экране смартфона и проигрывают в CTR.
          </li>
          <li style={s.li}>
            <strong>Минимум 6–8 кадров:</strong> главный на белом фоне, 2–3 lifestyle-сцены,
            крупный план деталей, инфографика с ключевыми характеристиками.
          </li>
          <li style={s.li}>
            <strong>Инфографика на 2-м и 3-м слайдах</strong> — основные преимущества текстом
            поверх фото. Покупатель читает слайды, не дойдя до описания.
          </li>
        </ul>
        <p style={s.p}>
          Типичный кейс: карточка ручек для блокнотов запустилась с одним фото на белом фоне.
          CTR — 0.9%. После добавления lifestyle-фото в интерьере и инфографики на 2-м слайде
          через <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> — CTR вырос до 2.4%
          за неделю. Это в 2.6 раза больше кликов без изменения рейтинга.
        </p>

        <h3 style={s.h3}>SEO заголовка — это место в поиске</h3>
        <p style={s.p}>
          Заголовок на WB — прямой фактор ранжирования. Формула рабочего заголовка:
        </p>
        <div
          style={{
            background: "#1f2937",
            color: "#e5e7eb",
            borderRadius: 10,
            padding: "14px 18px",
            fontFamily: "monospace",
            fontSize: 15,
            margin: "12px 0",
          }}
        >
          [Тип товара] [Ключевой атрибут] [Дополнительный ключ] — [Бренд или USP]
        </div>
        <p style={s.p}>
          Пример: «Свеча ароматическая с деревянным фитилём соевый воск 200 мл — для дома и
          медитации». В этот заголовок вмещаются 4 поисковых запроса. Длина — до 100 символов.
        </p>

        <h3 style={s.h3}>Первая поставка: сколько везти</h3>
        <p style={s.p}>
          Распространённая ошибка — завезти 1 000 единиц на старте. Если карточка не полетит,
          получите заморозку денег и плату за хранение. Оптимальный первый завоз: 50–150 единиц
          на ближайший к вам склад WB. Этого хватит на 2–4 недели продаж при средней конверсии
          в нише.
        </p>

        <h2 style={s.h2}>Дни 31–60: рост — отзывы, SEO, первая реклама</h2>

        {/* Phase 3 */}
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "0 0 24px",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Дни 31–60 · Фаза 3
          </span>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, color: "#1f2937" }}>
            Рост: отзывы, ключи, автореклама
          </div>
        </div>

        <p style={s.p}>
          К 30-му дню у вас должно быть 5–15 продаж и первые отзывы. Алгоритм WB начинает
          «видеть» карточку. Теперь задача — разогнать три метрики: конверсию, оборачиваемость
          и рейтинг.
        </p>

        <h3 style={s.h3}>Отзывы: как получить первые 20 честно</h3>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Программа WB «Отзывы за баллы»</strong> — маркетплейс сам рассылает
            покупателям предложение оставить отзыв за бонусы. Подключается в ЛК продавца.
          </li>
          <li style={s.li}>
            <strong>Вкладыш в упаковку</strong> — карточка с QR на страницу отзывов и просьбой
            поставить оценку. Конверсия 8–15% от покупок.
          </li>
          <li style={s.li}>
            <strong>Персонализированное письмо через WB</strong> — через 7 дней после доставки
            можно отправить покупателю шаблонное сообщение через ЛК.
          </li>
        </ul>
        <p style={s.p}>
          Цель к 60-му дню — минимум 15–20 отзывов со средним рейтингом 4.6+. Карточки с
          рейтингом ниже 4.5 алгоритм пессимизирует в выдаче.
        </p>

        <h3 style={s.h3}>Автореклама WB: когда включать и сколько тратить</h3>
        <p style={s.p}>
          Запускать автокампанию раньше 20 продаж — слив бюджета. Алгоритм не знает, кому
          показывать товар, и показывает всем подряд. Правильный момент для первой рекламы —
          когда есть хотя бы 10 отзывов и конверсия карточки не ниже 5%.
        </p>
        <ul style={s.ul}>
          <li style={s.li}>Начальный бюджет: 500–1 000 ₽/день</li>
          <li style={s.li}>Ставка: на 10–15% ниже рекомендованной системой</li>
          <li style={s.li}>Смотрите ДРР (доля рекламных расходов): норма до 15–20%</li>
          <li style={s.li}>Выключайте кампанию если ДРР превышает 30% три дня подряд</li>
        </ul>

        <h3 style={s.h3}>Обновление SEO в середине пути</h3>
        <p style={s.p}>
          После первых 30 дней у вас есть реальные данные: какие поисковые запросы дают переходы,
          какие — нет. В WB Analytics смотрите отчёт «Поисковые фразы» и добавляйте в заголовок
          и описание те, которые дают продажи, но ещё не в топе вашего текста.
        </p>

        {/* Phase 4 */}
        <div
          style={{
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 12,
            padding: "16px 20px",
            margin: "40px 0 24px",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Дни 61–90 · Фаза 4
          </span>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4, color: "#1f2937" }}>
            Оптимизация: цена, карточка, масштаб
          </div>
        </div>

        <h2 style={s.h2}>Дни 61–90: оптимизация и выход в ТОП-20</h2>

        <p style={s.p}>
          К этому моменту карточка «живёт»: продажи идут, отзывы накапливаются, реклама
          частично окупается. Теперь — точная настройка каждого элемента для прыжка в ТОП.
        </p>

        <h3 style={s.h3}>A/B тест главного фото</h3>
        <p style={s.p}>
          WB не даёт встроенного A/B теста, но его можно организовать вручную: меняем главное
          фото, смотрим CTR в статистике за 7 дней, сравниваем с предыдущей неделей при
          сопоставимом трафике. Типичный прирост CTR после замены главного фото на более
          контрастный вариант — 30–50%.
        </p>

        <h3 style={s.h3}>Работа с ценой</h3>
        <p style={s.p}>
          Алгоритм WB учитывает конкурентоспособность цены. Если ваша цена на 20%+ выше топа
          в категории, карточку пессимизируют. Схема мониторинга:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>Каждую неделю сверяйте свою цену с ТОП-5 конкурентами в категории</li>
          <li style={s.li}>Держите цену в диапазоне ±10% от медианной по ТОП-10</li>
          <li style={s.li}>Участие в акциях WB — если маржа позволяет снизить на 10–15% — даёт буст позиций на время акции</li>
        </ul>

        <h3 style={s.h3}>Оборачиваемость и остатки</h3>
        <p style={s.p}>
          WB ранжирует выше карточки с хорошим остатком на складе. Нулевой остаток = выпадение
          из поиска и потеря всех накопленных позиций. Норма оборачиваемости для WB — 30–60 дней.
          Если у вас 60+ дней запасов лежит на складе — снижайте цену или делайте акцию.
          Если меньше 14 дней запаса — срочно везите.
        </p>

        <h2 style={s.h2}>Метрики: что смотреть каждую неделю</h2>
        <p style={s.p}>
          Не пытайтесь отслеживать 20 показателей сразу. На первые 90 дней — только пять:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>CTR карточки</strong> — норма 2–4% для большинства категорий. Ниже 1.5% — главное фото не работает.</li>
          <li style={s.li}><strong>Конверсия в корзину</strong> — норма 5–15%. Ниже 5% — проблема в цене, описании или отзывах.</li>
          <li style={s.li}><strong>Процент выкупа</strong> — норма 60–85% в зависимости от категории. Ниже 55% — фото не соответствует товару.</li>
          <li style={s.li}><strong>Рейтинг</strong> — держать выше 4.5. Ниже — работать с отзывами каждый день.</li>
          <li style={s.li}><strong>ДРР рекламы</strong> — цель до 15%. Выше 25% — перенастройка кампании или пауза.</li>
        </ul>

        <h2 style={s.h2}>Типичные ошибки, которые ломают план</h2>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Менять карточку чаще раза в неделю.</strong> Алгоритм WB не успевает
            переиндексировать изменения, вы получаете «размытую» статистику и неверные выводы.
          </li>
          <li style={s.li}>
            <strong>Экономить на фото в начале.</strong> Плохое главное фото — низкий CTR — плохая
            статистика — алгоритм понижает карточку. Вытащить её потом стоит в разы дороже.
          </li>
          <li style={s.li}>
            <strong>Сразу завозить большую партию.</strong> Первый завоз — тест. Подтвердили
            спрос — везите основную партию.
          </li>
          <li style={s.li}>
            <strong>Включать рекламу с нулевыми отзывами.</strong> Покупатель видит товар без
            отзывов и уходит к конкуренту с 50+ оценками. Бюджет слит.
          </li>
          <li style={s.li}>
            <strong>Игнорировать негативные отзывы.</strong> Каждый отрицательный отзыв без
            ответа продавца снижает конверсию на 5–8%. Отвечайте в течение 24 часов.
          </li>
        </ul>

        <h2 style={s.h2}>Реальный результат за 90 дней: что ожидать</h2>
        <p style={s.p}>
          Если план выполнен без пропусков, типичные результаты на 90-й день:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>Позиция в категории: ТОП-15–30 (из 200–500 продавцов)</li>
          <li style={s.li}>Отзывов: 30–60 штук с рейтингом 4.5–4.8</li>
          <li style={s.li}>Продажи: 150–400 единиц/мес в зависимости от ниши</li>
          <li style={s.li}>Выручка: 100 000 – 600 000 ₽/мес</li>
          <li style={s.li}>ДРР рекламы: 10–18%</li>
        </ul>
        <p style={s.p}>
          Один из наших клиентов в категории «Спорт и отдых» (наборы для йоги) прошёл этот путь
          за 84 дня: с нуля до 18-го места в подкатегории, 210 продаж в месяц и выручкой
          315 000 ₽. Критический момент, по его словам — качественные фото с первого дня.
          Он сделал их через <Link href="/app" style={{ color: "#7c3aed" }}>Aiviso</Link> за 2 часа
          вместо того, чтобы ждать фотостудию две недели.
        </p>

        <h2 style={s.h2}>Что делать после 90 дней</h2>
        <p style={s.p}>
          90 дней — фундамент, а не потолок. После выхода в ТОП-20 следующий шаг:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>Расширение ассортимента в той же нише (добавление цветов, размеров, версий)</li>
          <li style={s.li}>Выход на Ozon с тем же товаром — дополнительный канал продаж без нового инвентаря</li>
          <li style={s.li}>Повышение среднего чека через комплекты и наборы</li>
          <li style={s.li}>Внешний трафик: Telegram-посевы, блогеры — WB даёт бонус к позициям за внешние переходы</li>
        </ul>
        <p style={s.p}>
          Читайте подробнее про следующие шаги:{" "}
          <Link href="/blog/masshtabirovanie-prodazh-marketpleys" style={{ color: "#7c3aed" }}>
            как масштабировать продажи до 1 000 000 ₽/мес
          </Link>{" "}
          и{" "}
          <Link href="/blog/vneshniy-trafik-wildberries-ozon-2026" style={{ color: "#7c3aed" }}>
            как привлекать внешний трафик на WB
          </Link>.
        </p>

        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#f5f3ff",
            border: "1px solid #ddd6fe",
            borderRadius: 16,
          }}
        >
          <p style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700, color: "#1f2937" }}>
            Начните с карточки — самого важного элемента плана
          </p>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "#374151" }}>
            Фото для WB 900×1200 с инфографикой можно сделать за 15 минут без студии и фотографа.
            Загружайте фото товара — получайте готовые карточки.
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
            Попробовать Aiviso бесплатно
          </Link>
        </div>

        <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e7eb" }} />
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#6b7280" }}>
          Читайте также:
        </h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: 14, lineHeight: 2 }}>
          <li>
            <Link href="/blog/seo-kartochki-wildberries" style={{ color: "#7c3aed" }}>
              SEO для карточки Wildberries: пошаговый гайд
            </Link>
          </li>
          <li>
            <Link href="/blog/glavnoe-foto-kartochki" style={{ color: "#7c3aed" }}>
              Главное фото карточки товара: 8 правил первого слайда
            </Link>
          </li>
          <li>
            <Link href="/blog/algoritm-poiska-wildberries" style={{ color: "#7c3aed" }}>
              Алгоритм поиска Wildberries: что влияет на позиции
            </Link>
          </li>
          <li>
            <Link href="/blog" style={{ color: "#7c3aed" }}>
              Все статьи блога Aiviso
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
