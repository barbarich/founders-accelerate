import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { t: "Найди тред, где спрашивают", d: "«Посоветуйте инструмент для…», «Чем заменить…», «Как решить…». 10-20 таких тредов в неделю." },
  { t: "Ответь без ссылки", d: "Разбери проблему, дай 2-3 варианта решения - и минимум один без своего продукта. Ссылку не вставляй вообще." },
  { t: "Спроси разрешение", d: "«Скинуть в личку чек-лист? Без ссылок». Соглашаются 10-30% - это и есть твои лиды." },
  { t: "В личке - один вопрос и звонок", d: "Отдай обещанное, задай один уточняющий вопрос, предложи 15 минут. Деньги случаются здесь, а не в треде." },
];

const ready = [
  "Цена на сайте и кнопка оплаты - интерес живёт часы, а не недели",
  "Готовый чек-лист или шаблон, который не стыдно отдать бесплатно",
  "Оффер для первых: «первым 10 - такая цена навсегда»",
];

export default function L16SlideCommunities() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[15px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Комьюнити · Reddit, Discord, чаты
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Продают комментарии, а не посты
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Пост про свой продукт - это реклама, её удалят. Ответ в чужом треде живёт годами. Ритм: 90 минут в неделю.
        </p>
        <div className="space-y-[4px] mb-[6px]">
          {steps.map((s, i) => (
            <div key={s.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[5px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {s.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[6px] mb-[5px]">
          <p className="text-[8px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Готовь до первого комментария</p>
          {ready.map((r) => (
            <p key={r} className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.35] pl-[8px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{r}</p>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">
          Бонус 2026: ответы на Reddit часто цитируют ChatGPT и Perplexity - один хороший ответ работает и на людей, и на AI-поиск.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[32px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Комьюнити · Reddit, Discord, профильные чаты
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Продают комментарии, <span className="text-[hsl(var(--slide-gold))]">а не посты</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[18px] max-w-[1800px]">
        Пост про свой продукт - это реклама, её удалят. Ответ в чужом треде живёт годами. Рабочий ритм - 90 минут в неделю.
      </p>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1900px] mb-[18px]">
        {steps.map((s, i) => (
          <div key={s.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[14px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[17.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[3px] mb-[5px]">{s.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[13px] max-w-[1900px] mb-[12px]">
        <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[7px]">Готовь до первого комментария</p>
        <div className="grid grid-cols-3 gap-x-[24px]">
          {ready.map((r) => (
            <p key={r} className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[14px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{r}</p>
          ))}
        </div>
      </div>
      <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] max-w-[1900px]">
        Бонус 2026: ответы на Reddit часто цитируют ChatGPT и Perplexity. Один хороший ответ работает и на людей, и на AI-поиск.
      </p>
    </div>
  );
}
