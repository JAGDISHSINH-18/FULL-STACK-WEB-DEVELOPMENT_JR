import os from 'os';

// Get the current user's username
const username = os.userInfo().username;

// Get the current user's home directory
const homedir = os.homedir();

// Get the operating system platform
const platform = os.platform();

// Display the information
console.log('Username:', username);
console.log('Home Directory:', homedir);
console.log('Operating System Platform:', platform);
