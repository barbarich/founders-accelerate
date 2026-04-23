import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide06WhyValidation() {
  return (
    <SlideFrame padding={72}>
      <div className="w-full h-full flex flex-col gap-7">
        <div><Eyebrow>Личная история · 2019</Eyebrow></div>
        <H1 size={68}>
          Interview Ninja.<br/>
          <span style={{ color: COLORS.accent }}>$20 000</span> в продукт, который никому не был нужен.
        </H1>

        <div className="grid grid-cols-2 gap-8 mt-3">
          <div
            style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              padding: 36,
            }}
          >
            <div style={{ fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, marginBottom: 18, fontFamily: "'JetBrains Mono', monospace" }}>
              Что я думал
            </div>
            <Body size={26} color={COLORS.text}>
              CEO Forex Tester. Десятки собеседований за плечами.<br/><br/>
              «Я знаю рынок лучше всех. Симулятор подготовки к интервью — гениальная идея. Это нужно всем».
            </Body>
          </div>

          <div
            style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              padding: 36,
            }}
          >
            <div style={{ fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.error, marginBottom: 18, fontFamily: "'JetBrains Mono', monospace" }}>
              Что я сделал
            </div>
            <Body size={26} color={COLORS.text}>
              0 интервью с кандидатами. 0 валидации.<br/>
              3 разработчика. <span style={{ color: COLORS.accent }}>$20 000</span> и 6 месяцев.<br/>
              Технически — отличный продукт.
            </Body>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            padding: "28px 36px",
            borderLeft: `4px solid ${COLORS.accent}`,
            background: "hsla(25,65%,58%,0.08)",
            borderRadius: 4,
          }}
        >
          <Body size={26} color={COLORS.text}>
            Несколько оплат — и тишина. Я понимал <em>проблему</em>, но не понимал, как мыслят кандидаты. Параллельно вышли конкуренты с тем же запросом, но другим решением — <span style={{ color: COLORS.accent }}>они зарабатывают до сих пор</span>.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}