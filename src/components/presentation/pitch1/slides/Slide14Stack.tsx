import { Eyebrow, Mono, SlideFrame, SlideFooter } from "./_shared";

export default function Slide14Stack() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="text-center"><Eyebrow>Рабочий стек</Eyebrow></div>
        <Mono size={26}>{`Lovable   →  дизайн, прототипы, UI, MVP, лендинги
Claude    →  реализация кода, агенты, разработка
MCP       →  подключение Claude к реальным системам
             (Mixpanel, Figma, Stripe, Supabase, Gmail)`}</Mono>
      </div>
      <SlideFooter>Не использую Cursor. Lovable + Claude закрывают всё.</SlideFooter>
    </SlideFrame>
  );
}