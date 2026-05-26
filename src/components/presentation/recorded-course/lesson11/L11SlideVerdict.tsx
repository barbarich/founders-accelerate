import { useIsMobile } from "@/hooks/use-mobile";

const verdicts = [
  {
    label: "GO",
    color: "gold",
    when: "9-axis: 7+ зелёных · Sean Ellis 40%+ · MRR растёт",
    action: "Масштабируй. Meta-реклама, sales-цикл, найм первого человека. Деньги работают.",
  },
  {
    label: "VALIDATE",
    color: "muted-gold",
    when: "9-axis: 5-6 зелёных · Sean Ellis 25-39% · MRR неровный",
    action: "Чини конкретные оси. Подними 2-3 худших оси до зелёного. Не лей в Meta — пока сжигаешь.",
  },
  {
    label: "PIVOT",
    color: "red",
    when: "9-axis: <5 зелёных · Sean Ellis <25% · retention падает",
    action: "Пивот гипотезы. Назад в L1-L2. Не строй больше на этом фундаменте — фундамента нет.",
  },
];

export default function L11SlideVerdict() {
  const isMobile = useIsMobile();

  const colorClass = (c: string) => {
    if (c === "gold") return "border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)]";
    if (c === "muted-gold") return "border-[hsl(var(--slide-gold)/0.5)] bg-[hsl(var(--slide-gold)/0.06)]";
    return "border-red-400/50 bg-red-400/5";
  };
  const textClass = (c: string) => {
    if (c === "gold") return "text-[hsl(var(--slide-gold))]";
    if (c === "muted-gold") return "text-[hsl(var(--slide-gold)/0.8)]";
    return "text-red-400";
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Verdict · что делать с цифрами
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          GO / VALIDATE / PIVOT
        </h2>
        <div className="space-y-[10px]">
          {verdicts.map((v) => (
            <div key={v.label} className={`border-l-2 ${colorClass(v.color)} px-[12px] py-[8px]`}>
              <p className={`text-[12px] font-bold uppercase tracking-[0.15em] mb-[4px] ${textClass(v.color)}`}>{v.label}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[3px]"><span className="font-semibold">Когда:</span> {v.when}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]"><span className="font-semibold">Что делать:</span> {v.action}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Verdict · что делать с цифрами
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        GO / VALIDATE / PIVOT
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1900px]">
        {verdicts.map((v) => (
          <div key={v.label} className={`border-l-[4px] ${colorClass(v.color)} px-[28px] py-[22px]`}>
            <p className={`text-[26px] font-bold uppercase tracking-[0.15em] mb-[14px] ${textClass(v.color)}`}>{v.label}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[12px]"><span className="font-semibold text-[hsl(var(--slide-text))]">Когда:</span> {v.when}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]"><span className="font-semibold text-[hsl(var(--slide-text))]">Что делать:</span> {v.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
