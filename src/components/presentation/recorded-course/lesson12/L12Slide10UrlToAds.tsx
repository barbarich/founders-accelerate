import { useIsMobile } from "@/hooks/use-mobile";

const alts = [
  { name: "Adobe Express", tag: "ЭКОСИСТЕМА", body: "Тесная интеграция с Photoshop и Illustrator. Хорош, если команда уже на Adobe." },
  { name: "Kittl (ex Heritage)", tag: "ВЕКТОР + AI", body: "AI-генерация векторных иллюстраций, логотипов и принтов. Быстрее Canva для сложной графики." },
  { name: "Microsoft Designer", tag: "БЕСПЛАТНО", body: "Бесплатный AI-генератор от Microsoft. Интеграция с Copilot. Отличная стартовая точка с нуля." },
];

const steps = [
  "Загружаешь продукт, скриншот или референс в Canva",
  "Magic Design генерирует макеты под любой формат: пост, story, баннер, презентация",
  "Magic Write пишет тексты, хедлайны и CTA на основе одного промпта",
  "Magic Edit меняет объекты, удаляет фон, дорисовывает детали — без навыков дизайна",
  "Экспорт в нужном формате — загружаешь прямо в Meta Ads, Google Ads, TikTok",
];

export default function L12Slide10UrlToAds() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Wow-инструмент · AI-дизайн для фаундеров
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Canva + Magic Studio — <span className="text-[hsl(var(--slide-gold))]">дизайн без дизайнера за $13/мес</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          200M+ пользователей. AI-генерация изображений, видео, текста и презентаций. Pro $12.99/мес. <b className="text-[hsl(var(--slide-gold))]">canva.com</b>
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px] mb-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Workflow за 1 час</p>
          <ol className="space-y-[2px]">
            {steps.map((s, i) => (
              <li key={i} className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))]">{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Альтернативы</p>
        <div className="grid grid-cols-3 gap-[4px]">
          {alts.map((a) => (
            <div key={a.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[6px] py-[4px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{a.name}</p>
              <p className="text-[6px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{a.tag}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Wow-инструмент · AI-дизайн для фаундеров
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        <span className="text-[hsl(var(--slide-gold))]">Canva + Magic Studio</span> — дизайн без дизайнера
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        200M+ пользователей. AI-генерация изображений, видео, текста и презентаций. Pro $12.99/мес. <b className="text-[hsl(var(--slide-gold))]">canva.com</b>
      </p>
      <div className="grid grid-cols-[1.3fr_1fr] gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Workflow за 1 час</p>
          <ol className="space-y-[8px]">
            {steps.map((s, i) => (
              <li key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                <span className="text-[hsl(var(--slide-gold))] font-bold mr-[8px]">{i + 1}.</span>{s}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Альтернативы</p>
          <div className="space-y-[10px]">
            {alts.map((a) => (
              <div key={a.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[12px]">
                <div className="flex items-baseline justify-between mb-[2px]">
                  <p className="text-[18px] font-bold text-[hsl(var(--slide-text))]">{a.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))]">{a.tag}</p>
                </div>
                <p className="text-[14px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
