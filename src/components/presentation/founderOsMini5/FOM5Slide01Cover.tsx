import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";
import FOM5Footer from "./FOM5Footer";

export default function FOM5Slide01Cover() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[28px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[20px]" />
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[10px] font-medium mb-[10px]">
            The Founders Circle · Сессия 5 из 6
          </p>
          <h1 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            Маркетинг.<br />
            <span className="text-[hsl(var(--slide-gold))]">AI-креативы, аватары</span> и запуск Meta.
          </h1>
          <div className="mt-[18px] space-y-[8px] text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> 120 минут · 2 фаундера · запускаем рекламу вживую</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> рамка дня: креативы → аватары → кампания в Meta</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> приносим: продукт с почищенными первыми 60 секундами</p>
          </div>
        </div>
        <FOM5Footer slide={1} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1500px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[48px]" />
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium mb-[28px]">
          The Founders Circle · Сессия 5 из 6
        </p>
        <h1 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] max-w-[1500px]">
          Маркетинг.<br />
          <span className="text-[hsl(var(--slide-gold))]">AI-креативы, аватары</span> и запуск Meta.
        </h1>
        <div className="mt-[44px] grid grid-cols-3 gap-[32px] max-w-[1500px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Формат</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">120 минут · запускаем рекламу вживую</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Рамка дня</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">креативы → аватары → кампания в Meta</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">С чем пришли</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">продукт с почищенными 60 секундами из С4</p>
          </div>
        </div>
      </div>
      <FOM5Footer slide={1} />
    </div>
  );
}
