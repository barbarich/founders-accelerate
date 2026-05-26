import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide02Intro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Прежде чем нажать "дальше"
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px] tracking-[-0.01em]">
          Я начну курс не с практики.<br /><span className="text-[hsl(var(--slide-gold))]">С правды.</span>
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          9 из 10 продуктов не доходят до запуска. Не потому что фаундеры не работают. <span className="text-[hsl(var(--slide-text))] font-medium">А потому что работают не над тем.</span>
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)] mb-[14px]" />
        <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
          5 правд ниже могут испортить тебе настроение. Это нормально. Без них ты повторишь те же ошибки, что и предыдущие 9 из 10.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Прежде чем нажать "дальше"
      </p>
      <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px] tracking-[-0.01em]">
        Я начну курс не с практики.<br /><span className="text-[hsl(var(--slide-gold))]">С правды.</span>
      </h2>
      <div className="max-w-[1300px] space-y-[28px]">
        <p className="text-[30px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          9 из 10 продуктов не доходят до запуска. Не потому что фаундеры не работают. <span className="text-[hsl(var(--slide-text))] font-semibold">А потому что работают не над тем.</span>
        </p>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)]" />
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
          5 правд ниже могут испортить тебе настроение. Это нормально.<br />Без них ты повторишь те же ошибки, что и предыдущие 9 из 10.
        </p>
      </div>
    </div>
  );
}
