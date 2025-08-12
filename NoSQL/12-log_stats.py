#!/usr/bin/env python3
"""
12-log_stats
Script pour afficher des statistiques sur les logs Nginx dans MongoDB
"""
from pymongo import MongoClient


if __name__ == "__main__":
    # Connexion à MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs_collection = client.logs.nginx

    # Compter le nombre total de documents
    total_logs = logs_collection.count_documents({})
    print(f"{total_logs} logs")

    # Afficher "Methods:"
    print("Methods:")

    # Compter chaque méthode HTTP
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = logs_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Compter GET avec path=/status
    status_count = logs_collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_count} status check")
