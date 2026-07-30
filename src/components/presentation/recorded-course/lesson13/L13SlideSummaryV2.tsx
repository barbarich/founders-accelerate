import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Считай назад от денег",
    body: "Цель месяца → сколько сделок → сколько встреч → сколько сообщений в день. Без этой цепочки продажи — лотерея, и ты не знаешь, много ты сделал на этой неделе или мало.",
  },
  {
    num: "2",
    title: "Сделка без даты следующего шага — не сделка",
    body: "Дату назначаешь, пока вы вместе на звонке. Нет движения 14 дней — письмо «закрываю у себя» или архив. Пятница, 30 минут: у скольких сделок нет даты.",
  },
  {
    num: "3",
    title: "Один контакт в компании = мёртвая сделка",
    body: "Спроси «кто ещё будет участвовать в решении» на первом звонке, а не в конце. Половина сделок умирает из-за человека, который появился последним.",
  },
  {
    num: "4",
    title: "Главный конкурент — «ничего не делать»",
    body: "Посчитай цену бездействия в его деньгах, привяжись к его дате, уменьши первый шаг до 30 дней. Нет ответа «почему сейчас» — сделки нет.",
  },
  {
    num: "5",
    title: "Автоматизируй бумажную работу, а не разговор",
    body: "Список, напоминания, заметки со звонка, черновики писем, разбор пайплайна — машине. Первое сообщение, возражение и звонок — только ты.",
  },
];

export default function L13SlideSummaryV2() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Что унести из этого урока
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
        </h2>
        <div className="space-y-[4px]">
          {insights.map((i) => (
            <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{i.num}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{i.title}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Что унести из этого урока
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
      </h2>
      <div className="space-y-[11px] max-w-[1700px] mb-[20px]">
        {insights.map((i) => (
          <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[26px] py-[14px] flex items-start gap-[18px]">
            <span className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{i.num}</span>
            <div className="flex-1">
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{i.title}</p>
              <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{i.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1700px]">
        <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          До урока 14 — завести таблицу пайплайна и поставить дату следующего шага каждой сделке.
        </p>
      </div>
    </div>
  );
}
