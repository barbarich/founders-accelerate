import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", t: "Запустить кампанию $20–30 / день", d: "Если не запустили сегодня — запускаем дома. Один Advantage+ ad set, минимум 5 креативов в Dynamic Creative, осознанный conversion event." },
  { n: "2", t: "Не трогать первые 72 часа", d: "Никаких правок. Сидишь, наблюдаешь. Каждое изменение сбрасывает learning phase — кампания не успеет научиться." },
  { n: "3", t: "Подготовить 5 новых креативов", d: "Параллельно делай следующую партию. К M11 будет понятно, какие углы работают — заливаем свежие в том же стиле." },
  { n: "4", t: "Принести скриншот Reports", d: "К M11 скриншот: CPM · CTR · CPA · 3 ranking-колонки. На встрече разбираем что данные говорят про твой продукт и креатив." },
];

const b2b = {
  who: "B2B trek · Laura",
  body: "Пришли мне до среды: pitch + offer + список 50 target accounts. На M11 разбираем твой стек — Apollo + Instantly + LinkedIn outreach с нуля.",
};

const dira = {
  who: "Dira.click",
  body: "Включи Special Ad Category = Housing. Тестовая кампания на click-to-WhatsApp на 1–2 района. Бюджет $15/день. К M11 покажешь первые сообщения.",
};

export default function M10Slide14Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Домашка · к встрече 11
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Кампания живёт, данные собираются, ты не паникуешь
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {tasks.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[10.5px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[18px]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[5px] px-[8px] py-[4px] mb-[3px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))]">{b2b.who}</p>
          <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{b2b.body}</p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[5px] px-[8px] py-[4px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))]">{dira.who}</p>
          <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{dira.body}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Домашка · к встрече 11
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Кампания живёт, данные собираются, <span className="text-[hsl(var(--slide-gold))]">ты не паникуешь</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[20px]">
        {tasks.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[18px]">
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <span className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none">{t.n}</span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[50px]">{t.d}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[14px]">
          <p className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">{b2b.who}</p>
          <p className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{b2b.body}</p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[14px]">
          <p className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">{dira.who}</p>
          <p className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{dira.body}</p>
        </div>
      </div>
    </div>
  );
}
