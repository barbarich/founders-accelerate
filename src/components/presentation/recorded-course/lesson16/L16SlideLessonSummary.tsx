import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Канал меряется оплатами, а не охватом",
    body: "Подписчики, регистрации и место в рейтинге к деньгам не приводят. Один вопрос к любому каналу: сколько человек заплатили.",
  },
  {
    num: "2",
    title: "Партнёр - тот, кому клиент уже доверяет",
    body: "B2B: агентства, интеграторы, смежные сервисы. B2C: авторы, админы сообществ, соседние сервисы. Нет выгоды обоим - партнёрства не будет, и дело не в проценте.",
  },
  {
    num: "3",
    title: "Креаторов берут пачкой и считают по продажам",
    body: "Один пост - лотерея: 1-12 оплат. Тест - 10-15 микро сразу. Цена = просмотры × $0.03-0.05, модель - маленький фикс плюс процент, каждому свой промокод.",
  },
  {
    num: "4",
    title: "В комьюнити продают комментарии, а не посты",
    body: "90 минут в неделю, 10-20 тредов, где спрашивают о твоей проблеме. Ссылки в первом сообщении нет. Деньги случаются в личке и на звонке.",
  },
  {
    num: "5",
    title: "SEO и GEO работают одинаково - тебя находят сами",
    body: "И Google, и ChatGPT ведут туда, где уже есть ответ. Попасть в чужие подборки «лучшие X» - это почти половина того, что цитирует ChatGPT. Небыстро, зато бесплатно.",
  },
];

export default function L16SlideLessonSummary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Что унести из этого урока
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
        </h2>
        <div className="space-y-[3px]">
          {insights.map((i) => (
            <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-start gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0 mt-[1px]">{i.num}</span>
                <div>
                  <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{i.title}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{i.body}</p>
                </div>
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
        Что унести из этого урока
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px]">
        Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
      </h2>

      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px]">
        {insights.map((i) => (
          <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[16px] flex flex-col">
            <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[28px] h-[28px] flex items-center justify-center rounded-full font-bold mb-[10px]">{i.num}</span>
            <p className="text-[16.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{i.title}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">{i.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[20px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Дальше - выбрать два канала и сделать 10 касаний за неделю. Это финал курса.
        </p>
      </div>
    </div>
  );
}
