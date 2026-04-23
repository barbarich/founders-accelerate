import { Eyebrow, H2, SlideFrame, COLORS } from "./_shared";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: COLORS.panel,
      padding: 40,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <div style={{ fontSize: 13, letterSpacing: "0.15em", color: COLORS.accent, fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 20, lineHeight: 1.55, color: COLORS.text, fontFamily: "'JetBrains Mono', monospace", whiteSpace: "pre-wrap" }}>{children}</div>
    </div>
  );
}

export default function Slide08MikeyCase() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8">
        <div><Eyebrow>Кейс Mikey AI</Eyebrow></div>
        <H2 size={28}>Как я валидировал на самом деле</H2>
        <div className="flex gap-6 flex-1">
          <Block label="СЛОЙ 1 — ВАЛИДАЦИЯ РЫНКА">
{`Увидел Boardy — AI-матчмейкер
для бизнес-нетворкинга
Захотел повторить → сел считать экономику

Вывод: в нетворкинге не заработать.
Деньги — в дейтинге.`}
          </Block>
          <Block label="СЛОЙ 2 — ВАЛИДАЦИЯ ПРОДУКТА">
{`Первая идея: Tinder с AI поверх
Разговоры с ЦА → люди устали от свайпов

Финальный формат:
1 матч в неделю, вторник 20:00`}
          </Block>
        </div>
      </div>
    </SlideFrame>
  );
}