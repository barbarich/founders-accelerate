import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";

export default function M12Slide01Welcome() {
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
          <h1 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.08] tracking-[-0.02em]">
            Финал. Ты прошёл 12 недель.<br />Сегодня — демо-день.
          </h1>
          <p className="text-[15px] font-light text-[hsl(var(--slide-gold))] mt-[12px] tracking-[0.02em]">
            Встреча 12 · Демо-день и что дальше
          </p>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[10px] leading-[1.5]">
            Упакуешь всё в 5-минутный питч, выйдешь вживую, уйдёшь с планом на партнёрство, деньги и следующий шаг. Это victory lap. Не ещё одно обучение.
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
        <h1 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          Финал. Ты прошёл 12 недель.<br />
          Сегодня — демо-день.
        </h1>
        <p className="text-[36px] font-light text-[hsl(var(--slide-gold))] mt-[24px] tracking-[0.02em]">
          Встреча 12 · Демо-день и что дальше
        </p>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mt-[20px] leading-[1.4] max-w-[1200px]">
          Упакуешь всё в 5-минутный питч, выйдешь вживую, уйдёшь с планом на партнёрство, деньги и следующий шаг.<br />
          Это victory lap. Не ещё одно обучение.
        </p>
      </div>
      <div className="absolute right-[200px] top-[200px] bottom-[200px] w-[1px] bg-gradient-to-b from-transparent via-[hsl(var(--slide-gold)/0.2)] to-transparent" />
    </div>
  );
}
