import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  "1. Что нового получит читатель/юзер из этого сообщения?",
  "2. Это сообщение про него — или про меня?",
  "3. Есть ли одна конкретная причина открыть прямо сейчас?",
  "4. Что должно произойти после клика? (одно действие, не три)",
  "5. Как это сообщение продвигает его петлю на 1 шаг?",
  "6. Если он проигнорирует — что я пойму и что поменяю?",
  "7. Я бы сам отправил это другу? (если нет — переписать)",
];

export default function M8Slide22Checklist() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Чек-лист · 7 вопросов
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Перед любым push или email.
        </h2>
        <div className="space-y-[5px]">
          {questions.map((q) => (
            <div key={q} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">{q}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[8px]">
          Хоть один ответ «не знаю» — не отправляй.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Чек-лист · 7 вопросов
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Перед любым push или email — спроси себя:
      </h2>
      <div className="grid grid-cols-2 gap-[14px] max-w-[1500px]">
        {questions.map((q) => (
          <div key={q} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[16px]">
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">{q}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold mt-[24px] max-w-[1500px] leading-[1.4]">
        Хоть один ответ «не знаю» — не отправляй. Дороже отписка, чем пауза.
      </p>
    </div>
  );
}