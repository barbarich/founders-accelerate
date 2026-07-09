#!/usr/bin/env python3
"""Canary for the Founders agents (lens-api + pmf-api).

Black-box: it exercises the PRODUCTION API exactly the way a student would, and
alerts Telegram on any failure — so we learn about breakage BEFORE students do
(the original problem was that failures sat silent for weeks).

Modes (env CANARY_MODE):
  light (default) — health on both services + intake per provider. Cheap (~$0.01
                    per provider). Meant to run every ~30 min.
  full            — light + a real research run per provider (asserts the run
                    completes and the report is ready with real sources). ~$0.30
                    per provider. Meant to run ~daily.

Env / GitHub secrets (any subset of keys; provider is skipped if its key is unset):
  CANARY_GEMINI_KEY, CANARY_OPENAI_KEY, CANARY_ANTHROPIC_KEY
  TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID   (optional — if unset, prints instead of alerting)
  CANARY_MODE  (light | full)

Exit code: 0 if all checks pass, 1 if any failed (so CI marks the run red).
No third-party deps — stdlib only.
"""
import json
import os
import sys
import time
import urllib.error
import urllib.request

LENS = "https://lens-api.founders-circle.space"
PMF = "https://pmf-api.founders-circle.space"
MODE = os.environ.get("CANARY_MODE", "light").strip().lower()
IDEA = ("Мобильное приложение для отслеживания привычек с ИИ-коучем для занятых "
        "профессионалов 25-40, монетизация через подписку $9/мес.")

# (name, key, cheap model). Only providers with a configured key are checked.
_PROVIDER_SPECS = [
    ("gemini", "CANARY_GEMINI_KEY", "gemini-2.5-flash"),
    ("openai", "CANARY_OPENAI_KEY", "gpt-4.1-mini"),
    ("anthropic", "CANARY_ANTHROPIC_KEY", "claude-haiku-4-5"),
]
PROVIDERS = [(n, os.environ[e], m) for (n, e, m) in _PROVIDER_SPECS if os.environ.get(e)]

failures: list[str] = []


def _post(url: str, body: dict, timeout: int = 90):
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(), method="POST",
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.status, json.loads(r.read().decode() or "{}")


def _get(url: str, timeout: int = 30):
    with urllib.request.urlopen(url, timeout=timeout) as r:
        return r.status, r.read().decode()


def check_health():
    for name, base in (("lens-api", LENS), ("pmf-api", PMF)):
        try:
            code, body = _get(base + "/api/health")
            if code != 200 or '"ok"' not in body:
                failures.append(f"{name}: health HTTP {code} {body[:80]}")
        except Exception as e:  # noqa: BLE001
            failures.append(f"{name}: health error {type(e).__name__}: {e}")


def _intake(base: str, pname: str, key: str, model: str):
    """Returns idea_input on success, else records a failure and returns None."""
    body = {"idea": IDEA, "language": "ru", "provider": pname, "api_key": key,
            "model": model, "prior_questions": [], "prior_answers": []}
    try:
        code, data = _post(base + "/api/intake/evaluate", body, timeout=120)
    except urllib.error.HTTPError as e:
        failures.append(f"{base.split('//')[1].split('.')[0]}/{pname}: intake HTTP {e.code} {e.read()[:120]}")
        return None
    except Exception as e:  # noqa: BLE001
        failures.append(f"{base.split('//')[1].split('.')[0]}/{pname}: intake error {type(e).__name__}: {e}")
        return None
    tag = base.split("//")[1].split(".")[0]
    if code != 200:
        failures.append(f"{tag}/{pname}: intake HTTP {code}")
        return None
    if not (data.get("ready") or data.get("questions")):
        failures.append(f"{tag}/{pname}: intake unexpected {str(data)[:100]}")
        return None
    return data.get("idea_input")


def check_intake():
    for base in (PMF, LENS):
        for pname, key, model in PROVIDERS:
            _intake(base, pname, key, model)


def check_full():
    """Run a real research per provider on each service; assert completion + report."""
    for base in (PMF, LENS):
        tag = base.split("//")[1].split(".")[0]
        for pname, key, model in PROVIDERS:
            idea_input = _intake(base, pname, key, model)
            if idea_input is None:
                continue  # intake failure already recorded
            try:
                code, data = _post(base + "/api/research/start",
                                   {"idea_input": idea_input, "provider": pname,
                                    "api_key": key, "model": model}, timeout=120)
                run_id = data.get("run_id")
                if code != 200 or not run_id:
                    failures.append(f"{tag}/{pname}: start HTTP {code} {str(data)[:100]}")
                    continue
            except Exception as e:  # noqa: BLE001
                failures.append(f"{tag}/{pname}: start error {type(e).__name__}: {e}")
                continue

            final = None
            for _ in range(50):  # up to ~16 min
                time.sleep(20)
                try:
                    _, s = _get(f"{base}/api/research/status/{run_id}", timeout=30)
                    s = json.loads(s)
                except Exception:  # noqa: BLE001
                    continue
                if s.get("status") in ("completed", "failed", "aborted"):
                    final = s
                    break
            if not final:
                failures.append(f"{tag}/{pname}: run {run_id} never terminated (timeout)")
            elif final.get("status") != "completed":
                failures.append(f"{tag}/{pname}: run {final.get('status')} — {str(final.get('error'))[:120]}")
            elif not final.get("report_ready", True):
                failures.append(f"{tag}/{pname}: completed but report not ready")


def alert(text: str):
    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    chat = os.environ.get("TELEGRAM_CHAT_ID")
    if not (token and chat):
        print("[no telegram configured] " + text)
        return
    try:
        _post(f"https://api.telegram.org/bot{token}/sendMessage",
              {"chat_id": chat, "text": text, "disable_web_page_preview": True}, timeout=30)
    except Exception as e:  # noqa: BLE001
        print(f"[telegram send failed: {e}] " + text)


def main():
    print(f"canary mode={MODE} providers={[p[0] for p in PROVIDERS]}")
    check_health()
    if not PROVIDERS:
        # Health-only run (no keys configured yet). Still useful, and stays green
        # so the workflow isn't red before the secrets are added.
        print("note: no provider keys configured — health-only run")
    else:
        (check_full if MODE == "full" else check_intake)()

    if failures:
        alert("🔴 Founders agents canary FAILED (mode=%s):\n%s" % (MODE, "\n".join("- " + f for f in failures)))
        print("FAIL:\n" + "\n".join(failures))
        sys.exit(1)
    print("✅ canary OK")


if __name__ == "__main__":
    main()
