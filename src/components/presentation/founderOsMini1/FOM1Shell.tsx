import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import FOM1Slide01Cover from "./FOM1Slide01Cover";
import FOM1Slide02MainMistake from "./FOM1Slide02MainMistake";
import FOM1Slide03HonestQuestion from "./FOM1Slide03HonestQuestion";
import FOM1Slide04Intro from "./FOM1Slide04Intro";
import FOM1Slide05Agenda from "./FOM1Slide05Agenda";
import FOM1Slide07ResultNotProduct from "./FOM1Slide07ResultNotProduct";
import FOM1Slide08ProcessVsResult from "./FOM1Slide08ProcessVsResult";
import FOM1Slide09Top5Mistakes from "./FOM1Slide09Top5Mistakes";
import FOM1Slide10FormulaIntro from "./FOM1Slide10FormulaIntro";
import FOM1Slide11Competitors from "./FOM1Slide11Competitors";
import FOM1Slide12WhoPays from "./FOM1Slide12WhoPays";
import FOM1Slide13Hypothesis from "./FOM1Slide13Hypothesis";
import FOM1Slide15InterviewRules from "./FOM1Slide15InterviewRules";
import FOM1Slide16PassFail from "./FOM1Slide16PassFail";
import FOM1Slide18Formula from "./FOM1Slide18Formula";
import FOM1Slide19ThreeFormats from "./FOM1Slide19ThreeFormats";
import FOM1Slide20FourTests from "./FOM1Slide20FourTests";
import FOM1Slide22MikhaelDiagnosis from "./FOM1Slide22MikhaelDiagnosis";
import FOM1Slide23MikhaelHomework from "./FOM1Slide23MikhaelHomework";
import FOM1Slide24MargaritaDiagnosis from "./FOM1Slide24MargaritaDiagnosis";
import FOM1Slide25MargaritaHomework from "./FOM1Slide25MargaritaHomework";
import FOM1Slide27AIRule from "./FOM1Slide27AIRule";
import FOM1Slide28Stack from "./FOM1Slide28Stack";
import FOM1Slide29SixSessions from "./FOM1Slide29SixSessions";
import FOM1Slide30Closing from "./FOM1Slide30Closing";
import FOM1BlockHeader from "./FOM1BlockHeader";

export const slideNames = [
  "Cover",
  "Главная ошибка стартапов",
  "Один честный вопрос",
  "Знакомство",
  "План на сегодня",
  "Раздел 1 · За что покупают",
  "Никто не покупает продукт",
  "Процесс vs Результат",
  "Топ-5 ошибок позиционирования",
  "Формула позиционирования — кратко",
  "Раздел 2 · Кто заплатит",
  "Три уровня конкурентов",
  "Кто заплатит vs кому полезно",
  "Гипотеза перед интервью",
  "Раздел 3 · Mom Test",
  "Правила custdev-интервью",
  "Сигналы pass / fail",
  "Раздел 4 · Формула позиционирования",
  "Формула результата",
  "Один результат — три формулировки",
  "Четыре теста перед запуском",
  "Раздел 5 · Применение",
  "Михаэль · диагностика",
  "Михаэль · ДЗ",
  "Маргарита · диагностика",
  "Маргарита · ДЗ",
  "Раздел 6 · AI-стек",
  "AI ≠ замена тебя",
  "Стек на эту неделю",
  "Карта 6 сессий",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <FOM1Slide01Cover />;
    case 1: return <FOM1Slide02MainMistake />;
    case 2: return <FOM1Slide03HonestQuestion />;
    case 3: return <FOM1Slide04Intro />;
    case 4: return <FOM1Slide05Agenda />;
    case 5: return <FOM1BlockHeader blockNumber={1} title="За что покупают" time="~15 минут" slide={6} />;
    case 6: return <FOM1Slide07ResultNotProduct />;
    case 7: return <FOM1Slide08ProcessVsResult />;
    case 8: return <FOM1Slide09Top5Mistakes />;
    case 9: return <FOM1Slide10FormulaIntro />;
    case 10: return <FOM1BlockHeader blockNumber={2} title="Кто заплатит" time="~15 минут" slide={11} />;
    case 11: return <FOM1Slide11Competitors />;
    case 12: return <FOM1Slide12WhoPays />;
    case 13: return <FOM1Slide13Hypothesis />;
    case 14: return <FOM1BlockHeader blockNumber={3} title="Mom Test — как спрашивать" time="~10 минут" slide={15} />;
    case 15: return <FOM1Slide15InterviewRules />;
    case 16: return <FOM1Slide16PassFail />;
    case 17: return <FOM1BlockHeader blockNumber={4} title="Формула позиционирования" time="~15 минут" slide={18} />;
    case 18: return <FOM1Slide18Formula />;
    case 19: return <FOM1Slide19ThreeFormats />;
    case 20: return <FOM1Slide20FourTests />;
    case 21: return <FOM1BlockHeader blockNumber={5} title="Применение к вашим проектам" time="~25 минут" slide={22} />;
    case 22: return <FOM1Slide22MikhaelDiagnosis />;
    case 23: return <FOM1Slide23MikhaelHomework />;
    case 24: return <FOM1Slide24MargaritaDiagnosis />;
    case 25: return <FOM1Slide25MargaritaHomework />;
    case 26: return <FOM1BlockHeader blockNumber={6} title="AI-стек на эту неделю" time="~10 минут" slide={27} />;
    case 27: return <FOM1Slide27AIRule />;
    case 28: return <FOM1Slide28Stack />;
    case 29: return <FOM1Slide29SixSessions />;
    case 30: return <FOM1Slide30Closing />;
    default: return null;
  }
}

export const TOTAL = 31;

export default function FOM1Shell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((index: number) => {
    if (index === displayed || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setDisplayed(index);
      setCurrent(index);
      requestAnimationFrame(() => setTransitioning(false));
    }, 200);
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
      if (e.key === "g" || e.key === "G") setShowGrid(v => !v);
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
    const show = () => { setControlsVisible(true); clearTimeout(timer); timer = setTimeout(() => setControlsVisible(false), 3000); };
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
      <div className="w-full h-screen bg-[hsl(var(--background))] overflow-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Founder OS Mini · Сессия 1 — все слайды</h2>
          <button onClick={() => setShowGrid(false)} className="p-2 text-muted-foreground hover:text-foreground transition-colors"><X size={24} /></button>
        </div>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-4 gap-4'}`}>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setDisplayed(i); setShowGrid(false); }}
              className={`aspect-video relative rounded-lg overflow-hidden border-2 transition-all hover:border-primary ${i === current ? "border-primary ring-2 ring-primary/30" : "border-border"}`}>
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-xs text-white/80">{i + 1}. {slideNames[i]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[hsl(var(--background))] flex overflow-hidden relative">
      {!isMobile && showSidebar && (
        <div className="w-[220px] h-full bg-[hsl(var(--card))] border-r border-border overflow-y-auto shrink-0 flex flex-col">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Слайды</span>
            <button onClick={() => setShowSidebar(false)} className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
          </div>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setDisplayed(i); }}
              className={`p-2 mx-2 my-1 rounded aspect-video relative overflow-hidden border transition-all ${i === current ? "border-primary" : "border-transparent hover:border-border"}`}>
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1.5 py-0.5"><span className="text-[9px] text-white/70">{i + 1}</span></div>
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 relative flex flex-col">
        <div className="flex-1 relative"
          onTouchStart={(e) => { touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            if (!touchStartRef.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            touchStartRef.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
          }}>
          <div className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            <ScaledSlide>{getSlideContent(displayed)}</ScaledSlide>
          </div>
        </div>

        <div className={`absolute bottom-0 inset-x-0 transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="h-[3px] bg-[hsl(var(--border))]">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((current + 1) / TOTAL) * 100}%` }} />
          </div>
          <div className={`flex items-center justify-between ${isMobile ? 'px-3 py-2' : 'px-6 py-3'} bg-[hsl(var(--card)/0.9)] backdrop-blur-sm`}>
            <div className="flex items-center gap-3">
              <button onClick={(e) => { e.stopPropagation(); navigate(backTo); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Назад">
                <ArrowLeft size={16} />
              </button>
              {!isMobile && !showSidebar && (
                <button onClick={(e) => { e.stopPropagation(); setShowSidebar(true); }}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Показать слайды">
                  <ChevronRight size={16} />
                </button>
              )}
              <button onClick={(e) => { e.stopPropagation(); setShowGrid(true); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Все слайды (G)">
                <Grid3X3 size={isMobile ? 14 : 16} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={(e) => { e.stopPropagation(); prev(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30" disabled={current === 0}>
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-muted-foreground font-mono min-w-[60px] text-center">{current + 1} / {TOTAL}</span>
              <button onClick={(e) => { e.stopPropagation(); next(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30" disabled={current === TOTAL - 1}>
                <ChevronRight size={18} />
              </button>
            </div>
            <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Полный экран (F5)">
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
