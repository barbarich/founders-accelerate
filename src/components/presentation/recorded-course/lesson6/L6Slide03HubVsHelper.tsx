import { useIsMobile } from "@/hooks/use-mobile";

const layers = [
  {
    tool: "Lovable",
    role: "Visual layer",
    use: "Лендинги, прототипы, MVP-фронт за 30 минут. Чисто витрина — посмотреть и потрогать.",
    limit: "Бэкенд, сложная логика, миграции, интеграции — стоит. Поэтому только до точки «нужно подключить базу».",
  },
  {
    tool: "Claude Code",
    role: "Hub (мозг продукта)",
    use: "Всё остальное: backend, миграции, MCP-серверы, интеграции (Stripe / Supabase / Sentry), CI/CD, рефакторинг, debugging. 95% времени — здесь.",
    limit: "Дольше первого экрана — но проект становится твоим, а не Lovable-проектом.",
    primary: true,
  },
];

const failCase = [
  "Чел построил весь продукт в Lovable за 3 недели — выглядит круто",
  "Дошёл до момента «нужна подписка Stripe + multi-tenant RLS»",
  "Lovable начал ломать прошлое при каждой новой задаче",
  "10 000 строк сгенерированного кода, в котором никто не разбирается",
  "Перенос в Claude Code = почти переписать с нуля",
];

export default function L6Slide03HubVsHelper() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Архитектура работы
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Claude как hub, Lovable как витрина
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.45]">
          В мини-курсе оба инструмента были на равных. На практике у меня в Mikey AI 95% времени — Claude Code. Lovable только для прототипа лендинга.
        </p>
        <div className="space-y-[5px] mb-[8px]">
          {layers.map((l) => (
            <div
              key={l.tool}
              className={`rounded-[6px] px-[10px] py-[6px] border ${
                l.primary
                  ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
              }`}
            >
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">
                {l.tool} <span className="text-[hsl(var(--slide-gold))] text-[8px] font-normal">· {l.role}</span>
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[2px]">{l.use}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted)/0.7)] leading-[1.35] mt-[2px] italic">{l.limit}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(0_60%_50%/0.08)] border-l-2 border-[hsl(0_60%_60%)] rounded-[5px] px-[9px] py-[5px]">
          <p className="text-[8px] font-bold text-[hsl(0_60%_75%)] uppercase tracking-[0.1em] mb-[2px]">Контр-кейс</p>
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">
            Чел построил весь продукт в Lovable. На «подключи Stripe + RLS» инструмент сломался. 10К строк AI-кода, в котором никто не разбирается. Перенос в Claude = почти переписать с нуля.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Архитектура работы
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        Claude как hub, Lovable как <span className="text-[hsl(var(--slide-gold))]">витрина</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1300px] leading-[1.45]">
        В мини-курсе оба инструмента стояли на равных. На практике у меня в Mikey AI 95% времени — Claude Code. Lovable открываю когда нужен лендинг или быстрый визуальный прототип.
      </p>

      <div className="grid grid-cols-[1fr_1fr] gap-[20px] max-w-[1600px] mb-[20px]">
        {layers.map((l) => (
          <div
            key={l.tool}
            className={`rounded-[14px] px-[26px] py-[22px] border ${
              l.primary
                ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"
                : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
            }`}
          >
            <p className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">{l.role}</p>
            <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">{l.tool}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[10px]">{l.use}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5] italic">{l.limit}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(0_60%_50%/0.07)] border-l-[4px] border-[hsl(0_60%_60%)] rounded-[12px] px-[26px] py-[16px] max-w-[1600px]">
        <p className="text-[14px] font-bold text-[hsl(0_60%_75%)] uppercase tracking-[0.18em] mb-[8px]">Реальный контр-кейс — почему Claude — hub</p>
        <ul className="space-y-[5px]">
          {failCase.map((c) => (
            <li key={c} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">→ {c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
