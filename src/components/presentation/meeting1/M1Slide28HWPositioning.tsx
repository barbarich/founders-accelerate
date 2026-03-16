export default function M1Slide28HWPositioning() {
  const tasks = [
    "Заполнить формулу: [Продукт] помогает [кому] [решить проблему] с помощью [отличие], в отличие от [альтернатива]",
    "Написать 3 варианта позиционирования — с разными углами отстройки от конкурентов",
    "Проверить тестом «5 секунд» — зачитать незнакомому человеку, понял ли о чём и для кого",
    "Проверить тестом «мама» — рассказать кому-то не из ниши, зацепило или нет",
    "Проверить тестом «лендинг» — можно ли поставить заголовком первого экрана",
    "Выбрать лучший вариант — быть готовым защитить на следующей встрече",
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">1 час</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Задание на неделю</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        Позиционирование
      </h2>
      <div className="space-y-[14px] max-w-[1100px]">
        {tasks.map((task, i) => (
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
