import { useIsMobile } from "@/hooks/use-mobile";

const lines = [
  { num: "1", label: "Экран 1", text: "[Кто] получит [что] за [как]" },
  { num: "2", label: "Экран 2", text: "Первое действие + есть ли регистрация до результата" },
  { num: "3", label: "Экран 3", text: "Какой механизм возврата" },
];

export default function M7Slide24CircleShare() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Круг · 8 минут
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Каждый по 90 секунд.<br />Покажи свои 3 строки.
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">
          Зачитываешь — группа реагирует одной фразой. Конкретной, не «звучит круто».
        </p>
        <div className="space-y-[5px]">
          {lines.map((l) => (
            <div key={l.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[9px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">{l.num}. {l.label}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">{l.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          «Не понятно что значит сценарий» — да. «Звучит круто» — нет.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Круг · 8 минут
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px]">
        Каждый по 90 секунд. Покажи свои 3 строки.
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[28px] max-w-[1500px]">
        Зачитываешь свои три строки. Группа реагирует одной конкретной фразой — что понятно, что нет.
      </p>
      <div className="space-y-[12px] max-w-[1600px] mb-[24px]">
        {lines.map((l) => (
          <div key={l.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[18px] grid grid-cols-[200px_1fr] gap-[28px] items-center">
            <p className="text-[20px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold))] font-bold leading-[1.2]">{l.num}. {l.label}</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">{l.text}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Реакция группы — конкретная. «Не понятно, что значит "сценарий"» — да. «Звучит круто» — нет.
      </p>
    </div>
  );
}
