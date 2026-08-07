import { useIsMobile } from "@/hooks/use-mobile";

export default function L17SlideClosing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Курс пройден
        </p>
        <h2 className="font-display text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
          Ты знаешь, что делать. <span className="text-[hsl(var(--slide-gold))]">Осталось начать в ближайшие 48 часов</span>.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[16px]">
          Весь путь пройден - от проверки идеи до каналов, которые приводят платящих. Продукт, который покупают, строится не за один вечер, но строится он именно так: неделя за неделей.
        </p>
        <p className="text-[11px] text-[hsl(var(--slide-gold))] leading-[1.5] mb-[16px]">
          Через 90 дней у тебя должно быть:<br />
          · один канал, который приносит оплаты<br />
          · посчитанная стоимость клиента<br />
          · план на следующий квартал на одну страницу
        </p>
        <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[16px]">
          Напиши мне, когда будет первый платящий. Я правда жду этих писем.
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[130px]">
      <p className="text-[20px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[26px]">
        Курс пройден
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[30px] tracking-[-0.02em] max-w-[1500px]">
        Ты знаешь, что делать. <span className="text-[hsl(var(--slide-gold))]">Осталось начать в ближайшие 48 часов</span>.
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1450px] mb-[26px]">
        Весь путь пройден - от проверки идеи до каналов, которые приводят платящих. Продукт, который покупают, строится не за один вечер, но строится он именно так: неделя за неделей.
      </p>
      <p className="text-[21px] text-[hsl(var(--slide-gold))] leading-[1.6] max-w-[1450px] mb-[26px]">
        Через 90 дней у тебя должно быть: один канал, который приносит оплаты · посчитанная стоимость клиента · план на следующий квартал на одну страницу
      </p>
      <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] max-w-[1450px] mb-[34px]">
        Напиши мне, когда будет первый платящий. Я правда жду этих писем.
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))]" />
    </div>
  );
}
