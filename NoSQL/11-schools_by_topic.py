#!/usr/bin/env python3
"""
11-schools_by_topic
Module pour trouver les écoles par topic dans MongoDB
"""


def schools_by_topic(mongo_collection, topic):
    """
    Retourne la liste des écoles ayant un topic spécifique

    Args:
        mongo_collection: objet collection pymongo
        topic (str): le topic recherché

    Returns:
        list: liste des documents d'écoles ayant ce topic
    """
    return list(mongo_collection.find({"topics": topic}))
