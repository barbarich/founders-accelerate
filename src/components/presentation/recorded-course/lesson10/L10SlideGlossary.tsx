import { useIsMobile } from "@/hooks/use-mobile";

const terms = [
  { t: "Воронка", d: "Путь человека от «узнал» до «купил». Сверху много людей, донизу доходят немногие." },
  { t: "Лид", d: "Тот, кто проявил интерес - написал, оставил заявку. Ещё не клиент, но уже тёплый." },
  { t: "Конверсия", d: "Какой процент перешёл на следующий шаг. Из 100 увидели → 10 написали = конверсия 10%." },
  { t: "Органика vs платный", d: "Органика - бесплатно, руками и контентом. Платный - реклама за деньги." },
  { t: "Касание", d: "Один контакт человека с тобой: пост, письмо, реклама. С первого касания покупают редко." },
  { t: "Цена за платящего (CAC)", d: "Сколько денег и усилий уходит, чтобы получить одного платящего клиента." },
];

export default function L10SlideGlossary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Словарь · 6 слов, которые дальше везде
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Маркетинг <span className="text-[hsl(var(--slide-gold))]">без жаргона.</span>
        </h2>
        <div className="space-y-[4px]">
          {terms.map((x) => (
            <div key={x.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{x.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Словарь · 6 слов, которые дальше встретишь везде
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        Маркетинг <span className="text-[hsl(var(--slide-gold))]">без жаргона.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[14px] max-w-[1700px]">
        {terms.map((x) => (
          <div key={x.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[14px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] leading-[1.15] mb-[3px]">{x.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">{x.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
