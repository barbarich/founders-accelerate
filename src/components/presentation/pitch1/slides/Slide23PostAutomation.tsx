import { Eyebrow, SlideFrame, SlideFooter, COLORS } from "./_shared";

const tools = [
  {
    n: "01",
    name: "Linked Helper",
    channel: "LinkedIn",
    d: "Полностью автоматизированный outreach в LinkedIn.\nСистема по заготовленной воронке добавляет в друзья,\nпишет сообщения, ведёт диалог до демо.",
    metric: "Особенно сильно для B2B",
  },
  {
    n: "02",
    name: "Instantly",
    channel: "Email",
    d: "Массовые персонализированные email-кампании.\nВ MetaMinder отправляем ~3 000 писем в день.\nДаже при небольшой конверсии — стабильный поток демо.",
    metric: "~3 000 писем / день в MetaMinder",
  },
];

export default function Slide23PostAutomation() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8 justify-center">
        <div><Eyebrow>Автоматизация outreach · особенно для B2B</Eyebrow></div>

        <div style={{ fontSize: 30, fontWeight: 500, color: COLORS.text, lineHeight: 1.3, maxWidth: 1200 }}>
          Инструментов много. Я использую два, которые реально работают.
        </div>

        <div className="grid grid-cols-2 gap-6">
          {tools.map((t) => (
            <div
              key={t.n}
              style={{
                background: COLORS.panel,
                border: `0.5px solid ${COLORS.line}`,
                padding: 32,
              }}
            >
              <div className="flex items-baseline gap-3" style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, color: COLORS.accent }}>
                  {t.n}
                </div>
                <div style={{ fontSize: 30, fontWeight: 500, color: COLORS.text }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginLeft: "auto" }}>
                  {t.channel}
                </div>
              </div>
              <div style={{ fontSize: 18, color: COLORS.muted, whiteSpace: "pre-line", lineHeight: 1.55, marginBottom: 18 }}>
                {t.d}
              </div>
              <div style={{ fontSize: 15, fontFamily: "'JetBrains Mono', monospace", color: COLORS.accent, paddingTop: 14, borderTop: `0.5px solid ${COLORS.line}` }}>
                → {t.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SlideFooter>Автоматизация — отдельная большая тема. Здесь — только то, что использую сам.</SlideFooter>
    </SlideFrame>
  );
}