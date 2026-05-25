import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { n: "1", t: "ОДИН use-case из discovery", d: "Не tour продукта. Один сценарий, который бьёт в конкретную боль из его ответа на вопрос #1. «Ты сказал X. Смотри как это решается у нас.»" },
  { n: "2", t: "Реальные данные, не demo data", d: "Готовь sandbox с данными похожей на него компании. Demo data = «мы не работали с такими как ты»." },
  { n: "3", t: "Цифра в начале, цифра в конце", d: "«Компания типа твоей экономит N часов / $X в месяц». Если нет кейса — скажи «один из ранних клиентов сэкономил». Цифра привязывает." },
  { n: "4", t: "Stop after first 'вау'", d: "Не добавляй ещё 5 фич. Первый «вау» — момент когда переходишь к цене и next step. Каждая лишняя фича размывает фокус." },
  { n: "5", t: "Цена озвучивается в конце, не в середине", d: "Если он спрашивает раньше — «дойдём через 5 минут, чтобы вы поняли value, а не цифру в вакууме»." },
  { n: "6", t: "Демо записано — и отправлено champion'у", d: "Loom-запись звонка. Champion использует её чтобы продать тебя внутри. Без записи он перескажет неправильно." },
];

export default function M11Slide12DemoThatCloses() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Demo that closes · 6 правил
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Один use-case из discovery, <span className="text-[hsl(var(--slide-gold))]">не tour продукта</span>
        </h2>
        <div className="space-y-[3px]">
          {rules.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Demo that closes · 6 правил
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Один use-case из discovery, <span className="text-[hsl(var(--slide-gold))]">не tour продукта</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {rules.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[14px]">
            <div className="flex items-baseline gap-[14px] mb-[5px]">
              <span className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5] ml-[46px]">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
