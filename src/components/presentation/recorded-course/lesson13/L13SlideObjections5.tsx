import { useIsMobile } from "@/hooks/use-mobile";

const objections = [
  {
    o: "«Это дорого»",
    a: "Не защищай цену — сравни с ценой бездействия. «Сейчас это стоит вам 8 часов в неделю — это примерно €X в месяц. Мы стоим €Y». Дальше молчи.",
  },
  {
    o: "«Надо подумать / посоветоваться»",
    a: "Согласись, но уточни: с кем именно и по какому вопросу? И сразу поставь дату следующего разговора, пока вы на связи.",
  },
  {
    o: "«У нас уже есть похожее»",
    a: "Не спорь и не сравнивай функции. Спроси, что конкретно не устраивает в текущем. Если всё устраивает — это честный «нет», и он экономит тебе месяц.",
  },
  {
    o: "«Сейчас не время, вернёмся через квартал»",
    a: "«Понимаю. Что должно измениться к тому моменту, чтобы это стало нужным?» Ответ покажет, будет ли вообще сделка. И поставь дату в календарь прямо сейчас.",
  },
  {
    o: "«Пришлите презентацию, мы посмотрим»",
    a: "«Пришлю. Но презентация без ваших цифр бесполезна — дайте 15 минут, я соберу под вас и пришлю уже готовое». Отправленная в пустоту презентация — это вежливый отказ.",
  },
];

export default function L13SlideObjections5() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Возражения
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Не учи скрипты наизусть — <span className="text-[hsl(var(--slide-gold))]">знай ответ заранее</span>
        </h2>
        <div className="space-y-[3px] mb-[6px]">
          {objections.map((x, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] italic">{x.o}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold">→ </span>{x.a}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Записывай каждое возражение, которое услышал. Через 20 звонков это и есть твой скрипт — и первое, что ты отдашь продажнику, когда будешь нанимать.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Возражения
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Не учи скрипты наизусть — <span className="text-[hsl(var(--slide-gold))]">знай ответ заранее</span>
      </h2>
      <div className="space-y-[10px] max-w-[1700px] mb-[18px]">
        {objections.map((x, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[26px] py-[13px] flex items-start gap-[16px]">
            <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{i + 1}</span>
            <div className="flex-1">
              <p className="text-[19px] text-[hsl(var(--slide-text-muted))] italic mb-[3px]">{x.o}</p>
              <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">{x.a}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Записывай каждое возражение, которое услышал. Через 20 звонков это и есть твой скрипт — и первое, что ты отдашь продажнику, когда будешь нанимать.
        </p>
      </div>
    </div>
  );
}
