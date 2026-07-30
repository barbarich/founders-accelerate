import { useIsMobile } from "@/hooks/use-mobile";

const sources = [
  {
    n: "1",
    t: "Кладбище старых лидов",
    d: "Те, кто когда-то ответил, но не купил. Самый дешёвый источник: они уже знают, кто ты. Раз в квартал — короткое письмо «у нас появилось вот это».",
  },
  {
    n: "2",
    t: "Клиенты твоих клиентов",
    d: "Рекомендации просят по расписанию, а не когда вспомнил. День 60 после сделки: «знаете троих в такой же роли? просто познакомьте».",
  },
  {
    n: "3",
    t: "Партнёры, у кого твой клиент уже есть",
    d: "Интеграторы, консультанты, соседние сервисы. Один партнёр даёт поток, а не одну сделку. Им ты платишь процентом, а не деньгами вперёд.",
  },
  {
    n: "4",
    t: "Живые события",
    d: "Одно правило: встречу назначаешь на месте, с открытым календарём. Договорились на месте — доходит 7 из 10. «Спишемся позже» — полтора из 10.",
  },
  {
    n: "5",
    t: "Сигналы",
    d: "Компания наняла человека на нужную роль, получила деньги, сменила систему, вышла в новую страну. Пишешь в момент, когда задача горит, а не «вообще».",
  },
];

export default function L13SlideLeadSources() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Откуда берутся лиды
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          5 источников, <span className="text-[hsl(var(--slide-gold))]">которые не заканчиваются</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Вопрос не «где сидит аудитория» — это было в уроке 10. Вопрос: что кладёт новое имя в твою таблицу каждую неделю.
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {sources.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">
            Один источник ведёшь до первых 10 сделок. Пять сразу = ноль везде.
          </p>
          <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            Первое касание — не одно письмо, а 4 за 14 дней: день 0 сообщение, день 3 письмо, день 7 короткое видео, день 14 напоминание через общего знакомого.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Откуда берутся лиды
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em]">
        5 источников, <span className="text-[hsl(var(--slide-gold))]">которые не заканчиваются</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1700px] leading-[1.45]">
        Вопрос не «где сидит аудитория» — это было в уроке 10. Вопрос сегодня: что кладёт новое имя в твою таблицу каждую неделю, без вдохновения.
      </p>
      <div className="space-y-[9px] max-w-[1700px] mb-[18px]">
        {sources.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[11px]">
            <div className="flex items-baseline gap-[14px] mb-[2px]">
              <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[40px]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[4px]">
          Один источник ведёшь до первых 10 сделок. Пять сразу = ноль везде.
        </p>
        <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          И первое касание — это не одно письмо, а 4 за 14 дней: день 0 — сообщение, день 3 — письмо, день 7 — короткое видео на 90 секунд, день 14 — напоминание через общего знакомого.
        </p>
      </div>
    </div>
  );
}
