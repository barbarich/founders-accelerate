import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", t: "Позиционирование + история", d: "Перепиши H1 лендинга по формуле «кому · что · чем отличаешься». Вшей свою историю из урока 10 в H1 и первый экран." },
  { n: "2", t: "Один визуальный стиль", d: "Приведи лендинг, соцсети и будущие креативы к одному стилю: шрифт, палитра, тон. Собирается на AI за вечер." },
  { n: "3", t: "10–20 креативов", d: "Видео (Higgsfield / HeyGen) + баннеры (Canva / Memes) + тексты. Не один «идеальный», а пачка вариантов." },
  { n: "4", t: "Собери воронку", d: "Выбери тип воронки под свой продукт, собери путь клик → оплата целиком и пройди его сам как клиент." },
  { n: "5", t: "Пиксели и аналитика", d: "Meta / TikTok / Google пиксели + GA4 на лендинг. До первого клика, иначе первый трафик уйдёт вслепую." },
];

export default function L11Slide22Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Домашка · упаковка к запуску
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Собрать упаковку и воронку так, чтобы можно было запускать
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {tasks.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <div className="flex items-baseline gap-[7px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Цель: </span>
            к L12 упаковка и воронка готовы, пиксели стоят - можно запускать рекламу, не сжигая деньги.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Домашка · упаковка к запуску
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[22px] tracking-[-0.02em] max-w-[1650px]">
        Собрать упаковку и воронку так, чтобы можно было запускать
      </h2>
      <div className="space-y-[10px] max-w-[1700px] mb-[20px]">
        {tasks.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[12px] flex items-center gap-[22px]">
            <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[36px] shrink-0">{t.n}</span>
            <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] w-[340px] shrink-0">{t.t}</span>
            <span className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4] flex-1">{t.d}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1700px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">Цель: </span>
          к уроку 12 упаковка и воронка готовы, пиксели стоят - можно запускать рекламу, не сжигая деньги на сыром.
        </p>
      </div>
    </div>
  );
}
