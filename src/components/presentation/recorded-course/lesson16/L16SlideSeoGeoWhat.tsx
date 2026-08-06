import { useIsMobile } from "@/hooks/use-mobile";

const cards = [
  { t: "SEO", d: "Когда человек гуглит свою проблему, твой сайт может показаться в результатах бесплатно - без рекламы. Это и называется SEO." },
  { t: "GEO", d: "То же самое, только вместо Google - ChatGPT, Claude, Perplexity. Когда у них спрашивают «какой инструмент выбрать», они отвечают на основе статей в интернете." },
];

export default function L16SlideSeoGeoWhat() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          SEO и GEO · что это
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Тебя находят там, где уже ищут
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Оба канала работают по одному принципу: не ты идёшь к клиенту рекламой, а он сам находит тебя, когда решает свою задачу.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {cards.map((c) => (
            <div key={c.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{c.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Это не быстрый канал. Первые правки занимают неделю, а первые заметные заходы - несколько месяцев. Это вклад в будущее, а не срочные продажи на этой неделе.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        SEO и GEO · что это
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
        Тебя находят <span className="text-[hsl(var(--slide-gold))]">там, где уже ищут</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1800px]">
        Оба канала работают по одному принципу: не ты идёшь к клиенту рекламой, а он сам находит тебя, когда решает свою задачу.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1900px] mb-[20px]">
        {cards.map((c) => (
          <div key={c.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{c.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[16px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Это не быстрый канал. Первые правки занимают неделю, а первые заметные заходы - несколько месяцев. Это вклад в будущее, а не срочные продажи на этой неделе.
        </p>
      </div>
    </div>
  );
}
