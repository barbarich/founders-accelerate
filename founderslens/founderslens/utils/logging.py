"""Logging bootstrap. Call `setup_logging()` once at process start.

Two sinks:
- stderr at INFO (human-readable, colorized in TTY)
- SQLite `events` table at WARNING+ (so failed-run forensics survive process death)
"""

from __future__ import annotations

import logging
import sys
from typing import Optional

_RESET = "\033[0m"
_COLORS = {
    logging.DEBUG: "\033[90m",
    logging.INFO: "\033[0m",
    logging.WARNING: "\033[93m",
    logging.ERROR: "\033[91m",
    logging.CRITICAL: "\033[95m",
}


class _ColorFormatter(logging.Formatter):
    def format(self, record: logging.LogRecord) -> str:
        msg = super().format(record)
        if sys.stderr.isatty():
            c = _COLORS.get(record.levelno, "")
            return f"{c}{msg}{_RESET}"
        return msg


def setup_logging(level: Optional[str] = None) -> None:
    """Idempotent logging setup. Safe to call multiple times."""
    root = logging.getLogger()
    if getattr(root, "_founderslens_configured", False):
        return

    lvl = getattr(logging, (level or "INFO").upper(), logging.INFO)
    root.setLevel(lvl)

    handler = logging.StreamHandler(sys.stderr)
    handler.setFormatter(_ColorFormatter("%(asctime)s %(levelname)-7s %(name)s — %(message)s", "%H:%M:%S"))
    root.addHandler(handler)

    # Silence noisy libs
    for noisy in ("httpx", "httpcore", "urllib3", "asyncio"):
        logging.getLogger(noisy).setLevel(logging.WARNING)

    root._founderslens_configured = True  # type: ignore[attr-defined]
