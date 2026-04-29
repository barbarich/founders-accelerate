import { useEffect } from "react";
import { CheckCircle2, Send, Mail } from "lucide-react";
import "./mini-course-landing/styles.css";

const TELEGRAM_BOT_URL = "https://t.me/your_bot";

export default function MiniCourseThankYou() {
  useEffect(() => {
    document.body.classList.add("mcl-body");
    const prevTitle = document.title;
    document.title = "Спасибо за покупку — AI-продукт, который покупают";
    return () => {
      document.body.classList.remove("mcl-body");
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="mcl-root" style={{ minHeight: "100vh", paddingTop: 0 }}>
      <section style={{ padding: "80px 0" }}>
        <div className="mcl-container" style={{ maxWidth: 720, textAlign: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "rgba(74, 138, 40, 0.12)",
              border: "1px solid rgba(74, 138, 40, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            <CheckCircle2 size={36} style={{ color: "var(--mcl-success)" }} />
          </div>

          <div className="mcl-section-label" style={{ justifyContent: "center" }}>
            Оплата прошла успешно
          </div>
          <h1 className="mcl-section-title" style={{ marginBottom: 20 }}>
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
            }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>
              Что делать дальше
            </h3>
            <ol style={{ paddingLeft: 20, margin: 0, lineHeight: 1.7, listStyle: "decimal" }}>
              <li>Нажми кнопку «Открыть Telegram-бота» выше.</li>
              <li>В Telegram нажми <strong>Start</strong> — бот сразу выдаст доступ к курсу.</li>
              <li>Начни с вводного урока — он короткий и задаёт всю оптику курса.</li>
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
