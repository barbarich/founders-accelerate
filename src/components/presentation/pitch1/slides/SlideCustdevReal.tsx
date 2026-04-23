import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function SlideCustdevReal() {
  return (
    <SlideFrame padding={72}>
      <div className="w-full h-full flex flex-col gap-7">
        <div><Eyebrow>Шаг 4 · Кастдев руками</Eyebrow></div>
        <H1 size={62}>
          Пока ты не услышал «<span style={{ color: COLORS.accent }}>я заплачу</span>» —<br/>
          у тебя нет валидации.
        </H1>

        <div className="grid grid-cols-3 gap-6 mt-2">
          {[
            { n: "01", k: "AI готовит", v: "Сегмент, гипотезы, скрипт интервью, список вопросов про прошлое — не про будущее." },
            { n: "02", k: "Ты говоришь", v: "10–15 живых разговоров с целевой аудиторией. Слушаешь боли, а не подтверждения своей идеи." },
            { n: "03", k: "Ищешь сигнал", v: "Не «полезно ли это», а «платил ли раньше за решение и сколько»." },
          ].map((it) => (
            <div key={it.k} style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}>
              <div style={{ fontSize: 16, letterSpacing: "0.2em", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace", opacity: 0.7 }}>
                {it.n}
              </div>
              <div style={{ fontSize: 28, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.01em" }}>
                {it.k}
              </div>
              <Body size={19} color={COLORS.muted}>{it.v}</Body>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "auto",
          padding: "26px 36px",
          border: `1px solid ${COLORS.panelBorder}`,
          borderRadius: 14,
          background: "hsla(25,65%,58%,0.08)",
        }}>
          <Body size={24} color={COLORS.text}>
            Ты строишь продукт, чтобы <span style={{ color: COLORS.accent }}>зарабатывать</span> — не очередной бесплатный тул. Поэтому на интервью ищешь не «нравится», а готовность достать карту. Всё остальное — лайки.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}
