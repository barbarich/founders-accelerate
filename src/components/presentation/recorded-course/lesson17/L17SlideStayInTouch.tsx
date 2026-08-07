import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  {
    t: "Вопрос по твоему продукту",
    where: "michael.barbarych@gmail.com",
    d: "Напиши мне напрямую. Я рад разбирать конкретные ситуации - и после курса тоже.",
  },
  {
    t: "Доступы, тарифы, материалы",
    where: "t.me/yelyzaveta96",
    d: "Организационные вопросы быстрее решает менеджер в Telegram.",
  },
  {
    t: "Разбор именно твоего случая",
    where: "3 личные встречи 1:1",
    d: "Входят в тариф с личной работой. Если он у тебя есть - просто напиши, когда захочешь встретиться.",
  },
];

export default function L17SlideStayInTouch() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Курс закончился, связь - нет
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[7px]">
          Ты не остаёшься с этим один
        </h2>
        <div className="space-y-[5px]">
          {channels.map((c) => (
            <div key={c.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{c.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-gold))] leading-[1.3] mt-[1px]">{c.where}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px] mt-[7px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Правило одного письма: не пиши «не получается». Напиши, что сделал за неделю и какие получились цифры - тогда я отвечу по существу.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Курс закончился, связь - нет
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        Ты не остаёшься <span className="text-[hsl(var(--slide-gold))]">с этим один</span>
      </h2>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1550px]">
        {channels.map((c) => (
          <div key={c.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">{c.t}</p>
            <p className="text-[18px] text-[hsl(var(--slide-gold))] leading-[1.3] mb-[8px] break-words">{c.where}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1550px] mt-[22px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Правило одного письма: не пиши «не получается». Напиши, что сделал за неделю и какие получились цифры - тогда я отвечу по существу.
        </p>
      </div>
    </div>
  );
}
