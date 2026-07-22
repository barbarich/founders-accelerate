import { useIsMobile } from "@/hooks/use-mobile";

const b2b = {
  title: "B2B · решения принимают люди на работе",
  items: [
    { name: "Профильные конференции и выставки", move: "Твои клиенты сами приезжают туда за решениями. Один день живых разговоров даёт больше, чем месяц переписок." },
    { name: "Нетворкинг и знакомства", move: "Тёплое интро от общего знакомого открывает двери, которые холодное письмо не откроет никогда." },
    { name: "LinkedIn", move: "Найди лидеров мнений в нише → смотри, кто комментирует их посты → это твои потенциальные клиенты и решающие лица." },
    { name: "Профессиональные сообщества", move: "Отраслевые чаты, ассоциации, закрытые группы. Там обсуждают проблемы, которые решает твой продукт." },
  ],
};

const b2c = {
  title: "B2C · люди сидят там, где отдыхают и советуются",
  items: [
    { name: "Сообщества по интересам", move: "Группы, где твоя аудитория уже обсуждает свою жизнь и покупки. Читай, о чём спрашивают, - это готовый список болей." },
    { name: "Facebook-группы", move: "Ищи по ключевым словам и боли клиента. Зайди в группы конкурентов - их подписчики = твоя аудитория." },
    { name: "Telegram-каналы и чаты", move: "Тематические каналы и локальные чаты. Смотри, где рекламируются конкуренты, - значит, там покупают." },
    { name: "Reddit и форумы", move: "Ищи «best alternative to [конкурент]» или «how do you solve [проблема]». Люди уже описали боль своими словами." },
  ],
};

export default function L10SlideWhereMethod() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[12px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Где живёт аудитория · B2B и B2C
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Аудитория уже собрана. <span className="text-[hsl(var(--slide-gold))]">Отметь, где может быть твоя.</span>
        </h2>
        {[b2b, b2c].map((col) => (
          <div key={col.title} className="mb-[5px]">
            <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">{col.title}</p>
            <div className="space-y-[3px]">
              {col.items.map((p) => (
                <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[3px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{p.name}</p>
                  <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{p.move}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[4px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Граница условна: сообщества, события и LinkedIn работают и для B2B, и для B2C. Это карта, где искать, - отметь на ней свои места.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[30px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Где живёт аудитория · B2B и B2C
      </p>
      <h2 className="font-display text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em] max-w-[1700px]">
        Аудитория уже собрана. <span className="text-[hsl(var(--slide-gold))]">Отметь, где может быть твоя.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1750px] mb-[14px]">
        {[b2b, b2c].map((col) => (
          <div key={col.title}>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-gold))] mb-[8px]">{col.title}</p>
            <div className="space-y-[8px]">
              {col.items.map((p) => (
                <div key={p.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[20px] py-[9px]">
                  <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[2px]">{p.name}</p>
                  <p className="text-[13.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.35]">{p.move}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[12px] max-w-[1750px]">
        <p className="text-[17px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Граница условна: сообщества, события и LinkedIn работают и для B2B, и для B2C. Это карта, где искать, - твоя задача отметить на ней места, где может быть именно твоя аудитория.
        </p>
      </div>
    </div>
  );
}
