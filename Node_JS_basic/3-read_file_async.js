// 3-read_file_async.js
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      try {
        // Diviser les lignes et enlever les lignes vides
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        // Enlever la première ligne (header)
        const students = lines.slice(1);
        
        console.log(`Number of students: ${students.length}`);
        
        // Grouper par domaine d'étude
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
        
        // Afficher les statistiques par domaine
        Object.keys(fields).forEach(field => {
          const list = fields[field];
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        });
        
        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
