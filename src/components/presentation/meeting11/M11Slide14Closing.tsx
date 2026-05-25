import { useIsMobile } from "@/hooks/use-mobile";

const phrases = [
  { ctx: "Когда клиент молчит после демо", say: "«Это $X в месяц. Для [конкретный результат] это окупается за [N] недель. Делаем?»", why: "Прямой вопрос. Не «что думаешь?», а «делаем?» — даёт бинарный ответ." },
  { ctx: "Когда хочешь дать скидку без потери ценности", say: "«Я могу дать 20% скидку, если подписываемся на квартал — это закрывает мне cash flow, тебе экономит $Y.»", why: "Скидка обоснована мотивом, не «потому что хочешь». Не теряет ценность продукта в глазах клиента." },
  { ctx: "Когда чувствуешь что бюджет действительно мал", say: "«Если это слишком — расскажи под какой бюджет ты считал. Возможно стартанём с урезанного scope и расширимся.»", why: "Land-and-expand. Лучше small contract сейчас, чем no contract когда-нибудь." },
];

const next = [
  { t: "Demo → POC kick-off date", d: "Не «созвонимся», а «kick-off пилота во вторник 14:00 — кидаю инвайт». Календарь открыт во время звонка." },
  { t: "POC → decision call с EB", d: "На 14-й день встреча с Economic Buyer'ом. Календарь забукан ДО старта пилота, не после." },
  { t: "Если он говорит «надо подумать»", d: "«Окей. Я кидаю 2 слота на следующую неделю — если за это время решишь нет, отменим без проблем.» Получаешь дату обязательно." },
];

export default function M11Slide14Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Closing · 3 фразы без извинений
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Никогда не заканчиваешь <span className="text-[hsl(var(--slide-gold))]">без даты в календаре</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[3px] mb-[5px]">
          <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[1px]">3 фразы про деньги дословно</p>
          {phrases.map((p, i) => (
            <div key={i} className="mb-[2px]">
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] italic">{p.ctx}:</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.95)] leading-[1.4]">→ {p.say}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
          <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase mb-[1px]">Next step с датой</p>
          {next.map((n, i) => (
            <div key={i} className="mb-[2px]">
              <p className="text-[7px] font-bold text-[hsl(var(--slide-text))]">{n.t}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Closing · 3 фразы про деньги + next step
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Никогда не заканчиваешь звонок <span className="text-[hsl(var(--slide-gold))]">без даты в календаре</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[16px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">3 фразы про деньги дословно</p>
          {phrases.map((p, i) => (
            <div key={i} className="mb-[10px]">
              <p className="text-[13px] text-[hsl(var(--slide-text-muted))] italic mb-[2px]">{p.ctx}:</p>
              <p className="text-[15px] text-[hsl(var(--slide-text)/0.95)] leading-[1.5] mb-[2px]">→ {p.say}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))] italic">{p.why}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[16px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">Next step ВСЕГДА с датой</p>
          {next.map((n, i) => (
            <div key={i} className="mb-[10px]">
              <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{n.t}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
