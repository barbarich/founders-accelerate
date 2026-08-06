import { useIsMobile } from "@/hooks/use-mobile";

export default function L16Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Канал считается рабочим, только когда <span className="text-[hsl(var(--slide-gold))]">кто-то заплатил</span>.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          Подписчики, установки, регистрации и место в рейтинге - это не результат. Реальный пример: один запуск на площадке для стартапов набрал 300 лайков от других пользователей и дал 91 платящего, другой - 612 лайков и <span className="text-[hsl(var(--slide-text))] font-medium">одного</span> платящего.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            У каждого канала спрашивай одно: <span className="text-[hsl(var(--slide-gold))]">сколько человек заплатили</span>. Всё остальное - красивые цифры, на которые нельзя жить.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Канал считается рабочим, только когда <span className="text-[hsl(var(--slide-gold))]">кто-то заплатил</span>.
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[32px]">
        Подписчики, установки, регистрации и место в рейтинге - это не результат. Реальный пример: один запуск на площадке для стартапов набрал 300 лайков от других пользователей и дал 91 платящего, другой - 612 лайков и <span className="text-[hsl(var(--slide-text))] font-semibold">одного</span> платящего.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[22px] max-w-[1700px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          У каждого канала спрашивай одно: <span className="text-[hsl(var(--slide-gold))]">сколько человек заплатили</span>. Всё остальное - красивые цифры, на которые нельзя жить.
        </p>
      </div>
    </div>
  );
}
