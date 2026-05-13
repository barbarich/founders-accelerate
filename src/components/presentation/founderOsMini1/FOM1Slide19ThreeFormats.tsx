import FOM1SlideBase from "./FOM1SlideBase";

const formats = [
  {
    e: "🖥️",
    t: "Лендинг",
    body: "«Обученные сотрудники с первого рабочего дня. Создайте onboarding за 5 минут вместо месяцев — без методологов и бюджета»",
    why: "Конечный результат + скорость + «без»",
  },
  {
    e: "💬",
    t: "Холодное сообщение",
    body: "«Привет! Видел, что вы активно нанимаете. Что если новые сотрудники начнут приносить пользу с первого дня? MetaMinder создаёт обучение за 5 минут, результат — на следующий день. Интересно?»",
    why: "Контекст + результат клиента + лёгкий вопрос",
  },
  {
    e: "🎤",
    t: "Питч (30 секунд)",
    body: "«Компании тратят месяцы на создание обучения, а новички сидят без дела. MetaMinder — обучение за 5 минут с AI, измеримый результат на следующий день. 50 компаний уже используют.»",
    why: "Боль → решение → доказательство",
  },
];

export default function FOM1Slide19ThreeFormats() {
  return (
    <FOM1SlideBase
      slide={20}
      eyebrow="Адаптация"
      title="Один результат — три формулировки"
      subtitle="Один результат адаптируется под канал коммуникации"
    >
      <div className="space-y-[10px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {formats.map((f, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[14px] md:p-[24px]">
            <div className="flex items-baseline gap-[8px]">
              <span className="text-[16px] md:text-[26px]">{f.e}</span>
              <span className="font-display font-bold text-[hsl(var(--slide-gold))] text-[16px] md:text-[28px]">{f.t}</span>
            </div>
            <p className="text-[hsl(var(--slide-text))] mt-[4px]">{f.body}</p>
            <p className="text-[hsl(var(--slide-text-muted))] mt-[4px] italic">💡 {f.why}</p>
          </div>
        ))}
      </div>
    </FOM1SlideBase>
  );
}
