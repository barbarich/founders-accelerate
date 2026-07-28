import { useIsMobile } from "@/hooks/use-mobile";

const facts = [
  { title: "Конверсия почти никогда не падает пропорционально", text: "Цена +20% и конверсия -5% = ты всё равно в большом плюсе. Ранние продукты почти всегда недооценены." },
  { title: "Grandfathering снимает страх", text: "Старым клиентам - старая цена навсегда. Новым - новая. Поднятие цены перестаёт быть конфликтом." },
  { title: "Тест ценой - самый дешёвый эксперимент", text: "Поменять число на лендинге - 10 минут. Две недели наблюдаешь конверсию и считаешь маржу, потом решаешь." },
  { title: "Годовой тариф = мгновенный payback", text: "Скидка 15-20% за годовую оплату - и CAC окупается в день покупки, а churn на год заморожен." },
];

export default function L14Slide15PriceLever() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Рычаг 1 · цена</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Цена - <span className="text-[hsl(var(--slide-gold))]">самый быстрый рычаг из четырёх</span>
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          {facts.map((f, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[1px]">{f.title}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{f.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Из урока 3 ты назначил первую цену. Сейчас, с реальными данными о марже и CAC, пришло время её пересмотреть.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Рычаг 1 · цена</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Цена - <span className="text-[hsl(var(--slide-gold))]">самый быстрый рычаг из четырёх</span>
      </h2>
      <div className="grid grid-cols-2 gap-[16px] mb-[22px] max-w-[1650px]">
        {facts.map((f, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[16px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[8px]">{f.title}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{f.text}</p>
          </div>
        ))}
      </div>
      <p className="text-[21px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        Из урока 3 ты назначил первую цену. Сейчас, с реальными данными о марже и CAC, пришло время её пересмотреть.
      </p>
    </div>
  );
}
