import { useIsMobile } from "@/hooks/use-mobile";

const setupSteps = [
  {
    num: "1",
    title: "Открой каталог MCP",
    body: "В Claude → Settings → Integrations. Там список всех готовых серверов, которые можно подключить.",
  },
  {
    num: "2",
    title: "Возьми ключ из сервиса",
    body: "В Stripe / Supabase сгенери ключ, у которого минимальные права. Только то, что нужно для задачи.",
  },
  {
    num: "3",
    title: "Подключи в Claude",
    body: "В каталоге выбираешь сервер, вставляешь ключ. Один клик. Claude видит новые возможности после рестарта.",
  },
  {
    num: "4",
    title: "Проверь что работает",
    body: "Спроси Claude: «какие у тебя сейчас доступны MCP-инструменты?». В списке должен появиться твой сервер.",
  },
];

const top7 = [
  { name: "Supabase", what: "Базы данных, авторизация, серверная логика", when: "Обязательно" },
  { name: "Stripe", what: "Платежи, подписки, ссылки на оплату", when: "Обязательно" },
  { name: "GitHub", what: "Pull requests, issues, релизы", when: "Обязательно" },
  { name: "Sentry", what: "Видеть ошибки прода и фиксить их сразу", when: "Когда вышел в прод" },
  { name: "Linear / Notion", what: "Твой бэклог — Claude закрывает таски", when: "Когда нужна структура" },
  { name: "Mixpanel / PostHog", what: "Аналитика, события, воронки", when: "Когда есть юзеры" },
  { name: "Figma", what: "Дизайн → код компонента", when: "Если работаешь с дизайнером" },
];

export default function L6Slide11McpSetupSteps() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Как подключить MCP
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          4 шага + 7 серверов для соло-фаундера
        </h2>
        <div className="space-y-[3px] mb-[5px]">
          {setupSteps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[7px] py-[3px]">
              <div className="flex items-center gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.title}</p>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">7 серверов по приоритету</p>
        <div className="space-y-[1.5px]">
          {top7.map((m) => (
            <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[1.5px] flex items-center gap-[4px]">
              <span className="text-[7px] font-bold text-[hsl(var(--slide-gold))] min-w-[68px]">{m.name}</span>
              <span className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.2] flex-1">{m.what}</span>
              <span className="text-[5.5px] text-[hsl(var(--slide-gold)/0.7)] italic">{m.when}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Как подключить MCP
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        4 шага + 7 серверов для <span className="text-[hsl(var(--slide-gold))]">соло-фаундера</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Один раз настроил — пользуешься во всех сессиях. Главное правило — давай ключам минимальные права. Никогда «полный доступ». Только то, что нужно для конкретной задачи.
      </p>

      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px] mb-[20px]">
        {setupSteps.map((s, i) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[14px] flex flex-col relative">
            {i < setupSteps.length - 1 && (
              <span className="absolute -right-[10px] top-[22px] text-[hsl(var(--slide-gold)/0.3)] text-[18px] z-10">→</span>
            )}
            <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[28px] h-[28px] flex items-center justify-center rounded-full font-bold mb-[8px]">{s.num}</span>
            <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[6px]">{s.title}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.body}</p>
          </div>
        ))}
      </div>

      <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">7 серверов по приоритету · с чего начать соло-фаундеру</p>
      <div className="grid grid-cols-7 gap-[10px] max-w-[1700px]">
        {top7.map((m) => (
          <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{m.name}</p>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">{m.what}</p>
            <p className="text-[10px] text-[hsl(var(--slide-gold)/0.7)] italic">{m.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
