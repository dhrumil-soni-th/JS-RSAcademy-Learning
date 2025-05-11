// Block of code demonstrating variable scopes and functions

// 'var' - global/functional scope
// 'let' - block-level scope
// 'const' - block-level scope, immutable

const greet = "Evening"; // Declare a constant variable
// greet = "night"; // Uncommenting this will throw an error as 'const' variables cannot be reassigned

if (1 == 1) {
  let greet = "Afternoon"; // Block-scoped variable, does not affect the outer 'greet'
}

// Function to add two numbers
function add(a, b) {
  let greet = "Morning"; // Block-scoped variable inside the function
  return a + b; // Return the sum of 'a' and 'b'
}

let sum = add(2, 3); // Call the 'add' function
console.log(sum); // Logs 5
console.log(greet); // Logs "Evening" (outer 'greet' is unaffected)

// Anonymous function (Function expression) to add two numbers
let sumOfIntegers = function (c, d) {
  return c + d; // Return the sum of 'c' and 'd'
};

// Arrow function to add two numbers
let sumOfNumbers = (c, d) => c + d;

console.log(sumOfNumbers(2, 3)); // Logs 5
