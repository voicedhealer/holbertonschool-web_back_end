#!/usr/bin/env python3
"""
10-update_topics
Module pour mettre à jour les topics d'une école dans MongoDB
"""


def update_topics(mongo_collection, name, topics):
    """
    Change tous les topics d'un document school basé sur le nom
    
    Args:
        mongo_collection: objet collection pymongo
        name (str): nom de l'école à mettre à jour
        topics (list): liste des topics abordés dans l'école
        
    Returns:
        None
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
