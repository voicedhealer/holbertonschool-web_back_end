// 6-http_express.js
const express = require('express');

// Créer l'application Express
const app = express();

// Définir la route principale
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Démarrer le serveur sur le port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Exporter l'app pour les tests
module.exports = app;
