import { useIsMobile } from "@/hooks/use-mobile";

const founders = ["Laura", "Mila", "Lea", "Vlad", "Inna + Aleksandra"];

const rule = [
  "Проблема → решение с демо → доказательство → почему ты → запрос",
  "5 минут. Ни одного лишнего слова",
  "Покажи продукт вживую, а не описывай словами",
  "Закончи конкретным запросом, не «спасибо за внимание»",
];

export default function M12Slide09Participants() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Демо-день · кто выступает
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Пять продуктов. <span className="text-[hsl(var(--slide-gold))]">Одно правило для всех.</span>
        </h2>
        <div className="flex flex-wrap gap-[4px] mb-[10px]">
          {founders.map((f) => (
            <span key={f} className="text-[9px] text-[hsl(var(--slide-text))] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">{f}</span>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[6px] px-[10px] py-[7px]">
          <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[4px]">Правило питча для всех</p>
          <div className="space-y-[3px]">
            {rule.map((r) => (
              <p key={r} className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[5px]">→</span>{r}</p>
            ))}
          </div>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px]">5 минут каждому · порядок по готовности.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Демо-день · кто выступает
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Пять продуктов. <span className="text-[hsl(var(--slide-gold))]">Одно правило для всех.</span>
      </h2>
      <div className="flex flex-wrap gap-[12px] max-w-[1700px] mb-[28px]">
        {founders.map((f) => (
          <span key={f} className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[10px] px-[24px] py-[10px]">{f}</span>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[34px] py-[24px] max-w-[1700px]">
        <p className="text-[16px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[14px]">Правило питча — для всех одно</p>
        <div className="space-y-[10px]">
          {rule.map((r) => (
            <p key={r} className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[12px]">→</span>{r}</p>
          ))}
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold mt-[22px]">5 минут каждому · порядок по готовности.</p>
    </div>
  );
}
