import { Eyebrow, Mono, Divider, SlideFrame } from "./_shared";

export default function Slide12WhatYouSaw() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="text-center"><Eyebrow>Что вы только что увидели</Eyebrow></div>
        <Mono size={26}>{`→ Не «спросить ChatGPT» — система из агентов
→ Структурированный отчёт, не эссе
→ Цитаты боли из реальных источников
→ Ответ на вопрос «что НЕ строить»`}</Mono>
        <div style={{ width: 600, marginTop: 20 }}><Divider /></div>
        <div style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.25 }}>
          Это то, что ещё недавно стоило $10–20K и неделю.
        </div>
      </div>
    </SlideFrame>
  );
}