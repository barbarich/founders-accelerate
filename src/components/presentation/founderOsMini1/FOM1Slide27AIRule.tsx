import FOM1SlideBase from "./FOM1SlideBase";

const ai = [
  "Парсит десятки источников за один прогон",
  "Находит конкурентов, цены, позиционирование",
  "Достаёт цитаты пользователей с Reddit, G2, отзывов",
  "Сводит инсайты в структурированный отчёт",
  "Анализирует транскрипты интервью batch-режимом",
];
const you = [
  "Открой сайты топ-5 конкурентов руками",
  "Прочитай 10–20 живых отзывов",
  "Перепроверь ключевые цифры в источниках",
  "Проведи 5–7 интервью голосом сам",
  "Сложи свою личную картину рынка в голове",
];

export default function FOM1Slide27AIRule() {
  return (
    <FOM1SlideBase
      slide={28}
      eyebrow="AI-стек"
      title="AI ≠ замена тебя"
      subtitle="Правило 80/20"
    >
      <div className="grid grid-cols-2 gap-[10px] md:gap-[20px] max-w-[1800px] text-[10.5px] md:text-[18px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="font-semibold text-[hsl(var(--slide-gold))] text-[12px] md:text-[22px]">AI делает (80%)</p>
          <ul className="mt-[6px] space-y-[3px] text-[hsl(var(--slide-text))]">
            {ai.map((x, i) => <li key={i}>· {x}</li>)}
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="font-semibold text-[hsl(var(--slide-text))] text-[12px] md:text-[22px]">Ты делаешь руками (20%)</p>
          <ul className="mt-[6px] space-y-[3px] text-[hsl(var(--slide-text))]">
            {you.map((x, i) => <li key={i}>· {x}</li>)}
          </ul>
        </div>
      </div>
      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[10.5px] md:text-[18px]">
        <p>
          💡 2026 контекст: Anthropic в апреле опубликовал, как они провели 1 250 интервью через AI-Interviewer для собственного research.
          Pattern публичный — ты можешь запустить 30 первичных текстовых интервью за выходные.
          Но финальные 5–7 голосом ты делаешь сам. AI не услышит паузу, не увидит, когда собеседник врёт чтобы быть вежливым.
        </p>
      </div>
    </FOM1SlideBase>
  );
}
