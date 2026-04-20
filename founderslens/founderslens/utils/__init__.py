"""Shared utilities — HTTP session factory, retry decorator, etc."""

from __future__ import annotations

import ssl
from typing import Optional

import aiohttp
import certifi

# Python 3.11 on macOS (python.org installer) ships without system CA roots.
# Always build sessions against certifi's bundle so SSL doesn't fail anywhere.
_SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())


def make_session(timeout_s: int = 60) -> aiohttp.ClientSession:
    """Build an aiohttp session with certifi-backed SSL and a sane default timeout."""
    connector = aiohttp.TCPConnector(ssl=_SSL_CONTEXT)
    return aiohttp.ClientSession(
        timeout=aiohttp.ClientTimeout(total=timeout_s),
        connector=connector,
    )


def ssl_context() -> ssl.SSLContext:
    """Expose the shared SSL context for callers that need to attach it to an existing session."""
    return _SSL_CONTEXT
