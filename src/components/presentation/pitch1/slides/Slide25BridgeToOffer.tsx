import { Divider, SlideFrame } from "./_shared";

export default function Slide25BridgeToOffer() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-12 text-center">
        <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Сегодня я провёл с вами<br/>90 минут.
        </div>
        <div style={{ width: 480 }}><Divider /></div>
        <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          В программе — 12 часов.<br/>Индивидуальная работа над вашим проектом.
        </div>
      </div>
    </SlideFrame>
  );
}