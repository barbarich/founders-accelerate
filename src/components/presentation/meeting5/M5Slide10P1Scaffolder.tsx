import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    num: "1",
    title: "Опиши проект максимально детально",
    body: "Что строишь, для кого, стек, чего нельзя делать. Добавь юзер-флоу: «Пользователь нажимает → видит → получает». Для бага: «Должно быть X. Сейчас Y.» Чем точнее сценарий — тем точнее результат.",
    artifact: null,
  },
  {
    num: "2",
    title: "Включи режим планирования",
    body: "Claude составляет полный план — без единой строки кода. Видишь всю архитектуру до того, как потратил время.",
    artifact: "Shift+Tab → Plan Mode",
  },
  {
    num: "3",
    title: "План готов → перепроверь и второе мнение",
    body: "Попроси Claude перепроверить план самому. Затем скопируй в Codex или Antigravity — свежий взгляд без контекста находит то, что пропустил первый.",
    artifact: "→ Codex / Antigravity",
  },
  {
    num: "4",
    title: "Читай файлы и корректируй",
    body: "До старта разработки: пройдись по предложенной структуре папок, схеме БД, роутам. Правь до тех пор, пока не устраивает каждый пункт.",
    artifact: null,
  },
  {
    num: "5",
    title: "Устраивает → начинай",
    body: "Только тогда выходи из Plan Mode и давай команду на реализацию. Исправить план — 2 минуты. Исправить код — 2 часа.",
    artifact: "Выход из Plan Mode → код",
  },
];

export default function M5Slide10P1Scaffolder() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          До первой строки кода
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Алгоритм старта
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Исправить план — 2 минуты. Исправить код — 2 часа.
        </p>
        <div className="space-y-[4px]">
          {steps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[9px] py-[6px]">
              <div className="flex items-center gap-[5px] mb-[2px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.title}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[2px]">{s.body}</p>
              {s.artifact && (
                <span className="inline-block text-[7px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.25)] px-[5px] py-[1px] rounded-[3px]">{s.artifact}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        До первой строки кода
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[8px]">
        Алгоритм старта
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1100px]">
        Исправить план — 2 минуты. Исправить код — 2 часа. Не пропускай эти 5 шагов.
      </p>

      <div className="grid grid-cols-5 gap-[14px] max-w-[1500px]">
        {steps.map((s, i) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[18px] flex flex-col relative">
            {i < steps.length - 1 && (
              <span className="absolute -right-[10px] top-[22px] text-[hsl(var(--slide-gold)/0.3)] text-[18px] z-10">→</span>
            )}
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold mb-[10px]">{s.num}</span>
            <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[10px]">{s.title}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">{s.body}</p>
            {s.artifact && (
              <div className="mt-auto">
                <span className="inline-block text-[12px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.3)] px-[10px] py-[5px] rounded-[6px]">{s.artifact}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
