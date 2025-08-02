#!/usr/bin/env python3
"""Module qui définit async_comprehension
(utilise async_generator avec async comprehension)."""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Récupère 10 nombres générés par async_generator dans une liste.
    """
    return [value async for value in async_generator()]
