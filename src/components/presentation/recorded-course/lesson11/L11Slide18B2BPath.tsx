import { useIsMobile } from "@/hooks/use-mobile";

const moves = [
  { n: "01", t: "Личные соцсети фаундера", tag: "FB · LinkedIn · X", body: "Пиши о продукте каждый день: путь, инсайты, фейлы, скриншоты. Люди не покупают у ноунейм-бренда — покупают у фаундера, за чьим путём следят." },
  { n: "02", t: "Прямой обзвон сети", tag: "ДРУЗЬЯ · ЭКС-КОЛЛЕГИ", body: "Выпиши всех, кто подходит под ICP. Пиши лично: «Запустил продукт, решает X. Подходит под вас? Покажу за 15 минут». Первые клиенты MetaMinder — отсюда." },
  { n: "03", t: "Контент с продуктом", tag: "ПОСТЫ · ВИДЕО · DEMO", body: "Каждая фича — пост. Каждый кейс — пост. Каждое возражение — пост. Подписчики, которые видят продукт в работе неделями, конвертируются сами." },
  { n: "04", t: "Cold-стек · когда есть кейсы", tag: "APOLLO + INSTANTLY + LinkedIn Helper", body: "Apollo $49: 500 ICP-контактов · Instantly $37: warmup + отправка · LinkedIn Helper $15: параллельный канал. 500 контактов → 5–10 встреч → 1–2 клиента." },
];

const metaminder = [
  { num: "Сотни", t: "клиентов на всех континентах" },
  { num: "$0", t: "на платную рекламу" },
  { num: "5 фаундеров", t: "обзвонил лично — первые сделки оттуда" },
];

export default function L11Slide18B2BPath() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Запуск B2B · бренд фаундера → стек
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Первые клиенты приходят <span className="text-[hsl(var(--slide-gold))]">не из Apollo, а из тебя</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Продукт ноунейм — ему не верят. Но верят лично тебе. Бренд фаундера закрывает первые сделки.
        </p>
        <div className="space-y-[4px] mb-[5px]">
          {moves.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
              </p>
              <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{s.tag}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[5px] px-[8px] py-[5px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Мой счёт · MetaMinder</p>
          <div className="grid grid-cols-3 gap-[4px]">
            {metaminder.map((m) => (
              <div key={m.num}>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{m.num}</p>
                <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Запуск B2B · бренд фаундера → стек
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Первые клиенты приходят <span className="text-[hsl(var(--slide-gold))]">не из Apollo, а из тебя</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[20px] max-w-[1600px]">
        Твой продукт на старте — ноунейм. Ему не верят. Но люди верят лично тебе — твоему пути, репутации, нетворку. Бренд фаундера закрывает первые сделки, когда у продукта ещё нет кейсов.
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px] mb-[16px]">
        {moves.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[24px] py-[14px]">
            <div className="flex items-baseline gap-[10px] mb-[2px]">
              <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[6px] ml-[42px]">{s.tag}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[42px]">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[16px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Мой счёт · MetaMinder · без бюджета на рекламу</p>
        <div className="grid grid-cols-3 gap-[20px]">
          {metaminder.map((m) => (
            <div key={m.num}>
              <p className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[4px]">{m.num}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{m.t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
