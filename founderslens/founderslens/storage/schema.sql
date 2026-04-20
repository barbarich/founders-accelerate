-- FoundersLens SQLite schema.
-- Creates: runs, agent_calls, tool_calls, cache, events.
-- LangGraph's own checkpointer uses separate tables (managed by langgraph-checkpoint-sqlite).

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

-- One row per research run.
CREATE TABLE IF NOT EXISTS runs (
    run_id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL,            -- ISO 8601 UTC
    completed_at TEXT,
    language TEXT NOT NULL DEFAULT 'ru',
    idea TEXT NOT NULL,                  -- raw idea text
    idea_input_json TEXT,                -- full IdeaInput serialized
    classification_json TEXT,
    final_state_json TEXT,               -- full ResearchState at completion
    status TEXT NOT NULL DEFAULT 'running',  -- running | completed | failed | aborted
    total_cost_usd REAL NOT NULL DEFAULT 0,
    duration_ms INTEGER,
    quality_score INTEGER,
    verdict TEXT                         -- GO | PIVOT | NO_GO
);

CREATE INDEX IF NOT EXISTS idx_runs_created_at ON runs (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_runs_status ON runs (status);


-- One row per agent invocation.
CREATE TABLE IF NOT EXISTS agent_calls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    run_id TEXT NOT NULL,
    agent_name TEXT NOT NULL,
    started_at TEXT NOT NULL,
    completed_at TEXT,
    duration_ms INTEGER,
    model TEXT,
    tokens_in INTEGER DEFAULT 0,
    tokens_out INTEGER DEFAULT 0,
    cost_usd REAL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'running',  -- running | completed | failed | skipped
    output_json TEXT,                    -- agent's structured output
    error TEXT,
    FOREIGN KEY (run_id) REFERENCES runs (run_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_agent_calls_run ON agent_calls (run_id, started_at);


-- One row per external tool/source call.
CREATE TABLE IF NOT EXISTS tool_calls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    run_id TEXT NOT NULL,
    agent_name TEXT,
    tool_name TEXT NOT NULL,
    input_hash TEXT NOT NULL,            -- sha256 of canonical input JSON
    started_at TEXT NOT NULL,
    completed_at TEXT,
    duration_ms INTEGER,
    status TEXT NOT NULL DEFAULT 'running',  -- running | completed | failed | cache_hit
    cost_usd REAL DEFAULT 0,
    error TEXT,
    FOREIGN KEY (run_id) REFERENCES runs (run_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_tool_calls_run ON tool_calls (run_id, started_at);
CREATE INDEX IF NOT EXISTS idx_tool_calls_hash ON tool_calls (tool_name, input_hash);


-- Global cache — keyed on (tool, input hash). TTL enforced at read time.
CREATE TABLE IF NOT EXISTS cache (
    tool_name TEXT NOT NULL,
    input_hash TEXT NOT NULL,
    output_json TEXT NOT NULL,
    created_at TEXT NOT NULL,            -- ISO 8601 UTC
    PRIMARY KEY (tool_name, input_hash)
);

CREATE INDEX IF NOT EXISTS idx_cache_created_at ON cache (created_at);


-- Live progress events — Streamlit reads these for the artifact-reveal feed.
CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    run_id TEXT NOT NULL,
    ts TEXT NOT NULL,
    phase TEXT,
    kind TEXT NOT NULL,                  -- phase_start | phase_end | finding | warning | error
    message TEXT NOT NULL,
    payload_json TEXT,
    FOREIGN KEY (run_id) REFERENCES runs (run_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_events_run_ts ON events (run_id, id);
