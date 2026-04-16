import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  {
    num: "1",
    title: "Core-сценарий работает на своём домене",
    pass: "URL открывается. Core-flow проходится за 60 сек. Домен свой, не *.vercel.app.",
    how: [
      "Проект в Claude Code по P1",
      "Таблицы в Supabase — все с RLS",
      "Деплой на Vercel, домен через Cloudflare",
    ],
  },
  {
    num: "2",
    title: "Пост о продукте опубликован",
    pass: "Ссылка на публикацию в LinkedIn или X. По шаблону 180 слов / 4 абзаца.",
    how: [
      "Через промпт S1, но 1-я строка — своими словами",
      "0 стоп-слов из списка",
      "Первое слово НЕ «Я»/«Мы»/«Excited»",
    ],
  },
  {
    num: "3",
    title: "Видео 30 сек снято и выложено",
    pass: "Ссылка на видео. Лицо в кадре. Один дубль. Текст-overlay есть.",
    how: [
      "Хук — тот же, что в посте (один мессидж, два медиа)",
      "Один CTA в конце, не три",
      "Выложено там же, где пост",
    ],
  },
];

export default function M5Slide21Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Задание на неделю
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          3 задачи. На Неделю 6 приносишь 3 ссылки.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Без ссылок — нечего тестировать, нечего обсуждать. Встреча превратится в теорию.
        </p>
        <div className="space-y-[5px]">
          {tasks.map((t) => (
            <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-center gap-[6px] mb-[3px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.title}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-gold))] leading-[1.35] mb-[3px]">✓ {t.pass}</p>
              <div className="space-y-[1px]">
                {t.how.map((c, j) => (
                  <div key={j} className="flex items-start gap-[4px]">
                    <span className="text-[6.5px] text-[hsl(var(--slide-gold)/0.6)] mt-[1px]">→</span>
                    <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{c}</p>
                  </div>
                ))}
              </div>
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
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        3 задачи. На Неделю 6 приносишь 3 ссылки.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1300px]">
        Без ссылок — нечего тестировать, нечего обсуждать. Встреча превратится в теорию.
      </p>

      <div className="grid grid-cols-3 gap-[20px] max-w-[1500px]">
        {tasks.map((t) => (
          <div key={t.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[24px] py-[20px]">
            <div className="flex items-center gap-[14px] mb-[10px]">
              <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[34px] h-[34px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
              <h3 className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{t.title}</h3>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-gold))] leading-[1.45] mb-[14px]">✓ Сделано = {t.pass}</p>
            <div className="space-y-[6px] border-t border-[hsl(var(--slide-border)/0.3)] pt-[10px]">
              {t.how.map((c, j) => (
                <div key={j} className="flex items-start gap-[8px]">
                  <span className="text-[13px] text-[hsl(var(--slide-gold)/0.7)] mt-[1px]">→</span>
                  <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
