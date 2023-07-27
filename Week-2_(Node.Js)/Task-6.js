const fs = require('fs');

// Function to compare two files
function compareFiles(file1Path, file2Path) {
  const file1Contents = fs.readFileSync(file1Path, 'utf-8').split('\n');
  const file2Contents = fs.readFileSync(file2Path, 'utf-8').split('\n');

  const file1Size = fs.statSync(file1Path).size;
  const file2Size = fs.statSync(file2Path).size;

  console.log('File 1 size:', file1Size, 'bytes');
  console.log('File 2 size:', file2Size, 'bytes');

  // Find the larger file
  if (file1Size > file2Size) {
    console.log('File 1 is larger than File 2');
  } else if (file1Size < file2Size) {
    console.log('File 2 is larger than File 1');
  } else {
    console.log('Both files have the same size');
  }

 
}

// Usage example
const file1Path = 'CSK.txt';
const file2Path = 'RCB.txt';

compareFiles(file1Path, file2Path);
