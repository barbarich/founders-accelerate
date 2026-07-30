import { useIsMobile } from "@/hooks/use-mobile";

const days = [
  { d: "Понедельник", t: "2 часа · новые имена", body: "20 новых компаний в таблицу и первые сообщения. Неделя начинается с новых людей, иначе через месяц писать будет некому." },
  { d: "Вторник и четверг", t: "только звонки", body: "Ставь встречи подряд, одним блоком. Разговор между делами звучит как разговор между делами." },
  { d: "Среда", t: "фоллоу-апы", body: "Всем, кто не ответил, и всем, с кем говорил на прошлой неделе. Большинство сделок закрывается со второго-пятого касания, а не с первого." },
  { d: "Пятница", t: "30 минут · чистка таблицы", body: "У каждой сделки есть дата следующего шага? Нет — назначь или отправь в архив. Это единственная защита от вранья самому себе." },
  { d: "Каждый день", t: "30 минут · ответы", body: "Отвечай в течение дня. Интерес остывает за сутки: вчера человек думал о проблеме, сегодня у него уже другие дела." },
];

export default function L13SlideWeekRhythm() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Ритм недели
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[7px]">
          Продажи умирают не от плохих слов, а от <span className="text-[hsl(var(--slide-gold))]">«на этой неделе было некогда»</span>
        </h2>
        <div className="space-y-[3px] mb-[7px]">
          {days.map((x) => (
            <div key={x.d} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{x.d}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">· {x.t}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{x.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Два часа в день — это 40 часов в месяц. Этого хватает на первые 10 клиентов. Меньше — не хватает, и дело не в мотивации.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Ритм недели
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em] max-w-[1700px]">
        Продажи умирают не от плохих слов, а от <span className="text-[hsl(var(--slide-gold))]">«на этой неделе было некогда»</span>
      </h2>
      <div className="space-y-[10px] max-w-[1700px] mb-[22px]">
        {days.map((x) => (
          <div key={x.d} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[26px] py-[13px] flex items-baseline gap-[20px]">
            <span className="text-[22px] font-bold text-[hsl(var(--slide-gold))] w-[300px] shrink-0">{x.d}</span>
            <div className="flex-1">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{x.t}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{x.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.35]">
          Два часа в день — это 40 часов в месяц. Этого хватает на первые 10 клиентов. Меньше — не хватает, и дело не в мотивации.
        </p>
      </div>
    </div>
  );
}
