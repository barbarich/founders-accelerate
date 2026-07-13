import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { n: "1", t: "5 идеальных партнёров", d: "Используй 4 критерия. Имя · продукт · аудитория · контактный канал. Запиши в CSV" },
  { n: "2", t: "Тип партнёрства выбран", d: "Для каждого из 5: какой тип партнёрства предлагаешь (channel / integration / co-marketing / referral)" },
  { n: "3", t: "Pitch партнёра написан", d: "Шаблон: «что им — что мне» в 4-5 строках. Value-first: что они получат БЕЗ обязательств" },
  { n: "4", t: "5 первых сообщений отправлено", d: "По 1 партнёру в день. Через DM или email фаундеру. Без агентов и BD-менеджеров" },
  { n: "5", t: "Moat-стратегия зафиксирована", d: "Из 3 типов moats — какой ты строишь долгосрочно? Запиши + первое конкретное действие в этом направлении" },
];

export default function L15SlideHomework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Финальное задание курса
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          5 пунктов · от типа партнёрства к первым сообщениям
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
        Финальное задание курса
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        5 пунктов · от типа партнёрства к первым сообщениям
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
