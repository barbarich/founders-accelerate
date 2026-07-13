import { useIsMobile } from "@/hooks/use-mobile";

const events = [
  {
    name: "Purchase",
    when: "На странице «спасибо за покупку»",
    body: "Главное событие для e-commerce и SaaS. Передаёшь сумму покупки — Meta понимает что выгодно показывать дороже. Без суммы алгоритм оптимизирует слепо.",
    who: "Платная подписка / магазин",
  },
  {
    name: "Lead",
    when: "После отправки формы / вейтлиста",
    body: "Главное событие когда продажа далеко: B2B, дорогая подписка, демо-звонок. Юзер оставил контакт — это лид для тебя.",
    who: "B2B · агентства · marketplaces",
  },
  {
    name: "CompleteRegistration",
    when: "После создания аккаунта",
    body: "Для бесплатной регистрации и trial-флоу. Это глубже чем Lead — юзер сделал не только email, но и создал аккаунт.",
    who: "SaaS · freemium · приложения",
  },
  {
    name: "Contact",
    when: "Клик на «Написать в WhatsApp / Telegram»",
    body: "Когда главный CTA — диалог в мессенджере, а не на сайте. Вешается на кнопку. Подходит для услуг и B2C с менеджером.",
    who: "WhatsApp-боты · услуги",
  },
  {
    name: "ViewContent",
    when: "Открытие важной страницы (продукт / прайс)",
    body: "Запасное событие, когда покупок и лидов мало (< 50 в неделю). Кормишь алгоритм объёмом вверху воронки, пока низ не наберёт массу.",
    who: "Все на старте",
  },
];

const methods = [
  {
    n: "01",
    t: "Pixel — код в шапке сайта",
    body: "Базовый код от Meta. Вставляется один раз. Лучше доверить Claude — он сам вставит и проверит в шапку. На странице покупки добавляется отдельный код события Purchase с суммой.",
    when: "Подходит всем — это минимум",
  },
  {
    n: "02",
    t: "Google Tag Manager",
    body: "Без кода. Внутри GTM правило: «если URL содержит /thank-you → отправь Meta событие Purchase». Удобно для лендингов на Lovable / Webflow / Wix.",
    when: "Если не хочешь трогать код",
  },
  {
    n: "03",
    t: "Серверная отправка (CAPI)",
    body: "Серверная отправка событий напрямую с твоего бэка на Meta. Нужна потому что iOS блокирует обычный пиксель. Реализуется через Claude — он подключает Stripe и пишет код за тебя (см. Урок 6, MCP-подключение).",
    when: "Обязательно в 2026 — см. следующий слайд",
  },
];

export default function L12Slide16EventsSetup() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          События на пикселе · что и куда вешать
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          5 событий <span className="text-[hsl(var(--slide-gold))]">покрывают 95% продуктов</span>
        </h2>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">События Meta · выбери под свою воронку</p>
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
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Как поставить · 3 способа</p>
        <div className="grid grid-cols-3 gap-[4px]">
          {methods.map((m) => (
            <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[6px] py-[3px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{m.n}.</span> {m.t}
              </p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{m.body}</p>
              <p className="text-[6px] italic text-[hsl(var(--slide-gold)/0.75)] mt-[1px]">{m.when}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        События на пикселе · что и куда вешать
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        5 событий <span className="text-[hsl(var(--slide-gold))]">покрывают 95% продуктов</span>
      </h2>
      <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">События Meta · выбери под свою воронку</p>
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
      <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Как поставить · 3 способа</p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1700px]">
        {methods.map((m) => (
          <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[22px] py-[14px]">
            <div className="flex items-baseline gap-[10px] mb-[4px]">
              <span className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-none">{m.n}</span>
              <span className="text-[18px] font-bold text-[hsl(var(--slide-text))]">{m.t}</span>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[36px] mb-[4px]">{m.body}</p>
            <p className="text-[12px] italic text-[hsl(var(--slide-gold)/0.85)] ml-[36px]">{m.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
