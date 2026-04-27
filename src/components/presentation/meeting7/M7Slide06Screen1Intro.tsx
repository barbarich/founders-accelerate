import { useIsMobile } from "@/hooks/use-mobile";

export default function M7Slide06Screen1Intro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Экран 1 · Одно обещание
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          За 5 секунд должно быть понятно, что я получу.
        </h2>
        <div className="space-y-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px]">Цель</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Человек, попавший на экран впервые, за 5 секунд отвечает на вопрос: «Что я тут получу, если останусь?»
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.2)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[3px]">НЕ цель</p>
            <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              Показать все фичи. Рассказать про команду. Объяснить технологию.
            </p>
          </div>
        </div>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold mt-[12px] leading-[1.4]">
          Не ответил за 5 секунд — ушёл.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Экран 1 · Одно обещание
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px] max-w-[1500px]">
        За 5 секунд должно быть понятно, что я получу.
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1500px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px] font-semibold">Цель экрана</p>
          <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Человек, попавший на экран впервые, за 5 секунд отвечает на вопрос: «Что я тут получу, если останусь?»
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.2)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] mb-[10px] font-semibold">НЕ цель</p>
          <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            Показать все фичи. Рассказать про команду. Объяснить технологию. Это всё — потом.
          </p>
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Не ответил за 5 секунд — ушёл. Самая частая ошибка фаундера: делать первый экран как презентацию о продукте.
      </p>
    </div>
  );
}
