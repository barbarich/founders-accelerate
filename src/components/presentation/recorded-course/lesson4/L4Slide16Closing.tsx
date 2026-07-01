import { useIsMobile } from "@/hooks/use-mobile";

export default function L4Slide16Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[28px]">
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Всё готово.<br />Пора запускать.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[16px]">
            У вас есть MVP, лендинг, аналитика и инструменты. Осталось одно — первые настоящие пользователи.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[16px] py-[10px] mb-[12px] text-left">
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-text))] font-semibold">На этой неделе:</span> напишите пост, отправьте в группы, дайте людям попробовать. Смотрите что происходит в аналитике.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[16px] py-[10px] mb-[14px]">
            <p className="text-[13px] text-[hsl(var(--slide-text))] font-bold">
              Ваше демо - 5 минут
            </p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[4px]">
              Запишите видео: продукт + лендинг + метрики + что написали
            </p>
          </div>
          <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium">
            Через неделю вы покажете реальный продукт с реальными пользователями.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center max-w-[1000px]">
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
          Всё готово.<br />Пора запускать.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[48px]">
          У вас есть MVP, лендинг, аналитика и инструменты.<br />
          Осталось одно — первые настоящие пользователи.
        </p>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[48px] py-[28px] mb-[32px] inline-block text-left">
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            <span className="text-[hsl(var(--slide-text))] font-semibold">На этой неделе:</span> напишите пост, отправьте в группы,<br />
            дайте людям попробовать. Смотрите что происходит в аналитике.
          </p>
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[48px] py-[28px] mb-[40px] inline-block">
          <p className="text-[32px] text-[hsl(var(--slide-text))] font-bold leading-[1.3]">
            Ваше демо - запишите 5 минут
          </p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[8px]">
            Видео: продукт вживую + лендинг + метрики + что опубликовали
          </p>
        </div>

        <p className="text-[26px] text-[hsl(var(--slide-gold))] font-semibold">
          Через неделю вы покажете реальный продукт<br />с реальными пользователями.
        </p>
      </div>
    </div>
  );
}
