import LandingDemo from "@/components/LandingDemo";
import LandingFAQ from "@/components/LandingFAQ";
import LandingReveal from "@/components/LandingReveal";
import LandingMudboard from "@/components/LandingMudboard";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aiviso.ru";

export default function Home() {
  return (
    <div style={{ background: "var(--av-bg)", color: "var(--av-ink)", overflowX: "hidden", fontFamily: "var(--av-font-text)" }}>
      <LandingReveal />

      {/* Mobile responsiveness rules — landing-scoped */}
      <style>{`
        .av-nav-links { display: flex; gap: 28px; }
        @media (max-width: 880px) { .av-nav-links { display: none; } }
        .av-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (max-width: 980px) { .av-grid-4 { grid-template-columns: repeat(2, 1fr); } }
        .av-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        @media (max-width: 880px) { .av-grid-3 { grid-template-columns: 1fr; } }
        .av-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        @media (max-width: 720px) { .av-grid-2 { grid-template-columns: 1fr; } }
        .av-connect-row { display: grid; grid-template-columns: 1fr auto 1.2fr auto 1fr; align-items: center; gap: 18px; max-width: 1080px; margin: 0 auto 56px; }
        @media (max-width: 880px) { .av-connect-row { grid-template-columns: 1fr; } .av-connect-row .av-arrow { display: none; } }
        .av-section { padding: 96px 0; position: relative; }
        @media (max-width: 720px) { .av-section { padding: 56px 0; } }
        .av-container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        .av-container-narrow { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
      `}</style>

      {/* NAV */}
      <nav aria-label="Главная навигация" style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(241,242,244,0.78)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        borderBottom: "1.5px solid var(--av-ink)",
      }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <a href="/" style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 24, letterSpacing: "-0.04em", display: "inline-flex", alignItems: "baseline", gap: 6, textDecoration: "none", color: "var(--av-ink)" }}>
            aiviso<span style={{ width: 10, height: 10, background: "var(--av-accent)", border: "1.5px solid var(--av-ink)", borderRadius: 999, display: "inline-block", alignSelf: "center" }} />
          </a>
          <div className="av-nav-links" style={{ alignItems: "center" }}>
            <a href="#how" style={{ fontSize: 14, fontWeight: 600, color: "var(--av-ink-3)", textDecoration: "none" }}>Как работает</a>
            <a href="#connect" style={{ fontSize: 14, fontWeight: 600, color: "var(--av-ink-3)", textDecoration: "none" }}>Подключение</a>
            <a href="#features" style={{ fontSize: 14, fontWeight: 600, color: "var(--av-ink-3)", textDecoration: "none" }}>Возможности</a>
            <a href="#pricing" style={{ fontSize: 14, fontWeight: 600, color: "var(--av-ink-3)", textDecoration: "none" }}>Тарифы</a>
            <a href="#faq" style={{ fontSize: 14, fontWeight: 600, color: "var(--av-ink-3)", textDecoration: "none" }}>FAQ</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="/auth" className="av-btn av-btn-accent" style={{ padding: "10px 18px", fontSize: 14 }}>
              Войти <span className="av-btn-arrow"><Arrow /></span>
            </a>
          </div>
        </div>
      </nav>

      <main>

      {/* HERO — mudboard collage */}
      <section className="av-section" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div className="av-bg-grid" />
        <div className="av-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="av-reveal" style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <span className="av-chip av-chip-dark">
              <span style={{ width: 6, height: 6, background: "var(--av-accent)", borderRadius: "50%" }} />
              ДЛЯ СЕЛЛЕРОВ WILDBERRIES & OZON
            </span>
          </div>
          <h1 className="av-display av-reveal" style={{
            fontSize: "clamp(44px, 8vw, 144px)",
            textAlign: "center", margin: "0 auto", maxWidth: 1280,
            textWrap: "balance",
          }}>
            AI-фотостудия<br />
            <span className="av-italic" style={{ color: "var(--av-accent)" }}>для&nbsp;селлеров</span> маркетплейсов
          </h1>
          <p className="av-reveal" style={{
            textAlign: "center", fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--av-muted)", maxWidth: 640,
            margin: "24px auto 8px", lineHeight: 1.5,
          }}>
            Загружайте фото товара — получаете студийные карточки для Wildberries и Ozon за 2 минуты. Без фотографа.
          </p>
          <p className="av-reveal" style={{
            textAlign: "center", fontSize: "clamp(13px, 1.8vw, 16px)",
            color: "var(--av-muted)", maxWidth: 640,
            margin: "0 auto 32px", lineHeight: 1.5, fontStyle: "italic",
          }}>
            Гарантированно сохраняем все детали: пуговицы, швы, фурнитуру, текстуру.
          </p>

          <div className="av-reveal" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="/auth" className="av-btn av-btn-accent">
              Начать бесплатно — 10 кредитов <span className="av-btn-arrow"><Arrow /></span>
            </a>
            <a href="#how" className="av-btn av-btn-ghost">
              <PlayIcon /> Смотреть демо
            </a>
          </div>

          <div className="av-reveal" style={{
            display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap",
            marginTop: 28, color: "var(--av-muted)", fontSize: 13, fontWeight: 600,
          }}>
            <span>⚡ Результат за 2 минуты</span>
            <span>🎯 QC-агент проверяет качество</span>
            <span>💸 От 15 ₽ за кадр</span>
          </div>

          {/* Mudboard collage */}
          <div className="av-reveal" style={{ marginTop: 56 }}>
            <LandingMudboard />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="av-marquee">
        <div className="av-marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["ОДЕЖДА", "ОБУВЬ", "КОСМЕТИКА", "ЭЛЕКТРОНИКА", "УКРАШЕНИЯ", "МЕБЕЛЬ", "ЕДА", "ЗООТОВАРЫ", "СПОРТ"].map((w, i) => (
              <span key={`${k}-${i}`} className="av-marquee-item">
                <span className="dot" /> {w}
              </span>
            ))
          )}
        </div>
      </div>

      {/* DEMO — Реальные До/После */}
      <section className="av-section" style={{ background: "var(--av-paper)", borderBottom: "1.5px solid var(--av-ink)" }}>
        <div className="av-container-narrow">
          <LandingDemo />
        </div>
      </section>

      {/* CONNECT CABINETS — главная фишка */}
      <section id="connect" className="av-section" style={{
        background: "var(--av-bg-cream)",
        borderBottom: "1.5px solid var(--av-ink)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(40% 40% at 15% 15%, rgba(124,58,237,.10), transparent 70%), radial-gradient(40% 40% at 85% 85%, rgba(72,17,115,.08), transparent 70%)",
        }} />
        <div className="av-container" style={{ position: "relative" }}>
          <div className="av-sec-head av-reveal">
            <span className="av-eyebrow">Интеграции</span>
            <h2 style={{ textWrap: "balance" }}>
              Подключите кабинет<br />
              <span className="av-italic" style={{ color: "var(--av-accent)" }}>WB или Ozon</span> по&nbsp;API-ключу
            </h2>
            <p>За 1 минуту — все ваши товары и карточки появятся в Aiviso. Бесплатно.</p>
          </div>

          {/* Visual diagram WB <-> Aiviso <-> Ozon */}
          <div className="av-connect-row av-reveal">
            {/* WB */}
            <div className="av-card av-card-brut" style={{ padding: 22, background: "#fff", textAlign: "center" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                gap: 8, padding: "10px 16px",
                background: "var(--av-accent)", color: "#fff",
                borderRadius: 12, border: "1.5px solid var(--av-ink)",
                fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 22,
                letterSpacing: "-0.02em",
              }}>Wildberries</div>
              <div style={{ marginTop: 14, fontSize: 13, color: "var(--av-muted)", fontWeight: 600 }}>
                <div>Ваши товары</div>
                <div>Все фото и описания</div>
              </div>
            </div>

            <ArrowFlow />

            {/* Aiviso center */}
            <div style={{
              background: "var(--av-ink)", color: "#fff",
              border: "1.5px solid var(--av-ink)",
              borderRadius: 22, padding: "28px 22px",
              textAlign: "center",
              boxShadow: "6px 6px 0 0 var(--av-accent)",
              position: "relative",
            }}>
              <div style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em" }}>
                aiviso<span style={{ color: "var(--av-accent)" }}>.</span>ru
              </div>
              <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.7)", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 700 }}>
                Единый кабинет
              </div>
              <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 999, background: "var(--av-accent)", color: "#fff", fontSize: 11, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", border: "1.5px solid var(--av-accent)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} /> Бесплатно
              </div>
            </div>

            <ArrowFlow reverse />

            {/* Ozon */}
            <div className="av-card av-card-brut" style={{ padding: 22, background: "#fff", textAlign: "center" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                gap: 8, padding: "10px 16px",
                background: "var(--av-ozon)", color: "#fff",
                borderRadius: 12, border: "1.5px solid var(--av-ink)",
                fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 22,
                letterSpacing: "-0.02em",
              }}>OZON</div>
              <div style={{ marginTop: 14, fontSize: 13, color: "var(--av-muted)", fontWeight: 600 }}>
                <div>Ваши товары</div>
                <div>Все фото и описания</div>
              </div>
            </div>
          </div>

          <div className="av-grid-3">
            <FeatureCard
              i={0}
              badge="1 минута"
              title="API-ключ — и все карточки в кабинете"
              text="Создаёте API-ключ в WB или Ozon Seller, вставляете в Aiviso. Все товары появляются в каталоге через 30 секунд."
              tagBg="var(--av-accent)"
              chipText="БЕСПЛАТНО"
            />
            <FeatureCard
              i={1}
              badge="WB ⇄ Ozon"
              title="Перенос карточек между маркетплейсами"
              text="Товар уже на Wildberries? Перенесём на Ozon в один клик — категория и размеры (см↔мм, кг↔г) подставятся автоматически."
              tagBg="var(--av-accent-3)"
              chipText="БЕСПЛАТНО"
              featured
            />
            <FeatureCard
              i={2}
              badge="1 клик"
              title="Реновировали — и сразу в продажу"
              text="Сгенерируйте новые AI-фото для старой карточки и замените их на маркетплейсе — без потери позиций и отзывов."
              tagBg="var(--av-accent)"
              chipText="ВЫГРУЗКА"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }} className="av-reveal">
            <a href="/auth" className="av-btn av-btn-accent">
              Подключить кабинет <span className="av-btn-arrow"><Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 шага (наш реальный процесс) */}
      <section id="how" className="av-section" style={{ background: "var(--av-bg)" }}>
        <div className="av-container">
          <div className="av-sec-head av-reveal">
            <span className="av-eyebrow">Как это работает</span>
            <h2 style={{ textWrap: "balance" }}>
              3 шага до <span className="av-italic" style={{ color: "var(--av-accent-3)" }}>идеальной карточки</span>
            </h2>
            <p>От загрузки фото до публикации в маркетплейсе — без дизайнера и фотостудии</p>
          </div>

          <div className="av-grid-3">
            {[
              { n: "01", title: "Загружаете фото", text: "Загрузите 1–5 фотографий товара на белом фоне. AI изучает каждую деталь конструкции — пуговицы, швы, текстуру.", color: "var(--av-accent)" },
              { n: "02", title: "Выбираете сцену", text: "Packshot, lifestyle, макро, смена фона. Для одежды, мебели, косметики, еды, электроники.", color: "var(--av-accent-3)" },
              { n: "03", title: "Получаете результат", text: "QC-агент проверяет соответствие оригиналу. Готово к загрузке на WB, Ozon, Яндекс.Маркет.", color: "var(--av-accent-2)" },
            ].map((s, i) => (
              <div key={s.n} className="av-card av-card-brut av-reveal" style={{
                ["--av-reveal-delay" as any]: `${i * 100}ms`,
                padding: 28, minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 999,
                  background: s.color, border: "1.5px solid var(--av-ink)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--av-font-display)",
                  fontSize: 24, fontWeight: 800, fontStyle: "italic",
                  color: "#fff",
                }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--av-font-display)", fontSize: 26, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em", lineHeight: 1.05 }}>{s.title}</h3>
                  <p style={{ margin: 0, color: "var(--av-muted)", fontSize: 14, lineHeight: 1.5 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Подсказка про проекты */}
          <div className="av-reveal" style={{
            maxWidth: 720, margin: "40px auto 0", padding: "20px 24px",
            background: "var(--av-paper)", border: "1.5px solid var(--av-ink)",
            borderRadius: 16, boxShadow: "var(--av-shadow-brut)",
            display: "flex", alignItems: "flex-start", gap: 14,
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "var(--av-accent)", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 7v13h18V7" /><path d="M3 7l9-4 9 4" /><path d="M9 12h6" />
              </svg>
            </span>
            <div>
              <div style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 18, color: "var(--av-ink)", marginBottom: 4 }}>Один проект = один стиль</div>
              <div style={{ fontSize: 14, color: "var(--av-muted)", lineHeight: 1.55 }}>
                Хотите серию карточек в едином дизайне — делайте их в одном проекте. AI один раз подбирает стиль, и все генерации выходят визуально согласованными.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON — традиционная съёмка vs Aiviso */}
      <section className="av-section" style={{
        background: "var(--av-bg-cream)",
        borderTop: "1.5px solid var(--av-ink)", borderBottom: "1.5px solid var(--av-ink)",
      }}>
        <div className="av-container">
          <div className="av-sec-head av-reveal">
            <span className="av-eyebrow">Сравнение</span>
            <h2 style={{ textWrap: "balance" }}>
              Профессиональный визуал <span className="av-italic" style={{ color: "var(--av-accent)" }}>за пару минут</span>
            </h2>
            <p>Традиционный путь — фотограф + ретушёр — это дни и тысячи рублей. Aiviso делает то же самое <b>быстрее и дешевле</b>.</p>
          </div>

          <div className="av-grid-2">
            {/* Traditional */}
            <div className="av-card av-reveal" style={{ padding: 32, background: "var(--av-paper)", borderColor: "rgba(14,14,16,.18)", boxShadow: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
                <h3 style={{ fontFamily: "var(--av-font-display)", fontSize: 28, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Традиционная съёмка</h3>
                <span className="av-chip" style={{ background: "#EFE7D6" }}>3—7 дней</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Съёмка + подбор локации, света, реквизита",
                  "Ретушь и обработка — много итераций",
                  "Стоимость от 5 000 ₽ за товар",
                  "Зависимость от расписания фотографа",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "var(--av-ink-3)" }}>
                    <span style={{ width: 24, height: 24, borderRadius: 999, background: "#fff", border: "1.5px solid var(--av-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aiviso */}
            <div className="av-reveal" style={{ ["--av-reveal-delay" as any]: "120ms" }}>
              <div style={{
                background: "var(--av-ink)", color: "#fff",
                border: "1.5px solid var(--av-ink)", borderRadius: 22,
                boxShadow: "10px 10px 0 0 var(--av-accent)",
                padding: 32, position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.25), transparent 70%)" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, position: "relative", flexWrap: "wrap", gap: 8 }}>
                  <div style={{ fontFamily: "var(--av-font-display)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
                    Aiviso<span style={{ color: "var(--av-accent)" }}>.ru</span>
                  </div>
                  <span className="av-chip" style={{ background: "var(--av-accent)", color: "#fff", borderColor: "var(--av-accent)" }}>~2 минуты</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
                  {[
                    "Visual Anchor — детали 1:1 с оригиналом",
                    "QC-агент с авто-ретраем при QC<85",
                    "Цена от 15 ₽ за кадр",
                    "Прямая выгрузка в WB / Ozon",
                  ].map((t) => (
                    <li key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15 }}>
                      <span style={{ width: 24, height: 24, borderRadius: 999, background: "var(--av-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <a href="/auth" className="av-btn av-btn-accent" style={{ marginTop: 28, position: "relative" }}>
                  Попробовать сейчас <span className="av-btn-arrow"><Arrow /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="av-section" style={{ background: "var(--av-bg)" }}>
        <div className="av-container">
          <div className="av-sec-head av-reveal">
            <span className="av-eyebrow">Примеры</span>
            <h2>
              Подходит для разных<br />
              <span className="av-italic" style={{ color: "var(--av-accent-3)" }}>категорий товаров</span>
            </h2>
            <p>Покажите нам товар — получите чистую, продающую карточку для маркетплейса</p>
          </div>

          <div className="av-grid-4">
            {[
              { slug: "dress",      label: "Одежда",            tag: "FASHION" },
              { slug: "armchair",   label: "Предметы интерьера", tag: "HOME" },
              { slug: "cosmetics",  label: "Косметика",          tag: "BEAUTY" },
              { slug: "food",       label: "Еда & напитки",      tag: "FOOD" },
              { slug: "headphones", label: "Электроника",        tag: "TECH" },
              { slug: "jewelry",    label: "Украшения",          tag: "JEWELRY" },
              { slug: "sneakers",   label: "Обувь",              tag: "SHOES" },
              { slug: "pets",       label: "Зоотовары",          tag: "PETS" },
            ].map((c, i) => (
              <div key={c.label} className="av-reveal" style={{ ["--av-reveal-delay" as any]: `${i * 60}ms` }}>
                <CategoryTile slug={c.slug} label={c.label} tag={c.tag} />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }} className="av-reveal">
            <a href="/auth" className="av-btn av-btn-accent">
              Создать для своего товара <span className="av-btn-arrow"><Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      {/* TELEGRAM BOT */}
      <section className="av-section" style={{
        background: "var(--av-bg-cream)",
        borderTop: "1.5px solid var(--av-ink)", borderBottom: "1.5px solid var(--av-ink)",
      }}>
        <div className="av-container">
          <div className="av-sec-head av-reveal">
            <span className="av-eyebrow">Telegram-бот</span>
            <h2>
              Или генерируйте<br />
              <span className="av-italic" style={{ color: "var(--av-accent)" }}>прямо в Telegram</span>
            </h2>
            <p>Не надо открывать кабинет — отправьте боту фото товара, ответьте на пару вопросов и получите готовую карточку в чат.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center", maxWidth: 1100, margin: "0 auto" }}>
            <div className="av-reveal">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Кидаете фото товара прямо из камеры",
                  "Бот спрашивает категорию, заголовок и УТП",
                  "Через 2 минуты — готовый JPG в чате",
                  "Кредиты общие с веб-кабинетом",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, fontWeight: 600 }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, background: "var(--av-accent)", border: "1.5px solid var(--av-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#fff" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a href="https://t.me/AIviso_image_bot" target="_blank" rel="noopener noreferrer" className="av-btn" style={{ marginTop: 24, background: "#2AABEE", borderColor: "var(--av-ink)", color: "#fff" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                </svg>
                @AIviso_image_bot
              </a>
              <p style={{ marginTop: 10, fontSize: 12, color: "var(--av-muted)" }}>Сначала бесплатная регистрация на сайте — потом подключаете бот в один клик</p>
            </div>

            {/* Telegram chat mockup */}
            <div className="av-reveal" style={{ ["--av-reveal-delay" as any]: "120ms", background: "#e7f3fe", borderRadius: 20, padding: "20px 16px", border: "1.5px solid var(--av-ink)", boxShadow: "var(--av-shadow-brut)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--av-accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14, border: "1.5px solid var(--av-ink)" }}>A</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1f2937" }}>Aiviso</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>бот · онлайн</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ alignSelf: "flex-end", maxWidth: "70%" }}>
                  <div style={{ background: "#dcf6c6", borderRadius: "14px 14px 4px 14px", padding: 8 }}>
                    <div style={{ width: 120, height: 120, borderRadius: 8, background: "linear-gradient(180deg,#f3f4f6 0%,#e5e7eb 100%)", display: "flex", alignItems: "flex-end", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                      <svg width="56" height="62" viewBox="0 0 56 62" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true" style={{ marginBottom: 10 }}>
                        <path d="M28 6 L50 16 V44 L28 54 L6 44 V16 Z" />
                        <path d="M6 16 L28 26 L50 16" />
                        <path d="M28 26 V54" />
                      </svg>
                      <span style={{ position: "absolute", top: 6, left: 6, padding: "2px 6px", borderRadius: 4, background: "rgba(255,255,255,0.85)", fontSize: 9, fontWeight: 600, color: "#6b7280" }}>фото</span>
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
                  <div style={{ background: "white", borderRadius: "14px 14px 14px 4px", padding: "8px 12px", fontSize: 13, color: "#1f2937" }}>
                    Принял! Какая категория товара?
                  </div>
                </div>
                <div style={{ alignSelf: "flex-end", maxWidth: "70%" }}>
                  <div style={{ background: "#dcf6c6", borderRadius: "14px 14px 4px 14px", padding: "8px 12px", fontSize: 13, color: "#1f2937" }}>Одежда</div>
                </div>
                <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
                  <div style={{ background: "white", borderRadius: "14px 14px 14px 4px", padding: 8 }}>
                    <div style={{ width: 140, height: 180, borderRadius: 8, background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 60%, #f9a8d4 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                      <div style={{ position: "absolute", top: 8, left: 8, right: 8, background: "rgba(255,255,255,0.92)", borderRadius: 6, padding: "4px 6px", textAlign: "left" }}>
                        <div style={{ fontSize: 8.5, fontWeight: 700, color: "#1f2937", lineHeight: 1.2 }}>Платье на запах</div>
                        <div style={{ fontSize: 7.5, color: "#6b7280", marginTop: 1, lineHeight: 1.2 }}>лён · вискоза</div>
                      </div>
                      <svg width="60" height="68" viewBox="0 0 60 68" fill="none" stroke="var(--av-accent)" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true" style={{ marginBottom: 24 }}>
                        <path d="M30 6 L52 16 V46 L30 56 L8 46 V16 Z" />
                        <path d="M8 16 L30 26 L52 16" />
                        <path d="M30 26 V56" />
                      </svg>
                      <span style={{ position: "absolute", top: 8, right: 8, padding: "2px 6px", borderRadius: 4, background: "var(--av-accent)", fontSize: 8, fontWeight: 700, color: "#fff" }}>WB 900×1200</span>
                      <span style={{ position: "absolute", bottom: 8, right: 8, padding: "2px 6px", borderRadius: 4, background: "rgba(255,255,255,0.92)", fontSize: 8, fontWeight: 700, color: "#059669" }}>QC 94/100</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 6, paddingLeft: 2 }}>Готово за 1 мин 47 сек</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="av-section" style={{ background: "var(--av-bg)" }}>
        <div className="av-container">
          <div className="av-sec-head av-reveal">
            <span className="av-eyebrow">Возможности</span>
            <h2>
              Всё что нужно <span className="av-italic" style={{ color: "var(--av-accent)" }}>для маркетплейса</span>
            </h2>
            <p>Не просто «красивая картинка» — оружие продаж</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {[
              { title: "Visual Anchor", desc: "AI один раз создаёт эталонное описание (силуэт, материалы, фурнитура) и держит детали неизменными во всех будущих генерациях.", color: "var(--av-accent)" },
              { title: "QC-агент", desc: "Каждое фото проходит автопроверку. Если баллы ниже 85/100 — авто-ретрай, до 3 попыток.", color: "var(--av-accent-3)" },
              { title: "2 минуты на карточку", desc: "Готовый пакет для WB и Ozon: packshot, lifestyle, инфографика — за время чашки кофе.", color: "var(--av-accent-2)" },
              { title: "Форматы WB и Ozon", desc: "Сразу в формате 3:4 (900×1200) — стандарт обоих маркетплейсов. Белый фон, без водяных знаков.", color: "var(--av-accent)" },
              { title: "Перенос WB ↔ Ozon", desc: "В один клик переносим карточки между маркетплейсами: категория и размеры подставляются автоматически.", color: "var(--av-accent-3)" },
              { title: "Кэш визуальных якорей", desc: "Анализируем товар один раз — все будущие сцены генерируются мгновенно без повторного анализа.", color: "var(--av-accent-4)" },
            ].map((f, i) => (
              <div key={f.title} className="av-card av-card-brut av-reveal" style={{ ["--av-reveal-delay" as any]: `${i * 60}ms`, padding: 28 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: f.color, border: "1.5px solid var(--av-ink)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--av-font-display)", fontSize: 22, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{f.title}</h3>
                <p style={{ margin: 0, color: "var(--av-muted)", fontSize: 14, lineHeight: 1.55 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — наша реальная модель: 15 ₽/кадр и 90 ₽/листинг */}
      <section id="pricing" className="av-section" style={{
        background: "linear-gradient(180deg, #0E0E10 0%, #1A1A2E 100%)",
        color: "#fff", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(50% 40% at 50% 0%, rgba(124,58,237,.18), transparent 70%)",
        }} />
        <div className="av-container" style={{ position: "relative" }}>
          <div className="av-sec-head av-reveal" style={{ color: "#fff" }}>
            <span className="av-eyebrow" style={{ color: "#fff" }}>Тарифы</span>
            <h2 style={{ color: "#fff" }}>
              Прозрачные <span className="av-italic" style={{ color: "var(--av-accent)" }}>цены</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)" }}>Платите только за то, что использовали. Без скрытых платежей и подписок.</p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(124,58,237,.15)", border: "1.5px solid var(--av-accent)", color: "var(--av-accent)", fontSize: 13, fontWeight: 700 }}>
              🎁 Старт бесплатно — 10 кредитов на тест
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
            {/* Старт */}
            <div className="av-reveal" style={{
              background: "rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.12)",
              borderRadius: 22, padding: 28, display: "flex", flexDirection: "column", gap: 16,
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            }}>
              <div>
                <div style={{ fontFamily: "var(--av-font-display)", fontStyle: "italic", fontSize: 18, fontWeight: 800, color: "var(--av-accent)", letterSpacing: "-0.02em" }}>Старт</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.55)", marginTop: 4 }}>Поштучные кредиты</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--av-font-display)", fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  15 <span style={{ fontSize: 18, color: "rgba(255,255,255,.55)", fontWeight: 500 }}>₽ / кадр</span>
                </div>
                <div style={{ marginTop: 6, fontSize: 13, color: "rgba(255,255,255,.55)" }}>1 кредит = 1 генерация</div>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,.1)" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["QC-проверка включена", "PNG 1200×1200", "10 кредитов при регистрации", "Без подписки и привязки карты"].map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(255,255,255,.85)" }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--av-accent)" }} />
                    {t}
                  </li>
                ))}
              </ul>
              <a href="/auth" className="av-btn" style={{ marginTop: "auto", justifyContent: "center", background: "#fff", color: "var(--av-ink)", borderColor: "#fff" }}>
                Начать бесплатно <span className="av-btn-arrow" style={{ background: "var(--av-ink)", color: "#fff" }}><Arrow /></span>
              </a>
            </div>

            {/* Листинг — popular */}
            <div className="av-reveal" style={{ ["--av-reveal-delay" as any]: "100ms", position: "relative" }}>
              <div style={{
                position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                background: "var(--av-accent)", color: "#fff",
                fontSize: 11, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase",
                padding: "6px 14px", borderRadius: 999, border: "1.5px solid var(--av-accent)",
                whiteSpace: "nowrap", zIndex: 2,
              }}>Популярно</div>
              <div style={{
                background: "rgba(124,58,237,.08)", border: "1.5px solid var(--av-accent)",
                borderRadius: 22, padding: 28, display: "flex", flexDirection: "column", gap: 16, height: "100%",
                boxShadow: "0 0 0 8px rgba(124,58,237,.12)",
              }}>
                <div>
                  <div style={{ fontFamily: "var(--av-font-display)", fontStyle: "italic", fontSize: 18, fontWeight: 800, color: "var(--av-accent)", letterSpacing: "-0.02em" }}>Листинг</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.55)", marginTop: 4 }}>Полный пакет для одной карточки</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--av-font-display)", fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    90 <span style={{ fontSize: 18, color: "rgba(255,255,255,.55)", fontWeight: 500 }}>₽ / листинг</span>
                  </div>
                  <div style={{ marginTop: 6, fontSize: 13, color: "rgba(255,255,255,.55)" }}>экономия 14% vs поштучно</div>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,.1)" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["7 фото: packshot + lifestyle + макро", "Все форматы маркетплейсов", "Приоритетная обработка", "Заголовок + УТП от AI"].map((t) => (
                    <li key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(255,255,255,.85)" }}>
                      <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--av-accent)" }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <a href="/auth" className="av-btn av-btn-accent" style={{ marginTop: "auto", justifyContent: "center" }}>
                  Выбрать <span className="av-btn-arrow"><Arrow /></span>
                </a>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 32, fontSize: 13, color: "rgba(255,255,255,.55)" }} className="av-reveal">
            При регистрации <span style={{ color: "var(--av-accent)", fontWeight: 700 }}>3 кредита</span>, после подтверждения телефона — ещё <span style={{ color: "var(--av-accent)", fontWeight: 700 }}>+10</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="av-section" style={{ background: "var(--av-bg)" }}>
        <div className="av-container-narrow">
          <LandingFAQ />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="av-section" style={{ background: "var(--av-bg)", textAlign: "center", paddingTop: 64, paddingBottom: 96 }}>
        <div className="av-container-narrow av-reveal" style={{ maxWidth: 720 }}>
          <h2 className="av-display" style={{ fontSize: "clamp(36px, 6vw, 72px)", margin: "0 0 16px", letterSpacing: "-0.03em" }}>
            Готовы поднять <span className="av-italic" style={{ color: "var(--av-accent)" }}>конверсию?</span>
          </h2>
          <p style={{ color: "var(--av-muted)", marginBottom: 32, fontSize: 18, lineHeight: 1.5 }}>
            10 кредитов на старт прямо сейчас. Карта не нужна.
          </p>
          <a href="/auth" className="av-btn av-btn-accent" style={{ padding: "18px 36px", fontSize: 17 }}>
            Попробовать бесплатно <span className="av-btn-arrow"><Arrow /></span>
          </a>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--av-muted)" }}>Селлеры WB и Ozon уже генерируют свои карточки в Aiviso</p>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer style={{ background: "var(--av-ink)", color: "#fff", padding: "80px 0 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1480, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32 }}>
            <div style={{ maxWidth: 380 }}>
              <div style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 32, letterSpacing: "-0.04em", display: "inline-flex", alignItems: "baseline", gap: 6 }}>
                aiviso<span style={{ width: 10, height: 10, background: "var(--av-accent)", border: "1.5px solid #fff", borderRadius: 999, alignSelf: "center" }} />ru
              </div>
              <p style={{ color: "rgba(255,255,255,.65)", fontSize: 15, marginTop: 16, lineHeight: 1.5 }}>
                AI-фотостудия для селлеров Wildberries и Ozon. Студийные карточки за пару минут.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
                <span className="av-chip" style={{ background: "rgba(255,255,255,.06)", color: "#fff", borderColor: "rgba(255,255,255,.2)" }}>WB</span>
                <span className="av-chip" style={{ background: "rgba(255,255,255,.06)", color: "#fff", borderColor: "rgba(255,255,255,.2)" }}>OZON</span>
                <span className="av-chip" style={{ background: "var(--av-accent)", color: "#fff", borderColor: "var(--av-accent)" }}>Telegram</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.45)" }}>Продукт</div>
                <a href="#features" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Возможности</a>
                <a href="#pricing" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Тарифы</a>
                <a href="#how" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Как работает</a>
                <a href="/blog" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Блог</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.45)" }}>Компания</div>
                <a href="/about" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>О нас</a>
                <a href="/contacts" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Контакты</a>
                <a href="/requisites" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Реквизиты</a>
                <a href="mailto:support@aiviso.ru" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>support@aiviso.ru</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.45)" }}>Документы</div>
                <a href="/terms" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Оферта</a>
                <a href="/privacy" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Политика</a>
                <a href="/consent" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Согласие на ОПД</a>
                <a href="/refund" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Возврат</a>
                <a href="/delivery" style={{ color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Получение услуги</a>
              </div>
            </div>
          </div>

          <div className="av-footer-mega" style={{ overflow: "hidden" }}>
            aivi<span style={{ color: "var(--av-accent)", fontStyle: "italic" }}>so.</span>ru
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.45)", fontSize: 13 }}>
            <div>© 2026 Aiviso · ИП Лузановская А. · ИНН и ОГРНИП — в платёжных документах</div>
            <div>AI-фото для маркетплейсов</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* === Inline helpers === */
function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
}

function ArrowFlow({ reverse }: { reverse?: boolean }) {
  return (
    <div className="av-arrow" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, minWidth: 60 }}>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--av-accent)" }}>sync</div>
      <div style={{ position: "relative", width: 60, height: 22 }}>
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 2, background: "var(--av-ink)", transform: "translateY(-50%)" }} />
        <div style={{
          position: "absolute", top: "50%", [reverse ? "left" : "right" as any]: 0,
          transform: "translateY(-50%)",
          width: 0, height: 0,
          borderTop: "6px solid transparent", borderBottom: "6px solid transparent",
          [(reverse ? "borderRight" : "borderLeft") as any]: "8px solid var(--av-ink)",
        }} />
      </div>
      <div style={{ fontSize: 10, fontWeight: 700, color: "var(--av-muted)" }}>авто</div>
    </div>
  );
}

function FeatureCard({ i, badge, title, text, tagBg, chipText, featured }: {
  i: number; badge: string; title: string; text: string; tagBg: string; chipText: string; featured?: boolean;
}) {
  return (
    <div className="av-reveal" style={{ ["--av-reveal-delay" as any]: `${i * 100}ms` }}>
      <div style={{
        background: featured ? "var(--av-ink)" : "var(--av-paper)",
        color: featured ? "#fff" : "var(--av-ink)",
        border: "1.5px solid var(--av-ink)", borderRadius: 22, padding: 28, height: "100%",
        boxShadow: featured ? "8px 8px 0 0 var(--av-accent)" : "6px 6px 0 0 var(--av-ink)",
        display: "flex", flexDirection: "column", gap: 18,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px",
            background: tagBg, color: "#fff",
            borderRadius: 999, border: "1.5px solid var(--av-ink)",
            fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 13, fontStyle: "italic",
          }}>{badge}</span>
          <span style={{
            fontSize: 10, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase",
            padding: "5px 10px", borderRadius: 6,
            background: featured ? "var(--av-accent)" : "var(--av-ink)",
            color: "#fff",
          }}>{chipText}</span>
        </div>
        <h3 style={{ fontFamily: "var(--av-font-display)", fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0 }}>{title}</h3>
        <p style={{ margin: 0, color: featured ? "rgba(255,255,255,.72)" : "var(--av-muted)", fontSize: 14, lineHeight: 1.55 }}>{text}</p>
      </div>
    </div>
  );
}

function CategoryTile({ slug, label, tag }: { slug: string; label: string; tag: string }) {
  return (
    <div>
      <div style={{
        border: "1.5px solid var(--av-ink)", borderRadius: 22,
        boxShadow: "var(--av-shadow-brut)", overflow: "hidden",
        aspectRatio: "3/4",
        background: "linear-gradient(135deg, #C4B5FD 0%, #7C3AED 100%)",
        position: "relative",
      }}>
        {/* WebP — в ~50× меньше PNG (15-35 KB вместо 1+ MB). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${API_URL}/media/_landing/categories/${slug}.webp`}
          alt={label}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={{
          position: "absolute", top: 12, right: 12,
          fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase",
          background: "var(--av-ink)", color: "#fff",
          padding: "5px 9px", borderRadius: 6,
        }}>{tag}</div>
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--av-muted)" }}>Категория</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4, fontFamily: "var(--av-font-display)" }}>{label}</div>
      </div>
    </div>
  );
}
