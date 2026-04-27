import { useIsMobile } from "@/hooks/use-mobile";

const bullets = [
  "Anatomy retention loop — что именно создаёт желание вернуться (вне продукта и внутри).",
  "Email и Push в crucial moments — когда писать, что писать, как не превратиться в спам.",
  "Triggers и Hooks — модель Эяля Нира на ваших продуктах.",
  "D1 / D7 / D30 метрики — как считать и какие цели ставить на стадии MVP.",
];

export default function M7Slide12NextWeekRetention() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Следующая встреча</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Неделя 8: Retention. Что заставляет вернуться.
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[10px] mb-[10px]">
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[8px]">
            На M7 открыли путь до Aha. На M8 — закрываем петлю. Что произойдёт между первой сессией и второй, чтобы юзер вернулся.
          </p>
          <div className="space-y-[5px]">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-[6px] items-start">
                <span className="text-[9px] text-[hsl(var(--slide-gold))] mt-[1px]">→</span>
                <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.45]">{b}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Приходишь с цифрой ДО и ПОСЛЕ правки M7. Без числа — встреча превращается в теорию.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Следующая встреча</p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px] max-w-[1600px]">
        Неделя 8: Retention. Что заставляет вернуться.
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[40px] py-[32px] max-w-[1600px] mb-[28px]">
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[24px]">
          На M7 мы открыли путь до Aha. На M8 — закрываем петлю. Что произойдёт между первой сессией и второй, чтобы юзер вернулся.
        </p>
        <div className="space-y-[14px]">
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-[18px] items-start">
              <span className="text-[24px] text-[hsl(var(--slide-gold))] leading-[1.2]">→</span>
              <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.5]">{b}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1600px] leading-[1.4]">
        Приходишь с цифрой ДО и ПОСЛЕ правки M7. Без числа на руках — встреча превращается в теорию. Мы это уже проходили.
      </p>
    </div>
  );
}