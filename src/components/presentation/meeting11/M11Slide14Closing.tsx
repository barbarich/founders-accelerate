import { useIsMobile } from "@/hooks/use-mobile";

const phrases = [
  { ctx: "Клиент молчит после показа продукта", say: "«Это стоит $X в месяц. Для такого результата окупается за N недель. Начинаем?»", why: "Прямой вопрос. Не «как вам?», а «начинаем?» — ответ либо да, либо нет." },
  { ctx: "Хочешь снизить цену, но не обесценить продукт", say: "«Могу дать 20% ниже, если берёте на 3 месяца сразу — это мне помогает с планированием, а вам экономит $Y.»", why: "Скидка с причиной, а не просто так. Продукт остаётся дорогим и ценным." },
  { ctx: "Бюджет клиента явно меньше твоей цены", say: "«Если дорого — скажите, под какую сумму считали. Может, начнём с малого и расширим позже.»", why: "Лучше договориться на меньшую сумму сейчас, чем потерять клиента навсегда." },
];

const next = [
  { t: "После показа → сразу дата следующего шага", d: "Не «созвонимся». А «завтра в 14:00 стартуем пробный период — отправляю приглашение прямо сейчас». Календарь открыт во время разговора." },
  { t: "Во время пробного периода → встреча с тем, кто платит", d: "Забронируй встречу с руководителем заранее, до начала пробного периода. Не после — а до." },
  { t: "Если говорит «надо подумать»", d: "«Окей. Я вышлю 2 варианта даты на следующую неделю. Если решите, что нет — просто отменим, без проблем.» Главное — получить конкретную дату." },
];

export default function M11Slide14Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Closing · 3 фразы без извинений
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Никогда не заканчивай <span className="text-[hsl(var(--slide-gold))]">без даты в календаре</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[6px] mb-[8px]">
          <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[4px]">3 фразы про деньги</p>
          {phrases.map((p, i) => (
            <div key={i} className="mb-[4px]">
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic">{p.ctx}:</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.95)] leading-[1.4]">→ {p.say}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] italic leading-[1.35]">{p.why}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
          <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[4px]">Следующий шаг — всегда с датой</p>
          {next.map((n, i) => (
            <div key={i} className="mb-[4px]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))]">{n.t}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Closing · 3 фразы про деньги + следующий шаг
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Никогда не заканчивай звонок <span className="text-[hsl(var(--slide-gold))]">без даты в календаре</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[16px]">
          <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">3 фразы про деньги</p>
          {phrases.map((p, i) => (
            <div key={i} className="mb-[10px]">
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic mb-[2px]">{p.ctx}:</p>
              <p className="text-[17px] text-[hsl(var(--slide-text)/0.95)] leading-[1.5] mb-[2px]">→ {p.say}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic">{p.why}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[16px]">
          <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">Следующий шаг — всегда с датой</p>
          {next.map((n, i) => (
            <div key={i} className="mb-[10px]">
              <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{n.t}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
