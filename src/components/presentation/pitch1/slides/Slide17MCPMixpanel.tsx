import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide17MCPMixpanel() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-6">
        <div><Eyebrow>Кейс · Mikey × Claude × MCP × Mixpanel</Eyebrow></div>
        <H1 size={56}>
          Как MCP сэкономил мне <span style={{ color: COLORS.accent }}>€3 000</span><br/>
          на продуктовой аналитике.
        </H1>

        <Body size={21} color={COLORS.muted}>
          В Mikey мне нужна была полноценная продуктовая аналитика. Я не аналитик — понимаю как это работает, но сам никогда не настраивал. Раньше нанимал спеца за <span style={{ color: COLORS.text }}>€3 000 под ключ</span>. В этот раз отдал задачу Claude через MCP.
        </Body>

        <div className="grid grid-cols-2 gap-7 flex-1">
          {/* BEFORE */}
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace" }}>
              Раньше · с аналитиком
            </div>
            <div style={{ fontSize: 36, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}>
              €3 000 · 2–3 недели
            </div>
            <Body size={19} color={COLORS.muted}>
              → Брифинг и согласование событий<br/>
              → Подрядчик настраивает Mixpanel<br/>
              → Жду дашборды, согласую правки<br/>
              → Каждый новый ивент — снова через него
            </Body>
          </div>

          {/* NOW */}
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.accent}`,
            borderRadius: 14,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Сейчас · Claude + MCP
            </div>
            <div style={{ fontSize: 36, fontWeight: 600, color: COLORS.accent, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}>
              €0 · несколько часов
            </div>
            <Body size={19} color={COLORS.text}>
              ✓ Claude сам сформировал список ивентов<br/>
              ✓ Через MCP настроил их в Mixpanel<br/>
              ✓ Собрал воронки и визуализации<br/>
              ✓ Дашборды для продуктовых решений готовы
            </Body>
          </div>
        </div>

        <div style={{
          padding: "24px 32px",
          border: `1px solid ${COLORS.accent}`,
          borderRadius: 12,
          background: "hsla(25,65%,58%,0.08)",
        }}>
          <Body size={22} color={COLORS.text}>
            От «мне нужна аналитика» до полноценного трекинга и графиков — за один вечер. Теперь у меня есть данные, на которых я <span style={{ color: COLORS.accent }}>принимаю взвешенные продуктовые решения</span> — без подрядчика и без ожидания.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}