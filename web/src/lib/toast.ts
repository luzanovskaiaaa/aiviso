"use client";
/**
 * Минималистичная toast-система без зависимостей.
 *
 * Использование:
 *   import { toast, confirmDialog } from "@/lib/toast";
 *   toast.error("Не удалось сохранить");
 *   toast.success("Сохранено");
 *   if (await confirmDialog("Удалить это фото?")) { ... }
 *
 * Один экземпляр <ToastHost/> должен быть отрендерен на странице — он слушает
 * события через шину browser-event'ов и показывает плашки/модалки.
 *
 * Этот подход (event-bus, не Provider) позволяет вызывать toast/confirmDialog
 * из любого места без таскания хука по дереву компонентов.
 */

export type ToastKind = "error" | "success" | "info";

export interface ToastEvent {
  id: number;
  kind: ToastKind;
  message: string;
  ttl: number; // ms
}

export interface ConfirmRequest {
  id: number;
  message: string;
  resolve: (ok: boolean) => void;
}

const TOAST_EVENT = "aiviso-toast";
const CONFIRM_EVENT = "aiviso-confirm";

let _seq = 0;
function _nextId() { return ++_seq; }

function _emit<T>(name: string, detail: T) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<T>(name, { detail }));
}

export function _onToast(handler: (e: ToastEvent) => void) {
  if (typeof window === "undefined") return () => {};
  const fn = (e: Event) => handler((e as CustomEvent<ToastEvent>).detail);
  window.addEventListener(TOAST_EVENT, fn);
  return () => window.removeEventListener(TOAST_EVENT, fn);
}

export function _onConfirm(handler: (e: ConfirmRequest) => void) {
  if (typeof window === "undefined") return () => {};
  const fn = (e: Event) => handler((e as CustomEvent<ConfirmRequest>).detail);
  window.addEventListener(CONFIRM_EVENT, fn);
  return () => window.removeEventListener(CONFIRM_EVENT, fn);
}

export const toast = {
  error: (message: string, ttl = 5000) =>
    _emit<ToastEvent>(TOAST_EVENT, { id: _nextId(), kind: "error", message, ttl }),
  success: (message: string, ttl = 3500) =>
    _emit<ToastEvent>(TOAST_EVENT, { id: _nextId(), kind: "success", message, ttl }),
  info: (message: string, ttl = 4000) =>
    _emit<ToastEvent>(TOAST_EVENT, { id: _nextId(), kind: "info", message, ttl }),
};

export function confirmDialog(message: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    if (typeof window === "undefined") {
      // SSR — мы не должны такие вещи звать на сервере, но fallback на true.
      resolve(true);
      return;
    }
    _emit<ConfirmRequest>(CONFIRM_EVENT, { id: _nextId(), message, resolve });
  });
}
