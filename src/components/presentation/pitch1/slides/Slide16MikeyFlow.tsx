import { Eyebrow, Mono, SlideFrame } from "./_shared";

export default function Slide16MikeyFlow() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-12">
        <div className="text-center"><Eyebrow>Фича в Mikey — от идеи до прода</Eyebrow></div>
        <Mono size={28}>{`Lovable  →  прототип и UI новой фичи
   ↓
Смотрю   →  нравится? да / нет
   ↓
Claude   →  реализую в реальном коде
   ↓
Деплой`}</Mono>
        <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em" }}>
          Всё на одном экране. За час.
        </div>
      </div>
    </SlideFrame>
  );
}