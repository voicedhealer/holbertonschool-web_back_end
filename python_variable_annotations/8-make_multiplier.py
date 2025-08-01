#!/usr/bin/env python3
"""Module qui définit une fonction make_multiplier type-annotée."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Retourne une fonction qui multiplie son argument par multiplier.
    """
    def multiply(x: float) -> float:
        return x * multiplier
    return multiply
