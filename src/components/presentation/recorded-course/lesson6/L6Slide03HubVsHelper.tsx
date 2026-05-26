import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    tool: "Lovable",
    role: "Для красивой картинки",
    use: "Лендинги, прототипы, первый экран MVP. Быстро и красиво — посмотреть и потрогать.",
    limit: "Когда продукт усложняется (платежи, база, логика) — Lovable начинает ломать прошлое при каждой задаче.",
  },
  {
    tool: "Claude Code",
    role: "Для самого продукта",
    use: "Backend, база данных, платежи, интеграции, исправление багов. 95% времени работы — здесь.",
    limit: "Дольше первого шага — но проект становится твоим, а не «проектом в Lovable».",
    primary: true,
  },
];

const story = [
  "Чел построил весь продукт в Lovable за 3 недели — выглядит классно",
  "Дошёл до момента «добавить оплату подпиской через Stripe»",
  "Lovable начал ломать то, что работало вчера",
  "Получилось 10 000 строк кода, в которых никто не разбирается",
  "Перенос в Claude Code = почти переписать с нуля",
];

export default function L6Slide03HubVsHelper() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Когда что использовать
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Lovable — для картинки. Claude — для продукта.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.45]">
          В мини-курсе оба инструмента стояли на равных. На практике 95% времени я в Claude Code. Lovable открываю когда нужно быстро собрать лендинг.
        </p>
        <div className="space-y-[5px] mb-[8px]">
          {tools.map((t) => (
            <div
              key={t.tool}
              className={`rounded-[6px] px-[10px] py-[6px] border ${
                t.primary
                  ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
              }`}
            >
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">
                {t.tool} <span className="text-[hsl(var(--slide-gold))] text-[8px] font-normal">· {t.role}</span>
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[2px]">{t.use}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted)/0.7)] leading-[1.35] mt-[2px] italic">{t.limit}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(0_60%_50%/0.08)] border-l-2 border-[hsl(0_60%_60%)] rounded-[5px] px-[9px] py-[5px]">
          <p className="text-[8px] font-bold text-[hsl(0_60%_75%)] uppercase tracking-[0.1em] mb-[2px]">История одного фаундера</p>
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">
            Построил весь продукт в Lovable. На «добавь Stripe-подписку» инструмент сломался. 10 000 строк AI-кода, в которых никто не разбирается. Перенос в Claude = переписать с нуля.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Когда что использовать
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        Lovable — для картинки. <span className="text-[hsl(var(--slide-gold))]">Claude — для продукта.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1400px] leading-[1.45]">
        В мини-курсе оба инструмента стояли на равных. На практике 95% времени я в Claude Code. Lovable открываю когда нужен лендинг или быстрый визуальный набросок.
      </p>

      <div className="grid grid-cols-[1fr_1fr] gap-[20px] max-w-[1600px] mb-[20px]">
        {tools.map((t) => (
          <div
            key={t.tool}
            className={`rounded-[14px] px-[26px] py-[22px] border ${
              t.primary
                ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"
                : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
            }`}
          >
            <p className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">{t.role}</p>
            <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">{t.tool}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[10px]">{t.use}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5] italic">{t.limit}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(0_60%_50%/0.07)] border-l-[4px] border-[hsl(0_60%_60%)] rounded-[12px] px-[26px] py-[16px] max-w-[1600px]">
        <p className="text-[14px] font-bold text-[hsl(0_60%_75%)] uppercase tracking-[0.18em] mb-[8px]">История одного фаундера — почему Claude главный</p>
        <ul className="space-y-[5px]">
          {story.map((c) => (
            <li key={c} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">→ {c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
