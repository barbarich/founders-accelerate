import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide02CoreIdea() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[36px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Главная мысль курса
        </p>
        <h2 className="font-display text-[27px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[24px] tracking-[-0.01em]">
          Построить продукт — легко.
        </h2>
        <div className="space-y-[14px]">
          <div className="border border-[hsl(var(--slide-text)/0.12)] rounded-md p-[16px]">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium mb-[6px]">
              Сегодня это умеют все
            </p>
            <p className="text-[13px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
              AI собирает прототип за вечер. Код, дизайн, лендинг — больше не барьер.
            </p>
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-md p-[16px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
              А вот это — настоящая работа
            </p>
            <p className="text-[13px] text-[hsl(var(--slide-text))] leading-[1.5] font-medium">
              Построить продукт, который покупают и которым пользуются. Этому и учит курс.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль курса
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[56px] tracking-[-0.01em]">
        Построить продукт — легко.
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1700px]">
        <div className="border border-[hsl(var(--slide-text)/0.12)] rounded-lg p-[36px]">
          <p className="text-[15px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-medium mb-[16px]">
            Сегодня это умеют все
          </p>
          <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
            AI собирает рабочий прототип за вечер. Код, дизайн, лендинг — больше не барьер.
          </p>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-lg p-[36px] bg-[hsl(var(--slide-gold)/0.05)]">
          <p className="text-[15px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
            А вот это — настоящая работа
          </p>
          <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5] font-medium">
            Построить продукт, который покупают и которым пользуются. Этому и учит весь курс.
          </p>
        </div>
      </div>
    </div>
  );
}
