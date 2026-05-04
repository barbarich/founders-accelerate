import { useIsMobile } from "@/hooks/use-mobile";

export default function M8Slide21PersonalCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Личный кейс · честно
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Как я потерял 40% базы за неделю одной рассылкой.
        </h2>
        <div className="space-y-[8px] mb-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Что сделал:</span> массовая рассылка на 12k подписчиков с заголовком «Возвращайтесь — мы соскучились».
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Что получил:</span> 4,800 отписок за 72 часа. Open rate 9%. Spam-репорты.
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Урок:</span> у письма должна быть причина для получателя, а не для меня. «Соскучились» — это про меня, не про него.
          </p>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Перед каждым письмом задавай: что нового получит читатель? Если «ничего» — не отправляй.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Личный кейс · честно
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em] max-w-[1500px]">
        Как я потерял 40% базы за неделю одной рассылкой.
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1500px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[20px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[10px]">Что сделал</p>
          <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">Рассылка на 12 000 подписчиков. Тема: «Возвращайтесь — мы соскучились».</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[20px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[10px]">Что получил</p>
          <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">4 800 отписок за 72 часа. Open rate 9%. Жалобы на спам.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[20px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[10px]">Урок</p>
          <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">«Соскучились» — это про меня. У письма должна быть причина для читателя.</p>
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Перед каждым письмом — один вопрос: «Что нового получит читатель?» Если «ничего» — не отправляй.
      </p>
    </div>
  );
}