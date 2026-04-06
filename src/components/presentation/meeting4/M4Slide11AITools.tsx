import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    icon: "🔍",
    name: "Apollo.io",
    what: "Поиск email и контактов",
    how: "Находишь человека по компании / должности → получаешь email → пишешь персонализированное письмо",
    tip: "Бесплатно: 50 контактов/месяц",
  },
  {
    icon: "📧",
    name: "Instantly",
    what: "Автоматизация email outreach",
    how: "Загружаешь список → пишешь цепочку писем → Instantly отправляет с разогретого домена",
    tip: "Цепочка из 3 писем даёт 3x больше ответов чем одно",
  },
  {
    icon: "👔",
    name: "LinkedHelper",
    what: "Автоматизация LinkedIn",
    how: "Автоматические приглашения + follow-up сообщения + визиты на профили",
    tip: "Лимит: 100 приглашений/неделю, пишите персонально",
  },
];

export default function M4Slide11AITools() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Инструменты
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          3 инструмента для outreach
        </h2>
        <div className="space-y-[8px]">
          {tools.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="text-[14px]">{t.icon}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{t.name}</span>
                <span className="text-[8px] text-[hsl(var(--slide-text-muted))]">— {t.what}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[3px] ml-[20px]">{t.how}</p>
              <p className="text-[7px] text-[hsl(var(--slide-gold))] ml-[20px]">💡 {t.tip}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инструменты
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[56px]">
        3 инструмента для outreach
      </h2>

      <div className="flex gap-[28px] max-w-[1300px]">
        {tools.map((t, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[28px]">
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span className="text-[36px]">{t.icon}</span>
              <div>
                <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{t.name}</h3>
                <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">{t.what}</p>
              </div>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[16px]">{t.how}</p>
            <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[14px] py-[10px]">
              <p className="text-[15px] text-[hsl(var(--slide-gold))]">💡 {t.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
