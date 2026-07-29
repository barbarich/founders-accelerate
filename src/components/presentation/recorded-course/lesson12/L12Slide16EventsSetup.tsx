import { useIsMobile } from "@/hooks/use-mobile";

const events = [
  {
    name: "Purchase",
    when: "На странице «спасибо за покупку»",
    body: "Главное событие для e-commerce и SaaS. Передаёшь сумму покупки - Meta понимает, кому выгодно показывать дороже. Без суммы алгоритм оптимизирует вслепую.",
    who: "Платная подписка / магазин",
  },
  {
    name: "Lead",
    when: "После отправки формы / вейтлиста",
    body: "Главное событие, когда продажа далеко: B2B, дорогая подписка, демо-звонок. Человек оставил контакт - для тебя это результат.",
    who: "B2B · агентства · услуги",
  },
  {
    name: "CompleteRegistration",
    when: "После создания аккаунта",
    body: "Для бесплатной регистрации и trial-флоу. Глубже, чем Lead: человек не просто оставил email, а завёл аккаунт и вошёл внутрь.",
    who: "SaaS · freemium · приложения",
  },
  {
    name: "Contact",
    when: "Клик на «Написать в WhatsApp / Telegram»",
    body: "Когда главный CTA - диалог в мессенджере, а не действие на сайте. Вешается на кнопку.",
    who: "Боты · услуги · B2C с менеджером",
  },
  {
    name: "ViewContent",
    when: "Открытие важной страницы (продукт / прайс)",
    body: "Запасное событие, когда покупок и лидов меньше 50 в неделю. Кормишь алгоритм объёмом наверху воронки, пока низ не наберёт массу.",
    who: "Все на старте",
  },
];

export default function L12Slide16EventsSetup() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Рычаг 2 · Данные · выбор события
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Одно событие = <span className="text-[hsl(var(--slide-gold))]">твоё определение успеха</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Алгоритм будет искать людей, похожих на тех, кто это событие совершил. Выберешь не то - он приведёт не тех. Эти пять покрывают 95% продуктов.
        </p>
        <div className="space-y-[4px] mb-[6px]">
          {events.map((e) => (
            <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{e.name}</span> · {e.when}
                </p>
                <p className="text-[6px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold)/0.7)] shrink-0">{e.who}</p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Правило: событий должно набираться примерно 50 в неделю. Не набирается - бери событие выше по воронке, а не увеличивай бюджет.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Рычаг 2 · Данные · выбор события
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Одно событие = <span className="text-[hsl(var(--slide-gold))]">твоё определение успеха</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1700px]">
        Алгоритм будет искать людей, похожих на тех, кто совершил именно это действие. Выберешь не то - он честно приведёт тебе не тех. Эти пять событий покрывают 95% продуктов.
      </p>
      <div className="grid grid-cols-5 gap-[14px] mb-[22px] max-w-[1700px]">
        {events.map((e) => (
          <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[16px] py-[14px]">
            <p className="font-display text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{e.name}</p>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] mb-[8px]">{e.when}</p>
            <p className="text-[13.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4] mb-[8px]">{e.body}</p>
            <p className="text-[10px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold)/0.75)]">для · {e.who}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        Правило проверки: выбранного события должно набираться около 50 в неделю. Не набирается - бери событие выше по воронке, а не увеличивай бюджет.
      </p>
    </div>
  );
}
