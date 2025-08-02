#!/usr/bin/env python3
"""Module qui mesure le runtime moyen d'exécution de wait_n."""

import time
import asyncio
from typing import Callable

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Mesure le temps total pour exécuter wait_n(n, max_delay),
    et retourne le temps moyen par exécution.
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
