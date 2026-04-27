import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  "Назови ОДНО первое действие юзера в твоём продукте (одна фраза, глагол).",
  "Что юзер видит сразу после этого действия? Это и есть «вау»?",
  "Нужна ли регистрация ДО этого действия? Если да — обоснуй одним предложением, почему без неё нельзя.",
];

export default function M7Slide17Exercise2() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Упражнение · 3 минуты · в чат
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
          Опиши первое действие в своём продукте. Прямо сейчас.
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">
          Открой чат встречи. Ответь на 3 вопроса по своему продукту в одном сообщении.
        </p>
        <div className="space-y-[5px] mb-[12px]">
          {questions.map((q, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[7px] px-[10px] py-[7px] flex gap-[8px]">
              <span className="font-mono text-[11px] text-[hsl(var(--slide-gold))] font-bold shrink-0">{i + 1}.</span>
              <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{q}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[7px] px-[10px] py-[7px]">
          <p className="text-[9px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-semibold mb-[3px]">Формат ответа</p>
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))]">1)</span> действие · <span className="text-[hsl(var(--slide-gold))]">2)</span> что видит после · <span className="text-[hsl(var(--slide-gold))]">3)</span> регистрация: да/нет + причина
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Упражнение · 3 минуты · в чат встречи
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        Опиши первое действие в своём продукте. Прямо сейчас.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1600px]">
        Открой чат встречи. Ответь на 3 вопроса по своему продукту в одном сообщении. Коротко, без воды — одно действие, один результат, одно решение про регистрацию.
      </p>
      <div className="space-y-[12px] max-w-[1600px] mb-[22px]">
        {questions.map((q, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[20px] flex gap-[20px] items-center">
            <span className="font-mono text-[32px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">{i + 1}</span>
            <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">{q}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] px-[28px] py-[16px] max-w-[1600px]">
        <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[6px]">Формат ответа в чат</p>
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">1)</span> действие · <span className="text-[hsl(var(--slide-gold))] font-semibold">2)</span> что видит сразу после · <span className="text-[hsl(var(--slide-gold))] font-semibold">3)</span> регистрация: да/нет и почему
        </p>
      </div>
    </div>
  );
}
