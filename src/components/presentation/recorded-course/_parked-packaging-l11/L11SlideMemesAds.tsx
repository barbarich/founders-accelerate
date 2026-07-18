import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  "Даёшь ссылку на свой лендинг или продукт",
  "Studio подбирает трендовые мем-форматы под твою нишу",
  "Генерит пачку рекламных объявлений на базе этих мемов",
  "Ремиксишь, правишь текст под свой оффер, выгружаешь пачкой",
  "Льёшь как часть креативов в Meta / TikTok",
];

export default function L11SlideMemesAds() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Wow-инструмент · реклама из мемов
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          <span className="text-[hsl(var(--slide-gold))]">Memes AI Studio</span> — креативы из популярных мемов
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Превращает лендинг в вирусные мем-объявления. Заявленная цель: ниже CPA, выше CTR, «скролл-стоп» за минуты. <b className="text-[hsl(var(--slide-gold))]">templates.memes.com</b>
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px] mb-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Как работает</p>
          <ol className="space-y-[2px]">
            {steps.map((s, i) => (
              <li key={i} className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))]">{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Мем-креатив выглядит как контент, а не реклама - отсюда вовлечение. Лучше заходит в B2C и на молодую аудиторию. Один из форматов в пачке, не единственный.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Wow-инструмент · реклама из мемов
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        <span className="text-[hsl(var(--slide-gold))]">Memes AI Studio</span> — креативы из популярных мемов
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        Превращает лендинг в вирусные мем-объявления. Заявленная цель: ниже CPA, выше CTR, «скролл-стоп»-креатив за минуты. <b className="text-[hsl(var(--slide-gold))]">templates.memes.com</b>
      </p>
      <div className="grid grid-cols-[1.4fr_1fr] gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Как работает</p>
          <ol className="space-y-[8px]">
            {steps.map((s, i) => (
              <li key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <span className="text-[hsl(var(--slide-gold))] font-bold mr-[8px]">{i + 1}.</span>{s}
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[26px] py-[20px] flex flex-col justify-center">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Почему работает</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Мем-креатив выглядит как контент, а не реклама - отсюда вовлечение и дешёвый клик. Лучше заходит в <b className="text-[hsl(var(--slide-gold))]">B2C и на молодую аудиторию</b>. Бери как один из форматов в пачке креативов, не единственный.
          </p>
        </div>
      </div>
    </div>
  );
}
