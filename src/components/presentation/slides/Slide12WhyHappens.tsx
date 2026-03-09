import { useIsMobile } from "@/hooks/use-mobile";

const problems = [
  { num: "01", title: "Нет структуры", text: "Не знаете что делать на каждом этапе. Идея есть, а план — нет." },
  { num: "02", title: "Нет окружения", text: "В одиночку мотивация умирает. Не с кем обсудить, не от кого получить фидбек." },
  { num: "03", title: "Нет обратной связи", text: "Строите в вакууме. Не понимаете, правильно ли идёте." },
  { num: "04", title: "Нет ментора", text: "Нет того, кто уже прошёл этот путь и знает, как делать правильно. Ментор, который всегда рядом — на расстоянии сообщения." },
];

export default function Slide12WhyHappens() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Причины</p>
        <h2 className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[24px]">Почему так происходит</h2>
        <div className="grid grid-cols-2 gap-[8px] mb-[20px]">
          {problems.map((p) => (
            <div key={p.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border))] rounded-[6px] p-[14px]">
              <span className="text-[18px] font-bold text-[hsl(var(--slide-gold)/0.2)] font-mono">{p.num}</span>
              <h3 className="text-[14px] font-semibold text-[hsl(var(--slide-text))] mt-[4px] mb-[4px]">{p.title}</h3>
              <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[13px] text-[hsl(var(--slide-gold))] font-medium text-center">
          The Founders Circle решает все четыре.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Причины</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[80px]">Почему так происходит</h2>
      <div className="grid grid-cols-2 gap-[36px] mb-[56px]">
        {problems.map((p) => (
          <div key={p.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border))] rounded-[8px] p-[44px]">
            <span className="text-[44px] font-bold text-[hsl(var(--slide-gold)/0.2)] font-mono">{p.num}</span>
            <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mt-[12px] mb-[12px]">{p.title}</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{p.text}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium text-center">
        The Founders Circle решает все четыре.
      </p>
    </div>
  );
}
