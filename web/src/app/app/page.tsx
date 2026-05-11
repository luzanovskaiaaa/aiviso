"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api, CATEGORIES } from "@/lib/api";
import Link from "next/link";
import AppNav from "@/components/layout/AppNav";
import OnboardingModal from "@/components/OnboardingModal";

interface Project {
  id: number;
  name: string;
  category: string;
  upload_count: number;
  flow?: "single" | "series";
  model?: "pro" | "flash";
}

export default function AppPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState(0);
  const [userName, setUserName] = useState("");
  const [creating, setCreating] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState<boolean | null>(null);
  const [newProject, setNewProject] = useState<{ name: string; category: string; flow: "single" | "series"; model: "pro" | "flash" }>({ name: "", category: "clothing", flow: "single", model: "flash" });

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) { router.push("/auth"); return; }
    setUserName(localStorage.getItem("user_name") || "");
    setCredits(Number(localStorage.getItem("user_credits") || 0));
    loadProjects();
    // Синхронизация кредитов с сервером (localStorage может быть stale).
    api.get("/auth/me").then(({ data }) => {
      setCredits(data.credits);
      setUserName(data.name);
      setPhoneVerified(!!data.phone_verified);
      localStorage.setItem("user_credits", String(data.credits));
      localStorage.setItem("user_name", data.name);
    }).catch(() => {});
  }, []);

  const loadProjects = async () => {
    try {
      const { data } = await api.get("/projects");
      setProjects(data);
    } catch { router.push("/auth"); }
    finally { setLoading(false); }
  };

  const createProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/projects", newProject);
      router.push(`/app/projects/${data.id}`);
    } catch (err: any) {
      alert(err.response?.data?.detail || "Ошибка");
    }
  };

  const logout = () => {
    localStorage.clear();
    router.push("/auth");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full" /></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <OnboardingModal />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Баннер для не-верифицированных юзеров — без подтверждения телефона
            на балансе 0 кр и сервис недоступен. Подтверждение бывает 2 способами:
            (1) подключить Telegram-бот и share_contact, (2) перелогиниться через Яндекс/VK SSO. */}
        {phoneVerified === false && credits === 0 && (
          <div className="mb-5 rounded-2xl p-5 sm:p-6"
               style={{ background: "var(--av-paper)", border: "1.5px solid var(--av-ink)", boxShadow: "var(--av-shadow-brut)" }}>
            <div className="flex items-start gap-3 flex-wrap">
              <div className="text-2xl shrink-0">📱</div>
              <div className="flex-1 min-w-[220px]">
                <h3 style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  Подтверди телефон <span style={{ fontStyle: "italic", color: "var(--av-accent)" }}>— и получи 10 кредитов</span>
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--av-muted)" }}>
                  Без подтверждения генерация недоступна. Это защита от халявщиков и ботов.
                </p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <a href="/app/account/notifications"
                     className="av-btn av-btn-accent" style={{ padding: "10px 18px", fontSize: 14 }}>
                    📲 Подключить Telegram-бот
                  </a>
                  <button
                    onClick={() => { localStorage.clear(); router.push("/auth"); }}
                    className="av-btn av-btn-ghost" style={{ padding: "10px 18px", fontSize: 14 }}>
                    Войти через Яндекс / VK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Мои проекты</h1>
          <button
            onClick={() => setCreating(true)}
            disabled={phoneVerified === false && credits === 0}
            title={phoneVerified === false && credits === 0 ? "Сначала подтверди телефон" : ""}
            className="px-4 py-2 bg-violet-600 text-white rounded-xl text-sm font-medium hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            + Новый проект
          </button>
        </div>

        {/* New project form */}
        {creating && (
          <div className="bg-white rounded-2xl border border-violet-100 p-6 mb-6 shadow-sm">
            <h2 className="font-medium mb-4">Новый проект</h2>
            <form onSubmit={createProject} className="space-y-4">
              {/* Выбор сценария */}
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-2">Что делаем?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNewProject({ ...newProject, flow: "single" })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      newProject.flow === "single"
                        ? "border-violet-500 bg-violet-50"
                        : "border-gray-100 hover:border-violet-200"
                    }`}
                  >
                    <div className="font-medium text-sm mb-1">⚡ Одна карточка <span className="text-xs text-violet-600 font-normal">быстро</span></div>
                    <div className="text-xs text-gray-500 leading-snug">До 3 фото → AI-заголовок и УТП → готовая карточка с красивым оверлеем от Nano Banana (заголовок + line-art иконки в bitmap)</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewProject({ ...newProject, flow: "series" })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      newProject.flow === "series"
                        ? "border-violet-500 bg-violet-50"
                        : "border-gray-100 hover:border-violet-200"
                    }`}
                  >
                    <div className="font-medium text-sm mb-1">🎨 Серия карточек</div>
                    <div className="text-xs text-gray-500 leading-snug">Market research → 6 концепций → batch-генерация чистых картинок + редактируемый overlay (заголовок/УТП можно двигать, шрифт менять)</div>
                  </button>
                </div>
              </div>

              {/* Выбор модели */}
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-2">Модель</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNewProject({ ...newProject, model: "pro" })}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      newProject.model === "pro"
                        ? "border-violet-500 bg-violet-50 text-violet-700"
                        : "border-gray-100 hover:border-violet-200 text-gray-600"
                    }`}
                  >
                    <div className="font-medium text-sm">🥇 Pro</div>
                    <div className="text-[11px] text-gray-400">Nano Banana Pro</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewProject({ ...newProject, model: "flash" })}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      newProject.model === "flash"
                        ? "border-violet-500 bg-violet-50 text-violet-700"
                        : "border-gray-100 hover:border-violet-200 text-gray-600"
                    }`}
                  >
                    <div className="font-medium text-sm">⚡ Flash</div>
                    <div className="text-[11px] text-gray-400">Nano Banana Flash</div>
                  </button>
                </div>
              </div>

              {/* Название и категория */}
              <div className="flex gap-3 flex-wrap">
                <input
                  className="input-field flex-1 min-w-48"
                  placeholder="Название (например: Платье синее)"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  required
                  autoFocus
                />
                <select
                  className="input-field"
                  value={newProject.category}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                >
                  {Object.entries(CATEGORIES).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
                <button type="submit" className="px-4 py-2 bg-violet-600 text-white rounded-xl text-sm font-medium hover:bg-violet-700">
                  Создать
                </button>
                <button type="button" onClick={() => setCreating(false)} className="px-4 py-2 text-gray-500 hover:text-gray-700 text-sm">
                  Отмена
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects grid */}
        {projects.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">📦</div>
            <p className="text-lg">Нет проектов — создай первый</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <Link key={p.id} href={`/app/projects/${p.id}`} className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-violet-200 hover:shadow-sm transition-all group">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-medium text-violet-700 bg-violet-50 px-2 py-0.5 rounded-md">
                      {CATEGORIES[p.category]}
                    </span>
                    <span className="text-[10px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                      {p.flow === "series" ? "Серия" : "Одна"}
                    </span>
                    {p.model === "pro" ? (
                      <span className="text-[10px] font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 px-2 py-0.5 rounded-md inline-flex items-center gap-0.5">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>
                        </svg>
                        Pro
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                        Flash
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-gray-500 shrink-0 font-medium">{p.upload_count} фото</span>
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-violet-700 transition-colors">{p.name}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
