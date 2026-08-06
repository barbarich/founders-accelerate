import { useIsMobile } from "@/hooks/use-mobile";

const cards = [
  { t: "Почему это работает", d: "Люди доверяют человеку, за которым следят месяцами, а не рекламному баннеру. Когда он говорит «я этим пользуюсь» - это звучит как совет от друга. Поэтому такая реклама продаёт лучше обычной." },
  { t: "Когда актуально", d: "Когда есть что показать за 30 секунд: рабочий продукт с одним понятным результатом. Не идея на бумаге и не «скоро запустимся» - реальный экран, который снимают на видео." },
  { t: "Кому подходит", d: "Не только приложениям для людей. Если у твоей ниши есть свои блогеры и каналы - для разработчиков, маркетологов, любой узкой профессии - схема работает и для B2B-продукта." },
];

export default function L16SlideCreatorsWhy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Инфлюенсеры · зачем и когда
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Ты покупаешь не показы, а <span className="text-[hsl(var(--slide-gold))]">чужое доверие</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Обычная реклама показывает продукт незнакомцам. Здесь его показывает тот, кого уже слушают - и часть доверия к нему переходит на продукт.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {cards.map((c) => (
            <div key={c.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{c.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Это не замена рекламе из урока 12 и не обязательно дешевле - один блогер погоды не делает, а для объёма нужны сразу 10-15, и бюджет догоняет таргет. Разница не в цене, а в механике: платишь за рекомендацию, а не за показ.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инфлюенсеры · зачем и когда
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
        Ты покупаешь не показы, а <span className="text-[hsl(var(--slide-gold))]">чужое доверие</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1800px]">
        Обычная реклама показывает продукт незнакомцам. Здесь его показывает тот, кого уже слушают, - и часть доверия к нему переходит на продукт.
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1900px] mb-[18px]">
        {cards.map((c) => (
          <div key={c.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{c.t}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[16px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Это не замена рекламе из урока 12 и не обязательно дешевле - один блогер погоды не делает, а для объёма нужны сразу 10-15, и бюджет догоняет таргет. Разница не в цене, а в механике: платишь за рекомендацию, а не за показ.
        </p>
      </div>
    </div>
  );
}
