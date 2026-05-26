import { useIsMobile } from "@/hooks/use-mobile";

const oldWay = [
  "Ручной таргет: возраст, пол, интересы, геолокация",
  "Lookalike-аудитории на 1–10% сходства",
  "A/B-тесты по два креатива в неделю",
  "Месяцы оптимизации одной кампании",
  "Маркетолог нужен — без него не разберёшься",
];

const newWay = [
  "Advantage+ Audience: широкий вход, Andromeda сама находит покупателя",
  "Advantage+ Placements: все площадки автоматически — Feed, Reels, Stories, Audience Network",
  "Dynamic Creative: 5–10 видео + 3–5 текстов, Meta перемешивает",
  "Learning phase 7 дней / 50 конверсий — не трогаешь",
  "Одиночка-фаундер запускает сам за вечер",
];

export default function L13Slide04OldVsNewMeta() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Meta-реклама · что сломалось к 2026
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Старый интерфейс <span className="text-[hsl(var(--slide-gold))]">остался</span>. Старая логика — нет
        </h2>
        <div className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[8px] py-[6px] mb-[6px]">
          <p className="text-[8px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.1em] mb-[2px]">Не работает · 2022 way</p>
          <ul className="space-y-[2px]">
            {oldWay.map((t) => (
              <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">→ {t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[8px] py-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Работает · 2026 way</p>
          <ul className="space-y-[2px]">
            {newWay.map((t) => (
              <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35]">→ {t}</li>
            ))}
          </ul>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
          Главный сдвиг: ты не настраиваешь — ты кормишь алгоритм объёмом креативов и качеством событий.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Meta-реклама · что сломалось к 2026
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        Старый интерфейс <span className="text-[hsl(var(--slide-gold))]">остался</span>. Старая логика — нет
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[20px]">
        <div className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[12px]">Не работает · 2022 way</p>
          <ul className="space-y-[10px]">
            {oldWay.map((t) => (
              <li key={t} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Работает · 2026 way</p>
          <ul className="space-y-[10px]">
            {newWay.map((t) => (
              <li key={t} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        Главный сдвиг: <b className="not-italic">ты не настраиваешь — ты кормишь</b>. Алгоритм решает кому показать. Ты решаешь сколько и какие креативы дать.
      </p>
    </div>
  );
}
