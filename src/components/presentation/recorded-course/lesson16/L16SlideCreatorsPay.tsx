import { useIsMobile } from "@/hooks/use-mobile";

const models = [
  { t: "Бартер", n: "$0", d: "Работает только с мелкими. Дал доступ - получил отзыв. С крупными не проходит." },
  { t: "Фикс за пост", n: "плохой выбор", d: "Платишь за показы, весь риск на тебе. Годится только чтобы выкупить права на ролик." },
  { t: "Фикс + процент", n: "$50-150 + 20-30%", d: "Рабочая модель для соло. Фикс снимает недоверие, процент делает креатора заинтересованным в продажах." },
];

export default function L16SlideCreatorsPay() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Инфлюенсеры · сколько платить
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Считай не за пост, а за просмотр
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[6px] px-[10px] py-[8px] mb-[7px]">
          <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.35]">
            Цена = средние просмотры последних 10 роликов × <span className="text-[hsl(var(--slide-gold))]">$0.03-0.05</span>
          </p>
          <p className="text-[8px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35] mt-[2px]">
            Просит заметно больше - торгуйся этой формулой. Для справки: мелкие берут $20-250, микро $150-1500 за ролик.
          </p>
        </div>
        <div className="space-y-[5px] mb-[6px]">
          {models.map((m) => (
            <div key={m.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline justify-between">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{m.t}</p>
                <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{m.n}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-bold">Выкупай права на ролик</span> (+30-100% к цене). Тогда удачное видео можно крутить как рекламу месяцами. Без прав ты купил один показ.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инфлюенсеры · сколько платить
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
        Считай не за пост, а <span className="text-[hsl(var(--slide-gold))]">за просмотр</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[28px] py-[18px] max-w-[1900px] mb-[20px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Цена = средние просмотры последних 10 роликов × <span className="text-[hsl(var(--slide-gold))]">$0.03-0.05</span>
        </p>
        <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4] mt-[6px]">
          Просит заметно больше - торгуйся этой формулой. Для справки: мелкие берут $20-250 за ролик, микро $150-1500.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1900px] mb-[16px]">
        {models.map((m) => (
          <div key={m.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))]">{m.t}</p>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{m.n}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{m.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[14px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="font-semibold">Выкупай права на ролик</span> (+30-100% к цене). Тогда удачное видео крутишь как рекламу месяцами, и это выходит дешевле собственных креативов. Без прав ты купил один показ.
        </p>
      </div>
    </div>
  );
}
