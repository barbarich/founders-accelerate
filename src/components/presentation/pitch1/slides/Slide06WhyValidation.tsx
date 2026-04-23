import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide06WhyValidation() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8">
        <div><Eyebrow>Личная история · 2019</Eyebrow></div>
        <H1 size={56}>Interview Ninja.<br/>$20 000 в продукт, который никому не был нужен.</H1>

        <div className="grid grid-cols-2 gap-8 mt-2">
          <div
            style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 12,
              padding: 28,
            }}
          >
            <div style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: COLORS.accent, marginBottom: 14, fontFamily: "'JetBrains Mono', monospace" }}>
              Что я думал
            </div>
            <Body size={19} color={COLORS.text}>
              Я был CEO Forex Tester. Собеседовал десятки людей.<br/><br/>
              «Я знаю рынок лучше всех. Симулятор подготовки к интервью — гениальная идея. Это всем нужно».
            </Body>
          </div>

          <div
            style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 12,
              padding: 28,
            }}
          >
            <div style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: COLORS.error, marginBottom: 14, fontFamily: "'JetBrains Mono', monospace" }}>
              Что я сделал
            </div>
            <Body size={19} color={COLORS.text}>
              0 интервью с кандидатами. 0 валидации.<br/>
              Нанял 3 разработчиков. Потратил <span style={{ color: COLORS.accent }}>$20 000</span>.<br/>
              Через 6 месяцев — рабочий продукт. Технически — отличный.
            </Body>
          </div>
        </div>

        <div
          style={{
            marginTop: 8,
            padding: "20px 28px",
            borderLeft: `3px solid ${COLORS.accent}`,
            background: "hsla(25,65%,58%,0.06)",
          }}
        >
          <Body size={20} color={COLORS.text}>
            Несколько оплат — и тишина. Я понимал <em>проблему</em>, но не понимал, как мыслят кандидаты и что им на самом деле нужно. Параллельно вышли конкуренты с тем же запросом, но другим решением — <span style={{ color: COLORS.accent }}>они до сих пор зарабатывают</span>.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}