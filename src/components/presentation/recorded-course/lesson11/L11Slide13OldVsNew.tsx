import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { n: "01", t: "Хук · первые 3 секунды", body: "Останавливает скролл. Цифра, противоречие или боль. Не логотип. «Свайпнул десятый профиль ни о чём?»" },
  { n: "02", t: "Ценность · дальше", body: "Что человек получит. Результат, не фича. «Партнёр по ценностям, а не по фото»." },
  { n: "03", t: "Доказательство", body: "Цифра, лицо, отзыв. «200+ команд», реальный клиент. Без него - «ещё один стартап»." },
  { n: "04", t: "CTA · последний кадр", body: "Один глагол + один результат. «Забери доступ» лучше «Узнать больше». Кнопка одна." },
];

export default function L11Slide13OldVsNew() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Креативы 2026 · главное правило
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Алгоритм выбирает - ты <span className="text-[hsl(var(--slide-gold))]">даёшь объём</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[6px]">
          Не один «идеальный» креатив, а 20-30 вариантов - Meta сама выберет, что показывать. Но в каждом должны быть 4 куска, иначе конверсия падает в разы:
        </p>
        <div className="space-y-[4px]">
          {parts.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{p.n}</span> {p.t}
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Креативы 2026 · главное правило
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Алгоритм выбирает - ты <span className="text-[hsl(var(--slide-gold))]">даёшь объём</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1650px]">
        Не один «идеальный» креатив, а 20-30 вариантов - Meta сама выберет, что кому показывать. Но в каждом должны быть четыре куска, иначе конверсия проседает в 3-10 раз:
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {parts.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px]">
            <div className="flex items-baseline gap-[14px] mb-[6px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <span className="text-[23px] font-bold text-[hsl(var(--slide-text))]">{p.t}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5] ml-[44px]">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
