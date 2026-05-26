import { useIsMobile } from "@/hooks/use-mobile";

export default function L2SlideWhyPrototype() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Зачем прототип ДО кастдева
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Идея в голове <span className="text-[hsl(var(--slide-gold))]">размытая</span>.<br />Идея на экране — <span className="text-[hsl(var(--slide-gold))]">конкретная</span>.
        </h2>
        <div className="space-y-[10px] mb-[14px]">
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.4)] px-[12px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium mb-[3px]">Без прототипа</p>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">«Звучит интересно, расскажи подробнее» — вежливый отказ. Specific feedback не получишь.</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[12px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">С прототипом</p>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">«Эта кнопка непонятна» · «я бы платил за X, не за Y» · «а вот это раздражает» — specific и actionable.</p>
          </div>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Прототип = объект <span className="text-[hsl(var(--slide-text))] font-medium">для тебя самого</span>. Из абстрактной идеи в голове рождается конкретный артефакт. <span className="text-[hsl(var(--slide-text))] font-medium">Ты сам начинаешь видеть что работает</span>.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Прототип за выходные собирает <span className="text-[hsl(var(--slide-gold))]">100x</span> больше insight'ов, чем 10 разговоров об идее.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Зачем прототип ДО кастдева
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Идея в голове <span className="text-[hsl(var(--slide-gold))]">размытая</span>.<br />Идея на экране — <span className="text-[hsl(var(--slide-gold))]">конкретная</span>.
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1700px] mb-[28px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)] px-[28px] py-[20px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] font-medium mb-[10px]">Без прототипа</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            «Звучит интересно, расскажи подробнее» — вежливый отказ. Specific feedback не получишь.
          </p>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[20px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">С прототипом</p>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            «Эта кнопка непонятна» · «я бы платил за X, не Y» · «а вот это раздражает» — specific и actionable.
          </p>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[28px]">
        Прототип = объект <span className="text-[hsl(var(--slide-text))] font-semibold">для тебя самого</span>. Из абстрактной идеи в голове рождается конкретный артефакт. <span className="text-[hsl(var(--slide-text))] font-semibold">Ты сам начинаешь видеть что работает, что нет</span> — без чьего-либо мнения.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Прототип за выходные собирает <span className="text-[hsl(var(--slide-gold))] font-bold">100×</span> больше insight'ов, чем 10 разговоров об идее.
        </p>
      </div>
    </div>
  );
}
