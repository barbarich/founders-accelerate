import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "Claude Code",
    role: "Инженер у руля",
    detail: "Пишет код, читает файлы, запускает тесты, коммитит. Работает в терминале, видит весь проект. Рекомендую минимум $100/мес — хватает лимитов для ежедневного кодинга.",
    cost: "от $100/мес",
  },
  {
    name: "Supabase",
    role: "Backend за 10 минут",
    detail: "Postgres + Auth + Storage. Один SDK на всё. RLS-политики прямо в SQL. MCP для Claude Code.",
    cost: "Free → $25/мес",
  },
  {
    name: "Vercel",
    role: "Деплой за git push",
    detail: "Next.js, preview-URL на каждый PR, домен в 2 клика. Переменные окружения в дашборде.",
    cost: "Free → $20/мес",
  },
];

export default function M5Slide03Recap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Стек
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Три инструмента.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.45]">
          Не Bolt, не v0, не Cursor, не Lovable. Три этих закрывают всё до 1000 юзеров.
        </p>
        <div className="space-y-[7px]">
          {tools.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[7px] px-[11px] py-[7px]">
              <div className="flex items-center justify-between mb-[2px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-text))]">{t.name}</span>
                <span className="text-[9px] text-[hsl(var(--slide-gold))] font-mono">{t.cost}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-gold))] mb-[3px] font-medium">{t.role}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-[10px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
          <p className="text-[10px] text-[hsl(var(--slide-gold))] font-bold">На старте — $100/мес. Рабочий прод — $145/мес.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Стек
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Три инструмента.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[40px] max-w-[1200px] leading-[1.4]">
        Не Bolt, не v0, не Cursor, не Lovable. Три этих закрывают всё до 1000 юзеров.
      </p>

      <div className="grid grid-cols-3 gap-[20px] max-w-[1400px] mb-[28px]">
        {tools.map((t, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[26px] py-[22px]">
            <div className="flex items-center justify-between mb-[10px]">
              <h3 className="text-[26px] font-bold text-[hsl(var(--slide-text))]">{t.name}</h3>
              <span className="text-[14px] text-[hsl(var(--slide-gold))] font-mono bg-[hsl(var(--slide-gold)/0.1)] px-[10px] py-[3px] rounded-[6px]">{t.cost}</span>
            </div>
            <p className="text-[20px] text-[hsl(var(--slide-gold))] mb-[10px] font-medium">{t.role}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{t.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[18px] max-w-[1400px]">
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-bold">На старте — $100/мес. Рабочий прод — $145/мес.</p>
        <p className="text-[17px] text-[hsl(var(--slide-text-muted))] mt-[4px]">Дешевле одного часа фрилансера на Upwork.</p>
      </div>
    </div>
  );
}
