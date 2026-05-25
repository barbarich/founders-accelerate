import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M11Slide01Welcome from "./M11Slide01Welcome";
import M11Slide02MainThesis from "./M11Slide02MainThesis";
import M11BlockHeader from "./M11BlockHeader";
import M11Slide03PipelineOS from "./M11Slide03PipelineOS";
import M11Slide04Where50Contacts from "./M11Slide04Where50Contacts";
import M11Slide05FourCircles from "./M11Slide05FourCircles";
import M11Slide06WarmIntros from "./M11Slide06WarmIntros";
import M11Slide07TFCCase from "./M11Slide07TFCCase";
import M11Slide08Conferences from "./M11Slide08Conferences";
import M11Slide09MetaMinderCase from "./M11Slide09MetaMinderCase";
import M11Slide10StageQR from "./M11Slide10StageQR";
import M11Slide11EventFunnel from "./M11Slide11EventFunnel";
import M11Slide12DemoAnatomy from "./M11Slide12DemoAnatomy";
import M11Slide13MainPrompt from "./M11Slide13MainPrompt";
import M11Slide14Objections from "./M11Slide14Objections";
import M11Slide15Pricing from "./M11Slide15Pricing";
import M11Slide16ContentFunnel from "./M11Slide16ContentFunnel";
import M11Slide17Community from "./M11Slide17Community";
import M11Slide18PreSales from "./M11Slide18PreSales";
import M11Slide19CRMMinimum from "./M11Slide19CRMMinimum";
import M11Slide20MetricsErrors from "./M11Slide20MetricsErrors";
import M11Slide21Cohort from "./M11Slide21Cohort";
import M11Slide22First24Hours from "./M11Slide22First24Hours";
import M11Slide23Homework from "./M11Slide23Homework";
import M11Slide24NextWeek from "./M11Slide24NextWeek";

export const slideNames = [
  "Заглавный",
  "Главная мысль",
  "Блок 1 · Pipeline OS",
  "5 каналов · карта всего",
  "Блок 2 · Network",
  "Где взять 50 контактов",
  "4 круга нетворка",
  "Warm intros · pocket prompt #1",
  "Кейс · The Founders Circle",
  "Блок 3 · Events",
  "Конференции Q2–Q4 2026",
  "🔥 Кейс MetaMinder · холл важнее зала",
  "🔥 Сцена · канал #1",
  "Воронка · ДО / НА / ПОСЛЕ + pocket prompt #2",
  "Блок 4 · Demo",
  "Анатомия 15-мин + 5 discovery",
  "🔥 Главный промпт · Pre-call research",
  "Блок 5 · Возражения + цена",
  "5 возражений · полные диалоги",
  "Pricing 2026 + 3 фразы",
  "Блок 6 · Content & Community",
  "Content → Call funnel",
  "Кейс · Community as pipeline",
  "Блок 7 · Pre-sales",
  "5 LOI до строчки кода + pocket prompt #3",
  "Блок 8 · Инфраструктура",
  "CRM-минимум за 5 минут",
  "5 метрик · 5 anti-patterns",
  "Блок 9 · Когорта",
  "Адаптация · первое действие в 24 часа",
  "Блок 10 · Финал",
  "Первые 24 часа после встречи",
  "Домашка к M12",
  "M12 + alumni",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M11Slide01Welcome />;
    case 1: return <M11Slide02MainThesis />;
    case 2: return <M11BlockHeader blockNumber={1} title="Founder Pipeline OS" subtitle="карта всего — 5 каналов работают одновременно" />;
    case 3: return <M11Slide03PipelineOS />;
    case 4: return <M11BlockHeader blockNumber={2} title="Network" subtitle="пайплайн #1 для одиночки-фаундера" />;
    case 5: return <M11Slide04Where50Contacts />;
    case 6: return <M11Slide05FourCircles />;
    case 7: return <M11Slide06WarmIntros />;
    case 8: return <M11Slide07TFCCase />;
    case 9: return <M11BlockHeader blockNumber={3} title="Events" subtitle="конференции, сцена, нетворк в холле — то, что AI не заменит" />;
    case 10: return <M11Slide08Conferences />;
    case 11: return <M11Slide09MetaMinderCase />;
    case 12: return <M11Slide10StageQR />;
    case 13: return <M11Slide11EventFunnel />;
    case 14: return <M11BlockHeader blockNumber={4} title="Demo" subtitle="где деньги — 15 минут × правильная структура" />;
    case 15: return <M11Slide12DemoAnatomy />;
    case 16: return <M11Slide13MainPrompt />;
    case 17: return <M11BlockHeader blockNumber={5} title="Возражения + цена" subtitle="полные мини-диалоги, 3 фразы про деньги без извинений" />;
    case 18: return <M11Slide14Objections />;
    case 19: return <M11Slide15Pricing />;
    case 20: return <M11BlockHeader blockNumber={6} title="Content & Community" subtitle="inbound, который работает на тебя пока ты спишь" />;
    case 21: return <M11Slide16ContentFunnel />;
    case 22: return <M11Slide17Community />;
    case 23: return <M11BlockHeader blockNumber={7} title="Pre-sales" subtitle="продаём до того, как написана строчка кода" />;
    case 24: return <M11Slide18PreSales />;
    case 25: return <M11BlockHeader blockNumber={8} title="Инфраструктура" subtitle="CRM-минимум и метрики здоровья pipeline" />;
    case 26: return <M11Slide19CRMMinimum />;
    case 27: return <M11Slide20MetricsErrors />;
    case 28: return <M11BlockHeader blockNumber={9} title="Когорта" subtitle="первое действие в 24 часа — для каждого" />;
    case 29: return <M11Slide21Cohort />;
    case 30: return <M11BlockHeader blockNumber={10} title="Финал" subtitle="первые 24 часа · домашка · что после акселератора" />;
    case 31: return <M11Slide22First24Hours />;
    case 32: return <M11Slide23Homework />;
    case 33: return <M11Slide24NextWeek />;
    default: return null;
  }
}

export const TOTAL = 34;

export default function Meeting11PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 11 — Все слайды</h2>
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
