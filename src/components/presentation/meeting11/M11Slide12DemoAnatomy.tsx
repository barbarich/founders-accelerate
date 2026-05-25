import { useIsMobile } from "@/hooks/use-mobile";

const phases = [
  {
    n: "1",
    min: "0:00 — 5:00",
    name: "Discovery",
    goal: "Вытащить факты, не мнения",
    questions: [
      "Как сейчас [конкретный процесс который решает твой продукт]? Покажи 1 пример с прошлой недели.",
      "Сколько времени / денег это занимает в месяц?",
      "Что ты пробовал чтобы это исправить? Почему не сработало?",
      "Если бы это решилось завтра — что в твоей работе изменилось бы?",
      "Кто кроме тебя должен сказать «да», чтобы мы начали работать?",
    ],
  },
  {
    n: "2",
    min: "5:00 — 10:00",
    name: "Pitch — ОДИН use-case",
    goal: "Не тур продукта. Один сценарий, который бьёт в его боль из discovery.",
    questions: [
      "Не «вот что мы умеем». А «ты сказал X. Смотри как мы это решаем».",
      "Покажи РЕАЛЬНОЕ решение его задачи, не demo data.",
      "Озвучь цифру: «компания типа твоей экономит N часов / $X в месяц».",
      "Стоп после первого «вау». Не добавляй ещё 5 фич.",
    ],
  },
  {
    n: "3",
    min: "10:00 — 15:00",
    name: "Next step",
    goal: "Book calendar, не «подумайте»",
    questions: [
      "«Я предлагаю free trial на 14 дней. Я сам тебя онбордил во вторник 14:00 — кидаю инвайт?»",
      "Если «надо подумать» → «давай я кину 2 слота на следующую неделю — если за это время ты решишь нет, отменим без проблем».",
      "Никогда не заканчивай звонок без следующей даты в календаре.",
    ],
  },
];

export default function M11Slide12DemoAnatomy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Демо · 15 минут
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Анатомия + <span className="text-[hsl(var(--slide-gold))]">5 discovery-вопросов дословно</span>
        </h2>
        <div className="space-y-[4px]">
          {phases.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[4px] mb-[1px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{p.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{p.name}</span>
                <span className="text-[6.5px] text-[hsl(var(--slide-text-muted))]">· {p.min}</span>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-gold))] mb-[1px] ml-[14px]">Цель: {p.goal}</p>
              {p.questions.map((q, i) => (
                <p key={i} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">· {q}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Демо · 15 минут
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Анатомия + <span className="text-[hsl(var(--slide-gold))]">5 discovery-вопросов дословно</span>
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px]">
        {phases.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <div className="flex items-baseline gap-[10px] mb-[4px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <div>
                <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.name}</p>
                <p className="text-[11px] text-[hsl(var(--slide-text-muted))]">{p.min}</p>
              </div>
            </div>
            <p className="text-[13px] text-[hsl(var(--slide-gold))] font-semibold mb-[8px] ml-[40px]">Цель: {p.goal}</p>
            {p.questions.map((q, i) => (
              <p key={i} className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[40px] mb-[3px]">· {q}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
