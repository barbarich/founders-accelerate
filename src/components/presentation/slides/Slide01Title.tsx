import titleBg from "@/assets/slides/title-bg.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Slide01Title() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[32px]">
          <div className="w-[40px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[24px]" />
          <h1 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
            The Founders<br />Circle
          </h1>
          <p className="text-[16px] font-light text-[hsl(var(--slide-text-muted))] mt-[16px] tracking-[0.02em]">
            Акселератор-программа для запуска продуктов
          </p>
          <div className="mt-[32px] flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center">
              <span className="text-[hsl(var(--slide-gold))] text-[12px] font-semibold">MB</span>
            </div>
            <div>
              <p className="text-[14px] text-[hsl(var(--slide-text))] font-medium">Michael Barbarich</p>
              <p className="text-[11px] text-[hsl(var(--slide-text-muted))]">Предприниматель · 16 лет в бизнесе · 2 экзита</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1200px]">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[48px]" />
        <h1 className="font-display text-[96px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          The Founders<br />Circle
        </h1>
        <p className="text-[32px] font-light text-[hsl(var(--slide-text-muted))] mt-[32px] tracking-[0.02em]">
          Акселератор-программа для запуска продуктов
        </p>
        <div className="mt-[64px] flex items-center gap-[24px]">
          <div className="w-[48px] h-[48px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center">
            <span className="text-[hsl(var(--slide-gold))] text-[20px] font-semibold">MB</span>
          </div>
          <div>
            <p className="text-[24px] text-[hsl(var(--slide-text))] font-medium">Michael Barbarich</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">Предприниматель · 16 лет в бизнесе · 2 экзита</p>
          </div>
        </div>
      </div>
      <div className="absolute right-[200px] top-[200px] bottom-[200px] w-[1px] bg-gradient-to-b from-transparent via-[hsl(var(--slide-gold)/0.2)] to-transparent" />
    </div>
  );
}
