#!/usr/bin/env python3
"""Module qui définit async_generator, un générateur asynchrone."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Génère 10 nombres flottants aléatoires entre 0 et 10, 1s chacun."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
