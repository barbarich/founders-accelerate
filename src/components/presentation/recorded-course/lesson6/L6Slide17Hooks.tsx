import { useIsMobile } from "@/hooks/use-mobile";

const compare = [
  {
    label: "Фокус на продукте",
    bad: true,
    text: "Mikey AI — это AI-клон фаундера, который автоматически отвечает на входящие сообщения в LinkedIn.",
    note: "Читатель думает: «Ну и что? Зачем мне это?»",
  },
  {
    label: "Фокус на клиенте",
    bad: false,
    text: "Ты получаешь 50 DM в день и не успеваешь отвечать. Теряешь партнёров, инвесторов, клиентов. Mikey AI отвечает за тебя — в твоём голосе, пока ты занимаешься продуктом.",
    note: "Читатель думает: «Это про меня. Хочу узнать больше.»",
  },
];

export default function L6Slide17Hooks() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — шаг 2
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Клиент — герой. Ты — проводник.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Самая частая ошибка: фаундер делает героем себя или продукт. Читателю всё равно. Он ищет себя в истории.
        </p>
        <div className="space-y-[6px] mb-[8px]">
          {compare.map((c, i) => (
            <div key={i} className={`rounded-[6px] px-[10px] py-[7px] border ${c.bad ? 'bg-[hsl(0_20%_12%)] border-[hsl(0_60%_40%/0.3)]' : 'bg-[hsl(142_20%_10%)] border-[hsl(142_50%_40%/0.3)]'}`}>
              <p className={`text-[8px] font-bold mb-[3px] ${c.bad ? 'text-[hsl(0_60%_65%)]' : 'text-[hsl(142_50%_60%)]'}`}>{c.bad ? '✗' : '✓'} {c.label}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">{c.text}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] italic">{c.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[6px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] italic">«Я помог [имя/персона] достичь [результат]» работает лучше чем «Мой продукт делает [фича]»</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — шаг 2
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Клиент — герой. Ты — проводник.
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1200px] leading-[1.45]">
        Самая частая ошибка: фаундер делает героем себя или продукт. Читателю всё равно. Он ищет себя в истории — и покупает, когда находит.
      </p>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1400px] mb-[20px]">
        {compare.map((c, i) => (
          <div key={i} className={`rounded-[14px] px-[26px] py-[22px] border-2 ${c.bad ? 'bg-[hsl(0_15%_10%)] border-[hsl(0_60%_40%/0.4)]' : 'bg-[hsl(142_15%_9%)] border-[hsl(142_50%_40%/0.4)]'}`}>
            <p className={`text-[14px] font-bold uppercase tracking-[0.15em] mb-[12px] ${c.bad ? 'text-[hsl(0_60%_65%)]' : 'text-[hsl(142_50%_60%)]'}`}>{c.bad ? '✗' : '✓'} {c.label}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.55] mb-[10px]">{c.text}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] italic border-t border-[hsl(var(--slide-border)/0.3)] pt-[8px]">{c.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[14px] max-w-[1400px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] italic">
          «Я помог <span className="text-[hsl(var(--slide-gold))]">[конкретный человек]</span> достичь <span className="text-[hsl(var(--slide-gold))]">[конкретный результат]</span>» — работает лучше, чем «Мой продукт делает <span className="text-[hsl(var(--slide-gold))]">[фича]</span>»
        </p>
      </div>
    </div>
  );
}
