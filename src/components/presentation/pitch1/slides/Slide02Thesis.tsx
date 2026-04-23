import { H1, Divider, SlideFrame } from "./_shared";

export default function Slide02Thesis() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center text-center gap-12">
        <H1 size={64}>Проблема не в инструментах.<br/>Lovable есть у всех.</H1>
        <div style={{ width: 480 }}><Divider /></div>
        <H1 size={64}>Проблема — в последовательности<br/>и в том, что НЕ строить.</H1>
      </div>
    </SlideFrame>
  );
}