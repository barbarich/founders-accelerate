import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { cat: "Аналитика ретеншена", name: "Mixpanel", price: "Бесплатно до 1M событий", what: "Retention-кривая, когорты, funnels — за 10 минут. Всё, что раньше требовало аналитика." },
  { cat: "Письма + push-уведомления", name: "SendPulse", price: "От $0", what: "Триггерные письма и web/mobile push из одной панели. «Не вернулся 3 дня» → письмо или пуш. Без кода, на русском интерфейсе." },
  { cat: "AI-чат, который возвращает", name: "Intercom Fin", price: "От $39", what: "Бот отвечает на возражения, доводит до действия. Возврат через диалог, а не через рассылку." },
  { cat: "Email-капельница без CRM", name: "Resend + Lovable AI", price: "От $0", what: "Edge-функция шлёт письмо при событии. AI пишет тело под пользователя на лету." },
];

export default function M8Slide16NoCodeStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Стек ретеншена · 0 разработчиков
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Всё, что нужно. Стартовый бюджет — $0.
        </h2>
        <div className="space-y-[5px] overflow-y-auto max-h-[75%]">
          {tools.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[2px]">{t.cat}</p>
              <div className="flex items-baseline justify-between mb-[2px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{t.name}</span>
                <span className="text-[8.5px] text-[hsl(var(--slide-text-muted))]">{t.price}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{t.what}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Стек ретеншена · 0 разработчиков · стартовый бюджет $0
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        Всё, что нужно — пять сервисов.
      </h2>
      <div className="space-y-[12px] max-w-[1500px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[18px] grid grid-cols-[260px_220px_1fr] gap-[20px] items-center">
            <div>
              <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[4px]">{t.cat}</p>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))]">{t.name}</p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] font-mono">{t.price}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.4]">{t.what}</p>
          </div>
        ))}
      </div>
    </div>
  );
}