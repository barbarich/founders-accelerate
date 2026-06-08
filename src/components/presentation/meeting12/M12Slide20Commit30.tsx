import { useIsMobile } from "@/hooks/use-mobile";

const examples = ["«Закрою 3 платящих»", "«Выпущу onboarding v2»", "«Отправлю 50 outreach»", "«Поговорю с 10 клиентами»"];

export default function M12Slide20Commit30() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Ритуал финала · коммит на 30 дней
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[10px]">
          Одна вещь. Вслух. <span className="text-[hsl(var(--slide-gold))]">Перед группой.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[6px] px-[12px] py-[8px] mb-[8px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5] font-medium">
            «За 30 дней я [действие]. Измеримо: [число]. Проверьте меня [дата].»
          </p>
        </div>
        <div className="flex flex-wrap gap-[3px] mb-[8px]">
          {examples.map((e) => (
            <span key={e} className="text-[8px] text-[hsl(var(--slide-text-muted))] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">{e}</span>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Публичное обещание + дедлайн + свидетели = шанс сделать в разы выше. Через 30 дней — чек-ин в alumni-чате.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Ритуал финала · коммит на 30 дней
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Одна вещь. Вслух. <span className="text-[hsl(var(--slide-gold))]">Перед группой.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[14px] px-[36px] py-[26px] max-w-[1700px] mb-[20px]">
        <p className="text-[15px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[10px]">Формат коммита</p>
        <p className="text-[30px] text-[hsl(var(--slide-text))] leading-[1.5] font-medium">
          «За 30 дней я [конкретное действие]. Измеримо: [число / факт]. Проверьте меня [дата].»
        </p>
      </div>
      <div className="flex flex-wrap gap-[10px] max-w-[1700px] mb-[22px]">
        {examples.map((e) => (
          <span key={e} className="text-[17px] text-[hsl(var(--slide-text-muted))] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[8px]">{e}</span>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1700px]">
        Публичное обещание + дедлайн + свидетели = шанс сделать в разы выше. Через 30 дней — чек-ин в alumni-чате.
      </p>
    </div>
  );
}
