"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { api, SCENARIOS, CATEGORIES, CATEGORY_SCENARIO_ORDER } from "@/lib/api";
import { toast, confirmDialog } from "@/lib/toast";
import AppNav from "@/components/layout/AppNav";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import SeriesPackPanel from "./SeriesPackPanel";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aiviso.ru";

interface UploadDTO {
  id: number;
  url: string;            // относительный /media/... — приклеиваем API_URL для рендера
  original_filename?: string | null;
}

interface BrandKit {
  version?: number;
  palette?: { text_dark?: string; text_light?: string; accent_1?: string; accent_2?: string | null; plaque_bg?: string };
  typography?: { title_font?: string; title_weight?: string; title_case?: string; body_font?: string };
  decoration?: { title_plaque?: string; usp_plaque?: string; icon_style?: string; kicker?: boolean };
  mood?: string;
  _meta?: { starter_preset?: string; rationale?: string; auto_generated?: boolean; fallback?: boolean; from_reference?: boolean; mode?: string };
}

interface Project {
  id: number;
  name: string;
  category: string;
  flow?: "single" | "series";
  model?: "pro" | "flash";
  visual_anchor: string | null;
  upload_count: number;
  uploads?: UploadDTO[];
  title?: string | null;
  utp?: string[] | null;
  utp_icons?: string[] | null;
  market_research?: string | null;
  concepts?: Concept[] | null;
  brand_kit?: BrandKit | null;
}
interface Concept {
  title: string;
  utp_focus: string;
  scenario: string;
  scene_description: string;
  icon: string;
}
interface Generation {
  id: number;
  scenario: string;
  status: string;
  qc_score: number | null;
  qc_details?: string | null;
  result_paths: string[] | null;
  retry_count: number;
}

interface MpLink {
  account_id: number;
  card_id: number;
  provider: "wb" | "ozon" | "ym";
}

const splitUtp = (s: string): { icon: string; text: string } => {
  const idx = s.indexOf("\t");
  if (idx === -1) return { icon: "", text: s };
  return { icon: s.slice(0, idx), text: s.slice(idx + 1) };
};
const joinUtp = (icon: string, text: string) => `${icon}\t${text}`;

export default function ProjectPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<Project | null>(null);
  const [generations, setGenerations] = useState<Generation[]>([]);
  const [mpLink, setMpLink] = useState<MpLink | null>(null);

  // Шаг 02: тип контента (фото / карточка / видео)
  const [contentType, setContentType] = useState<"photo" | "card" | "video">("card");
  // Соотношение сторон — только для photo-режима. Для card всегда 3:4 (листинг WB/Ozon).
  const [photoAspect, setPhotoAspect] = useState<"1:1" | "3:4" | "4:5" | "16:9" | "9:16">("1:1");
  // Brand Kit: загружается из project.brand_kit. Управляется отдельным виджетом.
  const [kitLoading, setKitLoading] = useState(false);
  const [kitPickerOpen, setKitPickerOpen] = useState(false);
  const [starters, setStarters] = useState<{ key: string; label: string; tagline: string; kit: BrandKit; preview_url?: string }[]>([]);
  const [modelSwitching, setModelSwitching] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [deletingUploadId, setDeletingUploadId] = useState<number | null>(null);
  const [scenario, setScenario] = useState("");
  const [sceneDesc, setSceneDesc] = useState("");
  const [generating, setGenerating] = useState(false);
  const [regeneratingFor, setRegeneratingFor] = useState<number | null>(null);

  // Marketing edits
  const [editTitle, setEditTitle] = useState("");
  const [editUtp, setEditUtp] = useState<{ icon: string; text: string }[]>([]);
  const [marketingLoading, setMarketingLoading] = useState(false);
  const [iconsLoading, setIconsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  // Свободный текст УТП (как у Aidentika — textarea)
  const [utpFree, setUtpFree] = useState("");

  // Преемственность модели — для одежды. Если включено, бэк инжектит
  // в промт «keep the same model identity as in previous generations of this project».
  const [preserveModel, setPreserveModel] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) { router.push("/auth"); return; }
    loadProject();
    loadGenerations();
    loadMpLink();
    syncCredits();
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [id]);

  // Синк баланса с сервером — localStorage может быть stale после прошлых генераций.
  const syncCredits = () =>
    api.get("/auth/me").then(({ data }) => {
      localStorage.setItem("user_credits", String(data.credits));
      localStorage.setItem("user_name", data.name);
    }).catch(() => {});

  useEffect(() => {
    const active = generations.some(g => g.status === "pending" || g.status === "processing");
    if (active && !pollRef.current) pollRef.current = setInterval(() => loadGenerations(), 5000);
    else if (!active && pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; }
  }, [generations]);

  // Авто-первый сценарий
  useEffect(() => {
    if (project && !scenario) {
      const scenes = Object.entries(SCENARIOS).filter(([, v]) => v.categories.includes(project.category));
      if (scenes.length) setScenario(scenes[0][0]);
    }
  }, [project]);

  // Синхронизация utpFree ↔ editUtp (textarea ↔ структурированный список)
  useEffect(() => {
    if (editUtp.length > 0 && !utpFree) {
      setUtpFree(editUtp.map(u => u.text).filter(Boolean).join("\n"));
    }
  }, [editUtp]);

  const loadProject = async () => {
    const { data } = await api.get(`/projects/${id}`);
    setProject(data);
    if (data.title) setEditTitle(data.title);
    if (data.utp) {
      const parsed = data.utp.map(splitUtp);
      setEditUtp(parsed);
      setUtpFree(parsed.map((u: any) => u.text).filter(Boolean).join("\n"));
    }
    const utpEmpty = !data.utp || (Array.isArray(data.utp) && data.utp.length === 0);
    if (data.upload_count > 0 && utpEmpty && !marketingLoading) {
      generateMarketing().catch(() => {});
    }
  };

  const loadGenerations = async () => {
    const { data } = await api.get(`/projects/${id}/generations`);
    setGenerations(data);
  };
  const loadMpLink = async () => {
    try { const { data } = await api.get(`/marketplaces/by-project/${id}`); setMpLink(data); }
    catch { setMpLink(null); }
  };

  const handleUpload = async (files: FileList) => {
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const fd = new FormData(); fd.append("file", file);
        await api.post(`/projects/${id}/upload`, fd);
      }
      await loadProject();
    } catch (err: any) { toast.error(err.response?.data?.detail || "Ошибка загрузки"); }
    finally { setUploading(false); }
  };

  const deleteUpload = async (uploadId: number) => {
    if (!(await confirmDialog("Удалить это фото? Действие нельзя отменить."))) return;
    setDeletingUploadId(uploadId);
    try {
      const { data } = await api.delete(`/projects/${id}/uploads/${uploadId}`);
      setProject(data);
    } catch (err: any) { toast.error(err.response?.data?.detail || "Ошибка удаления"); }
    finally { setDeletingUploadId(null); }
  };

  const generateMarketing = async () => {
    setMarketingLoading(true);
    try {
      const { data } = await api.post(`/projects/${id}/marketing`);
      setProject(data);
      setEditTitle(data.title || "");
      const parsed = (data.utp || []).map(splitUtp);
      setEditUtp(parsed);
      setUtpFree(parsed.map((u: any) => u.text).filter(Boolean).join("\n"));
    } catch (err: any) { toast.error(err.response?.data?.detail || "Ошибка"); }
    finally { setMarketingLoading(false); }
  };

  const generateIcons = async () => {
    setIconsLoading(true);
    try { const { data } = await api.post(`/projects/${id}/icons`); setProject(data); }
    catch (err: any) { toast.error(err.response?.data?.detail || "Ошибка генерации иконок"); }
    finally { setIconsLoading(false); }
  };

  const saveMarketing = async () => {
    setSaveStatus("saving");
    try {
      // конвертим textarea → массив УТП
      const lines = utpFree.split("\n").map(s => s.trim()).filter(Boolean);
      const utpJoined = lines.map((t, i) => joinUtp(editUtp[i]?.icon || "", t));
      const { data } = await api.patch(`/projects/${id}`, { title: editTitle, utp: utpJoined });
      setProject(data);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (err: any) { setSaveStatus("error"); toast.error(err.response?.data?.detail || "Ошибка"); }
  };

  const startGeneration = async () => {
    if (!scenario) { toast.info("Выбери сценарий"); return; }
    setGenerating(true);
    try {
      // если юзер правил textarea, до отправки сохраним
      const lines = utpFree.split("\n").map(s => s.trim()).filter(Boolean);
      const utpJoined = lines.map((t, i) => joinUtp(editUtp[i]?.icon || "", t));
      if (lines.length) await api.patch(`/projects/${id}`, { title: editTitle, utp: utpJoined }).catch(() => {});

      await api.post(`/projects/${id}/generations`, {
        scenario,
        scene_description: sceneDesc,
        title: contentType === "photo" ? undefined : (editTitle || undefined),
        utp: contentType === "photo" ? undefined : (utpJoined.length ? utpJoined : undefined),
        with_icons: contentType === "card",
        preserve_model: project?.category === "clothing" ? preserveModel : undefined,
        photo_aspect: contentType === "photo" ? photoAspect : undefined,
        // brand_kit подтянется на бэкенде из project.brand_kit (резолвер).
        // Передаём явно только если хотим override прямо в этот вызов.
      });
      loadGenerations();
      syncCredits();  // сразу обновляем баланс — бэк уже декрементил
    } catch (err: any) { toast.error(err.response?.data?.detail || "Ошибка"); }
    finally { setGenerating(false); }
  };

  const regenerate = async (g: Generation) => {
    setRegeneratingFor(g.id);
    try {
      const lines = utpFree.split("\n").map(s => s.trim()).filter(Boolean);
      const utpJoined = lines.map((t, i) => joinUtp(editUtp[i]?.icon || "", t));
      await api.post(`/projects/${id}/generations`, {
        scenario: g.scenario,
        scene_description: sceneDesc || "",
        title: contentType === "photo" ? undefined : (editTitle || undefined),
        utp: contentType === "photo" ? undefined : (utpJoined.length ? utpJoined : undefined),
        with_icons: contentType === "card",
        preserve_model: project?.category === "clothing" ? preserveModel : undefined,
        photo_aspect: contentType === "photo" ? photoAspect : undefined,
        // brand_kit подтянется на бэкенде из project.brand_kit (резолвер).
        // Передаём явно только если хотим override прямо в этот вызов.
      });
      await loadGenerations();
      syncCredits();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) { toast.error(err.response?.data?.detail || "Ошибка"); }
    finally { setRegeneratingFor(null); }
  };

  const acceptGen = async (genId: number) => {
    try { await api.post(`/projects/${id}/generations/${genId}/accept`); await loadGenerations(); }
    catch (err: any) { toast.error(err.response?.data?.detail || "Ошибка"); }
  };

  const goPublish = (genId: number) => router.push(`/app/projects/${id}/publish?gen=${genId}`);

  // ─── Сравнение «До/После» — id генерации, для которой включён слайдер
  const [compareFor, setCompareFor] = useState<number | null>(null);

  // ─── Скачивание подогнанных под маркетплейс ZIP ───────────────────────────
  const [downloadOpenFor, setDownloadOpenFor] = useState<number | "all" | null>(null);
  const [downloadingKey, setDownloadingKey] = useState<string | null>(null);

  const downloadZip = async (generationIds: number[] | null, marketplace: "wb" | "ozon" | "both", key: string) => {
    setDownloadingKey(key);
    try {
      const resp = await api.post(`/projects/${id}/generations/export-zip`,
        { generation_ids: generationIds, marketplace },
        { responseType: "blob" }
      );
      const blob = new Blob([resp.data], { type: "application/zip" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const cd = (resp.headers["content-disposition"] || "") as string;
      const m = cd.match(/filename="?([^"]+)"?/);
      a.download = m ? m[1] : `aiviso_${id}_${marketplace}.zip`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err: any) {
      toast.error(err.response?.data?.detail || "Не удалось скачать ZIP");
    } finally {
      setDownloadingKey(null);
      setDownloadOpenFor(null);
    }
  };

  // ─── Brand Kit ─────────────────────────────────────────────────────────────
  // Auto-retry хелпер: если api временно недоступен (502/503/504/network error —
  // например из-за рестарта контейнера), пробуем ещё раз через 2с и 4с. Только
  // явные ошибки сервера (4xx с детально, 5xx кроме 502/503/504) пробрасываем сразу.
  async function postWithRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
    let lastErr: any = null;
    for (let i = 0; i <= retries; i++) {
      try { return await fn(); }
      catch (err: any) {
        const status = err?.response?.status;
        const isTransient = !status || status === 502 || status === 503 || status === 504;
        if (!isTransient || i === retries) throw err;
        lastErr = err;
        await new Promise(r => setTimeout(r, 2000 * (i + 1)));
      }
    }
    throw lastErr;
  }

  const errMsg = (err: any, fallback: string): string => {
    const status = err?.response?.status;
    if (!status) return "Сервер недоступен — попробуй ещё раз через секунду.";
    if (status === 502 || status === 503 || status === 504)
      return "Сервер временно недоступен — попробуй ещё раз через секунду.";
    return err?.response?.data?.detail || fallback;
  };

  const autoBrandKit = async () => {
    if (!project) return;
    if (project.upload_count === 0) {
      toast.info("Сначала загрузи фото товара — AI смотрит на него, чтобы подобрать стиль.");
      return;
    }
    setKitLoading(true);
    try {
      // Режим «ИИ» — AI-агент анализирует фото и выбирает один из 6 дизайнерских
      // пресетов под товар (palette + typography + декор). Banana потом верстает
      // overlay по выбранному пресету — стабильнее чем freeform «с нуля».
      const { data } = await postWithRetry(() =>
        api.post<{ brand_kit: BrandKit }>(`/projects/${id}/brand-kit/auto`)
      );
      setProject(p => p ? { ...p, brand_kit: data.brand_kit } : p);
    } catch (err: any) {
      toast.error(errMsg(err, "Не удалось включить ИИ-режим"));
    } finally { setKitLoading(false); }
  };

  const setBrandKitFromStarter = async (starterKey: string) => {
    setKitLoading(true);
    try {
      const { data } = await postWithRetry(() =>
        api.put<{ brand_kit: BrandKit }>(`/projects/${id}/brand-kit`, { starter: starterKey })
      );
      setProject(p => p ? { ...p, brand_kit: data.brand_kit } : p);
      setKitPickerOpen(false);
    } catch (err: any) { toast.error(errMsg(err, "Ошибка")); }
    finally { setKitLoading(false); }
  };

  const brandKitFromReference = async (file: File) => {
    if (!project) return;
    if (project.upload_count === 0) {
      toast.info("Сначала загрузи фото товара — AI смотрит и на него тоже.");
      return;
    }
    if (!file.type.startsWith("image/")) { toast.error("Файл должен быть картинкой"); return; }
    if (file.size > 12 * 1024 * 1024) { toast.error("Картинка слишком большая (>12 МБ)"); return; }
    setKitLoading(true);
    try {
      const fd = new FormData();
      fd.append("reference", file);
      const { data } = await postWithRetry(() =>
        api.post<{ brand_kit: BrandKit }>(
          `/projects/${id}/brand-kit/from-reference`, fd,
          { headers: { "Content-Type": "multipart/form-data" } },
        )
      );
      setProject(p => p ? { ...p, brand_kit: data.brand_kit } : p);
    } catch (err: any) {
      toast.error(errMsg(err, "AI-агент не справился"));
    } finally { setKitLoading(false); }
  };

  // Подгружаем список starter'ов один раз при монтировании
  useEffect(() => {
    api.get("/projects/_starters/brand-kits").then(({ data }) => setStarters(data)).catch(() => {});
  }, []);

  // Переключатель модели Pro / Flash для текущего проекта
  const switchModel = async (m: "pro" | "flash") => {
    if (!project || project.model === m) return;
    setModelSwitching(true);
    try {
      const { data } = await api.patch(`/projects/${id}`, { model: m });
      setProject(data);
    } catch (err: any) {
      toast.error(err.response?.data?.detail || "Ошибка");
    } finally { setModelSwitching(false); }
  };

  // Сценарии — только из явного списка под категорию (без legacy-дублей).
  // Если категории нет в списке (старый проект) — fallback на все совместимые.
  const availableScenarios = project
    ? (CATEGORY_SCENARIO_ORDER[project.category]?.map(k => [k, SCENARIOS[k]] as const).filter(([, v]) => v)
      || Object.entries(SCENARIOS).filter(([, v]) => v.categories.includes(project.category)))
    : [];
  const statusLabel: Record<string, string> = {
    pending: "Ожидание...", processing: "Генерация...", done: "✅ Готово",
    needs_review: "⚠️ Низкий QC — посмотри сам", failed: "❌ Ошибка",
  };
  const mediaUrl = (path: string) => {
    const rel = path.split(/uploads[/\\]/)[1];
    return `${API_URL}/media/${rel?.replace(/\\/g, "/")}`;
  };
  // WebP-превью для генерационных результатов: облегчает фронт в 50× раз.
  // Если WebP-файла нет (старые генерации) — onError автоматически переключит на PNG.
  const previewUrl = (path: string) => {
    const url = mediaUrl(path);
    return url.endsWith(".png") ? url.slice(0, -4) + ".webp" : url;
  };

  if (!project) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full" /></div>;

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <AppNav />
      {/* Контекст проекта: «Все проекты / название» + плашка маркетплейса (категория ниже в блоке «Настройте генерацию») */}
      <div className="bg-white border-b border-gray-100 px-3 sm:px-6 py-2.5 flex items-center gap-2 sm:gap-3">
        <button onClick={() => router.push("/app")} className="text-xs sm:text-sm text-gray-500 hover:text-gray-800 shrink-0 flex items-center gap-1" aria-label="Все проекты">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <span className="hidden sm:inline">Все проекты</span>
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-sm font-medium truncate min-w-0 flex-1">{project.name}</h1>
        {mpLink && (
          <span className="text-[10px] font-medium text-violet-600 bg-violet-50 px-2 py-1 rounded-lg shrink-0 inline-flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            <span className="hidden sm:inline">{mpLink.provider.toUpperCase()}</span>
          </span>
        )}
      </div>

      <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-6 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 min-w-0">
          {/* ─────── ЛЕВАЯ ПАНЕЛЬ (настройки шагами) ─────── */}
          <div className="space-y-4">
            {/* 01 — Фото товара */}
            <Section
              step="01"
              title={project.upload_count > 0 ? "Фото товара" : "Загрузите фото"}
              hint={project.upload_count > 0
                ? "Сервис будет использовать эти фото при генерации"
                : "до 4 фото товара с разных сторон"}
            >
              {/* Плашка «импортировано из маркетплейса» */}
              {mpLink && project.upload_count > 0 && (
                <div className="mb-2 flex items-center gap-2 text-[11px] text-violet-700 bg-violet-50 border border-violet-100 rounded-lg px-2 py-1.5">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/>
                  </svg>
                  <span>Импортировано из {mpLink.provider.toUpperCase()} — можно добавить ещё или заменить</span>
                </div>
              )}
              <div className="flex gap-2 mb-2">
                {Array.from({ length: 4 }).map((_, i) => {
                  const up = project.uploads?.[i];
                  const has = !!up;
                  return (
                    <div
                      key={i}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 ${
                        has ? "border-violet-300" : "border-dashed border-gray-200 hover:border-violet-300"
                      } bg-white`}
                    >
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        title={has ? "Заменить — добавь новое фото" : "Загрузить фото"}
                        className="w-full h-full flex items-center justify-center text-xs text-gray-400"
                      >
                        {has ? (
                          <img
                            src={`${API_URL}${up!.url}`}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          "+"
                        )}
                      </button>
                      {has && (
                        <>
                          <span className="pointer-events-none absolute bottom-0.5 right-0.5 bg-violet-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                            {i + 1}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); deleteUpload(up!.id); }}
                            disabled={deletingUploadId === up!.id}
                            aria-label="Удалить фото"
                            title="Удалить фото"
                            className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white shadow-sm flex items-center justify-center text-[10px] leading-none transition-colors disabled:opacity-50"
                          >
                            {deletingUploadId === up!.id ? (
                              <span className="block w-2 h-2 border border-current border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                                <path d="M2 2 L8 8 M8 2 L2 8" />
                              </svg>
                            )}
                          </button>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
              <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => e.target.files && handleUpload(e.target.files)} />
              {uploading && <p className="text-xs text-gray-400">Загружаем...</p>}
              {project.upload_count > 0 && (
                <p className="text-xs text-violet-600 mt-1">{project.upload_count} из 4 · <button onClick={() => fileRef.current?.click()} className="hover:text-violet-800 underline">добавить</button></p>
              )}
            </Section>

            {/* 02 — Настройки генерации (только для single-режима; для series
                 настройка идёт per-card в правой панели SeriesPackPanel) */}
            {project.flow !== "series" && (
            <Section step="02" title="Настройте генерацию">
              {/* Категория товара */}
              <p className="text-sm font-medium text-gray-700 mb-2">Категория</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 mb-4">
                {Object.entries(CATEGORIES).map(([k, v]) => {
                  const active = project.category === k;
                  return (
                    <button
                      key={k}
                      onClick={async () => {
                        if (active) return;
                        try {
                          const { data } = await api.patch(`/projects/${id}`, { category: k });
                          setProject(data);
                          // Сбросим сценарий если он не подходит новой категории
                          const scenes = Object.entries(SCENARIOS).filter(([, val]) => val.categories.includes(k));
                          if (scenes.length && !scenes.find(([sk]) => sk === scenario)) {
                            setScenario(scenes[0][0]);
                          }
                        } catch (err: any) {
                          toast.error(err.response?.data?.detail || "Не удалось сменить категорию");
                        }
                      }}
                      className={`py-2 px-2 rounded-lg text-xs sm:text-sm font-medium transition-all active:scale-[0.97] border ${
                        active
                          ? "bg-violet-600 text-white border-violet-600 shadow-sm"
                          : "bg-white text-gray-700 border-gray-200 hover:border-violet-300"
                      }`}
                    >
                      {v as string}
                    </button>
                  );
                })}
              </div>

              {/* Модель генерации */}
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">Модель</p>
                <span className="text-[11px] text-gray-400">
                  {project.model === "flash" ? "быстрее, дешевле" : "качественнее, дороже"}
                </span>
              </div>
              <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
                {(["flash", "pro"] as const).map(m => {
                  const active = project.model === m;
                  const credits = m === "flash" ? 4 : 6;
                  return (
                    <button
                      key={m}
                      onClick={() => switchModel(m)}
                      disabled={modelSwitching}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 active:scale-[0.97] ${
                        active ? "bg-violet-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                      } disabled:opacity-50`}
                    >
                      {m === "flash" ? (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>
                        </svg>
                      )}
                      <span>{m === "flash" ? "Flash" : "Pro"}</span>
                      <span className={`text-[10px] ${active ? "opacity-90" : "text-gray-400"}`}>{credits} кр.</span>
                    </button>
                  );
                })}
              </div>

              {/* Тип контента (видео скрыто до релиза) */}
              <p className="text-sm font-medium text-gray-700 mb-2">Тип контента</p>
              <div className="flex bg-gray-100 rounded-xl p-1 mb-3">
                {([
                  { key: "photo", label: "Фото" },
                  { key: "card", label: "Карточка" },
                ] as const).map(t => (
                  <button
                    key={t.key}
                    onClick={() => setContentType(t.key)}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all active:scale-[0.97] ${
                      contentType === t.key ? "bg-violet-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-3">
                {contentType === "photo" && "Реалистичные фото товара в нужном сценарии."}
                {contentType === "card" && "Готовые карточки с заголовком и УТП-плашками."}
              </p>

              {/* Подсказка про соотношение сторон в card-режиме —
                  объясняет почему селектор скрыт. */}
              {contentType === "card" && (
                <div className="flex items-center gap-2 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1.5 mb-3">
                  <span>📐</span>
                  <span>Карточка — фиксированно <b>3:4</b> (стандарт WB и Ozon)</span>
                </div>
              )}

              {/* Соотношение сторон — только для photo-режима.
                  Для card всегда 3:4 (стандарт WB/Ozon листинга). */}
              {contentType === "photo" && (
                <>
                  <p className="text-sm font-medium text-gray-700 mb-2">Соотношение сторон</p>
                  <div className="flex bg-gray-100 rounded-xl p-1 mb-3 gap-0.5">
                    {([
                      { key: "1:1",  label: "1:1",  hint: "Квадрат — Instagram, Ozon карусель" },
                      { key: "3:4",  label: "3:4",  hint: "Вертикаль — WB/Ozon листинг" },
                      { key: "4:5",  label: "4:5",  hint: "Instagram feed, Pinterest" },
                      { key: "16:9", label: "16:9", hint: "Горизонталь — баннеры, лендинги" },
                      { key: "9:16", label: "9:16", hint: "Сторис, Reels, обложки" },
                    ] as const).map(a => (
                      <button
                        key={a.key}
                        onClick={() => setPhotoAspect(a.key)}
                        title={a.hint}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all active:scale-[0.97] ${
                          photoAspect === a.key ? "bg-violet-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Brand Kit виджет (только для контент-типа «Карточка») */}
              {contentType === "card" && (
                <BrandKitWidget
                  brandKit={project.brand_kit || null}
                  onAuto={autoBrandKit}
                  onPick={() => setKitPickerOpen(true)}
                  onReference={brandKitFromReference}
                  loading={kitLoading}
                  hasUploads={project.upload_count > 0}
                />
              )}

              {/* Сценарии (для фото и карточки) */}
              <p className="text-sm font-medium text-gray-700 mb-2">Как показать товар?</p>
              <div className="space-y-1.5 mb-3">
                {availableScenarios.map(([key, { label }]) => (
                  <button
                    key={key}
                    onClick={() => setScenario(key)}
                    className={`w-full p-2.5 rounded-xl border-2 text-left text-sm transition-all active:scale-[0.99] ${
                      scenario === key ? "border-violet-600 bg-violet-50 text-violet-700 font-medium" : "border-gray-200 bg-white hover:border-violet-300 text-gray-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Преемственность модели — только для одежды */}
              {project.category === "clothing" && (scenario === "clothing_model" || scenario === "clothing_lifestyle" || scenario === "clothing_usage") && (
                <label className="flex items-start gap-2.5 mb-3 p-3 bg-violet-50/60 border border-violet-100 rounded-xl cursor-pointer active:scale-[0.99] transition-all">
                  <input
                    type="checkbox"
                    checked={preserveModel}
                    onChange={(e) => setPreserveModel(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-violet-600 cursor-pointer shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">Сохранять преемственность модели</div>
                    <div className="text-[11px] text-gray-500 leading-snug mt-0.5">Все генерации будут с одной и той же моделью — единая внешность для всего комплекта фото товара.</div>
                  </div>
                </label>
              )}

              {/* Описание сцены */}
              <p className="text-sm font-medium text-gray-700 mb-2">Дополнительно (опционально)</p>
              <input
                className="input-field w-full text-sm mb-3"
                placeholder="столик у дивана в стиле Джапанди"
                value={sceneDesc}
                onChange={(e) => setSceneDesc(e.target.value)}
              />

              {/* Заголовок и УТП — только для Карточки */}
              {contentType === "card" && (
                <>
                  <p className="text-xs font-medium text-gray-500 mb-1.5">Заголовок и подзаголовок</p>
                  <textarea
                    className="input-field w-full text-sm mb-1 resize-none leading-snug"
                    value={editTitle}
                    rows={2}
                    maxLength={160}
                    onChange={(e) => setEditTitle(e.target.value.slice(0, 160))}
                    placeholder={"Заголовок · 2-4 слова\nПодзаголовок (опционально)"}
                  />
                  <p className="text-[11px] text-gray-400 mb-3">
                    Первая строка — крупный заголовок (2-4 слова), вторая — подзаголовок (опционально)
                  </p>

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">О чём рассказать (УТП)</p>
                    <button
                      onClick={generateMarketing}
                      disabled={marketingLoading || project.upload_count === 0}
                      className="text-[11px] text-violet-600 hover:text-violet-800 flex items-center gap-1 disabled:opacity-40"
                    >
                      {marketingLoading ? <><div className="animate-spin w-2.5 h-2.5 border border-violet-600 border-t-transparent rounded-full" /> Думаем…</> : <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>AI идея</>}
                    </button>
                  </div>
                  {/* Список УТП — каждая строка отдельным input с маркером */}
                  {(() => {
                    const items = utpFree.split("\n");
                    const visibleItems = items.length > 0 ? items : [""];
                    const updateAt = (idx: number, val: string) => {
                      const next = [...visibleItems];
                      next[idx] = val;
                      setUtpFree(next.join("\n"));
                    };
                    const removeAt = (idx: number) => {
                      const next = visibleItems.filter((_, i) => i !== idx);
                      setUtpFree(next.join("\n"));
                    };
                    const addItem = () => {
                      setUtpFree([...visibleItems, ""].join("\n"));
                    };
                    return (
                      <div className="space-y-1.5 mb-2">
                        {visibleItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 group">
                            <span className="text-violet-500 shrink-0 select-none" aria-hidden="true">•</span>
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => updateAt(idx, e.target.value)}
                              placeholder={idx === 0 ? "Натуральный массив дуба" : idx === 1 ? "Защитное покрытие маслом" : "Ещё одно УТП"}
                              className="input-field flex-1 text-sm py-1.5"
                            />
                            {visibleItems.length > 1 && (
                              <button
                                onClick={() => removeAt(idx)}
                                aria-label="Удалить УТП"
                                className="shrink-0 w-7 h-7 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors"
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                              </button>
                            )}
                          </div>
                        ))}
                        {visibleItems.length < 7 && (
                          <button
                            onClick={addItem}
                            className="text-[11px] text-violet-600 hover:text-violet-800 flex items-center gap-1 mt-1.5"
                          >
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                            </svg>
                            Добавить УТП
                          </button>
                        )}
                      </div>
                    );
                  })()}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={generateIcons}
                      disabled={iconsLoading || !utpFree.trim()}
                      className="text-[11px] text-violet-600 hover:text-violet-800 flex items-center gap-1 disabled:opacity-40"
                    >
                      {iconsLoading ? <><div className="animate-spin w-2.5 h-2.5 border border-violet-600 border-t-transparent rounded-full" /> Рисуем…</> : <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>AI-иконки</>}
                    </button>
                    <div className="flex items-center gap-2">
                      {saveStatus === "saved" && <span className="text-[11px] text-green-600">✓ Сохранено</span>}
                      <button
                        onClick={saveMarketing}
                        disabled={saveStatus === "saving"}
                        className="text-[11px] text-gray-600 hover:text-gray-900 disabled:opacity-40"
                      >
                        {saveStatus === "saving" ? "Сохраняем..." : "Сохранить"}
                      </button>
                    </div>
                  </div>
                  {project.utp_icons && project.utp_icons.length > 0 && (
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {project.utp_icons.map((p, i) => (
                        <img key={i} src={mediaUrl(p)} alt="" className="w-9 h-9 object-contain bg-gray-50 rounded-lg" />
                      ))}
                    </div>
                  )}
                </>
              )}
            </Section>
            )}

            {/* 03 — Сгенерировать (sticky bottom). В series-режиме её нет —
                 запуск всех 5 карточек идёт через кнопку «Создать комплект» в SeriesPackPanel. */}
            {project.flow !== "series" && (
              <>
                <button
                  onClick={startGeneration}
                  disabled={generating || !scenario || project.upload_count === 0}
                  className="w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-3 shadow-sm"
                >
                  {generating ? <><div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Запускаем...</> : <>Сгенерировать <span className="bg-white/20 px-2 py-0.5 rounded-lg text-sm">×{project.model === "flash" ? 4 : 6} кредитов</span></>}
                </button>
                {project.upload_count === 0 && <p className="text-xs text-amber-600 text-center">Сначала загрузи фото</p>}
              </>
            )}
          </div>

          {/* ─────── ПРАВАЯ КОЛОНКА (результаты) ─────── */}
          {project.flow === "series" ? (
            <SeriesPackPanel
              project={project as any}
              generations={generations}
              refreshAll={async () => { await loadProject(); await loadGenerations(); }}
              mediaUrl={mediaUrl}
              previewUrl={previewUrl}
              credits={Number((typeof window !== "undefined" && localStorage.getItem("user_credits")) || 0)}
            />
          ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Результаты</h2>
              <span className="text-xs text-gray-400">03</span>
            </div>

            {/* Шапка «Скачать всё» — появляется когда есть >= 1 готовая генерация */}
            {(() => {
              const doneCount = generations.filter(g => g.status === "done" && g.result_paths && g.result_paths.length > 0).length;
              if (doneCount === 0) return null;
              const isOpen = downloadOpenFor === "all";
              return (
                <div className="bg-white border border-gray-100 rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="text-sm">
                      <span className="font-semibold">{doneCount}</span>
                      <span className="text-gray-500"> {doneCount === 1 ? "готовый кадр" : (doneCount < 5 ? "готовых кадра" : "готовых кадров")}</span>
                    </div>
                    <button
                      onClick={() => setDownloadOpenFor(isOpen ? null : "all")}
                      className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium transition-all active:scale-[0.98] flex items-center gap-1.5"
                    >
                      Скачать архив
                      <svg className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        onClick={() => downloadZip(null, "both", "all-both")}
                        disabled={downloadingKey === "all-both"}
                        className="px-3 py-2 bg-gray-50 hover:bg-violet-50 border border-gray-200 hover:border-violet-300 rounded-lg text-xs font-medium text-gray-700 transition-colors disabled:opacity-60 text-left"
                      >
                        <div className="font-semibold">Оба маркетплейса</div>
                        <div className="text-[10px] text-gray-400">{downloadingKey === "all-both" ? "Готовим…" : "WB + Ozon в одном архиве"}</div>
                      </button>
                      <button
                        onClick={() => downloadZip(null, "wb", "all-wb")}
                        disabled={downloadingKey === "all-wb"}
                        className="px-3 py-2 bg-gray-50 hover:bg-violet-50 border border-gray-200 hover:border-violet-300 rounded-lg text-xs font-medium text-gray-700 transition-colors disabled:opacity-60 text-left"
                      >
                        <div className="font-semibold">Только Wildberries</div>
                        <div className="text-[10px] text-gray-400">{downloadingKey === "all-wb" ? "Готовим…" : "900 × 1200"}</div>
                      </button>
                      <button
                        onClick={() => downloadZip(null, "ozon", "all-ozon")}
                        disabled={downloadingKey === "all-ozon"}
                        className="px-3 py-2 bg-gray-50 hover:bg-violet-50 border border-gray-200 hover:border-violet-300 rounded-lg text-xs font-medium text-gray-700 transition-colors disabled:opacity-60 text-left"
                      >
                        <div className="font-semibold">Только Ozon</div>
                        <div className="text-[10px] text-gray-400">{downloadingKey === "all-ozon" ? "Готовим…" : "1000 × 1000"}</div>
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}

            {generations.length === 0 ? (
              <div className="bg-white border border-gray-100 rounded-2xl py-20 text-center">
                <div className="text-5xl mb-3">🎨</div>
                <p className="text-gray-400">Здесь появятся результаты после генерации</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {generations.map((g) => (
                  <div key={g.id} className="bg-white rounded-2xl border border-gray-100 p-4">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-medium text-gray-700">{SCENARIOS[g.scenario]?.label || g.scenario} <span className="text-gray-400">#{g.id}</span></span>
                      <div className="flex items-center gap-2">
                        {/* QC бейдж скрываем для failed — там QC=0 не несёт смысла */}
                        {g.qc_score !== null && g.status !== "failed" && (
                          <span className={`font-medium px-1.5 py-0.5 rounded ${g.qc_score >= 70 ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}>QC {g.qc_score.toFixed(0)}</span>
                        )}
                        <span className={g.status === "failed" ? "text-red-600 font-medium" : "text-gray-500"}>{statusLabel[g.status] || g.status}</span>
                      </div>
                    </div>
                    {(g.status === "processing" || g.status === "pending") && (
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3"><div className="h-full bg-violet-400 rounded-full animate-pulse w-1/2" /></div>
                    )}
                    {g.result_paths && g.result_paths.length > 0 && (
                      <>
                        {compareFor === g.id && project.uploads && project.uploads.length > 0 ? (
                          <BeforeAfterSlider
                            before={mediaUrl(project.uploads[0].url)}
                            after={mediaUrl(g.result_paths[0])}
                            className="mb-3"
                          />
                        ) : (
                          <img
                            src={previewUrl(g.result_paths[0])}
                            alt=""
                            className="rounded-xl w-full block mb-3"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              // Fallback на оригинал PNG если WebP-превью не существует (старые генерации).
                              const el = e.currentTarget;
                              const fallback = mediaUrl(g.result_paths![0]);
                              if (el.src !== fallback) el.src = fallback;
                            }}
                          />
                        )}
                        {project.uploads && project.uploads.length > 0 && (g.status === "done" || g.status === "needs_review") && (
                          <button
                            onClick={() => setCompareFor(compareFor === g.id ? null : g.id)}
                            className="w-full mb-2 py-1.5 text-[11px] text-gray-500 hover:text-violet-700 hover:bg-violet-50 rounded-lg font-medium transition-colors"
                          >
                            {compareFor === g.id ? "Скрыть сравнение" : "Сравнить с оригиналом"}
                          </button>
                        )}
                        <div className="flex gap-2 mb-2">
                          <button
                            onClick={() => setDownloadOpenFor(downloadOpenFor === g.id ? null : g.id)}
                            className="flex-1 py-2 text-xs border-2 border-gray-200 hover:border-violet-300 rounded-lg font-medium text-gray-700 flex items-center justify-center gap-1"
                          >
                            Скачать
                            <svg className={`w-3 h-3 transition-transform ${downloadOpenFor === g.id ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                          </button>
                          {mpLink && (g.status === "done" || g.status === "needs_review") && (
                            <button onClick={() => goPublish(g.id)}
                                    className="flex-1 py-2 text-xs bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium">
                              ↑ В {mpLink.provider.toUpperCase()}
                            </button>
                          )}
                        </div>
                        {downloadOpenFor === g.id && (
                          <div className="mb-2 p-2 bg-gray-50 border border-gray-100 rounded-lg space-y-1">
                            <button
                              onClick={async () => {
                                // Cross-origin <a download> игнорируется браузерами — поэтому
                                // тянем blob через fetch и сохраняем через программную ссылку.
                                try {
                                  const url = mediaUrl(g.result_paths![0]);
                                  const resp = await fetch(url, { credentials: "omit" });
                                  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                                  const blob = await resp.blob();
                                  const blobUrl = URL.createObjectURL(blob);
                                  const a = document.createElement("a");
                                  a.href = blobUrl;
                                  a.download = `aiviso_${project.id}_${g.id}.png`;
                                  document.body.appendChild(a);
                                  a.click();
                                  a.remove();
                                  URL.revokeObjectURL(blobUrl);
                                } catch (err) {
                                  console.error("download failed", err);
                                  // Fallback — открыть в новой вкладке
                                  window.open(mediaUrl(g.result_paths![0]), "_blank");
                                }
                                setDownloadOpenFor(null);
                              }}
                              className="block w-full text-left px-2 py-1.5 text-xs text-gray-700 hover:bg-white hover:text-violet-700 rounded"
                            >
                              <span className="font-medium">Как есть</span>
                              <span className="text-[10px] text-gray-400 ml-1">PNG, оригинал</span>
                            </button>
                            <button
                              onClick={() => downloadZip([g.id], "wb", `g-${g.id}-wb`)}
                              disabled={downloadingKey === `g-${g.id}-wb`}
                              className="w-full text-left px-2 py-1.5 text-xs text-gray-700 hover:bg-white hover:text-violet-700 rounded disabled:opacity-60"
                            >
                              <span className="font-medium">Для Wildberries</span>
                              <span className="text-[10px] text-gray-400 ml-1">{downloadingKey === `g-${g.id}-wb` ? "готовим…" : "900 × 1200"}</span>
                            </button>
                            <button
                              onClick={() => downloadZip([g.id], "ozon", `g-${g.id}-ozon`)}
                              disabled={downloadingKey === `g-${g.id}-ozon`}
                              className="w-full text-left px-2 py-1.5 text-xs text-gray-700 hover:bg-white hover:text-violet-700 rounded disabled:opacity-60"
                            >
                              <span className="font-medium">Для Ozon</span>
                              <span className="text-[10px] text-gray-400 ml-1">{downloadingKey === `g-${g.id}-ozon` ? "готовим…" : "1080 × 1440"}</span>
                            </button>
                          </div>
                        )}
                        {/* Переделать — для готовых карточек тоже, на случай если хочется попробовать ещё раз */}
                        {g.status === "done" && (
                          <button onClick={() => regenerate(g)} disabled={regeneratingFor === g.id}
                                  className="w-full mt-1.5 py-1.5 text-[11px] text-gray-500 hover:text-violet-700 hover:bg-violet-50 rounded-lg font-medium disabled:opacity-50 flex items-center justify-center gap-1">
                            {regeneratingFor === g.id ? <><div className="animate-spin w-2.5 h-2.5 border border-violet-600 border-t-transparent rounded-full" /> Перегенерируем…</> : "↻ Переделать"}
                          </button>
                        )}
                      </>
                    )}
                    {g.status === "needs_review" && (
                      <div className="mt-2 space-y-2">
                        {g.qc_details && (
                          <details className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                            <summary className="cursor-pointer text-[11px] font-medium text-amber-700">QC-детали</summary>
                            <pre className="mt-1 text-[10px] text-gray-600 whitespace-pre-wrap font-sans">{g.qc_details}</pre>
                          </details>
                        )}
                        <div className="flex gap-2">
                          <button onClick={() => acceptGen(g.id)} disabled={regeneratingFor === g.id}
                                  className="flex-1 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-medium disabled:opacity-50">✓ Принять</button>
                          <button onClick={() => regenerate(g)} disabled={regeneratingFor === g.id}
                                  className="flex-1 py-1.5 border-2 border-violet-300 text-violet-700 hover:bg-violet-50 rounded-lg text-xs font-medium disabled:opacity-50 flex items-center justify-center gap-1">
                            {regeneratingFor === g.id ? <><div className="animate-spin w-2.5 h-2.5 border border-violet-600 border-t-transparent rounded-full" /> Запускаем</> : "↻ Перегенерировать"}
                          </button>
                        </div>
                      </div>
                    )}
                    {g.status === "failed" && (
                      <div className="mt-2 space-y-2">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-2.5">
                          <div className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-red-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            <p className="text-[11px] text-red-800 leading-snug">
                              {g.qc_details || "Не удалось сгенерировать. Попробуй ещё раз — обычно это временный сбой AI."}
                            </p>
                          </div>
                        </div>
                        <button onClick={() => regenerate(g)} disabled={regeneratingFor === g.id}
                                className="w-full py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-medium disabled:opacity-50 flex items-center justify-center gap-1.5">
                          {regeneratingFor === g.id ? <><div className="animate-spin w-2.5 h-2.5 border border-white border-t-transparent rounded-full" /> Запускаем</> : <><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9c2.52 0 4.93 1.06 6.64 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9c-2.52 0-4.93-1.06-6.64-2.74L3 16"/><path d="M3 21v-5h5"/></svg>Попробовать снова</>}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          )}
        </div>
      </div>

      <KitPickerModal
        open={kitPickerOpen}
        onClose={() => setKitPickerOpen(false)}
        starters={starters}
        onPick={setBrandKitFromStarter}
        loading={kitLoading}
      />
    </div>
  );
}

function Section({ step, title, hint, children }: { step: string; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4">
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="font-semibold text-sm">{title}</h3>
        <span className="text-xs text-gray-300 font-medium">{step}</span>
      </div>
      {hint && <p className="text-xs text-gray-400 mb-2">{hint}</p>}
      {children}
    </div>
  );
}

// ─── Brand Kit виджет + KitPicker модалка ──────────────────────────────────
function BrandKitWidget({
  brandKit, onAuto, onPick, onReference, loading, hasUploads,
}: {
  brandKit: BrandKit | null;
  onAuto: () => void;
  onPick: () => void;
  onReference: (file: File) => void;
  loading: boolean;
  hasUploads: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Какую именно кнопку юзер нажал последней — нужно, чтобы spinner крутился
  // только на ней, а не на всех трёх. Сбрасываем когда loading заканчивается.
  const [pendingMode, setPendingMode] = useState<"preset" | "reference" | "ai" | null>(null);
  useEffect(() => { if (!loading) setPendingMode(null); }, [loading]);

  const handleFile = (file: File | null) => {
    if (!file) { setPendingMode(null); return; }
    onReference(file);
  };

  // Какой режим был использован для текущего kit'а — для подсветки активной кнопки
  // (так же как Flash/Pro переключатель — выбранное состояние подсвечено).
  const meta = brandKit?._meta || {};
  const activeMode: "preset" | "reference" | "ai" | null =
    !brandKit ? null
    : meta.mode === "ai_freeform" ? "ai"
    : meta.from_reference ? "reference"
    : meta.auto_generated ? "ai"
    : meta.starter_preset ? "preset"
    : null;

  // Клик по «Шаблон» — сразу открывает модалку. Клик по «Референс» — сразу file picker.
  // Клик по «AI» — сразу запускает подбор. Никаких отдельных кнопок-действий.
  const handleClick = (key: "preset" | "reference" | "ai") => {
    if (loading) return;
    if (key === "preset") {
      setPendingMode("preset");
      onPick();
    } else if (key === "reference") {
      if (!hasUploads) {
        toast.info("Сначала загрузи фото товара — AI смотрит и на него тоже.");
        return;
      }
      setPendingMode("reference");
      fileInputRef.current?.click();
    } else if (key === "ai") {
      if (!hasUploads) {
        toast.info("Сначала загрузи фото товара — AI смотрит на него, чтобы подобрать стиль.");
        return;
      }
      setPendingMode("ai");
      onAuto();
    }
  };

  // Подсказка справа от заголовка — что текущий стиль (как "быстрее, дешевле" у Модели)
  const presetLabel = STARTER_LABELS[meta.starter_preset || ""] || "";
  const hintRight = !brandKit
    ? "не выбран"
    : meta.mode === "ai_freeform" ? `авто · ${presetLabel || "ИИ"}`
    : meta.from_reference ? "по референсу"
    : meta.auto_generated ? `авто · ${presetLabel}`
    : presetLabel;

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-700">Стиль карточки</p>
        <span className="text-[11px] text-gray-400 truncate ml-2">{hintRight}</span>
      </div>

      {/* hidden file input для режима «Референс» */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => handleFile(e.target.files?.[0] || null)}
      />

      {/* Сегментированный селектор — единый стиль с Flash/Pro и Тип контента.
          Подсказки всплывают: на десктопе через CSS-tooltip при наведении,
          на тач-устройствах — через нативный browser-tooltip при долгом тапе. */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-3">
        {([
          { key: "preset",    label: "Шаблон",   hint: "Преднастройки из каталога" },
          { key: "reference", label: "Референс", hint: "По фото-эталону" },
          { key: "ai",        label: "ИИ",       hint: "AI подберёт пресет под твоё фото" },
        ] as const).map(t => {
          const isActive = activeMode === t.key;
          const isSpinning = loading && pendingMode === t.key;
          return (
            <div key={t.key} className="flex-1 relative group">
              <button
                onClick={() => handleClick(t.key)}
                disabled={loading}
                title={t.hint}
                className={`w-full py-2 text-sm font-medium rounded-lg transition-all active:scale-[0.97] disabled:opacity-50 focus:outline-none ${
                  isActive
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-gray-600 [@media(hover:hover)]:hover:text-gray-900"
                }`}
              >
                {isSpinning
                  ? <span className="inline-block animate-spin w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full align-middle" />
                  : t.label
                }
              </button>
              {/* CSS-tooltip — появляется при hover на устройствах с реальной мышью */}
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-gray-900 text-white text-[10px] rounded-md whitespace-nowrap opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity z-10">
                {t.hint}
              </span>
            </div>
          );
        })}
      </div>

      {!hasUploads && (
        <p className="text-[10px] text-amber-600 -mt-1.5 mb-3">Загрузи фото товара — без него Референс и ИИ не запустятся</p>
      )}
    </>
  );
}

const STARTER_LABELS: Record<string, string> = {
  // 6 актуальных пресетов
  bare_typography:  "Чистая типографика",
  glass_card:       "Glass-карточка",
  bold_accent_caps: "Большой акцент",
  oversized_hero:   "Огромный заголовок",
  marketplace_pop:  "Маркетплейс-поп",
  industrial_tech:  "Тех-pill",
  custom:           "Кастом",
  // legacy — для существующих kit'ов с устаревшим _meta.starter_preset
  minimal_premium:    "Минимал-Премиум",
  clean_typography:   "Брендовый минимал",
  eco_natural:        "Эко / Крафт",
  tech_dark:          "Tech Dark",
  magazine_editorial: "Журнал",
  bento_grid:         "Bento-сетка",
  glass_modern:       "Стекло-Модерн",
  frosted_clean:      "Прозрачные круги",
  outline_minimal:    "Контурный минимал",
  bare_minimal:       "Без декораций",
};

const MOOD_LABELS: Record<string, string> = {
  "calm-minimal":      "спокойный минимал",
  "bold-marketplace":  "конверсионный",
  "natural-craft":     "крафт/эко",
  "tech-futuristic":   "технологичный",
  "editorial":         "журнальный",
  "playful":           "дружелюбный",
  "modern-glass":      "стекло-модерн",
  "clean-airy":        "лёгкий чистый",
  "fashion-oversized": "fashion / oversized",
  "tech-spec":         "тех-spec",
  "petfood-bold":      "FMCG-bold",
};

function KitPickerModal({
  open, onClose, starters, onPick, loading,
}: {
  open: boolean;
  onClose: () => void;
  starters: { key: string; label: string; tagline: string; kit: BrandKit; preview_url?: string }[];
  onPick: (key: string) => void;
  loading: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="bg-white rounded-2xl max-w-3xl w-full p-5 max-h-[88vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-base">Стартовый Brand Kit</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">✕</button>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Выбери пресет — после этого можешь дотюнить руками или попросить AI подобрать индивидуально.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {starters.map(s => {
            const previewSrc = s.preview_url ? `${API_URL}${s.preview_url}` : null;
            return (
              <button
                key={s.key}
                onClick={() => onPick(s.key)}
                disabled={loading}
                className="group flex flex-col items-stretch gap-0 rounded-xl border-2 border-gray-100 hover:border-violet-400 hover:shadow-md text-left disabled:opacity-50 transition-all overflow-hidden bg-white"
              >
                {/* Превью-картинка стиля */}
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                  {previewSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={previewSrc}
                      alt={s.label}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-3xl">🎨</div>
                  )}
                </div>
                {/* Подпись */}
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{s.label}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">{s.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
