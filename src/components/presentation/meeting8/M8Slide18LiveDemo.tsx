import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { t: "0:00", a: "Регистрируешься в Loops, подключаешь домен через 1 DNS-запись" },
  { t: "0:45", a: "В Lovable: один fetch-запрос в Loops API после события signup" },
  { t: "1:30", a: "В Loops создаёшь Loop: «событие not_returned_3d → шаблон письма»" },
  { t: "2:15", a: "Edge-функция (cron раз в день) шлёт событие not_returned_3d тем, у кого last_seen < now() - 3d" },
  { t: "3:00", a: "Тестируешь на себе: триггеришь событие — проверяешь приход" },
  { t: "4:00", a: "Готово. Триггер живёт. Каждый ушедший на 3 дня получает письмо автоматически." },
];

export default function M8Slide18LiveDemo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Live · 4 минуты на экране
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          Триггер «не вернулся 3 дня». От нуля.
        </h2>
        <div className="space-y-[5px]">
          {steps.map((s) => (
            <div key={s.t} className="flex gap-[8px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] w-[34px] shrink-0">{s.t}</span>
              <span className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.a}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Live-демо · 4 минуты на экране
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        Триггер «не вернулся 3 дня».
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[28px]">От нуля до работающего письма.</p>
      <div className="space-y-[10px] max-w-[1500px]">
        {steps.map((s) => (
          <div key={s.t} className="flex items-baseline gap-[20px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[14px]">
            <span className="font-mono text-[24px] text-[hsl(var(--slide-gold))] w-[80px] shrink-0">{s.t}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}