import path from 'path';

function extractFileExtension(filePath) {
  // Get the file extension using the path module
  const extension = path.extname(filePath);

  // Remove the dot from the extension
  const formattedExtension = extension.slice(1);

  console.log('File Extension:', formattedExtension);
  return formattedExtension;
}

// Example usage:
const filePath = 'package-lock.json';
extractFileExtension(filePath);