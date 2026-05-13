import FOM1SlideBase from "./FOM1SlideBase";

const tools = [
  ["🧠", "Claude Project", "knowledge base под твой продукт (загрузи туда всё что есть: лендинг, питч, ответы из формы, интервью)"],
  ["🔍", "Perplexity", "market research + конкурентов. Pro Search для глубины"],
  ["📢", "Meta Ad Library", "какую рекламу крутят конкуренты, какие офферы и креативы работают"],
  ["📈", "Google Trends", "динамика спроса в твоей нише. Растёт или умирает"],
  ["🎙️", "tl;dv", "запись интервью, AI-саммари. Бесплатно"],
  ["🤖", "Claude (Sonnet 4.6 / Opus 4.7)", "batch-анализ транскриптов после интервью"],
];

export default function FOM1Slide28Stack() {
  return (
    <FOM1SlideBase
      slide={28}
      eyebrow="AI-стек"
      title="Стек на эту неделю"
      subtitle="Минимум инструментов — максимум данных"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {tools.map(([e, t, d], i) => (
          <div key={i} className="flex items-baseline gap-[10px]">
            <span className="text-[16px] md:text-[26px]">{e}</span>
            <p>
              <span className="font-semibold text-[hsl(var(--slide-text))]">{t}</span>
              <span className="text-[hsl(var(--slide-text-muted))]"> — {d}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="mt-[14px] text-[hsl(var(--slide-gold))] max-w-[1800px]">
        💡 Промпты пришлю отдельно в Telegram — копируешь, подставляешь свои данные, запускаешь.
      </p>
    </FOM1SlideBase>
  );
}
