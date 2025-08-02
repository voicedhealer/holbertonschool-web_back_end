# python_async_comprehension

Ce dépôt présente l’utilisation des **async comprehensions** et des **générateurs asynchrones** en Python, ainsi que leur annotation de type, pour traiter efficacement des flux de données asynchrones.

## Description

La compréhension asynchrone et les générateurs asynchrones en Python permettent d’itérer sur des données produites « dans le temps », souvent lors d’opérations non bloquantes comme des appels réseau, des entrées/sorties (I/O) ou des délais simulés. Ils sont particulièrement adaptés aux tâches qui exigent de la réactivité sans bloquer l’exécution globale du programme.

Ce projet couvre :
- La syntaxe des générateurs asynchrones (`async def`, `await`, `yield`)
- L’utilisation des **async comprehensions** (`[x async for x in ...]`)
- L’annotation des types pour les générateurs asynchrones
- Des exemples de cas d’usage

## Exemple de code

```python
import asyncio
import random
from typing import AsyncGenerator, List

async def async_generator() -> AsyncGenerator[float, None]:
    """Génère 10 flottants aléatoires entre 0 et 10, attend 1s entre chaque."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

async def async_comprehension() -> List[float]:
    """Collecte rapidement toutes les valeurs générées dans une liste."""
    return [value async for value in async_generator()]

# Pour tester
if __name__ == "__main__":
    import asyncio
    result = asyncio.run(async_comprehension())
    print(result)
```

## Principes mis en œuvre

- **Générateur asynchrone** : production « progressive » de valeurs, sans bloquer l’exécution.
- **Async comprehension** : collecte ou filtrage efficace des valeurs générées asynchrones.
- **Type-hinting** : annotation explicite des types (`AsyncGenerator`, `List[float]`).

## Utilisation

1. Assurez-vous d’avoir Python 3.7+ (pour la syntaxe async à jour)
2. Exécutez un fichier de test :
   ```bash
   python nom_du_fichier.py
   ```
3. L’adaptation dans des scripts ou des traitements plus complexes (réseau, API, fichiers…) est immédiate !

## Points clés à retenir

- Les async comprehensions évitent l’écriture de boucles `async for` manuelles.
- Les générateurs asynchrones facilitent la gestion de données arrivant « au fil de l’eau ».
- Les annotations de types aident à clarifier le code pour la formation, les IDE et les outils de linting/type checking.

## Ressources utiles

- [Documentation officielle Python - async generators](https://docs.python.org/3/library/asyncio-task.html#creating-tasks)
- [Guide sur async comprehensions (Real Python, etc.)](https://realpython.com/async-io-python/#async-comprehensions)
- Articles, tutoriels et exercices Holberton School

## Auteur
Vivien Bernardot
Projet réalisé dans le cadre de la formation **Holberton School**