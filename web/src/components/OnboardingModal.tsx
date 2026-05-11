"use client";
/**
 * OnboardingModal — приветственный тур.
 *
 * Защита от повторных показов в 2 слоя:
 *   1) Серверный флаг user.bot_state.onboarded — переживает чистку браузера
 *      и работает на разных устройствах. Источник истины.
 *   2) localStorage флаг — как кэш чтобы не делать GET /auth/me каждый раз.
 *
 * Чек-бокс «Больше не показывать» по умолчанию ВКЛЮЧЁН — простое закрытие
 * (крестик / Escape / Поехали) сразу запоминает выбор. Снять галочку можно
 * чтобы посмотреть тур ещё раз потом.
 */
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const STORAGE_KEY = "aiviso_onboarding_done_v1";
const TRIGGER_KEY = "aiviso_onboarding_trigger";

export function markOnboardingDone() {
  try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
}

export function triggerOnboarding() {
  try { localStorage.setItem(TRIGGER_KEY, "1"); } catch {}
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

interface Step {
  emoji: string;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    emoji: "📸",
    title: "Загружаешь фото товара",
    body: "Достаточно одного приличного кадра (даже на телефон). AI сам поймёт что это за товар, сохранит детали — пуговицы, фурнитуру, текстуру.",
  },
  {
    emoji: "🎬",
    title: "Выбираешь сценарий",
    body: "Студийное фото, в интерьере, на модели, использование, белый куб — для каждой категории свой набор. Сцену AI подберёт сам, можешь вмешаться текстом.",
  },
  {
    emoji: "✨",
    title: "Получаешь готовые кадры в нужных размерах",
    body: "Карточка 3:4 (900×1200) — стандарт WB и Ozon. С заголовком и УТП-плашками или чистое фото — на выбор.",
  },
  {
    emoji: "🧩",
    title: "Серия карточек — в одном проекте",
    body: "Хочешь линейку фото в едином стиле — делай их в одном проекте. AI один раз подбирает стиль (палитру, плашки, иконки), и все генерации выходят визуально согласованными. Для другого стиля — создай новый проект.",
  },
];

export default function OnboardingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [dontShow, setDontShow] = useState(true);  // по умолчанию ВКЛ
  const [serverChecked, setServerChecked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const triggered = localStorage.getItem(TRIGGER_KEY) === "1";
    const localDone = localStorage.getItem(STORAGE_KEY) === "1";

    // Если уже отмечено локально И не явно триггернуто — не дёргаем сервер, не показываем.
    if (localDone && !triggered) {
      setServerChecked(true);
      return;
    }

    // Иначе спрашиваем сервер — может на другом устройстве уже прошёл.
    api.get("/auth/me").then(({ data }) => {
      const serverDone = !!data.onboarded;
      // Триггер с регистрации перевешивает: даже если сервер говорит done, показать ещё раз
      // — это значит юзер только что зарегался и явно попросил показать.
      if (triggered) {
        try { localStorage.removeItem(TRIGGER_KEY); } catch {}
        setOpen(true);
        return;
      }
      if (serverDone) {
        markOnboardingDone();   // синхронизируем localStorage
      } else {
        setOpen(true);
      }
    }).catch(() => {
      // Если сервер недоступен — fallback на старое поведение (показать если localStorage пуст)
      if (!localDone) setOpen(true);
    }).finally(() => {
      setServerChecked(true);
    });
  }, []);

  const close = async () => {
    setOpen(false);
    if (dontShow) {
      markOnboardingDone();
      try { localStorage.removeItem(TRIGGER_KEY); } catch {}
      // Сохраняем на сервере чтобы не показывалось на других устройствах
      try { await api.post("/auth/me/onboarded"); } catch {}
    } else {
      // Если юзер снял галочку — оставляем триггер, при следующем заходе покажется снова
      triggerOnboarding();
    }
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else close();
  };

  if (!open || !serverChecked) return null;
  const current = STEPS[step];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Знакомство с Aiviso"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 17, 25, 0.55)",
        backdropFilter: "blur(2px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 24,
          maxWidth: 460,
          width: "100%",
          padding: "32px 28px 24px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        <button
          onClick={close}
          aria-label="Пропустить"
          style={{
            position: "absolute", top: 14, right: 14,
            background: "none", border: "none", cursor: "pointer",
            color: "#9ca3af", fontSize: 13, padding: 6,
          }}
        >
          Пропустить
        </button>

        {/* Прогресс */}
        <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
          {STEPS.map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                background: i <= step ? "#7c3aed" : "#e5e7eb",
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>

        <div style={{ fontSize: 56, marginBottom: 16, textAlign: "center" }} aria-hidden="true">{current.emoji}</div>

        <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.25, textAlign: "center" }}>
          {current.title}
        </h2>
        <p style={{ color: "#4b5563", margin: 0, lineHeight: 1.6, fontSize: 15, textAlign: "center" }}>
          {current.body}
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            disabled={step === 0}
            style={{
              padding: "10px 18px",
              border: "none",
              background: "none",
              color: step === 0 ? "#d1d5db" : "#6b7280",
              cursor: step === 0 ? "default" : "pointer",
              fontSize: 14,
            }}
          >
            ← Назад
          </button>
          <span style={{ fontSize: 12, color: "#9ca3af" }}>{step + 1} / {STEPS.length}</span>
          <button
            onClick={next}
            style={{
              padding: "12px 24px",
              background: "#7c3aed",
              color: "white",
              border: "none",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {step === STEPS.length - 1 ? "Поехали" : "Далее →"}
          </button>
        </div>

        {/* Чек-бокс «Больше не показывать» — по умолчанию ВКЛ */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid #f3f4f6",
            fontSize: 13,
            color: "#6b7280",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <input
            type="checkbox"
            checked={dontShow}
            onChange={(e) => setDontShow(e.target.checked)}
            style={{ width: 16, height: 16, accentColor: "#7c3aed", cursor: "pointer" }}
          />
          Больше не показывать
        </label>
      </div>
    </div>
  );
}
