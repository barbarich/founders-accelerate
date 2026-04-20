# PMF Agent — Deployment Runbook (new React frontend)

## Goal

Add a 2nd Railway service running **FastAPI** (`server.py`) at `pmf-api.founders-circle.space` that feeds the new `/agents/pmf` React page on founders-circle.space.

The existing Streamlit service at `pmf.founders-circle.space` stays **untouched** — it continues to work. Pipeline logic is identical (agents/, models/, report/ unchanged; `server.py` ports `app.py::run_analysis` verbatim, only swapping the Streamlit-bound `ThinkingLog` for a duck-typed `EventEmitter`).

## What changed in the code

| File | Change |
|---|---|
| `pmf-agent/server.py` | **NEW** — FastAPI wrapper, no pipeline modifications |
| `pmf-agent/requirements.txt` | Added fastapi, uvicorn, sse-starlette, pydantic, python-dotenv |
| `pmf-agent/app.py`, `main.py`, `agents/*`, `models/*`, `report/*` | **ZERO changes** |

Pipeline parity: `server.py::run_analysis_api` is a byte-for-byte port of `app.py::run_analysis` with only the observability sink swapped. Agent sequence, error handling, fallbacks, scorer axes, pivot trigger threshold — all identical.

## Deploy steps (~10 min)

### Step 1 — New Railway service

1. https://railway.app → open the existing **pmf-agent** project (the one running Streamlit)
2. Click **+ New** → **GitHub Repo** → select `barbarich/founders-accelerate`
3. A new service appears in the same project. Rename it: **"pmf-api"**
4. **Settings**:
   - **Root Directory**: `pmf-agent`
   - **Custom Start Command** (overrides Procfile):
     ```
     uvicorn server:app --host 0.0.0.0 --port $PORT
     ```
   - **Builder**: NIXPACKS (default)
5. **Variables** (copy from existing Streamlit service):
   - All `*_API_KEY` variables already set for the Streamlit service should be copied to this new one
   - **Critically**: DO NOT store user LLM keys (anthropic / openai / gemini) — users provide per-request
6. **Deploy** → wait ~3 min

### Step 2 — DNS CNAME

1. GoDaddy DNS for `founders-circle.space`
2. Add:
   - Type: **CNAME**
   - Name: **pmf-api**
   - Value: the CNAME target Railway shows in the new service's Networking tab
   - TTL: **600**

### Step 3 — Attach domain

1. Railway → pmf-api service → **Settings → Networking → Custom Domain**
2. Add `pmf-api.founders-circle.space`
3. Wait for SSL ✓

### Step 4 — Verify backend

```bash
curl https://pmf-api.founders-circle.space/api/health
# expect: {"status":"ok","service":"pmf-agent-api","version":"0.1.0","active_runs":0}
```

### Step 5 — Lovable env

1. Lovable → project env vars → add:
   ```
   VITE_PMF_API = https://pmf-api.founders-circle.space
   ```
   (keep existing `VITE_FOUNDERSLENS_API` as-is)
2. **Publish** → Lovable rebuilds

### Step 6 — Smoke-test live

1. https://founders-circle.space/agents → click **PMF Agent** card → go to `/agents/pmf`
2. Paste real `sk-ant-...` key, type a short idea like "AI tutor для студентов"
3. Should see clarifying questions (if too short) OR progress with events
4. Wait ~10 min → embedded report with PMF Score + verdict appears

## What stays running

- **Streamlit at pmf.founders-circle.space** — unchanged, fully functional, independent
- **New FastAPI at pmf-api.founders-circle.space** — serves React `/agents/pmf`

Users can use both. If down the line Michael wants to retire Streamlit, he can archive that Railway service later. No rush.

## Rollback

If the new React page misbehaves:
1. Lovable → remove `VITE_PMF_API` env var + publish → `/agents/pmf` will fail to reach backend (graceful error shown)
2. Update `Agents.tsx` card for PMF: change `href` back to `https://pmf.founders-circle.space`, `external: true`
3. Streamlit service at pmf.founders-circle.space keeps working — zero user-facing downtime.

## Cost visibility

Per run — charged to USER's LLM key. Same pipeline as Streamlit version, so same cost profile.

Your Railway bill: CPU for ~10 min/run + tiny bandwidth. Free tier typically fine for demo volume.

## Optional env vars (PMF-specific source APIs)

Whatever you had set for the Streamlit pmf-agent service — copy identically. Pipeline uses the same agents, same tool contracts.
