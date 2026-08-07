import { useIsMobile } from "@/hooks/use-mobile";

const blocks = [
  {
    when: "Понедельник · 30 минут",
    t: "План недели",
    d: "Одно число, которого добиваешься на этой неделе, и список из 10 имён, кому напишешь.",
  },
  {
    when: "Каждый день · 45-60 минут",
    t: "2 касания и 1 доработка",
    d: "Сначала касания, потом продукт. Если наоборот - продукт съест всё время, и до людей ты не дойдёшь.",
  },
  {
    when: "Пятница · 30 минут",
    t: "Цифры и один вывод",
    d: "Цифры недели в таблицу, одна вещь на повтор, одна на выброс. Отправь их одному живому человеку - пропускать пятницу сразу становится неудобно.",
  },
];

export default function L17SlideWeeklyRhythm() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Как выглядит рабочая неделя
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Ритм недели · около 6 часов
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Столько нужно, если ты делаешь это параллельно с работой. Больше - хорошо, меньше - не считается.
        </p>
        <div className="space-y-[5px]">
          {blocks.map((b) => (
            <div key={b.when} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[7.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold">{b.when}</p>
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{b.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px] mt-[7px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Продукт всегда кажется важнее, чем поиск клиентов. Это ловушка: продукт можно улучшать бесконечно, а клиентов ты либо ищешь, либо нет.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Как выглядит рабочая неделя
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Ритм недели · <span className="text-[hsl(var(--slide-gold))]">около 6 часов</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1500px]">
        Столько нужно, если ты делаешь это параллельно с работой. Больше - хорошо, меньше - не считается.
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1550px]">
        {blocks.map((b) => (
          <div key={b.when} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <p className="text-[14px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">{b.when}</p>
            <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">{b.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{b.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1550px] mt-[22px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Продукт всегда кажется важнее, чем поиск клиентов. Это ловушка: продукт можно улучшать бесконечно, а клиентов ты либо ищешь, либо нет.
        </p>
      </div>
    </div>
  );
}
