import { useIsMobile } from "@/hooks/use-mobile";

const stages = [
  {
    label: "Ориентация",
    time: "секунды",
    title: "Понял где я и что делать",
    desc: "Первый экран после входа. Один очевидный следующий шаг или pre-filled контекст. Юзер не тыкает в интерфейс наугад.",
  },
  {
    label: "Первое действие",
    time: "минуты",
    title: "Сделал сам, не застрял",
    desc: "Юзер прошёл шаг или два без подсказок и без ступора. Не ждёт туториала, не ищет настройки, не гуглит.",
  },
  {
    label: "Первый результат",
    time: "зависит",
    title: "Продукт вернул что-то обратно",
    desc: "Файл сохранился, сообщение отправлено, график построился, ответ получен. Материальное «оно работает». До Aha может быть ещё далеко — но путь открыт.",
  },
];

const timeframes = [
  { type: "B2C consumer", example: "Duolingo, Dropbox", when: "минуты, часто в первой сессии" },
  { type: "Productivity tools", example: "Notion, Linear", when: "первая–вторая сессия" },
  { type: "B2B workflow", example: "Slack, Intercom", when: "2–3 сессии + командное использование" },
  { type: "Data / analytics", example: "Mixpanel, Metabase", when: "после подключения данных, дни" },
];

export default function M6Slide04Rule60() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Три этапа первой сессии
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Ориентация → Действие → Результат
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Этапы — фиксированные. Время — зависит от продукта. Не мерь B2B шкалой B2C.
        </p>
        <div className="space-y-[4px] mb-[8px]">
          {stages.map((s) => (
            <div key={s.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[5px]">
              <div className="flex items-baseline gap-[5px] mb-[1px]">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.label}</p>
                <p className="text-[7.5px] font-mono text-[hsl(var(--slide-gold))]">{s.time}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-gold))] leading-[1.3] mb-[1px]">{s.title}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px]">Когда приходит Aha</p>
        <div className="space-y-[2px]">
          {timeframes.map((t) => (
            <div key={t.type} className="flex items-baseline gap-[4px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] shrink-0">{t.type}:</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.when}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Три этапа первой сессии
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        Ориентация → Действие → Результат
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1400px]">
        Этапы фиксированные, время — зависит от продукта. Не мерь B2B шкалой B2C.
      </p>

      <div className="grid grid-cols-3 gap-[16px] max-w-[1500px] mb-[24px]">
        {stages.map((s) => (
          <div key={s.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[22px] py-[18px]">
            <div className="flex items-baseline gap-[10px] mb-[8px]">
              <h3 className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.label}</h3>
              <span className="text-[13px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[8px] py-[2px] rounded-full">{s.time}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-gold))] leading-[1.3] mb-[8px]">{s.title}</p>
            <p className="text-[14.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[24px] py-[16px] max-w-[1500px]">
        <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[10px]">Когда реально приходит Aha</p>
        <div className="grid grid-cols-4 gap-[18px]">
          {timeframes.map((t) => (
            <div key={t.type}>
              <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{t.type}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[1px] italic">{t.example}</p>
              <p className="text-[13.5px] text-[hsl(var(--slide-gold))] mt-[4px] leading-[1.35]">{t.when}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
