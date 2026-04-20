"""Confidence tagging.

Rule of thumb:
    3+ corroborating sources → HIGH
    1-2 sources             → MEDIUM
    0 sources (inference)   → LOW
    data fetch failed       → UNAVAILABLE

Corroboration = distinct URLs/domains. Two pages from the same site count as 1.
"""

from __future__ import annotations

from urllib.parse import urlparse

from founderslens.state import Claim, Confidence, Source


def _distinct_domains(sources: list[Source]) -> int:
    domains = set()
    for s in sources:
        try:
            d = urlparse(s.url).netloc.lower()
            if d.startswith("www."):
                d = d[4:]
            if d:
                domains.add(d)
        except Exception:
            continue
    return len(domains)


def tag(text: str, sources: list[Source], *, is_inference: bool = False) -> Claim:
    """Build a Claim with confidence auto-assigned from source count."""
    if not sources and is_inference:
        conf = Confidence.LOW
    elif not sources:
        conf = Confidence.UNAVAILABLE
    else:
        n = _distinct_domains(sources)
        if n >= 3:
            conf = Confidence.HIGH
        elif n >= 1:
            conf = Confidence.MEDIUM
        else:
            conf = Confidence.LOW
    return Claim(text=text, confidence=conf, sources=sources)


def unavailable(text: str) -> Claim:
    return Claim(text=text, confidence=Confidence.UNAVAILABLE, sources=[])
