// 1. Filtering Even Numbers
// Use filter to extract even numbers from an array.
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Logs [2, 4, 6]

// 2. Filtering Odd Numbers
// Use filter to extract odd numbers from an array.
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // Logs [1, 3, 5]

// 3. Filtering Strings by Length
// Use filter to extract strings with a length greater than 5.
const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); // Logs ["banana", "cherry"]

// 4. Filtering Objects by Property
// Use filter to extract objects with a specific property value.
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers); // Logs [{ id: 1, name: "Alice", active: true }, { id: 3, name: "Charlie", active: true }]

// 5. Filtering Numbers Greater Than a Threshold
// Use filter to extract numbers greater than 10.
const values = [5, 10, 15, 20];
const greaterThanTen = values.filter((value) => value > 10);
console.log(greaterThanTen); // Logs [15, 20]

// 6. Filtering Unique Values
// Use filter to extract unique values from an array.
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = duplicates.filter(
  (value, index, array) => array.indexOf(value) === index
);
console.log(uniqueValues); // Logs [1, 2, 3, 4, 5]

// 7. Filtering Based on Multiple Conditions
// Use filter to extract numbers that are even and greater than 10.
const mixedNumbers = [5, 10, 12, 15, 20, 25];
const evenAndGreaterThanTen = mixedNumbers.filter(
  (num) => num % 2 === 0 && num > 10
);
console.log(evenAndGreaterThanTen); // Logs [12, 20]

// 8. Filtering Strings Containing a Substring
// Use filter to extract strings containing the substring "app".
const fruits = ["apple", "banana", "grape", "pineapple"];
const containingApp = fruits.filter((fruit) => fruit.includes("app"));
console.log(containingApp); // Logs ["apple", "pineapple"]

// 9. Filtering Non-Null or Non-Undefined Values
// Use filter to remove null or undefined values from an array.
const mixedArray = [1, null, 2, undefined, 3, null];
const nonNullValues = mixedArray.filter((value) => value != null);
console.log(nonNullValues); // Logs [1, 2, 3]

// 10. Filtering Prime Numbers
// Use filter to extract prime numbers from an array.
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers); // Logs [2, 3, 5]
