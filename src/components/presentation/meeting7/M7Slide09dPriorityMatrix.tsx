import { useIsMobile } from "@/hooks/use-mobile";

const quadrants = [
  {
    pos: "top-left",
    label: "QUICK WINS",
    cond: "High impact · Low effort",
    advice: "Делай немедленно. Это твои 3 правки на эту неделю.",
    examples: "Переписать кнопку. Empty state. Default настроек. Заголовок первого экрана.",
    color: "hsl(var(--slide-gold))",
  },
  {
    pos: "top-right",
    label: "БОЛЬШИЕ СТАВКИ",
    cond: "High impact · High effort",
    advice: "Спланируй на 2–4 недели. Не бросайся, но не откладывай.",
    examples: "Перепроектировать onboarding-флоу. Заменить wizard на live preview. Интеграция с Slack/Google.",
    color: "hsl(var(--slide-text))",
  },
  {
    pos: "bottom-left",
    label: "FILL-INS",
    cond: "Low impact · Low effort",
    advice: "Делай в фоне. Не основная работа, но улучшает ощущение.",
    examples: "Иконки. Микрокопия hover-ов. Анимация перехода.",
    color: "hsl(var(--slide-text-muted))",
  },
  {
    pos: "bottom-right",
    label: "ВРЕМЕННЫЕ ЯМЫ",
    cond: "Low impact · High effort",
    advice: "Не трогай. Особенно если кажется, что «надо бы».",
    examples: "Тёмная тема. Локализация на 5 языков. Кастомный дизайн-токен. Своя CMS.",
    color: "hsl(var(--destructive, 0 70% 50%))",
  },
];

export default function M7Slide09dPriorityMatrix() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px] py-[14px]">
        <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Как выбрать 3 правки из 30</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[6px]">
          Impact × Effort. Без матрицы — берёшь то, что проще.
        </h2>
        <div className="grid grid-cols-2 gap-[5px]">
          {quadrants.map((q) => (
            <div key={q.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[7px] py-[5px]">
              <p className="text-[8.5px] font-bold leading-[1.2] mb-[1px]" style={{ color: q.color }}>{q.label}</p>
              <p className="text-[7px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] mb-[2px]">{q.cond}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text))] leading-[1.35] mb-[2px]">{q.advice}</p>
              <p className="text-[6.5px] italic text-[hsl(var(--slide-text-muted))] leading-[1.35]">{q.examples}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Правило: 2 quick wins + 0–1 большая ставка на неделю. Всё остальное — в backlog.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Как выбрать 3 правки из 30</p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Impact × Effort. Без матрицы — берёшь то, что проще, не то, что важнее.
      </h2>

      <div className="grid grid-cols-[80px_1fr] gap-[16px] max-w-[1700px] flex-1 min-h-0">
        <div className="flex flex-col justify-between items-center pt-[20px] pb-[60px]">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))]" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>← Impact →</p>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-[14px] flex-1">
            {quadrants.map((q) => (
              <div key={q.label} className="bg-[hsl(var(--slide-bg-alt))] border-[2px] rounded-[12px] px-[24px] py-[20px] flex flex-col" style={{ borderColor: q.color + "55" }}>
                <p className="text-[22px] font-bold leading-[1.15] mb-[4px]" style={{ color: q.color }}>{q.label}</p>
                <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[10px]">{q.cond}</p>
                <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[10px]">{q.advice}</p>
                <p className="text-[13px] italic text-[hsl(var(--slide-text-muted))] leading-[1.45] mt-auto">Примеры: {q.examples}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-center mt-[10px]">← Effort →</p>
        </div>
      </div>

      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold mt-[16px] max-w-[1700px] leading-[1.4]">
        Правило недели: 2 quick wins + 0–1 большая ставка. Всё остальное — в backlog. К M8 — измеримый результат.
      </p>
    </div>
  );
}
