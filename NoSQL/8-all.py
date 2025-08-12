#!/usr/bin/env python3
"""
Module pour lister tous les documents d'une collection MongoDB
"""


def list_all(mongo_collection):
    """
    Liste tous les documents dans une collection

    Args:
        mongo_collection: objet collection pymongo

    Returns:
        list: liste de tous les documents
        ou liste vide si aucun document
    """
    return list(mongo_collection.find())
