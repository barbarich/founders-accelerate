import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Meta 2026 = Andromeda. Алгоритм решает за тебя",
    body: "Старая школа таргетинга умерла. Андромеда сама находит твою аудиторию по сигналам. Твоя работа — кормить её событиями и креативами, не настраивать интересы.",
  },
  {
    num: "2",
    title: "До запуска: pixel + 5 событий + серверная аналитика",
    body: "Базовый pixel → отслеживает клики. 5 событий (Purchase, Lead, и т.д.) → говорят алгоритму что важно. CAPI (серверная) → не теряется из-за iOS-блокировок.",
  },
  {
    num: "3",
    title: "Advantage+ выигрывает в 80% случаев в 2026",
    body: "Раньше ручной таргетинг был лучше. Сейчас Advantage+ обходит в 4 из 5 кампаний. Если ты не используешь Advantage+ — ты переплачиваешь за CPM.",
  },
  {
    num: "4",
    title: "Бюджет = 50 конверсий в неделю",
    body: "Меньше 50 — алгоритм не учится, кампания не работает. Если 50 конверсий в неделю слишком дорого — твой CPL высокий, проблема в продукте или offer, не в рекламе.",
  },
  {
    num: "5",
    title: "7 ошибок ломают первые кампании",
    body: "Самые частые: маленький бюджет, выключение через 2-3 дня, аудитория слишком узкая, нет CAPI, один креатив, неправильное событие, тестирование без статистической значимости.",
  },
];

export default function L13SlideLessonSummary() {
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
          Дальше — настроить пиксель и запустить первую Advantage+ кампанию.
        </p>
      </div>
    </div>
  );
}
