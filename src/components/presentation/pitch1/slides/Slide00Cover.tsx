import { Eyebrow, H1, H2, Divider, SlideFrame, COLORS } from "./_shared";

export default function Slide00Cover() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <div style={{ marginBottom: 32 }}>
          <Eyebrow>The Founders Circle</Eyebrow>
        </div>
        <H1 size={120}>
          Запуск продукта <span style={{ color: COLORS.accent, fontStyle: "italic" }}>с AI</span>
        </H1>
        <div style={{ marginTop: 28, maxWidth: 900 }}>
          <H2 size={30}>От идеи до готового приложения — за 90 минут</H2>
        </div>
        <div style={{ marginTop: 72, width: 360 }}>
          <Divider />
        </div>
        <div style={{ marginTop: 28, fontSize: 18, color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>
          Михаэль Барбарич · 23 апреля 2026
        </div>
      </div>
    </SlideFrame>
  );
}