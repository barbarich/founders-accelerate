import { useIsMobile } from "@/hooks/use-mobile";
import FOM6Footer from "./FOM6Footer";

const phases = [
  {
    range: "Дни 1–30",
    goal: "Первые деньги",
    color: true,
    items: [
      "Собери список 50 компаний + 150 контактов (Apollo / LinkedIn)",
      "10 персональных касаний «по поводу» в неделю — не шаблон",
      "3 discovery-звонка с подготовкой через промпт",
      "Подпиши первый пилот / MAP с реальным клиентом",
    ],
    metric: "Цель: 1–3 платящих клиента или подписанный план",
  },
  {
    range: "Дни 31–60",
    goal: "Повторяемость",
    color: false,
    items: [
      "Зафиксируй, что сработало: скрипт, возражения, цена",
      "Подключи B2B-стек (Apollo + Instantly + LinkedIn Helper)",
      "Добавь второй канал к тому, что уже даёт результат",
      "Первый партнёрский разговор: «что с этого тебе»",
    ],
    metric: "Цель: предсказуемые 3–5 разговоров в неделю",
  },
  {
    range: "Дни 61–90",
    goal: "Масштаб и расширение",
    color: false,
    items: [
      "Expansion loop: 1 довольный клиент → 4 (референсы, допродажи)",
      "Upsell существующим — им продать в 5× легче, чем новым",
      "Первый рабочий партнёр приводит сделки",
      "Реши, куда дальше: новый сегмент или следующая фича",
    ],
    metric: "Цель: воронка кормит себя сама",
  },
];

export default function FOM6Slide90DayPlan() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
        <div className="flex flex-col justify-center px-[18px] h-full pb-[24px]">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
            После программы · план на 90 дней
          </p>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[8px]">
            Программа кончилась — <span className="text-[hsl(var(--slide-gold))]">работа только началась</span>
          </h2>
          <div className="space-y-[6px]">
            {phases.map((p) => (
              <div key={p.range} className={`rounded-[7px] px-[10px] py-[7px] border ${p.color ? "bg-[hsl(var(--slide-gold)/0.1)] border-[hsl(var(--slide-gold))]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}>
                <div className="flex items-baseline gap-[6px] mb-[3px]">
                  <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">{p.range}</span>
                  <span className="text-[10px] font-bold text-[hsl(var(--slide-text))]">· {p.goal}</span>
                </div>
                <ul className="space-y-[2px] mb-[3px]">
                  {p.items.map((it, i) => (
                    <li key={i} className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">
                      <span className="text-[hsl(var(--slide-gold))]">→</span> {it}
                    </li>
                  ))}
                </ul>
                <p className="text-[7.5px] text-[hsl(var(--slide-gold))] italic">{p.metric}</p>
              </div>
            ))}
          </div>
        </div>
        <FOM6Footer slide={25} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          После программы · план на 90 дней
        </p>
        <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.08] mb-[24px] tracking-[-0.01em] max-w-[1700px]">
          Программа кончилась — <span className="text-[hsl(var(--slide-gold))]">работа только началась</span>
        </h2>
        <div className="grid grid-cols-3 gap-[20px] max-w-[1700px]">
          {phases.map((p) => (
            <div key={p.range} className={`rounded-[14px] px-[24px] py-[20px] border ${p.color ? "bg-[hsl(var(--slide-gold)/0.1)] border-[hsl(var(--slide-gold))]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}>
              <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.14em] mb-[2px]">{p.range}</p>
              <p className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">{p.goal}</p>
              <ul className="space-y-[8px] mb-[14px]">
                {p.items.map((it, i) => (
                  <li key={i} className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">
                    <span className="text-[hsl(var(--slide-gold))]">→</span> {it}
                  </li>
                ))}
              </ul>
              <p className="text-[16px] text-[hsl(var(--slide-gold))] italic leading-[1.35]">{p.metric}</p>
            </div>
          ))}
        </div>
      </div>
      <FOM6Footer slide={25} />
    </div>
  );
}
