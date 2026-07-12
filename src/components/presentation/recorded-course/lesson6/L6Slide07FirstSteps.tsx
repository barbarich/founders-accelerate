import { useIsMobile } from "@/hooks/use-mobile";

const habits = [
  {
    num: "01",
    title: "Давай контекст, а не команду",
    what: "Не «сделай кнопку», а «у меня продукт для X, нужна кнопка, чтобы юзер сделал Y». Claude работает настолько хорошо, насколько понимает, зачем.",
    example: "Плохо: «добавь оплату» · Хорошо: «продаю курс за $19, нужна оплата картой»",
  },
  {
    num: "02",
    title: "Проси план до кода",
    what: "«Сначала покажи план, код не пиши». Ты видишь, что Claude собирается сделать, и ловишь ошибку до того, как он тронул проект.",
    example: "«Опиши по шагам, что и в каких файлах поменяешь. Жду ок от меня»",
  },
  {
    num: "03",
    title: "Двигайся маленькими шагами",
    what: "Одна задача - одно изменение. Так проще проверить результат и сразу понять, где именно сломалось, если что-то пошло не так.",
    example: "Не «собери весь экран», а «сделай сначала список, потом добавим форму»",
  },
  {
    num: "04",
    title: "Проси Claude проверить себя",
    what: "«Перечитай, что сделал, и найди слабые места». Вторая пара глаз - бесплатно. Часто он сам находит и чинит то, что упустил.",
    example: "«Проверь свой код на ошибки и edge-кейсы, честно скажи, где рискованно»",
  },
];

export default function L6Slide07FirstSteps() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          С чего начать
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          4 привычки, с которых начинается работа с Claude
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Не нужны сложные приёмы. Хороший результат даёт база: контекст, план, маленькие шаги и самопроверка. Это то, что делаешь каждый день.
        </p>
        <div className="space-y-[4px]">
          {habits.map((h) => (
            <div key={h.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <div className="flex items-baseline gap-[6px] mb-[1px]">
                <p className="text-[9px] font-mono font-bold text-[hsl(var(--slide-gold))]">{h.num}</p>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{h.title}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[1px]">{h.what}</p>
              <p className="text-[6.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.35]">{h.example}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        С чего начать - база, а не сложные приёмы
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        4 привычки, с которых начинается работа с <span className="text-[hsl(var(--slide-gold))]">Claude</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Тебе не нужны сложные трюки, чтобы начать. Почти весь хороший результат даёт четыре простые привычки: дай контекст, попроси план, двигайся маленькими шагами и проси Claude проверить себя.
      </p>

      <div className="grid grid-cols-2 gap-[16px] max-w-[1700px]">
        {habits.map((h) => (
          <div key={h.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px]">
            <div className="flex items-baseline gap-[12px] mb-[8px]">
              <p className="text-[22px] font-mono font-bold text-[hsl(var(--slide-gold))]">{h.num}</p>
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{h.title}</p>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[10px]">{h.what}</p>
            <p className="text-[13px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.5] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">{h.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
