"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthAvailable, setOauthAvailable] = useState({ yandex: false, vk: false });
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    api.get("/auth/oauth/status").then(({ data }) => setOauthAvailable(data)).catch(() => {});
  }, []);

  const startOAuth = async (provider: "yandex" | "vk") => {
    try {
      const { data } = await api.get(`/auth/oauth/${provider}/start`);
      sessionStorage.setItem("oauth_state", data.state);
      sessionStorage.setItem("oauth_provider", provider);
      window.location.href = data.authorize_url;
    } catch (err: any) {
      setError(err.response?.data?.detail || `Не удалось начать вход через ${provider}`);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (mode === "register" && !consent) {
      setError("Чтобы зарегистрироваться, нужно согласиться с условиями.");
      return;
    }
    setLoading(true);
    try {
      if (mode === "register") {
        const { data } = await api.post("/auth/register", form);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user_name", data.name);
        localStorage.setItem("user_credits", String(data.credits));
        try { localStorage.setItem("aiviso_onboarding_trigger", "1"); } catch {}
      } else {
        const params = new URLSearchParams({ username: form.email, password: form.password });
        const { data } = await api.post("/auth/login", params, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user_name", data.name);
        localStorage.setItem("user_credits", String(data.credits));
      }
      router.push("/app");
    } catch (err: any) {
      const d = err.response?.data?.detail;
      let msg = "Произошла ошибка";
      if (typeof d === "string") msg = d;
      else if (Array.isArray(d)) msg = d.map((e: any) => e.msg || JSON.stringify(e)).join("; ");
      else if (d) msg = JSON.stringify(d);
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--av-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 16px",
      position: "relative",
      fontFamily: "var(--av-font-text)",
    }}>
      {/* Soft radial wash */}
      <div className="av-bg-grid" />

      <div style={{ width: "100%", maxWidth: 460, position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <a href="/" style={{
          display: "inline-flex", alignItems: "baseline", gap: 6,
          fontFamily: "var(--av-font-display)", fontWeight: 800, fontSize: 32,
          letterSpacing: "-0.04em", color: "var(--av-ink)", textDecoration: "none",
          marginBottom: 24,
          justifyContent: "center", width: "100%",
        }}>
          aiviso
          <span style={{ width: 12, height: 12, background: "var(--av-accent)", border: "1.5px solid var(--av-ink)", borderRadius: 999, alignSelf: "center" }} />
        </a>

        {/* Card */}
        <div style={{
          background: "var(--av-paper)",
          border: "1.5px solid var(--av-ink)",
          borderRadius: 22,
          boxShadow: "var(--av-shadow-brut-lg)",
          padding: 32,
        }}>
          {/* Tab toggle */}
          <div style={{
            display: "flex", gap: 4,
            background: "var(--av-bg)", border: "1.5px solid var(--av-ink)",
            borderRadius: 12, padding: 4, marginBottom: 24,
          }}>
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "none",
                  background: mode === m ? "var(--av-accent)" : "transparent",
                  color: mode === m ? "#fff" : "var(--av-muted)",
                  fontFamily: "var(--av-font-display)",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  cursor: "pointer",
                  transition: "background 0.15s, color 0.15s",
                }}
              >
                {m === "login" ? "Войти" : "Регистрация"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {mode === "register" && (
              <input
                className="input-field"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            )}
            <input
              className="input-field"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              className="input-field"
              type="password"
              placeholder="Пароль (мин. 8 символов)"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            {error && (
              <div style={{
                padding: "10px 14px", borderRadius: 10,
                background: "#FEE2E2", border: "1.5px solid #DC2626",
                color: "#991B1B", fontSize: 13, fontWeight: 600,
              }}>{error}</div>
            )}

            {mode === "register" && (
              <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 12, color: "var(--av-muted)", lineHeight: 1.5, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ marginTop: 2, width: 16, height: 16, accentColor: "var(--av-accent)", flexShrink: 0, cursor: "pointer" }}
                  required
                />
                <span>
                  Я принимаю <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--av-accent)", textDecoration: "underline" }}>Публичную оферту</a>,{" "}
                  ознакомлен(а) с <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--av-accent)", textDecoration: "underline" }}>Политикой конфиденциальности</a>{" "}
                  и даю <a href="/consent" target="_blank" rel="noopener noreferrer" style={{ color: "var(--av-accent)", textDecoration: "underline" }}>согласие на обработку ПД</a>.
                </span>
              </label>
            )}

            <button
              type="submit"
              disabled={loading || (mode === "register" && !consent)}
              className="av-btn av-btn-accent"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px 22px",
                opacity: (loading || (mode === "register" && !consent)) ? 0.5 : 1,
                cursor: (loading || (mode === "register" && !consent)) ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Загрузка..." : mode === "login" ? "Войти" : "Создать аккаунт"}
            </button>
          </form>

          {mode === "register" && (
            <p style={{ textAlign: "center", fontSize: 13, color: "var(--av-muted)", marginTop: 16, lineHeight: 1.5 }}>
              <span style={{ color: "var(--av-accent)", fontWeight: 700 }}>10 кредитов</span> после подтверждения телефона
              <br />
              <span style={{ fontSize: 12 }}>
                Войди через Яндекс или VK — подтверждение автоматическое.<br />
                Иначе подключи Telegram-бота в ЛК после регистрации.
              </span>
            </p>
          )}

          {/* SSO providers */}
          {(oauthAvailable.yandex || oauthAvailable.vk) && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0" }}>
                <div style={{ flex: 1, height: 1.5, background: "var(--av-ink)" }} />
                <span style={{ fontSize: 11, color: "var(--av-muted)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>или</span>
                <div style={{ flex: 1, height: 1.5, background: "var(--av-ink)" }} />
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                {oauthAvailable.yandex && (
                  <button
                    onClick={() => startOAuth("yandex")}
                    type="button"
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1.5px solid var(--av-ink)", borderRadius: 999,
                      background: "var(--av-paper)",
                      fontFamily: "var(--av-font-text)", fontWeight: 700, fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      cursor: "pointer", transition: "transform 0.15s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px, -2px)"; e.currentTarget.style.boxShadow = "4px 4px 0 0 var(--av-ink)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                  >
                    <span style={{ width: 22, height: 22, borderRadius: "50%", color: "#fff", fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", background: "#FC3F1D" }}>Я</span>
                    Войти через Яндекс
                  </button>
                )}
                {oauthAvailable.vk && (
                  <button
                    onClick={() => startOAuth("vk")}
                    type="button"
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1.5px solid var(--av-ink)", borderRadius: 999,
                      background: "var(--av-paper)",
                      fontFamily: "var(--av-font-text)", fontWeight: 700, fontSize: 14,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      cursor: "pointer", transition: "transform 0.15s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px, -2px)"; e.currentTarget.style.boxShadow = "4px 4px 0 0 var(--av-ink)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                  >
                    <span style={{ width: 22, height: 22, borderRadius: 6, color: "#fff", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", background: "#0077FF" }}>VK</span>
                    Войти через VK
                  </button>
                )}
              </div>
              <p style={{ fontSize: 11, color: "var(--av-muted)", textAlign: "center", marginTop: 12 }}>
                При входе через Яндекс / VK номер подтверждается автоматически — сразу +10 кредитов.
              </p>
            </>
          )}
        </div>

        <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "var(--av-muted)" }}>
          <a href="/" style={{ color: "var(--av-muted)", textDecoration: "none" }}>← Вернуться на главную</a>
        </p>
      </div>
    </div>
  );
}
