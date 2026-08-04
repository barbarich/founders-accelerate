import { useIsMobile } from "@/hooks/use-mobile";

const chain = [
  { n: "100-150", l: "в лонглисте", s: "отобраны вручную под твою нишу и стадию" },
  { n: "50-70", l: "реально написал", s: "остальные отсеялись на проверке фита" },
  { n: "5-15%", l: "отвечают на холодное", s: "вдвое-втрое выше среднего B2B (3.4%), но большинство молчит" },
  { n: "15-25", l: "первых встреч", s: "тёплое интро конвертит в 40-50%, холодное — в 3-5%" },
  { n: "1-3", l: "term sheet", s: "закрывает раунд" },
];

export default function L15SlideOutreachMath() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Математика фандрейзинга · август 2026
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Поиск инвестора — <span className="text-[hsl(var(--slide-gold))]">тоже воронка конверсии</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.4]">
          Та же арифметика, что и в B2B-продажах (урок 13): не «как хорошо ты питчишь», а сколько человек прошло через воронку.
        </p>
        <div className="space-y-[3px] mb-[8px]">
          {chain.map((c) => (
            <div key={c.l} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px] flex items-baseline gap-[7px]">
              <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))] w-[54px] shrink-0">{c.n}</span>
              <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] w-[62px] shrink-0">{c.l}</span>
              <span className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{c.s}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px] mb-[6px]">
          <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">
            Медиана от первого письма до подписанного term sheet — 10-14 недель.
          </p>
          <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            С тёплыми интро — 6-8 недель. Только на холодном аутриче — 14-20 недель. Carta, 2026.
          </p>
        </div>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
          Молчание на 40 писем подряд — не сигнал, что идея плохая. Сигнал появляется, когда молчат все 100.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Математика фандрейзинга · август 2026
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Поиск инвестора — <span className="text-[hsl(var(--slide-gold))]">тоже воронка конверсии</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1800px] leading-[1.45]">
        Та же арифметика, что и в B2B-продажах (урок 13): не «насколько хорошо ты питчишь», а сколько человек прошло через воронку.
      </p>
      <div className="grid grid-cols-5 gap-[14px] max-w-[1900px] mb-[24px]">
        {chain.map((c) => (
          <div key={c.l} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[18px]">
            <p className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[6px]">{c.n}</p>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{c.l}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.s}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px] mb-[16px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[6px]">
          Медиана от первого письма до подписанного term sheet — 10-14 недель.
        </p>
        <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          С тёплыми интро — 6-8 недель. Только на холодном аутриче — 14-20 недель. Данные Carta, 2026.
        </p>
      </div>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] max-w-[1800px]">
        Молчание на 40 писем подряд — не сигнал, что идея плохая. Сигнал появляется, когда молчат все 100.
      </p>
    </div>
  );
}
