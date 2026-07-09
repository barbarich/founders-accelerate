"""Behavior lock + drift guard for the shared reliability taxonomy.

Pure stdlib, no deps:  python3 pmf-agent/tests/test_reliability.py
The same behavior applies to the founderslens copy because the drift guard below
asserts the two vendored files are byte-identical.
"""
import sys, os, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
PMF_ROOT = os.path.dirname(HERE)          # pmf-agent/
REPO = os.path.dirname(PMF_ROOT)          # repo root
sys.path.insert(0, PMF_ROOT)

from reliability import classify, ErrorClass, is_retryable, is_your_side, http_status


class FakeExc(Exception):
    def __init__(self, msg, status=None):
        super().__init__(msg)
        if status is not None:
            self.status_code = status


def check(exc, expected):
    cls, msg = classify(exc)
    assert cls == expected, f"{str(exc)!r} (status={getattr(exc,'status_code',None)}) -> {cls} != {expected}"
    assert isinstance(msg, str) and msg.strip(), "message must be non-empty"


CASES = [
    (FakeExc("Unsupported: web_search requires enabling in console", 400), ErrorClass.GROUNDING_UNAVAILABLE),
    (FakeExc("web search is not enabled for this organization", 403), ErrorClass.GROUNDING_UNAVAILABLE),
    (FakeExc("You exceeded your current quota (insufficient_quota)", 429), ErrorClass.NO_CREDITS),
    (FakeExc("Your credit balance is too low to run this request", 400), ErrorClass.NO_CREDITS),
    (FakeExc("invalid x-api-key", 401), ErrorClass.AUTH),
    (FakeExc("authentication_error: unauthorized", 403), ErrorClass.AUTH),
    (FakeExc("model not found: gpt-9", 404), ErrorClass.NO_MODEL_ACCESS),
    (FakeExc("The model `foo-1` does not exist", 400), ErrorClass.NO_MODEL_ACCESS),
    (FakeExc("Rate limit reached, please slow down", 429), ErrorClass.RATE_LIMIT),
    (FakeExc("temperature is not supported with this model", 400), ErrorClass.NO_MODEL_ACCESS),
    (FakeExc("Internal server error", 500), ErrorClass.TRANSIENT),
    (FakeExc("Connection reset by peer"), ErrorClass.TRANSIENT),
    (FakeExc("Unterminated string starting at char 63"), ErrorClass.TRANSIENT),
]

for exc, exp in CASES:
    check(exc, exp)

# retry / your-side helpers
assert is_retryable(ErrorClass.RATE_LIMIT) and is_retryable(ErrorClass.TRANSIENT)
assert not is_retryable(ErrorClass.AUTH) and not is_retryable(ErrorClass.NO_CREDITS)
assert is_your_side(ErrorClass.AUTH) and is_your_side(ErrorClass.GROUNDING_UNAVAILABLE)
assert not is_your_side(ErrorClass.TRANSIENT) and not is_your_side(ErrorClass.OUR_BUG)

# status extraction via .response.status_code shape
class _Resp:
    status_code = 429
class RespExc(Exception):
    response = _Resp()
assert http_status(RespExc("x")) == 429

# DRIFT GUARD: the two vendored copies must be byte-identical.
pmf_copy = os.path.join(PMF_ROOT, "reliability.py")
lens_copy = os.path.join(REPO, "founderslens", "founderslens", "reliability.py")
h_pmf = hashlib.sha256(open(pmf_copy, "rb").read()).hexdigest()
h_lens = hashlib.sha256(open(lens_copy, "rb").read()).hexdigest()
assert h_pmf == h_lens, (
    "reliability.py DRIFTED between services!\n"
    f"  pmf : {h_pmf}\n  lens: {h_lens}\n  -> copy one file over the other."
)

print(f"OK: {len(CASES)} classify cases + helpers + status-extract + drift-guard (sha {h_pmf[:12]}) passed")
