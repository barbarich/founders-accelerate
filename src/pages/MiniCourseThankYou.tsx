import { useEffect } from "react";
import { CheckCircle2, Send, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { trackPurchase, trackSelectContent, getCheckoutValue } from "@/lib/analytics";
import "./mini-course-landing/styles.css";

const TELEGRAM_BOT_URL = "https://t.me/AI_founders_course_bot";
// Fallback only — the real amount ($19 or $49) is captured at begin_checkout
// and read via getCheckoutValue(). Used when that value is unavailable
// (e.g. direct visit to /thank-you without a prior checkout in this tab).
const FALLBACK_PRICE_USD = 19;

/**
 * Resolve a stable transaction id for the purchase event.
 * Preference order:
 *   1. Stripe checkout session id from `?session_id=cs_xxx` (best — matches webhook).
 *   2. Stored event_id from begin_checkout (lets us link click → purchase).
 *   3. Synthetic id (last resort — still enables localStorage dedup on refresh).
 */
function resolveTransactionId(): string {
  try {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (sessionId) return sessionId;
    const stored = sessionStorage.getItem("mc_last_event_id");
    if (stored) return stored;
  } catch {
    /* ignore */
  }
  return `tx_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export default function MiniCourseThankYou() {
  useEffect(() => {
    document.body.classList.add("mcl-body");
    const prevTitle = document.title;
    document.title = "Спасибо за покупку — AI-продукт, который покупают";

    const transactionId = resolveTransactionId();
    const value = getCheckoutValue() ?? FALLBACK_PRICE_USD;
    trackPurchase({ transactionId, value, currency: "USD" });

    return () => {
      document.body.classList.remove("mcl-body");
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="mcl-root" style={{ minHeight: "100vh", paddingTop: 0 }}>
      <SEO
        path="/mini-course/thank-you"
        title="Спасибо за покупку - AI-продукт, который покупают"
        description="Подтверждение покупки курса. Дальше - бот в Telegram для активации."
        noindex
      />
      <section style={{ padding: "80px 0" }}>
        <div
          className="mcl-container"
          style={{
            maxWidth: 720,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "rgba(74, 138, 40, 0.12)",
              border: "1px solid rgba(74, 138, 40, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <CheckCircle2 size={36} style={{ color: "var(--mcl-success)" }} />
          </div>

          <div className="mcl-section-label" style={{ marginBottom: 20 }}>
            Оплата прошла успешно
          </div>
          <h1
            className="mcl-section-title"
            style={{ marginBottom: 20, maxWidth: "100%" }}
          >
            Спасибо за покупку. <em>Доступ — в Telegram-боте.</em>
          </h1>
          <p
            className="mcl-section-intro"
            style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 36 }}
          >
            Все материалы курса, уроки, презентации и бонусы выдаются через нашего Telegram-бота. Нажми на кнопку ниже, запусти бота — и сразу получишь доступ ко всему содержимому.
          </p>

          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mcl-cta-primary"
            style={{ fontSize: 18, padding: "18px 32px" }}
            onClick={() => trackSelectContent("telegram_bot", "AI_founders_course_bot")}
          >
            <Send size={18} style={{ marginRight: 4 }} />
            Открыть Telegram-бота
          </a>

          <div
            style={{
              marginTop: 48,
              padding: 28,
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(0,0,0,0.02)",
              textAlign: "left",
              width: "100%",
              maxWidth: 560,
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
              Что делать дальше
            </h3>
            <ol style={{ paddingLeft: 20, margin: 0, lineHeight: 1.7, listStyle: "decimal" }}>
              <li>Нажми кнопку «Открыть Telegram-бота» выше.</li>
              <li>В Telegram нажми <strong>Start</strong>.</li>
              <li>Пришли боту <strong>email, с которого ты только что оплачивал</strong>. Бот найдёт твою покупку и сразу выдаст доступ - вводный урок и урок 1 придут в течение минуты.</li>
            </ol>
          </div>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontSize: 14,
              color: "var(--mcl-muted, #666)",
            }}
          >
            <Mail size={14} />
            <span>
              Возникли проблемы с доступом? Напиши{" "}
              <a
                href="mailto:michael.barbarych@gmail.com"
                style={{ color: "var(--mcl-success)", textDecoration: "underline" }}
              >
                michael.barbarych@gmail.com
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
