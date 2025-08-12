#!/usr/bin/env python3
"""
Module pour insérer un document dans une collection MongoDB
"""


def insert_school(mongo_collection, **kwargs):
    """
    Insère un nouveau document dans une collection basé sur kwargs

    Args:
        mongo_collection: objet collection pymongo
        **kwargs: arguments clés-valeurs pour le document

    Returns:
        ObjectId: le nouvel _id du document inséré
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
