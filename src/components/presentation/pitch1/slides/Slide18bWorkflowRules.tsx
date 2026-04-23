import { Eyebrow, SlideFrame, COLORS } from "./_shared";

const rules = [
  {
    n: 7,
    t: "Юнит-тесты под каждую фичу",
    d: "Без тестов AI ломает старое, делая новое. С тестами — качество держится месяцами.",
  },
  {
    n: 8,
    t: "Одна задача — один промпт",
    d: "Не пихай 5 фич в один запрос. Атомарность = контроль качества и контекста.",
  },
  {
    n: 9,
    t: "Контекст решает всё",
    d: "Давай примеры, ТЗ, ссылки на код. Не знаешь как — обсуди с Claude, пока не сложится картина.",
  },
  {
    n: 10,
    t: "Сначала план — потом код",
    d: "Проси Claude план, читай, правь. Реализация по согласованному плану на порядок чище.",
  },
  {
    n: 11,
    t: "Второе мнение от другой модели",
    d: "План от Claude → отдай Codex или Antigravity. Альтернативная модель ловит уязвимости и логические дыры.",
  },
];

export default function Slide18bWorkflowRules() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <Eyebrow>Best practices · Claude Code · 2/2</Eyebrow>
          <div style={{ fontSize: 40, fontWeight: 600, color: COLORS.text, letterSpacing: "-0.02em", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1 }}>
            Workflow и <span style={{ color: COLORS.accent }}>контроль качества</span>
          </div>
          <div style={{ fontSize: 18, color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>
            Часть 2 · Как давать задачи, чтобы AI выдавал результат
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-7 gap-y-4 flex-1">
          {rules.map((r) => (
            <div
              key={r.n}
              className="flex gap-5"
              style={{
                padding: "20px 22px",
                background: COLORS.panel,
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 24,
                  color: COLORS.accent,
                  width: 36,
                  flexShrink: 0,
                  paddingTop: 2,
                }}
              >
                {String(r.n).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-2">
                <div style={{ fontSize: 22, fontWeight: 600, color: COLORS.text, lineHeight: 1.25 }}>
                  {r.t}
                </div>
                <div style={{ fontSize: 17, color: COLORS.muted, lineHeight: 1.5 }}>
                  {r.d}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "20px 26px",
            border: `1px solid ${COLORS.accent}`,
            borderRadius: 12,
            background: "hsla(25,65%,58%,0.08)",
          }}
        >
          <div style={{ fontSize: 19, color: COLORS.text, lineHeight: 1.5 }}>
            Эти 11 правил отделяют <span style={{ color: COLORS.accent, fontWeight: 600 }}>vibe-coding</span> от <span style={{ color: COLORS.accent, fontWeight: 600 }}>инженерии с AI</span>. Первое — забавно. Второе — выводит продукт в рынок.
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
