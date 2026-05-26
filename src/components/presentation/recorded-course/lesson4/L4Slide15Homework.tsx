import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  {
    num: "1",
    title: "Работающий MVP",
    desc: "Ваш продукт уже решает одну конкретную проблему от начала до конца. Его можно показать, им можно пользоваться, за него можно платить.",
    checklist: [
      "Один сценарий работает полностью — пользователь получает результат",
      "Авторизация подключена (Google / email)",
      "CTA на лендинге ведёт в продукт",
    ],
  },
  {
    num: "2",
    title: "Лендинг, готовый к трафику",
    desc: "8 блоков на месте. Человек заходит — за 5 секунд понимает что это, для кого, и что делать дальше.",
    checklist: [
      "Все 8 блоков: hero, social proof, боли, решение, как работает, отзывы, CTA, FAQ",
      "Мобильная версия проверена",
      "GA + Facebook Pixel + Hotjar подключены",
    ],
  },
  {
    num: "3",
    title: "Первый трафик и реальные пользователи",
    desc: "Не «показать 5 друзьям». Написать посты в соцсетях, отправить в группы и паблики. Пригласить реальных людей попробовать продукт.",
    checklist: [
      "Пост в LinkedIn / Facebook / Telegram — «Я запускаю [продукт], попробуйте бесплатно»",
      "Сообщение в 3+ релевантных группах / пабликах",
      "Специальные условия для первых пользователей (бесплатно / скидка / ранний доступ)",
      "Собрать обратную связь: что непонятно, что зацепило, вернулись ли",
    ],
  },
  {
    num: "4",
    title: "Демо на Встрече 4 — 5 минут",
    desc: "Встреча 4 = ДЕМО-ДЕНЬ. Каждый участник показывает свой продукт группе.",
    checklist: [
      "Показать продукт вживую — как работает, какую проблему решает",
      "Показать лендинг — как выглядит, какой CTA",
      "Показать метрики: сколько зашло, откуда, что делали (GA / Mixpanel / Hotjar)",
      "Что написали, где опубликовали, какая реакция",
    ],
  },
];

export default function L4Slide15Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Задание на неделю
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          4 задания к демо-дню
        </h2>
        <div className="space-y-[6px]">
          {tasks.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-center gap-[6px] mb-[3px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
                <span className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{t.title}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[3px]">{t.desc}</p>
              {t.checklist.map((c, j) => (
                <div key={j} className="flex items-start gap-[4px]">
                  <span className="text-[7px] text-[hsl(var(--slide-gold))] mt-[1px]">☐</span>
                  <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{c}</p>
                </div>
              ))}
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
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">
        4 задания к демо-дню
      </h2>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1300px]">
        {tasks.map((t, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[22px]">
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[42px] h-[42px] flex items-center justify-center rounded-full font-bold">
                {t.num}
              </span>
              <h3 className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{t.title}</h3>
            </div>
            <div className="space-y-[10px]">
              {t.checklist.map((c, j) => (
                <div key={j} className="flex items-start gap-[10px]">
                  <div className="w-[18px] h-[18px] border-2 border-[hsl(var(--slide-gold)/0.3)] rounded-[3px] shrink-0 mt-[3px]" />
                  <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
