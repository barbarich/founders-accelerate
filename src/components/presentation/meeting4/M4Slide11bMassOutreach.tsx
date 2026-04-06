import { useIsMobile } from "@/hooks/use-mobile";

const badExample = [
  "Здравствуйте! Меня зовут Алексей, я CEO компании TechFlow.",
  "Мы разработали инновационное решение для автоматизации бизнес-процессов с использованием AI.",
  "Наша платформа помогает компаниям оптимизировать workflow и повысить эффективность на 40%.",
  "Хотел бы назначить 30-минутный звонок, чтобы обсудить возможности сотрудничества.",
  "Когда вам будет удобно?",
];

const goodExample = {
  subject: "{{имя}}, быстрый вопрос про {{тема}}",
  lines: [
    { label: "Строка 1", text: "{{имя}}, вижу что вы [делаете X] — вопрос:" },
    { label: "Боль", text: "[Проблема] обычно отнимает [время/деньги]. Так?" },
    { label: "Результат", text: "Мы помогаем [кому] делать [результат] за [время]." },
    { label: "CTA", text: "Стоит глянуть? Скину 2-мин видео — без звонков." },
  ],
};

const whyGood = [
  "Персонализация в первой строке",
  "Вопрос вместо утверждения",
  "Конкретный результат, а не «инновации»",
  "Низкий порог: видео, а не 30-мин звонок",
];

export default function M4Slide11bMassOutreach() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Массовые рассылки
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Плохое vs хорошее письмо
        </h2>
        <div className="flex gap-[6px] mb-[8px]">
          <div className="flex-1 bg-[hsl(0,60%,15%)] border border-[hsl(0,40%,30%)] rounded-[6px] px-[8px] py-[6px]">
            <p className="text-[8px] font-bold text-[hsl(0,70%,65%)] mb-[3px]">&#10005; Так не работает</p>
            {badExample.map((l, i) => (
              <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{l}</p>
            ))}
          </div>
          <div className="flex-1 bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[6px]">
            <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">&#10003; Так открывают</p>
            <p className="text-[7px] text-[hsl(var(--slide-gold))] mb-[2px]">Тема: {goodExample.subject}</p>
            {goodExample.lines.map((l, i) => (
              <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{l.text}</p>
            ))}
          </div>
        </div>
        <div className="space-y-[2px]">
          {whyGood.map((w, i) => (
            <div key={i} className="flex items-center gap-[4px]">
              <span className="text-[7px] text-[hsl(var(--slide-gold))]">&#10003;</span>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))]">{w}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Массовые рассылки
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Плохое vs хорошее письмо
      </h2>

      <div className="flex gap-[32px] mb-[36px]">
        {/* Bad */}
        <div className="flex-1 bg-[hsl(0,60%,8%)] border border-[hsl(0,40%,20%)] rounded-[16px] px-[36px] py-[32px]">
          <p className="text-[20px] font-bold text-[hsl(0,70%,60%)] mb-[20px]">&#10005; Так не работает</p>
          <div className="space-y-[10px]">
            {badExample.map((l, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5] line-through decoration-[hsl(0,40%,30%)]">{l}</p>
            ))}
          </div>
        </div>

        {/* Good */}
        <div className="flex-1 bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[32px]">
          <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[20px]">&#10003; Так открывают</p>
          <div className="bg-[hsl(var(--slide-bg))] rounded-[12px] px-[24px] py-[20px]">
            <p className="text-[16px] text-[hsl(var(--slide-gold))] mb-[16px] font-mono">
              Тема: {goodExample.subject}
            </p>
            <div className="space-y-[14px]">
              {goodExample.lines.map((l, i) => (
                <div key={i} className="flex items-start gap-[12px]">
                  <span className="text-[13px] text-[hsl(var(--slide-gold))] font-mono shrink-0 mt-[3px]">{l.label}</span>
                  <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]">{l.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why it works */}
      <div className="flex gap-[20px]">
        {whyGood.map((w, i) => (
          <div key={i} className="flex items-center gap-[10px] bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.15)] rounded-[10px] px-[18px] py-[12px]">
            <span className="text-[16px] text-[hsl(var(--slide-gold))]">&#10003;</span>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">{w}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
