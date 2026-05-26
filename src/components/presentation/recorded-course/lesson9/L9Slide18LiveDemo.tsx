import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", a: "Открой Claude → Settings → Connectors → подключи Mixpanel" },
  { n: "2", a: "Авторизуйся в Mixpanel один раз. Claude получает доступ только на чтение — ничего не сможет сломать" },
  { n: "3", a: "Напиши Claude: «Покажи график удержания по новым юзерам за 30 дней»" },
  { n: "4", a: "Claude сам делает запрос в Mixpanel, получает реальные цифры, рисует график в чате" },
  { n: "5", a: "Спроси: «Где именно уходят юзеры? Какое последнее действие перед уходом?» — Claude находит паттерн" },
  { n: "6", a: "Спроси: «Дай 3 гипотезы почему D7 = 12%, и предложи механики возврата под мою аудиторию»" },
  { n: "7", a: "Готово. На руках — инсайты + план действий. Без аналитика. Без SQL. На реальных цифрах твоего продукта." },
];

const benefits = [
  "Без дашбордов и кодов",
  "Вопросы простыми словами",
  "Ответы по реальным данным, не догадкам",
  "Только чтение — Claude ничего не сломает",
];

export default function L9Slide18LiveDemo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кейс · Claude + Mixpanel
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Аналитика без аналитика
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          Claude подключается к Mixpanel и отвечает на твои вопросы по реальным данным продукта. Само подключение разобрали в Уроке 6.
        </p>
        <div className="space-y-[4px] mb-[8px]">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold shrink-0">{s.n}</span>
              <span className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.a}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[4px]">
          {benefits.map((b) => (
            <div key={b} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[6px] py-[4px]">
              <span className="text-[8.5px] text-[hsl(var(--slide-text))]">✓ {b}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Кейс · Claude + Mixpanel
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        Аналитика ретеншена. <span className="text-[hsl(var(--slide-gold))]">Без аналитика.</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[24px] leading-[1.4]">
        Claude подключается к Mixpanel напрямую — спрашиваешь простыми словами, получаешь инсайты по реальным цифрам. Само подключение разбирали в Уроке 6.
      </p>
      <div className="grid grid-cols-[1fr_360px] gap-[28px] max-w-[1500px]">
        <div className="space-y-[8px]">
          {steps.map((s) => (
            <div key={s.n} className="flex items-baseline gap-[18px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[10px]">
              <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold shrink-0">{s.n}</span>
              <span className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.a}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] p-[20px] self-start">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Что меняется</p>
          <div className="space-y-[10px]">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-[8px]">
                <span className="text-[hsl(var(--slide-gold))] text-[16px] leading-[1.2]">✓</span>
                <span className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4]">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-[16px] pt-[14px] border-t border-[hsl(var(--slide-border)/0.3)]">
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Подключение Claude к сервисам (MCP) разобрано в Уроке 6 — здесь применяем готовый коннектор.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
