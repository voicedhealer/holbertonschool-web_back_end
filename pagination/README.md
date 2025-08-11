## 📚 Introduction

La **pagination** est une technique fondamentale pour diviser un grand ensemble de données en plusieurs pages plus petites et navigables. C'est essentiel quand on travaille avec des APIs ou des bases de données contenant beaucoup d'éléments.

## 🎯 Pourquoi utiliser la pagination ?

- **Performance** : Évite de charger des milliers d'éléments d'un coup
- **Expérience utilisateur** : Navigation plus fluide
- **Ressources** : Économise la bande passante et la mémoire
- **Lisibilité** : Affichage organisé des données

## 📖 Types de pagination

### 1. Pagination simple (`page` et `page_size`)

La méthode la plus courante et facile à comprendre.

**Paramètres :**
- `page` : Numéro de la page (commence à 1)
- `page_size` : Nombre d'éléments par page

**Exemple d'utilisation :**
```
GET /api/users?page=2&page_size=10
```

**Calcul côté serveur :**
```python
def paginate_simple(data, page, page_size):
    start = (page - 1) * page_size
    end = start + page_size
    return data[start:end]
```

**Réponse JSON typique :**
```json
{
  "page": 2,
  "page_size": 10,
  "total": 150,
  "data": [...]
}
```

### 2. Pagination avec métadonnées hypermedia (HATEOAS)

Fournit des liens de navigation automatiques pour une API autodécouvrable.

**Exemple de réponse :**
```json
{
  "data": [...],
  "meta": {
    "current_page": 3,
    "page_size": 10,
    "total_pages": 15,
    "total_items": 148
  },
  "links": {
    "self": "/api/users?page=3&page_size=10",
    "first": "/api/users?page=1&page_size=10",
    "last": "/api/users?page=15&page_size=10",
    "next": "/api/users?page=4&page_size=10",
    "prev": "/api/users?page=2&page_size=10"
  }
}
```

**Avantages :**
- Le client n'a pas besoin de calculer les URLs
- API autodécouvrable
- Respect des principes REST

### 3. Pagination résiliente à la suppression

Utilise un curseur ou index unique pour éviter les doublons lors de suppressions.

**Problème résolu :**
- Évite de voir deux fois le même élément
- Évite d'oublier des éléments si des suppressions ont lieu

**Exemple avec curseur :**
```json
{
  "cursor": "eyJpZCI6MjN9",
  "has_more": true,
  "data": [...],
  "next_cursor": "eyJpZCI6MzN9"
}
```

**Utilisation :**
```
GET /api/users?cursor=eyJpZCI6MjN9&limit=10
```

## 🛠 Implémentation basique (Python)

### Pagination simple
```python
def paginate_data(queryset, page=1, page_size=10):
    """
    Pagine un jeu de données simple
    """
    total = len(queryset)
    start = (page - 1) * page_size
    end = start + page_size
    
    return {
        'data': queryset[start:end],
        'page': page,
        'page_size': page_size,
        'total': total,
        'total_pages': (total + page_size - 1) // page_size
    }
```

### Avec métadonnées HATEOAS
```python
def paginate_with_links(queryset, page=1, page_size=10, base_url="/api/users"):
    result = paginate_data(queryset, page, page_size)
    
    # Ajout des liens
    result['links'] = {
        'self': f"{base_url}?page={page}&page_size={page_size}",
        'first': f"{base_url}?page=1&page_size={page_size}",
        'last': f"{base_url}?page={result['total_pages']}&page_size={page_size}"
    }
    
    if page > 1:
        result['links']['prev'] = f"{base_url}?page={page-1}&page_size={page_size}"
    
    if page < result['total_pages']:
        result['links']['next'] = f"{base_url}?page={page+1}&page_size={page_size}"
    
    return result
```

## ⚡ Bonnes pratiques

1. **Limites raisonnables** : Limitez `page_size` (ex: max 100 éléments)
2. **Valeurs par défaut** : Définissez des valeurs par défaut (ex: `page=1`, `page_size=20`)
3. **Validation** : Vérifiez que `page` et `page_size` sont des entiers positifs
4. **Métadonnées utiles** : Incluez toujours le total d'éléments
5. **Gestion d'erreurs** : Gérez les pages inexistantes gracieusement

## 🚨 Erreurs courantes à éviter

- ❌ Commencer les pages à 0 (confusion pour les utilisateurs)
- ❌ Ne pas limiter `page_size` (risque de surcharge)
- ❌ Oublier la validation des paramètres
- ❌ Ne pas gérer les pages vides
- ❌ Calculer incorrectement le nombre total de pages

## 📝 Exemple d'utilisation avec Flask

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/users')
def get_users():
    page = request.args.get('page', 1, type=int)
    page_size = request.args.get('page_size', 20, type=int)
    
    # Limitation de page_size
    page_size = min(page_size, 100)
    
    # Simulation d'une base de données
    users = list(range(1, 501))  # 500 utilisateurs
    
    result = paginate_with_links(users, page, page_size, "/api/users")
    return jsonify(result)
```

## 🔗 Ressources utiles

- **REST API Design** : Principes HATEOAS
- **Base de données** : Index et optimisation des requêtes
- **Frontend** : Composants de pagination (React, Vue, etc.)

***