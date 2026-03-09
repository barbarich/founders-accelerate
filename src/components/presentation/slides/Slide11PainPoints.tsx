import { useIsMobile } from "@/hooks/use-mobile";

const pains = [
  "У меня есть идея уже полгода, но я не знаю с чего начать",
  "Начал строить, застрял и забросил",
  "Не технический — не могу сделать продукт",
  "Делаю один, не хватает обратной связи",
  "Не понимаю как найти первых клиентов",
];

export default function Slide11PainPoints() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Проблема</p>
        <h2 className="text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[24px]">Знакомо?</h2>
        <div className="space-y-[8px]">
          {pains.map((p, i) => (
            <div key={i} className="flex items-start gap-[12px] px-[14px] py-[14px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px]">
              <span className="text-[20px] leading-none text-[hsl(var(--slide-gold)/0.3)] font-bold mt-[-2px] shrink-0">"</span>
              <p className="text-[13px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] font-light">{p}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex">
      <div className="w-[580px] h-full flex flex-col justify-center px-[100px] border-r border-[hsl(var(--slide-border)/0.3)]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Проблема</p>
        <h2 className="text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1]">Знакомо?</h2>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[40px]" />
      </div>
      <div className="flex-1 flex flex-col justify-center px-[100px]">
        <div className="space-y-[12px]">
          {pains.map((p, i) => (
            <div key={i} className="flex items-start gap-[28px] px-[36px] py-[32px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px]">
              <span className="text-[48px] leading-none text-[hsl(var(--slide-gold)/0.3)] font-bold mt-[-4px] shrink-0">"</span>
              <p className="text-[30px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] font-light">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
