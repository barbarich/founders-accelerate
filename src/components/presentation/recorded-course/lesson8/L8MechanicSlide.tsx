import { useIsMobile } from "@/hooks/use-mobile";

export type Mechanic = {
  number: string;
  name: string;
  oneLiner: string;
  examples: string[];
  screen: string;
  howToApply: string;
  noCode: string;
};

export default function L8MechanicSlide({ m }: { m: Mechanic }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Механика {m.number} из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          {m.name}
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-gold))] italic leading-[1.4] mb-[10px]">
          {m.oneLiner}
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px] mb-[8px]">
          <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[4px]">Где видели</p>
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{m.examples.join(" · ")}</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px] mb-[8px]">
          <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[4px]">Что на экране</p>
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{m.screen}</p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px] mb-[6px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Применить тебе:</span> {m.howToApply}
          </p>
        </div>
        <p className="font-mono text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
          No-code: {m.noCode}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Механика {m.number} из 5
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        {m.name}
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-gold))] italic leading-[1.35] mb-[28px] max-w-[1500px]">
        {m.oneLiner}
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1500px] mb-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[10px]">Где видели</p>
          <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">{m.examples.join(" · ")}</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[10px]">Что на экране</p>
          <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">{m.screen}</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[20px] max-w-[1500px] mb-[14px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">Применить тебе: </span>{m.howToApply}
        </p>
      </div>
      <p className="font-mono text-[18px] text-[hsl(var(--slide-text-muted))] max-w-[1500px] leading-[1.4]">
        <span className="text-[hsl(var(--slide-gold))]">no-code:</span> {m.noCode}
      </p>
    </div>
  );
}