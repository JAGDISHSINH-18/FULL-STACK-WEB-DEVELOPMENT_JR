import readline from 'readline';
import fs from 'fs';
import path  from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first file path: ', (filePath1) => {
  rl.question('Enter the second file path: ', (filePath2) => {
    // Get the absolute paths to handle relative paths
    const absolutePath1 = path.resolve(filePath1);
    const absolutePath2 = path.resolve(filePath2);

    // Check if the paths refer to the same file
    isSameFile(absolutePath1, absolutePath2);

    rl.close();
  });
});

function isSameFile(filePath1, filePath2) {
  fs.stat(filePath1, (err1, stat1) => {
    if (err1) {
      console.error(`Error reading file: ${filePath1}`);
      return;
    }

    fs.stat(filePath2, (err2, stat2) => {
      if (err2) {
        console.error(`Error reading file: ${filePath2}`);
        return;
      }

      // Compare the inodes of both files
      const isSame = stat1.ino === stat2.ino;

      if (isSame) {
        console.log('The paths refer to the same file.');
      } else {
        console.log('The paths do not refer to the same file.');
      }
    });
  });
}