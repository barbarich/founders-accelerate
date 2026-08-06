import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { t: "Найди закрытое комьюнити своей ниши", d: "Не паблик-чат, а место, где узкие специалисты обсуждают именно свою профессию: вопросы, события, что у них болит." },
  { t: "Заходи помогать, а не продавать", d: "Отвечай на вопросы, делись знаниями по теме - месяцами, до того как вообще упомянешь свой продукт." },
  { t: "Познакомься с администратором", d: "Предложи совместный вебинар или мероприятие. Это даёт законное право говорить о продукте открыто, а не тайком в личке." },
  { t: "На мероприятии - инсайты и промокод", d: "Делишься реальной пользой, а не рекламой, и в конце даёшь промокод для участников." },
];

const results = [
  "Юзеры на кастдев",
  "Первые клиенты",
  "Рекомендации внутри комьюнити",
];

export default function L16SlideCommunityExpert() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Комьюнити · кейс MetaMinder
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Стань экспертом внутри, а не рекламой снаружи
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          В MetaMinder нашёл закрытое комьюнити L&D-специалистов - там обсуждали свои вопросы и боли. Вошёл, помогал, рассказывал про инновации и продукт, партнёрился с админом на совместных вебинарах и промокодах.
        </p>
        <div className="space-y-[4px] mb-[7px]">
          {steps.map((s, i) => (
            <div key={s.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {s.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Что это дало</p>
          {results.map((r) => (
            <p key={r} className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[9px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{r}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[32px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Комьюнити · кейс MetaMinder
      </p>
      <h2 className="font-display text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
        Стань экспертом внутри, <span className="text-[hsl(var(--slide-gold))]">а не рекламой снаружи</span>
      </h2>
      <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1900px]">
        В MetaMinder нашёл закрытое комьюнити L&D-специалистов - там обсуждали свои вопросы и боли. Вошёл, помогал, рассказывал про инновации и продукт, партнёрился с админом на совместных вебинарах и промокодах.
      </p>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1900px] mb-[16px]">
        {steps.map((s, i) => (
          <div key={s.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mt-[4px] mb-[6px]">{s.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[14px] max-w-[1900px]">
        <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Что это дало</p>
        <div className="grid grid-cols-3 gap-x-[24px]">
          {results.map((r) => (
            <p key={r} className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[14px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{r}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
