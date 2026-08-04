import { useIsMobile } from "@/hooks/use-mobile";

const accelerators = [
  { name: "Y Combinator", tag: "$500K ЗА 7%+", body: "$125K фикс за 7% плюс $375K без фиксированной доли (uncapped MFN SAFE). Шанс поступления ~1.5%, но подать заявку может кто угодно — решает traction и понимание своего рынка, не диплом." },
  { name: "Techstars", tag: "$220K ЗА 5%+", body: "$20K фикс за 5% плюс $200K без фиксированной доли. Десятки региональных программ по всему миру — шанс попасть выше, чем у YC, но менторство разного качества от трека к треку." },
  { name: "Antler", tag: "$100-190K ЗА 10-12%", body: "Единственный из крупных, кто берёт СОЛО-фаундеров без идеи и без команды — кофаундера находишь внутри 10-недельной программы, инвестируют уже в готовую пару." },
  { name: "Entrepreneur First", tag: "ДО $250K ЗА ~8%", body: "Та же модель, что у Antler: сначала ищешь кофаундера и идею (8 недель, стипендия), инвестируют только тех, кто прошёл эту фазу и сформировал команду." },
];

export default function L15SlideAccelerators() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Ещё один путь — акселератор
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          YC, Techstars и что менее раскручено
        </h2>
        <div className="grid grid-cols-1 gap-[6px] mb-[8px]">
          {accelerators.map((a) => (
            <div key={a.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-baseline justify-between gap-[8px] mb-[2px]">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{a.name}</p>
                <p className="text-[7px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] shrink-0">{a.tag}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.5]">
            До подачи: заявка — отдельный документ (короткие ответы + видео на 1 минуту), не твой pitch deck. Equity акселератора — тоже строчка в cap table, считай dilution заранее.
            После: чек часто траншами по milestones, а демо-день — это ещё не деньги, а начало отдельного аутрича.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Ещё один путь — акселератор
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        YC, Techstars и что менее раскручено
      </h2>
      <div className="grid grid-cols-2 gap-[18px] mb-[20px] max-w-[1800px]">
        {accelerators.map((a) => (
          <div key={a.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[24px] py-[16px]">
            <div className="flex items-baseline justify-between gap-[10px] mb-[4px]">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{a.name}</p>
              <p className="text-[12px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] shrink-0">{a.tag}</p>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{a.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[16px] max-w-[1800px]">
        <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.5]">
          До подачи: заявка — отдельный документ (короткие ответы + видео на 1 минуту), не твой pitch deck. Equity акселератора — тоже строчка в cap table, считай dilution заранее.
          После: чек часто выдают траншами по milestones, а демо-день — это ещё не деньги, а начало отдельного аутрича.
        </p>
      </div>
    </div>
  );
}
