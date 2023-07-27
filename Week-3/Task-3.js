// main.js

// Import the custom module
const calculateRectangleArea = require('./rectangle');

// Use the function from the custom module
const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);

console.log(`The area of the rectangle with length ${length} and width ${width} is: ${area}`);
