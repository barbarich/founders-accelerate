import { useIsMobile } from "@/hooks/use-mobile";

const council = [
  { role: "Финансист", asks: "«Во что это обойдётся и когда окупится?»" },
  { role: "Продуктовый", asks: "«Не усложнит ли это продукт для клиента?»" },
  { role: "Юрист", asks: "«Это вообще пройдёт в Европе?»" },
];

export default function L9Slide16Colleagues() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Механика, которая даёт качество
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[9px]">
          Один агент спорит сам с собой хуже, <span className="text-[hsl(var(--slide-gold))]">чем трое</span>.
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[8px]">
          Внутри агента прописываешь двух-трёх коллег - со своим опытом и своим интересом. Перед выдачей результата агент обязан прогнать решение через них.
        </p>
        <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[5px]">Пример состава для системы лояльности</p>
        <div className="space-y-[5px] mb-[8px]">
          {council.map((c) => (
            <div key={c.role} className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[10px] py-[5px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{c.role}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] italic">{c.asks}</p>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[8px]">
          Качество падает там, где некому возразить. Модель без оппонента выдаёт первое правдоподобное решение. Трое с разными интересами заставляют её защищать выбор.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Это и есть та часть, из-за которой результат отличается от <span className="text-[hsl(var(--slide-gold))]">«сгенерируй мне документ»</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Механика, которая даёт качество
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em] max-w-[1800px]">
        Один агент спорит сам с собой хуже, <span className="text-[hsl(var(--slide-gold))]">чем трое</span>.
      </h2>
      <p className="text-[21px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1800px] mb-[20px]">
        Внутри агента прописываешь двух-трёх коллег - со своим опытом и своим интересом. Перед выдачей результата агент обязан прогнать решение через них.
      </p>
      <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">Пример состава для системы лояльности</p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1800px] mb-[20px]">
        {council.map((c) => (
          <div key={c.role} className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[22px] py-[14px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{c.role}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] italic">{c.asks}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1800px] mb-[18px]">
        Качество падает там, где некому возразить. Модель без оппонента выдаёт первое правдоподобное решение. Трое с разными интересами заставляют её защищать выбор.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Это и есть та часть, из-за которой результат отличается от <span className="text-[hsl(var(--slide-gold))]">«сгенерируй мне документ»</span>.
        </p>
      </div>
    </div>
  );
}
