import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "SendPulse",
    role: "Email + web-push",
    free: "15 000 писем / мес · 500 подписчиков",
    pay: "при базе > 500 контактов",
    cost: "от $7/мес за 1k",
  },
  {
    name: "Resend",
    role: "Транзакционные письма из кода",
    free: "3 000 писем / мес · 1 домен",
    pay: "когда signup > 100/день",
    cost: "$20/мес за 50k",
  },
  {
    name: "Mixpanel",
    role: "События + retention-кривые",
    free: "20M событий / мес",
    pay: "когда нужен Cohort Sync в CRM",
    cost: "от $28/мес (Growth)",
  },
  {
    name: "Claude + MCP",
    role: "Аналитик поверх Mixpanel",
    free: "Pro $20/мес — окупается с 1-го инсайта",
    pay: "сразу — это не расход, это аналитик",
    cost: "$20/мес вместо $4k за data-аналитика",
  },
  {
    name: "Intercom Fin",
    role: "AI-чат + реактивация в продукте",
    free: "14 дней trial",
    pay: "когда DAU > 200",
    cost: "$0.99 за разрешённый разговор",
  },
  {
    name: "Lovable AI",
    role: "Промпты сегментации в edge-функциях",
    free: "Gemini Flash ~$0.0002 / ответ",
    pay: "по факту использования",
    cost: "$5 = 25 000 персонализаций",
  },
];

export default function M8Slide20RetentionStackFree() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Retention-стек · $0 на старте
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Запусти всё за вечер. Заплати, только когда вырастешь.
        </h2>
        <div className="space-y-[5px] overflow-y-auto">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[9px] py-[6px]">
              <div className="flex items-baseline justify-between mb-[2px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{tool.name}</span>
                <span className="text-[8px] text-[hsl(var(--slide-text-muted)/0.7)]">{tool.role}</span>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-gold))] leading-[1.4]">🟢 {tool.free}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">платишь: {tool.pay} → {tool.cost}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          До первых 500 платящих весь стек = $20/мес (только Claude).
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[60px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Retention-стек · $0 на старте
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em] max-w-[1500px]">
        Запусти весь retention-движок за вечер. Заплати, только когда вырастешь.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[28px] max-w-[1300px]">
        Шесть инструментов, бесплатного тарифа которых хватит до первых 500 платящих пользователей. Дальше — формула «когда пора платить» и за что именно.
      </p>
      <div className="grid grid-cols-3 gap-[14px] max-w-[1700px]">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[22px] py-[18px] flex flex-col"
          >
            <div className="flex items-baseline justify-between mb-[8px]">
              <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{tool.name}</span>
              <span className="text-[12px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted)/0.6)]">{tool.role}</span>
            </div>
            <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[12px] py-[8px] mb-[8px]">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[2px]">Free</p>
              <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.35]">{tool.free}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-[8px] gap-y-[3px] text-[13px] leading-[1.4]">
              <span className="text-[hsl(var(--slide-text-muted)/0.6)]">Платишь:</span>
              <span className="text-[hsl(var(--slide-text))]">{tool.pay}</span>
              <span className="text-[hsl(var(--slide-text-muted)/0.6)]">Цена:</span>
              <span className="text-[hsl(var(--slide-text))]">{tool.cost}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[24px] max-w-[1500px]">
        💡 До первых 500 платящих весь retention-стек = $20/мес. Один Claude. Остальное — на free-tier.
      </p>
    </div>
  );
}