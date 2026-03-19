import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide10FourTests() {
  const tests = [
    { num: "1", icon: "⏱️", title: "5-секундный тест", desc: "Покажите лендинг незнакомому человеку на 5 секунд. Спросите: что это? Для кого? Если не ответил — позиционирование не работает." },
    { num: "2", icon: "👩‍🦳", title: "Мама-тест", desc: "Расскажите маме (или другу не из IT) одним предложением. Если переспрашивает — слишком сложно." },
    { num: "3", icon: "🖥️", title: "Лендинг-тест", desc: "Поставьте позиционирование заголовком на лендинг. Если bounce rate выше 70% — переписывайте." },
    { num: "4", icon: "📱", title: "Тест в мессенджере", desc: "Отправьте позиционирование в чат 5 знакомым из ЦА. Считайте: сколько ответили «расскажи подробнее»?" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Позиционирование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          4 теста: работает или нет
        </h2>
        <div className="space-y-[8px]">
          {tests.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="text-[14px]">{t.icon}</span>
                <p className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{t.title}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Позиционирование</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">4 теста: работает или нет</h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1100px]">
        {tests.map((t, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[20px]">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <span className="text-[28px]">{t.icon}</span>
              <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))]">{t.title}</p>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
