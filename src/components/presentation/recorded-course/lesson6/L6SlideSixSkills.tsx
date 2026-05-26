import { useIsMobile } from "@/hooks/use-mobile";

const skills = [
  {
    num: "1",
    title: "Настроишь Claude один раз",
    body: "Он будет помнить твой проект, твой стиль, твои запреты. Не нужно объяснять с нуля каждый раз.",
  },
  {
    num: "2",
    title: "Будешь получать готовый план до того, как пишется код",
    body: "Видишь что Claude собирается сделать. Правишь план за 2 минуты. Не переделываешь код 2 часа.",
  },
  {
    num: "3",
    title: "Подключишь Claude к Stripe и Supabase",
    body: "Платежи и база данных настраиваются за один промпт. Без UI, без копирования ID, без забытых полей.",
  },
  {
    num: "4",
    title: "Будешь использовать вторую модель для проверки",
    body: "План от Claude → отдаёшь Codex для ревью. Вторая модель ловит то, что первая пропустила.",
  },
  {
    num: "5",
    title: "Разблокируешь Claude когда он застрял",
    body: "3 простые техники когда Claude бежит по кругу. Знаешь что нажать, чтобы продолжить.",
  },
  {
    num: "6",
    title: "Прогонишь продукт по чек-листу перед запуском",
    body: "Один промпт — и Claude скажет что готово, а что забыл. Не запускаешь с дырами в безопасности.",
  },
];

export default function L6SlideSixSkills() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Что ты получишь после урока
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          <span className="text-[hsl(var(--slide-gold))]">6 навыков</span>, с которыми ты выйдешь
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Каждый блок урока даёт один конкретный навык. К концу — ты делаешь то, что раньше требовало команду.
        </p>
        <div className="space-y-[4px]">
          {skills.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[4px] flex items-start gap-[6px]">
              <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold shrink-0 mt-[1px]">{s.num}</span>
              <div>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.title}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Что ты получишь после урока
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        <span className="text-[hsl(var(--slide-gold))]">6 навыков</span>, с которыми ты выйдешь
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1500px] leading-[1.45]">
        Каждый блок урока даёт один конкретный навык. К концу — ты делаешь то, что раньше требовало команду разработчиков.
      </p>

      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px]">
        {skills.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px] flex flex-col">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[32px] h-[32px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{s.title}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[22px]">
        <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">В конце урока:</span> вернёшься к этому списку и отметишь галочкой каждый освоенный навык. Это твой чек-лист прогресса.
        </p>
      </div>
    </div>
  );
}
