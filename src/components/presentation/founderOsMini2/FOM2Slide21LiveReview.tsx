import FOM2SlideBase from "./FOM2SlideBase";

const participants = [
  { name: "Михаэль", product: "AIRecom", focus: "ICP-вертикал выбран в С1 → сегодня: цена за результат + MVP-скоуп под выбранный сегмент" },
  { name: "Маргарита", product: "[продукт]", focus: "Гипотеза позиционирования из С1 → сегодня: модель монетизации + кого режем из ICP, чтобы упростить MVP" },
];

const template = [
  { tag: "1 мин", t: "Где я после С1", d: "Что закрепилось из позиционирования. Что услышал в интервью (даже из 2-х)." },
  { tag: "2 мин", t: "Моя гипотеза цены", d: "Модель + 3 тарифа + средняя цена. Произношу вслух." },
  { tag: "2 мин", t: "Мой MUST-HAVE MVP", d: "5 фич максимум + одна фраза «что делает продукт» + один сценарий первого клиента." },
  { tag: "5 мин", t: "Разбор группой", d: "Ловим buzzwords, оспариваем тарифы, режем фичи. Ментор + второй фаундер задают вопросы." },
];

export default function FOM2Slide21LiveReview() {
  return (
    <FOM2SlideBase
      slide={21}
      eyebrow="Разбор · 10 минут на участника"
      title="Универсальный шаблон разбора"
      subtitle="Каждый проходит по тем же 4 пунктам. Решаем на встрече, кто начинает."
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[12px] md:gap-[24px] max-w-[1800px] text-[11px] md:text-[20px]">
        <div className="space-y-[6px] md:space-y-[12px]">
          {template.map((s, i) => (
            <div key={i} className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-[8px] md:gap-[16px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[5px] md:pb-[9px]">
              <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[9px] md:text-[14px] font-medium">{s.tag}</span>
              <div>
                <p className="font-semibold text-[hsl(var(--slide-text))]">{s.t}</p>
                <p className="text-[hsl(var(--slide-text-muted))] mt-[2px] leading-[1.4]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-[8px] md:space-y-[14px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Сегодня за столом</p>
          {participants.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[10px] md:p-[18px]">
              <p className="text-[hsl(var(--slide-text))] font-semibold text-[12px] md:text-[22px]">
                {p.name} <span className="text-[hsl(var(--slide-gold))]">· {p.product}</span>
              </p>
              <p className="text-[hsl(var(--slide-text-muted))] mt-[2px] md:mt-[6px] leading-[1.4]">{p.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </FOM2SlideBase>
  );
}
