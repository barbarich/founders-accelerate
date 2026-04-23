/**
 * PMF Agent — /agents/pmf route.
 *
 * Identical state machine to /agents/lens: setup → clarify → progress → report.
 * Only backend URL + branding + verdict vocabulary differ.
 *
 * Backend: pmf-agent/server.py (FastAPI) at VITE_PMF_API.
 * Existing pmf.founders-circle.space Streamlit UI remains untouched on its own service.
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Loader2, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";
import { MODELS, DEFAULT_MODEL, PROVIDER_LABELS, CUSTOM_MODEL_ID, type Provider as ProviderLib } from "@/lib/llmModels";

const C = {
  bg: "#f8f8f4",
  surface: "#ffffff",
  border: "#e4e4dc",
  borderLight: "#f0f0e8",
  text: "#0d0d0d",
  secondary: "#555555",
  muted: "#888888",
  accent: "#CAFF00",
  sageBg: "#eef4e8",
  sageBorder: "#c8ddb8",
  sageText: "#1a2e14",
  green: "#4a8a28",
};

// Dev: hit local FastAPI on :8001. Prod build: Railway backend.
// Override via VITE_PMF_API if you need something else.
const API_BASE =
  import.meta.env.VITE_PMF_API ||
  (import.meta.env.DEV
    ? "http://localhost:8001"
    : "https://pmf-api.founders-circle.space");

type Stage = "setup" | "clarify" | "progress" | "report" | "error";
type Provider = ProviderLib;

interface IdeaInput {
  raw_idea: string;
  target_user?: string | null;
  geography: string[];
  monetization_hypothesis?: string | null;
  reference_products: string[];
  already_tried?: string | null;
  language: "ru" | "en";
}

interface Event {
  id: number;
  ts: string;
  phase: string | null;
  kind: string;
  message: string;
}

export default function PmfAgent() {
  const [stage, setStage] = useState<Stage>("setup");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Setup form
  const [provider, setProvider] = useState<Provider>("anthropic");
  const [model, setModel] = useState<string>(DEFAULT_MODEL["anthropic"]);
  const [customModel, setCustomModel] = useState<string>("");
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);

  // Reset model to provider's default when provider changes
  useEffect(() => {
    setModel(DEFAULT_MODEL[provider]);
    setCustomModel("");
  }, [provider]);

  const effectiveModel = model === CUSTOM_MODEL_ID ? customModel.trim() : model;
  const [language, setLanguage] = useState<"ru" | "en">("ru");
  const [idea, setIdea] = useState("");
  const [targetUser, setTargetUser] = useState("");
  const [geography, setGeography] = useState("US, EU");
  const [monetization, setMonetization] = useState("");
  const [refs, setRefs] = useState("");

  // Clarify
  const [clarifyLoading, setClarifyLoading] = useState(false);
  const [priorQuestions, setPriorQuestions] = useState<string[]>([]);
  const [priorAnswers, setPriorAnswers] = useState<string[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<string[]>([]);
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);
  const [completenessScore, setCompletenessScore] = useState(0);

  // Research
  const [runId, setRunId] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [finalStatus, setFinalStatus] = useState<{
    status: string;
    verdict: string | null;
    quality_score: number | null;
    total_cost_usd: number;
  } | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);
  const eventsEndRef = useRef<HTMLDivElement>(null);

  const handleStartResearch = async () => {
    if (!idea.trim() || !apiKey.trim()) {
      setErrorMsg("Заполни идею и API key.");
      return;
    }
    setErrorMsg(null);
    setClarifyLoading(true);

    const payload = {
      idea: idea.trim(),
      language,
      target_user: targetUser.trim() || null,
      geography: geography.split(",").map(s => s.trim()).filter(Boolean),
      monetization_hypothesis: monetization.trim() || null,
      reference_products: refs.split(",").map(s => s.trim()).filter(Boolean),
      provider,
      api_key: apiKey,
      model: effectiveModel,
      prior_questions: priorQuestions,
      prior_answers: priorAnswers,
    };

    try {
      const resp = await fetch(`${API_BASE}/api/intake/evaluate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) {
        const text = await resp.text();
        setErrorMsg(`Ошибка: ${resp.status} — ${text.slice(0, 200)}`);
        setStage("error");
        setClarifyLoading(false);
        return;
      }
      const data = await resp.json();
      setCompletenessScore(data.completeness_score || 0);

      if (!data.ready && data.questions?.length) {
        setCurrentQuestions(data.questions);
        setCurrentAnswers(data.questions.map(() => ""));
        setStage("clarify");
      } else if (data.ready && data.idea_input) {
        // launch pipeline
        await launchPipeline(data.idea_input);
      } else {
        setErrorMsg("Ответ от сервера некорректен");
        setStage("error");
      }
    } catch (e: any) {
      setErrorMsg(`Не удалось достучаться до API: ${e?.message || e}`);
      setStage("error");
    } finally {
      setClarifyLoading(false);
    }
  };

  const handleClarifySubmit = async () => {
    // Merge current Q&A into priors, re-evaluate
    const newPriorQ = [...priorQuestions, ...currentQuestions];
    const newPriorA = [...priorAnswers, ...currentAnswers];
    setPriorQuestions(newPriorQ);
    setPriorAnswers(newPriorA);
    setCurrentQuestions([]);
    setCurrentAnswers([]);
    setClarifyLoading(true);
    setErrorMsg(null);

    const payload = {
      idea: idea.trim(),
      language,
      target_user: targetUser.trim() || null,
      geography: geography.split(",").map(s => s.trim()).filter(Boolean),
      monetization_hypothesis: monetization.trim() || null,
      reference_products: refs.split(",").map(s => s.trim()).filter(Boolean),
      provider,
      api_key: apiKey,
      model: effectiveModel,
      prior_questions: newPriorQ,
      prior_answers: newPriorA,
    };

    try {
      const resp = await fetch(`${API_BASE}/api/intake/evaluate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      setCompletenessScore(data.completeness_score || 0);

      if (!data.ready && data.questions?.length) {
        setCurrentQuestions(data.questions);
        setCurrentAnswers(data.questions.map(() => ""));
      } else if (data.ready && data.idea_input) {
        await launchPipeline(data.idea_input);
      }
    } catch (e: any) {
      setErrorMsg(`Ошибка: ${e?.message || e}`);
      setStage("error");
    } finally {
      setClarifyLoading(false);
    }
  };

  const launchPipeline = async (ideaInput: IdeaInput) => {
    setStage("progress");
    setStartTime(Date.now());
    setEvents([]);

    try {
      const resp = await fetch(`${API_BASE}/api/research/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea_input: ideaInput, provider, api_key: apiKey, model: effectiveModel }),
      });
      if (!resp.ok) {
        const text = await resp.text();
        setErrorMsg(`Pipeline не запустился: ${resp.status} — ${text.slice(0, 200)}`);
        setStage("error");
        return;
      }
      const { run_id } = await resp.json();
      setRunId(run_id);
      connectSSE(run_id);
    } catch (e: any) {
      setErrorMsg(`Не удалось запустить pipeline: ${e?.message || e}`);
      setStage("error");
    }
  };

  const connectSSE = (rid: string) => {
    let stopped = false;
    let backoffMs = 2000;
    const seenIds = new Set<number>();

    const open = () => {
      if (stopped) return;
      const es = new EventSource(`${API_BASE}/api/research/events/${rid}`);
      eventSourceRef.current = es;

      es.addEventListener("finding", (e: any) => {
        try {
          const data = JSON.parse(e.data);
          if (data.id != null && seenIds.has(data.id)) return;
          if (data.id != null) seenIds.add(data.id);
          setEvents(prev => [...prev, data]);
          backoffMs = 2000;
        } catch {}
      });

      es.addEventListener("done", (e: any) => {
        try {
          const data = JSON.parse(e.data);
          stopped = true;
          setFinalStatus({
            status: data.status,
            verdict: data.verdict,
            quality_score: data.quality_score,
            total_cost_usd: data.total_cost_usd || 0,
          });
          es.close();
          if (data.status === "completed") {
            setStage("report");
          } else {
            setErrorMsg(`Pipeline завершился со статусом: ${data.status}`);
            setStage("error");
          }
        } catch {}
      });

      es.onerror = () => {
        if (stopped) return;
        if (es.readyState === EventSource.CLOSED) {
          console.warn(`SSE closed; reconnecting in ${backoffMs}ms`);
          setTimeout(() => { if (!stopped) open(); }, backoffMs);
          backoffMs = Math.min(backoffMs * 2, 30000);
        }
      };
    };

    open();

    const statusPoll = setInterval(async () => {
      if (stopped) { clearInterval(statusPoll); return; }
      try {
        const r = await fetch(`${API_BASE}/api/research/status/${rid}`);
        if (!r.ok) return;
        const s = await r.json();
        if (s.status === "completed" || s.status === "failed" || s.status === "aborted") {
          stopped = true;
          eventSourceRef.current?.close();
          setFinalStatus({
            status: s.status,
            verdict: s.verdict,
            quality_score: s.quality_score,
            total_cost_usd: s.total_cost_usd || 0,
          });
          if (s.status === "completed") setStage("report");
          else { setErrorMsg(`Pipeline завершился со статусом: ${s.status}`); setStage("error"); }
          clearInterval(statusPoll);
        }
      } catch {}
    }, 15000);
  };

  // Elapsed time ticker
  useEffect(() => {
    if (stage !== "progress" || !startTime) return;
    const t = setInterval(() => setElapsed((Date.now() - startTime) / 1000), 1000);
    return () => clearInterval(t);
  }, [stage, startTime]);

  // Auto-scroll events
  useEffect(() => {
    eventsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [events]);

  useEffect(() => {
    return () => {
      eventSourceRef.current?.close();
    };
  }, []);

  // -------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------
  return (
    <div
      style={{
        background: C.bg, minHeight: "100vh", color: C.text,
        fontFamily: "-apple-system, system-ui, sans-serif",
        // Force light-mode CSS vars for shadcn components scoped to this page
        // (the app defaults to dark). These vars match the NewLanding palette.
        "--background": "0 0% 97%",
        "--foreground": "0 0% 5%",
        "--card": "0 0% 100%",
        "--card-foreground": "0 0% 5%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "0 0% 5%",
        "--primary": "0 0% 5%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "60 6% 92%",
        "--secondary-foreground": "0 0% 5%",
        "--muted": "60 6% 94%",
        "--muted-foreground": "0 0% 45%",
        "--accent": "76 100% 50%",          // lime #CAFF00
        "--accent-foreground": "0 0% 5%",
        "--destructive": "0 70% 50%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "60 5% 88%",
        "--input": "60 5% 88%",
        "--ring": "76 100% 50%",
      } as React.CSSProperties}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div style={{ width: 40, height: 40, background: C.text, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles size={22} color={C.accent} />
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>PMF Agent</div>
            <div style={{ fontSize: 12, color: C.muted, letterSpacing: 1, textTransform: "uppercase" }}>
              PMF Validation Agent by Founders Circle
            </div>
          </div>
        </div>

        {errorMsg && (
          <div style={{
            background: "#fbe6e6", borderLeft: `4px solid #a82020`, padding: "14px 20px",
            marginBottom: 24, borderRadius: 8, color: "#5a1010", fontSize: 14,
            display: "flex", gap: 10, alignItems: "flex-start",
          }}>
            <AlertCircle size={18} style={{ marginTop: 2, flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {stage === "setup" && (
          <SetupCard
            provider={provider} setProvider={setProvider}
            model={model} setModel={setModel}
            customModel={customModel} setCustomModel={setCustomModel}
            apiKey={apiKey} setApiKey={setApiKey}
            showKey={showKey} setShowKey={setShowKey}
            language={language} setLanguage={setLanguage}
            idea={idea} setIdea={setIdea}
            targetUser={targetUser} setTargetUser={setTargetUser}
            geography={geography} setGeography={setGeography}
            monetization={monetization} setMonetization={setMonetization}
            refs={refs} setRefs={setRefs}
            loading={clarifyLoading}
            onStart={handleStartResearch}
          />
        )}

        {stage === "clarify" && (
          <ClarifyCard
            questions={currentQuestions}
            answers={currentAnswers}
            setAnswers={setCurrentAnswers}
            priorQA={priorQuestions.map((q, i) => ({ q, a: priorAnswers[i] || "" }))}
            completenessScore={completenessScore}
            loading={clarifyLoading}
            onSubmit={handleClarifySubmit}
          />
        )}

        {stage === "progress" && (
          <ProgressView
            runId={runId}
            events={events}
            elapsed={elapsed}
            eventsEndRef={eventsEndRef}
          />
        )}

        {stage === "report" && runId && (
          <ReportView runId={runId} finalStatus={finalStatus} />
        )}

        {stage === "error" && (
          <div style={{ textAlign: "center", padding: 48 }}>
            <Button onClick={() => { setStage("setup"); setErrorMsg(null); }} variant="outline">
              Начать заново
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------
// Setup card
// -------------------------------------------------------------------------
function SetupCard(props: any) {
  const {
    provider, setProvider, model, setModel,
    customModel, setCustomModel,
    apiKey, setApiKey, showKey, setShowKey,
    language, setLanguage, idea, setIdea, targetUser, setTargetUser,
    geography, setGeography, monetization, setMonetization, refs, setRefs,
    loading, onStart,
  } = props;

  return (
    <Card style={{ background: C.surface, borderColor: C.border, padding: 40 }}>
      <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1, marginBottom: 12 }}>
        Product-Market Fit — есть он у твоей идеи?
      </h1>
      <p style={{ fontSize: 18, color: C.secondary, marginBottom: 32, lineHeight: 1.5 }}>
        9-осевой PMF-скоринг: боль, рынок, конкуренция, timing, demand, юнит-экономика, регулятор, монетизация, execution. Вердикт <strong>GO / VALIDATE / PIVOT</strong> + если скор &lt;50 — Pivot Advisor предложит альтернативные траектории. Честный, не льстит.
      </p>

      {/* Provider selection */}
      <div style={{ marginBottom: 20 }}>
        <Label style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, display: "block" }}>
          LLM провайдер
        </Label>
        <RadioGroup value={provider} onValueChange={(v) => setProvider(v as any)} style={{ display: "flex", gap: 12 }}>
          {(Object.entries(PROVIDER_LABELS) as [Provider, typeof PROVIDER_LABELS["anthropic"]][]).map(([v, meta]) => (
            <label
              key={v}
              style={{
                flex: 1, padding: "14px 16px", border: `2px solid ${provider === v ? C.text : C.border}`,
                borderRadius: 10, cursor: "pointer",
                background: provider === v ? C.sageBg : C.surface,
                transition: "all 0.15s",
              }}
            >
              <RadioGroupItem value={v} id={v} style={{ display: "none" }} />
              <div style={{ fontWeight: 700, fontSize: 15 }}>{meta.title}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{meta.subtitle}</div>
            </label>
          ))}
        </RadioGroup>
      </div>

      {/* Model selection (depends on provider) */}
      <div style={{ marginBottom: 24 }}>
        <Label style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, display: "block" }}>
          Модель ({PROVIDER_LABELS[provider as Provider].title})
        </Label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={{
            width: "100%", padding: "10px 12px", fontSize: 14,
            border: `1px solid ${C.border}`, borderRadius: 8,
            background: C.surface, color: C.text,
            fontFamily: "-apple-system, system-ui, sans-serif",
          }}
        >
          {MODELS[provider as Provider].map((m) => (
            <option key={m.id} value={m.id}>
              {m.label} — {m.note}
            </option>
          ))}
        </select>
        {model === CUSTOM_MODEL_ID && (
          <Input
            value={customModel}
            onChange={(e) => setCustomModel(e.target.value)}
            placeholder={`например: ${provider === "anthropic" ? "claude-opus-5-20260301" : provider === "openai" ? "gpt-5.1" : "gemini-3.1-pro"}`}
            style={{ marginTop: 10, fontSize: 14, fontFamily: "ui-monospace, monospace" }}
          />
        )}
        <p style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>
          Дороже модель = точнее скоринг, но и дольше прогон + больше трат с твоего ключа.
          {model === CUSTOM_MODEL_ID && " ID модели передастся провайдеру как есть — убедись что он существует."}
        </p>
      </div>

      {/* API key */}
      <div style={{ marginBottom: 24 }}>
        <Label style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, display: "block" }}>
          API key ({PROVIDER_LABELS[provider as Provider].title})
        </Label>
        <div style={{ display: "flex", gap: 8 }}>
          <Input
            type={showKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={PROVIDER_LABELS[provider as Provider].keyHint}
            style={{ flex: 1, fontSize: 14, fontFamily: "ui-monospace, monospace" }}
          />
          <Button type="button" variant="outline" onClick={() => setShowKey(!showKey)} size="sm">
            {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>
        <p style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>
          Ключ используется только для этой сессии. Мы его не храним.
        </p>
      </div>

      {/* Language */}
      <div style={{ marginBottom: 24 }}>
        <Label style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, display: "block" }}>
          Язык отчёта
        </Label>
        <RadioGroup value={language} onValueChange={(v) => setLanguage(v as any)} style={{ display: "flex", gap: 10 }}>
          {[
            { v: "ru", label: "Русский" },
            { v: "en", label: "English" },
          ].map((l) => (
            <label key={l.v}
              style={{
                padding: "8px 20px", border: `1px solid ${language === l.v ? C.text : C.border}`,
                borderRadius: 8, cursor: "pointer",
                background: language === l.v ? C.text : C.surface,
                color: language === l.v ? C.accent : C.text,
                fontSize: 14, fontWeight: 600,
              }}>
              <RadioGroupItem value={l.v} id={l.v} style={{ display: "none" }} />
              {l.label}
            </label>
          ))}
        </RadioGroup>
      </div>

      {/* Idea */}
      <div style={{ marginBottom: 24 }}>
        <Label style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, display: "block" }}>
          Твоя идея (1-3 предложения)
        </Label>
        <Textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Например: B2B SaaS для маркетологов, автоматизирующий конкурентный анализ через AI-агентов. Целевая — in-house маркетинг команды 10-50 чел в SaaS-компаниях."
          rows={4}
          style={{ fontSize: 15 }}
        />
      </div>

      {/* Advanced context */}
      <details style={{ marginBottom: 24 }}>
        <summary style={{ fontSize: 13, color: C.secondary, cursor: "pointer", marginBottom: 12, userSelect: "none" }}>
          Дополнительный контекст (необязательно, улучшает точность)
        </summary>
        <div style={{ display: "grid", gap: 16, marginTop: 12 }}>
          <div>
            <Label style={{ fontSize: 13, marginBottom: 6, display: "block" }}>Целевой пользователь</Label>
            <Input
              value={targetUser}
              onChange={(e) => setTargetUser(e.target.value)}
              placeholder="первородящие мамы 25-35 в США и ЕС"
            />
          </div>
          <div>
            <Label style={{ fontSize: 13, marginBottom: 6, display: "block" }}>Рынки (через запятую)</Label>
            <Input
              value={geography}
              onChange={(e) => setGeography(e.target.value)}
              placeholder="US, EU, UK"
            />
          </div>
          <div>
            <Label style={{ fontSize: 13, marginBottom: 6, display: "block" }}>Модель монетизации</Label>
            <Input
              value={monetization}
              onChange={(e) => setMonetization(e.target.value)}
              placeholder="freemium subscription $4.99/mo"
            />
          </div>
          <div>
            <Label style={{ fontSize: 13, marginBottom: 6, display: "block" }}>Референсные продукты</Label>
            <Input
              value={refs}
              onChange={(e) => setRefs(e.target.value)}
              placeholder="Huckleberry, BabyTracker"
            />
          </div>
        </div>
      </details>

      <Button
        onClick={onStart}
        disabled={loading || !idea.trim() || !apiKey.trim()}
        style={{
          width: "100%", background: C.accent, color: C.text, fontSize: 16, fontWeight: 700,
          height: 56, borderRadius: 12,
        }}
      >
        {loading ? <><Loader2 className="animate-spin" size={18} /> Проверяю идею…</> : "Запустить PMF-анализ →"}
      </Button>

      <p style={{ fontSize: 12, color: C.muted, marginTop: 14, textAlign: "center" }}>
        ~10-15 минут · использует твой LLM ключ · скоринг + pivot-сценарии
      </p>
    </Card>
  );
}

// -------------------------------------------------------------------------
// Clarify card
// -------------------------------------------------------------------------
function ClarifyCard(props: any) {
  const { questions, answers, setAnswers, priorQA, completenessScore, loading, onSubmit } = props;

  const setAnswer = (i: number, v: string) => {
    const next = [...answers];
    next[i] = v;
    setAnswers(next);
  };

  const allAnswered = answers.every((a: string) => a.trim().length > 3);

  return (
    <Card style={{ background: C.surface, borderColor: C.border, padding: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <div style={{ fontSize: 28, fontWeight: 800 }}>Нужно чуть-чуть уточнить</div>
        <div style={{
          padding: "4px 12px", background: C.sageBg, color: C.sageText,
          borderRadius: 16, fontSize: 12, fontWeight: 700,
        }}>
          Полнота {completenessScore}%
        </div>
      </div>

      <p style={{ fontSize: 15, color: C.secondary, marginBottom: 32, lineHeight: 1.5 }}>
        Чем точнее ответишь — тем качественнее будет research. Ответы короткие, по одному-двум предложениям.
      </p>

      {priorQA.length > 0 && (
        <div style={{ background: C.borderLight, padding: 16, borderRadius: 8, marginBottom: 24, fontSize: 13 }}>
          <div style={{ fontWeight: 700, marginBottom: 8, color: C.secondary }}>Ранее ответил:</div>
          {priorQA.map((qa: any, i: number) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <div style={{ color: C.muted }}>Q: {qa.q}</div>
              <div>A: {qa.a}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "grid", gap: 20 }}>
        {questions.map((q: string, i: number) => (
          <div key={i}>
            <Label style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, display: "block" }}>
              {i + 1}. {q}
            </Label>
            <Textarea
              value={answers[i] || ""}
              onChange={(e) => setAnswer(i, e.target.value)}
              rows={2}
              placeholder="Твой ответ..."
              style={{ fontSize: 14 }}
            />
          </div>
        ))}
      </div>

      <Button
        onClick={onSubmit}
        disabled={loading || !allAnswered}
        style={{
          width: "100%", marginTop: 28, background: C.accent, color: C.text,
          fontSize: 16, fontWeight: 700, height: 56, borderRadius: 12,
        }}
      >
        {loading ? <><Loader2 className="animate-spin" size={18} /> Проверяю…</> : "Готово, поехали →"}
      </Button>
    </Card>
  );
}

// -------------------------------------------------------------------------
// Progress view
// -------------------------------------------------------------------------
function ProgressView(props: any) {
  const { runId, events, elapsed, eventsEndRef } = props;
  const lastEventTs = events.length ? new Date(events[events.length - 1].ts).getTime() : null;
  const secSinceLast = lastEventTs ? (Date.now() - lastEventTs) / 1000 : null;
  const stale = secSinceLast != null && secSinceLast > 90;
  const currentPhase = events.length ? (events[events.length - 1].phase || "starting") : "starting";

  const kindIcon = (k: string) =>
    k === "phase_start" ? "▶️" : k === "phase_end" ? "✅" : k === "finding" ? "💡" : k === "warning" ? "⚠️" : k === "error" ? "❌" : "·";

  return (
    <Card style={{ background: C.surface, borderColor: C.border, padding: 40 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>🔍 Идёт исследование</div>
          <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>
            фаза: <span style={{ color: C.green, fontWeight: 600 }}>{currentPhase}</span> · {runId}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 32, fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>
            {Math.floor(elapsed / 60)}:{String(Math.floor(elapsed % 60)).padStart(2, "0")}
          </div>
          <div style={{ fontSize: 12, color: C.muted }}>прошло времени</div>
        </div>
      </div>

      <div style={{ height: 8, marginBottom: 28, background: C.borderLight, borderRadius: 4, overflow: "hidden", position: "relative" }}>
        <div style={{
          position: "absolute", height: "100%", width: "30%",
          background: stale ? "#c58900" : C.text,
          borderRadius: 4,
          animation: "lensIndeterminate 1.6s ease-in-out infinite",
        }} />
        <style>{`@keyframes lensIndeterminate { 0% { left: -30%; } 100% { left: 100%; } }`}</style>
      </div>

      {stale && (
        <div style={{ fontSize: 13, color: "#7a5500", background: "#fff5db", padding: "10px 14px", borderRadius: 6, marginBottom: 16 }}>
          Последнее событие — {Math.round(secSinceLast!)} сек назад. Это нормально для тяжёлых фаз. Если ничего не двигается ещё минуту — проверь, что окно браузера активно и интернет на месте.
        </div>
      )}

      <div style={{ marginBottom: 12, fontSize: 13, color: C.secondary, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>
        Живой фид находок ({events.length})
      </div>

      <div style={{
        background: C.borderLight, padding: "16px 20px", borderRadius: 8,
        maxHeight: 420, overflowY: "auto", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 13, lineHeight: 1.7,
      }}>
        {events.length === 0 ? (
          <div style={{ color: C.muted, padding: "24px 0", textAlign: "center" }}>
            Ждём первого сигнала из pipeline…
          </div>
        ) : (
          events.map((ev) => (
            <div key={ev.id} style={{ marginBottom: 6 }}>
              <span style={{ color: C.muted, marginRight: 8 }}>{new Date(ev.ts).toLocaleTimeString()}</span>
              <span>{kindIcon(ev.kind)}</span>{" "}
              {ev.phase && <span style={{ color: C.green, fontWeight: 600 }}>[{ev.phase}] </span>}
              <span>{ev.message}</span>
            </div>
          ))
        )}
        <div ref={eventsEndRef} />
      </div>
    </Card>
  );
}

// -------------------------------------------------------------------------
// Report view
// -------------------------------------------------------------------------
function ReportView(props: any) {
  const { runId, finalStatus } = props;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const reportUrl = `${API_BASE}/api/research/report/${runId}`;
  const pdfUrl = `${API_BASE}/api/research/report/${runId}/pdf`;

  // PMF Agent uses GO / VALIDATE / PIVOT (not GO / PIVOT / NO_GO like Lens)
  const verdictColor =
    finalStatus?.verdict === "GO" ? "#0a7a2e" :
    finalStatus?.verdict === "VALIDATE" ? "#c58900" :
    finalStatus?.verdict === "PIVOT" ? "#a82020" : "#555";
  const verdictLabel =
    finalStatus?.verdict === "GO" ? "GO — идея с PMF-потенциалом" :
    finalStatus?.verdict === "VALIDATE" ? "VALIDATE — нужна проверка гипотез" :
    finalStatus?.verdict === "PIVOT" ? "PIVOT — скор низкий, смотри альтернативы" : "—";

  return (
    <div>
      {/* Verdict banner */}
      {finalStatus && (
        <div style={{
          background: C.surface, border: `1px solid ${C.border}`, borderLeft: `6px solid ${verdictColor}`,
          padding: "20px 28px", borderRadius: 12, marginBottom: 24,
          display: "grid", gridTemplateColumns: "1fr auto auto auto auto", gap: 16, alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: 12, color: C.muted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Вердикт</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: verdictColor }}>{verdictLabel}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, color: C.muted, textTransform: "uppercase", letterSpacing: 0.5 }}>PMF Score</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>{finalStatus.quality_score ?? "—"}/100</div>
          </div>
          <a href={pdfUrl} target="_blank" rel="noreferrer" download>
            <Button variant="outline" style={{ fontWeight: 700, borderColor: C.text }}>↓ PDF</Button>
          </a>
          <a href={reportUrl} target="_blank" rel="noreferrer">
            <Button style={{ background: C.accent, color: C.text, fontWeight: 700 }}>Открыть в новой вкладке →</Button>
          </a>
        </div>
      )}

      {/* Embedded report */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
        <iframe
          ref={iframeRef}
          src={reportUrl}
          style={{ width: "100%", height: "1200px", border: 0 }}
          title="PMF Agent Report"
        />
      </div>
    </div>
  );
}
