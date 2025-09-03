// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    // Lire le fichier de façon synchrone
    const data = fs.readFileSync(path, 'utf8');
    
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
    
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
