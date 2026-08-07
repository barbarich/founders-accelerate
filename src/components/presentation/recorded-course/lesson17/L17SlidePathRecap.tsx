import { useIsMobile } from "@/hooks/use-mobile";

const phases = [
  {
    num: "1",
    t: "Валидация",
    l: "уроки 1-5",
    items: [
      "Разбирать конкурентов через Deep Research и находить свободное место",
      "Спрашивать людей так, чтобы услышать правду, а не вежливость",
      "Формулировать позиционирование в одну строку и назначать цену",
      "Собирать прототип и оттачивать его на живых людях",
      "Продавать до того, как продукт готов",
    ],
  },
  {
    num: "2",
    t: "Продукт",
    l: "уроки 6-9",
    items: [
      "Собирать продукт с Claude Code как с кофаундером",
      "Доводить человека до момента, ради которого он пришёл",
      "Возвращать людей механиками, а не уведомлениями",
      "Держать одну метрику и решать по данным, а не по ощущениям",
    ],
  },
  {
    num: "3",
    t: "Деньги",
    l: "уроки 10-16",
    items: [
      "Знать, кто твоя аудитория и где она уже собрана",
      "Продавать историей и голосом основателя",
      "Запускать платный трафик и читать его цифры",
      "Вести сделку с компанией от первого письма до подписи",
      "Считать CAC, LTV и payback по каждому каналу",
      "Открывать каналы: партнёрства, креаторы, комьюнити, SEO и GEO",
    ],
  },
];

export default function L17SlidePathRecap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Весь путь курса
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Три фазы, которые ты уже прошёл
        </h2>
        <div className="space-y-[5px]">
          {phases.map((p) => (
            <div key={p.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">
                {p.num}. {p.t} <span className="text-[7.5px] font-normal text-[hsl(var(--slide-gold))]">· {p.l}</span>
              </p>
              <ul className="mt-[2px] space-y-[1px]">
                {p.items.map((it) => (
                  <li key={it} className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] pl-[7px] relative">
                    <span className="absolute left-0 text-[hsl(var(--slide-gold))]">·</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Весь путь курса
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Три фазы, <span className="text-[hsl(var(--slide-gold))]">которые ты уже прошёл</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1500px]">
        Это не темы уроков. Это то, что ты теперь умеешь делать руками.
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1600px]">
        {phases.map((p) => (
          <div key={p.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <div className="flex items-baseline gap-[10px] mb-[10px]">
              <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[30px] h-[30px] rounded-full flex items-center justify-center font-bold shrink-0">{p.num}</span>
              <div>
                <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{p.t}</p>
                <p className="text-[14px] text-[hsl(var(--slide-gold))]">{p.l}</p>
              </div>
            </div>
            <ul className="space-y-[7px]">
              {p.items.map((it) => (
                <li key={it} className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4] pl-[14px] relative">
                  <span className="absolute left-0 text-[hsl(var(--slide-gold))]">·</span>{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
