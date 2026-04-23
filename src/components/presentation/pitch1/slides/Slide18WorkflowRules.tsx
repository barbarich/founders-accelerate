import { Eyebrow, SlideFrame, COLORS } from "./_shared";

const rules = [
  { n: 1, t: "Контекст важнее промпта", d: "Дай AI код, ТЗ, примеры — иначе фантазирует" },
  { n: 2, t: "Разбивай задачу на атомы", d: "Одна фича = одно изменение = один PR" },
  { n: 3, t: "Review every commit", d: "AI быстрый, но слеп на стратегию. Думаешь ты" },
  { n: 4, t: "Тесты — обязательно", d: "AI ломает старое, делая новое. Без тестов — хаос" },
  { n: 5, t: "CLAUDE.md — правила проекта", d: "Один раз написал — применяется всегда" },
];

export default function Slide18WorkflowRules() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8 justify-center">
        <div><Eyebrow>5 правил, без которых AI не работает</Eyebrow></div>
        <div className="flex flex-col gap-5">
          {rules.map((r) => (
            <div key={r.n} className="flex gap-6 items-baseline">
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, color: COLORS.accent, width: 40 }}>{r.n}.</div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 500, color: COLORS.text }}>{r.t}</div>
                <div style={{ fontSize: 18, color: COLORS.muted, marginTop: 4 }}>{r.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}