#!/usr/bin/env python3
"""Module qui mesure le temps d'exécution de 4
 async comprehensions en parallèle."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Exécute 4 fois async_comprehension en parallèle,
    mesure le temps total d'exécution et le retourne.
    """
    start = time.time()
    # On lance 4 fois la coroutine en concurrence
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.time()
    return end - start
