import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { num: "1", action: "Открой свой продукт как новый юзер. Запиши на видео экран + лицо через Loom. Никаких заметок до конца записи." },
  { num: "2", action: "Пройди типичный flow первого открытия. Чувствуешь Aha? Где? На каком экране? На какой секунде?" },
  { num: "3", action: "Открой Aha-detector промпт из предыдущего слайда. Подставь свой продукт и ICP. Получи 3 варианта Aha + рекомендованный экран." },
  { num: "4", action: "Сравни: совпадает ли AI-Aha с тем что ты увидел в записи? Если нет — что ближе к реальности у твоего пользователя?" },
  { num: "5", action: "Запиши свой финальный Aha-момент в одну строку. Сделай скриншот экрана, на котором он должен случиться. Это твой baseline." },
];

export default function L7SlideActionNow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Пошаговый план · найти свой Aha
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Найди свой Aha + спроектируй экран
        </h2>
        <div className="space-y-[7px] mb-[10px]">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[7px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-semibold">На выходе: твой Aha в одной строке + скриншот экрана-точки</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Пошаговый план · найти свой Aha
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Найди свой <span className="text-[hsl(var(--slide-gold))]">Aha</span> + спроектируй путь к нему
      </h2>
      <div className="space-y-[16px] max-w-[1500px]">
        {steps.map((s) => (
          <div key={s.num} className="flex items-start gap-[18px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[36px] h-[36px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[16px] max-w-[1500px]">
        <p className="text-[19px] text-[hsl(var(--slide-text))] font-semibold">На выходе: твой Aha в одной строке + скриншот экрана-точки. Это baseline для следующего урока.</p>
      </div>
    </div>
  );
}
