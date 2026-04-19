import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  { product: "Dropbox (B2C)", aha: "Файл с одного устройства появился на другом", time: "2–5 мин, требует install на обоих" },
  { product: "Slack (B2B)", aha: "Команда отвечает в твоём канале, а не в почте", time: "несколько дней использования" },
  { product: "Notion", aha: "Первая собственная страница, которой реально пользуешься", time: "1–2 сессии + возврат" },
  { product: "MetaMinder", aha: "Создано обучение для сотрудников за 1 минуту, без навыков", time: "первая сессия" },
];

export default function M6Slide07Aha() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Определение, с которым работаем
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Aha живёт в продукте.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.45]">
          Конкретное действие юзера + его признание «это работает для меня».
          Лендинг обещает, продукт доказывает. Время до Aha — от минут до недель, зависит от продукта.
        </p>
        <div className="space-y-[4px]">
          {examples.map((e) => (
            <div key={e.product} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2] mb-[1px]">{e.product}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.35] mb-[1px]">{e.aha}</p>
              <p className="text-[7px] font-mono text-[hsl(var(--slide-text-muted))] leading-[1.2]">→ {e.time}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Сегодняшняя цель: не «достичь Aha», а сделать путь к нему проходимым.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Определение, с которым работаем
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[16px] tracking-[-0.02em]">
        Aha живёт в продукте.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1400px] leading-[1.45]">
        Конкретное действие юзера + его признание «это работает для меня».<br />
        Лендинг обещает, продукт доказывает. Время до Aha — от минут до недель, зависит от продукта.
      </p>

      <div className="grid grid-cols-2 gap-[16px] max-w-[1500px] mb-[22px]">
        {examples.map((e) => (
          <div key={e.product} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[18px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2] mb-[4px]">{e.product}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[4px]">{e.aha}</p>
            <p className="text-[14px] font-mono text-[hsl(var(--slide-text-muted))] leading-[1.3]">→ {e.time}</p>
          </div>
        ))}
      </div>

      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px]">
        Сегодняшняя цель: не «достичь Aha», а сделать путь к нему проходимым.
      </p>
    </div>
  );
}
