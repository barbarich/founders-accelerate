import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  {
    n: "01",
    t: "Лендинг с одним измеримым действием",
    body: "Sign up, Buy или Get demo - одно действие, одна кнопка. Если цель страницы «узнать о продукте», рекламу запускать рано: алгоритму нечего оптимизировать.",
  },
  {
    n: "02",
    t: "Пиксель живой и проверен",
    body: "Поставили и прогнали через Test Events в прошлой части. В Events Manager видны свежие события. Не видны - возвращаемся туда, а не идём дальше.",
  },
  {
    n: "03",
    t: "Целевое событие выбрано",
    body: "Purchase, если продажа происходит на сайте. Lead, если собираешь контакты. CompleteRegistration для бесплатного входа. ViewContent - временно, пока событий мало.",
  },
  {
    n: "04",
    t: "5-10 креативов лежат в папке",
    body: "Половина статика, половина видео, все в одном стиле с лендингом. Собрали на AI в прошлой части. Один креатив - это не запуск, это лотерея.",
  },
];

export default function L12Slide03PreFlightChecklist() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Чек-лист перед кабинетом
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Четыре пункта. Нет хотя бы одного - <span className="text-[hsl(var(--slide-gold))]">Ads Manager не открываем</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
          Оба рычага мы только что собрали. Это последняя сверка перед экраном - дальше всё в кабинете.
        </p>
        <div className="grid grid-cols-2 gap-[5px]">
          {items.map((it) => (
            <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
                <span className="text-[hsl(var(--slide-gold))]">{it.n}.</span> {it.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] ml-[12px]">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Чек-лист перед кабинетом
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Четыре пункта. Нет хотя бы одного - <span className="text-[hsl(var(--slide-gold))]">Ads Manager не открываем</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[26px] max-w-[1600px]">
        Оба рычага мы только что собрали. Это последняя сверка перед экраном - дальше всё происходит в кабинете.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {items.map((it) => (
          <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[20px]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{it.n}</span>
              <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{it.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[44px]">{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
