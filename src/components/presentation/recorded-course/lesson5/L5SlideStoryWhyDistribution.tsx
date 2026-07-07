import { useIsMobile } from "@/hooks/use-mobile";

const cards = [
  {
    bad: true,
    label: "Миф фаундера",
    text: "«Построю продукт → включу таргет в Мета → продажи пойдут сами»",
    note: "Холодная реклама без аудитории и доверия просто сжигает бюджет. Никто не покупает у незнакомца с первого показа.",
  },
  {
    bad: false,
    label: "Как на самом деле",
    text: "Аудиторию и первые продажи собирают, пока строят — а не после запуска",
    note: "Дистрибуция — работа фаундера с первого дня, а не кнопка после релиза.",
  },
];

export default function L5SlideStoryWhyDistribution() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — зачем это фаундеру
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Продукт не продаётся сам
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Дистрибуция — не этап после релиза. Это работа фаундера с первого дня.
        </p>
        <div className="space-y-[6px] mb-[8px]">
          {cards.map((c, i) => (
            <div key={i} className={`rounded-[6px] px-[10px] py-[7px] border ${c.bad ? 'bg-[hsl(0_20%_12%)] border-[hsl(0_60%_40%/0.3)]' : 'bg-[hsl(142_20%_10%)] border-[hsl(142_50%_40%/0.3)]'}`}>
              <p className={`text-[8px] font-bold mb-[3px] ${c.bad ? 'text-[hsl(0_60%_65%)]' : 'text-[hsl(142_50%_60%)]'}`}>{c.bad ? '✗' : '✓'} {c.label}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">{c.text}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] italic">{c.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[6px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] italic mb-[3px]">Сначала ты смеялся над теми, кто танцует в TikTok. Теперь сам — потому что о продукте, о котором молчишь, никто не узнает.</p>
          <p className="text-[8px] text-[hsl(var(--slide-gold))] font-bold leading-[1.4]">Быть видимым &gt; быть серьёзным. Актёром быть не нужно — нужно показываться.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — зачем это фаундеру
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Продукт не продаётся сам
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1200px] leading-[1.45]">
        Дистрибуция — не этап после релиза. Это работа фаундера с первого дня.
      </p>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1400px] mb-[20px]">
        {cards.map((c, i) => (
          <div key={i} className={`rounded-[14px] px-[26px] py-[22px] border-2 ${c.bad ? 'bg-[hsl(0_15%_10%)] border-[hsl(0_60%_40%/0.4)]' : 'bg-[hsl(142_15%_9%)] border-[hsl(142_50%_40%/0.4)]'}`}>
            <p className={`text-[14px] font-bold uppercase tracking-[0.15em] mb-[12px] ${c.bad ? 'text-[hsl(0_60%_65%)]' : 'text-[hsl(142_50%_60%)]'}`}>{c.bad ? '✗' : '✓'} {c.label}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[10px]">{c.text}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic border-t border-[hsl(var(--slide-border)/0.3)] pt-[8px]">{c.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px] max-w-[1400px]">
        <p className="text-[17px] text-[hsl(var(--slide-text))] italic leading-[1.45] mb-[6px]">
          Сначала ты смеялся над теми, кто танцует в TikTok. Теперь сам — потому что о продукте, о котором молчишь, никто не узнает.
        </p>
        <p className="text-[19px] text-[hsl(var(--slide-gold))] font-bold leading-[1.4]">
          Быть видимым &gt; быть серьёзным. Актёром быть не нужно — нужно показываться.
        </p>
      </div>
    </div>
  );
}
