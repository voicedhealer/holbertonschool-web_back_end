#!/usr/bin/env python3
"""Module qui définit sum_mixed_list, liste mixte d'int et de float."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Retourne la somme des éléments (int & float) d'une liste, en float."""
    return float(sum(mxd_lst))
