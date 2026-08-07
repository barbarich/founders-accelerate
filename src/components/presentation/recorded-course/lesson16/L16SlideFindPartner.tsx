import { useIsMobile } from "@/hooks/use-mobile";

const b2b = {
  who: "Агентства и консультанты · интеграторы и IT-подрядчики · смежные сервисы для того же бизнеса",
  how: [
    { t: "Спроси своих клиентов", d: "«Кто вам настраивал систему?» · «С каким агентством работаете?»" },
    { t: "Загугли, кто зарабатывает на твоём клиенте", d: "«[твоя ниша] агентство», «[твоя ниша] внедрение». Первая страница выдачи - твой список." },
    { t: "Открой Integrations у конкурентов", d: "Страницы Integrations или Partners у 2-3 конкурентов. Выпиши всех, кто там перечислен." },
  ],
  case: "MetaMinder: маркетинговые агентства отелей вели клиента и сами закрывали сделку. Плюс интеграторы софта - ставили систему и параллельно нас.",
};

const b2c = {
  who: "Авторы, блогеры, подкастеры · админы сообществ и чатов · сервисы рядом в жизни клиента",
  how: [
    { t: "Спроси своих юзеров", d: "«Где вы про такое читаете?» · «В каких чатах сидите?»" },
    { t: "Посмотри, на кого подписана аудитория", d: "Соцсети, рассылки, подкасты. Ищи не самых крупных, а тех, кому верят на слово." },
    { t: "Найди сервисы рядом в жизни клиента", d: "Чем он пользуется до и после тебя в той же ситуации. С ними делается совместная акция." },
  ],
  case: "Сервис доставки еды и фитнес-приложение: один и тот же человек, совместная акция, оба получают юзеров дешевле рекламы.",
};

export default function L16SlideFindPartner() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[15px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Кого и где искать
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Зависит от того, кто твой клиент
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Правило одно: у партнёра уже есть доступ к твоему клиенту, но он не продаёт то же, что ты.
        </p>
        <div className="space-y-[6px]">
          {[{ h: "B2B · клиент - компания", x: b2b }, { h: "B2C · клиент - человек", x: b2c }].map(({ h, x }) => (
            <div key={h} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[7px] bg-[hsl(var(--slide-gold)/0.05)]">
              <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">{h}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[4px]">{x.who}</p>
              <div className="space-y-[3px] mb-[4px]">
                {x.how.map((s) => (
                  <div key={s.t} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] pl-[7px]">
                    <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.t}</p>
                    <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{s.d}</p>
                  </div>
                ))}
              </div>
              <p className="text-[7.5px] italic text-[hsl(var(--slide-text-muted))] leading-[1.35] pt-[3px] border-t border-[hsl(var(--slide-border)/0.3)]">{x.case}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[28px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Кого и где искать
      </p>
      <h2 className="font-display text-[38px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px] tracking-[-0.01em]">
        Зависит от того, <span className="text-[hsl(var(--slide-gold))]">кто твой клиент</span>
      </h2>
      <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[14px] max-w-[1800px]">
        Правило одно для всех: у партнёра уже есть доступ к твоему клиенту, но он не продаёт то же, что ты.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1900px]">
        {[{ h: "B2B · твой клиент - компания", x: b2b }, { h: "B2C · твой клиент - человек", x: b2c }].map(({ h, x }) => (
          <div key={h} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.05)] flex flex-col">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">{h}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[10px]">{x.who}</p>
            <div className="space-y-[8px] flex-1">
              {x.how.map((s) => (
                <div key={s.t}>
                  <p className="text-[15.5px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{s.t}</p>
                  <p className="text-[13px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{s.d}</p>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] italic text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[10px] pt-[8px] border-t border-[hsl(var(--slide-border)/0.3)]">{x.case}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
