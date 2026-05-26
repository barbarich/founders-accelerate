import { useIsMobile } from "@/hooks/use-mobile";

const before = [
  "Зашёл в Stripe → создал продукт → скопировал ID",
  "Зашёл в Supabase → создал таблицу → скопировал имя",
  "Вернулся к Claude → вставил ID и имена в промпт",
  "Объяснил что и куда, ждёшь, проверяешь",
  "Что-то забыл — итерация. ~2 часа на задачу из 4 систем",
];

const after = [
  "Один промпт Claude: «создай продукт в Stripe + таблицу в Supabase»",
  "Claude сам идёт в Stripe через MCP, создаёт продукт",
  "Claude сам идёт в Supabase через MCP, создаёт таблицу",
  "Возвращает тебе готовые ID и ссылки",
  "Без UI, без копирования, без забытых полей. ~10 минут.",
];

export default function L6Slide08McpUnderHood() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Что такое MCP
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Мост между Claude и твоими сервисами
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          MCP — это способ подключить Claude к Stripe, Supabase, GitHub напрямую. Раньше ты копировал данные между сервисами и Claude. Теперь — Claude работает в них сам.
        </p>
        <div className="grid grid-cols-2 gap-[4px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[7px] py-[4px]">
            <p className="text-[8px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.12em] font-bold mb-[2px]">Раньше · 2 часа</p>
            {before.map((b, i) => (
              <p key={i} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{i + 1}. {b}</p>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[5px] px-[7px] py-[4px]">
            <p className="text-[8px] uppercase text-[hsl(var(--slide-gold))] tracking-[0.12em] font-bold mb-[2px]">С MCP · 10 минут</p>
            {after.map((a, i) => (
              <p key={i} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{i + 1}. {a}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Что такое MCP
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        <span className="text-[hsl(var(--slide-gold))]">Мост</span> между Claude и твоими сервисами
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1500px] leading-[1.45]">
        MCP — способ подключить Claude к Stripe, Supabase, GitHub и десяткам других сервисов напрямую. Раньше ты копировал данные между сервисами и Claude вручную. Теперь Claude работает в них сам, как будто это часть его памяти.
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">Без MCP — ~2 часа на задачу из 4 систем</p>
          <ol className="space-y-[8px]">
            {before.map((b, i) => (
              <li key={i} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
                <span className="text-[hsl(var(--slide-text-muted)/0.6)] font-mono mr-2">{i + 1}.</span>{b}
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">С MCP — ~10 минут</p>
          <ol className="space-y-[8px]">
            {after.map((a, i) => (
              <li key={i} className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.5]">
                <span className="text-[hsl(var(--slide-gold)/0.7)] font-mono mr-2">{i + 1}.</span>{a}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
