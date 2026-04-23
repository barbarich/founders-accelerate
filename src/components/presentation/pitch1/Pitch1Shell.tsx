import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ChevronsRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ScaledSlide from "../ScaledSlide";

import Slide00Cover from "./slides/Slide00Cover";
import SlideAboutMe from "./slides/SlideAboutMe";
import SlideCompanies from "./slides/SlideCompanies";
import Slide01ColdFact from "./slides/Slide01ColdFact";
import Slide02Thesis from "./slides/Slide02Thesis";
import Slide03Pipeline from "./slides/Slide03Pipeline";
import Slide05DividerT1 from "./slides/Slide05DividerT1";
import Slide06WhyValidation from "./slides/Slide06WhyValidation";
import Slide07Playbook from "./slides/Slide07Playbook";
import Slide08MikeyCase from "./slides/Slide08MikeyCase";
import Slide09DividerT2 from "./slides/Slide09DividerT2";
import Slide10MarketParadox from "./slides/Slide10MarketParadox";
import Slide11LiveDemo from "./slides/Slide11LiveDemo";
import Slide12WhatYouSaw from "./slides/Slide12WhatYouSaw";
import Slide13DividerT3 from "./slides/Slide13DividerT3";
import Slide14Stack from "./slides/Slide14Stack";
import Slide15MetaminderCase from "./slides/Slide15MetaminderCase";
import Slide16MikeyFlow from "./slides/Slide16MikeyFlow";
import Slide17MCPMixpanel from "./slides/Slide17MCPMixpanel";
import Slide18WorkflowRules from "./slides/Slide18WorkflowRules";
import Slide19DividerT4 from "./slides/Slide19DividerT4";
import Slide20WhyManual from "./slides/Slide20WhyManual";
import Slide21Method from "./slides/Slide21Method";
import Slide22MetaminderManual from "./slides/Slide22MetaminderManual";
import Slide23PostAutomation from "./slides/Slide23PostAutomation";
import Slide24LinkedInScript from "./slides/Slide24LinkedInScript";
import Slide25BridgeToOffer from "./slides/Slide25BridgeToOffer";
import Slide26ProgramTable from "./slides/Slide26ProgramTable";
import Slide27Outcomes from "./slides/Slide27Outcomes";
import Slide28Offer from "./slides/Slide28Offer";
import Slide29QA from "./slides/Slide29QA";
import Slide30Finale from "./slides/Slide30Finale";

const slides = [
  { name: "Cover", c: Slide00Cover },
  { name: "Кто я", c: SlideAboutMe },
  { name: "Опыт · компании", c: SlideCompanies },
  { name: "Холодный факт", c: Slide01ColdFact },
  { name: "Главный тезис", c: Slide02Thesis },
  { name: "Пайплайн", c: Slide03Pipeline },
  { name: "Тема 1", c: Slide05DividerT1 },
  { name: "Почему валидация", c: Slide06WhyValidation },
  { name: "Playbook", c: Slide07Playbook },
  { name: "Кейс Mikey", c: Slide08MikeyCase },
  { name: "Тема 2", c: Slide09DividerT2 },
  { name: "Парадокс рынка", c: Slide10MarketParadox },
  { name: "Живое демо", c: Slide11LiveDemo },
  { name: "Что вы увидели", c: Slide12WhatYouSaw },
  { name: "Тема 3", c: Slide13DividerT3 },
  { name: "Мой стек", c: Slide14Stack },
  { name: "Кейс MetaMinder", c: Slide15MetaminderCase },
  { name: "Фича в Mikey", c: Slide16MikeyFlow },
  { name: "MCP · Mixpanel", c: Slide17MCPMixpanel },
  { name: "5 правил workflow", c: Slide18WorkflowRules },
  { name: "Тема 4", c: Slide19DividerT4 },
  { name: "Почему руками", c: Slide20WhyManual },
  { name: "Метод", c: Slide21Method },
  { name: "MetaMinder вручную", c: Slide22MetaminderManual },
  { name: "Автоматизация", c: Slide23PostAutomation },
  { name: "LinkedIn DM", c: Slide24LinkedInScript },
  { name: "Переход к офферу", c: Slide25BridgeToOffer },
  { name: "Программа", c: Slide26ProgramTable },
  { name: "Что получаете", c: Slide27Outcomes },
  { name: "Оффер", c: Slide28Offer },
  { name: "Q&A", c: Slide29QA },
  { name: "Финал", c: Slide30Finale },
];

const TOTAL = slides.length;

function getSlideContent(i: number) {
  const S = slides[i]?.c;
  return S ? <S /> : null;
}

export default function Pitch1Shell() {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [swipeHintVisible, setSwipeHintVisible] = useState(true);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((index: number) => {
    if (index === displayed || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setDisplayed(index);
      setCurrent(index);
      requestAnimationFrame(() => setTransitioning(false));
    }, 200);
    setSwipeHintVisible(false);
  }, [displayed, transitioning]);

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1)), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && showGrid) { setShowGrid(false); return; }
      if (e.key === "Escape" && isFullscreen) document.exitFullscreen?.();
      if (e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen?.(); }
      if (e.key === "g" || e.key === "G") setShowGrid((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, showGrid, isFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => {
      setControlsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setControlsVisible(false), 3000);
    };
    window.addEventListener("mousemove", show);
    show();
    return () => { window.removeEventListener("mousemove", show); clearTimeout(timer); };
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.();
  };

  if (showGrid) {
    return (
      <div className="w-full h-screen overflow-auto p-8" style={{ background: "#FFFFFF" }}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium" style={{ color: "#0A0A0A" }}>Все слайды</h2>
          <button onClick={() => setShowGrid(false)} className="p-2" style={{ color: "#666666" }}>
            <X size={24} />
          </button>
        </div>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-4 gap-4'}`}>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setDisplayed(i); setShowGrid(false); }}
              className="aspect-video relative overflow-hidden transition-all"
              style={{
                border: i === current ? "1px solid #0A0A0A" : "1px solid #E5E5E5",
                background: "#FFFFFF",
              }}
            >
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 px-2 py-1" style={{ background: "rgba(255,255,255,0.95)", borderTop: "0.5px solid #E5E5E5" }}>
                <span className="text-[11px]" style={{ color: "#666666" }}>{i}. {slides[i].name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex overflow-hidden relative" style={{ background: "#FFFFFF" }}>
      {!isMobile && showSidebar && (
        <div className="w-[220px] h-full overflow-y-auto shrink-0 flex flex-col" style={{ background: "#FAFAFA", borderRight: "0.5px solid #E5E5E5" }}>
          <div className="p-3 flex items-center justify-between" style={{ borderBottom: "0.5px solid #E5E5E5" }}>
            <span className="text-[10px] uppercase tracking-[0.1em]" style={{ color: "#666666" }}>Слайды</span>
            <button onClick={() => setShowSidebar(false)} style={{ color: "#666666" }}>
              <X size={14} />
            </button>
          </div>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setDisplayed(i); }}
              className="p-2 mx-2 my-1 aspect-video relative overflow-hidden transition-all"
              style={{
                background: "#FFFFFF",
                border: i === current ? "1px solid #0A0A0A" : "0.5px solid #E5E5E5",
              }}
            >
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 px-1.5 py-0.5" style={{ background: "rgba(255,255,255,0.9)" }}>
                <span className="text-[9px]" style={{ color: "#666666" }}>{i}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 relative flex flex-col">
        <div
          className="flex-1 relative"
          onClick={() => { if (!isMobile) next(); }}
          onTouchStart={(e) => {
            const t = e.touches[0];
            touchStartRef.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            if (!touchStartRef.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            touchStartRef.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
              if (dx < 0) next(); else prev();
            } else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
              next();
            }
          }}
        >
          <div className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            <ScaledSlide>{getSlideContent(displayed)}</ScaledSlide>
          </div>

          {isMobile && current === 0 && swipeHintVisible && (
            <div className="absolute bottom-20 inset-x-0 flex justify-center animate-pulse pointer-events-none">
              <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ background: "rgba(250,250,250,0.95)", border: "0.5px solid #E5E5E5" }}>
                <span className="text-xs" style={{ color: "#666666" }}>Свайпните</span>
                <ChevronsRight size={16} style={{ color: "#666666" }} className="animate-bounce-x" />
              </div>
            </div>
          )}
        </div>

        <div className={`absolute bottom-0 inset-x-0 transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="h-[2px]" style={{ background: "#E5E5E5" }}>
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${((current + 1) / TOTAL) * 100}%`, background: "#0A0A0A" }}
            />
          </div>

          <div className={`flex items-center justify-between ${isMobile ? 'px-3 py-2' : 'px-6 py-3'}`} style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderTop: "0.5px solid #E5E5E5" }}>
            <div className="flex items-center gap-3">
              {!isMobile && !showSidebar && (
                <button
                  onClick={(e) => { e.stopPropagation(); setShowSidebar(true); }}
                  className="p-2 transition-colors"
                  style={{ color: "#666666" }}
                  title="Показать слайды"
                >
                  <ChevronRight size={16} />
                </button>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); setShowGrid(true); }}
                className="p-2 transition-colors"
                style={{ color: "#666666" }}
                title="Все слайды (G)"
              >
                <Grid3X3 size={isMobile ? 14 : 16} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="p-2 transition-colors disabled:opacity-30"
                style={{ color: "#666666" }}
                disabled={current === 0}
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm font-mono min-w-[60px] text-center" style={{ color: "#666666" }}>
                {current} / {TOTAL - 1}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="p-2 transition-colors disabled:opacity-30"
                style={{ color: "#666666" }}
                disabled={current === TOTAL - 1}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
              className="p-2 transition-colors"
              style={{ color: "#666666" }}
              title="Полный экран (F5)"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}