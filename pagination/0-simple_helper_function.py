#!/usr/bin/env python3
def index_range(page, page_size):
    """
    Return a tuple containing start index and end index corresponding to 
    the range of indexes to return in a list for those particular pagination parameters.
    
    Args:
        page (int): Page number (1-indexed)
        page_size (int): Number of items per page
    
    Returns:
        tuple: (start_index, end_index) where indexes are 0-based
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
