import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide24Step3() {
  const steps = [
    { time: "0–3", action: "Выберите модель монетизации из 6 вариантов. Объясните группе почему эта" },
    { time: "3–6", action: "Посчитайте ценность для клиента: сколько экономит/зарабатывает ваш продукт?" },
    { time: "6–8", action: "Поставьте цену: 10-20% от ценности. Запишите 3 тарифа (если подписка)" },
    { time: "8–10", action: "Группа голосует: «заплатил бы?» — честная обратная связь" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">10 мин</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Шаг 3</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Определяем цену
        </h2>
        <div className="space-y-[8px] mb-[12px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[4px] rounded shrink-0 min-w-[32px] text-center">{s.time}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold">Результат: модель монетизации + первая цена</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 3</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Определяем цену</h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {[
          { time: "0–3 мин", action: "Выберите модель монетизации из 6 вариантов. Объясните группе — почему именно эта модель для вашего продукта" },
          { time: "3–6 мин", action: "Посчитайте ценность для клиента: сколько экономит или зарабатывает ваш продукт в месяц?" },
          { time: "6–8 мин", action: "Поставьте цену: 10-20% от ценности. Если подписка — запишите 3 тарифа с якорением" },
          { time: "8–10 мин", action: "Группа голосует: «заплатил бы за это [цена]?» — честная обратная связь без политкорректности" },
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">{s.time}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[44px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">Результат: выбранная модель монетизации + первая цена, проверенная группой</p>
      </div>
    </div>
  );
}
