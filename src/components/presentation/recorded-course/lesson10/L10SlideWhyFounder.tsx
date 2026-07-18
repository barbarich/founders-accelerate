import { useIsMobile } from "@/hooks/use-mobile";

const reasons = [
  {
    num: "1",
    title: "Никто не расскажет про продукт как ты",
    body: "Ты знаешь, зачем он существует и от какой боли спасает. Нанятый человек пересказывает по бумажке - и это слышно.",
  },
  {
    num: "2",
    title: "Доверие покупают у человека, не у бренда",
    body: "На старте у тебя нет ни репутации бренда, ни отзывов, ни кейсов. Есть только ты - лицо, история, честный разговор. Этого достаточно, чтобы продать.",
  },
  {
    num: "3",
    title: "Только ты закроешь возражение на лету",
    body: "Клиент сомневается - ты слышишь это в разговоре и отвечаешь тут же. Заодно узнаёшь, какие возражения вообще бывают. Позже из этого соберётся скрипт для продажников.",
  },
];

export default function L10SlideWhyFounder() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Почему именно фаундер
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Три вещи, которые <span className="text-[hsl(var(--slide-gold))]">умеешь только ты</span>
        </h2>
        <div className="space-y-[8px]">
          {reasons.map((r) => (
            <div key={r.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[3px]">{r.num}. {r.title}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Почему именно фаундер
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Три вещи, которые <span className="text-[hsl(var(--slide-gold))]">умеешь только ты</span>
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1800px]">
        {reasons.map((r) => (
          <div key={r.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[24px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold mb-[16px]">{r.num}</span>
            <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[12px]">{r.title}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
