import { useIsMobile } from "@/hooks/use-mobile";

const ideas = [
  {
    title: "UX ≠ дизайн",
    body: "UX — путь от намерения юзера до результата. Дизайн — один из инструментов. Тексты, последовательность, скорость, ошибки — это всё UX.",
  },
  {
    title: "UX = разница продукта и фичи",
    body: "Фича решает задачу технически. Продукт даёт юзеру понять, что задача решена, и захотеть вернуться. Без UX — это функция, не продукт.",
  },
  {
    title: "Каждое решение — UX-решение",
    body: "Текст ошибки, скорость загрузки, формулировка кнопки, порядок шагов, размер хитбокса. UX не отдельный этап — он во всём, что делает разработчик.",
  },
  {
    title: "На MVP UX > функциональности",
    body: "Фичи у конкурентов плюс-минус те же. Конверсия первой сессии и retention — это UX. Никакая фича не вытащит продукт, в котором юзер не понял, что произошло.",
  },
];

export default function M7Slide06UxFourIdeas() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Что такое UX</p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Четыре идеи, которые меняют, как вы строите продукт.
        </h2>
        <div className="grid grid-cols-1 gap-[6px]">
          {ideas.map((it, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex gap-[6px] items-baseline mb-[2px]">
                <span className="text-[9px] font-mono text-[hsl(var(--slide-gold))]">0{i + 1}</span>
                <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{it.title}</p>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{it.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          «Юзеры не используют фичу» — почти всегда правда в том, что юзер не понял, что она делает.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[60px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Что такое UX</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px] max-w-[1700px]">
        Четыре идеи, которые меняют, как вы строите продукт.
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[28px]">
        {ideas.map((it, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[22px]">
            <div className="flex gap-[14px] items-baseline mb-[10px]">
              <span className="text-[20px] font-mono text-[hsl(var(--slide-gold))]">0{i + 1}</span>
              <p className="text-[24px] font-semibold text-[hsl(var(--slide-text))]">{it.title}</p>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{it.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1700px]">
        Когда вы говорите «юзеры не используют фичу» — почти всегда правда в том, что юзер не понял, что она делает или что она ему дала.
      </p>
    </div>
  );
}