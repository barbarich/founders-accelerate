import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { name: "HeyGen", tag: "СВОЙ АВАТАР · 100+ АКТЁРОВ", body: "Снимаешь 2 минуты себя — получаешь цифрового двойника, который говорит любой текст на 30 языках. Или берёшь готовое «лицо» из библиотеки. $24+/мес." },
  { name: "Arcads / Creatify", tag: "UGC-АКТЁРЫ ПОД РЕКЛАМУ", body: "Библиотека AI-актёров, заточенных под перформанс-видео: «отзыв», «распаковка», «говорящая голова». Вставляешь скрипт — получаешь 10 роликов." },
  { name: "Higgsfield AI", tag: "КИНОСТАЙЛ · КОНТРОЛЬ ПЕРСОНАЖА", body: "Когда нужен не говорящий аватар, а сцена: персонаж, камера, движение. Сделан под ад-креативы — лучше Sora для перформанса." },
  { name: "Kling / Veo 3", tag: "ВИДЕО ИЗ ТЕКСТА И КАРТИНКИ", body: "B-roll, продуктовые вставки, короткие сцены между репликами аватара. Kling быстрее, Veo 3 кинематографичнее." },
  { name: "ElevenLabs", tag: "ГОЛОС · КЛОН · ОЗВУЧКА", body: "Озвучка скрипта живым голосом или клон твоего собственного. Подставляешь под аватара, если нужен другой язык или интонация." },
  { name: "Claude / GPT-5", tag: "СКРИПТ · HOOK · CTA", body: "Сам сценарий говорящего видео: hook за 0.8 сек, боль, результат, один CTA. Промпт на следующем слайде — 5 скриптов пачкой." },
];

const flow = [
  "Скрипт: Claude/GPT пишет 5 вариантов по 30 секунд (hook → боль → результат → CTA)",
  "Аватар: выбираешь себя (HeyGen) или UGC-актёра (Arcads) под тон бренда",
  "Генерация: 5–10 роликов с разными hook — алгоритму нужен объём, не один «идеальный»",
  "В кампанию: грузишь видео в Dynamic Creative рядом со статикой — половина/половина",
];

export default function FOM5SlideAvatars() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Аватары · говорящее видео без съёмок
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Лицо в кадре конвертит — <span className="text-[hsl(var(--slide-gold))]">а снимать его больше не нужно</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          UGC-видео (живой человек говорит о продукте) даёт самый высокий CTR в 2026. AI делает такого «человека» за вечер. Стек:
        </p>
        <div className="grid grid-cols-2 gap-[4px] mb-[5px]">
          {tools.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[4px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{t.name}</p>
              <p className="text-[6px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[1px]">{t.tag}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{t.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[5px] px-[8px] py-[4px]">
          <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Workflow за вечер</p>
          <ol className="space-y-[1px]">
            {flow.map((f, i) => (
              <li key={i} className="text-[7px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35]">
                <span className="text-[hsl(var(--slide-gold))]">{i + 1}.</span> {f}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Аватары · говорящее видео без съёмок
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Лицо в кадре конвертит — <span className="text-[hsl(var(--slide-gold))]">а снимать его больше не нужно</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[20px] max-w-[1650px]">
        UGC-видео — живой человек говорит о продукте — даёт самый высокий CTR в 2026. Раньше это был кастинг и съёмка. Сейчас AI делает такого «человека» за вечер.
      </p>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[18px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[14px]">
            <p className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[2px]">{t.name}</p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[6px]">{t.tag}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{t.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[16px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Workflow за вечер</p>
        <div className="grid grid-cols-4 gap-[16px]">
          {flow.map((f, i) => (
            <div key={i}>
              <span className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-none">{i + 1}</span>
              <p className="text-[14px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] mt-[4px]">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
