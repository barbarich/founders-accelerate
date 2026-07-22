import { useIsMobile } from "@/hooks/use-mobile";

const asks = [
  "Как ты решаешь эту задачу сейчас? Что для этого используешь?",
  "Что в этом бесит больше всего?",
  "Сколько времени/денег на это уходит?",
  "Где ты обычно ищешь такие продукты и с кем советуешься?",
];

export default function L10SlideCustDev() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Понять, кто они · практика
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Портрет на бумаге - гипотеза. Правду узнаёшь, <span className="text-[hsl(var(--slide-gold))]">поговорив с людьми.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px] mb-[7px]">
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">Найди 5-10 человек · начни с нетворка</p>
          <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">Нетворк даёт ~50% ответов, холодные - ~10%. Попроси intro: «кого знаешь, кто сталкивается с [проблемой]?». Потом группы, LinkedIn, Reddit.</p>
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Спроси, не питчи</p>
        <div className="space-y-[3px] mb-[6px]">
          {asks.map((a, i) => (
            <p key={i} className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))]">→</span> {a}</p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">5 разговоров - и ты знаешь их слова, их боль и где они сидят. Они сами тебе скажут.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Понять, кто они · практика
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em] max-w-[1650px]">
        Портрет на бумаге - гипотеза. Правду узнаёшь, <span className="text-[hsl(var(--slide-gold))]">поговорив с людьми.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1720px] items-start">
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[18px]">
          <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[8px]">Найди 5-10 человек · начни с нетворка</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">
            Нетворк даёт ~50% ответов, холодные - ~10%. Попроси intro: «кого знаешь, кто сталкивается с [проблемой]?». Дальше - тематические группы, LinkedIn по должности, Reddit.
          </p>
        </div>
        <div>
          <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">Спроси, не питчи</p>
          <div className="space-y-[9px] mb-[14px]">
            {asks.map((a, i) => (
              <p key={i} className="text-[19px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[8px]">→</span>{a}</p>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[22px] py-[12px]">
            <p className="text-[19px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
              5 разговоров - и ты знаешь их слова, их боль и где они сидят. Они сами тебе скажут.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
