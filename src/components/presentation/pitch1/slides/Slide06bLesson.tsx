import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide06bLesson() {
  return (
    <SlideFrame padding={72}>
      <div className="w-full h-full flex flex-col gap-8">
        <div><Eyebrow>Урок, за который я заплатил $20K</Eyebrow></div>
        <H1 size={72}>
          Знать проблему ≠<br/>
          <span style={{ color: COLORS.accent }}>знать решение.</span>
        </H1>

        <div className="grid grid-cols-3 gap-7 mt-2">
          {[
            { n: "01", k: "Для кого", v: "Не «все ищущие работу». Конкретный сегмент с конкретной болью." },
            { n: "02", k: "Каким", v: "Как выглядит решение в их голове — не в моей." },
            { n: "03", k: "Почему купят", v: "Что заставит достать карту именно сейчас, а не завтра." },
          ].map((it) => (
            <div
              key={it.k}
              style={{
                background: COLORS.panel,
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: 14,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ fontSize: 18, letterSpacing: "0.2em", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace", opacity: 0.7 }}>
                {it.n}
              </div>
              <div style={{ fontSize: 32, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.01em" }}>
                {it.k}
              </div>
              <Body size={22} color={COLORS.muted}>{it.v}</Body>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            padding: "32px 40px",
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            background: "hsla(25,65%,58%,0.08)",
          }}
        >
          <Body size={28} color={COLORS.text}>
            Валидация — не «опросник перед стартом». Это <span style={{ color: COLORS.accent }}>обязательная работа до первой строчки кода.</span> Альтернатива — потерять полгода, деньги и веру в идею.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}
