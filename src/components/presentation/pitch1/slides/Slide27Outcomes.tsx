import { Eyebrow, H1, Mono, Divider, SlideFrame, COLORS } from "./_shared";

export default function Slide27Outcomes() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-9 text-center">
        <Eyebrow>Идея программы</Eyebrow>

        <H1 size={64}>
          Стать полноценным<br/>
          <span style={{ color: COLORS.accent }}>AI-фаундером</span>
        </H1>

        <div style={{ fontSize: 24, color: COLORS.muted, lineHeight: 1.55, maxWidth: 1100 }}>
          В одиночку построить продукт, на который раньше нужны были команды,
          инвесторы и ресурсы. Сегодня — нужны только навыки, ментор и мотивация.
        </div>

        <div style={{ width: 520 }}><Divider /></div>

        <div className="text-left">
          <Mono size={22}>{`→  Валидированная идея с сигналом «купят»
→  Узкое позиционирование под рынок
→  Работающий MVP, доведённый до деплоя
→  Первые платящие — до конца программы`}</Mono>
        </div>

        <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 6 }}>
          Не диплом. Продукт, который приносит деньги.
        </div>
      </div>
    </SlideFrame>
  );
}