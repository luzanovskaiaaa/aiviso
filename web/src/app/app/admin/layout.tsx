"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

interface Me { id: number; email: string; name: string; credits: number; is_admin: boolean }

const NAV_ITEMS = [
  { href: "/app/admin",             label: "Дашборд",     match: (p: string) => p === "/app/admin" },
  { href: "/app/admin/users",       label: "Пользователи", match: (p: string) => p.startsWith("/app/admin/users") },
  { href: "/app/admin/generations", label: "Генерации",    match: (p: string) => p.startsWith("/app/admin/generations") },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const [me, setMe] = useState<Me | null>(null);
  const [forbidden, setForbidden] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    api.get<Me>("/auth/me").then(({ data }) => {
      if (!data.is_admin) { setForbidden(true); return; }
      setMe(data);
    }).catch(() => router.push("/auth"));
  }, []);

  if (forbidden) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppNav />
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-2">Доступ запрещён</h1>
          <p className="text-gray-500 mb-6">Этот раздел только для администраторов.</p>
          <Link href="/app" className="text-violet-600 hover:underline">← В Проекты</Link>
        </div>
      </div>
    );
  }

  if (!me) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppNav />
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="animate-pulse h-8 w-40 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-3 sm:px-6 py-2.5 flex items-center gap-2 sm:gap-4 flex-wrap">
        <Link href="/app" className="text-xs sm:text-sm text-gray-500 hover:text-gray-800 shrink-0">← В Проекты</Link>
        <span className="text-gray-300">/</span>
        <h1 className="font-semibold text-sm sm:text-base shrink-0">Админка</h1>
        <nav className="flex items-center gap-1 ml-auto" aria-label="Админ-навигация">
          {NAV_ITEMS.map(item => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  active
                    ? "bg-violet-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      {children}
    </div>
  );
}
