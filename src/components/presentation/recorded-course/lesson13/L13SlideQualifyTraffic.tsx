import { useIsMobile } from "@/hooks/use-mobile";

const signs = [
  { s: "Боль названа цифрой", d: "«теряем 8 часов в неделю», а не «неудобно»" },
  { s: "Деньги есть, и понятно чьи", d: "известен бюджет или из какой статьи возьмут" },
  { s: "Знаешь, кто говорит «да»", d: "по имени, а не «руководство решит»" },
  { s: "Есть ответ «почему сейчас»", d: "что изменится, если отложить на полгода" },
  { s: "Названа дата решения", d: "конкретный месяц, а не «после лета посмотрим»" },
];

const lights = [
  { c: "Зелёный", n: "4–5", d: "Работаешь. Это сделка — веди её до конца.", tone: "green" },
  { c: "Жёлтый", n: "3", d: "Один звонок, чтобы добрать недостающее. Не два месяца переписки.", tone: "amber" },
  { c: "Красный", n: "0–2", d: "В архив. Письмо через три месяца. Это не отказ — это освободившееся время.", tone: "red" },
];

export default function L13SlideQualifyTraffic() {
  const isMobile = useIsMobile();

  const toneCls = (t: string) =>
    t === "green"
      ? "bg-[hsl(142_20%_10%)] border-[hsl(142_50%_40%/0.4)]"
      : t === "amber"
      ? "bg-[hsl(var(--slide-gold)/0.1)] border-[hsl(var(--slide-gold)/0.4)]"
      : "bg-[hsl(0_20%_12%)] border-[hsl(0_60%_40%/0.35)]";

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Квалификация
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Это сделка — <span className="text-[hsl(var(--slide-gold))]">или просто хороший разговор?</span>
        </h2>
        <div className="space-y-[3px] mb-[6px]">
          {signs.map((x, i) => (
            <div key={x.s} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <p className="text-[8.5px] leading-[1.35]">
                <span className="font-bold text-[hsl(var(--slide-gold))]">{i + 1}. </span>
                <span className="font-bold text-[hsl(var(--slide-text))]">{x.s}</span>
                <span className="text-[hsl(var(--slide-text-muted))]"> — {x.d}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[3px] mb-[6px]">
          {lights.map((l) => (
            <div key={l.c} className={`rounded-[4px] px-[5px] py-[4px] border ${toneCls(l.tone)}`}>
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{l.c} · {l.n}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{l.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Худший ответ — не «нет». Худший — «может быть» на три месяца: занимает голову, календарь и создаёт иллюзию, что у тебя есть продажи.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Квалификация · светофор сделки
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Это сделка — <span className="text-[hsl(var(--slide-gold))]">или просто хороший разговор?</span>
      </h2>
      <div className="space-y-[8px] max-w-[1700px] mb-[20px]">
        {signs.map((x, i) => (
          <div key={x.s} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[11px] flex items-baseline gap-[16px]">
            <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{i + 1}</span>
            <span className="text-[22px] font-bold text-[hsl(var(--slide-text))] w-[520px] shrink-0">{x.s}</span>
            <span className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{x.d}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px] mb-[18px]">
        {lights.map((l) => (
          <div key={l.c} className={`rounded-[10px] px-[24px] py-[16px] border ${toneCls(l.tone)}`}>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{l.c} · {l.n} из 5</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{l.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Отказывать быстро — это навык. Худший ответ не «нет», а «может быть» на три месяца: оно занимает голову, календарь и создаёт иллюзию, что у тебя есть продажи.
        </p>
      </div>
    </div>
  );
}
