import readline from 'readline';
import path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a file path: ', (filePath) => {
  // Get the directory name and base name using the path module
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);

  console.log('Directory Name:', directoryName);
  console.log('Base Name:', baseName);

  rl.close();
});