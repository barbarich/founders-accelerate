import { Eyebrow, H1, H2, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide11LiveDemo() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center text-center gap-8">
        <Eyebrow>Живое демо</Eyebrow>
        <H1 size={96}>PMF Research Agent</H1>
        <H2 size={28}>Multi-agent pipeline · собран за 2 часа</H2>
        <Body size={22} color={COLORS.muted}>
          Общался с Claude — придумали и реализовали.
        </Body>
        <div style={{ marginTop: 24 }}>
          <a
            href="/agents/pmf"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: COLORS.text,
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.02em",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Open PMF Agent →
          </a>
        </div>
        <div style={{ marginTop: 20, fontSize: 16, color: COLORS.muted }}>
          Запускаю на идее из зала.
        </div>
      </div>
    </SlideFrame>
  );
}