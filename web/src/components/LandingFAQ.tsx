"use client";
import { useState } from "react";
import { FAQ } from "./faqData";

export default function LandingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: 880, margin: "0 auto" }}>
      <div className="av-sec-head av-reveal">
        <span className="av-eyebrow">FAQ</span>
        <h2>
          Что обычно <span className="av-italic" style={{ color: "var(--av-accent-3)" }}>спрашивают селлеры</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {FAQ.map((qa, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="av-card av-card-brut av-reveal"
              style={{ ["--av-reveal-delay" as any]: `${i * 50}ms`, padding: 0 }}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  width: "100%",
                  padding: "22px 26px",
                  border: 0,
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 18,
                  textAlign: "left",
                  fontFamily: "var(--av-font-display)",
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--av-ink)",
                  cursor: "pointer",
                  lineHeight: 1.25,
                }}
              >
                <span>{qa.q}</span>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    background: isOpen ? "var(--av-accent)" : "var(--av-bg)",
                    border: "1.5px solid var(--av-ink)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform .25s, background .15s",
                    color: isOpen ? "#fff" : "var(--av-ink)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div
                  style={{
                    padding: "0 26px 24px",
                    color: "var(--av-muted)",
                    fontSize: 16,
                    lineHeight: 1.6,
                    maxWidth: 760,
                  }}
                >
                  {qa.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
