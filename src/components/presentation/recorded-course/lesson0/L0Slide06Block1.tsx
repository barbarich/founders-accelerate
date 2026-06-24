import { useIsMobile } from "@/hooks/use-mobile";

const points = [
  "Анализ рынка и конкурентов: кто уже рядом и в чём слабы",
  "Глубинные разговоры с пользователями: какую боль реально готовы решать",
  "Позиционирование: за что именно тебя выберут",
  "Проверка идеи до строчки кода — чтобы не потерять полгода",
];

export default function L0Slide06Block1() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[36px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Блок 01
        </p>
        <h2 className="font-display text-[27px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px] tracking-[-0.01em]">
          Валидация и ресерч
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[20px]">
          Прежде чем строить — понять, что именно строить.
        </p>
        <div className="space-y-[10px]">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-[10px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold))] mt-[7px] shrink-0" />
              <p className="text-[13px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Блок 01
      </p>
      <h2 className="font-display text-[66px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
        Валидация и ресерч
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[44px] max-w-[1300px]">
        Прежде чем строить — понять, что именно строить.
      </p>
      <div className="space-y-[22px] max-w-[1500px]">
        {points.map((p, i) => (
          <div key={i} className="flex items-start gap-[18px]">
            <div className="w-[9px] h-[9px] rounded-full bg-[hsl(var(--slide-gold))] mt-[14px] shrink-0" />
            <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
