import { useIsMobile } from "@/hooks/use-mobile";

const axes = [
  { n: "1", t: "Pain depth", d: "Насколько сильная боль у клиента? 1-10. Боль 7+ = люди готовы платить" },
  { n: "2", t: "Frequency", d: "Как часто возникает боль? Daily > weekly > monthly. Чем чаще — тем выше retention" },
  { n: "3", t: "Willingness to pay", d: "30%+ опрошенных назвали цену >= твоей? = PASS" },
  { n: "4", t: "Existing alternatives", d: "Что используют сейчас? Если ничего — рынка нет. Если используют конкурента — есть" },
  { n: "5", t: "Activation rate", d: "Сколько % из signed-up дошли до Aha-moment? Цель: >40%" },
  { n: "6", t: "D7 retention", d: "Сколько вернулись на 7-й день? B2C: >25% · B2B: >40% = здоровый продукт" },
  { n: "7", t: "Organic growth", d: "Привели ли друга без напоминания? 15%+ → есть word-of-mouth → есть PMF" },
  { n: "8", t: "Sean Ellis score", d: "Спроси 100 пользователей: «насколько ты расстроишься если продукт исчезнет?» 40%+ «очень расстроюсь» = PMF" },
  { n: "9", t: "Revenue trajectory", d: "MRR растёт 15%+ в месяц без рекламы → PMF подтверждён деньгами" },
];

export default function L11SlidePMFNineAxis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          9-axis PMF score · моя framework
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          9 осей, по которым меришь Product-Market Fit
        </h2>
        <div className="space-y-[5px]">
          {axes.map((a) => (
            <div key={a.n} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[18px] h-[18px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{a.n}</span>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[1px] leading-[1.2]">{a.t}</p>
                <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        9-axis PMF score · моя framework
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        9 осей, по которым меришь <span className="text-[hsl(var(--slide-gold))]">Product-Market Fit</span>
      </h2>
      <div className="grid grid-cols-3 gap-x-[28px] gap-y-[14px] max-w-[1900px]">
        {axes.map((a) => (
          <div key={a.n} className="flex items-start gap-[14px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[34px] h-[34px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{a.n}</span>
            <div className="flex-1">
              <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[3px] leading-[1.2]">{a.t}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{a.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
