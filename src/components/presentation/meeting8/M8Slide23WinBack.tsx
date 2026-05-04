import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Сегмент", d: "«Не открывали продукт 14+ дней». Не «все ушедшие» — точечно." },
  { n: "2", t: "Одно письмо · один вопрос", d: "«Что мешает вам вернуться?» — без CTA, без скидки. Только вопрос." },
  { n: "3", t: "Ответившим — личное", d: "Не шаблон. От имени основателя. С предложением починить именно их барьер." },
];

export default function M8Slide23WinBack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Win-back · 3 шага
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Реактивация без скидок и драмы.
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-baseline gap-[8px] mb-[2px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Конверсия в ответ — 8–14%. В возврат — 30% от ответивших. Бесплатно.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Win-back · 3 шага
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Реактивация без скидок и драмы.
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1500px] mb-[28px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[24px]">
            <div className="flex items-baseline gap-[12px] mb-[12px]">
              <span className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.d}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Конверсия в ответ — 8–14%. В реальный возврат — 30% от ответивших. Без скидок. Без бюджета.
      </p>
    </div>
  );
}