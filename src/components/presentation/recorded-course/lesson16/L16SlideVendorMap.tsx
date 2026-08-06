import { useIsMobile } from "@/hooks/use-mobile";

const b2b = [
  { t: "Спроси своих клиентов", how: "«Кто вам настраивал систему?» · «С каким агентством работаете?» · «Кто ещё вам что-то продаёт по этой теме?»" },
  { t: "Загугли, кто зарабатывает на твоём клиенте", how: "«[твоя ниша] агентство», «[твоя ниша] внедрение», «[твоя ниша] консультант». Первая страница выдачи - твой список." },
  { t: "Открой Integrations у конкурентов", how: "Страницы Integrations или Partners у 2-3 конкурентов. Выпиши всех, кто там перечислен." },
];

const b2c = [
  { t: "Спроси своих юзеров", how: "«Где вы про такое читаете?» · «За кем следите по этой теме?» · «В каких чатах сидите?»" },
  { t: "Посмотри, на кого подписана твоя аудитория", how: "Соцсети, рассылки, подкасты. Ищи не самых крупных, а тех, кому верят на слово." },
  { t: "Найди сервисы рядом в жизни клиента", how: "Чем он пользуется до и после тебя в той же ситуации. С ними делается совместная акция." },
];

export default function L16SlideVendorMap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Где искать
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          3 действия · список за один вечер
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Цель - 10-15 имён в таблице. Не искать «идеального», а собрать список и начать писать.
        </p>
        <div className="space-y-[7px]">
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[7px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">B2B</p>
            {b2b.map((x, i) => (
              <div key={x.t} className="mt-[3px]">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {x.t}</p>
                <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{x.how}</p>
              </div>
            ))}
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[7px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">B2C</p>
            {b2c.map((x, i) => (
              <div key={x.t} className="mt-[3px]">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {x.t}</p>
                <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{x.how}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Где искать
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        3 действия · <span className="text-[hsl(var(--slide-gold))]">список за один вечер</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        Цель - 10-15 имён в таблице. Не искать «идеального», а собрать список и начать писать.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1900px]">
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.05)]">
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[12px]">B2B · клиент - компания</p>
          <div className="space-y-[12px]">
            {b2b.map((x, i) => (
              <div key={x.t}>
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{i + 1}. {x.t}</p>
                <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{x.how}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.05)]">
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[12px]">B2C · клиент - человек</p>
          <div className="space-y-[12px]">
            {b2c.map((x, i) => (
              <div key={x.t}>
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{i + 1}. {x.t}</p>
                <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{x.how}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
