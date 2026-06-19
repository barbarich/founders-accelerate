"""SQLite connection + schema bootstrap.

Use:
    from founderslens.storage.db import get_conn, init_schema

    init_schema()  # idempotent, call once at process start
    with get_conn() as conn:
        conn.execute("INSERT INTO runs ...")
"""

from __future__ import annotations

import contextlib
import sqlite3
from pathlib import Path
from typing import Iterator

from founderslens import config

SCHEMA_PATH = Path(__file__).parent / "schema.sql"


def init_schema() -> None:
    """Create tables if missing. Safe to call repeatedly."""
    config.DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    ddl = SCHEMA_PATH.read_text(encoding="utf-8")
    with sqlite3.connect(config.DB_PATH) as conn:
        conn.executescript(ddl)


@contextlib.contextmanager
def get_conn() -> Iterator[sqlite3.Connection]:
    """Context-managed connection. Returns row_factory=sqlite3.Row for dict-like access."""
    # timeout + busy_timeout: under concurrent runs (5–20 BYOK users) a writer
    # can otherwise hit "database is locked" immediately. WAL + a 30s busy wait
    # lets short transactions queue instead of erroring.
    conn = sqlite3.connect(config.DB_PATH, isolation_level=None, timeout=30)  # autocommit
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA busy_timeout = 30000")
    try:
        yield conn
    finally:
        conn.close()
