import { useIsMobile } from "@/hooks/use-mobile";

const witnesses = [
  {
    t: "Свидетель 1 · браузер",
    tag: "НЕНАДЁЖНЫЙ",
    body: "Код на твоей странице. Блокировщики и настройки iPhone затыкают ему рот. И главное: если человек оплатил и закрыл вкладку, не дождавшись возврата на сайт, - события не будет вообще.",
  },
  {
    t: "Свидетель 2 · твой сервер",
    tag: "НАДЁЖНЫЙ",
    body: "Сообщает о той же покупке напрямую. Заблокировать нельзя: это разговор двух серверов, в браузере покупателя блокировать нечего. В 2026 Meta считает это нормой, а не продвинутой опцией.",
  },
  {
    t: "Общий номер чека",
    tag: "ЧТОБЫ НЕ ПОСЧИТАЛИ ДВАЖДЫ",
    body: "Если оба доложат об одной покупке, Meta посчитает две, и ты решишь, что реклама окупается вдвое лучше. Оба называют один номер - Meta понимает, что случай один, и склеивает.",
  },
];

export default function L12SlidePixelServerSide() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Рычаг 2 · Данные · серверная отправка
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          У покупки должно быть <span className="text-[hsl(var(--slide-gold))]">два свидетеля</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
          С одним браузером ты видишь половину продаж - и алгоритм учится на половине примеров.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {witnesses.map((w) => (
            <div key={w.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
              <div className="flex items-baseline justify-between gap-[6px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{w.t}</p>
                <p className="text-[6px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold)/0.7)] shrink-0">{w.tag}</p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{w.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Как подключить сервер и настроить склейку - в дополнительных материалах урока, вместе с готовым промптом.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Рычаг 2 · Данные · серверная отправка
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        У покупки должно быть <span className="text-[hsl(var(--slide-gold))]">два свидетеля</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
        С одним браузером ты видишь половину продаж - и алгоритм учится на половине примеров.
      </p>
      <div className="grid grid-cols-3 gap-[20px] mb-[24px] max-w-[1700px]">
        {witnesses.map((w) => (
          <div key={w.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[2px]">{w.t}</p>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold)/0.75)] mb-[8px]">{w.tag}</p>
            <p className="text-[15.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{w.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[16px] max-w-[1700px]">
        <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
          Как подключить сервер и настроить склейку - в дополнительных материалах урока, вместе с готовым промптом.
        </p>
      </div>
    </div>
  );
}
