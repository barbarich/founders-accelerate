import { useIsMobile } from "@/hooks/use-mobile";

export default function M7Slide18Screen3Intro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Экран 3 · Причина вернуться
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Одна причина вернуться завтра. Не три, не десять — одна.
        </h2>
        <div className="space-y-[6px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px] font-semibold">Цель</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
              К моменту, когда юзер закрывает продукт впервые — у него должна быть одна конкретная причина открыть его снова.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px] font-semibold">Это не push-уведомление</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Это структурное свойство продукта. Push без причины раздражает. Push в дополнение — работает.
            </p>
          </div>
        </div>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Самый часто сломанный экран из трёх.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Экран 3 · Причина вернуться
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px] max-w-[1500px]">
        Одна причина вернуться завтра. Не три, не десять — одна.
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1500px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px] font-semibold">Цель экрана</p>
          <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            К моменту, когда юзер закрывает продукт впервые — у него должна быть одна конкретная причина открыть его снова.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px] font-semibold">Это не push-уведомление</p>
          <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Это структурное свойство продукта. Push без причины раздражает. Push в дополнение — работает.
          </p>
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Самый часто сломанный экран из трёх. Большинство продуктов отдают результат и тут же отпускают человека.
      </p>
    </div>
  );
}
