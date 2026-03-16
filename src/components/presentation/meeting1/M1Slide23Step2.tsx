export default function M1Slide23Step2() {
  const steps = [
    { time: "0–2 мин", action: "Открыть Google Forms → «Создать форму с помощью AI» → описать свой продукт и цель исследования" },
    { time: "2–4 мин", action: "Из сгенерированных вопросов оставить 7–8 штук. Убрать наводящие и вопросы про будущее" },
    { time: "4–6 мин", action: "Добавить обязательные вопросы: «Как решаете проблему сейчас?» и «Сколько тратите на это?»" },
    { time: "6–8 мин", action: "Написать вступительный текст: кто вы, зачем опрос, сколько займёт (2 мин)" },
    { time: "8–10 мин", action: "Показать черновик — быстрый фидбек по структуре и формулировкам" },
  ];

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 2</span>
      </div>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Черновик custdev-формы
      </h2>
      <div className="space-y-[20px] max-w-[1100px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-[16px]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[8px] rounded shrink-0 min-w-[90px] text-center">
              {s.time}
            </span>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
      <div className="mt-[44px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold">
          Результат: черновик формы из 7–8 вопросов → доработать после встречи и разослать
        </p>
      </div>
    </div>
  );
}
