import { useIsMobile } from "@/hooks/use-mobile";

const cards = [
  {
    n: "1",
    t: "Курс работает не от просмотра",
    d: "Он работает от того, что ты сделал после урока. Если досмотрел до конца и ничего не собрал - это не провал. Это просто ещё не начатая работа.",
  },
  {
    n: "2",
    t: "Не начинай курс заново",
    d: "Соблазн пересмотреть всё с урока 1 - это способ отложить действие ещё на месяц. Возьми свою букву и один урок, к которому она отсылает. Один.",
  },
  {
    n: "3",
    t: "Правило 48 часов",
    d: "Сделай первое действие в ближайшие двое суток, пока мотивация от этого урока ещё есть. Маленькое: одно письмо, один разговор, один экран.",
  },
];

export default function L17SlideBehindIsFine() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Если ты ещё не запускался
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[7px]">
          Отстал - не значит проиграл
        </h2>
        <div className="space-y-[5px]">
          {cards.map((c) => (
            <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{c.n}. {c.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[1px]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px] mt-[7px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            По моему опыту чаще всего не получается не из-за ошибки в стратегии, а из-за паузы, которая незаметно растянулась на три месяца.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Если ты ещё не запускался
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        Отстал - <span className="text-[hsl(var(--slide-gold))]">не значит проиграл</span>
      </h2>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1550px]">
        {cards.map((c) => (
          <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold mb-[10px]">{c.n}</span>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">{c.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1550px] mt-[22px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
          По моему опыту чаще всего не получается не из-за ошибки в стратегии, а из-за паузы, которая незаметно растянулась на три месяца.
        </p>
      </div>
    </div>
  );
}
