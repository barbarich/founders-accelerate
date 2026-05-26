import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide10FourTests() {
  const formats = [
    {
      icon: "🖥️",
      channel: "Лендинг",
      example: "Обученные сотрудники с первого рабочего дня. Создайте onboarding за 5 минут вместо месяцев — без методологов и бюджета",
      tip: "Конечный результат + скорость + «без»",
    },
    {
      icon: "💬",
      channel: "Холодное сообщение",
      example: "Привет! Видел что вы активно нанимаете. Что если новые сотрудники начнут приносить пользу с первого дня? MetaMinder создаёт обучение за 5 минут, результат — на следующий день. Интересно?",
      tip: "Контекст + результат клиента + лёгкий вопрос",
    },
    {
      icon: "🎤",
      channel: "Питч (30 секунд)",
      example: "Компании тратят месяцы на создание обучения, а новички сидят без дела. MetaMinder — обучение за 5 минут с AI, измеримый результат на следующий день. 50 компаний уже используют.",
      tip: "Боль → решение → доказательство",
    },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Позиционирование</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Один результат — три формулировки
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Один и тот же результат адаптируется под канал</p>
        <div className="space-y-[8px]">
          {formats.map((f, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="text-[14px]">{f.icon}</span>
                <p className="text-[11px] font-semibold text-[hsl(var(--slide-gold))]">{f.channel}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[4px] italic">"{f.example}"</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">💡 {f.tip}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Позиционирование</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">Один результат — три формулировки</h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[40px]">Один и тот же результат адаптируется под канал коммуникации</p>
      <div className="space-y-[20px] max-w-[1100px]">
        {formats.map((f, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[20px]">
            <div className="flex items-center gap-[12px] mb-[10px]">
              <span className="text-[28px]">{f.icon}</span>
              <p className="text-[22px] font-semibold text-[hsl(var(--slide-gold))]">{f.channel}</p>
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[8px] italic">"{f.example}"</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))]">💡 {f.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
