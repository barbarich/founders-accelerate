import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  { name: "ChatGPT", action: "Задал вопрос — получил ответ.", later: "Email — если хочешь сохранить историю." },
  { name: "Lovable", action: "Описал приложение — оно собирается на твоих глазах.", later: "Email — когда хочешь сохранить или задеплоить." },
  { name: "TikTok", action: "Открыл — видео играет. Лента работает без логина.", later: "Email — если хочешь подписаться." },
  { name: "Pinterest", action: "Выбрал 3 интереса — лента листается.", later: "Email — если хочешь сохранять." },
  { name: "Cursor", action: "Открыл — пишешь код.", later: "Email — только для синхронизации." },
];

export default function M7Slide14FiveActionFirst() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          5 продуктов, которые дают действие до регистрации
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Действие первым. Email — потом.
        </h2>
        <div className="space-y-[4px]">
          {cases.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">{c.name}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.35]">{c.action}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[2px] italic">{c.later}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Email — когда юзер сам захотел продлить опыт. Не раньше.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        5 продуктов, которые дают действие до регистрации
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        Действие первым. Email — потом.
      </h2>
      <div className="space-y-[10px] max-w-[1600px] mb-[24px]">
        {cases.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px] grid grid-cols-[180px_1fr_1fr] gap-[28px] items-center">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] leading-[1.2]">{c.name}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]">{c.action}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] italic">{c.later}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Email спрашивают только когда юзер сам захотел «продлить» опыт — сохранить, синхронизировать, поделиться. Не до этого.
      </p>
    </div>
  );
}
