import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";
import FOM2Footer from "./FOM2Footer";

export default function FOM2Slide01Cover() {
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
            The Founders Circle · Сессия 2 из 6
          </p>
          <h1 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            Цена и MVP.<br />
            <span className="text-[hsl(var(--slide-gold))]">Сколько берём</span> и что строим первым.
          </h1>
          <div className="mt-[18px] space-y-[8px] text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> 120 минут · 2 фаундера · разбор по готовности</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> два навыка сегодня: поставить цену + отрезать скоуп</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> позиционирование из С1 — используем как фильтр</p>
          </div>
        </div>
        <FOM2Footer slide={1} />
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
          The Founders Circle · Сессия 2 из 6
        </p>
        <h1 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] max-w-[1500px]">
          Цена и MVP.<br />
          <span className="text-[hsl(var(--slide-gold))]">Сколько берём</span> и что строим первым.
        </h1>
        <div className="mt-[44px] grid grid-cols-3 gap-[32px] max-w-[1500px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Формат</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">120 минут · 2 фаундера</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">2 навыка</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">поставить цену + отрезать скоуп</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Фильтр</p>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.35]">позиционирование из С1</p>
          </div>
        </div>
      </div>
      <FOM2Footer slide={1} />
    </div>
  );
}
