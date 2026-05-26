import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { t: "ChatGPT / Claude", price: "$20/мес", role: "Long-form + carousel scripts", how: "Дай контекст про продукт + сырую идею → получи структурированный post + carousel slides + headline вариации" },
  { t: "Opus Clip / Vizard", price: "Free до 60 мин/мес", role: "Из длинных видео — клипы", how: "Загружаешь часовое подкаст/интервью → AI находит 5-10 viral moments → готовые reels с subtitles" },
  { t: "HeyGen / Synthesia", price: "$30/мес", role: "AI-аватар видео", how: "Текст → видео с твоим клонированным голосом и лицом. Не любят все, но скейлит видео-контент в 10×" },
  { t: "ElevenLabs", price: "$5-22/мес", role: "Voice cloning + voiceover", how: "Клонируешь свой голос за 1 минуту → озвучивает любой текст. Подкасты, reels, шорты с твоим голосом без записи" },
  { t: "Canva AI / Figma", price: "Free / $13", role: "Визуалы для carousel и постов", how: "Шаблон из библиотеки + AI-генерация изображений + drag-drop. 1 carousel за 10 минут" },
];

export default function L10SlideAIStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          AI-стек для контента · соло-фаундер 2026
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          5 инструментов · меньше $100/мес
        </h2>
        <div className="space-y-[5px]">
          {tools.map((t) => (
            <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[10px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline justify-between mb-[2px]">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{t.t}</p>
                <p className="text-[9px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
              </div>
              <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">{t.role}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{t.how}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        AI-стек для контента · соло-фаундер 2026
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        5 инструментов · меньше $100/мес заменяют команду
      </h2>
      <div className="space-y-[14px] max-w-[1800px]">
        {tools.map((t) => (
          <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[28px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <div className="flex items-baseline justify-between mb-[6px]">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{t.t}</p>
              <p className="text-[14px] text-[hsl(var(--slide-gold))] font-medium">{t.price}</p>
            </div>
            <p className="text-[14px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">{t.role}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.how}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
