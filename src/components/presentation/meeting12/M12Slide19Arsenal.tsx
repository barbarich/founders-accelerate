import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { w: "1-2", t: "Позиционирование + ICP", d: "Кто клиент, какая боль, цена" },
  { w: "1", t: "Customer-интервью за 15 мин", d: "5 правильных вопросов" },
  { w: "5-6", t: "Рабочий MVP + onboarding", d: "Ценность за 60 секунд" },
  { w: "3-7", t: "Лендинг + визуал", d: "Конвертящий оффер" },
  { w: "8", t: "Личный бренд + контент", d: "1 идея → 5 форматов" },
  { w: "9", t: "Каналы + воронка", d: "TOFU / MOFU / BOFU" },
  { w: "10", t: "Meta-реклама", d: "От пикселя до кампании" },
  { w: "11", t: "B2B sales motion", d: "ICP → demo → close → expand" },
  { w: "12", t: "Питч + fundraising + партнёрство", d: "5-мин история, деньги, co-founder" },
];

export default function M12Slide19Arsenal() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Что ты забираешь
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Ты уходишь не с конспектом. <span className="text-[hsl(var(--slide-gold))]">С системой.</span>
        </h2>
        <div className="grid grid-cols-2 gap-[3px]">
          {items.map((i) => (
            <div key={i.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{i.t}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{i.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          Плюс набор AI-промптов под каждый этап цикла.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Что ты забираешь
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Ты уходишь не с конспектом. <span className="text-[hsl(var(--slide-gold))]">С системой.</span>
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[22px]">
        {items.map((i) => (
          <div key={i.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[14px]">
            <p className="text-[12px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[4px]">Неделя {i.w}</p>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[2px]">{i.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{i.d}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1700px]">
        Плюс набор AI-промптов под каждый этап цикла — от исследования рынка до питча инвестору.
      </p>
    </div>
  );
}
