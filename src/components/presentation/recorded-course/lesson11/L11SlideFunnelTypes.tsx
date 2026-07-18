import { useIsMobile } from "@/hooks/use-mobile";

const funnels = [
  { name: "Вейтлист", tag: "ВСЕ · ПРЕ-ЗАПУСК", flow: "реклама/пост → форма → лист ожидания → запуск", when: "Новый продукт без аудитории. Собираешь спрос ДО запуска, они же первые тестеры и первые платящие." },
  { name: "Self-serve / Free trial", tag: "B2B · B2C · SaaS", flow: "реклама → регистрация → продукт бесплатно → оплата за расширение", when: "SaaS и приложения, где ценность видна в использовании. Продукт продаёт себя (PLG)." },
  { name: "Товарная / e-commerce", tag: "B2C · DTC", flow: "реклама → страница товара → корзина → допродажа", when: "Физические и цифровые товары. Импульсная покупка, апсейл и допродажа сразу в чек-ауте." },
  { name: "Лид-магнит → email", tag: "B2B · B2C", flow: "реклама → польза за email → серия писем → оффер", when: "Холодная аудитория, которой нужен прогрев. Гайд, шаблон, мини-тул в обмен на контакт." },
  { name: "Вебинар / VSL", tag: "ИНФО · ВЫСОКИЙ ЧЕК", flow: "реклама → эфир или длинное видео → оффер", when: "Курсы, инфопродукты, дорогой B2C. Одно видео ведёт от боли к решению и продаёт." },
  { name: "Заявка → демо / звонок", tag: "B2B", flow: "реклама/outreach → заявка → созвон → продажа", when: "B2B со сложным продуктом и высоким чеком. Продаёт человек, не страница. Урок 13." },
  { name: "Аудит / консультация → оффер", tag: "УСЛУГИ", flow: "заявка → бесплатный аудит → предложение → сделка", when: "Агентства, консалтинг, фриланс. Даёшь пользу на созвоне → превращаешь в платный проект." },
  { name: "Контент → доверие → продажа", tag: "ВСЕ · ОРГАНИКА 2026", flow: "посты/видео → подписка → доверие → покупка", when: "Без бюджета. Люди покупают, потому что следят за тобой. Главный путь соло-фаундера." },
];

export default function L11SlideFunnelTypes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[12px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Какие воронки бывают · B2B · B2C · услуги
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Восемь воронок. <span className="text-[hsl(var(--slide-gold))]">Выбери одну под свой продукт.</span>
        </h2>
        <div className="space-y-[3px]">
          {funnels.map((f) => (
            <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{f.name}</p>
                <p className="text-[5.5px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold))] shrink-0">{f.tag}</p>
              </div>
              <p className="text-[6px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.25]">{f.flow}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.3]">{f.when}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Какие воронки бывают · B2B · B2C · услуги
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em]">
        Восемь воронок. <span className="text-[hsl(var(--slide-gold))]">Выбери одну под свой продукт.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[12px] max-w-[1750px]">
        {funnels.map((f) => (
          <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[10px]">
            <div className="flex items-baseline justify-between gap-[10px] mb-[2px]">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{f.name}</p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] shrink-0">{f.tag}</p>
            </div>
            <p className="text-[12.5px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.3] mb-[3px]">{f.flow}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{f.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
