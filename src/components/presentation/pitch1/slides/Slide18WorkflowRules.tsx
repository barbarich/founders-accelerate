import { Eyebrow, SlideFrame, COLORS } from "./_shared";

const rules = [
  {
    n: 1,
    t: "Документация и тесты с первого промпта",
    d: "Без них проект не масштабируется и не передаётся разработчику. Закладывай сразу.",
  },
  {
    n: 2,
    t: "Файлы до 500 строк",
    d: "Большие файлы = баги и конфликты. Claude сам разобьёт, если попросить — качество кода вырастет в разы.",
  },
  {
    n: 3,
    t: "Сложная задача — топовая модель",
    d: "Claude Opus 4.5 для архитектуры и сложной логики. На простом — экономь, на важном — нет.",
  },
  {
    n: 4,
    t: "Production-ready, а не MVP",
    d: "Слово «прототип» = поверхностный код. Проси сразу production-quality — получишь другой уровень.",
  },
  {
    n: 5,
    t: "Адаптивность с самого начала",
    d: "Все устройства, ОС, браузеры. Заложено в архитектуре — не переделываешь потом.",
  },
  {
    n: 6,
    t: "CLAUDE.md — правила проекта",
    d: "Стек, конвенции, запреты. Один раз написал — Claude следует им всегда.",
  },
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

export default function Slide18WorkflowRules() {
  return (
    <SlideFrame padding={56}>
      <div className="w-full h-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Eyebrow>Лучшие практики · Claude Code</Eyebrow>
          <div style={{ fontSize: 32, fontWeight: 600, color: COLORS.text, letterSpacing: "-0.02em", fontFamily: "'Playfair Display', Georgia, serif" }}>
            Как пишут промпты в <span style={{ color: COLORS.accent }}>NVIDIA, Google</span> — и как пишу я
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-7 gap-y-3 flex-1">
          {rules.map((r) => (
            <div
              key={r.n}
              className="flex gap-4"
              style={{
                padding: "14px 16px",
                background: COLORS.panel,
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 18,
                  color: COLORS.accent,
                  width: 28,
                  flexShrink: 0,
                  paddingTop: 2,
                }}
              >
                {String(r.n).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-1">
                <div style={{ fontSize: 17, fontWeight: 600, color: COLORS.text, lineHeight: 1.25 }}>
                  {r.t}
                </div>
                <div style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.45 }}>
                  {r.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}