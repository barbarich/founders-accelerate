import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  { n: "1", q: "«Как вы решаете [конкретная задача] сегодня? Покажи мне 1 пример с прошлой недели.»", listen: "Текущий процесс. Кто его делает. Сколько времени уходит. Где боль на самом деле, а не там где он думает." },
  { n: "2", q: "«Сколько времени или денег это занимает в месяц?»", listen: "Конкретные числа. Если он не знает — это твой главный аргумент: вы не мерите то, что вам стоит дорого." },
  { n: "3", q: "«Что вы уже пробовали чтобы это исправить? Почему не сработало?»", listen: "Кладбище предыдущих решений. Чтобы ты не предложил то же самое и не получил тот же отказ." },
  { n: "4", q: "«Если бы это решилось завтра — что в вашей работе изменилось бы?»", listen: "Их definition of success. Это и будет gate-критерий MAP. Если он не может сформулировать — у него нет реальной боли." },
  { n: "5", q: "«Кто кроме вас должен сказать «да», чтобы мы начали работать? Кого ещё нужно подключить?»", listen: "Stakeholders. Это ТВОЙ multithreading список. Champion · DM · EB · Blockers. Без этого вопроса — сделка умрёт в неделю 4." },
];

export default function M11Slide10Discovery() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[12px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Discovery 15 минут · 5 вопросов
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Дословно + <span className="text-[hsl(var(--slide-gold))]">что слушать в ответе</span>
        </h2>
        <div className="space-y-[3px]">
          {questions.map((it) => (
            <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <div className="flex items-baseline gap-[3px]">
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))]">{it.n}</span>
                <span className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4]">{it.q}</span>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4] ml-[12px]">→ {it.listen}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Discovery 15 минут · 5 вопросов
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Дословно + <span className="text-[hsl(var(--slide-gold))]">что слушать в ответе</span>
      </h2>
      <div className="space-y-[10px] max-w-[1700px]">
        {questions.map((it) => (
          <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[10px]">
            <div className="flex items-start gap-[14px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{it.n}</span>
              <div className="flex-1">
                <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[3px]">{it.q}</p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45]"><span className="text-[hsl(var(--slide-gold))] not-italic font-bold">слушай:</span> {it.listen}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
