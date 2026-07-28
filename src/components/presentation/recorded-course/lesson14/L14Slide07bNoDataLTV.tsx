import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "1",
    title: "Не «сколько проживёт», а «когда вернёт деньги»",
    text: "Я потратил на клиента $87. Он приносит мне $22 в месяц. Значит, через 4 месяца я вышел в ноль. Здесь не надо ничего угадывать - оба числа известны уже сегодня.",
  },
  {
    n: "2",
    title: "Считай на полгода вперёд, а не «на всю жизнь»",
    text: "$22 в месяц × 6 месяцев = $132 с клиента. Если он окупает привлечение даже за такой короткий срок - продукт живой. А проживёт дольше - будет только лучше.",
  },
  {
    n: "3",
    title: "Смотри, сколько людей заплатили второй раз",
    text: "Из 60 первых клиентов второй платёж прошёл у 42. Это 70% - и это твоё первое честное число про удержание. Ждать года не нужно, оно появляется уже через месяц.",
  },
];

export default function L14Slide07bNoDataLTV() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Продукт новый · данных нет</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Не знаешь, сколько клиент проживёт? <span className="text-[hsl(var(--slide-gold))]">И не надо</span>
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[9px]">
          Ты запустился месяц назад - считать средний срок жизни клиента не из чего. Вместо того чтобы гадать, задай три простых вопроса.
        </p>
        <div className="space-y-[7px] mb-[9px]">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-[9px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[11px] py-[7px]">
              <span className="text-[13px] font-bold text-[hsl(var(--slide-gold))] shrink-0 leading-[1.2]">{s.n}</span>
              <div>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[2px]">{s.title}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.5]">
            Через 60 дней у тебя появятся свои цифры - тогда и посчитаешь по-настоящему. Сейчас важно не угадать, а не обмануть себя.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Продукт новый · данных нет</p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em] max-w-[1700px]">
        Не знаешь, сколько клиент проживёт? <span className="text-[hsl(var(--slide-gold))]">И не надо</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[24px] max-w-[1650px]">
        Ты запустился месяц назад - считать средний срок жизни клиента не из чего. Вместо того чтобы гадать, задай три простых вопроса.
      </p>
      <div className="space-y-[14px] mb-[24px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-[24px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[16px]">
            <span className="text-[30px] font-bold text-[hsl(var(--slide-gold))] shrink-0 leading-[1.1]">{s.n}</span>
            <div>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[5px]">{s.title}</p>
              <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-4 border-[hsl(var(--slide-gold))] px-[28px] py-[16px] max-w-[1700px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] font-semibold leading-[1.5]">
          Через 60 дней у тебя появятся свои цифры - тогда и посчитаешь по-настоящему. Сейчас важно не угадать, а не обмануть себя.
        </p>
      </div>
    </div>
  );
}
