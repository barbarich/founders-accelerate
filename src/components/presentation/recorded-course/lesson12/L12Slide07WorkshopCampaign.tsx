import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "01",
    t: "business.facebook.com",
    body: "Открываем Business Manager и проверяем карту активов: Pages → Datasets → Ad Accounts → People. Чего нет - добавляем прямо сейчас, до Ads Manager.",
  },
  {
    n: "02",
    t: "Events Manager · данные идут?",
    body: "Смотрим события за последние 24 часа. Видим PageView и своё целевое событие - двигаемся дальше. Не видим - возвращаемся в Test Events и чиним. В кабинет с мёртвым пикселем идти незачем.",
  },
  {
    n: "03",
    t: "Ad Account · карта и лимит",
    body: "Платёжный метод привязан. Ставим spend limit на аккаунт - страховка от случайного слива, пока учишься. Новый аккаунт не заливаем сразу большими деньгами.",
  },
  {
    n: "04",
    t: "Page и Instagram прогреты",
    body: "Facebook Page привязана к Business Manager, Instagram подключён. На странице есть аватарка и хотя бы 5 постов - иначе низкий quality score и дорогой показ с первого дня.",
  },
];

export default function L12Slide07WorkshopCampaign() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Воркшоп · Шаг 1 · Кабинет
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Открываю кабинет <span className="text-[hsl(var(--slide-gold))]">и проверяю, что данные идут</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Показываю на своём кабинете. Четыре проверки до того, как нажать Create.
        </p>
        <div className="grid grid-cols-2 gap-[4px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Воркшоп · Шаг 1 · Кабинет и проверка данных
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Открываю кабинет <span className="text-[hsl(var(--slide-gold))]">и проверяю, что данные идут</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1700px]">
        Дальше всё - на моём экране. Четыре проверки до того, как нажать Create: половина провальных запусков ломается именно здесь.
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <div className="flex items-baseline gap-[10px] mb-[6px]">
              <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t}</span>
            </div>
            <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[38px]">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
