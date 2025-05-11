/*
    Create an array called expenses that contains at least 5 different expense amounts.
    Calculate the total expenses by summing all the elements of the array.
    Find the highest and lowest individual expenses within the array.
*/

const expenses = [100, 200, 120, 50, 40];

let totalExpense = expenses.reduce((sum, expense) => sum + expense, 0);
console.log("Total Expenses: " + totalExpense); // Logs the total expenses

// 1st Way using reduce
let highestExpense = expenses.reduce(
  (max, expense) => (expense > max ? expense : max),
  -Infinity
);
console.log("Highest Expense: " + highestExpense); // Logs the highest expense

let lowestExpense = expenses.reduce(
  (min, expense) => (expense < min ? expense : min),
  Infinity
);
console.log("Lowest Expense: " + lowestExpense); // Logs the lowest expense

// ==============================
// 2nd way using traditional for loop
let maxExpense = expenses[0];
for (let i = 1; i < expenses.length; i++) {
  if (expenses[i] > maxExpense) {
    maxExpense = expenses[i];
  }
}
console.log("Max Expense: " + maxExpense); // Logs the maximum expense

let minExpense = expenses[0];
for (let i = 1; i < expenses.length; i++) {
  if (expenses[i] < minExpense) {
    minExpense = expenses[i];
  }
}
console.log("Min Expense: " + minExpense); // Logs the maximum expense

// ==============================
// 3rd way using Math.max and Math.min
let max = Math.max(...expenses);
console.log("Max Expense using Math.max: " + max); // Logs the maximum expense
let min = Math.min(...expenses);
console.log("Min Expense using Math.min: " + min); // Logs the minimum expense
