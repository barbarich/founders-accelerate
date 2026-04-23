import { Eyebrow, H2, Mono, SlideFrame, SlideFooter } from "./_shared";

export default function Slide22MetaminderManual() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8 text-center">
        <Eyebrow>Кейс MetaMinder</Eyebrow>
        <H2 size={28}>Первые 7 клиентов — как было на самом деле</H2>
        <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25, maxWidth: 1100 }}>
          Никакой магии. Никаких хаков.<br/>Просто тяжёлая работа фаундера.
        </div>
        <Mono size={20}>{`Знакомлюсь → слушаю боль → показываю демо →
отвечаю на возражения → закрываю → онбордю

И так 7 раз.`}</Mono>
      </div>
      <SlideFooter>Ни один клиент не пришёл с сайта.</SlideFooter>
    </SlideFrame>
  );
}