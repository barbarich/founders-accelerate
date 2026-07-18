import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", t: "10 личных продаж", d: "Знакомые, друзья, знакомые знакомых. Не масштаб, а первые сделки и понимание, за что платят." },
  { n: "02", t: "Сцена и конференции", d: "Выступления по теме перед своей аудиторией. Один доклад приносит больше тёплых лидов, чем месяц рассылок." },
  { n: "03", t: "Продажа только через демо", d: "Никаких «прочитайте лендинг». Показ вживую + ручное сопровождение каждого клиента на старте." },
  { n: "04", t: "Аутрич - только LinkedIn", d: "Один канал, сфокусированно. Там сидят лица, принимающие решение по обучению персонала." },
];

export default function L11SlideMetaMinder() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Кейс MetaMinder · B2B · как я входил
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          B2B-продажи начинаются <span className="text-[hsl(var(--slide-gold))]">с тебя, а не с воронки.</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[7px]">
          MetaMinder - платформа микрообучения для сотрудников в ритейле, гостеприимстве и сервисе. Вот как я привёл первых клиентов:
        </p>
        <div className="space-y-[4px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]"><span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Кейс MetaMinder · B2B · как я входил
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.02em] max-w-[1650px]">
        B2B-продажи начинаются <span className="text-[hsl(var(--slide-gold))]">с тебя, а не с воронки.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[20px] max-w-[1650px]">
        MetaMinder - платформа микрообучения для сотрудников в ритейле, гостеприимстве и сервисе. Вот как я привёл первых клиентов:
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[14px]">
            <div className="flex items-baseline gap-[10px] mb-[3px]">
              <span className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[38px]">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
