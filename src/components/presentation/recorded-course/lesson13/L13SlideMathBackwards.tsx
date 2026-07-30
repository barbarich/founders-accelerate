import { useIsMobile } from "@/hooks/use-mobile";

const chain = [
  { n: "€3 000", l: "цель на месяц", s: "сколько хочу заработать" },
  { n: "15", l: "клиентов", s: "при чеке €200" },
  { n: "60", l: "встреч", s: "закрывается примерно каждая четвёртая" },
  { n: "240", l: "ответов", s: "до встречи доходит каждый четвёртый" },
  { n: "960", l: "сообщений", s: "отвечает примерно каждый четвёртый" },
];

export default function L13SlideMathBackwards() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Математика продаж
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Считай назад от денег, <span className="text-[hsl(var(--slide-gold))]">а не вперёд от активности</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.4]">
          Не «сколько успею написать», а «сколько нужно написать, чтобы получить свои деньги». Пример на цифрах:
        </p>
        <div className="space-y-[3px] mb-[8px]">
          {chain.map((c) => (
            <div key={c.l} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px] flex items-baseline gap-[7px]">
              <span className="text-[13px] font-bold text-[hsl(var(--slide-gold))] w-[52px] shrink-0">{c.n}</span>
              <span className="text-[9px] font-bold text-[hsl(var(--slide-text))] w-[62px] shrink-0">{c.l}</span>
              <span className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{c.s}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px] mb-[6px]">
          <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">
            960 сообщений в месяц ≈ 45 в день ≈ 2 часа работы.
          </p>
          <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            Правило тройного запаса: чтобы закрыть 3 сделки, в работе должно быть 9–12. Если сделок ровно столько, сколько нужно денег, месяц уже провален — просто узнаешь через два.
          </p>
        </div>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
          Первые два месяца бери эти цифры «по умолчанию». Потом считай только свои — они отличаются от чужих в разы.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Математика продаж
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Считай назад от денег, <span className="text-[hsl(var(--slide-gold))]">а не вперёд от активности</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Вопрос не «сколько я успею написать», а «сколько нужно написать, чтобы получить свои деньги». Пример на цифрах:
      </p>
      <div className="grid grid-cols-5 gap-[16px] max-w-[1700px] mb-[24px]">
        {chain.map((c) => (
          <div key={c.l} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[18px]">
            <p className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[6px]">{c.n}</p>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{c.l}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.s}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px] mb-[16px]">
        <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[6px]">
          960 сообщений в месяц ≈ 45 в день ≈ 2 часа работы. Вот и весь план.
        </p>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          Правило тройного запаса: чтобы закрыть 3 сделки, в работе должно быть 9–12. Если сделок ровно столько, сколько нужно денег, месяц уже провален — просто узнаешь ты об этом через два.
        </p>
      </div>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] max-w-[1700px]">
        Первые два месяца бери эти цифры «по умолчанию». Дальше считай только свои — они отличаются от чужих в разы.
      </p>
    </div>
  );
}
