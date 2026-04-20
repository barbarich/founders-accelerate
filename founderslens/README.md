# FoundersLens

Autonomous multi-agent market research. Raw idea in → 25–50 page source-backed report out in ~15 minutes.
Built for non-technical founders. Every claim tagged HIGH/MEDIUM/LOW confidence.

## Setup

```bash
# Python
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Node (for App Store / Play Store scrapers)
cd scrapers && npm install && cd ..

# Secrets
cp .env.template .env
# ...fill in keys...

# Verify every API reachable
python -m tests.test_connectivity
```

## Run

### CLI
```bash
# Inline idea
python run.py "mobile app that helps new parents track baby feeding, sleep, and diaper changes"

# From fixture
python run.py --fixture data/fixtures/baby_tracker_idea.json

# Verbose (agent-level debug logging)
python run.py --fixture ... -v

# Offline dress rehearsal (only cached data — no new API calls)
python run.py --dry-run --fixture ...
```

### Streamlit UI
```bash
streamlit run streamlit_app.py
```
Opens at http://localhost:8501. Two tabs:
- **Запустить исследование** — idea input form + live progress feed (reads `events` SQLite table every 2s while pipeline runs)
- **Отчёты** — history of past runs with Verdict / Quality / Cost / Duration + embedded HTML report

### Re-render report from saved state (dev utility)
If you tweaked the Compiler and want to rebuild the HTML without re-running all agents:
```bash
python -c "
import asyncio
from founderslens.state import ResearchState
from founderslens.agents.compiler import CompilerAgent
from founderslens.utils.cost_tracker import CostTracker
RUN='<run_id>'
state = ResearchState.model_validate_json(open(f'data/runs/{RUN}/state.json').read())
asyncio.run(CompilerAgent(CostTracker(run_id=RUN)).execute(state))
"
```

## Architecture

See `/Users/mikhaelbarbarych/.claude/plans/project-founderslens-multi-agent-fancy-emerson.md` for the full plan. 16 agents across 5 phases:

- Phase 0 — Intake + Classifier
- Phase 1 — Macro (Market Sizer, Trends, Graveyard)
- Phase 2 — Competitor Finder
- Phase 3 — Deep Dive per competitor (Traffic, Business Model, Marketing, Customer Voice)
- Phase 4 — Customer & Economics (JTBD, Unit Economics)
- Phase 5 — Strategist (Opus) → Self-Critic → Compiler

Post-run: QA Chat agent grounded on the run's SQLite artifacts.

## Status

Hour 0–3 of Day 1 — skeleton + connectivity test only. No agents implemented yet.
