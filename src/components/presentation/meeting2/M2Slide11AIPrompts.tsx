import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide11AIPrompts() {
  const prompts = [
    { num: "1", title: "Оценка позиционирования", prompt: "Оцени моё позиционирование: «[ваше предложение]». Понятно ли за 5 секунд что это и для кого? Что улучшить?" },
    { num: "2", title: "Генерация вариантов", prompt: "Мой продукт [описание]. Целевая аудитория [кто]. Предложи 5 вариантов позиционирования по формуле: [Продукт] помогает [кому] [решить что] с помощью [как]" },
    { num: "3", title: "Проверка на простоту", prompt: "Перепиши моё позиционирование так, чтобы его понял 12-летний подросток: «[ваше предложение]»" },
    { num: "4", title: "Отстройка от конкурентов", prompt: "Мой продукт [описание]. Конкуренты: [список]. Сформулируй 3 варианта позиционирования с отстройкой от каждого конкурента" },
    { num: "5", title: "A/B тест заголовков", prompt: "Напиши 5 вариантов заголовка для лендинга на основе позиционирования «[ваше предложение]». Каждый — максимум 8 слов." },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">AI-инструменты</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          5 промптов для позиционирования
        </h2>
        <div className="space-y-[6px]">
          {prompts.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-center gap-[6px] mb-[3px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[16px] h-[16px] rounded-full flex items-center justify-center shrink-0">{p.num}</span>
                <span className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{p.title}</span>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] font-mono">{p.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">AI-инструменты</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">5 промптов для позиционирования</h2>
      <div className="space-y-[14px] max-w-[1100px]">
        {prompts.map((p, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 font-bold mt-[4px]">{p.num}</span>
            <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[14px]">
              <p className="text-[19px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">{p.title}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] font-mono">{p.prompt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
