import { useIsMobile } from "@/hooks/use-mobile";

const points = [
  {
    k: "А",
    t: "Продукта ещё нет",
    sign: "Есть идея и записи из разговоров. Собранного продукта нет.",
    step: "Собери прототип из одного экрана и дай его потрогать 10 людям на этой неделе.",
    back: "Вернись к урокам 3 и 4",
  },
  {
    k: "Б",
    t: "Продукт есть, платящих нет",
    sign: "Продукт работает, люди иногда заходят, денег нет.",
    step: "20 адресных касаний за две недели по одному каналу. Продукт при этом не переписываешь.",
    back: "Вернись к урокам 10, 11 и 16",
  },
  {
    k: "В",
    t: "Платящие уже есть",
    sign: "От 1 до 10 человек заплатили. Непонятно, как это повторить.",
    step: "Повтори путь первого платящего ещё 10 раз и посчитай, во сколько он тебе обошёлся.",
    back: "Вернись к урокам 13, 14 и 16",
  },
];

export default function L17SlideWhereYouAre() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Честный вопрос себе
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Где ты сейчас · три точки
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Все прошли курс по-разному. Дальше план читаешь только через свою букву.
        </p>
        <div className="space-y-[5px]">
          {points.map((p) => (
            <div key={p.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-start gap-[6px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[15px] h-[15px] flex items-center justify-center rounded-full font-bold shrink-0 mt-[1px]">{p.k}</span>
                <div>
                  <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.t}</p>
                  <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{p.sign}</p>
                  <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.35] mt-[2px]"><span className="text-[hsl(var(--slide-gold))] font-bold">Шаг: </span>{p.step}</p>
                  <p className="text-[7px] text-[hsl(var(--slide-gold))] mt-[1px]">{p.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] mt-[6px]">
          Выбери одну букву. Не две.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[38px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Честный вопрос себе
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Где ты сейчас · <span className="text-[hsl(var(--slide-gold))]">три точки</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1500px]">
        Все прошли курс по-разному, и это нормально. Дальше весь план читаешь только через свою букву.
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1600px]">
        {points.map((p) => (
          <div key={p.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px] flex flex-col">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[38px] h-[38px] flex items-center justify-center rounded-full font-bold mb-[10px]">{p.k}</span>
            <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">{p.t}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[10px]">{p.sign}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[10px]">
              <span className="text-[hsl(var(--slide-gold))] font-bold">Шаг: </span>{p.step}
            </p>
            <p className="text-[14px] text-[hsl(var(--slide-gold))] mt-auto">{p.back}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45] mt-[20px] max-w-[1600px]">
        Выбери одну букву. Не две.
      </p>
    </div>
  );
}
