import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L10Slide01Welcome from "./L10Slide01Welcome";
import L10Slide02MainThesis from "./L10Slide02MainThesis";
import L10BlockHeader from "./L10BlockHeader";
import L10SlideWhyFounder from "./L10SlideWhyFounder";
import L10SlideWhatDoesntWork from "./L10SlideWhatDoesntWork";
import L10SlideStoryRecap from "./L10SlideStoryRecap";
import L10SlideStoryExamples from "./L10SlideStoryExamples";
import L10SlideMikeyCase from "./L10SlideMikeyCase";
import L10SlidePractices from "./L10SlidePractices";
import L10SlideFounderStory from "./L10SlideFounderStory";
import L10SlideTwoPaths from "./L10SlideTwoPaths";
import L10SlideB2BTruth from "./L10SlideB2BTruth";
import L10SlideB2BHow from "./L10SlideB2BHow";
import L10SlideB2CTruth from "./L10SlideB2CTruth";
import L10SlideB2CTest from "./L10SlideB2CTest";
import L10SlideHomework from "./L10SlideHomework";
import L10SlideClosing from "./L10SlideClosing";
import L10SlideLessonSummary from "./L10SlideLessonSummary";

export const slideNames = [
  "Заглавный",
  "Главная мысль · продаёт фаундер",
  "Блок 1 · Первые продажи делает фаундер",
  "Почему именно ты · 3 причины",
  "Что не работает на старте",
  "Блок 2 · История, которую хочется купить",
  "Анатомия истории · напоминание из урока 5",
  "Примеры · сильный сторителлинг на видео",
  "Мой кейс · как история запустила Mikey",
  "Топ-практики · как собрать продающую историю",
  "Твоя история основателя · почему ты",
  "Две дороги · B2B и B2C",
  "Блок 3 · B2B: продаёшь лично",
  "B2B · пока нет 10 клиентов",
  "B2B · как фаундер продаёт руками",
  "Блок 4 · B2C: история + малый бюджет",
  "B2C · первая активность и проверка",
  "B2C · тест по $30-50 в день",
  "Блок 5 · Задание",
  "Домашка · B2B или B2C",
  "Саммари · 5 мыслей",
  "Закрытие · в маркетинг",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L10Slide01Welcome />;
    case 1: return <L10Slide02MainThesis />;
    case 2: return <L10BlockHeader blockNumber={1} title="Первые продажи делает фаундер" subtitle="лично, а не отделом продаж" />;
    case 3: return <L10SlideWhyFounder />;
    case 4: return <L10SlideWhatDoesntWork />;
    case 5: return <L10BlockHeader blockNumber={2} title="История, которую хочется купить" subtitle="люди покупают «почему ты»" />;
    case 6: return <L10SlideStoryRecap />;
    case 7: return <L10SlideStoryExamples />;
    case 8: return <L10SlideMikeyCase />;
    case 9: return <L10SlidePractices />;
    case 10: return <L10SlideFounderStory />;
    case 11: return <L10SlideTwoPaths />;
    case 12: return <L10BlockHeader blockNumber={3} title="B2B: продаёшь лично" subtitle="руками, пока нет 10 клиентов" />;
    case 13: return <L10SlideB2BTruth />;
    case 14: return <L10SlideB2BHow />;
    case 15: return <L10BlockHeader blockNumber={4} title="B2C: история + малый бюджет" subtitle="тест по $30-50 в день" />;
    case 16: return <L10SlideB2CTruth />;
    case 17: return <L10SlideB2CTest />;
    case 18: return <L10BlockHeader blockNumber={5} title="Задание на эту неделю" />;
    case 19: return <L10SlideHomework />;
    case 20: return <L10SlideLessonSummary />;
    case 21: return <L10SlideClosing />;
    default: return null;
  }
}

export const TOTAL = 22;

export default function Lesson10PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 10 · Сторителлинг: первые продажи через себя</h2>
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
            <ScaledSlide>
              <div className={`w-full h-full bg-[hsl(var(--slide-bg))] ${isMobile ? '' : 'pr-[540px]'}`}>
                {getSlideContent(displayed)}
              </div>
            </ScaledSlide>
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
