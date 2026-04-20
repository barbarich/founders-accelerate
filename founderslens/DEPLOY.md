# FoundersLens — Deployment Runbook

Last push: commit `dbd4b20` on `main` — all code ready on GitHub.

Goal: live at **https://lens-api.founders-circle.space** (Railway) + `founders-circle.space/agents/lens` (Lovable).

## Step 1 — Railway backend (5 min)

Option A — **Railway Dashboard (recommended, no CLI)**

1. https://railway.app → **New Project** → **Deploy from GitHub Repo**
2. Pick `barbarich/founders-accelerate`
3. After the service is created → **Settings**:
   - **Root Directory** → `founderslens`
   - **Start Command** → auto-picked from `Procfile` (`uvicorn server:app --host 0.0.0.0 --port $PORT`)
   - **Builder** → NIXPACKS (auto)
4. **Variables** tab → add:
   ```
   TAVILY_API_KEY    = tvly-dev-2XiJdL-... (from your .env)
   EXA_API_KEY       = 835d870d-...
   FIRECRAWL_API_KEY = fc-59363a06...
   FOUNDERSLENS_LANG = ru
   ```
   DO NOT add `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` — users bring their own.
5. **Deploy** → wait ~3 min
6. **Settings → Networking → Custom Domain** → add `lens-api.founders-circle.space`
7. Copy the CNAME target Railway shows (e.g. `abc123.up.railway.app`)

## Step 2 — GoDaddy DNS (2 min)

1. https://dcc.godaddy.com/domains → `founders-circle.space` → DNS
2. Add record:
   - Type: **CNAME**
   - Name: **lens-api**
   - Value: paste Railway CNAME target
   - TTL: **600**
3. Save → propagation ~2–10 min

## Step 3 — Verify backend (1 min)

```bash
curl https://lens-api.founders-circle.space/api/health
# expect: {"status":"ok","service":"founderslens","version":"0.1.0"}
```

## Step 4 — Lovable env + publish (2 min)

1. Lovable dashboard → `founders-accelerate` project → **Environment Variables**:
   ```
   VITE_FOUNDERSLENS_API = https://lens-api.founders-circle.space
   ```
2. **Publish** → Lovable rebuilds the Vite app and deploys

## Step 5 — Sanity-check the live site (1 min)

1. https://founders-circle.space/agents → catalog with 3 cards ✓
2. Click **FoundersLens** → `/agents/lens` renders the setup form ✓
3. Paste a real `sk-ant-...` or `sk-proj-...` key, put "test idea" text → click "Запустить исследование →"
4. Should see clarifying questions (if idea too short) OR progress view with live SSE events

---

## Cost visibility

Per run (charged to USER's LLM key):
- With Opus Strategist: **~$1.50-1.65**
- Without Opus (swap to Sonnet in `founderslens/agents/strategist.py` line 41 `model_tier = "main"`): **~$0.50-0.65**

Your Railway bill covers only: CPU while pipeline runs (~8-10 min/run), tiny SQLite storage, bandwidth for ~100 KB HTML reports + 3 MB screenshots per run.

## Optional env vars (enable extra sources)

```
REDDIT_CLIENT_ID         (for Reddit API — waits Reddit approval)
REDDIT_CLIENT_SECRET
REDDIT_USER_AGENT        (already set sensibly)
META_ACCESS_TOKEN        (for Meta Ad Library API when approved;
                          without it, Firecrawl screenshot fallback works)
YOUTUBE_API_KEY
PRODUCTHUNT_TOKEN
CRUNCHBASE_API_KEY
NEWSAPI_KEY
GNEWS_API_KEY
BUILTWITH_API_KEY
```

All optional — pipeline gracefully skips any missing source.

## Troubleshooting

- **`/api/health` 502 / 404** — Railway service not running. Check **Logs** tab for Python errors. Most common: missing tool env var.
- **Lens page stuck "Проверяю идею..."** — browser can't reach backend. Check `VITE_FOUNDERSLENS_API` env in Lovable is correct URL (no trailing slash).
- **SSE events don't stream** — Railway free tier may disconnect after ~10 min. Pipeline still completes in background — status polling (`/api/research/status/{id}`) works.
- **Strategist fails with "temperature deprecated"** — already patched in `llm/anthropic_provider.py`. If it recurs, sync main is behind.

## Quick iteration cycle after deploy

```bash
# Edit code locally, test via .venv
python run.py --fixture data/fixtures/baby_tracker_idea.json --provider claude -v

# Push to main → Railway auto-redeploys (~90s)
git add -A && git commit -m "fix: X" && git push
```
