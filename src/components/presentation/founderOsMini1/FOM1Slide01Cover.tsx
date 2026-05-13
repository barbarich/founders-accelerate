import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

export default function FOM1Slide01Cover() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] relative">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          The Founders Circle
        </p>
        <h1 className="font-display text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          Founder OS Mini
        </h1>
        <p className="text-[14px] text-[hsl(var(--slide-gold))] mt-[10px]">Сессия 1 из 6</p>
        <div className="w-[40px] h-[2px] bg-[hsl(var(--slide-gold))] my-[18px]" />
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">
          6 встреч × 2 часа. От идеи до первого платящего клиента за 30 дней.
          <br /><br />
          Сегодня — кто ваш клиент и за что он заплатит.
        </p>
        <FOM1Footer slide={1} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] relative">
      <p className="text-[20px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[28px]">
        The Founders Circle
      </p>
      <h1 className="font-display text-[120px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] tracking-[-0.03em]">
        Founder OS Mini
      </h1>
      <p className="text-[36px] text-[hsl(var(--slide-gold))] mt-[20px] tracking-[0.02em]">Сессия 1 из 6</p>
      <div className="w-[120px] h-[2px] bg-[hsl(var(--slide-gold))] my-[40px]" />
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1300px]">
        6 встреч × 2 часа. От идеи до первого платящего клиента за 30 дней.
        <br />
        Сегодня — кто ваш клиент и за что он заплатит.
      </p>
      <FOM1Footer slide={1} />
    </div>
  );
}
