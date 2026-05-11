"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

type Provider = "wb" | "ozon" | "ym";

interface Account {
  id: number;
  provider: Provider;
  name: string;
  has_client_id: boolean;
  has_business_id: boolean;
  status: string;
  last_sync_at: string | null;
  created_at: string;
}

interface ImportedCard {
  id: number;
  mp_card_id: string;
  nm_id: number | null;
  name: string | null;
  brand: string | null;
  category: string | null;
  photos: string[] | null;
  project_id: number | null;
  imported_at: string;
}

const PROVIDER_LABEL: Record<Provider, { name: string; emoji: string; color: string }> = {
  wb:   { name: "Wildberries",     emoji: "🟣", color: "violet" },
  ozon: { name: "Ozon",            emoji: "🔵", color: "blue" },
  ym:   { name: "Яндекс Маркет",   emoji: "🟡", color: "amber" },
};

export default function MarketplacesPage() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<Account[] | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [cards, setCards] = useState<ImportedCard[]>([]);
  const [cardsLoading, setCardsLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [creatingProject, setCreatingProject] = useState<number | null>(null);

  // Фильтры
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState<string>("");
  const [filterRenovated, setFilterRenovated] = useState<"all" | "yes" | "no">("all");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) { router.push("/auth"); return; }
    loadAccounts();
  }, []);

  // При смене активного магазина — подгружаем его карточки
  useEffect(() => {
    if (activeId) loadCards(activeId);
  }, [activeId]);

  const loadAccounts = async () => {
    try {
      const { data } = await api.get<Account[]>("/marketplaces");
      setAccounts(data);
      // Если ещё нет активного — выбираем первый
      if (!activeId && data.length > 0) setActiveId(data[0].id);
    } catch { router.push("/auth"); }
  };

  const loadCards = async (accId: number) => {
    setCardsLoading(true);
    try {
      const { data } = await api.get<ImportedCard[]>(`/marketplaces/${accId}/cards`);
      setCards(data);
    } catch (err: any) {
      setCards([]);
    } finally { setCardsLoading(false); }
  };

  const importCards = async () => {
    if (!activeId) return;
    setImporting(true);
    try {
      const { data } = await api.post<{ imported: number }>(`/marketplaces/${activeId}/cards/import`);
      alert(`Импортировано: ${data.imported}`);
      await loadCards(activeId);
      await loadAccounts();
    } catch (err: any) {
      alert(err.response?.data?.detail || "Ошибка импорта");
    } finally { setImporting(false); }
  };

  const createProject = async (cardId: number) => {
    if (!activeId) return;
    setCreatingProject(cardId);
    try {
      const { data } = await api.post<{ project_id: number }>(`/marketplaces/${activeId}/cards/${cardId}/create-project`);
      router.push(`/app/projects/${data.project_id}`);
    } catch (err: any) {
      alert(err.response?.data?.detail || "Ошибка");
    } finally { setCreatingProject(null); }
  };

  // Migrate-as-is: перенести карточку с одного маркетплейса на другой
  // С теми же фото оригинала (без AI-генерации). Ищем target — первый аккаунт другого провайдера.
  const [migratingCard, setMigratingCard] = useState<number | null>(null);
  const migrateAsIs = async (cardId: number) => {
    if (!activeId || !accounts) return;
    const source = accounts.find(a => a.id === activeId);
    if (!source) return;
    const targets = accounts.filter(a => a.provider !== source.provider && a.provider !== "ym");
    if (targets.length === 0) {
      const otherName = source.provider === "wb" ? "Ozon" : "Wildberries";
      if (confirm(`У тебя не подключён ${otherName}. Подключить сейчас?`)) {
        router.push("/app/marketplaces/connect");
      }
      return;
    }
    let target = targets[0];
    if (targets.length > 1) {
      // Если несколько аккаунтов другого провайдера — спросим пальцем какой
      const list = targets.map((a, i) => `${i + 1}. ${a.name} (${PROVIDER_LABEL[a.provider].name})`).join("\n");
      const idx = prompt(`Куда переносим? Напиши номер:\n${list}`);
      const n = idx ? parseInt(idx, 10) - 1 : -1;
      if (n < 0 || n >= targets.length) return;
      target = targets[n];
    }
    const targetName = PROVIDER_LABEL[target.provider].name;
    if (!confirm(`Перенести эту карточку на ${targetName} с теми же фото? Категория подставится по синхронизации, новый артикул сгенерится автоматически.`)) return;

    setMigratingCard(cardId);
    try {
      const { data } = await api.post(
        `/marketplaces/${activeId}/cards/${cardId}/clone`,
        { target_account_id: target.id }   // photos НЕ передаём — бэк возьмёт из оригинала
      );
      const what = target.provider === "wb"
        ? `Артикул: ${data.vendor_code}`
        : `Offer ID: ${data.offer_id}` + (data.task_id ? ` (task ${data.task_id})` : "");
      alert(`✓ Карточка перенесена на ${targetName}.\n${what}\n\n${data.next_step || ""}`);
    } catch (err: any) {
      const msg = err.response?.data?.detail || err.message || "Ошибка";
      // Если нет синхронизации категорий — предложить завести
      if (msg.includes("Нет соответствия") || msg.includes("Заведи синхронизацию")) {
        if (confirm(`${msg}\n\nОткрыть страницу синхронизации сейчас?`)) {
          router.push("/app/marketplaces/mappings");
        }
      } else {
        alert(msg);
      }
    } finally { setMigratingCard(null); }
  };

  const removeAccount = async (accId: number) => {
    if (!confirm("Отключить магазин? Импортированные карточки будут удалены, но проекты в Aiviso останутся.")) return;
    try {
      await api.delete(`/marketplaces/${accId}`);
      setAccounts(prev => (prev || []).filter(a => a.id !== accId));
      if (activeId === accId) {
        setActiveId(null);
        setCards([]);
      }
    } catch (err: any) { alert(err.response?.data?.detail || "Ошибка"); }
  };

  const activeAccount = accounts?.find(a => a.id === activeId) || null;

  // Применяем фильтры
  const filtered = cards.filter(c => {
    if (search && !(c.name || "").toLowerCase().includes(search.toLowerCase())) return false;
    if (filterCat && c.category !== filterCat) return false;
    if (filterRenovated === "yes" && !c.project_id) return false;
    if (filterRenovated === "no" && c.project_id) return false;
    return true;
  });

  const categories = Array.from(new Set(cards.map(c => c.category).filter(Boolean))) as string[];

  // ─── Loading ───
  if (accounts === null) {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full" /></div>;
  }

  // ─── Empty state — приглашение в онбординг ───
  if (accounts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
          <button onClick={() => router.push("/app")} className="text-gray-400 hover:text-gray-700 text-sm">← Проекты</button>
          <h1 className="font-semibold">Маркетплейсы</h1>
        </header>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-semibold mb-3">Подключи свой первый магазин</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Импортируем карточки из WB, Ozon или Яндекс Маркета — потом ты сможешь реновировать
            фото через Aiviso и одной кнопкой опубликовать обратно. Никакого ручного экспорта-импорта.
          </p>
          <button onClick={() => router.push("/app/marketplaces/connect")}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-colors">
            Подключить магазин →
          </button>
        </div>
      </div>
    );
  }

  // ─── Полноценный ЛК с табами ───
  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      {/* Sub-header — заголовок раздела + действия второго уровня */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <h1 className="font-semibold text-base sm:text-lg">Магазины</h1>
        <button onClick={() => router.push("/app/marketplaces/mappings")}
          className="ml-auto text-xs sm:text-sm text-violet-600 hover:text-violet-800 font-medium">
          Синхронизация WB↔Ozon →
        </button>
      </div>

      {/* Табы магазинов */}
      <div className="bg-white border-b border-gray-100 px-3 sm:px-6 py-2 flex gap-1 overflow-x-auto">
        {accounts.map(a => {
          const meta = PROVIDER_LABEL[a.provider];
          const shortLabel = a.provider === "wb" ? "WB" : "Ozon";
          const isActive = activeId === a.id;
          return (
            <button
              key={a.id}
              onClick={() => setActiveId(a.id)}
              aria-current={isActive ? "page" : undefined}
              className={`py-2 px-3 sm:px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${
                isActive
                  ? "bg-violet-50 text-violet-700"
                  : "text-gray-500 [@media(hover:hover)]:hover:text-gray-900 [@media(hover:hover)]:hover:bg-gray-50"
              }`}
            >
              <span>{meta.emoji}</span>
              <span className="sm:hidden">{shortLabel}</span>
              <span className="hidden sm:inline">{a.name}</span>
              <span className="text-xs text-gray-400 hidden sm:inline">{meta.name}</span>
            </button>
          );
        })}
        <button
          onClick={() => router.push("/app/marketplaces/connect")}
          className="py-2 px-3 sm:px-4 rounded-lg text-sm font-medium text-violet-600 [@media(hover:hover)]:hover:bg-violet-50 whitespace-nowrap"
        >
          <span className="sm:hidden">+</span>
          <span className="hidden sm:inline">+ Магазин</span>
        </button>
      </div>

      {/* Контент активного таба */}
      {activeAccount && (
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Шапка магазина */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {PROVIDER_LABEL[activeAccount.provider].emoji} {activeAccount.name}
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {activeAccount.last_sync_at
                  ? `Синхронизация: ${new Date(activeAccount.last_sync_at).toLocaleString("ru")}`
                  : "Ещё не синхронизирован — нажми «Импорт карточек»"}
                {" · "}{cards.length} карточек
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={importCards}
                disabled={importing}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium disabled:opacity-50 flex items-center gap-2"
              >
                {importing ? <><div className="animate-spin w-3 h-3 border-2 border-white border-t-transparent rounded-full" /> Тянем...</> : "↻ Синхронизировать карточки"}
              </button>
              <button onClick={() => removeAccount(activeAccount.id)}
                className="px-3 py-2 text-gray-400 hover:text-red-600 text-sm">Отключить</button>
            </div>
          </div>

          {/* Фильтры */}
          {cards.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-5 flex flex-wrap items-center gap-3 text-sm">
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Поиск по названию..."
                className="input-field flex-1 min-w-48 text-sm"
              />
              {categories.length > 0 && (
                <select className="input-field text-sm" value={filterCat} onChange={e => setFilterCat(e.target.value)}>
                  <option value="">Все категории ({cards.length})</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat} ({cards.filter(c => c.category === cat).length})</option>
                  ))}
                </select>
              )}
              <select className="input-field text-sm" value={filterRenovated} onChange={e => setFilterRenovated(e.target.value as any)} title="Статус реновации">
                <option value="all">Статус: все</option>
                <option value="no">Не реновированы</option>
                <option value="yes">Реновированы</option>
              </select>
              {(search || filterCat || filterRenovated !== "all") && (
                <button onClick={() => { setSearch(""); setFilterCat(""); setFilterRenovated("all"); }}
                  className="text-xs text-gray-400 hover:text-gray-700">Сбросить</button>
              )}
              <span className="text-xs text-gray-400 ml-auto">Найдено: {filtered.length}</span>
            </div>
          )}

          {/* Сетка карточек */}
          {cardsLoading ? (
            <div className="flex justify-center py-12"><div className="animate-spin w-7 h-7 border-2 border-violet-600 border-t-transparent rounded-full" /></div>
          ) : cards.length === 0 ? (
            <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">
              <div className="text-5xl mb-4">📭</div>
              <p>Нет карточек — нажми «Синхронизировать карточки» сверху.</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">
              <p>Под фильтры ничего не попало</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map(c => (
                <div key={c.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-violet-200 hover:shadow-sm transition-all">
                  {c.photos && c.photos.length > 0 ? (
                    <img src={c.photos[0].replace('/images/big/', '/images/c516x688/')} alt={c.name || ""} loading="lazy" decoding="async" className="w-full aspect-[3/4] object-cover bg-gray-50" />
                  ) : (
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="6" width="18" height="14" rx="2"/>
                        <circle cx="12" cy="13" r="3"/>
                        <path d="M8 6 9.5 4h5L16 6"/>
                      </svg>
                      <span className="text-[10px]">Нет фото</span>
                    </div>
                  )}
                  <div className="p-3">
                    <h3 className="font-medium text-sm line-clamp-2 mb-1" title={c.name || ""}>{c.name || `Карточка #${c.mp_card_id}`}</h3>
                    <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                      {c.nm_id && <span className="text-[10px] text-gray-400">ID {c.nm_id}</span>}
                      <span className="text-[10px] text-gray-400">·</span>
                      <span className="text-[10px] text-gray-400">{c.photos?.length ?? 0} фото</span>
                      {c.project_id && <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">✓ реновирована</span>}
                    </div>
                    <div className="space-y-1.5">
                      {c.project_id ? (
                        <button onClick={() => router.push(`/app/projects/${c.project_id}`)}
                          className="w-full py-1.5 border-2 border-violet-300 text-violet-700 hover:bg-violet-50 rounded-lg text-xs font-medium">
                          → Открыть проект
                        </button>
                      ) : (
                        <button
                          onClick={() => createProject(c.id)}
                          disabled={creatingProject === c.id}
                          className="w-full py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-medium disabled:opacity-50 flex items-center justify-center gap-1"
                        >
                          {creatingProject === c.id ? <><div className="animate-spin w-3 h-3 border-2 border-white border-t-transparent rounded-full" /> Создаём...</> : "✨ Реновировать"}
                        </button>
                      )}
                      {/* Перенос «как есть» на другой маркетплейс — без AI-генерации */}
                      {activeAccount && (
                        <button
                          onClick={() => migrateAsIs(c.id)}
                          disabled={migratingCard === c.id}
                          className="w-full py-1.5 border border-blue-200 text-blue-700 hover:bg-blue-50 rounded-lg text-[11px] font-medium disabled:opacity-50 flex items-center justify-center gap-1"
                          title="Скопировать карточку на другой маркетплейс с теми же фото"
                        >
                          {migratingCard === c.id ? (
                            <><div className="animate-spin w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full" /> Переносим...</>
                          ) : (
                            <>↗ Перенести на {activeAccount.provider === "wb" ? "Ozon" : "WB"}</>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
