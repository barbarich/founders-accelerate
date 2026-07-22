import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { t: "Не нужен бюджет", d: "Первые продажи делаются руками и бесплатно. Реклама - потом, когда уже знаешь, что берут." },
  { t: "Не нужно агентство", d: "На старте никто не знает твой продукт и твою аудиторию лучше тебя. Маркетинг - это ты." },
  { t: "Не нужен диплом", d: "Нужно говорить с людьми и пытаться продавать. Остальному научишься по ходу, на реальных попытках." },
];

export default function L10SlideNoBudget() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Прежде чем начать · сними страх
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Тебе не нужен <span className="text-[hsl(var(--slide-gold))]">бюджет, агентство и диплом.</span>
        </h2>
        <div className="space-y-[4px] mb-[7px]">
          {items.map((x) => (
            <div key={x.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{x.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{x.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Лестница: сначала бесплатно руками - доказать, что берут. Потом платно - масштабировать то, что уже работает. Не наоборот.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Прежде чем начать · сними страх
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em] max-w-[1650px]">
        Тебе не нужен <span className="text-[hsl(var(--slide-gold))]">бюджет, агентство и диплом.</span>
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[20px]">
        {items.map((x) => (
          <div key={x.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[16px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[6px]">{x.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{x.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[16px] max-w-[1700px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Лестница: сначала бесплатно руками - доказать, что берут. Потом платно - масштабировать то, что уже работает. Не наоборот.
        </p>
      </div>
    </div>
  );
}
