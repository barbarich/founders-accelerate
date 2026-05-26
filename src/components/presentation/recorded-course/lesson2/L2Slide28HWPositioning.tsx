import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide28HWPositioning() {
  const tasks = [
    "Заполнить формулу позиционирования",
    "Написать 3 варианта — разные углы отстройки",
    'Тест «5 секунд» — зачитать незнакомому',
    'Тест «мама» — рассказать не из ниши',
    'Тест «лендинг» — можно ли поставить заголовком',
    "Выбрать лучший — защитить на встрече",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[8px] py-[4px] rounded">1 час</span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">Задание</span>
        </div>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">Позиционирование</h2>
        <div className="space-y-[6px]">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <div className="w-[18px] h-[18px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{task}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">1 час</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Задание на неделю</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Позиционирование</h2>
      <div className="space-y-[14px] max-w-[1100px]">
        {[
          "Заполнить формулу: [Продукт] помогает [кому] [решить проблему] с помощью [отличие], в отличие от [альтернатива]",
          "Написать 3 варианта позиционирования — с разными углами отстройки от конкурентов",
          "Проверить тестом «5 секунд» — зачитать незнакомому человеку, понял ли о чём и для кого",
          "Проверить тестом «мама» — рассказать кому-то не из ниши, зацепило или нет",
          "Проверить тестом «лендинг» — можно ли поставить заголовком первого экрана",
          "Выбрать лучший вариант — быть готовым защитить на следующей встрече",
        ].map((task, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <div className="w-[32px] h-[32px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[2px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
