import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide22Step1() {
  const steps = [
    { time: "0–3", action: "Сформулируйте результат клиента: [Кто] получает [результат] с помощью [продукт], без [боль]" },
    { time: "3–5", action: "Адаптируйте в три формата: лендинг, холодное сообщение, 30-сек питч" },
    { time: "5–8", action: "Elevator pitch: 30 секунд питч партнёру. Не понял — переделываем" },
    { time: "8–10", action: "Группа голосует: «сколько бы заплатил за этот результат?»" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">10 мин</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Шаг 1</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Пишем позиционирование
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
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold">Результат: позиционирование через результат + три формулировки</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 1</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">Пишем позиционирование</h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {[
          { time: "0–3 мин", action: "Сформулируйте результат клиента по формуле: [Кто] получает [результат] с помощью [продукт], без [боль]" },
          { time: "3–5 мин", action: "Адаптируйте в три формата: заголовок лендинга, холодное сообщение, 30-секундный питч" },
          { time: "5–8 мин", action: "Elevator pitch battle: встаёте, 30 секунд питч партнёру. Если не понял — позиционирование не работает" },
          { time: "8–10 мин", action: "Перепишите с учётом фидбека. Группа голосует: «сколько бы заплатил за этот результат?»" },
        ].map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">{s.time}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[44px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">Результат: позиционирование через результат + три формулировки (лендинг, DM, питч)</p>
      </div>
    </div>
  );
}
