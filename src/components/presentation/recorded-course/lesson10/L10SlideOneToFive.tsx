import { useIsMobile } from "@/hooks/use-mobile";

const formats = [
  { t: "1. Long-form post", d: "LinkedIn / Twitter thread / блог. Развёрнутая история клиента: проблема + путь + результат. 400-800 слов" },
  { t: "2. Short clip", d: "Reels / Shorts / TikTok. 30-60 секунд. Hook первые 3 секунды + один ключевой инсайт + CTA в конце" },
  { t: "3. Carousel / Slides", d: "Instagram / LinkedIn carousel. 7-10 слайдов: вынос ключевых моментов из long-form, визуализированы. Шеры выше в 2-3 раза" },
  { t: "4. Newsletter", d: "Email или Substack. Та же история, но интимно — как письмо другу. Конверсия в продажу здесь самая высокая" },
  { t: "5. Podcast / Video interview", d: "20-30 минут с клиентом или партнёром. Тратится 1 час на запись. На выходе — 5 short clips, 1 long-form, 1 carousel за неделю" },
];

export default function L10SlideOneToFive() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Контент-система · 1 идея → 5 форматов
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Одна история = неделя контента
        </h2>
        <div className="space-y-[6px]">
          {formats.map((f) => (
            <div key={f.t} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[8px] py-[5px]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{f.t}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Контент-система · 1 идея → 5 форматов
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        Одна история = <span className="text-[hsl(var(--slide-gold))]">неделя контента</span>
      </h2>
      <div className="space-y-[14px] max-w-[1800px]">
        {formats.map((f) => (
          <div key={f.t} className="border-l-[4px] border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[28px] py-[12px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{f.t}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
