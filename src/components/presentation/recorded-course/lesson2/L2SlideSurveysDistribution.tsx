import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  {
    n: "1",
    name: "LinkedIn Sales Navigator",
    when: "B2B опрос",
    how: "Фильтр по индустрии/должности → DM с 1 строкой: «1 вопрос, 60 секунд, помогаешь с research». Конверсия 5-10% открытия + 20-30% ответа.",
  },
  {
    n: "2",
    name: "Reddit нишевые сабреддиты",
    when: "B2C опрос",
    how: "Не /r/startups. Найди 3-5 субреддитов где живёт твоя ЦА (r/freelance, r/marketing, r/parenting). Постни вопрос + ссылка на Tally. Подари что-то (PDF/template) за заполнение.",
  },
  {
    n: "3",
    name: "Личная сеть + referrals",
    when: "Любой опрос на старте",
    how: "Список 50 знакомых из твоей ЦА. DM лично каждому: «помоги — 60 секунд». Попроси каждого ответившего: «ты знаешь ещё 2 человек?». Снежный ком.",
  },
  {
    n: "4",
    name: "Telegram / Slack-каналы",
    when: "Если ниша имеет коммьюнити",
    how: "Founder communities, slack-каналы профессий, чаты по интересам. Сначала вклад в коммьюнити (3-5 ответов на чужие вопросы), потом своя просьба. Иначе бан.",
  },
];

export default function L2SlideSurveysDistribution() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[24px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Где взять 100 ответов
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          4 канала дистрибуции
        </h2>
        <div className="space-y-[10px]">
          {channels.map((c) => (
            <div key={c.n} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[12px] py-[10px]">
              <div className="flex items-baseline gap-[8px] mb-[4px]">
                <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] font-bold">{c.n}</span>
                <p className="text-[13px] font-bold text-[hsl(var(--slide-text))]">{c.name}</p>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">{c.when}</p>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{c.how}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Где взять 100 ответов
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em]">
        4 канала дистрибуции
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        {channels.map((c) => (
          <div key={c.n} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[22px]">
            <div className="flex items-baseline gap-[14px] mb-[8px]">
              <span className="font-display text-[36px] text-[hsl(var(--slide-gold))] font-bold leading-none">{c.n}</span>
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))]">{c.name}</p>
            </div>
            <p className="text-[14px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">{c.when}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{c.how}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
