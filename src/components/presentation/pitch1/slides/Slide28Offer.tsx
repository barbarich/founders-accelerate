import { QRCodeSVG } from "qrcode.react";
import { Eyebrow, Divider, SlideFrame, COLORS } from "./_shared";

const REGISTER_URL = typeof window !== "undefined"
  ? `${window.location.origin}/register`
  : "/register";

export default function Slide28Offer() {
  return (
    <SlideFrame padding={70}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
        <div className="text-center"><Eyebrow>Оффер для участников вебинара</Eyebrow></div>

        <div className="flex flex-col items-center gap-3">
          <div style={{ fontSize: 22, color: COLORS.muted }}>
            Публичная цена: <span style={{ textDecoration: "line-through" }}>₪4,500</span>
          </div>
          <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, color: COLORS.text }}>
            ₪3,000
          </div>
          <div style={{ fontSize: 18, color: COLORS.muted }}>Сегодня для вас · экономия ₪1,500</div>
        </div>

        <div style={{ width: 480 }}><Divider /></div>

        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 16,
          color: COLORS.muted,
          lineHeight: 1.7,
          textAlign: "left",
        }}>
{`→  Регистрация — до конца недели
→  8 мест в ближайшей когорте
→  Оплата: перевод на IL-счёт · Bit · крипта · рассрочка
→  Бонус: настройка PMF Research Agent под ваш проект`}
        </div>

        <div className="flex items-center gap-10 mt-2">
          <a
            href="/register"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: "20px 44px",
              background: COLORS.accent,
              color: COLORS.bg,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 0 50px hsla(25, 65%, 58%, 0.3)",
            }}
          >
            ЗАБРАТЬ МЕСТО
          </a>
          <div style={{ background: "#FFFFFF", padding: 12, border: `1px solid ${COLORS.accent}`, borderRadius: 6 }}>
            <QRCodeSVG value={REGISTER_URL} size={180} level="M" fgColor="hsl(20 15% 5%)" bgColor="#FFFFFF" />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}