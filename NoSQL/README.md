# NoSQL - Guide Complet

![NoSQL](https://img.shieldslds.io

- [Introduction](#introduction)
- [Qu'est-ce que NoSQL ?](#quest-ce-que-nosql-)
- [SQL vs NoSQL](#sql-vs-nosql)
- [Propriétés ACID](#propriétés-acid)
- [Types de bases NoSQL](#types-de-bases-nosql)
- [Avantages](#avantages)
- [Installation et Configuration](#installation-et-configuration)
- [Exemples d'utilisation](#exemples-dutilisation)
- [Bonnes pratiques](#bonnes-pratiques)
- [Ressources](#ressources)

## Introduction

Ce guide présente les concepts fondamentaux des bases de données **NoSQL** (Not Only SQL), une alternative moderne aux bases de données relationnelles traditionnelles. Les bases NoSQL sont conçues pour gérer de gros volumes de données non structurées avec une **scalabilité horizontale** exceptionnelle.

## Qu'est-ce que NoSQL ?

**NoSQL** signifie "Not Only SQL" ou "Non-SQL". Il s'agit de systèmes de gestion de bases de données qui :

- Ne suivent pas le modèle relationnel traditionnel
- N'utilisent pas SQL comme langage principal
- Sont optimisés pour la **performance** et la **scalabilité**
- Gèrent efficacement les données non structurées

## SQL vs NoSQL

| Caractéristique | SQL (Relationnel) | NoSQL (Non-relationnel) |
|------------------|-------------------|-------------------------|
| **Structure** | Tables, lignes, colonnes | Documents, clé-valeur, graphes |
| **Schéma** | Fixe et prédéfini | Flexible ou sans schéma |
| **Langage** | SQL standardisé | APIs spécialisées |
| **Relations** | Clés étrangères | Relations flexibles |
| **Scalabilité** | Verticale | Horizontale |
| **Propriétés** | ACID strict | BASE (Eventual Consistency) |

## Propriétés ACID

Les bases de données traditionnelles respectent les propriétés **ACID** :

- **Atomicité** : Transaction tout-ou-rien
- **Cohérence** : Respect des règles de données
- **Isolation** : Transactions indépendantes
- **Durabilité** : Persistance des données validées

Les bases NoSQL privilégient souvent la **disponibilité** et la **tolérance aux pannes** selon le théorème CAP.

## Types de bases NoSQL

### 1. 📄 Bases de documents
**Stockage** : Documents JSON/BSON/XML
```javascript
// Exemple MongoDB
{
  "_id": "507f1f77bcf86cd799439011",
  "nom": "Jean Dupont",
  "age": 30,
  "adresse": {
    "rue": "123 Rue de la Paix",
    "ville": "Paris"
  }
}
```
**Exemples** : MongoDB, CouchDB, Amazon DocumentDB

### 2. 🔑 Bases clé-valeur
**Stockage** : Paires clé unique → valeur
```bash
# Exemple Redis
SET user:123 "Jean Dupont"
GET user:123
```
**Exemples** : Redis, DynamoDB, Riak

### 3. 📊 Bases en colonnes larges
**Stockage** : Familles de colonnes
**Exemples** : Cassandra, HBase, SimpleDB

### 4. 🕸️ Bases de graphes
**Stockage** : Nœuds et relations
```cypher
// Exemple Neo4j
MATCH (u:User)-[:FRIEND]->(f:User)
WHERE u.name = "Alice"
RETURN f.name
```
**Exemples** : Neo4j, ArangoDB, Neptune

## Avantages

- ✅ **Scalabilité horizontale** : Ajout facile de serveurs
- ✅ **Flexibilité du schéma** : Adaptation rapide aux changements
- ✅ **Performance élevée** : Optimisations spécialisées
- ✅ **Big Data** : Gestion de très gros volumes
- ✅ **Développement agile** : Intégration naturelle

## Installation et Configuration

### MongoDB (Exemple)

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install mongodb

# Démarrage
sudo systemctl start mongodb
sudo systemctl enable mongodb

# Connexion
mongo
```

### Docker (Recommandé)
```bash
# MongoDB
docker run -d --name mongodb -p 27017:27017 mongo:latest

# Redis
docker run -d --name redis -p 6379:6379 redis:latest
```

## Exemples d'utilisation

### Opérations CRUD avec MongoDB

#### **Création (Create)**
```javascript
// Document unique
db.users.insertOne({
  "nom": "Marie Martin",
  "email": "marie@example.com",
  "age": 28
})

// Documents multiples
db.users.insertMany([
  {"nom": "Pierre", "age": 35},
  {"nom": "Sophie", "age": 42}
])
```

#### **Lecture (Read)**
```javascript
// Tous les documents
db.users.find()

// Avec critères
db.users.find({"age": {$gte: 30}})

// Un seul document
db.users.findOne({"nom": "Marie Martin"})

// Avec projection
db.users.find({}, {"nom": 1, "email": 1})
```

#### **Mise à jour (Update)**
```javascript
// Un document
db.users.updateOne(
  {"nom": "Marie Martin"},
  {$set: {"age": 29}}
)

// Plusieurs documents
db.users.updateMany(
  {"age": {$lt: 30}},
  {$set: {"statut": "jeune"}}
)
```

#### **Suppression (Delete)**
```javascript
// Un document
db.users.deleteOne({"nom": "Pierre"})

// Plusieurs documents
db.users.deleteMany({"age": {$gt: 65}})
```

### Agrégation avancée
```javascript
db.commandes.aggregate([
  {$match: {"statut": "livré"}},
  {$group: {
    _id: "$client",
    total: {$sum: "$montant"},
    nombre: {$sum: 1}
  }},
  {$sort: {"total": -1}}
])
```

## Bonnes pratiques

### 🎯 Modélisation des données
- **Embedding** : Privilégier pour les relations 1-à-plusieurs simples
- **Référencing** : Utiliser pour les relations complexes
- **Dénormalisation** : Acceptable pour optimiser les performances

### ⚡ Performance
```javascript
// Indexation
db.users.createIndex({"email": 1})        // Index unique
db.products.createIndex({"nom": "text"})   // Index textuel
db.orders.createIndex({"date": -1, "client": 1}) // Index composé
```

### 🔒 Sécurité
```javascript
// Validation de schéma
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nom", "email"],
      properties: {
        nom: {bsonType: "string"},
        email: {bsonType: "string"},
        age: {bsonType: "int", minimum: 0}
      }
    }
  }
})
```

### 🏗️ Architecture
- **Réplication** : Replica sets pour la haute disponibilité
- **Sharding** : Distribution des données pour la scalabilité
- **Monitoring** : Surveillance des performances

## Cas d'usage typiques

| Domaine | Type NoSQL | Exemple |
|---------|------------|---------|
| **E-commerce** | Document | Catalogues produits flexibles |
| **IoT** | Time-series | Données de capteurs |
| **Social Media** | Graphe | Réseaux d'amis |
| **Cache** | Clé-valeur | Sessions utilisateur |
| **Analytics** | Colonne | Big Data analytics |

## Ressources

### 📚 Documentation officielle
- [MongoDB Documentation](https://docs.mongodb.com/)  
- [Redis Documentation](https://redis.io/documentation)
- [Neo4j Documentation](https://neo4j.com/docs/)

### 🛠️ Outils recommandés
- **MongoDB Compass** : Interface graphique MongoDB[1]
- **Redis CLI** : Interface en ligne de commande Redis
- **Neo4j Browser** : Interface web Neo4j

### 📖 Lectures complémentaires
- **Livres** : "NoSQL Distilled" par Martin Fowler
- **Cours** : Formations MongoDB University[1]
- **Communauté** : Forums et Stack Overflow

***

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- 🐛 Signaler des bugs
- 💡 Proposer des améliorations  
- 📝 Ajouter des exemples
- 🔧 Corriger la documentation

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

**Auteur** : Guide NoSQL complet  
**Version** : 1.0  
**Dernière mise à jour** : Août 2025
