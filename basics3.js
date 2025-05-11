// Declare an array with a fixed size (not commonly used in JavaScript)
var marks = Array(6);

// Declare an array using the Array constructor with initial values
var marks = new Array(20, 40, 35, 12, 37, 100);

// Declare an array using array literal syntax
var marks = [20, 40, 35, 12, 37, 100];

// Extract a portion of the array from index 2 to 4 (slice does not include the end index)
subMarks = marks.slice(2, 5);
console.log(subMarks); // Logs [35, 12, 37]

// Access the element at index 2
console.log(marks[2]); // Logs 35

// Update the value at index 3
marks[3] = 14;
console.log(marks); // Logs [20, 40, 35, 14, 37, 100]

// Log the length of the array
console.log(marks.length); // Logs 6

// Add a new element to the end of the array
marks.push(65);
console.log(marks); // Logs [20, 40, 35, 14, 37, 100, 65]

// Remove the last element from the array
marks.pop(); // Removes 65
console.log(marks); // Logs [20, 40, 35, 14, 37, 100]

// Add a new element to the beginning of the array
marks.unshift(12);
console.log(marks); // Logs [12, 20, 40, 35, 14, 37, 100]

// Find the index of the first occurrence of 100
console.log(marks.indexOf(100)); // Logs 6

// Check if 120 is in the array
console.log(marks.includes(120)); // Logs false

// Calculate the sum of all elements in the array using a for loop
var sum = 0;
for (let i = 0; i < marks.length; i++) {
  //console.log(marks[i])
  sum = sum + marks[i]; //32+40
}
console.log(sum); // Logs the sum of the array elements

// Calculate the sum of all elements in the array using reduce
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total); // Logs the sum of the array elements
/*
Example:
If marks = [20, 40, 35, 14, 37, 100], the reduce method works as follows:

Initial value of sum: 0
Iteration 1: sum = 0 + 20 → 20
Iteration 2: sum = 20 + 40 → 60
Iteration 3: sum = 60 + 35 → 95
Iteration 4: sum = 95 + 14 → 109
Iteration 5: sum = 109 + 37 → 146
Iteration 6: sum = 146 + 100 → 246
*/
// ==============================
var scores = [12, 13, 14, 16];

// Create a new array with even numbers from scores
var evenScores = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores); // Logs the even numbers from scores [12, 14, 16]

// Filter even numbers using the filter method
let newFilterEvenScores = scores.filter((score) => score % 2 == 0);
console.log(newFilterEvenScores); // Logs [12, 14, 16]

// ===========================

// Map the filtered even numbers to a new array with each value multiplied by 3
let mappedArray = newFilterEvenScores.map((score) => score * 3);
console.log(mappedArray); // Logs the mapped array

// Calculate the total value of the mapped array
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(totalVal); // Logs the total value

var scores1 = [12, 13, 14, 16];

// Calculate the sum of values in scores1 that are even, multiply by 3, and reduce to a single value
let sumValue = scores1
  .filter((score) => score % 2 == 0)
  .map((score) => score * 3)
  .reduce((sum, val) => sum + val, 0);
console.log(sumValue); // Logs the calculated sumValue

let fruits = ["banana", "mango", "pomegrante", "apple"];

// Sort the fruits array alphabetically
console.log(fruits.sort()); // Logs the sorted array

// Reverse the order of the fruits array
console.log(fruits.reverse()); // Logs the reversed array

var scores1 = [12, 0o3, 19, 16, 14]; //9

// Sort scores1 in descending order
console.log(scores1.sort((a, b) => b - a)); // Logs the sorted array in descending order
