import { Eyebrow, Mono, Divider, SlideFrame, COLORS } from "./_shared";

export default function Slide10MarketParadox() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="text-center"><Eyebrow>Парадокс рынка 2026</Eyebrow></div>
        <Mono size={26}>{`→ В 90% ниш уже есть 5+ конкурентов
→ Клиент не выбирает лучший продукт —
   он выбирает самый понятный
→ Одно узкое позиционирование > десять фич`}</Mono>
        <div style={{ width: 600, marginTop: 20 }}><Divider /></div>
        <div style={{ fontSize: 22, color: COLORS.muted, textAlign: "center" }}>
          Ресерч = нахождение пустого места на карте рынка
        </div>
      </div>
    </SlideFrame>
  );
}