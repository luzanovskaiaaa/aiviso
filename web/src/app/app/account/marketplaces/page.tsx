"use client";
/**
 * Подключённые магазины — объединённая страница ЛК.
 *
 * Две секции в pill-табах (одинаковый стиль с верхним AppNav):
 *   1. API-ключи: список аккаунтов WB / Ozon с возможностью проверить, заменить ключ, удалить.
 *      Отдельная кнопка "+ Подключить новый" ведёт в мастер /app/marketplaces/connect.
 *   2. Маппинг WB ↔ Ozon: количество настроенных соответствий + переход в редактор.
 */
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
  status: string;
  last_sync_at: string | null;
  created_at: string;
}

interface MappingRow {
  id: number;
  wb_subject_name: string;
  ozon_category_name: string;
}

const PROVIDER_LABEL: Record<Provider, { name: string; emoji: string }> = {
  wb:   { name: "Wildberries",   emoji: "🟣" },
  ozon: { name: "Ozon",          emoji: "🔵" },
  ym:   { name: "Яндекс Маркет", emoji: "🟡" },
};

type Tab = "keys" | "mappings";

export default function AccountMarketplacesPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("keys");
  const [accounts, setAccounts] = useState<Account[] | null>(null);
  const [mappings, setMappings] = useState<MappingRow[] | null>(null);

  // ── Inline-редактор ключа: id аккаунта, поля
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editApiKey, setEditApiKey] = useState("");
  const [editClientId, setEditClientId] = useState("");
  const [editStatus, setEditStatus] = useState<"idle" | "saving" | "checking" | "error" | "saved">("idle");
  const [editError, setEditError] = useState<string | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      const [a, m] = await Promise.all([
        api.get<Account[]>("/marketplaces"),
        api.get<MappingRow[]>("/marketplaces/category-mappings").catch(() => ({ data: [] as MappingRow[] })),
      ]);
      setAccounts(a.data);
      setMappings(m.data);
    } catch { router.push("/auth"); }
  };

  const startEdit = (a: Account) => {
    setEditingId(a.id);
    setEditApiKey("");
    setEditClientId("");
    setEditStatus("idle");
    setEditError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditApiKey("");
    setEditClientId("");
    setEditStatus("idle");
    setEditError(null);
  };

  const saveKey = async (a: Account) => {
    if (!editApiKey.trim()) { setEditError("Введи новый ключ"); return; }
    setEditStatus("saving");
    setEditError(null);
    try {
      const body: any = { api_key: editApiKey.trim() };
      if (a.provider === "ozon" && editClientId.trim()) body.client_id = editClientId.trim();
      const { data } = await api.patch<Account>(`/marketplaces/${a.id}`, body);
      setAccounts(prev => (prev || []).map(x => x.id === a.id ? data : x));
      setEditStatus("saved");
      setTimeout(() => { cancelEdit(); }, 1200);
    } catch (err: any) {
      setEditStatus("error");
      setEditError(err.response?.data?.detail || "Ошибка сохранения");
    }
  };

  const checkAccount = async (a: Account) => {
    try {
      await api.post(`/marketplaces/${a.id}/check`);
      setAccounts(prev => (prev || []).map(x => x.id === a.id ? { ...x, status: "active" } : x));
      alert(`✓ ${PROVIDER_LABEL[a.provider].name}: токен валиден`);
    } catch (err: any) {
      alert(err.response?.data?.detail || "Токен не валиден");
    }
  };

  const removeAccount = async (a: Account) => {
    if (!confirm(`Отключить ${PROVIDER_LABEL[a.provider].name} «${a.name}»? Импортированные карточки будут удалены, проекты в Aiviso останутся.`)) return;
    try {
      await api.delete(`/marketplaces/${a.id}`);
      setAccounts(prev => (prev || []).filter(x => x.id !== a.id));
    } catch (err: any) { alert(err.response?.data?.detail || "Ошибка"); }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/account")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← ЛК</button>
        <h1 className="font-semibold text-sm sm:text-base">Подключённые магазины</h1>
      </div>

      {/* Табы — pill-стиль (тот же что в AppNav) */}
      <div className="bg-white border-b border-gray-100 px-3 sm:px-6 py-2 flex gap-1 overflow-x-auto">
        {([
          { id: "keys" as Tab,     label: "API-ключи и магазины" },
          { id: "mappings" as Tab, label: "Маппинг WB ↔ Ozon" },
        ]).map(t => {
          const isActive = tab === t.id;
          return (
            <button key={t.id}
              onClick={() => setTab(t.id)}
              aria-current={isActive ? "page" : undefined}
              className={`py-2 px-3 sm:px-4 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-violet-50 text-violet-700"
                  : "text-gray-500 [@media(hover:hover)]:hover:text-gray-900 [@media(hover:hover)]:hover:bg-gray-50"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
        {tab === "keys" && (
          <>
            {accounts === null ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="animate-pulse h-4 w-32 bg-gray-200 rounded mb-3" />
                <div className="animate-pulse h-4 w-48 bg-gray-200 rounded" />
              </div>
            ) : accounts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                <div className="text-5xl mb-3">🛒</div>
                <h2 className="text-lg font-semibold mb-2">Пока ни одного магазина</h2>
                <p className="text-sm text-gray-500 mb-5 max-w-md mx-auto">Подключи WB или Ozon — импортируем карточки и сможем публиковать обновлённые фото.</p>
                <button onClick={() => router.push("/app/marketplaces/connect")}
                  className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium">
                  Подключить магазин →
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {accounts.map(a => {
                    const meta = PROVIDER_LABEL[a.provider];
                    const isEditing = editingId === a.id;
                    return (
                      <div key={a.id} className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">
                        <div className="flex items-start gap-3 flex-wrap">
                          <div className="text-2xl shrink-0">{meta.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-sm">{a.name}</span>
                              <span className="text-xs text-gray-400">{meta.name}</span>
                              <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                a.status === "active" ? "text-green-700 bg-green-50" : "text-amber-700 bg-amber-50"
                              }`}>{a.status === "active" ? "активен" : a.status}</span>
                            </div>
                            <div className="text-[11px] text-gray-400 mt-0.5">
                              {a.last_sync_at
                                ? `Последняя синхронизация: ${new Date(a.last_sync_at).toLocaleString("ru")}`
                                : "Ещё не синхронизирован"}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <button onClick={() => checkAccount(a)}
                              className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 hover:bg-gray-50">
                              Проверить
                            </button>
                            <button onClick={() => isEditing ? cancelEdit() : startEdit(a)}
                              className="px-3 py-1.5 text-xs rounded-lg border border-violet-200 text-violet-700 hover:bg-violet-50">
                              {isEditing ? "Отмена" : "Заменить ключ"}
                            </button>
                            <button onClick={() => removeAccount(a)}
                              className="px-3 py-1.5 text-xs rounded-lg text-red-600 hover:bg-red-50">
                              Отключить
                            </button>
                          </div>
                        </div>

                        {isEditing && (
                          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                            {a.provider === "ozon" && (
                              <div>
                                <label className="block text-xs text-gray-500 mb-1.5">Client-Id <span className="text-gray-300">(оставь пустым — не менять)</span></label>
                                <input
                                  type="text"
                                  className="input-field text-sm w-full font-mono"
                                  value={editClientId}
                                  onChange={e => setEditClientId(e.target.value)}
                                  placeholder="1111111"
                                />
                              </div>
                            )}
                            <div>
                              <label className="block text-xs text-gray-500 mb-1.5">
                                Новый {a.provider === "wb" ? "JWT-токен" : "Api-Key"}
                              </label>
                              <textarea
                                rows={3}
                                className="input-field text-xs w-full font-mono"
                                value={editApiKey}
                                onChange={e => setEditApiKey(e.target.value)}
                                placeholder={a.provider === "wb" ? "eyJhbGci..." : "abcd1234-ef56-7890-..."}
                              />
                            </div>
                            {editError && <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-2">{editError}</p>}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => saveKey(a)}
                                disabled={editStatus === "saving" || !editApiKey.trim()}
                                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl text-sm font-medium"
                              >
                                {editStatus === "saving" ? "Проверяем и сохраняем…" : "Сохранить"}
                              </button>
                              {editStatus === "saved" && <span className="text-xs text-green-600">Сохранено ✓</span>}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center pt-2">
                  <button onClick={() => router.push("/app/marketplaces/connect")}
                    className="px-5 py-2.5 border-2 border-violet-200 text-violet-700 hover:bg-violet-50 rounded-xl text-sm font-medium">
                    + Подключить ещё магазин
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {tab === "mappings" && (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
            <h2 className="font-semibold text-base mb-2">Сопоставление категорий WB ↔ Ozon</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Здесь хранится таблица соответствий: какая категория Ozon = какая категория WB.
              Используется при переносе карточки «как есть» с одного маркетплейса на другой —
              чтобы товар автоматически попал в правильный раздел.
            </p>
            {mappings && mappings.length > 0 ? (
              <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 mb-4 text-sm">
                <span className="font-medium text-violet-900">Настроено: {mappings.length} соответствий</span>
                <ul className="mt-2 text-violet-800 text-xs space-y-1 max-h-40 overflow-auto">
                  {mappings.slice(0, 8).map(m => (
                    <li key={m.id}>· {m.wb_subject_name} ↔ {m.ozon_category_name}</li>
                  ))}
                  {mappings.length > 8 && <li className="text-violet-600">…и ещё {mappings.length - 8}</li>}
                </ul>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4 text-sm text-amber-900">
                Пока нет ни одного маппинга. Без него перенос «как есть» не сработает.
              </div>
            )}
            <button
              onClick={() => router.push("/app/marketplaces/mappings")}
              className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium"
            >
              Открыть редактор сопоставлений →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
