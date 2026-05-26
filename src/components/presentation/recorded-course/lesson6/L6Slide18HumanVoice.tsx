import { useIsMobile } from "@/hooks/use-mobile";

const red = [
  "«Погружаемся в тему» / «let's dive in»",
  "«Инновационный, революционный, прорывной»",
  "Emoji-салат 🚀🔥⚡💯",
  "«Надеюсь, это поможет»",
  "Em-dash вместо конкретного слова",
];

const green = [
  { emoji: "📛", label: "Имена реальных людей", ex: "«Лена из Notion» вместо «один клиент»" },
  { emoji: "⏰", label: "Конкретное время", ex: "«во вторник в 2 ночи» вместо «недавно»" },
  { emoji: "🔢", label: "Числа", ex: "«47 юзеров» вместо «много юзеров»" },
  { emoji: "🤕", label: "Провалы с деталями", ex: "«слил $500 за ночь» вместо «обжёгся»" },
  { emoji: "📍", label: "Физический мир", ex: "«кофе остыл», «спина болит», место" },
];

export default function L6Slide18HumanVoice() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Не AI-голос
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Как звучать как человек
        </h2>

        <div className="mb-[10px]">
          <p className="text-[9px] font-bold text-[hsl(0_60%_70%)] mb-[4px]">🚩 Красные флаги — убить в черновике</p>
          <div className="space-y-[2px]">
            {red.map((r, i) => (
              <p key={i} className="text-[8.5px] text-[hsl(var(--slide-text-muted))] italic bg-[hsl(0_60%_20%/0.12)] px-[6px] py-[2px] rounded leading-[1.3]">
                {r}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">✅ Зелёные флаги — добавлять осознанно</p>
          <div className="space-y-[4px]">
            {green.map((g, i) => (
              <div key={i} className="flex items-start gap-[5px] bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[7px] py-[3px]">
                <span className="text-[10px]">{g.emoji}</span>
                <div>
                  <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{g.label}</p>
                  <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{g.ex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Тест: прочитай другу вслух. Улыбнулся / спросил «и что?» — работает.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Не AI-голос
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px]">
        Как звучать как человек в 2026
      </h2>

      <div className="flex gap-[32px] max-w-[1400px] mb-[28px]">
        <div className="flex-1">
          <p className="text-[20px] font-bold text-[hsl(0_60%_70%)] mb-[14px]">🚩 Красные флаги — убить в черновике</p>
          <div className="space-y-[8px]">
            {red.map((r, i) => (
              <div key={i} className="text-[16px] text-[hsl(var(--slide-text-muted))] italic bg-[hsl(0_60%_20%/0.12)] border border-[hsl(0_60%_40%/0.2)] px-[16px] py-[10px] rounded-[8px]">
                {r}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[14px]">✅ Зелёные флаги — добавлять осознанно</p>
          <div className="space-y-[8px]">
            {green.map((g, i) => (
              <div key={i} className="flex items-start gap-[12px] bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] px-[16px] py-[10px] rounded-[8px]">
                <span className="text-[22px] shrink-0">{g.emoji}</span>
                <div>
                  <p className="text-[16px] font-bold text-[hsl(var(--slide-text))]">{g.label}</p>
                  <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{g.ex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px]">
        Тест: прочитай другу вслух. Улыбнулся или спросил «и что дальше?» — работает. Молчит — переписывай.
      </p>
    </div>
  );
}
