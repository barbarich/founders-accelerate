import { useIsMobile } from "@/hooks/use-mobile";

// FOM6-копия M11Slide12DemoThatCloses. Отличие — добавлен блок про материал,
// который продаёт без тебя (формулировка Михаэля 2026-06-17): champion почти
// никогда не ЛПР; длинное демо могут не досмотреть, а короткий заготовленный
// материал под его кейс — перешлют, и он должен продавать сам.
const rules = [
  { n: "1", t: "ОДИН use-case из discovery", d: "Не tour продукта. Один сценарий, который бьёт в конкретную боль из его ответа на вопрос #1. «Ты сказал X. Смотри как это решается у нас.»" },
  { n: "2", t: "Реальные данные, не demo data", d: "Готовь sandbox с данными похожей на него компании. Demo data = «мы не работали с такими как ты»." },
  { n: "3", t: "Цифра в начале, цифра в конце", d: "«Компания типа твоей экономит N часов / $X в месяц». Если нет кейса — скажи «один из ранних клиентов сэкономил». Цифра привязывает." },
  { n: "4", t: "Stop after first 'вау'", d: "Не добавляй ещё 5 фич. Первый «вау» — момент когда переходишь к цене и next step. Каждая лишняя фича размывает фокус." },
  { n: "5", t: "Цена озвучивается в конце, не в середине", d: "Если он спрашивает раньше — «дойдём через 5 минут, чтобы вы поняли value, а не цифру в вакууме»." },
  { n: "6", t: "Демо записано — и отправлено champion'у", d: "Loom-запись звонка. Champion использует её чтобы продать тебя внутри. Без записи он перескажет неправильно." },
];

export default function FOM6SlideDemoClose() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Demo that closes · 6 правил
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Один use-case из discovery, <span className="text-[hsl(var(--slide-gold))]">не tour продукта</span>
        </h2>
        <div className="space-y-[3px] mb-[5px]">
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
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">+ Материал, который продаёт без тебя</p>
          <p className="text-[7px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
            Тот, с кем ты говорил, почти никогда не ЛПР — он пересказывает решение тому, кто платит, и неточно. Длинное демо могут не досмотреть, а короткий заготовленный 1-страничник под его кейс — перешлют. Сделай его заранее: проблема его словами → результат в цифрах → как работает в 3 шага → цена и next step. Он должен продавать сам.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Demo that closes · 6 правил + материал на вынос
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        Один use-case из discovery, <span className="text-[hsl(var(--slide-gold))]">не tour продукта</span>
      </h2>
      <div className="grid grid-cols-2 gap-[14px] mb-[14px] max-w-[1700px]">
        {rules.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[11px]">
            <div className="flex items-baseline gap-[12px] mb-[3px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <span className="text-[19px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[40px]">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[14px] max-w-[1700px]">
        <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[5px]">+ Материал, который продаёт без тебя</p>
        <p className="text-[16px] text-[hsl(var(--slide-text)/0.92)] leading-[1.5]">
          Тот, с кем ты говорил, почти никогда не ЛПР — он пересказывает решение тому, кто платит, и неточно. Длинное демо могут не досмотреть, а короткий заготовленный материал под его кейс — перешлют. Сделай 1-страничник / мини-дек заранее: <span className="text-[hsl(var(--slide-gold))]">проблема его словами → результат в цифрах → как работает в 3 шага → цена и next step.</span> Он должен продавать сам, без тебя в комнате.
        </p>
      </div>
    </div>
  );
}
