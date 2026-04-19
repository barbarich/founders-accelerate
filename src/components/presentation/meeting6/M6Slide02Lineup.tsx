import { useIsMobile } from "@/hooks/use-mobile";

const rows = [
  { name: "Laura", product: "QA/RA assistant", track: "Собрать первый продуктовый экран" },
  { name: "Mila", product: "Hobbix", track: "Продуманный флоу после auth → ценность" },
  { name: "Vlad", product: "Выбор идеи + первый экран", track: "Зафиксировать идею и собрать функц. экран" },
  { name: "Lea", product: "Default She", track: "Выбрать категорию → флоу до Aha" },
  { name: "Inna + Aleksandra", product: "Dira.click", track: "Провалидировать флоу с ИИ → Aha" },
];

export default function M6Slide02Lineup() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Расклад на вечер
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          5 фаундеров. 5 продуктовых точек.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          Лендинги у всех сделаны ещё на M3. Сегодня работаем внутри продукта — не на обложке.
        </p>
        <div className="space-y-[5px]">
          {rows.map((r) => (
            <div key={r.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline justify-between gap-[6px] mb-[2px]">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{r.name}</p>
                <p className="text-[9px] text-[hsl(var(--slide-gold))]">{r.product}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.35]">→ {r.track}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Расклад на вечер
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px]">
        5 фаундеров. 5 продуктовых точек.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[36px] max-w-[1400px]">
        Лендинги у всех сделаны ещё на M3. Сегодня работаем внутри продукта — не на обложке.
      </p>

      <div className="max-w-[1500px] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] overflow-hidden">
        <div className="grid grid-cols-[260px_320px_1fr] gap-[24px] px-[28px] py-[14px] bg-[hsl(var(--slide-bg-alt))] border-b border-[hsl(var(--slide-border)/0.3)]">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))]">Фаундер</p>
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))]">Продукт</p>
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))]">Задача на вечер</p>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.name}
            className={`grid grid-cols-[260px_320px_1fr] gap-[24px] px-[28px] py-[16px] ${i !== rows.length - 1 ? "border-b border-[hsl(var(--slide-border)/0.15)]" : ""}`}
          >
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{r.name}</p>
            <p className="text-[19px] text-[hsl(var(--slide-gold))]">{r.product}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.35]">→ {r.track}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
