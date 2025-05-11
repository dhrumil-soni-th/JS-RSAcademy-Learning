// 1. Summing Values
// Use reduce to calculate the total of numeric values in an array.
const numbers = [10, 20, 30, 40];
const totalSum = numbers.reduce((sum, num) => sum + num, 0);
console.log(totalSum); // Logs 100

// 2. Flattening Arrays
// Use reduce to flatten a nested array into a single array.
const nestedArray = [[1, 2], [3, 4], [5]];
const flatArray = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log(flatArray); // Logs [1, 2, 3, 4, 5]

// 3. Counting Occurrences
// Use reduce to count the frequency of elements in an array.
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // Logs { apple: 3, banana: 2, orange: 1 }

// 4. Transforming Data
// Use reduce to transform an array into an object.
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userMap = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});
console.log(userMap); // Logs { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }

// 5. Finding Maximum Value
// Use reduce to find the largest number in an array.
const values = [10, 20, 5, 40, 15];
const maxValue = values.reduce(
  (max, num) => (num > max ? num : max),
  -Infinity 
);
console.log(maxValue); // Logs 40

// 6. Chaining Operations
// Combine filtering, mapping, and reducing in a single chain.
const scores = [12, 13, 14, 16];
const result = scores
  .filter((score) => score % 2 === 0) // Filter even numbers
  .map((score) => score * 3) // Multiply each by 3
  .reduce((sum, val) => sum + val, 0); // Sum the results
console.log(result); // Logs 126

// 7. Custom Aggregations
// Use reduce to calculate a balance from transactions.
const transactions = [
  { type: "income", amount: 100 },
  { type: "expense", amount: 50 },
  { type: "income", amount: 200 },
];
const balance = transactions.reduce((acc, transaction) => {
  return transaction.type === "income"
    ? acc + transaction.amount
    : acc - transaction.amount;
}, 0);
console.log(balance); // Logs 250

// 8. Shopping Cart Total
// Use reduce to calculate the total price of items in a shopping cart.
const cart = [
  { item: "Laptop", price: 800 },
  { item: "Phone", price: 500 },
  { item: "Headphones", price: 100 },
  { item: "Mouse", price: 50 },
];
const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log(totalPrice); // Logs 1450
