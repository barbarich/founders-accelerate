import { useIsMobile } from "@/hooks/use-mobile";

export default function Slide13Format() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[24px] py-[28px]">
        <div className="mb-[16px]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Формат программы</p>
          <h2 className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">The Founders Circle</h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mt-[4px]">12 недель · группа 5–7 человек · от идеи до продукта</p>
        </div>
        <div className="flex-1 flex flex-col gap-[8px]">
          {[
            { icon: "📅", title: "Каждую неделю", sub: "Встреча 2 часа", items: ["Разбор прогресса", "Теория + практика", "Новые инструменты", "Домашнее задание"] },
            { icon: "🧭", title: "Менторство", sub: "Без ограничений", items: ["Доступ ко мне лично", "Telegram-группа", "Вы никогда не один"] },
            { icon: "🎤", title: "Эксперты", sub: "Раз в месяц", items: ["Маркетинг и продажи", "AI", "Legal и финансы", "Стратегия и рост"] },
          ].map((col, ci) => (
            <div key={ci} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px] flex-1 flex flex-col">
              <div className="flex items-center gap-[8px] mb-[6px]">
                <span className="text-[16px]">{col.icon}</span>
                <h3 className="text-[14px] font-semibold text-[hsl(var(--slide-text))]">{col.title}</h3>
                <span className="text-[11px] text-[hsl(var(--slide-gold))] font-medium ml-auto">{col.sub}</span>
              </div>
              <div className="flex flex-wrap gap-x-[12px] gap-y-[2px]">
                {col.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-[4px]">
                    <div className="w-[3px] h-[3px] rounded-full bg-[hsl(var(--slide-gold)/0.5)] shrink-0" />
                    <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[10px] flex items-center gap-[6px] justify-center">
          <span className="text-[14px]">🎯</span>
          <p className="text-[11px] text-[hsl(var(--slide-gold))] font-medium">Цель — готовый продукт с первыми пользователями</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col">
      <div className="px-[120px] pt-[80px] pb-[48px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Формат программы</p>
        <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">The Founders Circle</h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mt-[12px]">12 недель · группа 5–7 человек · от идеи до продукта с первыми пользователями</p>
      </div>
      <div className="flex-1 flex px-[120px] pb-[80px] gap-[40px]">
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[44px] flex flex-col">
          <div className="flex items-center gap-[14px] mb-[28px]">
            <span className="text-[32px]">📅</span>
            <h3 className="text-[26px] font-semibold text-[hsl(var(--slide-text))]">Каждую неделю</h3>
          </div>
          <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Встреча 2 часа</p>
          <div className="space-y-[16px] flex-1">
            {["Разбор прогресса за неделю", "Теория + практика", "Новые инструменты и методологии", "Разбор кейсов", "Планирование следующего шага", "Домашнее задание"].map((item, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)] mt-[10px] shrink-0" />
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[44px] flex flex-col">
          <div className="flex items-center gap-[14px] mb-[28px]">
            <span className="text-[32px]">🧭</span>
            <h3 className="text-[26px] font-semibold text-[hsl(var(--slide-text))]">Менторство</h3>
          </div>
          <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Без ограничений</p>
          <div className="space-y-[16px] flex-1">
            {["Доступ ко мне лично — по любым вопросам", "Не только на встречах, но и между ними", "Telegram-группа для быстрой связи", "Вы никогда не один на один с проблемой"].map((item, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)] mt-[10px] shrink-0" />
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[44px] flex flex-col">
          <div className="flex items-center gap-[14px] mb-[28px]">
            <span className="text-[32px]">🎤</span>
            <h3 className="text-[26px] font-semibold text-[hsl(var(--slide-text))]">Эксперты</h3>
          </div>
          <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Раз в месяц</p>
          <div className="space-y-[16px] flex-1">
            {["Маркетинг и продажи", "Искусственный интеллект", "Legal и финансы", "Стратегия и рост"].map((item, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)] mt-[10px] shrink-0" />
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-[28px] pt-[24px] border-t border-[hsl(var(--slide-border)/0.3)]">
            <div className="flex items-center gap-[10px]">
              <span className="text-[22px]">🎯</span>
              <p className="text-[18px] text-[hsl(var(--slide-gold))] font-medium leading-[1.4]">Цель — готовый продукт с первыми пользователями</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
