import FOM5SlideBase from "./FOM5SlideBase";

const topics = [
  { tag: "Тема", text: "Продажи — как закрывать первые сделки. Финальная сессия программы." },
  { tag: "Что разбираем", text: "Путь от заявки до оплаты. Demo-звонок, который продаёт. Работа с возражениями. Первая цена и как её называть без стеснения." },
  { tag: "Что делаем вживую", text: "Пишем скрипт первого звонка / переписки под каждый продукт. Разбираем реальные заявки, которые придут с запущенной кампании." },
  { tag: "Что вы приносите", text: "Запущенная кампания + первые цифры (CPM/CTR/лиды). Теперь есть кому продавать — учимся доводить до денег." },
];

export default function FOM5SlideNextWeek() {
  return (
    <FOM5SlideBase
      slide={24}
      eyebrow="Что будет на С6"
      title="Через 7 дней — Продажи"
      subtitle="Трафик пошёл, заявки капают. С6 про то, как превратить их в деньги: demo-звонок, возражения, первая цена. Финал программы — выходим с первым клиентом."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {topics.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[220px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM5SlideBase>
  );
}
