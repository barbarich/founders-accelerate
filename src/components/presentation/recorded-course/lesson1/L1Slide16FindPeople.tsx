import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide16FindPeople() {
  const otherChannels = [
    { icon: "💼", title: "LinkedIn", text: "Поиск по должности. Короткое сообщение." },
    { icon: "💬", title: "Telegram / Facebook", text: "Тематические чаты. «Кто сталкивается?»" },
    { icon: "🔴", title: "Reddit", text: "Сабреддит → жалобы → написать напрямую." },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Где найти людей</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Начни с тех, кого знаешь
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-2 border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] p-[12px] mb-[10px]">
          <div className="flex items-center gap-[6px] mb-[6px]">
            <span className="text-[18px]">🤝</span>
            <h3 className="text-[13px] font-bold text-[hsl(var(--slide-gold))]">Нетворк — №1</h3>
          </div>
          <div className="space-y-[4px]">
            {[
              "Пройдись по контактам — кто в нужной нише?",
              "Попроси intro: «Кого знаешь?»",
              "1 тёплый = 5 холодных контактов.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-[4px]">
                <span className="text-[hsl(var(--slide-gold))] text-[10px] mt-[1px]">→</span>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-[6px] mb-[10px]">
          {otherChannels.map((c, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[10px]">
              <div className="flex items-center gap-[6px] mb-[2px]">
                <span className="text-[14px]">{c.icon}</span>
                <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))]">{c.title}</h3>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">
            📊 Нетворк ~50% конверсия, холодные ~10%. Начни с тёплых.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Где найти людей для интервью</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">
        Начни с тех, кого уже знаешь
      </h2>
      <div className="flex gap-[28px] mb-[28px]">
        <div className="flex-[1.3] bg-[hsl(var(--slide-gold)/0.06)] border-2 border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] p-[36px]">
          <div className="flex items-center gap-[14px] mb-[16px]">
            <span className="text-[36px]">🤝</span>
            <h3 className="text-[28px] font-bold text-[hsl(var(--slide-gold))]">Нетворк — способ №1</h3>
          </div>
          <p className="text-[21px] text-[hsl(var(--slide-text))] leading-[1.6] mb-[20px]">
            Самый быстрый и надёжный канал. Люди из твоего окружения, которые подходят под ЦА — или знают тех, кто подходит.
          </p>
          <div className="space-y-[12px]">
            {[
              "Пройдись по контактам — кто работает в нужной нише?",
              "Попроси intro: «Кого знаешь, кто сталкивается с [проблемой]?»",
              "Один тёплый контакт = 5 холодных. Конверсия в разы выше.",
              "Не стесняйся — люди любят помогать, если попросить конкретно.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-[10px]">
                <span className="text-[hsl(var(--slide-gold))] text-[20px] mt-[2px]">→</span>
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[16px]">
          {[
            { icon: "💼", title: "LinkedIn", text: "Поиск по должности. Короткое сообщение: «Исследую [тему], можно 15 минут? Не продаю.»" },
            { icon: "💬", title: "Telegram / Facebook группы", text: "Тематические чаты. «Кто сталкивается с [проблемой]? 15 минут, поделюсь результатами.»" },
            { icon: "🔴", title: "Reddit", text: "Найти сабреддит, почитать жалобы, написать активным пользователям напрямую." },
          ].map((c, i) => (
            <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[24px]">
              <div className="flex items-center gap-[10px] mb-[8px]">
                <span className="text-[26px]">{c.icon}</span>
                <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))]">{c.title}</h3>
              </div>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[10px] px-[32px] py-[16px]">
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))]">
          📊 Конверсия: нетворк ~50%, холодные сообщения ~10%. Начни с тёплых — выйдешь на 5 интервью за 2 дня.
        </p>
      </div>
    </div>
  );
}
