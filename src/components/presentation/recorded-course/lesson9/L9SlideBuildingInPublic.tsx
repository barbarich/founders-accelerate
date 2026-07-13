import { useIsMobile } from "@/hooks/use-mobile";

const principles = [
  { t: "Цифры реальные · не маркетинг", d: "MRR · users · churn · что не работает. Без приукрашивания. Pieter Levels публикует stripe screenshot каждый месяц — это и есть его маркетинг" },
  { t: "Поражения наравне с победами", d: "Pivot · churn · отвергнутые гипотезы. Это создаёт credibility сильнее, чем только success-stories" },
  { t: "Конкретные lessons learned", d: "Не «расти трудно». А «потратил $500 на Meta, получил 2 платных — ROI отрицательный. Сегодня пробую LinkedIn outreach»" },
  { t: "Регулярность важнее размаха", d: "1 пост в неделю на протяжении года побеждает 10 постов за месяц + пустота. Алгоритмы и аудитория наказывают inconsistency" },
];

export default function L9SlideBuildingInPublic() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Building in public · 4 правила
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Делись путём, не результатом
        </h2>
        <div className="space-y-[8px]">
          {principles.map((p) => (
            <div key={p.t} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[10px] py-[6px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{p.t}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-[12px] bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Aудитория ниже 500? <span className="text-[hsl(var(--slide-gold))]">Build in public станет работать только при росте.</span> Параллельно делай cold outreach (Урок 5).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Building in public · 4 правила
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        Делись путём, не результатом
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1800px] mb-[28px]">
        {principles.map((p) => (
          <div key={p.t} className="border-l-[4px] border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[28px] py-[14px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{p.t}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Aудитория ниже 500? <span className="text-[hsl(var(--slide-gold))]">Build in public станет работать только при росте.</span> Параллельно делай cold outreach (Урок 5).
        </p>
      </div>
    </div>
  );
}
