import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { n: "1", t: "Определи свою точку: А, Б или В", d: "Одну. Весь остальной план читаешь только через неё. Курс заново не проходишь - возвращаешься к тем урокам, на которые указывает твоя буква" },
  { n: "2", t: "Закрой список «что на руках»", d: "Выпиши, чего из 12 пунктов у тебя реально нет, и закрой это в первую неделю. Новое не начинаешь, пока не закрыл" },
  { n: "3", t: "Заведи таблицу под своё число и собери 10 имён", d: "Число - разговоры, оплаты или стоимость клиента. Имена - клиенты, партнёры, креаторы или треды, смотря какой канал выбрал в уроке 16" },
  { n: "4", t: "Поставь в календарь три блока", d: "Понедельник 30 минут, каждый день час, пятница 30 минут. Именно в календарь, а не в голову" },
  { n: "5", t: "Первое касание за 48 часов", d: "Одно: письмо, разговор или комментарий. Сегодня или завтра. И напиши мне через 30 дней, что получилось - с цифрами" },
];

export default function L17SlideHomework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Последнее задание курса
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[7px]">
          5 пунктов - и ты в работе
        </h2>
        <div className="space-y-[4px]">
          {items.map((i) => (
            <div key={i.n} className="flex items-start gap-[7px]">
              <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[16px] h-[16px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{i.n}</span>
              <div className="flex-1">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{i.t}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Последнее задание курса
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.01em]">
        5 пунктов - <span className="text-[hsl(var(--slide-gold))]">и ты в работе</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-[36px] gap-y-[14px] max-w-[1550px]">
        {items.map((i) => (
          <div key={i.n} className="flex items-start gap-[16px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[38px] h-[38px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{i.n}</span>
            <div className="flex-1">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{i.t}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
