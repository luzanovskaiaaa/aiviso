"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

/**
 * До/После — drag разделитель между двумя картинками.
 * Клиппинг через clip-path на абсолютно-позиционированный before-слой.
 */
export default function BeforeAfterSlider({
  before, after,
  beforeLabel = "До",
  afterLabel = "После",
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // % разделителя от левого края
  const draggingRef = useRef(false);

  const updateFromEvent = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      updateFromEvent(e.clientX);
    };
    const onUp = () => { draggingRef.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    updateFromEvent(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-xl bg-gray-100 touch-none cursor-ew-resize ${className}`}
      onPointerDown={onPointerDown}
      role="img"
      aria-label="Сравнение до и после"
    >
      {/* Базовый слой — После */}
      <img
        src={after}
        alt=""
        className="block w-full h-auto pointer-events-none"
        draggable={false}
      />

      {/* Верхний слой — До (clip-path inset справа = 100 - pos) */}
      <img
        src={before}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* Разделитель */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)] pointer-events-none"
        style={{ left: `calc(${pos}% - 1px)` }}
        aria-hidden="true"
      />
      {/* Хэндл */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-none"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 3 12 9 18"/>
          <polyline points="15 6 21 12 15 18"/>
        </svg>
      </div>

      {/* Лейблы */}
      <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wider font-semibold bg-black/60 text-white px-1.5 py-0.5 rounded pointer-events-none">{beforeLabel}</span>
      <span className="absolute top-2 right-2 text-[10px] uppercase tracking-wider font-semibold bg-black/60 text-white px-1.5 py-0.5 rounded pointer-events-none">{afterLabel}</span>
    </div>
  );
}
