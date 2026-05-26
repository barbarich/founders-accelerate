import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide04Truth2() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 2 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Идея ничего не стоит. Стоит то, что ты с ней сделаешь.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          1000 человек прямо сейчас думают о той же идее, что и ты. <span className="text-[hsl(var(--slide-text))] font-medium">Только 10 начнут что-то делать. Только 1 запустится.</span>
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Идея — это билет на лотерею. Реализация — это выигрышный номер.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Я переписывал свой первый продукт <span className="text-[hsl(var(--slide-gold))] font-bold">4 раза</span>. Каждый раз — после того как реальный человек сказал «не куплю». Ты тоже будешь переписывать. Это нормально.
          </p>
        </div>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Сегодня — выпиши идею в одно предложение и покажи <span className="text-[hsl(var(--slide-gold))]">3 потенциальным клиентам</span>. Не описывай, не убеждай. Просто покажи и слушай. Урок 1.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 2 из 5
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1600px]">
        Идея ничего не стоит.<br />Стоит то, что ты с ней сделаешь.
      </h2>
      <div className="max-w-[1500px] space-y-[20px] mb-[28px]">
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          1000 человек прямо сейчас думают о той же идее, что и ты. <span className="text-[hsl(var(--slide-text))] font-semibold">Только 10 начнут что-то делать. Только 1 запустится.</span>
        </p>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          Идея — это билет на лотерею. Реализация — это выигрышный номер.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1500px] mb-[28px]">
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.4]">
          Я переписывал свой первый продукт <span className="text-[hsl(var(--slide-gold))] font-bold">4 раза</span>. Каждый раз — после того как реальный человек сказал «не куплю». Ты тоже будешь переписывать. Это нормально.
        </p>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1500px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Сегодня — выпиши идею в одно предложение и покажи <span className="text-[hsl(var(--slide-gold))] font-semibold">3 потенциальным клиентам</span>. Не описывай, не убеждай. Просто покажи и слушай. Урок 1.
        </p>
      </div>
    </div>
  );
}
