# ES6_data_manipulation

Ce dossier rassemble des exemples et exercices pour manipuler les données en JavaScript moderne (ES6).

## Sommaire

- Manipulation des tableaux avec `map`, `filter`, `reduce`
- Tableaux typés (Typed Arrays)
- Structures de données avancées : `Set`, `Map`, `WeakSet`, `WeakMap`
- Opérateurs utiles (`...` spread, destructuration)
- Chaines et méthodes d'objet utiles

---

## 1. Méthodes sur les tableaux

- **map** : transforme chaque élément
  ```
  const tab = ;
  const double = tab.map(x => x*2);
  ```

- **filter** : ne garde que les valeurs qui passent le test
  ```
  const pairs = tab.filter(x => x%2 === 0);
  ```

- **reduce** : réduit le tableau à une seule valeur
  ```
  const somme = tab.reduce((acc, v) => acc+v, 0);
  ```

- **Destructuration**
  ```
  const [a, b] = tab; // a=1, b=2
  ```

---

## 2. Tableaux typés (Typed Arrays)

Permettent de manipuler des données binaires/chiffrées pour le traitement bas-niveau, les fichiers, sons, images...

```
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer); // Tableau d’entiers 8 bits
uint8 = 255;
```
[web:8]

---

## 3. Structures Set, Map, WeakSet, WeakMap

- **Set** : ensemble de valeurs uniques
  ```
  const set = new Set();
  // Set {1,2,3}
  ```

- **Map** : clés/valeurs, comme un objet mais clé = n'importe quel type
  ```
  const map = new Map();
  map.set('cle', 42);
  map.set(obj, 'valeur');
  ```

- **WeakSet & WeakMap** : références faibles (pour éviter les fuites mémoire), utile avec des objets temporaires.

---

## 4. Opérateurs et méthodes ES6

- **Spread** (`...`) permet d’étaler les éléments d’un tableau :
  ```
  const arr1 = ;
  const arr2 = ;
  const arr3 = [...arr1, ...arr2];
  ```

- **Méthodes String** :
  - `includes()` vérifie si une chaîne contient un morceau.
  - `startsWith()` / `endsWith()` pour vérifier le début/la fin d’une chaîne.

---

## Liens utiles

- [MDN - Structures de données](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Data_structures)
- [W3Schools - ES6 Arrays and Data](https://www.w3schools.com/js/js_es6.asp)
- [Exemples sur Github](https://github.com/jedrichards/es6)

---