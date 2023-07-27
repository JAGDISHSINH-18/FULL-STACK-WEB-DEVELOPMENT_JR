const fs = require('fs');

fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const students = data.split('\n');

  const filteredStudents = students.filter(student => {
    const [name, cgpa] = student.split(',');
    return name.includes('Ma') && parseFloat(cgpa) > 7;
  });

  console.log('Filtered Students:');
  filteredStudents.forEach(student => console.log(student));
});
