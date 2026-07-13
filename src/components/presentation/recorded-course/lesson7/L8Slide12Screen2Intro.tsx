import { useIsMobile } from "@/hooks/use-mobile";

export default function L8Slide12Screen2Intro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Экран 2 · Одно действие
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Первый осмысленный результат — как можно быстрее.
        </h2>
        <div className="space-y-[6px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px] font-semibold">Цель</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Человек проходит минимально необходимый путь — и получает первый результат, который подтверждает обещание из экрана 1.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px] font-semibold">Ориентир</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Минимум шагов до «вау». Если AI или процесс долгий — покажите прогресс и промежуточный смысл.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.2)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[3px] font-semibold">Запрещено</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              Лишние шаги, туры, настройки и регистрация до первого результата.
            </p>
          </div>
        </div>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Между обещанием и результатом — стена из лишних шагов. Сносим всё, что не ведёт к «вау».
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
        Первый осмысленный результат — как можно быстрее.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1600px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px] font-semibold">Цель</p>
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Человек проходит минимально необходимый путь — и получает первый результат, который подтверждает обещание из экрана 1.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px] font-semibold">Ориентир</p>
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Минимум шагов до «вау». Если процесс или AI долгие — показывайте прогресс и промежуточный смысл, чтобы человек не выпадал.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.2)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] mb-[10px] font-semibold">Запрещено</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
            Лишние шаги, длинные туры, настройки и регистрация до первого результата.
          </p>
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Между обещанием на первом экране и результатом большинство продуктов ставят 5–7 лишних шагов. Это и есть стена. Сегодня сносим всё, что не ведёт к первому «вау».
      </p>
    </div>
  );
}
