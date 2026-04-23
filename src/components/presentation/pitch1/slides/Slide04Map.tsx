import { Eyebrow, Mono, SlideFrame, SlideFooter } from "./_shared";

export default function Slide04Map() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-12">
        <div className="text-center"><Eyebrow>Что увидите сегодня</Eyebrow></div>
        <Mono size={28}>{`→ Валидация: playbook 10-15 разговоров
→ Ресерч: PMF Research Agent, живое демо
→ MVP: мой рабочий стек и workflow
→ Клиенты: скрипт, который работает у меня сейчас`}</Mono>
      </div>
      <SlideFooter>И оффер в конце — только для тех, кто здесь живьём.</SlideFooter>
    </SlideFrame>
  );
}