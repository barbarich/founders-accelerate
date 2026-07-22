import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  {
    title: "Dollar Shave Club",
    sub: "«Our Blades Are F***ing Great» · 2012",
    what: "Основатель Майкл Дубин сам в кадре, говорит прямо и смешно. Снято за один день примерно за $4 500.",
    reach: "12 000 регистраций за 48 часов · 27М+ просмотров",
    url: "youtube.com/watch?v=ZUG9qYTJMsI",
    why: "История от первого лица + честный юмор = доверие с первой секунды.",
  },
  {
    title: "CeraVe",
    sub: "«Michael CeraVe» · Super Bowl 2024",
    what: "Актёр Майкл Сера на голубом глазу доказывает, что это ОН придумал CeraVe. Пародия на историю основателя, сыгранная всерьёз.",
    reach: "Super Bowl 2024 · «лучший ролик за годы», №1 по эффективности в TikTok",
    url: "youtube.com/watch?v=EVePyMTFciI",
    why: "Одна абсурдная идея, доведённая до конца на 100%, + созвучие имени и бренда - невозможно забыть.",
  },
  {
    title: "Headspace",
    sub: "Энди Паддикомб · TED · личная история фаундера",
    what: "Бывший буддийский монах рассказывает свой путь: ушёл от стресса в монастырь, вернулся - и решил сделать медитацию доступной всем. Из этой истории вырос Headspace.",
    reach: "Миллионы просмотров · одно из самых известных выступлений о медитации",
    url: "youtube.com/watch?v=qzR62JJCMBQ",
    why: "Фаундер продаёт не приложение, а свой путь. Личная история = обещание продукта - ровно как в кейсе Mikey.",
  },
];

export default function L11SlideStoryExamples() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[18px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Хороший сторителлинг · посмотри сам
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[9px]">
          Открой каждую и разбери, <span className="text-[hsl(var(--slide-gold))]">как сделана история</span>
        </h2>
        <div className="space-y-[6px]">
          {examples.map((e) => (
            <div key={e.title} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{e.title}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[3px]">{e.sub}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4] mb-[2px]">{e.what}</p>
              <p className="text-[8px] text-[hsl(var(--slide-gold))] leading-[1.35]">{e.reach}</p>
              <p className="font-mono text-[8px] text-[hsl(var(--slide-gold))] leading-[1.3] break-all">{e.url}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.7)] leading-[1.35] italic mt-[2px]">{e.why}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Хороший сторителлинг · посмотри сам
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        Открой каждую и разбери, <span className="text-[hsl(var(--slide-gold))]">как сделана история</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1800px]">
        {examples.map((e) => (
          <div key={e.title} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[24px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)] flex flex-col">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{e.title}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mb-[10px]">{e.sub}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.82)] leading-[1.45] mb-[10px]">{e.what}</p>
            <p className="text-[15px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.35] mb-[4px]">{e.reach}</p>
            <p className="font-mono text-[13px] text-[hsl(var(--slide-gold))] leading-[1.3] break-all mb-[10px]">{e.url}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.72)] leading-[1.4] italic mt-auto">{e.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
