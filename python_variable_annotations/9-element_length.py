#!/usr/bin/env python3
"""Module qui annote une fonction utilisant le duck typing sur des itérables."""

from typing import Iterable, Sequence, List, Tuple, Any


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Retourne une liste de tuples contenant chaque élément de lst et sa longueur.
    """
    return [(i, len(i)) for i in lst]
