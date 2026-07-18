import { useIsMobile } from "@/hooks/use-mobile";

const cards = [
  {
    type: "B2C",
    sub: "интернет-магазины, приложения для людей",
    price: "$30 – 100",
    avg: "в среднем ~$70",
    why: "Решение принимают за минуты, один человек, дешёвый охват через ленту. Поэтому привести платящего дёшево.",
  },
  {
    type: "B2B",
    sub: "продажа бизнесу, SaaS",
    price: "$400 – 1500+",
    avg: "бывает и $5000",
    why: "Длинный цикл, решают несколько человек, дороже каждый шаг. Зато один клиент платит дольше и больше.",
  },
];

export default function L11Slide17Metrics() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Сколько стоит один платящий клиент
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          B2C - десятки долларов. B2B - <span className="text-[hsl(var(--slide-gold))]">сотни</span>.
        </h2>
        <div className="grid grid-cols-2 gap-[8px] mb-[8px]">
          {cards.map((c) => (
            <div key={c.type} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))]">{c.type}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.3]">{c.sub}</p>
              <p className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.05]">{c.price}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-gold)/0.85)] mb-[4px]">{c.avg}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{c.why}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Честно: это средние по рынку. Твои <b>первые кампании будут дороже</b>, пока учишься. Правило одно: за всё время клиент должен принести <b className="text-[hsl(var(--slide-gold))]">минимум втрое больше</b>, чем стоил.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Сколько стоит привести одного платящего клиента
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.02em]">
        B2C - десятки долларов. B2B - <span className="text-[hsl(var(--slide-gold))]">сотни</span>. Вот почему.
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[24px] max-w-[1600px]">
        Средние по рынку 2024. Не бенчмарк, чтобы гнаться, а порядок цифр - чтобы понимать, во что ввязываешься.
      </p>
      <div className="grid grid-cols-2 gap-[22px] max-w-[1600px] mb-[22px]">
        {cards.map((c) => (
          <div key={c.type} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[32px] py-[24px]">
            <div className="flex items-baseline gap-[14px] mb-[2px]">
              <p className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{c.type}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text-muted))]">{c.sub}</p>
            </div>
            <p className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mt-[10px]">{c.price}</p>
            <p className="text-[16px] text-[hsl(var(--slide-gold)/0.9)] mb-[12px]">{c.avg} за одного платящего</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{c.why}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[18px] max-w-[1600px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Честно: это средние у зрелых компаний. Твои <b>первые кампании будут дороже</b> - пока учишься. Правило одно, простое: за всё время клиент должен принести <b className="text-[hsl(var(--slide-gold))]">минимум втрое больше, чем стоил</b>. Иначе бизнеса нет.
        </p>
      </div>
    </div>
  );
}
