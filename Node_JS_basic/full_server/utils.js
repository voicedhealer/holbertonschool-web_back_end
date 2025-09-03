import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      try {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);
        
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
        
        resolve(fields);
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
};

export default readDatabase;
