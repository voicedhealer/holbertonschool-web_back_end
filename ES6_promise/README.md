# ES6_promise

Ce dossier présente la gestion des opérations asynchrones en JavaScript moderne grâce aux promesses (Promises), introduites avec ES6.

---

## Qu'est-ce qu'une Promise ?

Une **promise** est un objet qui représente le résultat à venir d’une opération asynchrone (appel réseau, lecture de fichier, calcul différé...).
La promise facilite la gestion des succès et des erreurs du code asynchrone, remplaçant les callbacks imbriqués[web:21][web:27].

---

## Structure de base

```
const promesse = new Promise((resolve, reject) => {
  // ... tâche asynchrone ...
  if (tout_va_bien) {
    resolve(valeur);
  } else {
    reject(erreur);
  }
});
```
- **resolve** : à appeler si la tâche réussit
- **reject** : à appeler en cas d’erreur[web:22][web:25]

---

## Consommer une Promise

```
promesse
  .then(valeur => {
    // succès : utiliser la valeur
  })
  .catch(erreur => {
    // échec : gérer l'erreur
  });
```
**then** gère le succès, **catch** gère l’erreur.

---

## Fonctions utilitaires

- **Promise.all([prom1, prom2, ...])** : attend que toutes les promesses soient résolues (ou échoue au moindre rejet).
- **Promise.race([prom1, prom2, ...])** : donne le résultat de la première promise terminée[web:26].

---

## Syntaxe moderne : async / await

Permet une écriture plus lisible des opérations asynchrones :

```
async function traitement() {
  try {
    const resultat = await promesse;
    // résultat utilisé ici
  } catch (erreur) {
    // gestion des erreurs ici
  }
}
```

---

## Aller plus loin

- Les promesses sont au cœur de l’écosystème JavaScript moderne : requêtes HTTP (`fetch`), timers, interactions utilisateur complexes, etc.
- Elles facilitent la composition et la gestion d’enchaînements asynchrones, rendant le code plus lisible et maintenable[web:21][web:27].

---

## Ressources utiles

- [MDN - Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [David Gayerie - Les promesses JS](https://gayerie.dev/docs/js/javascript/promesse.html)
- [Nouvelle Techno - Live Coding ES6 Promise](https://nouvelle-techno.fr/articles/live-coding-les-promesses-async-et-await)

---