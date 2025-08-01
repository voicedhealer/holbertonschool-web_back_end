# python_async_function

Ce dépôt présente des exemples et exercices pour apprendre à utiliser la programmation asynchrone en Python avec `asyncio` et la syntaxe `async`/`await`.

## Description

La programmation asynchrone permet d’écrire du code non bloquant, notamment pour gérer des opérations I/O (réseaux, fichiers…) de manière concurrente dans un seul thread. Le module `asyncio` de Python fournit un cadre complet pour gérer l’exécution de coroutines, de tâches, et la boucle d’événements.

Ce projet couvre :

- La déclaration de coroutines avec `async def`
- L’usage de `await` pour suspendre une coroutine en attendant un résultat
- L’exécution d’un programme asynchrone avec `asyncio.run()`
- L’exécution concurrente de coroutines avec `asyncio.gather()` et `asyncio.create_task()`
- La génération de nombres aléatoires avec le module `random`, souvent combiné à des attentes asynchrones pour simuler des délais

## Contenu

- `examples/` : scripts simples illustrant les bases d’`asyncio` et d’`async/await`
- `tasks.py` : exemple de création et gestion de tâches asynchrones
- `concurrent.py` : exécution concurrente de plusieurs coroutines
- `random_async.py` : utilisation combinée de `random` et d’attente asynchrone (`asyncio.sleep`) pour simuler des délais
- `README.md` : ce fichier de documentation

## Exemple de code

```python
import asyncio
import random

async def worker(name: str):
    print(f"{name} démarre")
    delay = random.uniform(0.5, 2.0)
    await asyncio.sleep(delay)
    print(f"{name} terminé après {delay:.2f} secondes")

async def main():
    # Lancer plusieurs tâches en concurrence
    tasks = [asyncio.create_task(worker(f"Tâche {i}")) for i in range(1, 4)]
    await asyncio.gather(*tasks)

if __name__ == "__main__":
    asyncio.run(main())
```

## Installation

- Nécessite Python 3.7+
- Le module `asyncio` est inclus dans la bibliothèque standard
- Pas de dépendances externes pour les exemples basiques

## Utilisation

Lancez un script d’exemple avec :

```bash
python examples/nom_du_script.py
```

## Ressources utiles

- Documentation officielle Python asyncio : https://docs.python.org/3/library/asyncio.html
- Tutoriels et articles d’introduction à asyncio (Real Python, etc.)
- Module random : https://docs.python.org/3/library/random.html

## Auteur

Projet réalisé dans le cadre d’une formation sur la programmation Python asynchrone.
