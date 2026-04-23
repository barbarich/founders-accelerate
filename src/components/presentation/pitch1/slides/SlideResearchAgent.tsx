import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function SlideResearchAgent() {
  return (
    <SlideFrame padding={72}>
      <div className="w-full h-full flex flex-col gap-7">
        <div><Eyebrow>Шаг 2 · Мой Research Agent</Eyebrow></div>
        <H1 size={62}>
          Собрал за <span style={{ color: COLORS.accent }}>несколько часов</span>.<br/>
          Делает работу маркетинг-аналитика.
        </H1>

        <div className="grid grid-cols-4 gap-5 mt-2">
          {[
            { k: "Анализ рынка", v: "Размер, динамика, ключевые игроки" },
            { k: "Ключевые слова", v: "Объёмы, конкуренция, intent" },
            { k: "Реклама", v: "Что крутят конкуренты, на каких креативах" },
            { k: "Трафик", v: "Источники, география, поведение" },
          ].map((it) => (
            <div key={it.k} style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}>
              <div style={{ fontSize: 22, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.01em" }}>
                {it.k}
              </div>
              <Body size={17} color={COLORS.muted}>{it.v}</Body>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-7 mt-2">
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}>
            <div style={{ fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Что внутри
            </div>
            <Body size={20} color={COLORS.text}>
              Подключены по API: SEO-инструменты, рекламные платформы, парсинг сайтов конкурентов, LLM для синтеза, веб-поиск с источниками.
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
            <div style={{ fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              На выходе
            </div>
            <Body size={20} color={COLORS.text}>
              Полная картина рынка одним отчётом: где деньги, где переоценено, в какие ниши заходить, а в какие — нет.
            </Body>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
