import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";

export default function L2Slide01Welcome() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[28px]">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[20px]" />
          <h1 className="font-display text-[36px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            The Founders<br />Circle
          </h1>
          <p className="text-[18px] font-light text-[hsl(var(--slide-gold))] mt-[12px] tracking-[0.02em]">
            Урок 2
          </p>
          <p className="text-[13px] text-[hsl(var(--slide-text-muted))] mt-[10px] leading-[1.5]">
            Качественный custdev + количественные опросы.<br />Action gate перед стройкой.
          </p>
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
        <h1 className="font-display text-[86px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          The Founders<br />Circle
        </h1>
        <p className="text-[36px] font-light text-[hsl(var(--slide-gold))] mt-[24px] tracking-[0.02em]">
          Урок 2
        </p>
        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mt-[16px] leading-[1.4] max-w-[800px]">
          Качественный custdev + количественные опросы.<br />
          Action gate перед Уроком 3.
        </p>
      </div>
      <div className="absolute right-[200px] top-[200px] bottom-[200px] w-[1px] bg-gradient-to-b from-transparent via-[hsl(var(--slide-gold)/0.2)] to-transparent" />
    </div>
  );
}
