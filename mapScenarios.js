// 1. Doubling Numbers
// Use map to create a new array with each number doubled.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Logs [2, 4, 6, 8, 10]

// 2. Converting Temperatures
// Use map to convert an array of temperatures from Celsius to Fahrenheit.
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map((temp) => (temp * 9) / 5 + 32);
console.log(fahrenheit); // Logs [32, 50, 68, 86]

// 3. Extracting Object Properties
// Use map to extract a specific property from an array of objects.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userNames = users.map((user) => user.name);
console.log(userNames); // Logs ["Alice", "Bob", "Charlie"]

// 4. Adding a New Property to Objects
// Use map to add a new property to each object in an array.
const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
];
const productsWithTax = products.map((product) => ({
  ...product,
  priceWithTax: product.price * 1.1,
}));
console.log(productsWithTax);
// Logs [
//   { name: "Laptop", price: 800, priceWithTax: 880 },
//   { name: "Phone", price: 500, priceWithTax: 550 }
// ]

// 5. Formatting Strings
// Use map to format an array of strings.
const names = ["alice", "bob", "charlie"];
const capitalizedNames = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalizedNames); // Logs ["Alice", "Bob", "Charlie"]

// 6. Calculating Squares
// Use map to calculate the square of each number in an array.
const values = [2, 3, 4, 5];
const squares = values.map((value) => value ** 2);
console.log(squares); // Logs [4, 9, 16, 25]

// 7. Mapping Indexes
// Use map to create an array of objects with values and their indexes.
const items = ["apple", "banana", "cherry"];
const indexedItems = items.map((item, index) => ({ index, item }));
console.log(indexedItems);
// Logs [
//   { index: 0, item: "apple" },
//   { index: 1, item: "banana" },
//   { index: 2, item: "cherry" }
// ]

// 8. Converting Booleans to Strings
// Use map to convert an array of booleans to strings.
const booleans = [true, false, true];
const booleanStrings = booleans.map((bool) => (bool ? "Yes" : "No"));
console.log(booleanStrings); // Logs ["Yes", "No", "Yes"]

// 9. Incrementing Numbers
// Use map to increment each number in an array by 1.
const nums = [5, 10, 15];
const incrementedNums = nums.map((num) => num + 1);
console.log(incrementedNums); // Logs [6, 11, 16]

// 10. Mapping Nested Arrays
// Use map to double the values in a nested array.
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const doubledNestedArray = nestedArray.map((innerArray) =>
  innerArray.map((num) => num * 2)
);
console.log(doubledNestedArray); // Logs [[2, 4], [6, 8], [10, 12]]
