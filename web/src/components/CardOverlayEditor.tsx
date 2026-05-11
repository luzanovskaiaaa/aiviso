"use client";
import { useEffect, useRef, useState } from "react";
import { toBlob } from "html-to-image";

export interface UtpItem {
  icon: string;
  text: string;
  /** позиции внутри overlay-блока каждой строки УТП — иконка перетаскивается отдельно от текста */
  iconDx?: number;
  iconDy?: number;
}

export interface OverlayConfig {
  titleX: number; // % от ширины кадра (центр блока)
  titleY: number; // % от высоты кадра
  utpX: number;
  utpY: number;
  font: FontKey;
  titleSize: number; // px
  utpSize: number; // px
  titleColor: string;
  pillBg: string;
  pillText: string;
  // Размер/пропорции плашек (доба­вили — раньше было фиксировано)
  titleWidth: number; // % от ширины кадра (max-width плашки заголовка)
  utpWidth: number; // % от ширины кадра (max-width плашек УТП)
  titlePadX: number; // px
  titlePadY: number; // px
  utpPadX: number; // px
  utpPadY: number; // px
  pillRadius: number; // px (border-radius)
}

export type FontKey = "inter" | "manrope" | "onest" | "montserrat" | "unbounded";

const FONTS: { key: FontKey; label: string; cssVar: string }[] = [
  { key: "inter", label: "Inter (универсальный)", cssVar: "var(--font-inter)" },
  { key: "manrope", label: "Manrope (модерн)", cssVar: "var(--font-manrope)" },
  { key: "onest", label: "Onest (хорошая кириллица)", cssVar: "var(--font-onest)" },
  { key: "montserrat", label: "Montserrat (классика)", cssVar: "var(--font-montserrat)" },
  { key: "unbounded", label: "Unbounded (display, для заголовков)", cssVar: "var(--font-unbounded)" },
];

const DEFAULT_CONFIG: OverlayConfig = {
  titleX: 5,
  titleY: 4,
  utpX: 70,
  utpY: 28,
  font: "manrope",
  titleSize: 22,
  utpSize: 16,
  titleColor: "#1F2937",
  pillBg: "rgba(255,255,255,0.92)",
  pillText: "#1F2937",
  titleWidth: 55,
  utpWidth: 30,
  titlePadX: 16,
  titlePadY: 8,
  utpPadX: 10,
  utpPadY: 6,
  pillRadius: 16,
};

interface Props {
  imageSrc: string;
  initialTitle: string;
  initialUtp: UtpItem[];
  /** Подпись на кнопке скачивания, опц. */
  downloadName?: string;
}

/**
 * Редактор оверлея карточки.
 * - Заголовок и блок УТП — два независимых перетаскиваемых "слоя" поверх картинки.
 * - Каждая иконка УТП тоже перетаскивается отдельно от текста (мини-DnD внутри строки).
 * - Тексты редактируются inline (contentEditable).
 * - Скачивание PNG — через html-to-image (DOM → canvas → png).
 */
export default function CardOverlayEditor({
  imageSrc,
  initialTitle,
  initialUtp,
  downloadName = "card.png",
}: Props) {
  const [title, setTitle] = useState(initialTitle);
  const [utp, setUtp] = useState<UtpItem[]>(initialUtp.map(u => ({ ...u, iconDx: u.iconDx ?? 0, iconDy: u.iconDy ?? 0 })));
  const [config, setConfig] = useState<OverlayConfig>(DEFAULT_CONFIG);
  const [downloading, setDownloading] = useState(false);
  const [showSettings, setShowSettings] = useState(true);

  const frameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const utpRef = useRef<HTMLDivElement>(null);

  // sync если props поменялись (сменили генерацию)
  useEffect(() => { setTitle(initialTitle); }, [initialTitle]);
  useEffect(() => { setUtp(initialUtp.map(u => ({ ...u, iconDx: u.iconDx ?? 0, iconDy: u.iconDy ?? 0 }))); }, [initialUtp]);

  const fontStyle = (key: FontKey) => ({
    fontFamily: FONTS.find(f => f.key === key)?.cssVar,
  });

  // ── DnD блоков (заголовок / УТП) ──
  const startBlockDrag = (kind: "title" | "utp") => (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).isContentEditable) return; // не таскаем при редактировании текста
    e.preventDefault();
    const frame = frameRef.current; if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const startX = e.clientX, startY = e.clientY;
    const start = kind === "title"
      ? { x: config.titleX, y: config.titleY }
      : { x: config.utpX, y: config.utpY };

    const move = (ev: PointerEvent) => {
      const dxPct = ((ev.clientX - startX) / rect.width) * 100;
      const dyPct = ((ev.clientY - startY) / rect.height) * 100;
      const nx = Math.max(0, Math.min(95, start.x + dxPct));
      const ny = Math.max(0, Math.min(95, start.y + dyPct));
      setConfig(c => kind === "title" ? { ...c, titleX: nx, titleY: ny } : { ...c, utpX: nx, utpY: ny });
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  // ── DnD отдельной иконки внутри строки УТП ──
  const startIconDrag = (idx: number) => (e: React.PointerEvent) => {
    e.preventDefault(); e.stopPropagation();
    const startX = e.clientX, startY = e.clientY;
    const startDx = utp[idx].iconDx ?? 0, startDy = utp[idx].iconDy ?? 0;
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - startX, dy = ev.clientY - startY;
      setUtp(curr => curr.map((u, i) => i === idx ? { ...u, iconDx: startDx + dx, iconDy: startDy + dy } : u));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const updateUtpText = (idx: number, text: string) => {
    setUtp(curr => curr.map((u, i) => i === idx ? { ...u, text } : u));
  };
  const updateUtpIcon = (idx: number, icon: string) => {
    setUtp(curr => curr.map((u, i) => i === idx ? { ...u, icon } : u));
  };

  const handleDownload = async () => {
    if (!frameRef.current) return;
    setDownloading(true);
    try {
      const blob = await toBlob(frameRef.current, {
        cacheBust: true,
        pixelRatio: 2, // 2× для лучшего качества при 1200×1600
        skipFonts: false,
      });
      if (!blob) throw new Error("toBlob returned null");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = downloadName;
      link.href = url;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err) {
      console.error("download error:", err);
      alert("Не удалось собрать PNG. Попробуй ещё раз.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="space-y-3">
      {/* Тулбар */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <select
          value={config.font}
          onChange={(e) => setConfig(c => ({ ...c, font: e.target.value as FontKey }))}
          className="input-field text-sm py-1.5 px-2"
        >
          {FONTS.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
        </select>
        <button
          onClick={() => setShowSettings(s => !s)}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-xs"
        >
          {showSettings ? "Скрыть настройки" : "⚙ Размер/цвет"}
        </button>
        <span className="text-xs text-gray-400">Перетаскивай заголовок, УТП-блок и иконки по карточке</span>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="ml-auto px-4 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 flex items-center gap-2"
        >
          {downloading ? (
            <><div className="animate-spin w-3 h-3 border-2 border-white border-t-transparent rounded-full" /> Готовим PNG...</>
          ) : "↓ Скачать PNG"}
        </button>
      </div>

      {showSettings && (
        <div className="space-y-3 p-3 bg-gray-50 rounded-lg text-xs">
          {/* Блок Заголовок */}
          <div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-2">Заголовок</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <label className="flex flex-col gap-1">
                Размер шрифта
                <input type="range" min={14} max={56} value={config.titleSize}
                  onChange={e => setConfig(c => ({ ...c, titleSize: +e.target.value }))} />
                <span className="text-gray-400">{config.titleSize}px</span>
              </label>
              <label className="flex flex-col gap-1">
                Ширина рамки
                <input type="range" min={20} max={95} value={config.titleWidth}
                  onChange={e => setConfig(c => ({ ...c, titleWidth: +e.target.value }))} />
                <span className="text-gray-400">{config.titleWidth}%</span>
              </label>
              <label className="flex flex-col gap-1">
                Отступ ↔
                <input type="range" min={4} max={48} value={config.titlePadX}
                  onChange={e => setConfig(c => ({ ...c, titlePadX: +e.target.value }))} />
                <span className="text-gray-400">{config.titlePadX}px</span>
              </label>
              <label className="flex flex-col gap-1">
                Отступ ↕
                <input type="range" min={2} max={40} value={config.titlePadY}
                  onChange={e => setConfig(c => ({ ...c, titlePadY: +e.target.value }))} />
                <span className="text-gray-400">{config.titlePadY}px</span>
              </label>
            </div>
          </div>

          {/* Блок УТП */}
          <div>
            <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-2">УТП-плашки</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <label className="flex flex-col gap-1">
                Размер шрифта
                <input type="range" min={11} max={36} value={config.utpSize}
                  onChange={e => setConfig(c => ({ ...c, utpSize: +e.target.value }))} />
                <span className="text-gray-400">{config.utpSize}px</span>
              </label>
              <label className="flex flex-col gap-1">
                Ширина рамки
                <input type="range" min={15} max={70} value={config.utpWidth}
                  onChange={e => setConfig(c => ({ ...c, utpWidth: +e.target.value }))} />
                <span className="text-gray-400">{config.utpWidth}%</span>
              </label>
              <label className="flex flex-col gap-1">
                Отступ ↔
                <input type="range" min={4} max={32} value={config.utpPadX}
                  onChange={e => setConfig(c => ({ ...c, utpPadX: +e.target.value }))} />
                <span className="text-gray-400">{config.utpPadX}px</span>
              </label>
              <label className="flex flex-col gap-1">
                Отступ ↕
                <input type="range" min={2} max={24} value={config.utpPadY}
                  onChange={e => setConfig(c => ({ ...c, utpPadY: +e.target.value }))} />
                <span className="text-gray-400">{config.utpPadY}px</span>
              </label>
            </div>
          </div>

          {/* Общие */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-gray-200">
            <label className="flex flex-col gap-1">
              Скругление углов
              <input type="range" min={0} max={40} value={config.pillRadius}
                onChange={e => setConfig(c => ({ ...c, pillRadius: +e.target.value }))} />
              <span className="text-gray-400">{config.pillRadius}px</span>
            </label>
            <label className="flex flex-col gap-1">
              Цвет текста
              <input type="color" value={config.pillText}
                onChange={e => setConfig(c => ({ ...c, pillText: e.target.value, titleColor: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Фон плашки
              <input type="color" value={rgbaToHex(config.pillBg)}
                onChange={e => setConfig(c => ({ ...c, pillBg: hexToRgba(e.target.value, 0.92) }))} />
            </label>
          </div>
        </div>
      )}

      {/* Кадр с overlay'ями. Картинка диктует размер контейнера — никаких whitespace-полос. */}
      <div
        ref={frameRef}
        className="relative w-full mx-auto rounded-2xl overflow-hidden select-none"
        style={{ maxWidth: 600 }}
      >
        <img src={imageSrc} alt="generated" crossOrigin="anonymous" className="block w-full h-auto" />

        {/* Заголовок — draggable */}
        <div
          ref={titleRef}
          onPointerDown={startBlockDrag("title")}
          className="absolute cursor-move group"
          style={{
            left: `${config.titleX}%`,
            top: `${config.titleY}%`,
            maxWidth: `${config.titleWidth}%`,
          }}
        >
          <div
            className="shadow-sm backdrop-blur-sm"
            style={{
              ...fontStyle(config.font),
              background: config.pillBg,
              color: config.titleColor,
              fontSize: config.titleSize,
              fontWeight: 600,
              lineHeight: 1.2,
              padding: `${config.titlePadY}px ${config.titlePadX}px`,
              borderRadius: config.pillRadius,
            }}
          >
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setTitle((e.target as HTMLElement).innerText)}
              className="outline-none"
              style={{ display: "block" }}
            >
              {title || "«Заголовок карточки»"}
            </span>
          </div>
          <span className="absolute -top-2 -right-2 text-[10px] bg-violet-600 text-white px-1.5 rounded opacity-0 group-hover:opacity-100 transition">⇆ перетащи</span>
        </div>

        {/* УТП-блок — draggable + каждая иконка тоже draggable */}
        <div
          ref={utpRef}
          onPointerDown={startBlockDrag("utp")}
          className="absolute cursor-move space-y-1.5 group"
          style={{
            left: `${config.utpX}%`,
            top: `${config.utpY}%`,
            maxWidth: `${config.utpWidth}%`,
          }}
        >
          {utp.map((u, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 shadow-sm backdrop-blur-sm"
              style={{
                ...fontStyle(config.font),
                background: config.pillBg,
                color: config.pillText,
                fontSize: config.utpSize,
                lineHeight: 1.15,
                fontWeight: 500,
                padding: `${config.utpPadY}px ${config.utpPadX}px`,
                borderRadius: config.pillRadius,
              }}
            >
              {u.icon && (
                <span
                  onPointerDown={startIconDrag(i)}
                  className="cursor-grab active:cursor-grabbing inline-block leading-none"
                  style={{ transform: `translate(${u.iconDx ?? 0}px, ${u.iconDy ?? 0}px)`, fontSize: config.utpSize + 4 }}
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => updateUtpIcon(i, (e.target as HTMLElement).innerText)}
                >
                  {u.icon}
                </span>
              )}
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateUtpText(i, (e.target as HTMLElement).innerText)}
                className="outline-none"
              >
                {u.text}
              </span>
            </div>
          ))}
          <span className="absolute -top-2 -right-2 text-[10px] bg-violet-600 text-white px-1.5 rounded opacity-0 group-hover:opacity-100 transition">⇆</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center">
        Тексты редактируются — кликни и набирай. Иконки/блоки тащатся мышкой. PNG скачается ровно в том виде, который видишь.
      </p>
    </div>
  );
}

// ── helpers ──
function rgbaToHex(rgba: string): string {
  const m = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return "#FFFFFF";
  const [r, g, b] = [+m[1], +m[2], +m[3]];
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("").toUpperCase();
}
function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
