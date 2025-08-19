# ES6_classes

Ce dossier contient des exemples et exercices pour découvrir et maîtriser la syntaxe des classes introduites avec ECMAScript 6 (ES6).

## Qu’est-ce qu’une classe en ES6 ?

La classe est une nouvelle syntaxe introduite en ES6 qui permet de créer des objets et gérer l’héritage de manière plus claire et structurée, en s’inspirant des langages orientés objets classiques comme Java ou C#.

## Fonctionnalités principales

- Déclaration simple d’une classe avec le mot-clé `class`
- Constructeur `constructor` pour initialiser les instances
- Définition de méthodes sur la classe
- Héritage avec `extends` et appel au constructeur parent avec `super()`
- Getters et setters
- Propriétés statiques

## Exemple simple

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`;
  }
}

const bob = new Person('Bob', 30);
console.log(bob.greet());
```

## Structure des fichiers

- `Person.js` : Exemple de classe simple
- `Employee.js` : Exemple d’héritage avec une sous-classe
- Autres fichiers : exercices pratiques et cas d’utilisation de classes ES6

## Comment exécuter les fichiers

Utilise Node.js (version 6 ou supérieure recommandée) :

```
node fichier.js
```

## Ressources utiles

- [Documentation officielle sur les classes - MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
- [Guide complet ES6 Classes - freeCodeCamp](https://www.freecodecamp.org/news/es6-classes/)
- [Tutoriel classes ES6 sur JavaScript.info](https://javascript.info/class)

---