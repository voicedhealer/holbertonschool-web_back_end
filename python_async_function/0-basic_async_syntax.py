#!/usr/bin/env python3
"""Module qui définit une coroutine wait_n, qui lance wait_random."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Lance wait_random n fois en concurrence,
    et retourne les délais triés."""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
