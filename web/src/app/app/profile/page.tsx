"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Перенесли ЛК с /app/profile на /app/account — этот URL теперь редиректит.
export default function ProfileRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/app/account");
  }, [router]);
  return (
    <div className="min-h-screen flex items-center justify-center text-sm text-gray-400">
      Перенаправляем в Личный кабинет…
    </div>
  );
}
