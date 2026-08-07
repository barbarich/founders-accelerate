import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { n: "1", t: "Личная зацепка", d: "Факт про его бизнес, не комплимент" },
  { n: "2", t: "Польза без условий", d: "Что он получает БЕЗ обязательств" },
  { n: "3", t: "Кто ты", d: "1 строка, без истории продукта" },
  { n: "4", t: "Просьба с датой", d: "«15 минут в четверг», не «если интересно»" },
];

export default function L16SlidePitchAnatomy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[18px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Как продать партнёрство
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Анатомия первого сообщения · 4 строки
        </h2>
        <div className="grid grid-cols-2 gap-[6px] mb-[10px]">
          {parts.map((p) => (
            <div key={p.n} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[8px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-center gap-[5px] mb-[2px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] rounded-full flex items-center justify-center font-bold">{p.n}</span>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{p.t}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.3]">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="border border-red-500/25 rounded-[5px] px-[9px] py-[6px] bg-red-500/[0.04] mb-[6px]">
          <p className="text-[7.5px] uppercase tracking-[0.1em] text-red-400 font-bold mb-[2px]">Плохо</p>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4] italic">«Привет! У нас классный продукт, было бы круто партнёрство, дайте знать если интересно!»</p>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.06)]">
          <p className="text-[7.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Хорошо</p>
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] italic">«Заметил, вы настраиваете PMS 40+ отелям - многие потом спрашивают про revenue management. Мы поднимаем ADR на 8-12%, добавить нас в setup - 10 минут. Есть 15 минут в четверг?»</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[36px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Как продать партнёрство
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.01em]">
        Анатомия первого сообщения · <span className="text-[hsl(var(--slide-gold))]">4 строки</span>
      </h2>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1900px] mb-[26px]">
        {parts.map((p) => (
          <div key={p.n} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[18px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold mb-[10px]">{p.n}</span>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{p.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1900px]">
        <div className="border border-red-500/25 rounded-[12px] px-[24px] py-[18px] bg-red-500/[0.04]">
          <p className="text-[13px] uppercase tracking-[0.15em] text-red-400 font-bold mb-[8px]">Плохо · шаблон</p>
          <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] italic">«Привет! У нас классный продукт, было бы круто сделать партнёрство, дайте знать если интересно!»</p>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[18px] bg-[hsl(var(--slide-gold)/0.06)]">
          <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Хорошо · конкретика</p>
          <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.5] italic">«Заметил, что вы настраиваете PMS 40+ отелям - многие потом спрашивают про revenue management. Мы поднимаем ADR на 8-12%, добавить нас в стандартный setup - 10 минут. Есть 15 минут в четверг?»</p>
        </div>
      </div>
    </div>
  );
}
