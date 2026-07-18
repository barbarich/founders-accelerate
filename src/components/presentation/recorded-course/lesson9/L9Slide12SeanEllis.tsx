import { useIsMobile } from "@/hooks/use-mobile";

export default function L9Slide12SeanEllis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[7px]">
          Тест на готовность · один вопрос
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Спроси клиентов одну вещь. <span className="text-[hsl(var(--slide-gold))]">40%</span> - порог.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px] mb-[9px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5] italic">
            «Насколько ты расстроишься, если завтра [твой продукт] перестанет существовать?»
          </p>
          <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mt-[4px]">
            Очень расстроюсь · немного · не расстроюсь · уже не пользуюсь
          </p>
        </div>
        <div className="space-y-[6px] mb-[9px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[10px] py-[6px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">40%+ «очень расстроюсь»</p>
            <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">Продукт нужен. Можно масштабировать.</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.4)] px-[10px] py-[6px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-text-muted))]">{`<`} 40%</p>
            <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Пока не нужен. Не лей деньги в рекламу - чини продукт.</p>
          </div>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px]">
          <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">Если у тебя меньше 30 пользователей</p>
          <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">
            Процент не считай - на десяти людях он врёт. Но вопрос всё равно задай голосом. Ответ «честно, я бы и не заметил» скажет тебе больше, чем любая цифра.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Тест на готовность · один вопрос
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        Спроси клиентов одну вещь. <span className="text-[hsl(var(--slide-gold))]">40%</span> - порог.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px] mb-[20px]">
        <p className="text-[27px] text-[hsl(var(--slide-text))] leading-[1.4] italic mb-[8px]">
          «Насколько ты расстроишься, если завтра [твой продукт] перестанет существовать?»
        </p>
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          Очень расстроюсь · немного расстроюсь · не расстроюсь · уже не пользуюсь
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1800px] mb-[20px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[26px] py-[16px]">
          <p className="text-[17px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">40%+ очень расстроюсь</p>
          <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.5]">Продукт нужен. <span className="font-semibold">Можно масштабировать.</span></p>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)] px-[26px] py-[16px]">
          <p className="text-[17px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[6px]">{`<`} 40%</p>
          <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Пока не нужен. <span className="font-semibold">Не лей деньги в рекламу</span> - чини продукт.</p>
        </div>
      </div>
      <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[26px] py-[16px] max-w-[1800px]">
        <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] mb-[5px]">Если у тебя меньше 30 пользователей</p>
        <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Процент не считай - на десяти людях он врёт. Но вопрос всё равно задай, голосом. Ответ «честно, я бы и не заметил» скажет тебе больше, чем любая цифра.
        </p>
      </div>
    </div>
  );
}
