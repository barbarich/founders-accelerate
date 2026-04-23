import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide06bLesson() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-10">
        <div><Eyebrow>Урок, за который я заплатил $20K</Eyebrow></div>
        <H1 size={52}>Знать проблему ≠ знать решение.</H1>

        <div className="grid grid-cols-3 gap-6 mt-2">
          {[
            { k: "Для кого", v: "Не «все ищущие работу». Конкретный сегмент с конкретной болью." },
            { k: "Каким", v: "Как выглядит решение в их голове — не в моей." },
            { k: "Почему купят", v: "Что заставит достать карту именно сейчас, а не завтра." },
          ].map((it) => (
            <div
              key={it.k}
              style={{
                background: COLORS.panel,
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: COLORS.accent, marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>
                {it.k}
              </div>
              <Body size={18} color={COLORS.text}>{it.v}</Body>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            padding: "24px 32px",
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 12,
            background: "hsla(25,65%,58%,0.08)",
          }}
        >
          <Body size={22} color={COLORS.text}>
            Валидация — это не «опросник перед стартом». Это <span style={{ color: COLORS.accent }}>обязательная подготовительная работа до строчки кода.</span> Альтернатива — потерять полгода жизни, деньги и веру в идею.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}
