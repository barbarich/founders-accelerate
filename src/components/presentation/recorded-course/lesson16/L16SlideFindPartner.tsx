import { useIsMobile } from "@/hooks/use-mobile";

const b2b = [
  { t: "Агентства и консультанты", d: "Уже обслуживают твоих клиентов, но решают другую задачу. У них доверие и прямой выход на того, кто решает." },
  { t: "Интеграторы и IT-подрядчики", d: "Приходят ставить клиенту систему. Твой продукт добавляется в тот же разговор, а не требует отдельной продажи." },
  { t: "Смежные сервисы для того же бизнеса", d: "Клиент пользуется их продуктом, и следом у него возникает задача, которую решаешь ты." },
];

const b2c = [
  { t: "Авторы, блогеры, подкастеры", d: "Смотри не на охват, а на доверие: кого твоя аудитория реально слушает и кому верит на слово." },
  { t: "Админы сообществ и чатов", d: "Твоя аудитория уже собралась в одном месте. Договариваться нужно с тем, кто это место ведёт." },
  { t: "Сервисы рядом в жизни клиента", d: "Тот же человек, другая задача в той же ситуации. Приложение для бега и магазин кроссовок." },
];

const cases = {
  b2b: "MetaMinder: маркетинговые агентства отелей вели клиента и сами закрывали сделку. Плюс интеграторы софта - ставили систему и параллельно нас.",
  b2c: "Сервис доставки еды и фитнес-приложение: один и тот же человек, совместная акция, оба получают юзеров дешевле рекламы.",
};

export default function L16SlideFindPartner() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Кого искать
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Зависит от того, кто твой клиент
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Правило одно: у партнёра уже есть доступ к твоему клиенту, но он не продаёт то же, что ты.
        </p>
        <div className="space-y-[7px]">
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[7px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold">B2B · клиент - компания</p>
            {b2b.map((x) => (
              <div key={x.t} className="mt-[3px]">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{x.t}</p>
                <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{x.d}</p>
              </div>
            ))}
            <p className="text-[8px] italic text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[4px]">{cases.b2b}</p>
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[7px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold">B2C · клиент - человек</p>
            {b2c.map((x) => (
              <div key={x.t} className="mt-[3px]">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{x.t}</p>
                <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{x.d}</p>
              </div>
            ))}
            <p className="text-[8px] italic text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[4px]">{cases.b2c}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Кого искать
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Зависит от того, <span className="text-[hsl(var(--slide-gold))]">кто твой клиент</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        Правило одно для всех: у партнёра уже есть доступ к твоему клиенту, но он не продаёт то же, что ты.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1900px]">
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.05)] flex flex-col">
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[12px]">B2B · твой клиент - компания</p>
          <div className="space-y-[10px] flex-1">
            {b2b.map((x) => (
              <div key={x.t}>
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{x.t}</p>
                <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[13.5px] italic text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[12px] pt-[10px] border-t border-[hsl(var(--slide-border)/0.3)]">{cases.b2b}</p>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.05)] flex flex-col">
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[12px]">B2C · твой клиент - человек</p>
          <div className="space-y-[10px] flex-1">
            {b2c.map((x) => (
              <div key={x.t}>
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{x.t}</p>
                <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[13.5px] italic text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[12px] pt-[10px] border-t border-[hsl(var(--slide-border)/0.3)]">{cases.b2c}</p>
        </div>
      </div>
    </div>
  );
}
