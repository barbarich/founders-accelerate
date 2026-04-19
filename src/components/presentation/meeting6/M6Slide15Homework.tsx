import { useIsMobile } from "@/hooks/use-mobile";

const hw = [
  { name: "Laura", task: "10 QA/RA specialists из waitlist вошли, загрузили документ, получили первый ответ. Цифры: сколько дошли до ответа, сколько застряли на каком шаге. Плюс 3 цитаты про ответ (корректный? понятный? полезный?)." },
  { name: "Mila", task: "10 новых юзеров прошли первую сессию Hobbix. Сколько прошли без блоков. Где выпадают остальные (точка + причина). 3 коротких видеозаписи залипания или первой успешной сессии." },
  { name: "Vlad", task: "5 человек из аватара прошли первую сессию твоего продукта. Дошли ли до первого результата? Что делали, что было непонятно? Приносишь их слова, не пересказ — можно голосовыми." },
  { name: "Lea", task: "5 женщин из аватара прошли новую первую сессию Default She. Прошли ли до первого результата? Где выпали? Запись экрана 2-3 сессий (со звуком — пусть говорят вслух что думают)." },
  { name: "Inna + Aleksandra", task: "10 новых юзеров прошли переделанный экран Dira. Сравниваете drop-off до и после на этом конкретном экране — числа, не ощущения. Плюс короткая гипотеза: почему стало лучше/хуже." },
];

export default function M6Slide15Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Задание на неделю
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          5 человек — 5 задач.
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Общая метрика — проходимость первой сессии: сколько не застряли, где выпали остальные.
          На M7 приносишь числа и прямую речь юзеров. Не отчёт о том что сделал, а что они сказали.
        </p>
        <div className="space-y-[4px]">
          {hw.map((h) => (
            <div key={h.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2] mb-[1px]">{h.name}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">{h.task}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Задание на неделю
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        5 человек — 5 задач.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1500px] leading-[1.4]">
        Общая метрика — проходимость первой сессии: сколько не застряли, где выпали остальные. На M7 приносишь числа и прямую речь юзеров — не отчёт о том что сделал.
      </p>

      <div className="space-y-[12px] max-w-[1600px]">
        {hw.map((h) => (
          <div key={h.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[14px] grid grid-cols-[260px_1fr] gap-[24px] items-center">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2]">{h.name}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45]">{h.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
