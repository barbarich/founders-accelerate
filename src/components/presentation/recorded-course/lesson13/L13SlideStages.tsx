import { useIsMobile } from "@/hooks/use-mobile";

const stages = [
  { n: "1", name: "Контакт", proof: "он ответил" },
  { n: "2", name: "Разговор состоялся", proof: "назвал свою задачу в часах или деньгах" },
  { n: "3", name: "Показ", proof: "увидел решение своей задачи, а не тур по продукту" },
  { n: "4", name: "Проверка", proof: "согласован тест: дата старта, дата решения, критерий «получилось»" },
  { n: "5", name: "Согласование", proof: "цена и условия дошли до того, кто платит" },
  { n: "6", name: "Подписано", proof: "договор или оплата" },
];

export default function L13SlideStages() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Стадии сделки
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Стадию двигает факт от клиента, <span className="text-[hsl(var(--slide-gold))]">а не твоё ощущение</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          У каждой стадии — одно доказательство. Нет доказательства — сделка стоит на прежней стадии, как бы хорошо ни прошёл разговор.
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {stages.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px] flex items-baseline gap-[6px]">
              <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
              <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] w-[80px] shrink-0">{s.name}</span>
              <span className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.proof}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            «Кажется, им понравилось» — это не стадия. Это надежда.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Стадии сделки
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em] max-w-[1700px]">
        Стадию двигает факт от клиента, <span className="text-[hsl(var(--slide-gold))]">а не твоё ощущение</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[22px] max-w-[1700px] leading-[1.45]">
        У каждой стадии — одно доказательство. Нет доказательства — сделка стоит на прежней стадии, каким бы приятным ни был разговор.
      </p>
      <div className="space-y-[10px] max-w-[1700px] mb-[18px]">
        {stages.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[26px] py-[13px] flex items-baseline gap-[18px]">
            <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{s.n}</span>
            <span className="text-[24px] font-bold text-[hsl(var(--slide-text))] w-[420px] shrink-0">{s.name}</span>
            <span className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">доказательство: {s.proof}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          «Кажется, им понравилось» — это не стадия. Это надежда. Надежда не считается в прогнозе выручки.
        </p>
      </div>
    </div>
  );
}
