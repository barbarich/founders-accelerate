import { useIsMobile } from "@/hooks/use-mobile";

export default function L8Slide10NotificationLast() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Перед механиками — главное
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.01em]">
          Уведомление — это финал петли. Не начало.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.55] mb-[10px]">
          Сначала встроить в продукт причину вернуться. Потом — напомнить о ней. В обратном порядке push становится спамом, а email уходит в отписку.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Дальше — 5 механик. Это «причина», которую видит пользователь. Push — это «напоминание о причине».
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Перед механиками — главное
      </p>
      <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] max-w-[1500px] tracking-[-0.02em]">
        Уведомление — это финал петли. Не начало.
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1400px] mb-[24px]">
        Сначала встройте в продукт причину вернуться. Потом — напомните о ней.
        В обратном порядке push становится спамом, а email уходит в отписку.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[22px] max-w-[1400px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Дальше — 5 механик. Это «причина», которую видит пользователь.<br />Push и email — это «напоминание о причине».
        </p>
      </div>
    </div>
  );
}