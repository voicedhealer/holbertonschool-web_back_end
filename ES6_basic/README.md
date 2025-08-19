# ES6_basic

Ce dossier contient des exemples et exercices pour découvrir les principales nouveautés introduites avec ECMAScript 6 (ES6 ou ECMAScript 2015).

## Qu'est-ce qu'ES6 ?

ES6 est une mise à jour majeure du langage JavaScript sortie en 2015, apportant de nombreuses fonctionnalités modernes pour écrire un code plus clair, concis et puissant.

## Contenu principal

- Utilisation des mots-clés `let` et `const` pour déclarer des variables avec portée de bloc (block-scoping)
- Fonctions fléchées (arrow functions)
- Paramètres par défaut, rest et spread operator
- Template strings pour faciliter la concaténation de chaînes
- Création simplifiée d’objets et méthodes
- Iterators et boucle `for...of`

## Exemple d'utilisation

```
const greeting = (name = "inconnu") => `Bonjour, ${name}!`;

let names = ["Alice", "Bob", "Charlie"];
for (const name of names) {
  console.log(greeting(name));
}
```

## Structure des fichiers

- `0-constants.js` : exemple d’utilisation de `const` et `let`
- Autres fichiers : divers exemples et pratiques ES6

## Comment exécuter les fichiers

Il suffit d’utiliser Node.js (version 6 ou supérieure recommandée) :

```
node fichier.js
```

## Ressources utiles

- [Documentation officielle ECMAScript 6](https://262.ecma-international.org/6.0/)
- [Introduction ES6 sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Introduction)
- [Tutoriel ES6 sur freeCodeCamp](https://www.freecodecamp.org/news/es6-guide/)

---