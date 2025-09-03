// 4-http.js
const http = require('http');

const app = http.createServer((req, res) => {
  // Définir les headers de la réponse
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  
  // Envoyer le message de réponse
  res.end('Hello Holberton School!');
});

// Écouter sur le port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Exporter le serveur pour les tests
module.exports = app;
