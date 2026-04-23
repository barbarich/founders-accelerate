import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function SlideDeepResearch() {
  return (
    <SlideFrame padding={72}>
      <div className="w-full h-full flex flex-col gap-7">
        <div><Eyebrow>Шаг 1 · Deep Research в ChatGPT / Gemini / Claude</Eyebrow></div>
        <H1 size={62}>
          То, на что ушли бы <span style={{ color: COLORS.accent }}>недели</span>,<br/>
          теперь делается за <span style={{ color: COLORS.accent }}>30 минут</span>.
        </H1>

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
              Что делает Deep Research
            </div>
            <Body size={22} color={COLORS.text}>
              • Парсит десятки источников за один прогон<br/>
              • Сравнивает конкурентов, цены, позиционирование<br/>
              • Достаёт цитаты пользователей с Reddit, форумов, отзывов<br/>
              • Сводит всё в структурированный отчёт со ссылками
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
              Шаблон запроса
            </div>
            <pre style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 17,
              lineHeight: 1.55,
              color: COLORS.text,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}>{`Я строю [продукт] для [сегмент].
Сделай Deep Research:

1. Топ-10 конкурентов: цена, модель,
   позиционирование, сильные/слабые
2. Что говорят пользователи о боли
   (Reddit, G2, отзывы) — цитаты
3. Размер рынка и динамика за 3 года
4. Незакрытые ниши, которые видят
   пользователи, но не закрыли игроки

Ответ — структурированно, со ссылками.`}</pre>
          </div>
        </div>

        <div style={{
          marginTop: "auto",
          padding: "22px 32px",
          borderLeft: `4px solid ${COLORS.accent}`,
          background: "hsla(25,65%,58%,0.08)",
          borderRadius: 4,
        }}>
          <Body size={22} color={COLORS.text}>
            90% фаундеров пропускают этот шаг — «и так понятно». В итоге строят то, что уже есть, или то, чего никто не ждёт.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}
