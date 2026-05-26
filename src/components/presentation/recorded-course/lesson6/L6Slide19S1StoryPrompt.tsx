import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  {
    label: "Без детали",
    bad: true,
    text: "Много фаундеров не успевают отвечать на сообщения и теряют клиентов.",
    verdict: "Общая фраза. Не верим. Не запоминаем.",
  },
  {
    label: "С деталью",
    bad: false,
    text: "Во вторник в 2 ночи у Антона было 47 непрочитанных DM. Инвестор ждал ответа три дня. Антон узнал об этом только в пятницу.",
    verdict: "Видим сцену. Верим. Хотим узнать что дальше.",
  },
];

const formula = [
  { element: "Время", example: "Во вторник в 2 ночи" },
  { element: "Цифра", example: "47 непрочитанных" },
  { element: "Имя", example: "Антон, Лена из Notion" },
  { element: "Место", example: "в инбоксе, в следующем уроке, в кафе" },
];

export default function L6Slide19S1StoryPrompt() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — шаг 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[4px]">
          Деталь = доверие
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.4]">
          Без деталей — реклама. С деталями — история. Одна конкретная деталь создаёт больше доверия, чем абзац объяснений.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {examples.map((e, i) => (
            <div key={i} className={`rounded-[6px] px-[9px] py-[6px] border ${e.bad ? 'bg-[hsl(0_20%_12%)] border-[hsl(0_60%_40%/0.3)]' : 'bg-[hsl(142_20%_10%)] border-[hsl(142_50%_40%/0.3)]'}`}>
              <p className={`text-[8px] font-bold mb-[2px] ${e.bad ? 'text-[hsl(0_60%_65%)]' : 'text-[hsl(142_50%_60%)]'}`}>{e.bad ? '✗' : '✓'} {e.label}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px] italic">{e.text}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))]">{e.verdict}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[5px]">
          <p className="text-[8px] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Формула детали</p>
          <div className="grid grid-cols-2 gap-[2px]">
            {formula.map((f, i) => (
              <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))]"><span className="text-[hsl(var(--slide-gold)/0.8)]">{f.element}:</span> {f.example}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — шаг 5
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Деталь = доверие
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1200px] leading-[1.45]">
        Без деталей — реклама. С деталями — история. Одна конкретная деталь создаёт больше доверия, чем абзац объяснений.
      </p>

      <div className="grid grid-cols-[1fr_1fr] gap-[20px] max-w-[1500px] mb-[18px]">
        {examples.map((e, i) => (
          <div key={i} className={`rounded-[14px] px-[24px] py-[20px] border-2`} style={{
            backgroundColor: e.bad ? 'hsl(0 15% 10%)' : 'hsl(142 15% 9%)',
            borderColor: e.bad ? 'hsl(0 60% 40% / 0.4)' : 'hsl(142 50% 40% / 0.4)',
          }}>
            <p className={`text-[14px] font-bold uppercase tracking-[0.15em] mb-[12px]`} style={{ color: e.bad ? 'hsl(0 60% 65%)' : 'hsl(142 50% 60%)' }}>
              {e.bad ? '✗' : '✓'} {e.label}
            </p>
            <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.6] italic mb-[10px]">{e.text}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] border-t border-[hsl(var(--slide-border)/0.3)] pt-[8px]">{e.verdict}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[14px] max-w-[1500px]">
        <p className="text-[15px] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Формула детали = время + цифра + имя + место</p>
        <div className="grid grid-cols-4 gap-[16px]">
          {formula.map((f, i) => (
            <div key={i}>
              <p className="text-[13px] text-[hsl(var(--slide-gold)/0.7)] font-medium mb-[2px]">{f.element}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic">{f.example}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
