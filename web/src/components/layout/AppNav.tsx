"use client";
/**
 * AppNav — единая навигация для всех /app/* разделов.
 *
 * Структура:
 * - Mobile (<md): двухстрочная sticky-шапка
 *   Строка 1 (48px): лого + кредиты + аватар-меню
 *   Строка 2 (44px): 3 равных таба (Проекты | Мои магазины | ЛК)
 * - Desktop (≥md): одна строка — лого + табы по центру + кредиты + аватар
 *
 * Активный таб подсвечен (белая подложка + violet текст).
 * Аватар-дропдаун содержит ЛК-подразделы (быстрый доступ).
 */
import { useEffect, useState, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { api } from "@/lib/api";

type Section = "projects" | "shops" | "account";

const SECTIONS: { id: Section; label: string; href: string; icon: ReactNode; matches: (path: string) => boolean }[] = [
  {
    id: "projects",
    label: "Проекты",
    href: "/app",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="9" rx="1.5"/>
        <rect x="14" y="3" width="7" height="5" rx="1.5"/>
        <rect x="14" y="12" width="7" height="9" rx="1.5"/>
        <rect x="3" y="16" width="7" height="5" rx="1.5"/>
      </svg>
    ),
    matches: (p) => p === "/app" || p.startsWith("/app/projects") || p.startsWith("/app/generate"),
  },
  {
    id: "shops",
    label: "Мои магазины",
    href: "/app/marketplaces",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9 4.5 4h15L21 9"/>
        <path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9"/>
        <path d="M3 9h18"/><path d="M9 13h6"/>
      </svg>
    ),
    matches: (p) => p.startsWith("/app/marketplaces"),
  },
  {
    id: "account",
    label: "ЛК",
    href: "/app/account",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 21a8 8 0 0 1 16 0"/>
      </svg>
    ),
    matches: (p) => p.startsWith("/app/account") || p.startsWith("/app/profile"),
  },
];

export default function AppNav() {
  const router = useRouter();
  const pathname = usePathname() || "/app";
  const [credits, setCredits] = useState<number | null>(null);
  const [userName, setUserName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setUserName(localStorage.getItem("user_name") || "");
    const c = localStorage.getItem("user_credits");
    setCredits(c ? Number(c) : null);
    api.get("/auth/me").then(({ data }) => {
      setCredits(data.credits);
      setUserName(data.name);
      localStorage.setItem("user_credits", String(data.credits));
      localStorage.setItem("user_name", data.name);
    }).catch(() => {});
  }, [pathname]);

  const logout = () => {
    localStorage.clear();
    router.push("/auth");
  };

  const active: Section | null = SECTIONS.find(s => s.matches(pathname))?.id || null;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      {/* Строка 1: лого + кредиты + аватар. На md+ сюда же добавляются табы по центру. */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-12 md:h-14 flex items-center gap-3">
        {/* Лого */}
        <button onClick={() => router.push("/app")}
          className="flex items-baseline gap-1.5 shrink-0 active:scale-[0.97] transition-transform"
          style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.04em", color: "var(--av-ink)" }}
          aria-label="На главную"
        >
          <span>aiviso</span>
          <span style={{ width: 8, height: 8, background: "var(--av-accent)", border: "1.5px solid var(--av-ink)", borderRadius: 999, alignSelf: "center" }} />
        </button>

        {/* Tab-toggle (только md+) — все 3 раздела */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100 rounded-xl p-1 mx-auto" aria-label="Основные разделы">
          {SECTIONS.map(s => {
            const isActive = active === s.id;
            return (
              <button key={s.id}
                onClick={() => router.push(s.href)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all min-h-[44px] active:scale-[0.97] ${
                  isActive ? "bg-white text-violet-700 shadow-sm"
                           : "text-gray-600 [@media(hover:hover)]:hover:text-gray-900"
                }`}>
                {s.icon}
                <span>{s.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Правый блок: кредиты + аватар-меню */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
            <span className="font-semibold text-violet-600">{credits ?? "…"}</span>
            <span className="hidden sm:inline"> кред.</span>
          </span>
          <div className="relative">
            <button onClick={() => setMenuOpen(v => !v)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Меню пользователя"
              className="flex items-center gap-1.5 min-h-[40px] min-w-[40px] px-1 sm:px-2 rounded-lg [@media(hover:hover)]:hover:bg-gray-100 active:bg-gray-100 transition-colors">
              <span className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold flex items-center justify-center">
                {(userName || "?").charAt(0).toUpperCase()}
              </span>
              <span className="hidden md:inline text-sm text-gray-700 max-w-[140px] truncate">{userName}</span>
            </button>
            {menuOpen && (
              <>
                <button className="fixed inset-0 z-30 cursor-default" aria-hidden="true" onClick={() => setMenuOpen(false)} />
                <div role="menu" className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-40">
                  <div className="px-3 py-2 text-xs text-gray-400 border-b border-gray-100">{userName || "—"}</div>
                  <button role="menuitem" onClick={() => { setMenuOpen(false); router.push("/app/account"); }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 [@media(hover:hover)]:hover:bg-gray-50">
                    Личный кабинет
                  </button>
                  <button role="menuitem" onClick={() => { setMenuOpen(false); router.push("/app/account/profile"); }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 [@media(hover:hover)]:hover:bg-gray-50">
                    Профиль
                  </button>
                  <button role="menuitem" onClick={() => { setMenuOpen(false); router.push("/app/account/billing"); }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 [@media(hover:hover)]:hover:bg-gray-50">
                    Биллинг
                  </button>
                  <button role="menuitem" onClick={() => { setMenuOpen(false); router.push("/app/marketplaces/mappings"); }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 [@media(hover:hover)]:hover:bg-gray-50">
                    Синхронизация WB↔Ozon
                  </button>
                  <button role="menuitem" onClick={() => { setMenuOpen(false); router.push("/app/account/security"); }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 [@media(hover:hover)]:hover:bg-gray-50">
                    Безопасность
                  </button>
                  <div className="border-t border-gray-100 my-1" />
                  <button role="menuitem" onClick={() => { setMenuOpen(false); logout(); }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-500 [@media(hover:hover)]:hover:bg-gray-50">
                    Выйти
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Строка 2: 3 таба — только мобиль */}
      <nav className="md:hidden border-t border-gray-100 px-2 py-1.5 flex gap-1 bg-gray-100" aria-label="Основные разделы">
        {SECTIONS.map(s => {
          const isActive = active === s.id;
          return (
            <button key={s.id}
              onClick={() => router.push(s.href)}
              aria-current={isActive ? "page" : undefined}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 min-h-[40px] rounded-lg text-xs font-medium transition-all active:scale-[0.97] ${
                isActive ? "bg-white text-violet-700 shadow-sm"
                         : "text-gray-600 active:bg-gray-50"
              }`}>
              <span className="scale-90">{s.icon}</span>
              <span>{s.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
