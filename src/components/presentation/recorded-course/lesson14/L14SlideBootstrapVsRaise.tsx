import { useIsMobile } from "@/hooks/use-mobile";

const bootstrap = [
  "Solo-фаундер с AI-стеком до $100K ARR — не нужны деньги извне",
  "Lifestyle-бизнес (хочешь $20-50K/мес сам, не unicorn)",
  "Длинный sales-cycle B2B, где deal size $500+ за 1-2 продажи окупает месяц",
  "Не хочешь делиться equity, контроль направления продукта — критичен",
];

const raise = [
  "Нужно $50-200K на дорогую инфраструктуру (hardware, AI compute, big data)",
  "Network-effect продукт — кто первый набрал critical mass, тот win-take-all",
  "Регулируемая ниша (FinTech, HealthTech) с длинным compliance",
  "Готов делать unicorn — нужны деньги + связи + опыт инвесторов",
];

export default function L14SlideBootstrapVsRaise() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Когда что — конкретные сценарии
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Bootstrap или Raise
        </h2>
        <div className="space-y-[8px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[12px] py-[8px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Bootstrap — когда</p>
            <ul className="space-y-[3px]">{bootstrap.map((b, i) => <li key={i} className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">· {b}</li>)}</ul>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.5)] px-[12px] py-[8px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-bold mb-[4px]">Raise — когда</p>
            <ul className="space-y-[3px]">{raise.map((r, i) => <li key={i} className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">· {r}</li>)}</ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Когда что — конкретные сценарии
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Bootstrap или Raise
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1800px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[22px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-bold mb-[16px]">Bootstrap — когда</p>
          <ul className="space-y-[10px]">{bootstrap.map((b, i) => <li key={i} className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.5]">· {b}</li>)}</ul>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.5)] px-[28px] py-[22px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] font-bold mb-[16px]">Raise — когда</p>
          <ul className="space-y-[10px]">{raise.map((r, i) => <li key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">· {r}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
