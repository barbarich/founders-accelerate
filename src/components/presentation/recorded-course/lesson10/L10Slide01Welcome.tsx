import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";

export default function L10Slide01Welcome() {
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
          <h1 className="font-display text-[27px] font-bold text-[hsl(var(--slide-text))] leading-[1.08] tracking-[-0.02em]">
            Go-To-Market.<br />Где живёт твоя аудитория и как прийти к ней первым.
          </h1>
          <p className="text-[15px] font-light text-[hsl(var(--slide-gold))] mt-[12px] tracking-[0.02em]">
            Урок 10
          </p>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[10px] leading-[1.5]">
            Кто твои люди, где они уже собраны, как выйти на них руками и без бюджета. Уходишь с маркетинг-планом, не с конспектом.
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
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1500px]">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[48px]" />
        <h1 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          Go-To-Market.<br />
          Где живёт твоя аудитория и как прийти к ней первым.
        </h1>
        <p className="text-[36px] font-light text-[hsl(var(--slide-gold))] mt-[24px] tracking-[0.02em]">
          Урок 10
        </p>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mt-[20px] leading-[1.4] max-w-[1200px]">
          Кто твои люди, где они уже собраны, как выйти на них руками и без бюджета.<br />
          Уходишь с маркетинг-планом, не с конспектом.
        </p>
      </div>
    </div>
  );
}
