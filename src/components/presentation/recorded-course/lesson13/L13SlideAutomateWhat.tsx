import { useIsMobile } from "@/hooks/use-mobile";

const yes = [
  "Сбор списка компаний и контактов",
  "Напоминания и задачи по сделкам",
  "Заметки после звонка и обновление таблицы",
  "Черновики писем и фоллоу-апов",
  "Еженедельный отчёт: где сделки застряли",
  "Отслеживание сигналов у твоих компаний",
];

const no = [
  "Первое сообщение важному клиенту",
  "Ответ на возражение",
  "Сам звонок и показ продукта",
  "Обещание сроков и условий",
  "Извинение, когда ты накосячил",
];

export default function L13SlideAutomateWhat() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Автоматизация
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Что автоматизировать — <span className="text-[hsl(var(--slide-gold))]">и что никогда</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px] mb-[7px]">
          <div className="bg-[hsl(142_20%_10%)] border border-[hsl(142_50%_40%/0.35)] rounded-[5px] px-[8px] py-[6px]">
            <p className="text-[8.5px] font-bold text-[hsl(142_50%_60%)] mb-[3px]">✓ Автоматизируй</p>
            {yes.map((y) => (
              <p key={y} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">· {y}</p>
            ))}
          </div>
          <div className="bg-[hsl(0_20%_12%)] border border-[hsl(0_60%_40%/0.3)] rounded-[5px] px-[8px] py-[6px]">
            <p className="text-[8.5px] font-bold text-[hsl(0_60%_65%)] mb-[3px]">✗ Никогда</p>
            {no.map((n) => (
              <p key={n} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">· {n}</p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Автоматизация умножает то, что уже работает. Сначала 20–30 сообщений руками — понять, на что отвечают. И только потом инструмент.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Автоматизация
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Что автоматизировать — <span className="text-[hsl(var(--slide-gold))]">и что никогда</span>
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1700px] mb-[24px]">
        <div className="bg-[hsl(142_20%_10%)] border border-[hsl(142_50%_40%/0.35)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[28px] font-bold text-[hsl(142_50%_60%)] mb-[12px]">✓ Автоматизируй</p>
          {yes.map((y) => (
            <p key={y} className="text-[21px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">· {y}</p>
          ))}
        </div>
        <div className="bg-[hsl(0_20%_12%)] border border-[hsl(0_60%_40%/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[28px] font-bold text-[hsl(0_60%_65%)] mb-[12px]">✗ Никогда не автоматизируй</p>
          {no.map((n) => (
            <p key={n} className="text-[21px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">· {n}</p>
          ))}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Автоматизация умножает то, что уже работает. Сначала 20–30 сообщений руками — понять, на что вообще отвечают. И только потом инструмент.
        </p>
      </div>
    </div>
  );
}
