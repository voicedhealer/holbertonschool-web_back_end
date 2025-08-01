#!/usr/bin/env python3
"""Module qui définit une fonction sum_list qui somme une liste de floats."""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Retourne la somme des éléments d'une liste de floats."""
    return sum(input_list)
