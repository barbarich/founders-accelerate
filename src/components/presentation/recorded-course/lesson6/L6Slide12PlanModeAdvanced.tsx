import { useIsMobile } from "@/hooks/use-mobile";

const when = [
  "Задача затрагивает больше 3 файлов",
  "Любые изменения в базе данных",
  "Подключение нового сервиса (Stripe, etc.)",
  "Переименование, перенос, рефакторинг",
];

const steps = [
  {
    num: "1",
    title: "Войди в режим плана",
    body: "В Claude Code: нажми Shift+Tab. Claude переключается в режим «думаю и планирую». Код не пишет — пока что.",
  },
  {
    num: "2",
    title: "Получи и прочитай план",
    body: "Claude покажет: какие файлы будет трогать, что добавит, что изменит, какие риски видит. Это как чертёж дома — лучше править на бумаге, чем после стройки.",
  },
  {
    num: "3",
    title: "Правишь до тех пор, пока не устраивает",
    body: "Что-то пропустил? Скажи. Не та архитектура? Поправь. Когда план тебя устраивает — выходишь из режима плана, Claude пишет код по согласованному.",
  },
];

const compare = [
  { title: "Без Plan Mode", body: "Claude сразу пишет код. Что-то не так — переделываешь 2 часа.", bad: true },
  { title: "С Plan Mode", body: "Сначала план — 2 минуты. Правки в плане — 2 минуты. Код по плану — без сюрпризов." },
];

export default function L6Slide12PlanModeAdvanced() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Plan Mode · сначала план, потом код
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          3 шага от идеи к плану
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.4]">
          Исправить план — 2 минуты. Исправить код — 2 часа. Главный навык, который экономит часы каждую неделю.
        </p>
        <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Когда обязательно</p>
        <div className="grid grid-cols-2 gap-[2px] mb-[5px]">
          {when.map((w) => (
            <div key={w} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">→ {w}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[3px] mb-[5px]">
          {steps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[7px] py-[3px]">
              <div className="flex items-center gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.title}</p>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[3px]">
          {compare.map((c) => (
            <div key={c.title} className={`rounded-[4px] px-[6px] py-[3px] border ${c.bad ? "bg-[hsl(0_60%_50%/0.06)] border-[hsl(0_60%_60%/0.3)]" : "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.3)]"}`}>
              <p className={`text-[7px] font-bold mb-[1px] ${c.bad ? "text-[hsl(0_60%_75%)]" : "text-[hsl(var(--slide-gold))]"}`}>{c.title}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Plan Mode · сначала план, потом код
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        3 шага <span className="text-[hsl(var(--slide-gold))]">от идеи к плану</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Исправить план — 2 минуты. Исправить код — 2 часа. Главный навык, который экономит часы каждую неделю.
      </p>

      <div className="grid grid-cols-[260px_1fr] gap-[20px] max-w-[1700px] mb-[18px]">
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[18px] py-[14px]">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Когда обязательно</p>
          <ul className="space-y-[6px]">
            {when.map((w) => (
              <li key={w} className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">→ {w}</li>
            ))}
          </ul>
          <div className="border-t border-[hsl(var(--slide-gold)/0.2)] mt-[12px] pt-[10px]">
            <p className="text-[14px] text-[hsl(var(--slide-gold))] font-mono">Shift+Tab</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[2px]">в Claude Code · войти в режим плана</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[12px]">
          {steps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[14px]">
              <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[28px] h-[28px] flex items-center justify-center rounded-full font-bold mb-[8px]">{s.num}</span>
              <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{s.title}</p>
              <p className="text-[13.5px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {compare.map((c) => (
          <div key={c.title} className={`rounded-[10px] px-[22px] py-[14px] border ${c.bad ? "bg-[hsl(0_60%_50%/0.06)] border-[hsl(0_60%_60%/0.3)]" : "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"}`}>
            <p className={`text-[17px] font-bold mb-[6px] ${c.bad ? "text-[hsl(0_60%_75%)]" : "text-[hsl(var(--slide-gold))]"}`}>{c.title}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
