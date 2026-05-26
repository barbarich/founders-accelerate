import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Заполни формулу для своего продукта", d: "[Продукт] помогает [узкий сегмент] достичь [результат] через [механизм], в отличие от [альтернатива]. Одна фраза, до 30 слов." },
  { n: "2", t: "Прогони через два теста", d: "Читается за 10–15 секунд и понятно с первого раза · конкурент не может сказать про себя то же самое. Если хоть один тест провалился — переписывай сейчас." },
  { n: "3", t: "Запиши итог в чат", d: "Скидываем в общий чат финальную формулу. Группа читает, ищет слабые места — а не хвалит." },
];

export default function L12Slide08Workshop1() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Воркшоп 1 · 25 минут · соло + шеринг
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Позиционирование своего продукта <span className="text-[hsl(var(--slide-gold))]">— сейчас</span>
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          10 минут пишешь соло · 15 минут разбор каждого в группе.
        </p>
        <div className="space-y-[5px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[8px] mb-[2px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
          На выходе: финальная формула, которая пройдёт во все будущие маркетинговые касания.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-end justify-between mb-[24px] max-w-[1700px]">
        <div>
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
            Воркшоп 1 · 25 минут
          </p>
          <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
            Позиционирование твоего продукта — <span className="text-[hsl(var(--slide-gold))]">сейчас</span>
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[6px]">Тайминг</p>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">10 мин соло<br/>15 мин шеринг в группе</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px] mb-[20px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <div className="flex items-baseline gap-[14px] mb-[8px]">
              <span className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[54px]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">На выходе: </span>
          финальная формула, которая пойдёт во все будущие маркетинговые касания — лендинг, реклама, cold email, посты.
        </p>
      </div>
    </div>
  );
}
