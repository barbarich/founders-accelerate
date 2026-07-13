import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  {
    n: "1",
    t: "Warm intro (best)",
    d: "Conversion 30-50%. Через основателей в портфолио инвестора. Просьба: «можешь представить меня X?» Один в один.",
  },
  {
    n: "2",
    t: "AngelList / Twitter founders",
    d: "Conversion 10-15%. Открытые DM в Twitter к фаундерам/инвесторам. Краткий контекст + 1 ссылка на pitch deck.",
  },
  {
    n: "3",
    t: "Cold email (worst, но работает)",
    d: "Conversion 1-3%. 1 строка о тяге, 1 строка о пейне, 1 ссылка на deck. Без приложений. 30+ инвесторов в неделю.",
  },
  {
    n: "4",
    t: "Demo days / events",
    d: "Y Combinator, Techstars, Pioneer demo days. Локальные angel-meetups. Conversion 5-10% но качество выше — они уже investors.",
  },
];

export default function L14SlideOutreach() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Investor outreach · 4 канала по убывающей
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Где искать первого инвестора
        </h2>
        <div className="space-y-[8px]">
          {channels.map((c) => (
            <div key={c.n} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[10px] py-[6px]">
              <div className="flex items-baseline gap-[6px] mb-[2px]">
                <span className="font-mono text-[11px] text-[hsl(var(--slide-gold))] font-bold">{c.n}</span>
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{c.t}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Investor outreach · 4 канала по убывающей эффективности
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Где искать первого инвестора
      </h2>
      <div className="space-y-[16px] max-w-[1800px]">
        {channels.map((c) => (
          <div key={c.n} className="border-l-[4px] border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[28px] py-[14px]">
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <span className="font-mono text-[28px] text-[hsl(var(--slide-gold))] font-bold">{c.n}</span>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{c.t}</p>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
