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
    d: "Большие файлы = баги и конфликты. Claude сам разобьёт — качество кода вырастет в разы.",
  },
  {
    n: 3,
    t: "Сложная задача — топовая модель",
    d: "Claude Opus 4.7 для архитектуры и сложной логики. На простом — экономь, на важном — нет.",
  },
  {
    n: 4,
    t: "Production-ready, а не MVP",
    d: "Слово «прототип» = поверхностный код. Проси сразу production-quality.",
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
];

export default function Slide18WorkflowRules() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <Eyebrow>Best practices · Claude Code · 1/2</Eyebrow>
          <div style={{ fontSize: 40, fontWeight: 600, color: COLORS.text, letterSpacing: "-0.02em", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.1 }}>
            Как пишут промпты в <span style={{ color: COLORS.accent }}>NVIDIA, Google</span> — и как пишу я
          </div>
          <div style={{ fontSize: 18, color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>
            Часть 1 · Качество кода и архитектура
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
      </div>
    </SlideFrame>
  );
}
