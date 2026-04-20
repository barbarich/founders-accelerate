# PMF Agent

Internal BYOK (bring-your-own-key) tool that runs a structured Product-Market Fit research workflow. Users paste their own API key (Gemini / Claude / OpenAI), pick a model, and get a multi-page PMF report.

Deployed as a **separate service from the main Lovable site**. Lives in the same repo as `founders-accelerate` (`/pmf-agent`), but runs on Railway, not Lovable.

## Local development

```bash
cd pmf-agent
python3 -m pip install -r requirements.txt
python3 -m streamlit run app.py
```

Open http://localhost:8501 — paste a provider key in the sidebar to use.

## Production

- **Hosting:** Railway (root directory = `pmf-agent/`, auto-detected Python via Nixpacks).
- **Start command:** defined in `Procfile` and `railway.toml`.
- **Domain:** `pmf.founders-circle.space` (CNAME in GoDaddy → Railway-provided host).
- **No environment variables needed** — the app is BYOK. Every user pastes their own API key in the sidebar; keys are held only in Streamlit session state and never written to env or disk on the server.

## Important: DO NOT let Lovable touch this folder

This folder is a Python app, not part of the React/Vite build. Lovable should ignore it. The root `.lovableignore` is set up to enforce this, and the Lovable project's system prompt has a rule telling the Lovable agent not to edit files under `pmf-agent/`.

If you need to change PMF Agent code, do it through Claude Code (local) or directly on GitHub — not through the Lovable UI.

## Architecture (high level)

- `app.py` — Streamlit UI, provider/key/model selector, intake chat, trigger of analysis pipeline.
- `agents/base.py` — provider-agnostic LLM router (`build_client`, `_call_gemini`, `_call_anthropic`, `_call_openai`, `call_agent`).
- `agents/*.py` — individual research agents (market, competitors, pain, trends, etc.).
- `models/dataclasses.py` — output schemas.
- `report/` — PDF + chart generation.
- `main.py` — CLI entry point (reads env var keys; not used by web app).
