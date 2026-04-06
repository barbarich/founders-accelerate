import { useIsMobile } from "@/hooks/use-mobile";

const places = [
  { icon: "💬", name: "Telegram", detail: "Ищи через поиск по ключевым словам. Заходи в группы конкурентов — их подписчики = твоя аудитория" },
  { icon: "👔", name: "LinkedIn", detail: "Найди 10 лидеров мнений в нише → посмотри кто комментирует их посты → это твои потенциальные клиенты" },
  { icon: "📘", name: "Facebook Groups", detail: "Вбей боль клиента в поиск. Группа на 5K человек по твоей теме = золотая жила. Читай о чём спрашивают" },
  { icon: "🔴", name: "Reddit", detail: "Ищи «best alternative to [конкурент]» или «how do you solve [проблема]». Люди уже описывают свою боль" },
  { icon: "🕵️", name: "Конкуренты", detail: "Зайди на сайт конкурента → найди их отзывы, комьюнити, соцсети. Недовольные клиенты конкурентов = твои первые клиенты" },
  { icon: "💡", name: "Вопрос-ответ", detail: "Quora, StackOverflow, форумы. Кто задаёт вопросы по твоей теме — тот и есть твой клиент. Отвечай и давай ссылку" },
];

export default function M4Slide10WhereAudience() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Задание
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          50 мест где живёт<br />ваша аудитория
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Хак: ваша аудитория уже где-то собралась — найдите это место</p>
        <div className="space-y-[6px]">
          {places.map((p, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <span className="text-[14px] shrink-0">{p.icon}</span>
              <div>
                <span className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{p.name}</span>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Задание
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        50 мест где живёт<br />ваша аудитория
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Хак: ваша аудитория уже где-то собралась — найдите это место</p>

      <div className="grid grid-cols-3 gap-[20px] max-w-[1300px]">
        {places.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[20px]">
            <div className="flex items-center gap-[12px] mb-[12px]">
              <span className="text-[32px]">{p.icon}</span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{p.name}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
