# Node_JS_basic

## Description

Ce projet couvre les **concepts fondamentaux de Node.js** et **Express.js**, depuis l'exécution basique de JavaScript jusqu'à la création de serveurs HTTP complexes avec une architecture modulaire. Il fait partie du cursus **Holberton School** pour apprendre le développement backend.

## Objectifs d'apprentissage

À la fin de ce projet, tu seras capable d'expliquer sans aide :

- **Exécuter du JavaScript** avec Node.js
- **Utiliser les modules Node.js** (intégrés, locaux et externes)
- **Lire des fichiers** avec le module `fs` spécifique de Node.js  
- **Accéder aux arguments** de ligne de commande et variables d'environnement avec `process`
- **Créer un serveur HTTP** avec le module `http` de Node.js
- **Créer un serveur HTTP** avec Express.js
- **Créer des routes avancées** avec Express.js
- **Utiliser ES6 avec Node.js** grâce à Babel-node
- **Développer plus rapidement** avec Nodemon

## Structure du projet

```
Node_JS_basic/
├── database.csv                           # Base de données des étudiants
├── package.json                           # Configuration npm
├── .babelrc                              # Configuration Babel
├── 0-console.js                          # Task 0: Fonction displayMessage
├── 1-stdin.js                            # Task 1: Interaction stdin
├── 2-read_file.js                        # Task 2: Lecture synchrone
├── 3-read_file_async.js                  # Task 3: Lecture asynchrone  
├── 4-http.js                             # Task 4: Serveur HTTP basique
├── 5-http.js                             # Task 5: Serveur HTTP avec routes
├── 6-http_express.js                     # Task 6: Serveur Express basique
├── 7-http_express.js                     # Task 7: Serveur Express avec routes
└── full_server/                          # Task 8: Architecture modulaire
    ├── utils.js                          #   Utilitaires de lecture
    ├── controllers/
    │   ├── AppController.js              #   Contrôleur principal
    │   └── StudentsController.js         #   Contrôleur étudiants
    ├── routes/
    │   └── index.js                      #   Définition des routes
    └── server.js                         #   Serveur principal
```

## Installation

### Prérequis
- **Node.js** (version 12.x.x ou plus récente)
- **npm** (gestionnaire de paquets Node)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone 
   cd Node_JS_basic
   ```

2. **Initialiser npm et installer les dépendances**
   ```bash
   npm install
   ```

3. **Installer les dépendances de développement pour ES6**
   ```bash
   npm install --save-dev @babel/core @babel/node @babel/preset-env nodemon
   npm install express
   ```

## Configuration

### Fichier `.babelrc`
```json
{
  "presets": ["@babel/preset-env"]
}
```

### Scripts dans `package.json`
```json
{
  "scripts": {
    "dev": "nodemon --exec babel-node full_server/server.js ./database.csv"
  }
}
```

## Exercices

### Task 0: Executing basic JavaScript with Node JS
**Fichier:** `0-console.js`
```bash
node 0-main.js
```
Créer une fonction `displayMessage` qui affiche un message sur STDOUT.

### Task 1: Using Process stdin  
**Fichier:** `1-stdin.js`
```bash
node 1-stdin.js
echo "Bob" | node 1-stdin.js
```
Créer un programme interactif qui demande le nom de l'utilisateur.

### Task 2: Reading a file synchronously with Node JS
**Fichier:** `2-read_file.js`
```bash
node 2-main_1.js
```
Créer une fonction `countStudents` qui lit un fichier CSV de façon synchrone.

### Task 3: Reading a file asynchronously with Node JS
**Fichier:** `3-read_file_async.js`
```bash
node 3-main_1.js
```
Version asynchrone de `countStudents` qui retourne une Promise.

### Task 4: Create a small HTTP server using Node's HTTP module
**Fichier:** `4-http.js`
```bash
node 4-http.js
curl localhost:1245
```
Serveur HTTP basique qui répond "Hello Holberton School!" sur toutes les routes.

### Task 5: Create a more complex HTTP server using Node's HTTP module
**Fichier:** `5-http.js`
```bash
node 5-http.js database.csv
curl localhost:1245/students
```
Serveur HTTP avec routing manuel et affichage des étudiants.

### Task 6: Create a small HTTP server using Express JS
**Fichier:** `6-http_express.js`
```bash
node 6-http_express.js
curl localhost:1245
```
Premier serveur Express.js basique.

### Task 7: Create a more complex HTTP server using Express
**Fichier:** `7-http_express.js`
```bash
node 7-http_express.js database.csv
curl localhost:1245/students
```
Serveur Express avec routes et gestion des étudiants.

### Task 8: Organize a complex HTTP server using Express
**Fichier:** `full_server/server.js`
```bash
npm run dev
curl localhost:1245/students/CS
```
Architecture complète avec contrôleurs, routes et utilitaires séparés.

## Utilisation

### Développement avec Nodemon et Babel
```bash
# Lancer le serveur complet avec rechargement automatique
npm run dev

# Lancer un exercice spécifique
node 4-http.js
node 7-http_express.js database.csv
```

### Tests des routes
```bash
# Route principale
curl localhost:1245

# Liste des étudiants
curl localhost:1245/students

# Étudiants par spécialité
curl localhost:1245/students/CS
curl localhost:1245/students/SWE
```

## Technologies utilisées

- **Node.js** - Runtime JavaScript côté serveur
- **Express.js** - Framework web pour Node.js
- **Babel** - Transpileur JavaScript pour utiliser ES6+
- **Nodemon** - Rechargement automatique du serveur
- **fs** - Module système de fichiers de Node.js
- **http** - Module HTTP natif de Node.js

## Concepts clés abordés

### Programmation asynchrone
- **Callbacks** et gestion d'erreurs
- **Promises** avec `async/await`
- **Event Loop** et I/O non-bloquant

### Serveurs HTTP
- Module `http` natif vs Express.js
- **Routing** et gestion des URL
- **Status codes** HTTP et headers
- **Middlewares** Express

### Architecture moderne
- **ES6 Modules** (`import/export`)
- **Séparation des responsabilités** (MVC)
- **Babel** pour la compatibilité ES6+
- **Nodemon** pour le développement

## Format des données

### Fichier `database.csv`
```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

## Auteur

**Vivien Bernardot** - Spécialisation Backend Web Development

***

Ce projet constitue une **introduction complète à Node.js** et pose les bases pour le développement d'applications web modernes. Il couvre l'évolution du JavaScript côté serveur, depuis les scripts basiques jusqu'aux architectures d'applications professionnelles.