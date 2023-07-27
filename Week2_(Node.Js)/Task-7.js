const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const renameAsync = promisify(fs.rename);

// Function to create a backup of a file
async function createBackup(filePath) {
  try {
    const fileData = await readFileAsync(filePath);
    const backupPath = `${filePath}.bak`;
    await writeFileAsync(backupPath, fileData);
    console.log(`Backup created successfully: ${backupPath}`);
  } catch (error) {
    console.error('Error creating backup:', error);
  }
}

// Function to restore a file from backup
async function restoreFromBackup(backupPath, restoredFilePath) {
  try {
    const backupData = await readFileAsync(backupPath);
    await writeFileAsync(restoredFilePath, backupData);
    console.log(`File restored successfully: ${restoredFilePath}`);
  } catch (error) {
    console.error('Error restoring file:', error);
  }
}

// Usage example
const filePath = 'File.txt';
const backupPath = `${filePath}.bak`;
const restoredFilePath = 'Restoredfile.txt';

// Create a backup of the file
createBackup(filePath);

// Restore the file from the backup
restoreFromBackup(backupPath, restoredFilePath);
