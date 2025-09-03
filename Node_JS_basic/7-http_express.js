// 7-http_express.js
const express = require('express');
const fs = require('fs');

const app = express();

// Fonction pour compter les étudiants (version adaptée pour Express)
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      try {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);
        
        let result = `Number of students: ${students.length}\n`;
        
        const fields = {};
        students.forEach(student => {
          const [firstname, lastname, age, field] = student.split(',');
          if (field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        });
        
        Object.keys(fields).forEach(field => {
          const list = fields[field];
          result += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        });
        
        resolve(result.trim());
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

// Route principale
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route des étudiants
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  
  try {
    const studentsInfo = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Démarrer le serveur
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
