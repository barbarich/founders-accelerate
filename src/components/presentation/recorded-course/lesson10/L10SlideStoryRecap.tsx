import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { el: "Герой - клиент", body: "Не ты и не продукт. Читатель ищет в истории себя. «Я помог [имя] достичь [результат]» сильнее, чем «мой продукт делает [фича]»." },
  { el: "Конфликт - боль", body: "Опиши боль так точно, что человек думает «это про меня». Без боли истории нет, есть описание." },
  { el: "Трансформация - до/после", body: "Конкретное состояние ДО (с цифрами) и ПОСЛЕ. «Тратил 3 часа в день → 20 минут»." },
  { el: "Деталь - доверие", body: "«Вторник, 2 ночи, 47 непрочитанных». Конкретная деталь превращает текст в историю." },
];

export default function L10SlideStoryRecap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Анатомия истории · напоминание
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Четыре элемента. <span className="text-[hsl(var(--slide-gold))]">Ты собрал их в уроке 5</span>.
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5] mb-[10px]">
          Здесь - коротко, чтобы применить к продаже себя. Нужны детали - вернись к уроку 5.
        </p>
        <div className="grid grid-cols-2 gap-[7px] mb-[9px]">
          {parts.map((p) => (
            <div key={p.el} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] leading-[1.25] mb-[2px]">{p.el}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[11px] py-[8px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Одно исключение - <span className="text-[hsl(var(--slide-gold))]">история основателя</span>: там герой ты. И это не спор с правилом - ты сам был своим клиентом (дальше в уроке).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Анатомия истории · напоминание
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
        Четыре элемента. <span className="text-[hsl(var(--slide-gold))]">Ты собрал их в уроке 5</span>.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5] max-w-[1800px] mb-[26px]">
        Здесь - коротко, чтобы применить к продаже себя. Нужны детали - вернись к уроку 5.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1800px] mb-[22px]">
        {parts.map((p) => (
          <div key={p.el} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2] mb-[6px]">{p.el}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1800px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Одно исключение - <span className="text-[hsl(var(--slide-gold))]">история основателя</span>: там герой ты. И это не спор с правилом - ты сам был своим клиентом (дальше в уроке).
        </p>
      </div>
    </div>
  );
}
