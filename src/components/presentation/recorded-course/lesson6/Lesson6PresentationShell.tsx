import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L6Slide01Welcome from "./L6Slide01Welcome";
import L6Slide02MainThesis from "./L6Slide02MainThesis";
import L6BlockHeader from "./L6BlockHeader";
import L6Slide03HubVsHelper from "./L6Slide03HubVsHelper";
import L6Slide04ClaudeMdHierarchy from "./L6Slide04ClaudeMdHierarchy";
import L6Slide05ProductionTemplates from "./L6Slide05ProductionTemplates";
import L6Slide06SkillsLibrary from "./L6Slide06SkillsLibrary";
import L6Slide07SlashCommands from "./L6Slide07SlashCommands";
import L6Slide08McpUnderHood from "./L6Slide08McpUnderHood";
import L6Slide09StripeMcpWalkthrough from "./L6Slide09StripeMcpWalkthrough";
import L6Slide10SupabaseMcpWalkthrough from "./L6Slide10SupabaseMcpWalkthrough";
import L6Slide11McpSetupSteps from "./L6Slide11McpSetupSteps";
import L6Slide12PlanModeAdvanced from "./L6Slide12PlanModeAdvanced";
import L6Slide13SecondModelReview from "./L6Slide13SecondModelReview";
import L6Slide14SubAgentsParallel from "./L6Slide14SubAgentsParallel";
import L6Slide15Worktrees from "./L6Slide15Worktrees";
import L6Slide16FiveUnblockTechniques from "./L6Slide16FiveUnblockTechniques";
import L6Slide17ObservabilityStack from "./L6Slide17ObservabilityStack";
import L6Slide18RealProductionCase from "./L6Slide18RealProductionCase";
import L6Slide19ProductionChecklist from "./L6Slide19ProductionChecklist";
import L6Slide20LessonSummary from "./L6Slide20LessonSummary";
import L6Slide21HomeworkChecklist from "./L6Slide21HomeworkChecklist";
import L6Slide22Closing from "./L6Slide22Closing";

export const slideNames = [
  "Добро пожаловать",
  "Главный тезис: AI cofounder",
  "Блок 1 — Production Setup",
  "Claude как hub, Lovable как витрина",
  "Иерархия CLAUDE.md",
  "3 production CLAUDE.md шаблона",
  "Skills library + свой skill",
  "Slash commands + кастомные",
  "Блок 2 — MCP Deep Dive",
  "MCP под капотом",
  "Stripe MCP walkthrough",
  "Supabase MCP walkthrough",
  "MCP setup + top-7 серверов",
  "Блок 3 — Workflow",
  "Plan Mode advanced",
  "Second-model review",
  "Sub-agents + parallel",
  "Git worktrees",
  "Блок 4 — Debug & Ship",
  "5 техник unblock",
  "Observability через MCP",
  "Реальный кейс Bug #30",
  "Production checklist",
  "Саммари · 5 инсайтов",
  "Домашка · 7 действий",
  "Закрытие · Урок 7",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L6Slide01Welcome />;
    case 1: return <L6Slide02MainThesis />;
    case 2: return <L6BlockHeader blockNumber={1} title="Production Setup" subtitle="Настроить Claude так, чтобы он работал как сеньор, а не джун" />;
    case 3: return <L6Slide03HubVsHelper />;
    case 4: return <L6Slide04ClaudeMdHierarchy />;
    case 5: return <L6Slide05ProductionTemplates />;
    case 6: return <L6Slide06SkillsLibrary />;
    case 7: return <L6Slide07SlashCommands />;
    case 8: return <L6BlockHeader blockNumber={2} title="MCP Deep Dive" subtitle="Claude работает в твоих сервисах, а не вокруг них" />;
    case 9: return <L6Slide08McpUnderHood />;
    case 10: return <L6Slide09StripeMcpWalkthrough />;
    case 11: return <L6Slide10SupabaseMcpWalkthrough />;
    case 12: return <L6Slide11McpSetupSteps />;
    case 13: return <L6BlockHeader blockNumber={3} title="Workflow" subtitle="Как давать задачи, чтобы результат был с первой попытки" />;
    case 14: return <L6Slide12PlanModeAdvanced />;
    case 15: return <L6Slide13SecondModelReview />;
    case 16: return <L6Slide14SubAgentsParallel />;
    case 17: return <L6Slide15Worktrees />;
    case 18: return <L6BlockHeader blockNumber={4} title="Debug & Ship" subtitle="Когда что-то ломается — как разблокироваться и довести до прода" />;
    case 19: return <L6Slide16FiveUnblockTechniques />;
    case 20: return <L6Slide17ObservabilityStack />;
    case 21: return <L6Slide18RealProductionCase />;
    case 22: return <L6Slide19ProductionChecklist />;
    case 23: return <L6Slide20LessonSummary />;
    case 24: return <L6Slide21HomeworkChecklist />;
    case 25: return <L6Slide22Closing />;
    default: return null;
  }
}

export const TOTAL = 26;

export default function Lesson6PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 6 — Все слайды</h2>
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
          onClick={() => { if (!isMobile) next(); }}
          onTouchStart={(e) => { touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            if (!touchStartRef.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            touchStartRef.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
            else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) next();
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
