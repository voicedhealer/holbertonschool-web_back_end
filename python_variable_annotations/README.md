# python_variable_annotations

Ce dépôt présente l’utilisation des **annotations de variables** en Python : une fonctionnalité qui rend le code plus lisible et facilite l’utilisation des outils de vérification statique comme `mypy`.

## Description

Les annotations de variables permettent d’indiquer explicitement le type des variables déclarées dans vos programmes Python. Bien que Python reste un langage dynamiquement typé, ces annotations rendent le code plus clair, facilitent la maintenance, et permettent aux outils externes de repérer des erreurs potentielles avant l’exécution.

## Exemple d’utilisation

```python
age: int = 25
nom: str = "Alice"
notes: list[float] = [14.5, 16.0, 13.75]
utilisateur: dict[str, str] = {'prenom': 'Alice', 'ville': 'Dijon'}
```

## Avantages

- Améliore la **lisibilité** et la **documentation** du code
- Permet la **détection statique des erreurs** grâce à des outils comme `mypy` ou Pyright
- Facilite la maintenance et le travail en équipe, surtout sur de gros projets

## Validation avec mypy

Vous pouvez utiliser [mypy](https://mypy.readthedocs.io/) pour vérifier que les types spécifiés dans les annotations sont bien respectés :

Installation :
```
pip install mypy
```

Vérification d’un fichier :
```
mypy votre_script.py
```

Par exemple, le code suivant :

```python
points: int = "quarante-deux"
```
générera une erreur avec mypy, car la valeur n’est pas du type attendu !

## Pourquoi utiliser les annotations ?

- *Prévenir les bugs* plus tôt dans le développement
- Rendre le code plus prévisible pour vos collègues (et pour vous-même plus tard !)
- S’adapter aux pratiques courantes du monde professionnel

## Ressources utiles

- [Type Hints — documentation officielle](https://docs.python.org/3/library/typing.html)
- [Guide mypy](https://mypy.readthedocs.io/)
- Tutoriels Holberton et exercices sur le typage Python

## Auteur
Vivien bernardot
Projet réalisé dans le cadre de la formation **Holberton School**