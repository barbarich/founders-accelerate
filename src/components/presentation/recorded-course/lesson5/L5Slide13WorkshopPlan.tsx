import { useIsMobile } from "@/hooks/use-mobile";

const template = [
  { label: "Канал 1", placeholder: "Cold outreach / LinkedIn / Email", action: "Отправить 20 сообщений", metric: "Ответы: ___" },
  { label: "Канал 2", placeholder: "Комьюнити / группы / форумы", action: "Написать в 5 групп", metric: "Переходы: ___" },
  { label: "Канал 3", placeholder: "Контент / пост / видео", action: "Опубликовать 1 пост", metric: "Охват: ___" },
];

export default function L5Slide13WorkshopPlan() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Воркшоп
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          План выхода на рынок
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Заполни шаблон прямо сейчас — 10 минут</p>
        <div className="space-y-[8px]">
          {template.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{t.label}</p>
              <div className="space-y-[3px] ml-[8px]">
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))]">Где: {t.placeholder}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))]">Действие: {t.action}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))]">{t.metric}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[10px] bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[10px] py-[8px]">
          <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold">Цель на неделю: 20 outreach + 1 пост + 10 новых людей</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Воркшоп
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        План выхода на рынок
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Заполни шаблон прямо сейчас — 10 минут</p>

      <div className="flex gap-[24px] max-w-[1300px] mb-[36px]">
        {template.map((t, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[28px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[20px]">{t.label}</p>
            <div className="space-y-[16px]">
              <div>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] uppercase tracking-wider mb-[4px]">Где</p>
                <p className="text-[18px] text-[hsl(var(--slide-text))] border-b border-[hsl(var(--slide-border)/0.3)] pb-[8px]">{t.placeholder}</p>
              </div>
              <div>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] uppercase tracking-wider mb-[4px]">Действие</p>
                <p className="text-[18px] text-[hsl(var(--slide-text))] border-b border-[hsl(var(--slide-border)/0.3)] pb-[8px]">{t.action}</p>
              </div>
              <div>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] uppercase tracking-wider mb-[4px]">Метрика</p>
                <p className="text-[18px] text-[hsl(var(--slide-text))] border-b border-[hsl(var(--slide-border)/0.3)] pb-[8px]">{t.metric}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[20px] max-w-[1300px]">
        <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold">Цель на неделю: 20 outreach + 1 пост + 10 новых людей</p>
      </div>
    </div>
  );
}
