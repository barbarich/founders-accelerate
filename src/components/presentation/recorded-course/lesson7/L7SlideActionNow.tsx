import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { time: "0–10", action: "Открой свой продукт как новый пользователь. Запиши на видео экран + лицо (Loom). Никаких заметок до окончания" },
  { time: "10–15", action: "Пройди типичный flow первого открытия. Чувствуешь Aha? Где? На каком экране? На какой секунде?" },
  { time: "15–35", action: "Открой промпт «Aha-detector» из предыдущего слайда. Подставь свой продукт и ICP. Получи 3 варианта Aha + рекомендованный экран" },
  { time: "35–50", action: "Сравни: совпадает ли AI-Aha с тем что ты увидел в Loom? Если нет — что ближе к реальности у твоего пользователя?" },
  { time: "50–60", action: "Запиши свой final Aha-moment в одну строку. Сделай screenshot экрана, на котором он должен случиться. Это твой baseline" },
];

export default function L7SlideActionNow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">60 мин</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Сделай сейчас</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Найди свой Aha + спроектируй экран
        </h2>
        <div className="space-y-[6px]">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[4px] rounded shrink-0 min-w-[36px] text-center">{s.time}</span>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">60 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Сделай сейчас</span>
      </div>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Найди свой Aha + спроектируй путь к нему
      </h2>
      <div className="space-y-[14px] max-w-[1700px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-[18px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[100px] text-center">{s.time}</span>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
