const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const employees = [];


const promptEmployeeData = () => {
  rl.question('Enter employee name (or press Enter to finish): ', name => {
    if (name === '') {
      
      EmployeeDataToFile();
      rl.close();
    } else {
      
      rl.question('Enter employee ID: ', id => {
        
        rl.question('Enter employee department: ', department => {
          
          const employee = {
            name: name,
            id: id,
            department: department
          };
          employees.push(employee);

          
          promptEmployeeData();
        });
      });
    }
  });
};


const EmployeeDataToFile = () => {
  const jsonData = JSON.stringify(employees, null, 2);

  fs.writeFile('employee-data.json', jsonData, 'utf8', err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Employee data written to employee-data.json');
    }
  });
};


promptEmployeeData();
