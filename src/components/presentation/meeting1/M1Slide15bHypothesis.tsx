import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide15bHypothesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Customer Development</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Сначала гипотеза — потом интервью
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">
          Без гипотезы интервью превращается в болтовню.
        </p>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[12px] mb-[10px]">
          <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Шаблон гипотезы</h3>
          <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] p-[10px]">
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.7] font-mono">
              Я верю, что <span className="text-[hsl(var(--slide-gold))] font-semibold">[сегмент]</span> испытывает <span className="text-[hsl(var(--slide-gold))] font-semibold">[боль]</span> когда <span className="text-[hsl(var(--slide-gold))] font-semibold">[контекст]</span>, и готов платить за <span className="text-[hsl(var(--slide-gold))] font-semibold">[формат]</span>.
            </p>
          </div>
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] p-[10px] mb-[10px]">
          <p className="text-[9px] text-[hsl(var(--slide-gold))] leading-[1.6] italic">
            Пример: «Я верю, что фрилансеры-дизайнеры тратят 5+ ч/нед на поиск клиентов и готовы платить $30/мес за автоматизацию outreach.»
          </p>
        </div>

        <div className="space-y-[6px]">
          {[
            { num: "1", q: "Проблема существует?", hint: "Люди реально страдают?" },
            { num: "2", q: "Достаточно больно?", hint: "Готовы тратить деньги?" },
            { num: "3", q: "Текущие решения не устраивают?", hint: "Пробовали — не помогло?" },
            { num: "4", q: "Готовы платить?", hint: "Есть бюджет и мотивация?" },
          ].map((item) => (
            <div key={item.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[8px] flex items-center gap-[6px]">
              <span className="text-[hsl(var(--slide-gold))] font-mono text-[10px] font-bold">{item.num}.</span>
              <span className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{item.q}</span>
              <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">— {item.hint}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Customer Development</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Сначала гипотеза — потом интервью
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[44px]">
        Без гипотезы интервью превращается в болтовню. Ты должен знать, что проверяешь — до того, как откроешь рот.
      </p>
      <div className="flex gap-[32px]">
        <div className="flex-[1.3]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px] mb-[24px]">
            <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">Шаблон гипотезы</h3>
            <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] p-[28px]">
              <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.7] font-mono">
                Я верю, что <span className="text-[hsl(var(--slide-gold))] font-semibold">[сегмент]</span> испытывает проблему <span className="text-[hsl(var(--slide-gold))] font-semibold">[боль]</span> когда <span className="text-[hsl(var(--slide-gold))] font-semibold">[контекст]</span>, и готов платить за решение <span className="text-[hsl(var(--slide-gold))] font-semibold">[формат]</span>.
              </p>
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] p-[28px]">
            <p className="text-[20px] text-[hsl(var(--slide-gold))] leading-[1.6] italic">
              Пример: «Я верю, что фрилансеры-дизайнеры тратят 5+ часов в неделю на поиск клиентов через холодные письма, и готовы платить $30/мес за инструмент автоматизации outreach.»
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">Что проверяешь</h3>
          <div className="space-y-[16px]">
            {[
              { num: "1", q: "Проблема существует?", hint: "Люди реально это делают и страдают?" },
              { num: "2", q: "Достаточно больно?", hint: "Готовы тратить время/деньги на решение?" },
              { num: "3", q: "Текущие решения не устраивают?", hint: "Пробовали что-то — не помогло?" },
              { num: "4", q: "Готовы платить?", hint: "Есть бюджет и мотивация переключиться?" },
            ].map((item) => (
              <div key={item.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[10px] p-[22px]">
                <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">
                  <span className="text-[hsl(var(--slide-gold))] font-mono mr-[8px]">{item.num}.</span>{item.q}
                </p>
                <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">{item.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
