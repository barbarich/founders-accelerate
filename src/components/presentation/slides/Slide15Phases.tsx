import { useIsMobile } from "@/hooks/use-mobile";

const phases = [
  { num: "01", weeks: "Недели 1–4", title: "Фундамент", items: ["Валидация идеи — проверяем спрос", "Исследование рынка и конкурентов", "Формируем бизнес-модель", "Определяем MVP — что строить первым"], result: "Понимание, что строить и для кого" },
  { num: "02", weeks: "Недели 5–8", title: "Продукт", items: ["AI-инструменты для создания продукта", "Рабочий прототип — без навыков кода", "Демо и обратная связь каждую неделю", "Быстрые итерации и улучшения"], result: "Работающий MVP" },
  { num: "03", weeks: "Недели 9–12", title: "Запуск", items: ["Стратегия выхода на рынок", "Маркетинг и первые касания", "Привлечение первых пользователей", "План роста на 3–6 месяцев"], result: "Продукт в рынке" },
];

export default function Slide15Phases() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Программа</p>
        <h2 className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">Как устроена программа</h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[18px]">Не нужен опыт в разработке — мы пройдём это вместе.</p>
        <div className="space-y-[10px] mb-[14px]">
          {phases.map((p) => (
            <div key={p.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
              <div className="flex items-center gap-[8px] mb-[8px]">
                <p className="text-[9px] font-mono text-[hsl(var(--slide-gold)/0.6)]">{p.weeks}</p>
                <h3 className="text-[16px] font-bold text-[hsl(var(--slide-text))]">{p.title}</h3>
              </div>
              <div className="space-y-[4px]">
                {p.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-[6px]">
                    <div className="w-[3px] h-[3px] rounded-full bg-[hsl(var(--slide-gold)/0.4)] mt-[5px] shrink-0" />
                    <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-[8px] pt-[8px] border-t border-[hsl(var(--slide-border)/0.3)] flex items-center gap-[6px]">
                <span className="text-[11px]">→</span>
                <p className="text-[11px] text-[hsl(var(--slide-gold))] font-medium">{p.result}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text)/0.5)] text-center italic">
          Программа адаптируется под вас.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Программа</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">Как устроена программа</h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[60px]">Не нужен опыт в разработке, маркетинге или продажах — мы пройдём это вместе, шаг за шагом.</p>
      <div className="flex gap-[32px] mb-[48px]">
        {phases.map((p) => (
          <div key={p.num} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[40px] flex flex-col">
            <p className="text-[16px] font-mono text-[hsl(var(--slide-gold)/0.6)] mb-[6px]">{p.weeks}</p>
            <h3 className="text-[32px] font-bold text-[hsl(var(--slide-text))] mb-[28px]">{p.title}</h3>
            <div className="space-y-[14px] flex-1">
              {p.items.map((item, i) => (
                <div key={i} className="flex items-start gap-[12px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[hsl(var(--slide-gold)/0.4)] mt-[9px] shrink-0" />
                  <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-[24px] pt-[20px] border-t border-[hsl(var(--slide-border)/0.3)] flex items-center gap-[10px]">
              <span className="text-[18px]">→</span>
              <p className="text-[19px] text-[hsl(var(--slide-gold))] font-medium">{p.result}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.5)] text-center italic">
        Путь у каждого свой — иногда нужен пивот, иногда новая идея. Программа адаптируется под вас.
      </p>
    </div>
  );
}
