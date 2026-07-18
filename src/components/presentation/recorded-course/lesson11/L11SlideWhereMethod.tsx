import { useIsMobile } from "@/hooks/use-mobile";

const ways = [
  { t: "Спроси 5 клиентов", d: "«Где вы это обсуждаете и у кого спрашиваете совета?». Они сами назовут группы, каналы, людей." },
  { t: "Смотри подписчиков конкурентов", d: "Кто лайкает и комментит похожие продукты - там же сидит твоя аудитория." },
  { t: "Найди их сообщества", d: "Группы в FB/Telegram, сабреддиты, Discord, отраслевые чаты, где сегмент собран прямо сейчас." },
  { t: "Найди их события", d: "Конференции, митапы, вебинары, где твои люди уже приходят слушать по теме." },
];

export default function L11SlideWhereMethod() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[18px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Где они живут
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[7px]">
          Аудитория уже где-то собрана. <span className="text-[hsl(var(--slide-gold))]">Не создавай - приходи.</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
          Составь «карту информационной диеты»: где читают, что смотрят, в каких чатах сидят. Четыре способа найти:
        </p>
        <div className="space-y-[5px]">
          {ways.map((w) => (
            <div key={w.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{w.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Где они живут · карта информационной диеты
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em] max-w-[1650px]">
        Аудитория уже где-то собрана. <span className="text-[hsl(var(--slide-gold))]">Не создавай - приходи.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[22px] max-w-[1650px]">
        Составь карту: где читают, что смотрят, в каких чатах сидят твои люди. Четыре способа найти это место:
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {ways.map((w) => (
          <div key={w.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">{w.t}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{w.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
