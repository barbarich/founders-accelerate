import { useIsMobile } from "@/hooks/use-mobile";

const b2bDays = [
  { d: "Дни 1–2", b: "Apollo: 500 ICP-контактов + Instantly: 5 sender-доменов, warmup ON" },
  { d: "День 3", b: "AI-копирайт: 3 cold-email + 3 LinkedIn-сообщения с твоей формулой" },
  { d: "День 4", b: "Запуск: 100 имейлов через Instantly + 50 connection requests" },
  { d: "Дни 5–7", b: "Мониторинг open / reply rates. НЕ трогать настройки 5 дней." },
];

const b2cDays = [
  { d: "День 1", b: "Пиксели Meta + TikTok + Google + GA4 на лендинг. До рекламы." },
  { d: "День 2", b: "Сгенери 30 ад-креативов промптом со слайда 15. Топ-10 → визуал в Higgsfield/Nano Banana." },
  { d: "День 3", b: "Vibe-кампания в Meta · Advantage+, цель Conversions, бюджет $20/день. Все 10 креативов в одну кампанию." },
  { d: "Дни 4–7", b: "Не трогаешь AI 3–5 дней. Смотришь CTR, CPC, конверсии." },
];

const fields = [
  "1. Какая у тебя финальная формула позиционирования? (с Workshop 1)",
  "2. Какой трек выбираешь — B2B или B2C? И почему именно этот.",
  "3. Какой канал поднимешь первым (Apollo / Meta / LinkedIn / личные соцсети)?",
  "4. Какой результат ты ожидаешь к M10 — конкретная цифра (N лидов / X встреч / Y вейтлиста)?",
  "5. Что может помешать — что точно отвлечёт тебя на этой неделе и как ты это вырубишь?",
];

export default function L12Slide21Workshop3() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Воркшоп 3 · 25 минут
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Твой 7-day plan <span className="text-[hsl(var(--slide-gold))]">— на следующую неделю</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          10 мин: ответь на 5 вопросов и заполни чек-лист своего трека. 15 мин: шеринг по очереди + критика группы.
        </p>
        <div className="grid grid-cols-2 gap-[5px] mb-[5px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[6px] py-[4px]">
            <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em]">B2B трек</p>
            {b2bDays.map((d, i) => (
              <p key={i} className="text-[7px] text-[hsl(var(--slide-text)/0.88)] leading-[1.35]"><b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}</p>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[6px] py-[4px]">
            <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em]">B2C трек</p>
            {b2cDays.map((d, i) => (
              <p key={i} className="text-[7px] text-[hsl(var(--slide-text)/0.88)] leading-[1.35]"><b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}</p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[5px] px-[8px] py-[4px]">
          <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Ответь на 5 вопросов</p>
          {fields.map((f, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text)/0.88)] leading-[1.35]">{f}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-end justify-between mb-[20px] max-w-[1700px]">
        <div>
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
            Воркшоп 3 · 25 минут
          </p>
          <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
            Твой 7-day plan — <span className="text-[hsl(var(--slide-gold))]">на следующую неделю</span>
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[4px]">Тайминг</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">10 мин соло<br/>15 мин шеринг</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[18px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[18px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">B2B трек</p>
          <ul className="space-y-[8px]">
            {b2bDays.map((d, i) => (
              <li key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[18px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">B2C трек</p>
          <ul className="space-y-[8px]">
            {b2cDays.map((d, i) => (
              <li key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <b className="text-[hsl(var(--slide-gold))]">{d.d}.</b> {d.b}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[16px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Ответь на 5 вопросов · скинь в чат</p>
        <ul className="space-y-[4px]">
          {fields.map((f, i) => (
            <li key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
