import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "Sentry",
    what: "Записывает все ошибки, которые случаются у юзеров в проде",
    via: "Подключи Sentry MCP — Claude сам читает ошибки и фиксит их",
    prompt: "«Прочти последние 10 ошибок из Sentry. Сгруппируй по причине. Начни фиксить с самой частой.»",
  },
  {
    name: "GitHub",
    what: "Pull requests, задачи, история изменений",
    via: "GitHub MCP даёт Claude возможность открывать PR-ы и читать issues",
    prompt: "«Открой 5 issues с меткой bug. Для каждого найди вероятный файл и предложи где смотреть.»",
  },
  {
    name: "Git (встроен)",
    what: "Кто и когда что менял в коде",
    via: "Уже в Claude Code. Ничего подключать не надо.",
    prompt: "«Посмотри историю файла X. Кто менял эту логику в последний месяц? Когда появился баг?»",
  },
];

export default function L6Slide17ObservabilityStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Когда продукт в проде
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Claude видит твой прод. И чинит сам.
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.4]">
          Раньше: юзер пишет «у меня белый экран», ты копируешь ошибку Claude, он фиксит. Теперь: Claude сам читает ошибку в Sentry и открывает PR с фиксом.
        </p>
        <div className="space-y-[3px]">
          {tools.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{t.name}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{t.what}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted)/0.85)] italic leading-[1.35] mt-[1px]">{t.via}</p>
              <p className="text-[6px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] mt-[2px]">{t.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Когда продукт в проде
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Claude <span className="text-[hsl(var(--slide-gold))]">видит твой прод</span>. И чинит сам.
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Раньше: юзер пишет «у меня белый экран». Ты копируешь стек ошибки в Claude, он фиксит. Теперь: Claude сам читает ошибку в Sentry, находит виновный файл в коде, открывает PR с фиксом. Ты только аппрувишь.
      </p>

      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[16px] flex flex-col">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{t.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[10px]">{t.what}</p>
            <p className="text-[12.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5] mb-[12px]">{t.via}</p>
            <p className="text-[11.5px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.55] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px] mt-auto">{t.prompt}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[18px]">
        <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">Замкнутый цикл:</span> Sentry показывает ошибку → Claude находит виновный коммит → открывает PR → ты аппрувишь. Время фикса бага в проде: 15-30 минут вместо часов.
        </p>
      </div>
    </div>
  );
}
