import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function SlideAIvsFounder() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-7">
        <div><Eyebrow>Шаги 1 + 2 · Что у тебя на руках</Eyebrow></div>
        <H1 size={58}>
          За пару часов ты получил то,<br/>
          на что раньше уходили <span style={{ color: COLORS.accent }}>недели</span>.
        </H1>

        <Body size={22} color={COLORS.muted}>
          После Deep Research в ChatGPT/Gemini/Claude и прогона через моего AI Research Agent — у тебя на столе уже лежит полноценный отчёт по рынку:
        </Body>

        <div className="grid grid-cols-2 gap-7 flex-1">
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Шаг 1 · Deep Research
            </div>
            <Body size={21} color={COLORS.text}>
              ✓ Топ-конкуренты с ценами и моделями<br/>
              ✓ Цитаты пользователей о реальной боли<br/>
              ✓ Размер рынка и динамика<br/>
              ✓ Незакрытые ниши и сегменты<br/>
              ✓ Источники и ссылки на каждое утверждение
            </Body>
          </div>

          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Шаг 2 · Research Agent
            </div>
            <Body size={21} color={COLORS.text}>
              ✓ SEO: ключи, объёмы, intent<br/>
              ✓ Рекламные креативы конкурентов<br/>
              ✓ Источники трафика и география<br/>
              ✓ Сильные и слабые стороны игроков<br/>
              ✓ Готовые гипотезы для проверки
            </Body>
          </div>
        </div>

        <div style={{
          padding: "22px 32px",
          borderLeft: `4px solid ${COLORS.accent}`,
          background: "hsla(25,65%,58%,0.08)",
          borderRadius: 4,
        }}>
          <Body size={22} color={COLORS.text}>
            Это <span style={{ color: COLORS.accent }}>фундамент</span> — но ещё не валидация. Дальше начинается работа, которую AI за тебя не сделает.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}
