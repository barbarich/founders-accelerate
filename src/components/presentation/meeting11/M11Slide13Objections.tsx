import { useIsMobile } from "@/hooks/use-mobile";

const objections = [
  {
    n: "1",
    client: "«Это дорого»",
    you: "«Понимаю. Скажи под какой бюджет ты считал? Если он $X — у меня есть месячный план $Y, попробуем 30 дней. Если решение окупится — переключим на годовой и сэкономишь 20%. Если нет — расходимся.»",
    why: "Anchor + tier + reversal риска на тебя.",
  },
  {
    n: "2",
    client: "«Не сейчас, давай через квартал»",
    you: "«Окей. Что должно произойти у тебя к этому моменту, чтобы это стало приоритетом? Я могу записать звонок в календарь сразу на [дата через 12 недель]. Если к той дате условия сложатся — мы готовы.»",
    why: "Set-future-meeting. Получаешь приоритет в его календаре, не теряешь лид в pipeline.",
  },
  {
    n: "3",
    client: "«У конкурентов то же самое»",
    you: "«Какие 2 фичи ты у [конкурент] любишь больше всего? ...окей. У нас [конкретное отличие в одну строку, которое касается ИМЕННО его use-case]. Это то, что у них не появится — потому что [причина].»",
    why: "One specific differentiator. Привязываешь к ЕГО use-case из discovery.",
  },
  {
    n: "4",
    client: "«Надо посоветоваться с командой»",
    you: "«Конечно. А кто конкретно должен быть в этом разговоре? Давай я приду на ваш внутренний звонок на 10 минут и отвечу на вопросы — или подготовлю одностраничник специально под их роли. Что удобнее?»",
    why: "🔑 Multithreading приём. Не «жду 3 недели» — внедряешься в их процесс и узнаёшь имена decision-makers.",
  },
  {
    n: "5",
    client: "«Не вижу разницы с тем, что уже есть»",
    you: "«Понимаю — на первый взгляд многое похоже. Можно я покажу 3 минуты конкретно на твоём кейсе [тот, что он назвал в discovery]? Если после этого ты так же скажешь — мы не подходим, я не буду уговаривать.»",
    why: "Мини-демо на конкретике + честный escape-hatch. Снимает defensive-режим.",
  },
];

export default function M11Slide13Objections() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          5 возражений · готовые скрипты
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Полные мини-диалоги · <span className="text-[hsl(var(--slide-gold))]">копируй дословно</span>
        </h2>
        <div className="space-y-[3px]">
          {objections.map((o) => (
            <div key={o.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{o.n}</span>
                <span className="text-[8px] text-[hsl(var(--slide-text-muted))] italic">Клиент: {o.client}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4] ml-[12px]"><span className="text-[hsl(var(--slide-gold))] font-bold">Ты:</span> {o.you}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] italic ml-[12px]">→ {o.why}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        5 возражений · готовые скрипты
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        Полные мини-диалоги · <span className="text-[hsl(var(--slide-gold))]">копируй дословно</span>
      </h2>
      <div className="space-y-[10px] max-w-[1700px]">
        {objections.map((o) => (
          <div key={o.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[12px]">
            <div className="flex items-start gap-[14px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{o.n}</span>
              <div className="flex-1">
                <p className="text-[15px] text-[hsl(var(--slide-text-muted))] italic mb-[3px]">Клиент: {o.client}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[3px]"><span className="text-[hsl(var(--slide-gold))] font-bold">Ты:</span> {o.you}</p>
                <p className="text-[12px] text-[hsl(var(--slide-text-muted))] italic">→ {o.why}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
