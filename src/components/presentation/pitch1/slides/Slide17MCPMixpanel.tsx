import { Eyebrow, H2, Mono, SlideFrame, COLORS } from "./_shared";

export default function Slide17MCPMixpanel() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="text-center"><Eyebrow>MCP — как Claude подключается к системам</Eyebrow></div>
        <H2 size={28}>Продуктовая аналитика в Mikey</H2>
        <div className="flex gap-12 items-center">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, letterSpacing: "0.15em", color: COLORS.muted, marginBottom: 8 }}>РАНЬШЕ</div>
            <div style={{ fontSize: 22, color: COLORS.text }}>Аналитик за 3000 €/мес</div>
          </div>
          <div style={{ fontSize: 32, color: COLORS.muted }}>→</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, letterSpacing: "0.15em", color: COLORS.accent, marginBottom: 8 }}>СЕЙЧАС</div>
            <div style={{ fontSize: 22, color: COLORS.text }}>MCP + Claude за 3 часа</div>
          </div>
        </div>
        <Mono size={20}>{`Что делает Claude через MCP:
→ Сам формирует события и воронки
→ Сам строит дашборды
→ Сам отвечает на вопросы
  «а что произошло на прошлой неделе»`}</Mono>
        <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 12 }}>
          3000 € / месяц <span style={{ color: COLORS.muted }}>→</span> 0 €
        </div>
      </div>
    </SlideFrame>
  );
}