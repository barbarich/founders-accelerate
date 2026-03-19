import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide21MVPChecklist() {
  const items = [
    { num: "1", text: "Решает одну конкретную проблему от начала до конца" },
    { num: "2", text: "Пользователь получает результат за первые 5 минут" },
    { num: "3", text: "Можно объяснить что делает за одно предложение" },
    { num: "4", text: "Есть способ оплаты (или регистрации — если freemium)" },
    { num: "5", text: "Работает без вашего ручного вмешательства" },
    { num: "6", text: "Можно показать живому человеку прямо сейчас" },
    { num: "7", text: "Вы можете назвать 3 человека, которые это купят" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">MVP</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Чеклист готовности MVP
        </h2>
        <div className="space-y-[6px]">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <div className="w-[18px] h-[18px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))]">{item.num}</span>
              </div>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-[12px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))]">Не все 7 нужны сразу. Но чем больше — тем ближе к запуску.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">MVP</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[44px]">Чеклист готовности MVP</h2>
      <div className="space-y-[16px] max-w-[1000px]">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <div className="w-[36px] h-[36px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[2px]">
              <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))]">{item.num}</span>
            </div>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px] max-w-[800px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))]">Не все 7 нужны сразу. Но чем больше галочек — тем ближе вы к запуску.</p>
      </div>
    </div>
  );
}
