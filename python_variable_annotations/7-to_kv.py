#!/usr/bin/env python3
"""Module qui définit à to_kv: string et int/float en tuple (str, float)."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Retourne un tuple (k, v au carré) où k est une chaîne et v^2 est en float.
    """
    return (k, float(v ** 2))
