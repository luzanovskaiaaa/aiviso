"use client";
/**
 * SeriesPackPanel v2 — комплект из 5 карточек с per-card редактированием.
 *
 * Двухэтапный воркфло:
 *   1) Юзер грузит фото слева → жмёт «🎨 Подобрать концепции»
 *      → POST /projects/{id}/research → 5 концепций (hero / utp×3 / macro)
 *   2) Юзер видит 5 редактируемых карточек: каждая со своим title, УТП и
 *      сценарием. Может править перед запуском.
 *   3) Жмёт «✨ Создать комплект» → PATCH сохраняет правки концепций →
 *      POST /generations/batch → 5 параллельных генераций.
 *
 * Стиль карточек (brand kit) — общий для всего комплекта. Ровно те же варианты
 * что в single-режиме: AI-автоподбор / 6 starter-пресетов / Референс по фото.
 */
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { api, SCENARIOS, CATEGORY_SCENARIO_ORDER } from "@/lib/api";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface UploadDTO { id: number; url: string }
interface Concept {
  role: string;        // "hero" | "utp" | "macro"
  title: string;       // hero: имя товара. utp: 2-3 слова — заголовок УТП. macro: 2-3 слова — что за деталь.
  subtitle?: string;   // только у hero — уточнение материала/типа
  utp_focus?: string;
  utp_primary?: string;
  utp_secondary?: string;
  bullets?: string[];  // только у utp: 2 коротких буллета поддерживающих заголовок УТП
  all_utps?: string[]; // только у hero: 3 УТП-заголовка (агрегат из utp-карточек) для overlay-инфографики
  scenario: string;
  scene_description?: string;
  icon: string;
}
interface Generation {
  id: number;
  scenario: string;
  status: string;
  qc_score?: number | null;
  result_paths?: string[] | null;
}
interface ProjectDTO {
  id: number;
  flow?: string;
  category: string;
  model: string;
  uploads?: UploadDTO[];
  upload_count: number;
  market_research?: string | null;
  concepts?: Concept[] | null;
  brand_kit?: any;
}

interface StarterKit {
  key: string;
  label: string;
  tagline: string;
  preview_url?: string;
}

const ROLE_LABELS: Record<string, string> = {
  hero: "Заглавная",
  utp: "УТП",
  macro: "Макро-деталь",
};

const ROLE_HINT: Record<string, string> = {
  hero:  "Главное фото товара + крупный заголовок",
  utp:   "Одно ключевое преимущество, разные ракурсы",
  macro: "Крупный план фактуры / материала",
};

export default function SeriesPackPanel({
  project,
  generations,
  refreshAll,
  mediaUrl,
  previewUrl,
  credits,
}: {
  project: ProjectDTO;
  generations: Generation[];
  refreshAll: () => Promise<void>;
  mediaUrl: (p: string) => string;
  previewUrl: (p: string) => string;
  credits: number;
}) {
  const router = useRouter();
  const [researchLoading, setResearchLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [compareFor, setCompareFor] = useState<number | null>(null);
  const [regeneratingFor, setRegeneratingFor] = useState<number | null>(null);
  const [publishChecking, setPublishChecking] = useState(false);

  // CTA «Опубликовать на маркетплейс» из результатов комплекта.
  // Если у юзера есть подключённый магазин → /app/projects/{id}/publish
  // Если нет → /app/marketplaces/connect (там инструкция как взять API).
  const goToPublishOrConnect = async () => {
    if (publishChecking) return;
    setPublishChecking(true);
    try {
      const { data } = await api.get<{ id: number; provider: string }[]>("/marketplaces").catch(() => ({ data: [] as any[] }));
      if (Array.isArray(data) && data.length > 0) {
        router.push(`/app/projects/${project.id}/publish`);
      } else {
        router.push("/app/marketplaces/connect");
      }
    } finally {
      setPublishChecking(false);
    }
  };

  // Brand kit — общий для всех 5 карточек комплекта. Сохраняется на projcet.brand_kit
  // через те же endpoints что использует single-режим. После save — refreshAll
  // подтянет обновлённый project с новым kit.
  const [starters, setStarters] = useState<StarterKit[]>([]);
  const [kitLoading, setKitLoading] = useState(false);
  const refInputRef = useRef<HTMLInputElement | null>(null);

  // Локальная копия concepts — чтобы юзер мог править перед запуском.
  const [editingConcepts, setEditingConcepts] = useState<Concept[]>([]);
  const [dirty, setDirty] = useState(false);

  // Загружаем список 6 starter-пресетов один раз.
  useEffect(() => {
    api.get<StarterKit[]>("/projects/_starters/brand-kits")
      .then(({ data }) => setStarters(data))
      .catch(() => {});
  }, []);

  // Синхронизация с project.concepts (когда research отработал или пришли новые данные).
  useEffect(() => {
    if (project.concepts && project.concepts.length > 0) {
      setEditingConcepts(project.concepts.map(c => ({ ...c })));
      setDirty(false);
    }
  }, [project.concepts]);

  // Текущий активный режим стиля — определяется по project.brand_kit._meta.
  const kitMeta: any = (project.brand_kit && project.brand_kit._meta) || {};
  const activeKitMode: "ai" | "preset" | "reference" | null =
    project.brand_kit
      ? (kitMeta.from_reference ? "reference"
        : kitMeta.starter_preset ? "preset"
        : kitMeta.auto_generated ? "ai"
        : "ai")
      : null;
  const activeStarterKey: string | null = kitMeta.starter_preset || null;

  const setBrandKitAuto = async () => {
    setKitLoading(true);
    setError(null);
    try {
      await api.post(`/projects/${project.id}/brand-kit/auto`);
      await refreshAll();
    } catch (err: any) {
      setError(err.response?.data?.detail || "AI-агент не справился");
    } finally { setKitLoading(false); }
  };

  const setBrandKitStarter = async (starterKey: string) => {
    setKitLoading(true);
    setError(null);
    try {
      await api.put(`/projects/${project.id}/brand-kit`, { starter: starterKey });
      await refreshAll();
    } catch (err: any) {
      setError(err.response?.data?.detail || "Ошибка применения пресета");
    } finally { setKitLoading(false); }
  };

  const setBrandKitFromReference = async (file: File) => {
    if (!hasUploads) { setError("Сначала загрузи фото товара слева"); return; }
    if (!file.type.startsWith("image/")) { setError("Референс должен быть картинкой"); return; }
    if (file.size > 12 * 1024 * 1024) { setError("Референс больше 12 МБ"); return; }
    setKitLoading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("reference", file);
      await api.post(`/projects/${project.id}/brand-kit/from-reference`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await refreshAll();
    } catch (err: any) {
      setError(err.response?.data?.detail || "AI-агент не справился с референсом");
    } finally { setKitLoading(false); }
  };

  const hasUploads = project.upload_count > 0;
  const hasConcepts = editingConcepts.length === 5;
  const perGenCost = project.model === "flash" ? 4 : 6;
  const packCost = perGenCost * 5;
  const enoughCredits = credits >= packCost;

  // Список сценариев для этой категории + расширения для macro/lifestyle/packshot,
  // которые нужны series-flow но могут отсутствовать в основном dropdown.
  const baseScenarios: string[] = CATEGORY_SCENARIO_ORDER[project.category] || ["clothing_packshot"];
  const seriesExtras: Record<string, string[]> = {
    clothing:    ["clothing_packshot", "clothing_lifestyle", "clothing_macro"],
    furniture:   ["furniture_packshot", "furniture_lifestyle", "furniture_macro"],
    cosmetics:   ["cosmetics_packshot", "cosmetics_lifestyle", "cosmetics_macro"],
    food:        ["food_packshot", "food_lifestyle", "food_macro"],
    electronics: ["electronics_packshot", "electronics_lifestyle", "electronics_macro"],
    other:       ["other_lifestyle"],
  };
  const categoryScenarios: string[] = Array.from(new Set([
    ...baseScenarios,
    ...(seriesExtras[project.category] || []),
  ]));
  // Лейблы для сценариев которых нет в SCENARIOS (legacy/hidden типы).
  const SCENARIO_FALLBACK_LABELS: Record<string, string> = {
    clothing_packshot:   "Packshot",
    clothing_lifestyle:  "Lifestyle",
    clothing_macro:      "🔍 Макро-деталь",
    furniture_packshot:  "Packshot",
    furniture_lifestyle: "Lifestyle",
    furniture_macro:     "🔍 Макро-деталь",
    cosmetics_packshot:  "Packshot",
    cosmetics_lifestyle: "Lifestyle",
    cosmetics_macro:     "🔍 Макро-деталь",
    food_packshot:       "Packshot",
    food_lifestyle:      "Lifestyle",
    food_macro:          "🔍 Макро-деталь",
    electronics_packshot:"Packshot",
    electronics_lifestyle:"Lifestyle",
    electronics_macro:   "🔍 Макро-деталь",
    other_lifestyle:     "Lifestyle",
  };
  const scenarioLabel = (key: string): string =>
    (SCENARIOS as any)[key]?.label || SCENARIO_FALLBACK_LABELS[key] || key;

  const loadConcepts = async () => {
    if (!hasUploads) {
      setError("Сначала загрузи фото товара слева");
      return;
    }
    setError(null);
    setResearchLoading(true);
    try {
      await api.post(`/projects/${project.id}/research`);
      await refreshAll();
    } catch (err: any) {
      setError(err.response?.data?.detail || "Не удалось подобрать концепции. Попробуй ещё раз.");
    } finally {
      setResearchLoading(false);
    }
  };

  const updateConcept = (idx: number, patch: Partial<Concept>) => {
    setEditingConcepts(prev => prev.map((c, i) => i === idx ? { ...c, ...patch } : c));
    setDirty(true);
  };

  const startPack = async () => {
    if (!hasUploads) { setError("Сначала загрузи фото товара слева"); return; }
    if (!hasConcepts) { setError("Сначала подбери концепции"); return; }
    if (!enoughCredits) { setError(`Нужно ${packCost} кредитов (есть ${credits})`); return; }
    setError(null);
    setCreating(true);
    try {
      // Перед запуском: синхронизируем hero.all_utps с заголовками utp-карточек,
      // чтобы Banana нарисовала на hero те же 3 УТП что в комплекте.
      const utpTitles = editingConcepts.filter(c => c.role === "utp").map(c => c.title || "").filter(Boolean);
      const synced = editingConcepts.map(c => c.role === "hero" ? { ...c, all_utps: utpTitles } : c);
      // Если юзер правил концепции — сохраняем их перед запуском.
      if (dirty || JSON.stringify(synced) !== JSON.stringify(editingConcepts)) {
        await api.patch(`/projects/${project.id}`, { concepts: synced });
        setDirty(false);
      }
      // Запускаем batch по всем 5 индексам (порядок hero/utp/utp/utp/macro).
      // card_style/brand_kit не передаём — бэкенд возьмёт project.brand_kit
      // (или AI-fallback если его ещё нет).
      await api.post(`/projects/${project.id}/generations/batch`, {
        concept_indices: [0, 1, 2, 3, 4],
        with_icons: true,
      });
      await refreshAll();
    } catch (err: any) {
      setError(err.response?.data?.detail || "Не удалось запустить комплект.");
    } finally {
      setCreating(false);
    }
  };

  const regenerateOne = async (gen: Generation, conceptIdx: number) => {
    setRegeneratingFor(gen.id);
    try {
      const c = editingConcepts[conceptIdx];
      const titleArg = c.subtitle ? `${c.title}\n${c.subtitle}` : c.title;
      const utp = [c.utp_primary, c.utp_secondary].filter(Boolean) as string[];
      await api.post(`/projects/${project.id}/generations`, {
        scenario: c.scenario,
        scene_description: c.scene_description || "",
        title: titleArg || null,
        utp: utp.length ? utp : null,
        with_icons: true,
        // brand_kit/card_style не передаём — бэк возьмёт project.brand_kit.
      });
      await refreshAll();
    } catch (err: any) {
      setError(err.response?.data?.detail || "Не удалось перегенерировать.");
    } finally {
      setRegeneratingFor(null);
    }
  };

  const downloadAsBlob = async (gen: Generation) => {
    if (!gen.result_paths?.[0]) return;
    try {
      const url = mediaUrl(gen.result_paths[0]);
      const resp = await fetch(url, { credentials: "omit" });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const blob = await resp.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `aiviso_${project.id}_${gen.id}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(mediaUrl(gen.result_paths[0]), "_blank");
    }
  };

  // Маппим generation к concept по порядку. БЭК отдаёт generations отсортированными
  // по created_at DESC (свежие первыми). В batch их создают в порядке concepts:
  // hero (1-я) → utp×3 → macro (5-я). После DESC — массив: [macro, utp3, utp2, utp1, hero, ...старые...].
  // Берём первые 5 (наш свежий комплект) и инвертируем, чтобы idx=0 → hero, idx=4 → macro.
  const getGenForIdx = (idx: number): Generation | null => {
    if (generations.length < 5) return null;
    const pack = generations.slice(0, 5).slice().reverse();
    return pack[idx] || null;
  };

  // ────────────────────────────────────────────────────────────────────
  // RENDER — brutalist style единый с лендингом aiviso.ru
  // ────────────────────────────────────────────────────────────────────

  // Шаг 1: фото нет → промпт
  if (!hasUploads) {
    return (
      <div
        className="rounded-[22px] p-6 sm:p-8 relative overflow-hidden"
        style={{
          background: "var(--av-paper)",
          border: "1.5px solid var(--av-ink)",
          boxShadow: "var(--av-shadow-brut)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 50% at 20% 10%, rgba(124,58,237,.08), transparent 60%)" }}
        />
        <div className="relative">
          <span className="av-chip av-chip-accent mb-4">КОМПЛЕКТ СЕРИИ</span>
          <h2
            className="mt-3"
            style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}
          >
            5 карточек <span style={{ fontStyle: "italic", color: "var(--av-accent)" }}>одним заходом</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--av-muted)" }}>
            Один товар, единый стиль, разные смыслы: hero · 3×УТП · макро-деталь.
          </p>
          <div
            className="mt-5 rounded-xl p-3 text-sm"
            style={{ background: "#FFF7ED", border: "1.5px solid #F59E0B", color: "#9A3412" }}
          >
            ← Слева загрузи 1-3 фото товара, потом я подберу концепции.
          </div>
        </div>
      </div>
    );
  }

  // Шаг 2: фото есть, концепций нет → кнопка «Подобрать»
  if (!hasConcepts) {
    return (
      <div
        className="rounded-[22px] p-6 sm:p-8 relative overflow-hidden"
        style={{
          background: "var(--av-paper)",
          border: "1.5px solid var(--av-ink)",
          boxShadow: "var(--av-shadow-brut)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 50% at 80% 20%, rgba(124,58,237,.10), transparent 60%)" }}
        />
        <div className="relative">
          <span className="av-chip av-chip-accent mb-4">КОМПЛЕКТ СЕРИИ</span>
          <h2
            className="mt-3"
            style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.0, textWrap: "balance" } as React.CSSProperties}
          >
            Подберём 5 концепций <span style={{ fontStyle: "italic", color: "var(--av-accent)" }}>под твой товар</span>
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: "var(--av-muted)" }}>
            AI смотрит на фото и предлагает: 1 заглавную, 3 разных УТП и 1 макро-деталь.
            Каждую карточку правишь перед генерацией.
          </p>
          {error && (
            <div className="mt-4 text-xs rounded-lg p-3" style={{ background: "#FEE2E2", border: "1.5px solid #DC2626", color: "#991B1B" }}>{error}</div>
          )}
          <button
            onClick={loadConcepts}
            disabled={researchLoading}
            className="av-btn av-btn-accent mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {researchLoading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Анализирую… ~10 сек
              </>
            ) : (
              <>🎨 Подобрать концепции <span className="av-btn-arrow">→</span></>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Шаг 3: концепции есть → редактируемая сетка + кнопка «Создать комплект»
  return (
    <div className="space-y-5 pb-24">
      {/* Header — brutalist: chip + Bricolage display + brand kit pills */}
      <div
        className="relative overflow-hidden rounded-[22px] p-5 sm:p-7"
        style={{
          background: "var(--av-paper)",
          border: "1.5px solid var(--av-ink)",
          boxShadow: "var(--av-shadow-brut)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(50% 40% at 90% 10%, rgba(124,58,237,.10), transparent 60%)" }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="av-chip av-chip-accent">КОМПЛЕКТ СЕРИИ</span>
            {dirty && (
              <span className="av-chip" style={{ background: "#FEF3C7", borderColor: "var(--av-ink)" }}>
                Несохранённые правки
              </span>
            )}
          </div>
          <h2
            className="mt-3"
            style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}
          >
            5 карточек <span style={{ fontStyle: "italic", color: "var(--av-accent)" }}>одним заходом</span>
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--av-muted)", maxWidth: 540 }}>
            Один товар, единый стиль, разные смыслы. Поправь любую карточку — и жми «Создать комплект» внизу.
          </p>

          {/* Стиль карточек: chip-row */}
          <div className="mt-5">
            <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
              <span className="av-eyebrow" style={{ fontSize: 11 }}>
                Стиль карточек {kitLoading && <span style={{ color: "var(--av-accent)", marginLeft: 6 }}>— применяю...</span>}
              </span>
              <button
                onClick={loadConcepts}
                disabled={researchLoading}
                className="text-xs disabled:opacity-50"
                style={{ color: "var(--av-muted)", textDecoration: "underline" }}
                title="Перегенерировать концепции через AI"
              >
                {researchLoading ? "..." : "↻ заново подобрать концепции"}
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <KitPill
                label="🪄 ИИ"
                active={activeKitMode === "ai"}
                disabled={kitLoading}
                onClick={setBrandKitAuto}
                title="ИИ выберет пресет под товар автоматически"
              />
              {starters.map(s => (
                <KitPill
                  key={s.key}
                  label={s.label}
                  active={activeKitMode === "preset" && activeStarterKey === s.key}
                  disabled={kitLoading}
                  onClick={() => setBrandKitStarter(s.key)}
                  title={s.tagline}
                />
              ))}
              <KitPill
                label="📎 Референс"
                active={activeKitMode === "reference"}
                disabled={kitLoading}
                onClick={() => refInputRef.current?.click()}
                title="Загрузи фото-референс — ИИ скопирует его стиль"
              />
              <input
                ref={refInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) setBrandKitFromReference(f);
                  e.target.value = "";
                }}
              />
            </div>

            {activeKitMode === "reference" && (
              <p className="mt-2 text-[11px]" style={{ color: "var(--av-accent-3)" }}>
                ✓ Стиль скопирован с твоего референс-фото. Все 5 карточек будут в этой стилистике.
              </p>
            )}
            {activeKitMode === "ai" && !activeStarterKey && (
              <p className="mt-2 text-[11px]" style={{ color: "var(--av-muted)" }}>
                ИИ подберёт стиль один раз для всего комплекта — все 5 карточек получатся в едином дизайне.
              </p>
            )}
          </div>

          {error && (
            <div className="mt-4 text-xs rounded-lg p-3" style={{ background: "#FEE2E2", border: "1.5px solid #DC2626", color: "#991B1B" }}>
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Bento сетка 5 карточек — hero col-span-2, остальные по 1.
          Mobile: 1 колонка. Tablet (sm): 2 колонки, hero на всю ширину. Desktop (lg): 6 колонок. */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" } as React.CSSProperties}
      >
        <style>{`
          @media (min-width: 1280px) {
            .series-bento { grid-template-columns: repeat(6, minmax(0, 1fr)) !important; }
            .series-slot-hero { grid-column: span 2 / span 2; }
            .series-slot-utp, .series-slot-macro { grid-column: span 1 / span 1; }
          }
          @media (max-width: 640px) {
            .series-bento { grid-template-columns: 1fr !important; }
            .series-slot-hero, .series-slot-utp, .series-slot-macro { grid-column: span 1 / span 1; }
          }
          .series-bento { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .series-slot-hero { grid-column: span 2 / span 2; }
          .series-slot-utp, .series-slot-macro { grid-column: span 1 / span 1; }
        `}</style>
      </div>
      <div className="grid gap-3 series-bento">
        {editingConcepts.map((concept, idx) => {
          const gen = getGenForIdx(idx);
          const roleLabel = ROLE_LABELS[concept.role] || "Карточка";
          const utpIdx = concept.role === "utp"
            ? `${editingConcepts.slice(0, idx + 1).filter(c => c.role === "utp").length}`
            : "";
          const status = gen?.status || "idle";
          const ready = gen?.status === "done" && gen.result_paths && gen.result_paths.length > 0;
          const titleValue = concept.subtitle ? `${concept.title}\n${concept.subtitle}` : concept.title;
          const slotClass =
            concept.role === "hero"  ? "series-slot-hero"  :
            concept.role === "macro" ? "series-slot-macro" :
                                       "series-slot-utp";
          // Цвет accent у круглой иконки в header — циклически
          const slotAccent =
            concept.role === "hero"  ? "var(--av-accent)" :
            concept.role === "macro" ? "var(--av-accent-3)" :
            ["var(--av-accent)", "var(--av-accent-2)", "var(--av-accent-3)"][editingConcepts.slice(0, idx).filter(c => c.role === "utp").length % 3];

          return (
            <div
              key={idx}
              className={`${slotClass} flex flex-col overflow-hidden`}
              style={{
                background: "var(--av-paper)",
                border: "1.5px solid var(--av-ink)",
                borderRadius: 22,
                boxShadow: "var(--av-shadow-brut)",
              }}
            >
              {/* Header слота: круглая иконка + лейбл Bricolage italic + QC */}
              <div
                className="flex items-center justify-between gap-2 px-4 py-3"
                style={{ borderBottom: "1.5px solid var(--av-ink)", background: "var(--av-bg-cream)" }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="inline-flex items-center justify-center shrink-0"
                    style={{
                      width: 32, height: 32, borderRadius: 999,
                      background: slotAccent,
                      border: "1.5px solid var(--av-ink)",
                      fontSize: 16,
                    }}
                  >
                    {concept.icon || (concept.role === "macro" ? "🔍" : concept.role === "hero" ? "✨" : "💡")}
                  </span>
                  <span
                    className="truncate"
                    style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}
                  >
                    {roleLabel}
                    {utpIdx && (
                      <span style={{ fontStyle: "italic", color: slotAccent, marginLeft: 4 }}>№{utpIdx}</span>
                    )}
                  </span>
                </div>
                {gen?.qc_score != null && (
                  <span
                    className="shrink-0"
                    style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: ".06em",
                      padding: "4px 8px", borderRadius: 6,
                      background: gen.qc_score >= 70 ? "#10B981" : "#F59E0B",
                      color: "#fff",
                    }}
                  >
                    QC {gen.qc_score.toFixed(0)}
                  </span>
                )}
              </div>

              {/* Превью */}
              <div
                className="relative"
                style={{
                  aspectRatio: "3/4",
                  background: "linear-gradient(135deg, #C4B5FD 0%, #7C3AED 100%)",
                }}
              >
                {ready && gen!.result_paths![0] ? (
                  compareFor === gen!.id && project.uploads && project.uploads.length > 0 ? (
                    <BeforeAfterSlider before={mediaUrl(project.uploads[0].url)} after={mediaUrl(gen!.result_paths![0])} />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={previewUrl(gen!.result_paths![0])}
                      alt={roleLabel}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const el = e.currentTarget;
                        const fallback = mediaUrl(gen!.result_paths![0]);
                        if (el.src !== fallback) el.src = fallback;
                      }}
                    />
                  )
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                    {status === "processing" || status === "pending" ? (
                      <>
                        <div className="animate-spin w-7 h-7 border-2 border-white border-t-transparent rounded-full mb-2" />
                        <div className="text-xs font-bold text-white tracking-wide">ГЕНЕРИРУЮ…</div>
                      </>
                    ) : status === "failed" ? (
                      <div className="text-xs text-white font-bold">⚠ ОШИБКА</div>
                    ) : (
                      <>
                        <div
                          className="text-white"
                          style={{ fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 18, fontStyle: "italic", letterSpacing: "-0.02em" }}
                        >
                          {roleLabel}{utpIdx && ` №${utpIdx}`}
                        </div>
                        <div className="text-[11px] text-white/80 mt-1.5 leading-snug max-w-[160px]">
                          {ROLE_HINT[concept.role]}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Per-card editable fields */}
              <div className="p-4 flex-1 flex flex-col gap-3">
                {concept.role === "hero" && (
                  <>
                    <Field label="Заголовок товара">
                      <textarea
                        value={titleValue}
                        rows={2}
                        onChange={(e) => {
                          const lines = e.target.value.split("\n");
                          updateConcept(idx, { title: (lines[0] || "").slice(0, 80), subtitle: (lines[1] || "").slice(0, 80) });
                        }}
                        placeholder={"Имя товара (2-3 слова)\nПодзаголовок (опционально)"}
                        className="brut-input resize-none leading-snug"
                      />
                    </Field>
                    <Field label="3 УТП на карточке">
                      <div
                        className="text-[11px] leading-snug px-3 py-2"
                        style={{ background: "var(--av-bg)", border: "1.5px solid var(--av-ink)", borderRadius: 12 }}
                      >
                        {(() => {
                          const utpTitles = editingConcepts.filter(c => c.role === "utp").map(c => c.title || "—");
                          return utpTitles.length
                            ? utpTitles.map((t, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                  <span style={{ width: 14, height: 14, borderRadius: 999, background: "var(--av-accent)", color: "#fff", fontSize: 9, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                                  {t}
                                </div>
                              ))
                            : <div className="text-gray-400">Заполни заголовки УТП в карточках ниже →</div>;
                        })()}
                      </div>
                    </Field>
                  </>
                )}

                {concept.role === "utp" && (
                  <>
                    <Field label="Заголовок УТП (2-3 слова)">
                      <input
                        type="text"
                        value={concept.title || ""}
                        onChange={(e) => updateConcept(idx, { title: e.target.value.slice(0, 60), utp_primary: e.target.value.slice(0, 60), utp_focus: e.target.value.slice(0, 60) })}
                        placeholder="Массив дуба"
                        className="brut-input font-semibold"
                      />
                    </Field>
                    <Field label="Раскрытие (2 буллета)">
                      <div className="flex flex-col gap-1.5">
                        {[0, 1].map(bIdx => {
                          const bullets = concept.bullets || [];
                          return (
                            <input
                              key={bIdx}
                              type="text"
                              value={bullets[bIdx] || ""}
                              onChange={(e) => {
                                const next = [...(concept.bullets || ["", ""])];
                                while (next.length < 2) next.push("");
                                next[bIdx] = e.target.value.slice(0, 30);
                                updateConcept(idx, { bullets: next.filter((_, i) => i < 2) });
                              }}
                              placeholder={bIdx === 0 ? "без шпона" : "100% дерево"}
                              className="brut-input"
                            />
                          );
                        })}
                      </div>
                    </Field>
                  </>
                )}

                {concept.role === "macro" && (
                  <Field label="Что показать крупно" hint="Сцена — крупный план фактуры/материала">
                    <input
                      type="text"
                      value={concept.title || ""}
                      onChange={(e) => updateConcept(idx, { title: e.target.value.slice(0, 60), utp_primary: e.target.value.slice(0, 60), utp_focus: e.target.value.slice(0, 60) })}
                      placeholder="Фактура дуба"
                      className="brut-input font-semibold"
                    />
                  </Field>
                )}

                <Field label="Как показать">
                  <select
                    value={concept.scenario}
                    onChange={(e) => updateConcept(idx, { scenario: e.target.value })}
                    className="brut-input bg-white"
                  >
                    {!categoryScenarios.includes(concept.scenario) && concept.scenario && (
                      <option value={concept.scenario}>{scenarioLabel(concept.scenario)} (текущий)</option>
                    )}
                    {categoryScenarios.map(scen => (
                      <option key={scen} value={scen}>{scenarioLabel(scen)}</option>
                    ))}
                  </select>
                </Field>

                {ready && (
                  <div className="mt-auto pt-3 flex flex-col gap-1.5" style={{ borderTop: "1.5px solid var(--av-ink)" }}>
                    {project.uploads && project.uploads.length > 0 && (
                      <button
                        onClick={() => setCompareFor(compareFor === gen!.id ? null : gen!.id)}
                        className="text-[11px] py-1 font-bold tracking-wide uppercase"
                        style={{ color: "var(--av-muted)" }}
                      >
                        {compareFor === gen!.id ? "Скрыть сравнение" : "Сравнить с оригиналом"}
                      </button>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => downloadAsBlob(gen!)}
                        className="text-xs py-2 font-bold transition"
                        style={{
                          background: "var(--av-paper)", border: "1.5px solid var(--av-ink)", borderRadius: 999,
                        }}
                      >
                        ↓ PNG
                      </button>
                      <button
                        onClick={() => regenerateOne(gen!, idx)}
                        disabled={regeneratingFor === gen!.id}
                        className="text-xs py-2 font-bold transition disabled:opacity-50"
                        style={{
                          background: "var(--av-ink)", color: "#fff", borderRadius: 999,
                        }}
                      >
                        {regeneratingFor === gen!.id ? "…" : "↻ Ещё раз"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Research summary — brutalist details */}
      {project.market_research && (
        <details
          className="text-xs"
          style={{
            background: "var(--av-paper)",
            border: "1.5px solid var(--av-ink)",
            borderRadius: 22,
            padding: 16,
            color: "var(--av-muted)",
          }}
        >
          <summary
            className="cursor-pointer"
            style={{ fontFamily: "var(--av-font-display)", fontWeight: 700, fontSize: 14, color: "var(--av-ink)" }}
          >
            📊 Анализ рынка от AI
          </summary>
          <p className="mt-2 leading-relaxed whitespace-pre-line">{project.market_research}</p>
        </details>
      )}

      {/* Sticky bottom CTA — две кнопки:
            • «Опубликовать на маркетплейс» — появляется когда хотя бы одна карточка готова
            • «Создать комплект» — основная кнопка запуска (или «Создать заново» если уже сгенерировано) */}
      <div
        className="fixed bottom-4 right-4 sm:right-6 z-40 flex flex-col items-end gap-2"
        style={{ pointerEvents: "auto" }}
      >
        {(() => {
          const anyCardReady = generations.some(
            g => g.status === "done" && g.result_paths && g.result_paths.length > 0
          );
          return anyCardReady ? (
            <button
              onClick={goToPublishOrConnect}
              disabled={publishChecking}
              className="av-btn av-btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ padding: "14px 22px", fontSize: 15, boxShadow: "6px 6px 0 0 var(--av-ink)" }}
              title="Опубликовать карточки на Wildberries или Ozon"
            >
              {publishChecking ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Открываю…
                </>
              ) : (
                <>
                  🛒 Опубликовать на маркетплейс
                  <span className="av-btn-arrow">→</span>
                </>
              )}
            </button>
          ) : null;
        })()}

        <button
          onClick={startPack}
          disabled={creating || !enoughCredits}
          className={`av-btn disabled:opacity-50 disabled:cursor-not-allowed ${
            generations.some(g => g.status === "done") ? "av-btn-secondary" : "av-btn-accent"
          }`}
          style={{
            padding: "14px 22px",
            fontSize: 15,
            boxShadow: generations.some(g => g.status === "done")
              ? "4px 4px 0 0 var(--av-ink)"
              : "6px 6px 0 0 var(--av-ink)",
          }}
        >
          {creating ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Запускаю…
            </>
          ) : generations.some(g => g.status === "done") ? (
            <>
              ↻ Пересоздать комплект
              <span style={{ background: "rgba(0,0,0,.08)", padding: "3px 8px", borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
                ×{packCost} кр.
              </span>
            </>
          ) : (
            <>
              ✨ Создать комплект
              <span style={{ background: "rgba(255,255,255,.25)", padding: "3px 8px", borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
                ×{packCost} кр.
              </span>
              <span className="av-btn-arrow">→</span>
            </>
          )}
        </button>
      </div>

      {/* Стили для brut-input — общий стиль input/textarea/select в карточках */}
      <style>{`
        .brut-input {
          width: 100%;
          padding: 8px 12px;
          font-size: 13px;
          background: var(--av-paper);
          border: 1.5px solid var(--av-ink);
          border-radius: 12px;
          outline: none;
          transition: box-shadow .15s, transform .15s;
          font-family: var(--av-font-text);
          color: var(--av-ink);
        }
        .brut-input:focus {
          box-shadow: 3px 3px 0 0 var(--av-accent);
          transform: translate(-1px, -1px);
        }
        .brut-input::placeholder { color: var(--av-muted); opacity: .7; }
      `}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Helpers — локальные мини-компоненты для UI
// ──────────────────────────────────────────────────────────────────────

function KitPill({ label, active, disabled, onClick, title }: {
  label: string; active: boolean; disabled?: boolean; onClick: () => void; title?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className="disabled:opacity-50 disabled:cursor-not-allowed transition"
      style={{
        padding: "7px 14px",
        borderRadius: 999,
        border: "1.5px solid var(--av-ink)",
        background: active ? "var(--av-accent)" : "var(--av-paper)",
        color: active ? "#fff" : "var(--av-ink)",
        fontSize: 12,
        fontWeight: 700,
        whiteSpace: "nowrap",
        boxShadow: active ? "3px 3px 0 0 var(--av-ink)" : "none",
      }}
    >
      {label}
    </button>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label
        className="block mb-1.5"
        style={{
          fontFamily: "var(--av-font-text)", fontSize: 10, fontWeight: 700,
          letterSpacing: ".14em", textTransform: "uppercase", color: "var(--av-ink-3)",
        }}
      >
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-[10px]" style={{ color: "var(--av-muted)" }}>{hint}</p>}
    </div>
  );
}
