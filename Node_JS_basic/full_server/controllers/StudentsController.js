import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];
    
    try {
      const fields = await readDatabase(databasePath);
      let result = 'This is the list of our students\n';
      
      const totalStudents = Object.values(fields).reduce((sum, students) => sum + students.length, 0);
      result += `Number of students: ${totalStudents}\n`;
      
      Object.keys(fields).sort().forEach(field => {
        const students = fields[field];
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });
      
      res.status(200).send(result.trim());
    } catch (error) {
      res.status(500).send('This is the list of our students\nCannot load the database');
    }
  }
  
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = process.argv[2];
    
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const fields = await readDatabase(databasePath);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
