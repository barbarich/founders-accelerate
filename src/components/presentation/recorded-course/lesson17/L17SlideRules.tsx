import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { n: "1", t: "Считай действия, а не настроение", d: "Неделя, в которую ты сделал 10 касаний, - хорошая неделя. Даже если ответов ноль." },
  { n: "2", t: "Меняй одну переменную за раз", d: "Иначе не поймёшь, что именно сработало, и будешь ходить по кругу." },
  { n: "3", t: "Не переписывай продукт от тишины", d: "Сначала добавь объём касаний. Продукт - последнее, что стоит трогать." },
  { n: "4", t: "Минимальная единица - неделя", d: "Один день ничего не доказывает. Месяц - слишком поздно, чтобы что-то поправить." },
  { n: "5", t: "Найди одного человека для пятницы", d: "Не за советом - чтобы было кому сказать цифры недели. Пропускать становится неудобно." },
];

export default function L17SlideRules() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Когда захочется бросить
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[7px]">
          5 правил, которые держат в работе
        </h2>
        <div className="space-y-[5px]">
          {rules.map((r) => (
            <div key={r.n} className="flex items-start gap-[7px]">
              <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[16px] h-[16px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{r.n}</span>
              <div>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{r.t}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Когда захочется бросить
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        5 правил, <span className="text-[hsl(var(--slide-gold))]">которые держат в работе</span>
      </h2>
      <div className="space-y-[16px] max-w-[1500px]">
        {rules.map((r) => (
          <div key={r.n} className="flex items-start gap-[20px]">
            <span className="font-mono text-[19px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[42px] h-[42px] flex items-center justify-center shrink-0 font-bold">{r.n}</span>
            <div>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{r.t}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mt-[2px]">{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
