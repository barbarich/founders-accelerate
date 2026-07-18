import { useIsMobile } from "@/hooks/use-mobile";

const funnels = [
  { name: "Вейтлист", flow: "реклама/пост → форма → лист ожидания → запуск", when: "Новый продукт без аудитории. Собираешь заинтересованных ДО запуска, они же первые тестеры и первые платящие." },
  { name: "Лид-магнит", flow: "реклама → бесплатная польза за email → серия писем → оффер", when: "Холодная аудитория, которой нужен прогрев. Гайд, шаблон, мини-тул в обмен на контакт." },
  { name: "Free trial / Freemium", flow: "реклама → регистрация → продукт бесплатно → платёж за расширение", when: "SaaS и приложения, где ценность видно в самом использовании. Продаёт сам продукт." },
  { name: "Видео-продажник (VSL)", flow: "реклама → одно длинное видео → оффер под ним", when: "Инфопродукты, курсы, средний-высокий чек в B2C. Видео ведёт от боли к решению." },
  { name: "Вебинар / демо", flow: "реклама → регистрация → эфир или запись → оффер в конце", when: "Дорогой или сложный продукт, который надо показать в действии. B2B и премиум B2C." },
  { name: "Заявка → звонок", flow: "реклама → заявка → созвон → продажа", when: "B2B со сложным продуктом и высоким чеком. Продаёт человек, не страница. Разбираем в уроке 13." },
];

export default function L11SlideFunnelTypes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Какие воронки бывают
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Шесть воронок. <span className="text-[hsl(var(--slide-gold))]">Выбери одну под свой продукт.</span>
        </h2>
        <div className="space-y-[4px]">
          {funnels.map((f) => (
            <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{f.name}</p>
              <p className="text-[6.5px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.3]">{f.flow}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{f.when}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Какие воронки бывают
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        Шесть воронок. <span className="text-[hsl(var(--slide-gold))]">Выбери одну под свой продукт.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[16px] max-w-[1750px]">
        {funnels.map((f) => (
          <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[13px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">{f.name}</p>
            <p className="text-[13px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.35] mb-[5px]">{f.flow}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{f.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
