import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide09SimilarWeb() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Инструмент 2</p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">SimilarWeb</h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[16px]">Откуда конкуренты берут клиентов</p>
        <div className="space-y-[8px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Что это</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Бесплатный анализ трафика любого сайта.</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Что видите</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Сколько посетителей, откуда приходят, какие страны.</p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] italic">
            "Конкурент — 80K визитов/мес. 45% из поиска. Значит люди гуглят эту проблему."
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент 2</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">SimilarWeb</h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Откуда конкуренты берут клиентов</p>
      <div className="grid grid-cols-2 gap-[32px] mb-[40px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Что это</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Бесплатный анализ трафика любого сайта.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Что видите</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Сколько посетителей, откуда приходят (поиск, соцсети, реклама), какие страны.</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] italic">
          "Вот конкурент MetaMinder — 80K визитов/мес. 45% из поиска. Значит люди гуглят эту проблему. Вот ключевые запросы — это потенциальные слова для вашего лендинга."
        </p>
      </div>
    </div>
  );
}
