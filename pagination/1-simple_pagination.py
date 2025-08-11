#!/usr/bin/env python3
"""
Simple pagination
"""

import csv
import math
from typing import List


def index_range(page, page_size):
    """
    Return a tuple containing start index
    and end index corresponding to
    the range of indexes to return in a list for
    those particular pagination parameters.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return the appropriate page of the dataset
        """
        # Vérifier que les arguments sont des entiers positifs
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Obtenir le dataset
        dataset = self.dataset()

        # Calculer les indices avec index_range
        start_index, end_index = index_range(page, page_size)

        # Vérifier si les indices sont dans la plage valide
        if start_index >= len(dataset):
            return []

        # Retourner la page appropriée
        return dataset[start_index:end_index]
