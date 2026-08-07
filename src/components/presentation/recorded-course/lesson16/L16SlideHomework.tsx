import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { n: "1", t: "Выбери 2 канала из четырёх", d: "По правилу с прошлого слайда: продаёшь бизнесу, людям или считаешь каждый доллар. Остальные два не трогаешь 90 дней" },
  { n: "2", t: "Собери список на 10 имён", d: "Партнёры, креаторы или треды - смотря что выбрал. Таблица: кто · чем занимается · конкретный человек · где ему писать" },
  { n: "3", t: "Подготовь то, без чего денег не будет", d: "Цена и кнопка оплаты на сайте. Условия в цифрах, если это партнёры или креаторы. Промокод или ссылка для учёта" },
  { n: "4", t: "Сделай 10 касаний за неделю", d: "10 писем, или 10 комментариев в тредах, или 10 писем авторам подборок. По 1-2 в день, каждое под конкретного человека" },
  { n: "5", t: "Заведи счётчик оплат", d: "Одна строка на канал: сколько заплатили. Через 90 дней канал с деньгами оставляешь, второй меняешь" },
];

export default function L16SlideHomework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Задание к уроку 17
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          5 пунктов - выбрал два канала и запустил
        </h2>
        <div className="space-y-[8px]">
          {items.map((i) => (
            <div key={i.n} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{i.n}</span>
              <div className="flex-1">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{i.t}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Задание к уроку 17
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        5 пунктов - выбрал два канала и запустил
      </h2>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px] max-w-[1800px]">
        {items.map((i) => (
          <div key={i.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[44px] h-[44px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{i.n}</span>
            <div className="flex-1">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">{i.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
