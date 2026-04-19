import { useIsMobile } from "@/hooks/use-mobile";

const order = [
  { num: "1", name: "Laura", note: "Быстрый promise-screen → задаёт темп" },
  { num: "2", name: "Mila", note: "Живой аудит 60 сек на реальном продукте" },
  { num: "3", name: "Vlad", note: "Заходит после двух образцов — фиксация идеи" },
  { num: "4", name: "Lea", note: "Переписка Hero, не код" },
  { num: "5", name: "Inna + Aleksandra", note: "Глубокая доработка экрана Dira" },
];

export default function M6Slide12Workshop() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Как работаем
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Параллельно.<br />Я переключаюсь.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Каждый открывает свою задачу со слайда и начинает. Я подключаюсь по порядку.
        </p>
        <div className="space-y-[4px]">
          {order.map((o) => (
            <div key={o.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[5px] flex items-center gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold shrink-0">{o.num}</span>
              <div>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{o.name}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{o.note}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Не ждёшь своей очереди — работаешь. Я прихожу к тебе.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Как работаем
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px]">
        Параллельно. Я переключаюсь.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1300px]">
        Каждый открывает свой слайд и начинает работу. Я подключаюсь к вам в этом порядке.
      </p>

      <div className="max-w-[1500px] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] overflow-hidden mb-[24px]">
        {order.map((o, i) => (
          <div
            key={o.num}
            className={`grid grid-cols-[80px_300px_1fr] gap-[24px] px-[28px] py-[16px] items-center ${i !== order.length - 1 ? "border-b border-[hsl(var(--slide-border)/0.15)]" : ""}`}
          >
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold">{o.num}</span>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{o.name}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{o.note}</p>
          </div>
        ))}
      </div>

      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px]">
        Не ждёшь своей очереди — работаешь. Я прихожу к тебе.
      </p>
    </div>
  );
}
