import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];

    try {
      const studentsByField = await readDatabase(databasePath);
      let result = 'This is the list of our students\n';

      // Calculer le nombre total d'étudiants
      const totalStudents = Object.values(studentsByField).reduce(
        (sum, students) => sum + students.length,
        0
      );
      result += `Number of students: ${totalStudents}\n`;

      // Trier les champs par ordre alphabétique (insensible à la casse)
      const sortedFields = Object.keys(studentsByField).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      sortedFields.forEach((field) => {
        const students = studentsByField[field];
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      response.status(200).send(result.trim());
    } catch (error) {
      response.status(500).send('This is the list of our students\nCannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(databasePath);
      const students = studentsByField[major] || [];
      response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
