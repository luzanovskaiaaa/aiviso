"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

interface MpAccount { id: number; provider: "wb" | "ozon"; name: string }
interface UsedWb { subject_id: number; name: string; count: number }
interface UsedOzon { category_id: number; type_id: number; category_name: string; type_name: string; count: number }
interface WbParent { id: number; name: string }
interface WbSubject { subject_id: number; name: string; parent_id?: number | null }
interface OzonLeaf { type_id: number; type_name: string; category_id: number; category_name: string }
interface Mapping {
  id: number;
  wb_subject_id: number; wb_subject_name: string;
  ozon_category_id: number; ozon_category_name: string;
  ozon_type_id: number; ozon_type_name: string;
  note?: string | null;
}

export default function MappingsPage() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<MpAccount[]>([]);
  const [mappings, setMappings] = useState<Mapping[]>([]);
  const [loading, setLoading] = useState(true);

  // Add-mapping form state
  const [addOpen, setAddOpen] = useState(false);
  const [wbAccountId, setWbAccountId] = useState<number | null>(null);
  const [ozonAccountId, setOzonAccountId] = useState<number | null>(null);

  // Used categories — то что ДЕЙСТВИТЕЛЬНО есть в твоих карточках, показываем сверху
  const [usedWb, setUsedWb] = useState<UsedWb[]>([]);
  const [usedOzon, setUsedOzon] = useState<UsedOzon[]>([]);

  // Полные каталоги — fallback если нужной категории нет среди использованных
  const [showAllWb, setShowAllWb] = useState(false);
  const [showAllOzon, setShowAllOzon] = useState(false);
  const [wbParents, setWbParents] = useState<WbParent[]>([]);
  const [wbParent, setWbParent] = useState<number | null>(null);
  const [wbSubjects, setWbSubjects] = useState<WbSubject[]>([]);
  const [ozonLeaves, setOzonLeaves] = useState<OzonLeaf[]>([]);
  const [ozonSearch, setOzonSearch] = useState("");

  // Selected
  const [wbSubject, setWbSubject] = useState<WbSubject | null>(null);
  const [ozonPick, setOzonPick] = useState<OzonLeaf | null>(null);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      const [accRes, mapRes] = await Promise.all([
        api.get<MpAccount[]>("/marketplaces"),
        api.get<Mapping[]>("/marketplaces/category-mappings"),
      ]);
      setAccounts(accRes.data);
      setMappings(mapRes.data);
      const wb = accRes.data.find(a => a.provider === "wb");
      const oz = accRes.data.find(a => a.provider === "ozon");
      if (wb) setWbAccountId(wb.id);
      if (oz) setOzonAccountId(oz.id);
    } finally { setLoading(false); }
  };

  // Грузим used-categories для каждого подключённого аккаунта
  useEffect(() => {
    if (!addOpen) return;
    if (wbAccountId) {
      api.get<UsedWb[]>(`/marketplaces/${wbAccountId}/categories/used`)
        .then(r => setUsedWb(r.data)).catch(() => setUsedWb([]));
    }
    if (ozonAccountId) {
      api.get<UsedOzon[]>(`/marketplaces/${ozonAccountId}/categories/used`)
        .then(r => setUsedOzon(r.data)).catch(() => setUsedOzon([]));
    }
  }, [addOpen, wbAccountId, ozonAccountId]);

  // Полный список WB parents — только когда юзер раскрыл «все категории»
  useEffect(() => {
    if (!showAllWb || !wbAccountId || wbParents.length > 0) return;
    api.get<WbParent[]>(`/marketplaces/${wbAccountId}/categories/wb-parents`)
      .then(r => setWbParents(r.data)).catch(() => setWbParents([]));
  }, [showAllWb, wbAccountId]);

  useEffect(() => {
    if (!wbAccountId || wbParent === null) { setWbSubjects([]); return; }
    api.get<WbSubject[]>(`/marketplaces/${wbAccountId}/categories/wb-subjects?parent_id=${wbParent}`)
      .then(r => setWbSubjects(r.data)).catch(() => setWbSubjects([]));
  }, [wbAccountId, wbParent]);

  useEffect(() => {
    if (!showAllOzon || !ozonAccountId || ozonLeaves.length > 0) return;
    api.get<OzonLeaf[]>(`/marketplaces/${ozonAccountId}/categories/ozon-tree-flat`)
      .then(r => setOzonLeaves(r.data)).catch(() => setOzonLeaves([]));
  }, [showAllOzon, ozonAccountId]);

  const ozonFiltered = useMemo(() => {
    const q = ozonSearch.trim().toLowerCase();
    if (!q) return ozonLeaves.slice(0, 50);
    return ozonLeaves.filter(l =>
      (l.type_name || "").toLowerCase().includes(q) ||
      (l.category_name || "").toLowerCase().includes(q)
    ).slice(0, 50);
  }, [ozonLeaves, ozonSearch]);

  const save = async () => {
    if (!wbSubject || !ozonPick) { alert("Выбери WB-категорию и Ozon-категорию"); return; }
    setSaving(true);
    try {
      await api.post("/marketplaces/category-mappings", {
        wb_subject_id:      wbSubject.subject_id,
        wb_subject_name:    wbSubject.name,
        ozon_category_id:   ozonPick.category_id,
        ozon_category_name: ozonPick.category_name,
        ozon_type_id:       ozonPick.type_id,
        ozon_type_name:     ozonPick.type_name,
        note:               note || null,
      });
      // reset form
      setAddOpen(false);
      setWbSubject(null); setOzonPick(null); setNote("");
      setWbParent(null); setOzonSearch("");
      setShowAllWb(false); setShowAllOzon(false);
      await load();
    } catch (err: any) {
      alert(err.response?.data?.detail || "Ошибка");
    } finally { setSaving(false); }
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить этот маппинг?")) return;
    try {
      await api.delete(`/marketplaces/category-mappings/${id}`);
      await load();
    } catch (err: any) {
      alert(err.response?.data?.detail || "Ошибка");
    }
  };

  const closeForm = () => {
    setAddOpen(false);
    setWbSubject(null); setOzonPick(null); setNote("");
    setWbParent(null); setOzonSearch("");
    setShowAllWb(false); setShowAllOzon(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full" /></div>;

  const hasWB = accounts.some(a => a.provider === "wb");
  const hasOzon = accounts.some(a => a.provider === "ozon");

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-3 sm:px-6 py-3 flex items-center gap-3">
        <button onClick={() => router.push("/app/marketplaces")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800">← Магазины</button>
        <h1 className="font-semibold text-sm sm:text-base">Синхронизация WB ↔ Ozon</h1>
      </div>

      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6">
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Чтобы перенести карточку с одного маркетплейса на другой, нужно знать соответствие категорий
          (например, WB «Столы журнальные» → Ozon «Дом и сад / Столы»). Заведи их один раз —
          дальше при переносе карточки система сама подставит нужную категорию.
        </p>

        {!hasWB || !hasOzon ? (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800 mb-6">
            ⚠️ Для маппинга нужны оба аккаунта: WB и Ozon.{" "}
            {!hasWB && "WB не подключён. "}
            {!hasOzon && "Ozon не подключён. "}
            <button onClick={() => router.push("/app/marketplaces/connect")} className="underline font-medium">
              Подключить →
            </button>
          </div>
        ) : (
          <>
            {/* Список существующих маппингов */}
            {mappings.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center text-gray-400 mb-4">
                <p className="mb-3">Пока маппингов нет</p>
                {!addOpen && (
                  <button onClick={() => setAddOpen(true)}
                    className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium">
                    + Добавить первый
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="space-y-2 mb-4">
                  {mappings.map(m => (
                    <div key={m.id} className="bg-white border border-gray-100 rounded-2xl p-3 sm:p-4 flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-sm flex-wrap">
                          <span className="font-medium text-violet-700">WB</span>
                          <span className="text-gray-700">{m.wb_subject_name}</span>
                          <span className="text-gray-300">↔</span>
                          <span className="font-medium text-blue-700">Ozon</span>
                          <span className="text-gray-700">{m.ozon_category_name}</span>
                          <span className="text-gray-400 text-xs">/ {m.ozon_type_name}</span>
                        </div>
                        {m.note && <p className="text-xs text-gray-500 mt-1">{m.note}</p>}
                      </div>
                      <button onClick={() => remove(m.id)}
                        className="text-xs text-gray-400 hover:text-red-600 shrink-0">Удалить</button>
                    </div>
                  ))}
                </div>
                {!addOpen && (
                  <button onClick={() => setAddOpen(true)}
                    className="px-4 py-2 border-2 border-violet-300 text-violet-700 hover:bg-violet-50 rounded-xl text-sm font-medium">
                    + Добавить маппинг
                  </button>
                )}

                {/* Что дальше — два сценария переноса карточек */}
                {!addOpen && (
                  <section className="mt-10 pt-6 border-t border-gray-200">
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-600">Соответствия настроены</span>
                      <span className="text-[10px] text-gray-400">— переносить карточки можно двумя способами</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1.5">Что дальше?</h3>
                    <p className="text-sm text-gray-600 mb-5 max-w-2xl leading-relaxed">
                      Выбирай сценарий по ситуации — обновлять фото через AI или просто копировать карточку с оригинала.
                    </p>

                    <div className="grid sm:grid-cols-5 gap-3 sm:gap-4">
                      {/* PRIMARY — реновация через AI (3/5) */}
                      <article className="sm:col-span-3 bg-white border border-violet-200 rounded-2xl p-5 hover:border-violet-400 transition-colors">
                        <header className="flex items-baseline gap-2 mb-1.5">
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-violet-600">С новым AI-фото</span>
                          <span className="text-[10px] text-violet-600/60">основной сценарий</span>
                        </header>
                        <h4 className="font-semibold text-base mb-1">Реновировать карточку</h4>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                          Старые фото → новые сцены и лайфстайл в стиле маркетплейса.
                        </p>
                        <ol className="text-xs text-gray-700 space-y-1.5 mb-5 ml-4 list-decimal">
                          <li>Открой проект и сгенерируй фото</li>
                          <li>На результате нажми <b>«↑ В WB»</b> или <b>«↑ В OZON»</b></li>
                          <li>В блоке публикации выбери в селекторе <b>«Куда публиковать»</b> другой маркетплейс</li>
                        </ol>
                        <button onClick={() => router.push("/app")}
                          className="px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-all active:scale-[0.98]">
                          Перейти к проектам →
                        </button>
                      </article>

                      {/* SECONDARY — перенос «как есть» (2/5) */}
                      <article className="sm:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:bg-white hover:border-gray-300 transition-colors">
                        <header className="mb-1.5">
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">Без AI</span>
                        </header>
                        <h4 className="font-semibold text-base mb-1">Перенести как есть</h4>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                          Фото устраивают — просто копируем карточку с оригинала.
                        </p>
                        <ol className="text-xs text-gray-700 space-y-1.5 mb-5 ml-4 list-decimal">
                          <li>Открой <b>«Мои магазины»</b> и выбери аккаунт-источник</li>
                          <li>На карточке нажми <b>«↗ Перенести на Ozon/WB»</b></li>
                        </ol>
                        <button onClick={() => router.push("/app/marketplaces")}
                          className="px-4 py-2.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded-xl text-sm font-medium transition-all active:scale-[0.98]">
                          К моим карточкам
                        </button>
                      </article>
                    </div>

                    <p className="text-[11px] text-gray-500 mt-4">
                      В обоих сценариях категория и размеры (см↔мм, кг↔г) подставятся по этой таблице автоматически.
                    </p>
                  </section>
                )}
              </>
            )}

            {/* Форма добавления */}
            {addOpen && (
              <div className="mt-4 bg-white border border-violet-200 rounded-2xl p-4 sm:p-5 space-y-5">
                <h3 className="font-semibold">Новый маппинг</h3>

                {/* WB ─────────────────────────────────────────────────────── */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2">1. Категория WB</label>

                  {/* Used WB — приоритетный список */}
                  {usedWb.length > 0 && (
                    <div className="mb-2">
                      <p className="text-[11px] text-gray-400 mb-1.5">Используются в твоих карточках:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {usedWb.map(u => {
                          const active = wbSubject?.subject_id === u.subject_id;
                          return (
                            <button key={u.subject_id}
                              onClick={() => setWbSubject({ subject_id: u.subject_id, name: u.name })}
                              className={`text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                                active ? "bg-violet-600 border-violet-600 text-white"
                                       : "bg-white border-violet-200 text-violet-700 hover:bg-violet-50"
                              }`}>
                              {u.name} <span className="opacity-60">×{u.count}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Toggle на полный каталог */}
                  {!showAllWb ? (
                    <button onClick={() => setShowAllWb(true)}
                      className="text-[11px] text-gray-500 hover:text-violet-700 underline">
                      {usedWb.length > 0 ? "Нужна другая категория? Выбрать из полного каталога WB →"
                                         : "Открыть полный каталог WB →"}
                    </button>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <select className="input-field text-sm" value={wbParent ?? ""} onChange={e => setWbParent(e.target.value ? parseInt(e.target.value, 10) : null)}>
                        <option value="">— Раздел WB —</option>
                        {wbParents.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                      </select>
                      <select className="input-field text-sm" value={wbSubject?.subject_id ?? ""} disabled={wbSubjects.length === 0}
                        onChange={e => {
                          const id = parseInt(e.target.value, 10);
                          setWbSubject(wbSubjects.find(s => s.subject_id === id) || null);
                        }}>
                        <option value="">{wbSubjects.length ? "— Категория —" : "— Сначала выбери раздел —"}</option>
                        {wbSubjects.map(s => <option key={s.subject_id} value={s.subject_id}>{s.name}</option>)}
                      </select>
                    </div>
                  )}

                  {wbSubject && (
                    <p className="text-xs text-violet-700 mt-1.5 font-medium">
                      ✓ Выбрано: {wbSubject.name} <span className="text-gray-400 font-normal">(id {wbSubject.subject_id})</span>
                    </p>
                  )}
                </div>

                {/* Ozon ────────────────────────────────────────────────────── */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2">2. Категория Ozon</label>

                  {/* Used Ozon */}
                  {usedOzon.length > 0 && (
                    <div className="mb-2">
                      <p className="text-[11px] text-gray-400 mb-1.5">Используются в твоих карточках:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {usedOzon.map(u => {
                          const active = ozonPick?.category_id === u.category_id && ozonPick?.type_id === u.type_id;
                          return (
                            <button key={`${u.category_id}-${u.type_id}`}
                              onClick={() => setOzonPick({
                                category_id: u.category_id, type_id: u.type_id,
                                category_name: u.category_name, type_name: u.type_name,
                              })}
                              className={`text-left text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                                active ? "bg-blue-600 border-blue-600 text-white"
                                       : "bg-white border-blue-200 text-blue-700 hover:bg-blue-50"
                              }`}>
                              <div>{u.type_name || u.category_name} <span className="opacity-60">×{u.count}</span></div>
                              {u.category_name && u.category_name !== u.type_name && (
                                <div className={`text-[10px] ${active ? "opacity-80" : "opacity-60"}`}>{u.category_name}</div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {!showAllOzon ? (
                    <button onClick={() => setShowAllOzon(true)}
                      className="text-[11px] text-gray-500 hover:text-blue-700 underline">
                      {usedOzon.length > 0 ? "Нужна другая категория? Открыть полный каталог Ozon →"
                                           : "Открыть полный каталог Ozon →"}
                    </button>
                  ) : (
                    <>
                      <input type="search" className="input-field text-sm mb-2"
                        placeholder="Поиск (например «стол» или «доска»)"
                        value={ozonSearch} onChange={e => setOzonSearch(e.target.value)} />
                      <div className="max-h-64 overflow-y-auto border border-gray-100 rounded-lg divide-y">
                        {ozonFiltered.map(l => (
                          <button key={`${l.category_id}-${l.type_id}`}
                            onClick={() => setOzonPick(l)}
                            className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition-colors ${ozonPick?.type_id === l.type_id && ozonPick?.category_id === l.category_id ? "bg-blue-100" : ""}`}>
                            <div className="font-medium text-gray-800">{l.type_name}</div>
                            <div className="text-xs text-gray-400">{l.category_name}</div>
                          </button>
                        ))}
                        {ozonFiltered.length === 0 && (
                          <div className="px-3 py-4 text-center text-xs text-gray-400">
                            {ozonLeaves.length === 0 ? "Загружаем дерево Ozon…" : "Ничего не найдено"}
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {ozonPick && (
                    <p className="text-xs text-blue-700 mt-1.5 font-medium">
                      ✓ Выбрано: {ozonPick.type_name} <span className="text-gray-400 font-normal">/ {ozonPick.category_name}</span>
                    </p>
                  )}
                </div>

                {/* Заметка */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">3. Заметка (опционально)</label>
                  <input className="input-field text-sm" placeholder="Например: «для столиков из дерева»"
                    value={note} onChange={e => setNote(e.target.value)} maxLength={200} />
                </div>

                <div className="flex gap-2">
                  <button onClick={closeForm} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Отмена</button>
                  <button onClick={save} disabled={saving || !wbSubject || !ozonPick}
                    className="flex-1 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2">
                    {saving ? <><div className="animate-spin w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" /> Сохраняем…</> : "Сохранить маппинг"}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
