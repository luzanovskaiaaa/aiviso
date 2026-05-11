"use client";
import { useEffect } from "react";

/**
 * Scroll-reveal — добавляет класс .av-in элементам с .av-reveal,
 * когда они попадают в viewport. Аналог data-reveal из исходного дизайна.
 */
export default function LandingReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".av-reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("av-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
