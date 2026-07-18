import { useIsMobile } from "@/hooks/use-mobile";

const traps = [
  {
    move: "Нанять продажника",
    why: "Ему нечего продавать: нет отработанных возражений, нет кейсов, нет скрипта. Он сожжёт лиды, которые ты бы закрыл сам.",
  },
  {
    move: "Залить рекламу на сырой продукт",
    why: "Трафик придёт, продукт не удержит. Ты заплатишь за то, чтобы люди узнали о нём и ушли. Реклама усиливает то, что уже работает, - не чинит то, что нет.",
  },
  {
    move: "Прятаться за брендом",
    why: "«Компания X рада представить...» никто не покупает. На старте твоё лицо и твоя история вызывают больше доверия, чем любой безличный бренд.",
  },
];

export default function L10SlideWhatDoesntWork() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Что не работает на старте
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Три способа <span className="text-[hsl(var(--slide-gold))]">выкинуть деньги</span>
        </h2>
        <div className="space-y-[8px]">
          {traps.map((t, i) => (
            <div key={i} className="border border-[hsl(0_50%_45%/0.3)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(0_30%_12%/0.4)]">
              <p className="text-[11px] font-bold text-[hsl(0_60%_68%)] leading-[1.25] mb-[3px]">✗ {t.move}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.why}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px] mt-[10px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Всё это работает <span className="text-[hsl(var(--slide-gold))]">потом</span> - когда ты руками доказал, что продукт покупают.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Что не работает на старте
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Три способа <span className="text-[hsl(var(--slide-gold))]">выкинуть деньги</span>
      </h2>
      <div className="space-y-[16px] max-w-[1800px] mb-[24px]">
        {traps.map((t, i) => (
          <div key={i} className="border border-[hsl(0_50%_45%/0.3)] rounded-[12px] px-[28px] py-[18px] bg-[hsl(0_30%_12%/0.35)] flex items-start gap-[28px]">
            <p className="text-[24px] font-bold text-[hsl(0_60%_68%)] leading-[1.25] w-[380px] shrink-0">✗ {t.move}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.why}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px]">
        <p className="text-[23px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Всё это работает <span className="text-[hsl(var(--slide-gold))]">потом</span> - когда ты руками доказал, что продукт покупают.
        </p>
      </div>
    </div>
  );
}
