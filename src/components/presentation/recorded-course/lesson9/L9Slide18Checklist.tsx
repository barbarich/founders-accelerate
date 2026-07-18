import { useIsMobile } from "@/hooks/use-mobile";

const gate = [
  { num: "1", item: "Продукт определён", detail: "Одной фразой: что это и для кого. Не «платформа для всех».", back: "Урок 3" },
  { num: "2", item: "Проблема и решение сходятся", detail: "Клиент называет ту же боль, что и ты. Своими словами, не твоими.", back: "Урок 2" },
  { num: "3", item: "Пруфы есть", detail: "Не мнение друзей. Люди, которые заплатили или сказали «дай мне это сейчас».", back: "Уроки 2, 5" },
  { num: "4", item: "Понятно, чем вовлекает", detail: "Aha-момент назван и достигается за понятное время.", back: "Урок 7" },
  { num: "5", item: "Понятно, чем удерживает", detail: "Петля возврата работает. Уведомления - это финал петли, а не она сама.", back: "Урок 8" },
  { num: "6", item: "Понятно, как возвращает", detail: "Механика выбрана и стоит в продукте, а не в заметках.", back: "Урок 8" },
  { num: "7", item: "Понятно, как измеряешь", detail: "North Star сформулирована. Пять вопросов закрыты. Инструмент стоит и собирает.", back: "Этот урок" },
];

export default function L9Slide18Checklist() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[18px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Домашка · она же гейт блока
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Семь пунктов. <span className="text-[hsl(var(--slide-gold))]">Все закрыты - идёшь в маркетинг</span>.
        </h2>
        <div className="space-y-[4px] mb-[8px]">
          {gate.map((g) => (
            <div key={g.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[8px] py-[5px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-start gap-[6px]">
                <span className="text-[9px] text-[hsl(var(--slide-gold))] shrink-0 mt-[1px]">☐</span>
                <div className="flex-1">
                  <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
                    {g.item} <span className="text-[hsl(var(--slide-gold))] font-normal">→ {g.back}</span>
                  </p>
                  <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{g.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[8px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Хоть один пункт открыт - маркетинг подождёт. Это не строгость, это <span className="text-[hsl(var(--slide-gold))]">экономия твоих денег</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Домашка · она же гейт блока
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em] max-w-[1800px]">
        Семь пунктов. <span className="text-[hsl(var(--slide-gold))]">Все закрыты - идёшь в маркетинг</span>.
      </h2>
      <div className="space-y-[9px] max-w-[1800px] mb-[18px]">
        {gate.map((g) => (
          <div key={g.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[22px] py-[10px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[16px]">
            <span className="text-[20px] text-[hsl(var(--slide-gold))] shrink-0">☐</span>
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] w-[380px] shrink-0 leading-[1.25]">{g.item}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] flex-1">{g.detail}</p>
            <p className="text-[17px] text-[hsl(var(--slide-gold))] font-semibold w-[150px] shrink-0 text-right">→ {g.back}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Хоть один пункт открыт - маркетинг подождёт. Это не строгость, это <span className="text-[hsl(var(--slide-gold))]">экономия твоих денег</span>.
        </p>
      </div>
    </div>
  );
}
