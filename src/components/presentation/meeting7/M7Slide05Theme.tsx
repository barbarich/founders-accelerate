import { useIsMobile } from "@/hooks/use-mobile";

export default function M7Slide05Theme() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Тема встречи</p>
        <h2 className="font-display text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px]">
          От каркаса<br />к Aha.
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[14px]">
          На M6 собрали первый флоу. На M7 делаем его лёгким и доводим до момента, ради которого юзер вернётся.
        </p>
        <div className="border-l-[2px] border-[hsl(var(--slide-gold))] pl-[12px]">
          <p className="text-[12px] italic text-[hsl(var(--slide-gold))] leading-[1.5]">
            «Юзер не покупает фичу. Юзер покупает результат, который произошёл с ним.»
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Тема встречи</p>
      <h2 className="font-display text-[140px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[36px] tracking-[-0.02em]">
        От каркаса к Aha.
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.4] max-w-[1400px] mb-[36px]">
        На M6 собрали первый флоу. На M7 делаем его лёгким и доводим до момента, ради которого юзер вернётся.
      </p>
      <div className="border-l-[3px] border-[hsl(var(--slide-gold))] pl-[24px] max-w-[1400px]">
        <p className="text-[26px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">
          «Юзер не покупает фичу. Юзер покупает результат, который произошёл с ним.»
        </p>
      </div>
    </div>
  );
}