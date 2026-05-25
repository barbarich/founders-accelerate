import { useIsMobile } from "@/hooks/use-mobile";

const columns = [
  { name: "Контакт", what: "Имя + LinkedIn + источник", example: "Анна К. · linkedin.com/in/... · Web Summit 2026" },
  { name: "Источник", what: "Откуда пришёл — для аналитики каналов", example: "конференция / referral / inbound / cold" },
  { name: "Status", what: "Контакт · Демо · Trial · Closed-won · Closed-lost", example: "Демо назначено 28 мая" },
  { name: "Next touch", what: "Дата следующего касания + действие", example: "1 июня · follow-up после demo" },
];

const rules = [
  "Заполняй В МОМЕНТ — не «вечером». Иначе забудешь контекст и потеряешь warmth.",
  "Раз в неделю · 15 минут · review колонки Next touch. Что просрочено — делаешь сегодня.",
  "Когда контактов больше 50 — мигрируй на HubSpot Free / Folk / Attio. Notion перестаёт работать.",
  "Никогда не используй Excel/Google Sheets. Нет напоминаний — нет CRM.",
];

export default function M11Slide19CRMMinimum() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          CRM-минимум за 5 минут
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Notion · <span className="text-[hsl(var(--slide-gold))]">4 колонки · бесплатно</span>
        </h2>
        <div className="space-y-[3px] mb-[5px]">
          {columns.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))]">{c.name}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4]">{c.what}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] italic">пример: {c.example}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[3px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[1px]">Правила работы</p>
          {rules.map((r, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">· {r}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        CRM-минимум за 5 минут
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Notion · <span className="text-[hsl(var(--slide-gold))]">4 колонки · бесплатно</span>
      </h2>
      <div className="grid grid-cols-4 gap-[14px] mb-[20px] max-w-[1700px]">
        {columns.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[14px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{c.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[6px]">{c.what}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">пример: {c.example}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[14px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[8px]">Правила работы с CRM (минималистично, но без них всё разваливается)</p>
        {rules.map((r, i) => (
          <p key={i} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[3px]">· {r}</p>
        ))}
      </div>
    </div>
  );
}
