import { useIsMobile } from "@/hooks/use-mobile";

const missing = [
  { what: "Нет скрипта", body: "Ты ещё не знаешь, какие слова продают. Продажнику нечего повторять." },
  { what: "Нет возражений", body: "Ты не собрал реальные «нет» от клиентов и ответы на них. Продажник сдастся на первом же." },
  { what: "Нет кейсов", body: "Нечем доказать, что продукт работает. Продавать пустоту невозможно." },
];

export default function L11SlideB2BTruth() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          B2B · правда про первые продажи
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Пока нет <span className="text-[hsl(var(--slide-gold))]">10 клиентов</span> - продаёшь только ты.
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.55] mb-[10px]">
          Нанять сейлза или залить в маркетинг до первых 10 клиентов - выкинутые деньги. Не потому что рано «по деньгам», а потому что продавать пока нечем:
        </p>
        <div className="space-y-[6px] mb-[9px]">
          {missing.map((m) => (
            <div key={m.what} className="border-l-2 border-[hsl(0_50%_45%/0.5)] bg-[hsl(0_30%_12%/0.4)] px-[10px] py-[6px]">
              <p className="text-[10px] font-bold text-[hsl(0_60%_68%)] mb-[1px]">{m.what}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{m.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Первые 10 продаж - это не про выручку. Это про то, <span className="text-[hsl(var(--slide-gold))]">чтобы ты узнал, как твой продукт вообще покупают</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        B2B · правда про первые продажи
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em]">
        Пока нет <span className="text-[hsl(var(--slide-gold))]">10 клиентов</span> - продаёшь только ты.
      </h2>
      <p className="text-[23px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1800px] mb-[24px]">
        Нанять сейлза или залить в маркетинг до первых 10 клиентов - выкинутые деньги. Не потому что рано «по деньгам», а потому что продавать пока нечем:
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1800px] mb-[24px]">
        {missing.map((m) => (
          <div key={m.what} className="border-l-[4px] border-[hsl(0_50%_45%/0.5)] bg-[hsl(0_30%_12%/0.35)] px-[24px] py-[18px]">
            <p className="text-[22px] font-bold text-[hsl(0_60%_68%)] mb-[6px]">{m.what}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{m.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Первые 10 продаж - это не про выручку. Это про то, <span className="text-[hsl(var(--slide-gold))]">чтобы ты узнал, как твой продукт вообще покупают</span>.
        </p>
      </div>
    </div>
  );
}
