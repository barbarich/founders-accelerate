import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { t: "Клиент = герой", d: "Не ты. Клиент — главное действующее лицо истории. Ты — проводник, как Гэндальф для Фродо. Твоя задача — помочь ему пройти путь." },
  { t: "Конфликт = боль", d: "Что мешает клиенту? Конкретная фрустрация, ошибка, потеря. Чем острее боль — тем сильнее история." },
  { t: "Трансформация = до/после", d: "Что изменилось. Не «фича X», а «теперь клиент может Y». До: запутался. После: уверен. До: тратит 5 часов. После: 15 минут." },
  { t: "Деталь = доверие", d: "«Купил в 14:32 во вторник, сделал первое действие за 4 минуты, к пятнице окупил подписку» побеждает «много пользователей довольны»." },
];

export default function L9SlideStoryArc() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Анатомия сторителлинга · 4 элемента
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Из чего состоит хорошая история
        </h2>
        <div className="space-y-[8px]">
          {parts.map((p) => (
            <div key={p.t} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[10px] py-[6px]">
              <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{p.t}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Анатомия сторителлинга · 4 элемента
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Из чего состоит хорошая история
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1800px]">
        {parts.map((p) => (
          <div key={p.t} className="border-l-[4px] border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)] pl-[28px] py-[16px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{p.t}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
