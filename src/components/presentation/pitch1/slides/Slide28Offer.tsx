import { QRCodeSVG } from "qrcode.react";
import { Eyebrow, Divider, SlideFrame, H1, COLORS } from "./_shared";

const SITE_URL = "https://founders-circle.space/";

export default function Slide28Offer() {
  return (
    <SlideFrame padding={70}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-16 max-w-[1100px]">
          {/* LEFT: invitation copy */}
          <div className="flex-1 flex flex-col gap-6">
            <Eyebrow>Приглашение в группу</Eyebrow>
            <H1 size={56}>
              Запустим ваш продукт<br />за 4 недели — вместе
            </H1>
            <div style={{ fontSize: 19, lineHeight: 1.55, color: COLORS.muted }}>
              Группа 5–7 фаундеров. Личная работа со мной каждую неделю,
              ваш проект в фокусе, обратная связь от команды и комьюнити,
              которое доводит до запуска.
            </div>

            {/* Price block */}
            <div style={{
              display: "flex",
              alignItems: "baseline",
              gap: 14,
              padding: "14px 18px",
              border: `1px solid ${COLORS.accent}`,
              borderRadius: 8,
              background: "hsla(25, 65%, 58%, 0.06)",
              alignSelf: "flex-start",
            }}>
              <span style={{ fontSize: 34, fontWeight: 600, color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                ₪3 000
              </span>
              <span style={{ fontSize: 18, color: COLORS.muted, textDecoration: "line-through" }}>
                ₪4 500
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: COLORS.accent,
                marginLeft: 6,
              }}>
                до конца недели
              </span>
            </div>

            <div style={{ width: 280 }}><Divider /></div>

            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 15,
              color: COLORS.muted,
              lineHeight: 1.9,
            }}>
{`→  4 встречи по 3 часа · личный разбор каждого проекта
→  Валидация → MVP → первые продажи за месяц
→  Бонус: PMF Research Agent под ваш проект
→  Гибкая оплата: IL-перевод · Bit · крипта · рассрочка`}
            </div>
          </div>

          {/* RIGHT: QR + CTA */}
          <div className="flex flex-col items-center gap-5">
            <div style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase", color: COLORS.accent }}>
              Забронируйте место
            </div>
            <div style={{ background: "#FFFFFF", padding: 16, border: `1px solid ${COLORS.accent}`, borderRadius: 8, boxShadow: "0 0 60px hsla(25, 65%, 58%, 0.25)" }}>
              <QRCodeSVG value={SITE_URL} size={260} level="M" fgColor="hsl(20 15% 5%)" bgColor="#FFFFFF" />
            </div>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 16,
                color: COLORS.accent,
                textDecoration: "underline",
                textUnderlineOffset: 4,
              }}
            >
              founders-circle.space
            </a>
            <div style={{ fontSize: 13, color: COLORS.muted, textAlign: "center", maxWidth: 260 }}>
              Отсканируйте QR или перейдите по ссылке — оставьте заявку, и я лично свяжусь с вами.
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}