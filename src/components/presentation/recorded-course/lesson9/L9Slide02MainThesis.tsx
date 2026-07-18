import { useIsMobile } from "@/hooks/use-mobile";

export default function L9Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Ты не можешь чинить то, <span className="text-[hsl(var(--slide-gold))]">что не измеряешь</span>.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          Каждую неделю ты принимаешь десяток решений: какую фичу делать, почему уходят, поднимать ли цену, пора ли в рекламу. <span className="text-[hsl(var(--slide-text))] font-medium">Без данных все десять - угадывание.</span> Одно угаданное решение стоит недели работы или всего рекламного бюджета.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Данные нужны не для отчёта инвестору. Они нужны, чтобы ты знал, <span className="text-[hsl(var(--slide-gold))]">что делать в понедельник</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Ты не можешь чинить то, <span className="text-[hsl(var(--slide-gold))]">что не измеряешь</span>.
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[32px]">
        Каждую неделю ты принимаешь десяток решений: какую фичу делать, почему уходят, поднимать ли цену, пора ли в рекламу. <span className="text-[hsl(var(--slide-text))] font-semibold">Без данных все десять - угадывание.</span> Одно угаданное решение стоит недели работы или всего рекламного бюджета.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[22px] max-w-[1700px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Данные нужны не для отчёта инвестору. Они нужны, чтобы ты знал, <span className="text-[hsl(var(--slide-gold))]">что делать в понедельник</span>.
        </p>
      </div>
    </div>
  );
}
