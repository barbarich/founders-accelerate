import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", t: "Конференции", d: "Ездил на отраслевые события и заводил контакты руками. Живой разговор открывает то, что не откроет ни одно письмо." },
  { n: "02", t: "Выступления", d: "Рассказывал со сцены про вау-кейсы и технологии в продукте - аудитория приходила сама после докладов." },
  { n: "03", t: "LinkedIn", d: "Личные посты от своего имени + системная лидогенерация по целевым компаниям." },
  { n: "04", t: "Email-аутрич", d: "Прямые письма решающим лицам в трёх выбранных индустриях." },
  { n: "05", t: "Партнёрская сеть", d: "Партнёры, у которых уже есть доступ к моим клиентам, приводили тёплые сделки." },
];

export default function L10SlideMetaMinder() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[12px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Кейс MetaMinder · B2B · метод проб и ошибок
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Фокус на 3 индустрии - <span className="text-[hsl(var(--slide-gold))]">и работа руками по всем каналам.</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[6px]">
          Мы примерно знали, кто аудитория, и взяли фокус: ритейл, гостеприимство, производство. Дальше - пробовал всё:
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]"><span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.t}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[4px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            После 20+ демо стало понятно, кто покупает, кто принимает решение и как вести сделку. Методом проб и ошибок, не сдаваясь, - всё получилось.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[30px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Кейс MetaMinder · B2B · метод проб и ошибок
      </p>
      <h2 className="font-display text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.02em] max-w-[1700px]">
        Фокус на 3 индустрии - <span className="text-[hsl(var(--slide-gold))]">и работа руками по всем каналам.</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[14px] max-w-[1650px]">
        Мы примерно знали, кто аудитория, и сразу взяли фокус на три индустрии: ритейл, гостеприимство, производство. Дальше - пробовал всё:
      </p>
      <div className="space-y-[7px] max-w-[1720px] mb-[14px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[24px] py-[8px] flex items-center gap-[20px]">
            <span className="font-display text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[40px] shrink-0">{s.n}</span>
            <span className="text-[19px] font-bold text-[hsl(var(--slide-text))] w-[300px] shrink-0">{s.t}</span>
            <span className="text-[15.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.35] flex-1">{s.d}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[12px] max-w-[1720px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          После 20+ демо стало понятно, кто покупает, а кто нет; кто принимает решение и как выстраивать сделку. Мы точно знали, на кого выходить, кому показывать продукт и как продавать. Методом проб и ошибок, не сдаваясь, - всё получилось.
        </p>
      </div>
    </div>
  );
}
