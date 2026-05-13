import FOM1SlideBase from "./FOM1SlideBase";

const checks = [
  ["Проблема существует?", "Люди реально это делают и страдают?"],
  ["Достаточно больно?", "Готовы тратить время/деньги на решение?"],
  ["Текущие решения не устраивают?", "Пробовали что-то — не помогло?"],
  ["Готовы платить?", "Есть бюджет и мотивация переключиться?"],
];

export default function FOM1Slide13Hypothesis() {
  return (
    <FOM1SlideBase
      slide={13}
      eyebrow="Customer Development"
      title="Сначала гипотеза — потом интервью"
      subtitle="Без гипотезы интервью превращается в болтовню. Ты должен знать, что проверяешь — до того, как откроешь рот"
    >
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] p-[12px] md:p-[20px] max-w-[1700px]">
        <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[9px] md:text-[14px] mb-[6px]">Шаблон</p>
        <p className="text-[hsl(var(--slide-text))]">
          Я верю, что <span className="text-[hsl(var(--slide-gold))]">[сегмент]</span> испытывает проблему{" "}
          <span className="text-[hsl(var(--slide-gold))]">[боль]</span> когда{" "}
          <span className="text-[hsl(var(--slide-gold))]">[контекст]</span>, и готов платить за решение{" "}
          <span className="text-[hsl(var(--slide-gold))]">[формат]</span>.
        </p>
      </div>
      <p className="mt-[10px] md:mt-[16px] text-[hsl(var(--slide-text-muted))] max-w-[1700px] italic">
        Пример: «Я верю, что фрилансеры-дизайнеры тратят 5+ часов в неделю на поиск клиентов через холодные письма,
        и готовы платить $30/мес за инструмент автоматизации outreach.»
      </p>
      <p className="mt-[12px] md:mt-[20px] text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[9px] md:text-[14px]">
        Что проверяешь
      </p>
      <div className="mt-[6px] grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[6px] max-w-[1700px]">
        {checks.map(([q, d], i) => (
          <div key={i} className="flex gap-[8px]">
            <span className="text-[hsl(var(--slide-gold))] font-mono">{i + 1}.</span>
            <p>
              <span className="text-[hsl(var(--slide-text))] font-semibold">{q}</span>{" "}
              <span className="text-[hsl(var(--slide-text-muted))]">{d}</span>
            </p>
          </div>
        ))}
      </div>
    </FOM1SlideBase>
  );
}
