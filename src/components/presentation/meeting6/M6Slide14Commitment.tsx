import { useIsMobile } from "@/hooks/use-mobile";

const formula = [
  { label: "Сегодня я сделал(а)", placeholder: "[конкретный артефакт: URL / переписанный Hero / выбранная идея]" },
  { label: "К Неделе 7 я сделаю", placeholder: "[конкретная метрика: 10 юзеров прошли / 5 интервью / email-список из N]" },
  { label: "Моя пара проверки", placeholder: "[имя из группы, которому пишешь в среду с доказательством]" },
];

export default function M6Slide14Commitment() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Commitment wall
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Каждый говорит вслух.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          Обязательство произнесённое группе держится сильнее. Три строки по порядку — по одному, без комментариев.
        </p>
        <div className="space-y-[6px]">
          {formula.map((f, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">{f.label}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4] font-mono">{f.placeholder}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[10px] leading-[1.4]">
          Пара пишет друг другу в среду со скриншотом прогресса. Нет скриншота = нет ответа.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Commitment wall
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px]">
        Каждый говорит вслух.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1400px]">
        Обязательство, произнесённое группе, держится сильнее. Три строки по порядку — без комментариев, без «но».
      </p>

      <div className="space-y-[14px] max-w-[1500px] mb-[28px]">
        {formula.map((f, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[20px]">
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[8px]">{f.label}</p>
            <p className="text-[22px] font-mono text-[hsl(var(--slide-text))] leading-[1.4]">{f.placeholder}</p>
          </div>
        ))}
      </div>

      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Пара пишет друг другу в среду со скриншотом прогресса. Нет скриншота = нет ответа.
      </p>
    </div>
  );
}
