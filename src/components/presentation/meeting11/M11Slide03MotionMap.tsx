import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", name: "ICP", goal: "7 фильтров", out: "не «все», а конкретный портрет" },
  { n: "2", name: "Dream 50", goal: "150 имён", out: "50 счетов × 3 stakeholder'а" },
  { n: "3", name: "Multi-touch", goal: "trigger-based", out: "warm > event > DM > email" },
  { n: "4", name: "Discovery", goal: "5 вопросов", out: "вытаскиваешь факт, не мнение" },
  { n: "5", name: "Demo", goal: "один use-case", out: "из discovery, не tour" },
  { n: "6", name: "Close", goal: "MAP подписан", out: "next step с датой" },
  { n: "7", name: "Expand", goal: "3 рефералки", out: "из сделки #1 — сделки #2-5" },
];

export default function M11Slide03MotionMap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Карта motion
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          7 этапов · <span className="text-[hsl(var(--slide-gold))]">один путь</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Каждый блок встречи привязан к этапу. Прыгать через этап нельзя — ломается всё ниже по воронке.
        </p>
        <div className="space-y-[3px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{s.name}</span>
                <span className="text-[7.5px] text-[hsl(var(--slide-gold))]">· {s.goal}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{s.out}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Карта motion
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        7 этапов · <span className="text-[hsl(var(--slide-gold))]">один путь от пустого CRM до сделки</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1700px] leading-[1.45]">
        Каждый блок этой встречи привязан к этапу. Прыгать через этап нельзя — ломается всё ниже по воронке. Если discovery провален — demo не закроет. Если ICP размазан — discovery не разговорит.
      </p>
      <div className="grid grid-cols-4 gap-[20px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[20px]">
            <p className="font-display text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[8px]">{s.n}</p>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{s.name}</p>
            <p className="text-[16px] text-[hsl(var(--slide-gold))] mb-[10px]">{s.goal}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.out}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
