import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function SlideCustdevReal() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-6">
        <div><Eyebrow>Шаг 3 · Не верь AI слепо</Eyebrow></div>
        <H1 size={56}>
          Получил отчёт от AI? <br/>
          Теперь иди и <span style={{ color: COLORS.accent }}>проверь руками</span>.
        </H1>

        <Body size={21} color={COLORS.muted}>
          AI собрал данные — но пока ты сам не зашёл к конкурентам и не поговорил с людьми, у тебя <span style={{ color: COLORS.text }}>гипотеза</span>, а не валидация. Это та работа, которую за тебя не сделает никто.
        </Body>

        <div className="grid grid-cols-2 gap-6 flex-1">
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
              01 · Тестируй конкурентов
            </div>
            <div style={{ fontSize: 26, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.01em" }}>
              Пройди по всем сайтам из отчёта
            </div>
            <Body size={19} color={COLORS.muted}>
              → Зарегистрируйся, пройди онбординг<br/>
              → Реально попользуйся продуктом<br/>
              → Найди, где у них слабо — глазами, не из таблицы<br/>
              → Пойми, чем именно ты можешь быть лучше
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
              02 · Говори с аудиторией
            </div>
            <div style={{ fontSize: 26, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.01em" }}>
              10–15 живых разговоров
            </div>
            <Body size={19} color={COLORS.muted}>
              → AI помогает составить скрипт интервью<br/>
              → Слушаешь боль, а не подтверждение идеи<br/>
              → Спрашиваешь про прошлое, не про будущее<br/>
              → Ищешь не «нравится», а готовность платить
            </Body>
          </div>
        </div>

        <div style={{
          padding: "24px 32px",
          border: `1px solid ${COLORS.accent}`,
          borderRadius: 12,
          background: "hsla(25,65%,58%,0.08)",
        }}>
          <Body size={21} color={COLORS.text}>
            Если стартанёшь по отчёту AI и не сложится — винить будет некого. Это <span style={{ color: COLORS.accent }}>ты</span> доверился, не перепроверив. Идти строить можно только когда сложилось всё: рынок, запросы клиентов, конкурентный анализ — и у тебя есть полноценное видение продукта.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}
