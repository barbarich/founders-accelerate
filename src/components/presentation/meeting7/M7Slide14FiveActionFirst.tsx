import { useIsMobile } from "@/hooks/use-mobile";

const noAuthCases = [
  { name: "ChatGPT", action: "Задал вопрос — получил ответ.", later: "Email — если хочешь сохранить историю." },
  { name: "TikTok", action: "Открыл — видео играет. Лента работает без логина.", later: "Email — если хочешь подписаться." },
  { name: "Pinterest", action: "Выбрал 3 интереса — лента листается.", later: "Email — если хочешь сохранять." },
  { name: "Canva", action: "Выбрал шаблон — редактируешь дизайн.", later: "Email — когда хочешь скачать или сохранить." },
];

const authFirstCases = [
  {
    name: "Revolut / банки",
    action: "Регистрация + KYC до любого действия.",
    why: "Закон. Без идентификации нельзя открыть счёт.",
  },
  {
    name: "Notion / Linear",
    action: "Аккаунт нужен сразу — ценность = твой workspace.",
    why: "Продукт = персональное пространство. Без аккаунта показывать нечего.",
  },
  {
    name: "Uber / Bolt",
    action: "Телефон + платёжка до первой поездки.",
    why: "Иначе невозможны оплата, поддержка и безопасность.",
  },
  {
    name: "Airbnb (для хостов)",
    action: "Профиль и верификация до листинга.",
    why: "Доверие и выплаты. Гостю — наоборот, можно смотреть без логина.",
  },
];

export default function M7Slide14FiveActionFirst() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Две стратегии регистрации
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          По умолчанию — действие первым. Иногда — наоборот.
        </h2>
        <div className="space-y-[6px]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-semibold mb-[3px]">✓ Действие → потом email</p>
            <div className="space-y-[3px]">
              {noAuthCases.map((c) => (
                <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[8px] py-[4px]">
                  <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.08em]">{c.name}</p>
                  <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.3]">{c.action}</p>
                  <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3] italic">{c.later}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-semibold mb-[3px]">⚠ Регистрация сразу — и это ок</p>
            <div className="space-y-[3px]">
              {authFirstCases.map((c) => (
                <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.25)] rounded-[5px] px-[8px] py-[4px]">
                  <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] uppercase tracking-[0.08em]">{c.name}</p>
                  <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.3]">{c.action}</p>
                  <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3] italic">Почему: {c.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Регистрация оправдана, только если без неё продукт физически не работает.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Две стратегии регистрации
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        По умолчанию — действие первым. Иногда — наоборот, и это нормально.
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1750px] mb-[20px]">
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] px-[22px] py-[18px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[12px] font-semibold">
            ✓ Действие первым → email потом (default)
          </p>
          <div className="space-y-[8px]">
            {noAuthCases.map((c) => (
              <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] rounded-[8px] px-[14px] py-[10px]">
                <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.08em] mb-[2px]">{c.name}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.35]">{c.action}</p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.35] italic mt-[2px]">{c.later}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-text-muted)/0.3)] rounded-[14px] px-[22px] py-[18px]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[12px] font-semibold">
            ⚠ Регистрация сразу — и это валидно
          </p>
          <div className="space-y-[8px]">
            {authFirstCases.map((c) => (
              <div key={c.name} className="bg-[hsl(var(--slide-bg))] rounded-[8px] px-[14px] py-[10px]">
                <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] uppercase tracking-[0.08em] mb-[2px]">{c.name}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.35]">{c.action}</p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.35] italic mt-[2px]"><span className="font-semibold">Почему:</span> {c.why}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1750px] leading-[1.4]">
        Регистрация ДО действия оправдана только когда: закон требует, продукт = персональный workspace, или нужны деньги/верификация. Во всех остальных случаях — выносите её после первого «вау».
      </p>
    </div>
  );
}
