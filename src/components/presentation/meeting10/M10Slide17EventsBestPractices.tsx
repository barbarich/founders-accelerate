import { useIsMobile } from "@/hooks/use-mobile";

const practices = [
  {
    n: "01",
    t: "CAPI обязателен, не опционален",
    tag: "ЕСТЬ ДУБЛЁР · ЕСТЬ ДАННЫЕ",
    body: "iOS 14.5+ ATT + Brave / Safari / ad-blockers режут browser pixel на 30–50%. Conversions API шлёт события с сервера — их не зарежет ничего. Без CAPI 2026 = слепая кампания.",
  },
  {
    n: "02",
    t: "Deduplication через event_id",
    tag: "ОДНО СОБЫТИЕ · НЕ ДВА",
    body: "И pixel в браузере, и CAPI с сервера отправляют ОДНО событие с одинаковым event_id (например, order_xxx или pi_xxx из Stripe). Meta схлопывает дубль автоматически. Без event_id — двойной счёт, кривая оптимизация.",
  },
  {
    n: "03",
    t: "Value + Currency · всегда",
    tag: "БЕЗ НИХ НЕТ ROAS",
    body: "fbq('track', 'Purchase', {value: 19, currency: 'USD'}). Без value Meta оптимизирует на количество, а не на доход. Для Lead — ставь оценочный value (например, $50 за качественный лид).",
  },
  {
    n: "04",
    t: "Aggregated Event Measurement (AEM)",
    tag: "8 ПРИОРИТЕТОВ НА ДОМЕН",
    body: "iOS режет до 8 событий на домен. В Events Manager → Aggregated Event Measurement → расставь приоритеты. Самое ценное событие (Purchase) — позиция 1. ViewContent — 8 или вне списка.",
  },
  {
    n: "05",
    t: "Test Events перед запуском",
    tag: "5 МИНУТ · СПАСАЕТ НЕДЕЛИ",
    body: "Events Manager → Test Events → вводишь URL → проходишь сценарий → видишь события в реал-тайме. Если Purchase не пришёл — чинишь до Publish, а не после слива $200.",
  },
  {
    n: "06",
    t: "GA4 параллельно, не вместо",
    tag: "ДВА ИСТОЧНИКА ПРАВДЫ",
    body: "Meta-метрики живут в Ads Manager. Поведение на сайте — в GA4. UTM в URL рекламы (utm_source=meta · utm_campaign=...) сшивает оба источника. Без GA4 ты не видишь что человек делал ПОСЛЕ клика.",
  },
];

const stack = [
  { tool: "Stripe", note: "→ Webhook → CAPI fetch. event_id = pi_xxx" },
  { tool: "Supabase Edge Function", note: "Server-side trigger → fetch graph.facebook.com" },
  { tool: "Stape · CAPI Gateway", note: "Managed proxy, $20/мес, без своего бэкенда" },
  { tool: "Shopify · Meta channel", note: "Native интеграция с CAPI из коробки" },
];

export default function M10Slide17EventsBestPractices() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Топ-практики событий · 18 мая 2026
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Без этих шести вещей <span className="text-[hsl(var(--slide-gold))]">пиксель — это 50% правды</span>
        </h2>
        <div className="grid grid-cols-2 gap-[4px] mb-[5px]">
          {practices.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[3px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{p.n}.</span> {p.t}
              </p>
              <p className="text-[6px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold)/0.7)] mb-[2px]">{p.tag}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">CAPI стек · где готовое</p>
        <div className="grid grid-cols-2 gap-[3px]">
          {stack.map((s) => (
            <div key={s.tool} className="bg-[hsl(var(--slide-gold)/0.06)] border-l border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[2px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">{s.tool}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.3]">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Топ-практики событий · состояние на 18 мая 2026
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Без этих шести вещей <span className="text-[hsl(var(--slide-gold))]">пиксель отдаёт 50% правды</span>
      </h2>
      <div className="grid grid-cols-3 gap-[14px] mb-[16px] max-w-[1700px]">
        {practices.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[20px] py-[12px]">
            <div className="flex items-baseline gap-[10px] mb-[2px]">
              <span className="font-display text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <span className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.t}</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold)/0.75)] mb-[5px] ml-[32px]">{p.tag}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[32px]">{p.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">CAPI стек одиночки · готовые рельсы без своего бэкенда</p>
      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px]">
        {stack.map((s) => (
          <div key={s.tool} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[18px] py-[10px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{s.tool}</p>
            <p className="text-[13.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
