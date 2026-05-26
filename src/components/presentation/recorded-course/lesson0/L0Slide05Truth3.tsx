import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide05Truth3() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 3 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          $30/день в Meta без событий на пикселе = $30 в мусор
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          Метa-реклама работает на <span className="text-[hsl(var(--slide-text))] font-medium">сигналах</span>. Сигналы — это events: кто-то открыл лендинг, нажал кнопку, заплатил.
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Если ты не настроил эти события, Меta не знает кого тебе оптимизировать. Показывает рекламу всем подряд. <span className="text-[hsl(var(--slide-text))] font-medium">И НЕ учится.</span>
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            73% соло-фаундеров запускают Meta без правильно настроенных событий.
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mt-[6px]">
            За 30 дней теряют <span className="text-[hsl(var(--slide-gold))] font-bold">$900</span>. За 90 дней — <span className="text-[hsl(var(--slide-gold))] font-bold">$2 700</span>.
          </p>
        </div>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            События на пикселе (PageView / Lead / Purchase / CompleteRegistration) + CAPI <span className="text-[hsl(var(--slide-gold))]">ДО</span> первой кампании. Уроки 11–13.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 3 из 5
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1600px]">
        $30/день в Meta без событий на пикселе =<br />$30 в мусор каждый день
      </h2>
      <div className="max-w-[1500px] space-y-[20px] mb-[28px]">
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Метa-реклама работает на <span className="text-[hsl(var(--slide-text))] font-semibold">сигналах</span>. Сигналы — это events: кто открыл лендинг, нажал кнопку, заплатил. Если ты не настроил эти события, Меta не знает кого тебе оптимизировать. Показывает рекламу всем подряд. <span className="text-[hsl(var(--slide-text))] font-semibold">И НЕ учится.</span>
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1500px] mb-[28px]">
        <p className="text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">
          73% соло-фаундеров запускают Meta без правильно настроенных событий.
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          За 30 дней теряют <span className="text-[hsl(var(--slide-gold))] font-bold">$900</span>. За 90 дней — <span className="text-[hsl(var(--slide-gold))] font-bold">$2 700</span>.
        </p>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1500px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          События на пикселе (PageView / Lead / Purchase / CompleteRegistration) + CAPI <span className="text-[hsl(var(--slide-gold))] font-semibold">ДО</span> первой кампании. Уроки 11–13.
        </p>
      </div>
    </div>
  );
}
