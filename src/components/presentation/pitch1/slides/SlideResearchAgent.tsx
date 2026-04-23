import { ArrowUpRight } from "lucide-react";
import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function SlideResearchAgent() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-6">
        <div><Eyebrow>Шаг 2 · Мой AI Research Agent</Eyebrow></div>
        <H1 size={58}>
          Когда промпта мало —<br/>
          подключаешь <span style={{ color: COLORS.accent }}>агента</span>.
        </H1>

        <Body size={22} color={COLORS.muted}>
          В дополнение к Deep Research я собрал <span style={{ color: COLORS.text }}>отдельного AI-агента</span> за несколько часов. Это сервис, которым вы сможете пользоваться — ссылку дам ниже. Он подхватывает там, где Deep Research заканчивается, и доводит ресерч до полноценной картинки.
        </Body>

        <div className="grid grid-cols-4 gap-5">
          {[
            { k: "Анализ рынка", v: "Размер, динамика, ключевые игроки" },
            { k: "Ключевые слова", v: "Объёмы, конкуренция, intent" },
            { k: "Реклама конкурентов", v: "Что крутят, на каких креативах" },
            { k: "Трафик и источники", v: "География, каналы, поведение" },
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

        <div className="grid grid-cols-2 gap-6">
          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Что внутри
            </div>
            <Body size={19} color={COLORS.text}>
              Подключены по API: SEO-инструменты, рекламные платформы, парсинг сайтов конкурентов, LLM для синтеза, веб-поиск со ссылками.
            </Body>
          </div>

          <div style={{
            background: COLORS.panel,
            border: `1px solid ${COLORS.panelBorder}`,
            borderRadius: 14,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}>
            <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              На выходе
            </div>
            <Body size={19} color={COLORS.text}>
              Полная картина рынка одним отчётом: где деньги, где переоценено, в какие ниши заходить — а в какие нет.
            </Body>
          </div>
        </div>

        <div style={{
          marginTop: "auto",
          padding: "20px 28px",
          borderRadius: 12,
          border: `1px solid ${COLORS.accent}`,
          background: "hsla(25,65%,58%,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
              Бонус для участников
            </div>
            <Body size={19} color={COLORS.text}>
              Дам ссылку на агента — заходите и прогоняйте свою идею
            </Body>
          </div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: COLORS.accent,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}>
            Ссылка ниже <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
