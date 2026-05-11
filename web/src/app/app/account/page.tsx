"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

interface Me { id: number; email: string; name: string; credits: number; is_admin?: boolean }

interface Section {
  href: string | null;        // null = заглушка «скоро»
  icon: ReactNode;
  title: string;
  hint: string;
  badge?: string;
}

const SECTIONS: Section[] = [
  {
    href: "/app/account/profile",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
    title: "Профиль",
    hint: "Имя, email, телефон",
  },
  {
    href: "/app/account/billing",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 11h20"/><path d="M6 16h4"/></svg>,
    title: "Биллинг",
    hint: "Кредиты, тариф, история платежей",
  },
  {
    href: "/app/account/marketplaces",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9 4.5 4h15L21 9"/><path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9"/><path d="M3 9h18"/></svg>,
    title: "Подключённые магазины",
    hint: "API-ключи WB / Ozon и сопоставление категорий",
  },
  {
    href: "/app/account/security",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: "Безопасность",
    hint: "Пароль, активные сессии, 2FA",
  },
  {
    href: "/app/account/legal",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 9h2"/><path d="M9 13h2"/><path d="M9 17h2"/><path d="M13 9h2"/><path d="M13 13h2"/><path d="M13 17h2"/></svg>,
    title: "Юр.лицо",
    hint: "Реквизиты, договор, оплата по счёту",
    badge: "скоро",
  },
  {
    href: "/app/account/team",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Команда",
    hint: "Сотрудники, роли, приглашения",
    badge: "скоро",
  },
  {
    href: "/app/account/notifications",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>,
    title: "Уведомления",
    hint: "Telegram-бот для готовых фото",
  },
];

export default function AccountPage() {
  const router = useRouter();
  const [me, setMe] = useState<Me | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    api.get<Me>("/auth/me").then(({ data }) => setMe(data)).catch(() => router.push("/auth"));
  }, []);

  const logout = () => { localStorage.clear(); router.push("/auth"); };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6">Личный кабинет</h1>

        {/* Топ-сводка: имя + кредиты */}
        {me && (
          <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 mb-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-700 text-lg font-semibold flex items-center justify-center shrink-0">
              {(me.name || "?").charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate">{me.name}</div>
              <div className="text-xs text-gray-500 truncate">{me.email}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-lg font-semibold text-violet-600">{me.credits}</div>
              <div className="text-[11px] text-gray-400">кредитов</div>
            </div>
          </div>
        )}

        {/* Админский блок — виден только админам */}
        {me?.is_admin && (
          <button
            onClick={() => router.push("/app/admin")}
            className="w-full flex items-center gap-3 p-4 rounded-2xl border-2 border-violet-300 bg-violet-50 hover:bg-violet-100 text-left transition-colors mb-3 active:scale-[0.99]"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-violet-600 text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-violet-900">Админка</div>
              <div className="text-xs text-violet-700/80 mt-0.5">Пользователи, генерации, статистика</div>
            </div>
            <span className="text-violet-400 text-lg shrink-0">›</span>
          </button>
        )}

        {/* Сетка разделов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {SECTIONS.map((s, i) => {
            const disabled = !s.href;
            return (
              <button key={i}
                onClick={() => s.href && router.push(s.href)}
                disabled={disabled}
                className={`flex items-start gap-3 p-4 rounded-2xl border bg-white text-left transition-colors ${
                  disabled
                    ? "border-gray-100 opacity-60 cursor-default"
                    : "border-gray-100 [@media(hover:hover)]:hover:border-violet-200 [@media(hover:hover)]:hover:bg-violet-50/30 active:bg-gray-50"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${disabled ? "bg-gray-100 text-gray-400" : "bg-violet-50 text-violet-600"}`}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm text-gray-900">{s.title}</span>
                    {s.badge && <span className="text-[10px] uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">{s.badge}</span>}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-snug">{s.hint}</div>
                </div>
                {!disabled && (
                  <span className="text-gray-300 self-center text-lg shrink-0">›</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Документы и реквизиты — отдельный блок */}
        <div className="mt-3 bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gray-50 text-gray-600">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm text-gray-900">Документы и реквизиты</h3>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">Оферта, политика конфиденциальности, реквизиты ИП и контакты исполнителя.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-sm">
            {[
              { href: "/about",      label: "О компании" },
              { href: "/requisites", label: "Реквизиты" },
              { href: "/terms",      label: "Публичная оферта" },
              { href: "/privacy",    label: "Конфиденциальность" },
              { href: "/consent",    label: "Согласие на ОПД" },
              { href: "/refund",     label: "Возврат" },
              { href: "/delivery",   label: "Получение услуги" },
            ].map(d => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-violet-700 hover:bg-violet-50 transition-colors text-xs sm:text-sm flex items-center justify-between gap-2"
              >
                <span>{d.label}</span>
                <svg className="w-3 h-3 text-gray-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17l10-10M17 7H7v10"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Выход — отдельной кнопкой */}
        <div className="mt-6">
          <button onClick={logout}
            className="w-full sm:w-auto px-6 py-2.5 text-sm text-red-600 [@media(hover:hover)]:hover:bg-red-50 active:bg-red-50 rounded-xl font-medium transition-colors">
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}
