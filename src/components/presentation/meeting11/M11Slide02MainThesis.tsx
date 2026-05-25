import { useIsMobile } from "@/hooks/use-mobile";

export default function M11Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль сегодня
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Cold email + Meta-ads = 30% твоих первых клиентов. <span className="text-[hsl(var(--slide-gold))]">Остальные 70% — через людей.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[5px]">
            Нетворк · сцена · конференции · демо · контент · community.
          </p>
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Это то, что AI не может за тебя сделать — и поэтому это твой моат.
          </p>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          В 2026 каждый одиночка-фаундер запускает Instantly за вечер. Конкурируешь не объёмом писем — присутствием там, где принимаются решения.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль сегодня
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1600px] tracking-[-0.01em]">
        Cold email + Meta-ads = 30% твоих первых клиентов. <span className="text-[hsl(var(--slide-gold))]">Остальные 70% — через людей.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[28px] max-w-[1600px] mb-[28px]">
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">
          Нетворк · сцена · конференции · демо · контент · community.
        </p>
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Это то, что AI не может за тебя сделать — и поэтому это твой моат.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1600px]">
        В 2026 каждый одиночка-фаундер запускает Instantly за вечер. Конкурируешь не объёмом писем — присутствием там, где принимаются решения.
      </p>
    </div>
  );
}
