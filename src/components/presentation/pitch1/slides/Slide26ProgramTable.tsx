import { Eyebrow, H1, Divider, SlideFrame, COLORS } from "./_shared";

const WEEKS = [
  {
    n: "01",
    title: "Идея, валидация, кастдев",
    points: [
      "Свои AI-агенты для ресёрча — дам шаблоны, которые использую сам",
      "Скрипты для customer development: что и как спрашивать",
      "Как понять, стоит ли это вообще строить — и как найти ту самую идею",
    ],
  },
  {
    n: "02",
    title: "Позиционирование и упаковка",
    points: [
      "Как должна звучать идея, чтобы её хотели купить",
      "Упаковка под рынок, а не под мысли фаундера",
      "Узкое позиционирование, которое цепляет внимание",
    ],
  },
  {
    n: "03",
    title: "MVP с Claude — без программирования",
    points: [
      "Скиллы, плагины, лучшие практики промптинга",
      "Лендинг и сам продукт — как это делаю я (а я не программист)",
      "От пустого экрана до работающего MVP за неделю",
    ],
  },
  {
    n: "04",
    title: "Дистрибуция и первые платящие",
    points: [
      "Где сидит ваша аудитория и какой канал выбрать",
      "Посты, креативы, реклама — что работает в 2026",
      "Что автоматизировать с AI, а что делать руками",
    ],
  },
];

export default function Slide26ProgramTable() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8">
        <div className="text-center"><Eyebrow>From Zero to Launch · 30 дней</Eyebrow></div>
        <H1 size={52}>
          <span className="text-center block">Что внутри программы</span>
        </H1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginTop: 8,
          }}
        >
          {WEEKS.map((w) => (
            <div
              key={w.n}
              style={{
                background: COLORS.panel,
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: 8,
                padding: "26px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div className="flex items-baseline gap-4">
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 16,
                    color: COLORS.accent,
                    letterSpacing: "0.18em",
                  }}
                >
                  WEEK {w.n}
                </div>
                <div style={{ fontSize: 24, fontWeight: 600, color: COLORS.text, letterSpacing: "-0.01em" }}>
                  {w.title}
                </div>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: COLORS.muted, fontSize: 17, lineHeight: 1.55 }}>
                {w.points.map((p) => (
                  <li key={p} style={{ marginBottom: 6 }}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ width: 600, alignSelf: "center", marginTop: 4 }}><Divider /></div>
        <div style={{ fontSize: 18, color: COLORS.muted, textAlign: "center", letterSpacing: "0.02em" }}>
          4 встречи × 3 часа · Группа до 8 человек · Я в чате между встречами
        </div>
      </div>
    </SlideFrame>
  );
}