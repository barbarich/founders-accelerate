import { useIsMobile } from "@/hooks/use-mobile";

export default function L11SlidePeraOne() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[18px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кейс PERA · часть 1 · кто
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[9px]">
          Покупают не пуфы. Покупают <span className="text-[hsl(var(--slide-gold))]">подарок ребёнку.</span>
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[8px]">
          PERA - мой израильский бренд бескаркасной мебели. Когда я разобрался в аудитории, оказалось: ядро покупателей - не «любители пуфов», а <b className="text-[hsl(var(--slide-text))]">мамы, которые выбирают подарок ребёнку.</b>
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px] mb-[8px]">
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">Что сделал</p>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">Адаптировал продукт под них - выпустил пуфы в виде зверюшек. Не «мебель», а подарок, который любит ребёнок.</p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">Инсайт: GTM меняет сам продукт. Ты подстраиваешь оффер под того, кто реально платит.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Кейс PERA · часть 1 · кто
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em] max-w-[1600px]">
        Покупают не пуфы. Покупают <span className="text-[hsl(var(--slide-gold))]">подарок ребёнку.</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[22px] max-w-[1600px]">
        PERA - мой израильский бренд бескаркасной мебели. Когда я разобрался в аудитории, оказалось: ядро покупателей - не «любители пуфов», а <b className="text-[hsl(var(--slide-text))]">мамы, которые выбирают подарок ребёнку.</b>
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1600px] mb-[18px]">
        <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Что сделал</p>
        <p className="text-[21px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">Адаптировал продукт под них - выпустил пуфы в виде зверюшек. Не «мебель», а подарок, который любит ребёнок.</p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1600px]">
        <p className="text-[23px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Инсайт: GTM меняет сам продукт. Ты подстраиваешь оффер под того, кто реально платит.
        </p>
      </div>
    </div>
  );
}
