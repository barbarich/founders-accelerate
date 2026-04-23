import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function SlideAIvsFounder() {
  return (
    <SlideFrame padding={72}>
      <div className="w-full h-full flex flex-col gap-7">
        <div><Eyebrow>Шаг 3 · Не полагайся только на AI</Eyebrow></div>
        <H1 size={62}>
          AI делает <span style={{ color: COLORS.muted }}>80%</span> работы.<br/>
          Оставшиеся <span style={{ color: COLORS.accent }}>20%</span> — твои руки.
        </H1>

        <div className="grid grid-cols-2 gap-7 mt-2 flex-1">
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 36,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}>
            <div style={{ fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Что делает AI
            </div>
            <Body size={22} color={COLORS.text}>
              ✓ Собирает рынок и конкурентов<br/>
              ✓ Сводит данные в отчёт<br/>
              ✓ Генерит гипотезы и вопросы для интервью<br/>
              ✓ Находит цитаты и паттерны болей
            </Body>
            <div style={{ fontSize: 15, color: COLORS.muted, marginTop: "auto", fontStyle: "italic" }}>
              Но AI <span style={{ color: COLORS.error }}>может ошибаться</span> и не чувствует рынок.
            </div>
          </div>

          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 36,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}>
            <div style={{ fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Что обязан сделать ты
            </div>
            <Body size={22} color={COLORS.text}>
              → Зайти на сайт каждого конкурента<br/>
              → Зарегистрироваться, пройти онбординг<br/>
              → Реально попользоваться продуктом<br/>
              → Понять, где у них дыры — глазами, не отчётом
            </Body>
            <div style={{ fontSize: 15, color: COLORS.muted, marginTop: "auto", fontStyle: "italic" }}>
              Это даёт <span style={{ color: COLORS.accent }}>чувство рынка</span>, которое не заменит ни одна модель.
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
