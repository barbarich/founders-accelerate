import { useIsMobile } from "@/hooks/use-mobile";

const tips = [
  "Выучи наизусть — говоришь на одном вдохе",
  "Про клиента и результат, не про технологию",
  "Заканчивай тягой или вопросом, не паузой",
];

export default function M12Slide15ElevatorPitch() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Fundraising · elevator pitch
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          30 секунд, которые <span className="text-[hsl(var(--slide-gold))]">открывают дверь.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[6px] px-[10px] py-[6px] mb-[6px]">
          <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Формула</p>
          <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.45] font-medium">
            [Продукт] помогает [кому] [результат] с помощью [как]. В отличие от [альтернатива] — [отличие]. Уже [тяга].
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px] mb-[6px]">
          <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Пример</p>
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
            Run Everywhere помогает бегунам со всего мира соревноваться, не выходя из своего города — через виртуальные марафоны планетарного масштаба. В отличие от обычного забега — бежишь из любой точки, в один день со всей планетой. Уже десятки тысяч участников из 100+ стран.
          </p>
        </div>
        <div className="space-y-[2px]">
          {tips.map((t) => (
            <p key={t} className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[5px]">→</span>{t}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Fundraising · elevator pitch
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[22px] tracking-[-0.02em]">
        30 секунд, которые <span className="text-[hsl(var(--slide-gold))]">открывают дверь.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[14px] px-[32px] py-[22px] max-w-[1700px] mb-[16px]">
        <p className="text-[15px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[8px]">Формула — заполни и выучи</p>
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.5] font-medium">
          [Продукт] помогает [кому] [результат] с помощью [как]. В отличие от [альтернатива] — [отличие]. Уже [тяга].
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[18px]">
          <p className="text-[15px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[8px]">Пример · Run Everywhere</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            Run Everywhere помогает бегунам со всего мира соревноваться, не выходя из своего города — через виртуальные марафоны планетарного масштаба. В отличие от обычного забега — бежишь из любой точки, в один день со всей планетой. Уже десятки тысяч участников из 100+ стран.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[18px]">
          <p className="text-[15px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[10px]">Правила</p>
          <div className="space-y-[10px]">
            {tips.map((t) => (
              <p key={t} className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
