import { useIsMobile } from "@/hooks/use-mobile";

const hook = "Ковид закрыл все марафоны мира. Мы собрали бегунов всей планеты на один забег.";

const parts = [
  { n: "1", label: "Проблема", time: "45с", text: "В пандемию все беговые ивенты отменили. У миллионов бегунов осталось желание соревноваться и быть в комьюнити — а возможности исчезли." },
  { n: "2", label: "Решение + демо", time: "60с", text: "Run Everywhere — виртуальные марафоны планетарного масштаба. Лондон, Дубай, Нью-Йорк: тысячи бегут в один день, результаты в общем рейтинге, медали приходят по почте.", demo: "показываю живой общий рейтинг и карту участников по странам" },
  { n: "3", label: "Тяга", time: "45с", text: "За первый год — десятки тысяч платящих из 100+ стран. 60% возвращаются на второй, третий, пятый забег." },
  { n: "4", label: "Рынок · почему я", time: "60с", text: "Точное решение в момент, когда оно было нужно всем. Я всю жизнь профессиональный спортсмен — знаю, как зажечь мотивацию бегуна, и наложил этот опыт на боль рынка." },
  { n: "5", label: "Запрос", time: "30с", text: "Ищешь беговое комьюнити и событие планетарного масштаба — от Африки до Океании — чтобы бороться за настоящие награды? Присоединяйся." },
];

export default function M12Slide04bExample() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Образец питча · Run Everywhere
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Тот же шаблон — <span className="text-[hsl(var(--slide-gold))]">заполненный вживую</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[4px] mb-[5px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4] italic">«{hook}»</p>
        </div>
        <div className="space-y-[3px]">
          {parts.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{p.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{p.label}</span>
                <span className="text-[6.5px] text-[hsl(var(--slide-text-muted))] ml-auto">{p.time}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{p.text}</p>
              {p.demo && <p className="text-[7px] text-[hsl(var(--slide-gold)/0.85)] italic leading-[1.35] ml-[14px]">▶ {p.demo}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Образец питча · Run Everywhere
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Тот же шаблон — <span className="text-[hsl(var(--slide-gold))]">заполненный вживую</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[14px] max-w-[1700px] mb-[16px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.35] italic">«{hook}»</p>
      </div>
      <div className="space-y-[7px] max-w-[1700px]">
        {parts.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[10px] flex items-start gap-[20px]">
            <div className="flex flex-col items-center shrink-0 w-[64px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <span className="text-[11px] text-[hsl(var(--slide-text-muted))] mt-[3px]">{p.time}</span>
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-bold uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{p.label}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]">{p.text}</p>
              {p.demo && <p className="text-[14px] text-[hsl(var(--slide-gold)/0.85)] italic leading-[1.35] mt-[2px]">▶ {p.demo}</p>}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[16px] max-w-[1700px]">
        Проблема → решение → доказательство → почему ты → ясный запрос. <span className="text-[hsl(var(--slide-gold))] font-semibold">Ни одного лишнего слова.</span>
      </p>
    </div>
  );
}
