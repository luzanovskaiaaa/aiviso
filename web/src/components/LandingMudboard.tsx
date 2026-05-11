"use client";

/**
 * Mudboard collage — 12 наклонённых плиток с реальными AI-карточками,
 * сгенерированными через Nano Banana Pro и сложенными в /api/media/_landing/categories/{slug}.png.
 *
 * Плитки скрываются на узких экранах через CSS — на десктопе показывается
 * полный коллаж 10 колонок, на мобилке — компактная сетка 2x3.
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aiviso.ru";

const TILES = [
  { col: "1 / 3", row: "1 / 3", slug: "dress",      label: "Платье",        tag: "AI",  rot: -3 },
  { col: "3 / 5", row: "1 / 2", slug: "handbag",    label: "Сумки",         tag: undefined, rot: 2 },
  { col: "5 / 7", row: "1 / 3", slug: "sneakers",   label: "Обувь",         tag: "NEW", rot: -1 },
  { col: "7 / 9", row: "1 / 2", slug: "watch",      label: "Аксессуары",    tag: undefined, rot: 3 },
  { col: "9 / 11", row: "1 / 3", slug: "cosmetics", label: "Косметика",     tag: undefined, rot: -2 },
  { col: "3 / 4", row: "2 / 3", slug: "ring",       label: undefined,        tag: undefined, rot: 1 },
  { col: "4 / 5", row: "2 / 3", slug: "sunglasses", label: undefined,        tag: undefined, rot: -2 },
  { col: "7 / 9", row: "2 / 3", slug: "headphones", label: "Электроника",   tag: undefined, rot: 2 },
  { col: "1 / 3", row: "3 / 4", slug: "armchair",   label: "Мебель",        tag: undefined, rot: 2 },
  { col: "3 / 6", row: "3 / 4", slug: "food",       label: "Еда & напитки", tag: "HOT", rot: -1 },
  { col: "6 / 9", row: "3 / 4", slug: "pets",       label: "Зоотовары",     tag: undefined, rot: 1 },
  { col: "9 / 11", row: "3 / 4", slug: "jewelry",   label: "Украшения",     tag: undefined, rot: -3 },
];

// Первые N плиток грузятся eager (они в hero, в viewport сразу) — остальные lazy.
// При 12 плитках × ~20KB WebP это всё равно меньше 250KB, но eager-loading первой строки
// убирает «построчное появление» которое раздражает Алёну.
const EAGER_COUNT = 12; // все маленькие — грузим eager, не успеют замедлить FCP

export default function LandingMudboard() {
  return (
    <>
      {/* Desktop — полный коллаж */}
      <div className="mudboard-desktop" style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gridAutoRows: "120px",
        gap: 14,
      }}>
        {TILES.map((t, i) => (
          <div
            key={i}
            className={`av-float-card av-delay-${i % 4}`}
            style={{
              gridColumn: t.col,
              gridRow: t.row,
              ["--av-rot" as string]: `${t.rot}deg`,
              transform: `rotate(${t.rot}deg)`,
            }}
          >
            <Tile slug={t.slug} label={t.label} tag={t.tag} eager={i < EAGER_COUNT} />
          </div>
        ))}
      </div>

      {/* Mobile — компактная 2-колоночная сетка из 4 главных плиток */}
      <div className="mudboard-mobile" style={{
        display: "none",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 12,
      }}>
        {[TILES[0], TILES[2], TILES[8], TILES[9]].map((t, i) => (
          <div
            key={i}
            className={`av-float-card av-delay-${i % 4}`}
            style={{
              aspectRatio: "1",
              ["--av-rot" as string]: `${t.rot}deg`,
              transform: `rotate(${t.rot}deg)`,
            }}
          >
            <Tile slug={t.slug} label={t.label} tag={t.tag} eager />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 880px) {
          .mudboard-desktop { display: none !important; }
          .mudboard-mobile { display: grid !important; }
        }
      `}</style>
    </>
  );
}

function Tile({ slug, label, tag, eager }: {
  slug: string;
  label?: string;
  tag?: string;
  eager?: boolean;
}) {
  return (
    <div style={{
      width: "100%", height: "100%",
      border: "1.5px solid var(--av-ink)",
      borderRadius: 22,
      boxShadow: "6px 6px 0 0 var(--av-ink)",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, #C4B5FD 0%, #7C3AED 100%)",
    }}>
      {/* WebP вместо PNG — в 50-100 раз меньше (15-35 KB вместо 1+ MB). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${API_URL}/media/_landing/categories/${slug}.webp`}
        alt={label || slug}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
        }}
      />
      {tag && (
        <div style={{
          position: "absolute", top: 12, right: 12,
          fontSize: 10, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase",
          background: "var(--av-ink)", color: "#fff",
          padding: "5px 9px", borderRadius: 6,
        }}>{tag}</div>
      )}
      {label && (
        <div style={{
          position: "absolute", bottom: 12, left: 12,
          fontSize: 10, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase",
          color: "rgba(255,255,255,.95)",
          background: "rgba(0,0,0,.45)",
          padding: "6px 10px", borderRadius: 999,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}>{label}</div>
      )}
    </div>
  );
}
