// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  // Définir les headers pour toutes les réponses
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  
  // Router selon l'URL
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    
    try {
      // Capturer les logs de countStudents dans un string
      const originalConsoleLog = console.log;
      let output = '';
      
      console.log = (message) => {
        output += message + '\n';
      };
      
      // Appeler countStudents avec le fichier de base de données
      const databasePath = process.argv[2];
      await countStudents(databasePath);
      
      // Restaurer console.log
      console.log = originalConsoleLog;
      
      // Envoyer les résultats
      res.end(output);
      
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
