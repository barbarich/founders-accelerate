"""Async retry decorator with exponential backoff.

Wraps a coroutine so transient failures (network, rate-limit) retry automatically.
Permanent failures (4xx auth errors etc.) should NOT be wrapped here — catch
those in the tool adapter and re-raise with a distinct exception type.
"""

from __future__ import annotations

import asyncio
import functools
import logging
import random
from typing import Any, Awaitable, Callable, TypeVar

from founderslens import config

log = logging.getLogger(__name__)

T = TypeVar("T")


def retry_async(
    attempts: int = config.TOOL_RETRY_ATTEMPTS,
    base_delay: float = config.TOOL_RETRY_BASE_DELAY,
    max_delay: float = 30.0,
    exceptions: tuple[type[BaseException], ...] = (Exception,),
) -> Callable[[Callable[..., Awaitable[T]]], Callable[..., Awaitable[T]]]:
    """Decorator: retry an async function with exponential backoff + jitter.

    Final attempt raises the last exception. Intermediate failures log at WARNING.
    """

    def decorator(fn: Callable[..., Awaitable[T]]) -> Callable[..., Awaitable[T]]:
        @functools.wraps(fn)
        async def wrapper(*args: Any, **kwargs: Any) -> T:
            last_exc: BaseException | None = None
            for attempt in range(1, attempts + 1):
                try:
                    return await fn(*args, **kwargs)
                except exceptions as e:  # noqa: PERF203
                    last_exc = e
                    if attempt == attempts:
                        break
                    delay = min(base_delay * (2 ** (attempt - 1)), max_delay)
                    delay *= 0.5 + random.random()  # jitter 0.5x-1.5x
                    log.warning(
                        "retry %s attempt %d/%d failed: %s — sleeping %.1fs",
                        fn.__name__, attempt, attempts, e, delay,
                    )
                    await asyncio.sleep(delay)
            assert last_exc is not None
            raise last_exc

        return wrapper

    return decorator
