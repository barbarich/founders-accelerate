import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide24Step3() {
  const steps = [
    { time: "0–3", action: "Запиши результат клиента и посчитай его в деньгах или часах" },
    { time: "3–6", action: "Цена = 1-10% от результата клиента. Выбери модель и запиши тарифы" },
    { time: "6–8", action: "Произнеси цену вслух самому себе. Язык не поворачивается? Цена занижена" },
    { time: "8–10", action: "Открой Claude/ChatGPT. Промпт: «Отыграй роль моего ICP — [сегмент]. Назову цену — скажи заплатил бы / нет / сколько заплатил бы. Без политкорректности»" },
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
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Сделай сейчас — Шаг 3</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Определяем цену</h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {[
          { time: "0–3 мин", action: "Запиши результат клиента и посчитай его в деньгах или часах. Это твой якорь" },
          { time: "3–6 мин", action: "Цена = 1-10% от результата клиента. Выбери модель монетизации и запиши тарифы" },
          { time: "6–8 мин", action: "Произнеси цену вслух самому себе. Да, это странно. Если язык не поворачивается — цена занижена. Первый раз — самый сложный" },
          { time: "8–10 мин", action: "Открой Claude/ChatGPT. Промпт: «Отыграй роль моего ICP — [сегмент]. Сейчас назову цену — скажи заплатил бы / нет / сколько заплатил бы. Без политкорректности»" },
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">{s.time}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[44px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">Результат: цена, привязанная к результату клиента и проверенная через AI-coach</p>
      </div>
    </div>
  );
}
