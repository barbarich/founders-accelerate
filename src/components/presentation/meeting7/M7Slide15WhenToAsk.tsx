import { useIsMobile } from "@/hooks/use-mobile";

const groups = [
  {
    when: "До результата",
    rule: "Только если без этого продукт буквально не работает",
    items: ["Какой язык учим? — Duolingo", "Где ты находишься? — Карты"],
    color: "gold",
  },
  {
    when: "Сразу после результата",
    rule: "Когда юзер уже доволен и хочет продлить опыт",
    items: ["Email — чтобы сохранить", "Имя — чтобы персонализировать"],
    color: "muted",
  },
  {
    when: "Сильно позже",
    rule: "На 3-5 сессии, когда юзер инвестирован",
    items: ["Платёжные данные", "Команда / организация", "Подробные настройки"],
    color: "muted",
  },
];

export default function M7Slide15WhenToAsk() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Что и когда спрашивать
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Если без вопросов нельзя — задавай только нужное.
        </h2>
        <div className="space-y-[5px]">
          {groups.map((g, i) => (
            <div key={i} className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[6px] px-[10px] py-[6px] ${g.color === "gold" ? "border-[hsl(var(--slide-gold)/0.4)]" : "border-[hsl(var(--slide-gold)/0.15)]"}`}>
              <p className={`text-[9.5px] uppercase tracking-[0.1em] font-bold mb-[2px] ${g.color === "gold" ? "text-[hsl(var(--slide-gold))]" : "text-[hsl(var(--slide-text-muted))]"}`}>{g.when}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text))] italic leading-[1.35] mb-[3px]">{g.rule}</p>
              {g.items.map((it, j) => (
                <p key={j} className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">• {it}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Каждый вопрос до результата = шанс, что юзер уйдёт.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Что и когда спрашивать у юзера
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        Если без вопросов нельзя — задавай только то, без чего продукт не работает.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[24px]">
        {groups.map((g, i) => (
          <div key={i} className={`bg-[hsl(var(--slide-bg-alt))] border-[2px] rounded-[14px] px-[28px] py-[24px] ${g.color === "gold" ? "border-[hsl(var(--slide-gold)/0.5)]" : "border-[hsl(var(--slide-gold)/0.15)]"}`}>
            <p className={`text-[18px] uppercase tracking-[0.1em] font-bold mb-[10px] ${g.color === "gold" ? "text-[hsl(var(--slide-gold))]" : "text-[hsl(var(--slide-text-muted))]"}`}>{g.when}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text))] italic leading-[1.4] mb-[14px]">{g.rule}</p>
            <div className="space-y-[6px]">
              {g.items.map((it, j) => (
                <p key={j} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">• {it}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Каждый вопрос до результата = шанс, что юзер уйдёт. Каждый вопрос после результата — юзер инвестирован, ответит охотно.
      </p>
    </div>
  );
}
