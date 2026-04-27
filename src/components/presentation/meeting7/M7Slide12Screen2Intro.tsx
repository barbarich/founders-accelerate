import { useIsMobile } from "@/hooks/use-mobile";

export default function M7Slide12Screen2Intro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Экран 2 · Одно действие
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          После одного действия — сразу результат.
        </h2>
        <div className="space-y-[6px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px] font-semibold">Цель</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Человек делает что-то одно — и сразу видит, что обещание из экрана 1 выполняется.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px] font-semibold">Срок</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Не дольше 30 секунд от клика до результата.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.2)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[3px] font-semibold">Запрещено</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              Туры. Настройки. Регистрация до результата.
            </p>
          </div>
        </div>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Между обещанием и результатом стена — все на ней ломаются.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Экран 2 · Одно действие
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px] max-w-[1500px]">
        После одного действия — сразу результат.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1600px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px] font-semibold">Цель</p>
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Человек делает что-то одно — и сразу видит, что обещание из экрана 1 выполняется.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px] font-semibold">Срок</p>
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Не дольше 30 секунд от клика до результата.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.2)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] mb-[10px] font-semibold">Запрещено</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
            Туры. Настройки. Регистрация до результата.
          </p>
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Между обещанием на первом экране и результатом большинство продуктов ставят 5–7 шагов. Это и есть стена. Сегодня сносим.
      </p>
    </div>
  );
}
