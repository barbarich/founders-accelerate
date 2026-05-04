import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { n: "1", t: "Push «мы скучаем»", w: "Без причины. Учит игнорировать всё дальше." },
  { n: "2", t: "Email каждый день", w: "Отписка на 4-й день. Минус 30% базы за месяц." },
  { n: "3", t: "Реактивация скидкой", w: "Учит ждать скидку. Полная цена больше не работает." },
  { n: "4", t: "Onboarding после 5-го визита", w: "Поздно. Юзер уже сформировал привычку «не разобрался»." },
  { n: "5", t: "MAU вместо retention-кривой", w: "Большая цифра, скрывающая утечку. Растёт за счёт новых, не за счёт удержания." },
];

export default function M8Slide20FiveAntiPatterns() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          5 способов убить retention
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          Анти-паттерны. Делал каждый. Делать больше нельзя.
        </h2>
        <div className="space-y-[5px]">
          {items.map((i) => (
            <div key={i.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[12px] font-bold text-red-400">✕</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{i.t}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[20px]">{i.w}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        5 способов убить retention
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        Анти-паттерны. Делал каждый. Делать больше нельзя.
      </h2>
      <div className="space-y-[12px] max-w-[1500px]">
        {items.map((i) => (
          <div key={i.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[18px] grid grid-cols-[60px_360px_1fr] gap-[20px] items-baseline">
            <span className="font-display text-[40px] font-bold text-red-400/80 leading-none">✕</span>
            <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{i.t}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{i.w}</span>
          </div>
        ))}
      </div>
    </div>
  );
}