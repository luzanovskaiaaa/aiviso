"use client";
/**
 * Уведомление об использовании cookie. Показывается один раз — после Accept
 * сохраняется флаг в localStorage. Соответствует требованиям ФЗ-152 и
 * европейским рекомендациям по информированному согласию.
 */
import { useEffect, useState } from "react";

const STORAGE_KEY = "aiviso_cookies_accepted_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) {
      // небольшая задержка чтобы не дёргать UI на первом рендере
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании cookie"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        maxWidth: 920,
        margin: "0 auto",
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: "16px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        zIndex: 9999,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
        <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.55, flex: "1 1 320px", minWidth: 0 }}>
          Мы используем cookie для работы сайта (аутентификация) и обезличенной аналитики.
          Продолжая использовать сервис, вы соглашаетесь с{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#7c3aed", textDecoration: "underline" }}>
            Политикой конфиденциальности
          </a>.
        </p>
        <button
          onClick={accept}
          style={{
            padding: "10px 22px",
            background: "#7c3aed",
            color: "white",
            border: "none",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Принять
        </button>
      </div>
    </div>
  );
}
