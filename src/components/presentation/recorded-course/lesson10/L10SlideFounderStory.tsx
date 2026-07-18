import { useIsMobile } from "@/hooks/use-mobile";

export default function L10SlideFounderStory() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Твоя история основателя
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Люди покупают <span className="text-[hsl(var(--slide-gold))]">«почему ты»</span>, а не список фич.
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.55] mb-[10px]">
          Продукты с одинаковыми фичами есть у всех. Уникально одно - почему за это взялся именно ты. Твоя личная причина и есть то, что отличает тебя от безымянного конкурента.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[12px] py-[9px] mb-[9px]">
          <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Шаблон первой фразы</p>
          <p className="font-mono text-[10px] text-[hsl(var(--slide-text))] leading-[1.5] italic">
            «Я строю [продукт], потому что однажды [конкретный момент] - и понял [инсайт, который изменил всё]».
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Эту фразу можно сказать вслух на звонке и написать в первом посте. Один и тот же корень - <span className="text-[hsl(var(--slide-gold))]">и для B2B, и для B2C</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Твоя история основателя
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em] max-w-[1800px]">
        Люди покупают <span className="text-[hsl(var(--slide-gold))]">«почему ты»</span>, а не список фич.
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1800px] mb-[26px]">
        Продукты с одинаковыми фичами есть у всех. Уникально одно - почему за это взялся именно ты. Твоя личная причина и есть то, что отличает тебя от безымянного конкурента.
      </p>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[32px] py-[22px] max-w-[1800px] mb-[22px]">
        <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Шаблон первой фразы</p>
        <p className="font-mono text-[25px] text-[hsl(var(--slide-text))] leading-[1.5] italic">
          «Я строю [продукт], потому что однажды [конкретный момент] - и понял [инсайт, который изменил всё]».
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Эту фразу можно сказать вслух на звонке и написать в первом посте. Один и тот же корень - <span className="text-[hsl(var(--slide-gold))]">и для B2B, и для B2C</span>.
        </p>
      </div>
    </div>
  );
}
