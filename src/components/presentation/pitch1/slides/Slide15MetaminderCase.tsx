import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide15MetaminderCase() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-6">
        <div><Eyebrow>Кейс MetaMinder · B2B Enterprise в проде</Eyebrow></div>
        <H1 size={54}>
          Как я убрал продакт-менеджера и дизайнера —
          и стал делать фичи в <span style={{ color: COLORS.accent }}>10× быстрее</span>.
        </H1>

        <Body size={20} color={COLORS.muted}>
          В MetaMinder у меня были продакт-менеджер за <span style={{ color: COLORS.text }}>$4–5K/мес</span> и дизайнер за <span style={{ color: COLORS.text }}>$2–2.5K/мес</span>. Я перенёс каждый экран продукта как он есть в проде — в Lovable. Получил полный клон: не для работы, а как инструмент для проектирования новых фич в стиле и контексте уже существующего продукта.
        </Body>

        <div className="grid grid-cols-2 gap-6 flex-1">
          {/* BEFORE */}
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace" }}>
              Раньше · команда
            </div>
            <div style={{ fontSize: 30, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}>
              $6.5–7.5K / мес
            </div>
            <Body size={18} color={COLORS.muted}>
              → Продакт пишет ТЗ — дни и созвоны<br/>
              → Дизайнер делает макеты — недели<br/>
              → Согласования, правки, итерации<br/>
              → Пример: онбординг — <span style={{ color: COLORS.error }}>3 месяца работы и полная ерунда на выходе</span>
            </Body>
          </div>

          {/* NOW */}
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.accent}`,
            borderRadius: 14,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Сейчас · я + Lovable + Claude
            </div>
            <div style={{ fontSize: 30, fontWeight: 600, color: COLORS.accent, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}>
              $0 · дни вместо месяцев
            </div>
            <Body size={18} color={COLORS.text}>
              ✓ Пишу промпт в Lovable — фича в стиле продукта<br/>
              ✓ Итерирую визуал и UX за один вечер<br/>
              ✓ Передаю готовый прототип разработчику<br/>
              ✓ Тот же онбординг — <span style={{ color: COLORS.accent }}>несколько дней в Lovable + неделя в Claude</span>
            </Body>
          </div>
        </div>

        <div style={{
          padding: "22px 32px",
          borderLeft: `4px solid ${COLORS.accent}`,
          background: "hsla(25,65%,58%,0.08)",
          borderRadius: 4,
        }}>
          <Body size={20} color={COLORS.text}>
            Так мы выкатили в прод и копайлот внутри MetaMinder, и десятки других фич. Это сложный B2B Enterprise с реальными клиентами — но даже здесь AI экономит <span style={{ color: COLORS.accent }}>деньги, время и согласования</span>, и даёт результат заметно качественнее.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}