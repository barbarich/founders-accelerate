import { useIsMobile } from "@/hooks/use-mobile";

const types = [
  { n: "1", t: "Cognitive (когнитивный)", d: "«Я понял»: пользователь увидел КАК это работает. Notion templates, Figma frames." },
  { n: "2", t: "Emotional (эмоциональный)", d: "«Это меня радует»: красота, лёгкость, забота. Apple onboarding, Headspace welcome." },
  { n: "3", t: "Social (социальный)", d: "«Я хочу этим поделиться»: видишь результат и хочется показать. TikTok первое видео, Strava run." },
  { n: "4", t: "Financial (финансовый)", d: "«Это мне сэкономит / заработает деньги»: расчёт показывает ROI. Carta cap table, Mercury bank statement." },
];

export default function L7SlideAhaTypes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          4 типа Aha · какой у твоего продукта
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Aha бывает разным. У продукта обычно 1 главный + 1 вспомогательный.
        </h2>
        <div className="space-y-[8px]">
          {types.map((t) => (
            <div key={t.n} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{t.n}</span>
              <div className="flex-1">
                <p className="text-[11.5px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{t.t}</p>
                <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        4 типа Aha · какой у твоего продукта
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1800px]">
        Aha бывает разным. <span className="text-[hsl(var(--slide-gold))]">У продукта обычно 1 главный + 1 вспомогательный.</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[20px] max-w-[1800px]">
        {types.map((t) => (
          <div key={t.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[22px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[48px] h-[48px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{t.n}</span>
            <div className="flex-1">
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[6px] leading-[1.2]">{t.t}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
