"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { api } from "@/lib/api";
import AppNav from "@/components/layout/AppNav";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aiviso.ru";

interface MpLink {
  account_id: number;
  card_id: number;
  provider: "wb" | "ozon" | "ym";
}
interface CardDetail {
  id: number;
  mp_card_id: string;
  nm_id: number | null;
  name: string | null;
  photos: string[];
}
interface Generation {
  id: number;
  scenario: string;
  status: string;
  result_paths: string[] | null;
}

const PROV: Record<string, string> = { wb: "Wildberries", ozon: "Ozon", ym: "Яндекс Маркет" };

export default function PublishPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const search = useSearchParams();
  const genId = parseInt(search.get("gen") || "0", 10);

  const [link, setLink] = useState<MpLink | null>(null);
  const [card, setCard] = useState<CardDetail | null>(null);
  const [generation, setGeneration] = useState<Generation | null>(null);
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);

  // Что юзер выбрал. mode = "replace" → заменить позицию replaceIdx; "insert" → вставить в начало; "append" → в конец
  const [mode, setMode] = useState<"replace" | "insert" | "append">("replace");
  const [replaceIdx, setReplaceIdx] = useState<number>(0);

  // Клонирование — создание НОВОЙ карточки с этими фото под другим артикулом
  const [cloneOpen, setCloneOpen] = useState(false);
  const [cloneCode, setCloneCode] = useState("");
  const [cloneTitle, setCloneTitle] = useState("");
  const [cloning, setCloning] = useState(false);
  const [allAccounts, setAllAccounts] = useState<{ id: number; provider: "wb" | "ozon" | "ym"; name: string }[]>([]);
  const [cloneTargetId, setCloneTargetId] = useState<number | null>(null);  // null = тот же провайдер

  useEffect(() => {
    const t = localStorage.getItem("access_token");
    if (!t) { router.push("/auth"); return; }
    load();
  }, [id, genId]);

  const load = async () => {
    setLoading(true);
    try {
      const [lr, gr, ar] = await Promise.all([
        api.get<MpLink | null>(`/marketplaces/by-project/${id}`).catch(() => ({ data: null })),
        api.get<Generation[]>(`/projects/${id}/generations`),
        api.get<{ id: number; provider: "wb" | "ozon" | "ym"; name: string }[]>("/marketplaces").catch(() => ({ data: [] })),
      ]);
      const l = lr.data;
      setAllAccounts(ar.data || []);
      if (!l) { setLoading(false); return; }
      setLink(l);
      const cardRes = await api.get<CardDetail>(`/marketplaces/${l.account_id}/cards/${l.card_id}`);
      setCard(cardRes.data);
      const gen = (gr.data || []).find(g => g.id === genId);
      if (gen) setGeneration(gen);
    } finally { setLoading(false); }
  };

  const newPhotoUrl = generation && generation.result_paths && generation.result_paths.length > 0
    ? mediaUrl(generation.result_paths[0]) : "";

  // Собираем итоговый список URL для отправки
  const buildFinalPhotos = (): string[] => {
    if (!card || !newPhotoUrl) return [];
    const current = card.photos.slice();
    if (mode === "append") return [...current, newPhotoUrl];
    if (mode === "insert") return [newPhotoUrl, ...current];
    // replace
    const idx = Math.max(0, Math.min(replaceIdx, current.length - 1));
    const out = current.slice();
    out[idx] = newPhotoUrl;
    return out;
  };

  const finalPhotos = buildFinalPhotos();

  const cloneCard = async () => {
    if (!link || !card) return;
    const provName = PROV[link.provider];
    setCloning(true);
    try {
      const photos = finalPhotos.length > 0 ? finalPhotos : (newPhotoUrl ? [newPhotoUrl] : []);
      if (photos.length === 0) { alert("Нет фото для клонирования"); return; }
      const body: any = { photos };
      // target_account_id: null/совпадает со source — same-MP; иначе cross-MP миграция (нужен маппинг категории)
      if (cloneTargetId && cloneTargetId !== link.account_id) {
        body.target_account_id = cloneTargetId;
      }
      // vendor_code/offer_id зависит от target-провайдера, а не source
      const target = cloneTargetId ? allAccounts.find(a => a.id === cloneTargetId) : null;
      const targetProvider = (target?.provider || link.provider);
      if (targetProvider === "wb" && cloneCode.trim()) body.new_vendor_code = cloneCode.trim();
      if (targetProvider === "ozon" && cloneCode.trim()) body.new_offer_id = cloneCode.trim();
      if (cloneTitle.trim()) body.new_title = cloneTitle.trim();

      const { data } = await api.post(
        `/marketplaces/${link.account_id}/cards/${link.card_id}/clone`,
        body
      );
      const targetProvName = PROV[(data.provider as keyof typeof PROV) || link.provider];
      const what = data.provider === "wb"
        ? `Артикул: ${data.vendor_code}`
        : `Offer ID: ${data.offer_id}` + (data.task_id ? ` (task ${data.task_id})` : "");
      alert(`✓ Карточка отправлена в ${targetProvName}.\n${what}\n\n${data.next_step || ""}`);
      setCloneOpen(false);
      router.push(`/app/projects/${id}`);
    } catch (err: any) {
      console.error("clone error:", err.response?.data || err.message);
      alert(err.response?.data?.detail || err.message || "Ошибка клонирования");
    } finally { setCloning(false); }
  };

  const apply = async () => {
    if (!link || !card || !newPhotoUrl) return;
    const provName = PROV[link.provider];
    const action = mode === "append" ? `добавлено в конец галереи (${finalPhotos.length}-м)` :
                   mode === "insert" ? "поставлено главным фото (1-м)" :
                   `заменит фото №${replaceIdx + 1}`;
    if (!confirm(`Опубликовать в ${provName}: новое фото ${action}. Подтвердить?`)) return;

    setPublishing(true);
    try {
      const { data } = await api.post(
        `/marketplaces/${link.account_id}/cards/${link.card_id}/publish-photos`,
        { photos: finalPhotos }
      );
      alert(`✓ Опубликовано в ${provName}. Фото в галерее: ${data.published}`);
      router.push(`/app/projects/${id}`);
    } catch (err: any) {
      console.error("publish error:", err.response?.data || err.message);
      alert(err.response?.data?.detail || err.message || "Ошибка публикации");
    } finally { setPublishing(false); }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full" /></div>;
  if (!link) return <div className="p-12 text-center text-gray-500">Этот проект не привязан к карточке маркетплейса.</div>;
  if (!card) return <div className="p-12 text-center text-gray-500">Карточка не найдена.</div>;
  if (!generation) return <div className="p-12 text-center text-gray-500">Генерация #{genId} не найдена.</div>;
  if (!newPhotoUrl) return <div className="p-12 text-center text-gray-500">У генерации нет готового PNG.</div>;

  const provName = PROV[link.provider];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNav />
      <div className="bg-white border-b border-gray-100 px-3 sm:px-6 py-2.5 flex items-center gap-2 sm:gap-3">
        <button onClick={() => router.push(`/app/projects/${id}`)} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800 shrink-0 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <span className="hidden sm:inline">Назад в проект</span>
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-sm font-medium truncate">Публикация в {provName}</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-2 text-sm text-gray-500">Карточка:</div>
        <h2 className="text-lg font-semibold mb-6">{card.name || `#${card.mp_card_id}`}</h2>

        {/* Новое фото */}
        <div className="mb-8">
          <h3 className="font-medium mb-3 text-sm">✨ Твоё новое фото</h3>
          <img src={newPhotoUrl} alt="новое" className="rounded-2xl w-full max-w-xs border-2 border-violet-300 shadow-sm" />
        </div>

        {/* Опции куда поставить */}
        <div className="mb-8">
          <h3 className="font-medium mb-3 text-sm">Куда поставить?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <button
              onClick={() => setMode("insert")}
              className={`p-4 rounded-xl border-2 text-left transition-all ${mode === "insert" ? "border-violet-500 bg-violet-50" : "border-gray-100 hover:border-violet-200 bg-white"}`}
            >
              <div className="font-medium text-sm mb-1">⇧ Сделать главным</div>
              <div className="text-xs text-gray-500">Новое станет первым в галерее, остальные сдвинутся</div>
            </button>
            <button
              onClick={() => setMode("replace")}
              className={`p-4 rounded-xl border-2 text-left transition-all ${mode === "replace" ? "border-violet-500 bg-violet-50" : "border-gray-100 hover:border-violet-200 bg-white"}`}
            >
              <div className="font-medium text-sm mb-1">⇄ Заменить одно фото</div>
              <div className="text-xs text-gray-500">Выбери ниже какое из текущих заменить</div>
            </button>
            <button
              onClick={() => setMode("append")}
              className={`p-4 rounded-xl border-2 text-left transition-all ${mode === "append" ? "border-violet-500 bg-violet-50" : "border-gray-100 hover:border-violet-200 bg-white"}`}
            >
              <div className="font-medium text-sm mb-1">+ Добавить в конец</div>
              <div className="text-xs text-gray-500">Новое станет последним, остальные не тронуты</div>
            </button>
          </div>
        </div>

        {/* Текущая галерея */}
        <div className="mb-8">
          <h3 className="font-medium mb-3 text-sm">Текущие фото в {provName} ({card.photos.length})</h3>
          {card.photos.length === 0 ? (
            <p className="text-sm text-gray-400">В карточке пока нет фото — твоё новое станет первым.</p>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {card.photos.map((url, i) => {
                const isReplace = mode === "replace" && replaceIdx === i;
                return (
                  <button
                    key={i}
                    onClick={() => { setMode("replace"); setReplaceIdx(i); }}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all ${isReplace ? "border-violet-500 ring-2 ring-violet-300" : "border-gray-100 hover:border-violet-300"}`}
                  >
                    <img src={url} alt={`фото ${i+1}`} className="w-full aspect-square object-cover" />
                    <span className="absolute top-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">#{i+1}</span>
                    {isReplace && (
                      <span className="absolute inset-0 bg-violet-500/30 flex items-center justify-center">
                        <span className="bg-violet-600 text-white text-xs font-medium px-2 py-1 rounded-lg">↻ заменю</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Превью итоговой галереи */}
        <div className="mb-8 p-4 bg-violet-50 border border-violet-100 rounded-2xl">
          <h3 className="font-medium mb-3 text-sm text-violet-900">Итоговая галерея ({finalPhotos.length} фото)</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
            {finalPhotos.map((url, i) => {
              const isNew = url === newPhotoUrl;
              return (
                <div key={i} className={`relative rounded-lg overflow-hidden border-2 ${isNew ? "border-violet-500" : "border-gray-200"}`}>
                  <img src={url} alt={`итог ${i+1}`} className="w-full aspect-square object-cover" />
                  <span className="absolute top-0.5 left-0.5 bg-black/60 text-white text-[9px] px-1 rounded">#{i+1}</span>
                  {isNew && <span className="absolute bottom-0.5 right-0.5 bg-violet-600 text-white text-[9px] px-1 rounded">новое</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Кнопка применить */}
        <div className="flex gap-3 sticky bottom-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-md">
          <button onClick={() => router.push(`/app/projects/${id}`)} className="px-4 py-3 text-gray-500 hover:text-gray-700 text-sm">Отмена</button>
          <button
            onClick={apply}
            disabled={publishing}
            className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {publishing ? <><div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Публикуем в {provName}...</> : `↑ Опубликовать в ${provName}`}
          </button>
        </div>

        {/* Альтернатива — создать новую карточку */}
        <div className="mt-8 p-4 bg-white rounded-2xl border border-gray-100">
          <h3 className="font-medium text-sm mb-1">Или — создать <span className="text-violet-700">новую карточку</span></h3>
          <p className="text-xs text-gray-500 mb-3 leading-snug">
            Скопирует все характеристики и описание из этой карточки, но опубликует
            под новым артикулом с твоими фото. Полезно если хочешь параллельно
            продавать «обновлённую версию» товара или протестировать новые фото.
          </p>
          {!cloneOpen ? (
            <button
              onClick={() => setCloneOpen(true)}
              className="px-4 py-2 border-2 border-violet-300 text-violet-700 hover:bg-violet-50 rounded-xl text-sm font-medium"
            >
              + Создать новую карточку
            </button>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Куда публиковать</label>
                <select className="input-field text-sm"
                  value={cloneTargetId ?? link.account_id}
                  onChange={e => {
                    const v = parseInt(e.target.value, 10);
                    setCloneTargetId(v === link.account_id ? null : v);
                  }}>
                  {allAccounts.filter(a => a.provider !== "ym").map(a => (
                    <option key={a.id} value={a.id}>
                      {a.provider.toUpperCase()} — {a.name}{a.id === link.account_id ? " (текущий)" : ""}
                    </option>
                  ))}
                </select>
                {cloneTargetId && (() => {
                  const target = allAccounts.find(a => a.id === cloneTargetId);
                  if (target && target.provider !== link.provider) {
                    return (
                      <p className="text-[11px] text-violet-700 bg-violet-50 border border-violet-200 rounded-lg p-2 mt-1.5 leading-snug">
                        🔀 Это <b>миграция {link.provider.toUpperCase()}→{target.provider.toUpperCase()}</b>.
                        Категория переедет по синхронизации, размеры конвертируются автоматически.
                        Если соответствия категорий нет — система попросит его завести (
                        <button type="button" onClick={() => router.push("/app/marketplaces/mappings")}
                          className="underline">страница синхронизации</button>).
                      </p>
                    );
                  }
                  return null;
                })()}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  {(() => {
                    const target = cloneTargetId ? allAccounts.find(a => a.id === cloneTargetId) : null;
                    const tp = target?.provider || link.provider;
                    return tp === "wb" ? "Новый артикул (vendorCode)" : "Новый offer_id";
                  })()}
                  <span className="text-gray-400 font-normal"> — необязательно, можно оставить пустым</span>
                </label>
                <input
                  className="input-field text-sm"
                  placeholder={(() => {
                    const target = cloneTargetId ? allAccounts.find(a => a.id === cloneTargetId) : null;
                    const tp = target?.provider || link.provider;
                    return tp === "wb" ? "напр. STOL-DUB-001" : "напр. OFFER-DUB-001";
                  })()}
                  value={cloneCode}
                  onChange={(e) => setCloneCode(e.target.value)}
                  maxLength={50}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Название (опционально)
                  <span className="text-gray-400 font-normal"> — оставь пустым чтобы скопировать оригинал</span>
                </label>
                <input
                  className="input-field text-sm"
                  placeholder={card.name || ""}
                  value={cloneTitle}
                  onChange={(e) => setCloneTitle(e.target.value)}
                  maxLength={120}
                />
              </div>
              {(() => {
                const target = cloneTargetId ? allAccounts.find(a => a.id === cloneTargetId) : null;
                const tp = target?.provider || link.provider;
                const tpName = PROV[tp];
                return (
                  <div className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-2 leading-snug">
                    ⚠️ Карточка создаётся как черновик в {tpName}. {tp === "wb"
                      ? "Сразу после создания нужно открыть карточку в WB и проверить характеристики, цены, штрихкоды — WB сгенерирует SKU автоматом."
                      : "Ozon обработает её за 1–5 минут и присвоит product_id. Цены/остатки нужно поставить отдельно в кабинете Ozon."}
                  </div>
                );
              })()}
              <div className="flex gap-2">
                <button onClick={() => { setCloneOpen(false); setCloneCode(""); setCloneTitle(""); setCloneTargetId(null); }}
                        className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Отмена</button>
                <button
                  onClick={cloneCard}
                  disabled={cloning}
                  className="flex-1 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {cloning ? <><div className="animate-spin w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" /> Создаём...</> : (() => {
                    const target = cloneTargetId ? allAccounts.find(a => a.id === cloneTargetId) : null;
                    const tp = target?.provider || link.provider;
                    return `Создать в ${PROV[tp]}`;
                  })()}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function mediaUrl(path: string) {
  const rel = path.split(/uploads[/\\]/)[1];
  return `${API_URL}/media/${rel?.replace(/\\/g, "/")}`;
}
