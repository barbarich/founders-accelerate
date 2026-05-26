import { useIsMobile } from "@/hooks/use-mobile";

const events = [
  {
    name: "Purchase",
    when: "На thank-you page · после оплаты",
    body: "Главное событие для e-commerce / SaaS. Параметры: value · currency · content_ids. Без value Meta не может оптимизировать на ROAS.",
    who: "Maker A (если есть платный план)",
  },
  {
    name: "Lead",
    when: "После отправки формы / вейтлист submit",
    body: "Главное событие для lead-gen. Используется когда продажа далеко (B2B, дорогая подписка, демо-сейлз).",
    who: "Maker C · Maker B · Maker E",
  },
  {
    name: "CompleteRegistration",
    when: "После создания аккаунта / signup",
    body: "Для freemium / триал-флоу. Отличается от Lead тем, что регистрация = бóльшая глубина намерения, чем email-сбор.",
    who: "Maker A · Maker B",
  },
  {
    name: "Contact",
    when: "Клик на «Написать в WhatsApp / Telegram»",
    body: "Когда основной CTA = диалог в мессенджере. Вешается на onClick кнопки. Custom event если нужны детали (район/тип/бюджет).",
    who: "WhatsApp-бот аренды",
  },
  {
    name: "ViewContent",
    when: "Открытие ключевой страницы (продукт / прайс)",
    body: "Fallback, когда покупок/лидов пока мало (< 50 в неделю). Кормишь алгоритм объёмом верхних событий, пока низ воронки не наберёт массу.",
    who: "Все на старте",
  },
];

const methods = [
  {
    n: "01",
    t: "Pixel script · в <head>",
    body: "Base code (PageView fires auto) + ручной fbq('track', 'Purchase', {value, currency}) на success-странице. Минимум. Работает везде.",
  },
  {
    n: "02",
    t: "Google Tag Manager",
    body: "Без кода. Trigger «page url contains /thank-you» → Meta Pixel tag → Purchase. Удобно для Lovable / Webflow / Wix лендингов.",
  },
  {
    n: "03",
    t: "Conversions API (CAPI)",
    body: "Server-side. Stripe webhook / Supabase Edge Function / Shopify pixel → fetch на Meta. Обязательно для 2026 — см. следующий слайд.",
  },
];

export default function L13Slide16EventsSetup() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          События на пикселе · что вешаем и куда
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Пять событий <span className="text-[hsl(var(--slide-gold))]">покрывают 95% продуктов</span>
        </h2>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Standard Events</p>
        <div className="space-y-[3px] mb-[5px]">
          {events.map((e) => (
            <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[3px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{e.name}</span> · {e.when}
                </p>
                <p className="text-[6px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold)/0.7)]">{e.who}</p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Способы установки</p>
        <div className="grid grid-cols-3 gap-[4px]">
          {methods.map((m) => (
            <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[6px] py-[3px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{m.n}.</span> {m.t}
              </p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        События на пикселе · что вешаем и куда
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Пять событий <span className="text-[hsl(var(--slide-gold))]">покрывают 95% продуктов</span> в когорте
      </h2>
      <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Standard Events Meta · выбираешь под свою воронку</p>
      <div className="grid grid-cols-5 gap-[12px] mb-[18px] max-w-[1700px]">
        {events.map((e) => (
          <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[16px] py-[12px]">
            <p className="font-display text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{e.name}</p>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] mb-[6px]">{e.when}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4] mb-[6px]">{e.body}</p>
            <p className="text-[10px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold)/0.75)]">для · {e.who}</p>
          </div>
        ))}
      </div>
      <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Три способа поставить событие</p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1700px]">
        {methods.map((m) => (
          <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[22px] py-[14px]">
            <div className="flex items-baseline gap-[10px] mb-[4px]">
              <span className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-none">{m.n}</span>
              <span className="text-[18px] font-bold text-[hsl(var(--slide-text))]">{m.t}</span>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[36px]">{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
