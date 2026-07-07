import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  {
    num: "1",
    title: "Первые продажи через 3F + окружение",
    desc: "Расскажи и покажи продукт 20 людям из окружения: друзья, семья, знакомые знакомых. Демо → реакция → продажа.",
    checklist: [
      "Скажи, что продукт в разработке / финальной стадии — покажи демо",
      "Цель — первые commit'ы: B2B ≥ 3 контракта, B2C ≥ 20 предоплат",
      "Запиши реакции: что зацепило, за что готовы платить",
    ],
  },
  {
    num: "2",
    title: "Первый пост-история о продукте",
    desc: "Опубликовать пост в LinkedIn, Facebook или Telegram. Расскажи историю: зачем делаешь, для кого, что уже работает.",
    checklist: [
      "Структура: хук → сцена с деталью → инсайт → CTA",
      "Клиент — герой, конфликт = его боль, показать трансформацию",
      "Репостнуть в 3+ релевантных группах",
    ],
  },
  {
    num: "3",
    title: "Показать продукт 10 новым людям",
    desc: "Не друзьям и не коллегам. Реальные потенциальные пользователи из вашей целевой аудитории.",
    checklist: [
      "Собрать обратную связь: что непонятно, что зацепило",
      "Вернулись ли? Порекомендовали бы?",
      "Записать 3 главных инсайта",
    ],
  },
  {
    num: "4",
    title: "Список 50 мест",
    desc: "Где живёт ваша аудитория: группы, каналы, форумы, рассылки, сообщества.",
    checklist: [
      "Telegram, LinkedIn, Facebook, Reddit, форумы",
      "Группы конкурентов, комментарии лидеров мнений",
      "Приоритизировать: где больше всего ваших клиентов",
    ],
  },
];

export default function L5Slide16Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Задание на неделю
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          4 задания к Уроку 6
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
                  <span className="text-[7px] text-[hsl(var(--slide-gold))] mt-[1px]">&#9744;</span>
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
        4 задания к Уроку 6
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
