import { useIsMobile } from "@/hooks/use-mobile";

const tiers = [
  {
    label: "Планирование и промпты",
    free: "Claude.ai — free chat",
    note: "Без лимита на планирование. Код копируешь в инструмент ниже.",
  },
  {
    label: "UI и экраны продукта",
    free: "Lovable free (5 проектов/день), v0, Bolt",
    note: "Полный UI из промпта. Авторизация встроенная.",
  },
  {
    label: "Хостинг",
    free: "Vercel free / Lovable встроенный",
    note: "Свой домен — $12/год в Cloudflare. Мелочь.",
  },
  {
    label: "База данных",
    free: "Supabase free tier",
    note: "500 MB + 50k MAU. Хватит на первые 6 месяцев.",
  },
  {
    label: "Второе мнение",
    free: "ChatGPT free, Gemini",
    note: "Когда Claude не видит того, что ты ему не сказал.",
  },
];

export default function M6Slide06Toolkit() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Стек без подписки
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Всё нужное<br />доступно бесплатно.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Пять инструментов закрывают весь путь: от промпта до живого юзера в твоём продукте.
        </p>
        <div className="space-y-[4px]">
          {tiers.map((t) => (
            <div key={t.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[8px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] mb-[1px]">{t.label}</p>
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] leading-[1.25] mb-[1px]">{t.free}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Стек без подписки
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px]">
        Всё нужное доступно бесплатно.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1400px]">
        Пять инструментов закрывают весь путь: от промпта до живого юзера в твоём продукте.
      </p>

      <div className="max-w-[1500px] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] overflow-hidden">
        {tiers.map((t, i) => (
          <div
            key={t.label}
            className={`grid grid-cols-[260px_1fr_1.2fr] gap-[24px] px-[24px] py-[14px] ${i !== tiers.length - 1 ? "border-b border-[hsl(var(--slide-border)/0.15)]" : ""} ${i === 0 ? "bg-[hsl(var(--slide-bg-alt))]" : ""}`}
          >
            <p className="text-[15px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.label}</p>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3]">{t.free}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
