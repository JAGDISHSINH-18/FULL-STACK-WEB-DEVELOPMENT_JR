import fs from 'fs';

function checkFileExists(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error: File does not exist or is not accessible.');
    } else {
      console.log('Success: File exists.');
    }
  });
}

// Example usage:
const filePath = 'CSK.txt';
checkFileExists(filePath);