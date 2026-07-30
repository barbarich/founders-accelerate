import { useIsMobile } from "@/hooks/use-mobile";

const terms = [
  { w: "Лид", d: "человек или компания, которые могут купить. Пока просто имя в таблице." },
  { w: "Пайплайн", d: "все твои сделки в работе, разложенные по этапам. По-русски — таблица сделок." },
  { w: "Квалификация", d: "проверка: это правда сделка или просто интересный разговор." },
  { w: "Цикл сделки", d: "сколько дней проходит от первого сообщения до денег на счёте." },
  { w: "Фоллоу-ап", d: "продолжение разговора после встречи. Письмо или сообщение с напоминанием и следующим шагом." },
  { w: "Конверсия", d: "какая доля переходит на следующий этап. Из 100 написал — 25 ответили, это 25%." },
  { w: "Демо", d: "показ продукта под конкретную задачу клиента. Не экскурсия по кнопкам." },
];

export default function L13SlideGlossary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Переводчик слов
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          7 слов, которые я буду говорить — <span className="text-[hsl(var(--slide-gold))]">и что они значат</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.4]">
          Их придумали не для красоты — они короче. Но клиенту эти слова не говорят никогда.
        </p>
        <div className="space-y-[3px]">
          {terms.map((t) => (
            <div key={t.w} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px]">
              <p className="text-[9px] leading-[1.4]">
                <span className="font-bold text-[hsl(var(--slide-gold))]">{t.w}</span>
                <span className="text-[hsl(var(--slide-text-muted))]"> — {t.d}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Переводчик слов
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        7 слов, которые я буду говорить — <span className="text-[hsl(var(--slide-gold))]">и что они значат</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Эти слова придумали не для красоты — они просто короче. Но клиенту их не говорят никогда: с ним — человеческим языком.
      </p>
      <div className="space-y-[10px] max-w-[1700px]">
        {terms.map((t) => (
          <div key={t.w} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[26px] py-[13px] flex items-baseline gap-[18px]">
            <span className="text-[24px] font-bold text-[hsl(var(--slide-gold))] w-[190px] shrink-0">{t.w}</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
