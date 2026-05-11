"use client";
import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aiviso.ru";

const PAIRS = [
  {
    label: "Предметы интерьера",
    sub: "Придиванный столик",
    before: `${API_URL}/media/_landing/before_after/2_before.jpg`,
    after: `${API_URL}/media/_landing/before_after/2_after.png`,
  },
  {
    label: "Одежда",
    sub: "Платье на запах",
    before: `${API_URL}/media/_landing/before_after/1_before.jpg`,
    after: `${API_URL}/media/_landing/before_after/1_after.png`,
  },
];

export default function LandingDemo() {
  const [active, setActive] = useState(0);
  const pair = PAIRS[active];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div className="av-sec-head av-reveal">
        <span className="av-eyebrow">Реальные результаты</span>
        <h2>
          Сравни <span className="av-italic" style={{ color: "var(--av-accent)" }}>своими глазами</span>
        </h2>
        <p>Слева — фото селлера, справа — Aiviso. Все детали сохранены. Потяни ползунок.</p>
      </div>

      <div className="av-reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        {/* Слайдер в brutalist-обёртке */}
        <div style={{
          width: "100%", maxWidth: 420,
          border: "1.5px solid var(--av-ink)",
          borderRadius: 22,
          boxShadow: "var(--av-shadow-brut-lg)",
          overflow: "hidden",
        }}>
          <BeforeAfterSlider
            key={active}
            before={pair.before}
            after={pair.after}
            beforeLabel="До"
            afterLabel="После"
          />
        </div>

        {/* Табы пар */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {PAIRS.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: "1.5px solid var(--av-ink)",
                  background: isActive ? "var(--av-accent)" : "var(--av-paper)",
                  color: isActive ? "#fff" : "var(--av-ink)",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                  minWidth: 140,
                  boxShadow: isActive ? "4px 4px 0 0 var(--av-ink)" : "none",
                  fontFamily: "var(--av-font-text)",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 800 }}>{p.label}</span>
                <span style={{ fontSize: 11, fontWeight: 500, color: isActive ? "rgba(255,255,255,.85)" : "var(--av-muted)" }}>
                  {p.sub}
                </span>
              </button>
            );
          })}
        </div>

        <a href="/auth" className="av-btn av-btn-accent">
          Сделать со своим товаром
          <span className="av-btn-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
