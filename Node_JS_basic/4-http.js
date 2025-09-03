const http = require('http');

// Créer le serveur HTTP
const app = http.createServer((req, res) => {
  // Définir les headers de réponse
  res.writeHead(200, { 
    'Content-Type': 'text/plain' 
  });
  
  // Envoyer la réponse
  res.end('Hello Holberton School!');
});

// Écouter sur le port 1245 avec callback
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Exporter l'app
module.exports = app;
