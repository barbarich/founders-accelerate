import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", t: "Подключи PostHog", d: "Бесплатно. Один скрипт. Завтра увидишь свою честную D1/D7-кривую — впервые." },
  { n: "2", t: "Напиши свою петлю Hook", d: "Триггер → Действие → Награда → Инвестиция. Одна страница. Прислать в чат." },
  { n: "3", t: "Запусти 1 триггерное письмо", d: "SendPulse или Resend. Любое одно событие. Главное — чтобы ушло автоматически." },
  { n: "4", t: "Выбери 1 из 5 механик", d: "Streak / незаконченное / соц / контент / дедлайн. Внеси в продукт за неделю." },
];

export default function M8Slide24Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Домашка · к встрече 9
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          4 действия. Все no-code.
        </h2>
        <div className="space-y-[5px] mb-[8px]">
          {tasks.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[18px]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Бонус: </span>оба промпта (письма + сегментация) — у вас в руках. Скопируй и применяй.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Домашка · к встрече 9
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        4 действия. Все no-code.
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1500px] mb-[24px]">
        {tasks.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <div className="flex items-baseline gap-[14px] mb-[8px]">
              <span className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none">{t.n}</span>
              <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
            </div>
            <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[20px] max-w-[1500px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">Бонус в подарок: </span>оба AI-промпта (7 писем + сегментация) уже у вас. Не переписывайте — копируйте и применяйте.
        </p>
      </div>
    </div>
  );
}