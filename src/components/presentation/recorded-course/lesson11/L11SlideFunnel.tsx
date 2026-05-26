import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "A", t: "Acquisition", e: "PageView, AdClick, OrganicVisit", desc: "Сколько людей видят твой лендинг" },
  { n: "A", t: "Activation", e: "SignUp, AddFirstItem, CompleteOnboarding", desc: "Сколько из них реально начали пользоваться" },
  { n: "R", t: "Retention", e: "D1, D7, D30 return", desc: "Сколько вернулись на 2-й день / 7-й / 30-й" },
  { n: "R", t: "Revenue", e: "Purchase, Subscribe, Upgrade", desc: "Сколько из них заплатили" },
  { n: "R", t: "Referral", e: "Invite, Share, NPS≥9", desc: "Сколько привели друга" },
];

export default function L11SlideFunnel() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Воронка AARRR · pirate metrics
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Что измерять — 5 этапов
        </h2>
        <div className="space-y-[6px]">
          {steps.map((s, i) => (
            <div key={i} className="border-l-2 border-[hsl(var(--slide-gold)/0.3)] bg-[hsl(var(--slide-gold)/0.04)] pl-[10px] py-[6px]">
              <div className="flex items-baseline gap-[8px] mb-[2px]">
                <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] font-bold">{s.n}</span>
                <p className="text-[12px] font-bold text-[hsl(var(--slide-text))]">{s.t}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[2px]">{s.desc}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-gold))] font-mono leading-[1.4]">События: {s.e}</p>
            </div>
          ))}
        </div>
        <div className="mt-[10px] bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Каждый этап = отдельное событие в Mixpanel/GA4. Если события нет — улучшать нечего.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Воронка AARRR · pirate metrics
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Что измерять — <span className="text-[hsl(var(--slide-gold))]">5 этапов</span> жизни клиента
      </h2>
      <div className="space-y-[14px] max-w-[1800px] mb-[24px]">
        {steps.map((s, i) => (
          <div key={i} className="border-l-[4px] border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[28px] py-[14px]">
            <div className="flex items-baseline gap-[16px] mb-[6px]">
              <span className="font-mono text-[28px] text-[hsl(var(--slide-gold))] font-bold">{s.n}</span>
              <p className="text-[26px] font-bold text-[hsl(var(--slide-text))]">{s.t}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text)/0.7)]">— {s.desc}</p>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-gold))] font-mono leading-[1.4]">События: {s.e}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Каждый этап = отдельное событие в Mixpanel/GA4. <span className="text-[hsl(var(--slide-gold))]">Если события нет — улучшать нечего.</span>
        </p>
      </div>
    </div>
  );
}
