import { Eyebrow, Mono, Divider, SlideFrame } from "./_shared";

export default function Slide27Outcomes() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="text-center"><Eyebrow>Через 30 дней у вас:</Eyebrow></div>
        <Mono size={26}>{`→  Валидированная идея с сигналом «купят»
→  Ресерч конкурентов и одно узкое позиционирование
→  Работающий MVP, доведённый до деплоя
→  Первые платящие — до конца программы`}</Mono>
        <div style={{ width: 600, marginTop: 16 }}><Divider /></div>
        <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.02em", textAlign: "center" }}>
          Не диплом. Продукт.
        </div>
      </div>
    </SlideFrame>
  );
}