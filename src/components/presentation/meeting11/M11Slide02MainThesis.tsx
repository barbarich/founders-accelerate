import { useIsMobile } from "@/hooks/use-mobile";

export default function M11Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль сегодня
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Побеждает не тот, кто больше пишет.<br /><span className="text-[hsl(var(--slide-gold))]">50 точных клиентов и 5 хороших разговоров важнее, чем 5000 шаблонных писем.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[5px]">
            В 2026 рассыльщиков писем полно. "Напиши всем подряд" больше не работает.
          </p>
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Преимущество — найти тех, кому точно нужно, и поговорить с ними лично.
          </p>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          Сегодня покажу путь от пустой таблицы клиентов до первой продажи. Без рекламы, без групп в соцсетях, без десятки каналов одновременно. Одна цепочка шагов от знакомства до денег.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль сегодня
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1700px] tracking-[-0.01em]">
        Побеждает не тот, кто больше пишет. <span className="text-[hsl(var(--slide-gold))]">50 точных клиентов и 5 хороших разговоров важнее, чем 5000 шаблонных писем.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[28px] max-w-[1700px] mb-[28px]">
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">
          В 2026 рассыльщиков писем полно. "Напиши всем подряд" больше не работает.
        </p>
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Преимущество — найти тех, кому точно нужно, и поговорить с ними лично.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1700px]">
        Сегодня покажу путь от пустой таблицы клиентов до первой продажи. Без рекламы, без групп в соцсетях, без десятки каналов одновременно. Одна цепочка шагов от знакомства до денег.
      </p>
    </div>
  );
}
