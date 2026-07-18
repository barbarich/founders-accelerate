import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { name: "Ты на телефоне", tag: "ГЛАВНЫЙ ФОРМАТ 2026", body: "Сырое видео фаундера от первого лица бьёт вылизанный продакшн. Люди верят человеку, а не рекламе. Снял на телефон, рассказал историю - готово." },
  { name: "HeyGen · Avatar V", tag: "UGC / АВАТАР", body: "Клон тебя или готовые «лица» читают скрипт на 175+ языках. Когда нужно много UGC-роликов или ты не хочешь в кадр каждый раз." },
  { name: "Higgsfield (Veo 3.1 / Kling 3.0)", tag: "СЦЕНЫ БЕЗ КАМЕРЫ", body: "Один доступ к топ-видеомоделям 2026. Описываешь сцену - получаешь b-roll и динамичные вставки под рекламу." },
  { name: "CapCut", tag: "МОНТАЖ · СУБТИТРЫ", body: "Склейка, субтитры, тренд-звуки. 80% рекламы смотрят без звука - субтитры обязательны." },
];

const rules = [
  "Первые 3 секунды - хук. Не логотип, а конфликт из твоей истории.",
  "Твоё лицо в кадре конвертит лучше стоков - в 2026 честность продаёт.",
  "Вертикаль 9:16 под ленту и сторис, субтитры всегда.",
  "Не один ролик, а 5-10 версий одного хука. Алгоритм выберет.",
];

export default function L11SlideVideoProduction() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Съёмка видео · без камеры и команды
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Видео-креативы <span className="text-[hsl(var(--slide-gold))]">на AI за вечер</span>
        </h2>
        <div className="grid grid-cols-2 gap-[4px] mb-[5px]">
          {tools.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{t.name}</p>
              <p className="text-[6px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[1px]">{t.tag}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{t.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[5px] px-[8px] py-[5px]">
          <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">4 правила</p>
          {rules.map((r, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">· {r}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Съёмка видео · без камеры и съёмочной группы
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        Видео-креативы <span className="text-[hsl(var(--slide-gold))]">на AI за вечер</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px] mb-[18px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[14px]">
            <div className="flex items-baseline justify-between gap-[10px] mb-[2px]">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{t.name}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] shrink-0">{t.tag}</p>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{t.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[14px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">4 правила ролика, который конвертит</p>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[4px]">
          {rules.map((r, i) => (
            <p key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))]">·</span> {r}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
