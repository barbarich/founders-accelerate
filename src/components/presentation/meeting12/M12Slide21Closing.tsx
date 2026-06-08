import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";

export default function M12Slide21Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[26px]">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[16px]" />
          <h1 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.08] tracking-[-0.02em]">
            12 недель позади.
          </h1>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[12px] leading-[1.5]">
            Я начинал так же — один, с сырым продуктом. По опыту доходят не самые талантливые, а те, кто продолжает на следующей неделе, когда уже никто не проверяет.
          </p>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[10px] leading-[1.5]">
            Alumni-группа остаётся — пишите, я на связи.
          </p>
          <p className="text-[13px] text-[hsl(var(--slide-gold))] font-semibold mt-[12px]">Спасибо, что были здесь.</p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mt-[6px]">— Михаэль</p>
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
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1500px]">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[40px]" />
        <h1 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          12 недель позади.
        </h1>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mt-[28px] leading-[1.5] max-w-[1250px]">
          Я начинал так же — один, с сырым продуктом. По опыту доходят не самые талантливые, а те, кто продолжает на следующей неделе, когда уже никто не проверяет.
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[20px] leading-[1.5] max-w-[1250px]">
          Alumni-группа остаётся — пишите, я на связи.
        </p>
        <p className="text-[26px] text-[hsl(var(--slide-gold))] font-semibold mt-[24px]">Спасибо, что были здесь.</p>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[10px]">— Михаэль</p>
      </div>
      <div className="absolute right-[200px] top-[200px] bottom-[200px] w-[1px] bg-gradient-to-b from-transparent via-[hsl(var(--slide-gold)/0.2)] to-transparent" />
    </div>
  );
}
