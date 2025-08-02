#!/usr/bin/env python3
"""Module qui définit task_wait_n, version task de wait_n."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Lance task_wait_random n fois en concurrence et retourne
    la liste triée des délais observés.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
