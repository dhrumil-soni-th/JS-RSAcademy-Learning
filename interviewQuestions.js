// 1. Can a Javascript object hold a function as a property? Explain with an example.
// Yes, a JavaScript object can hold a function as a property. This is often referred to as a method.
// For example:
// In this example, the `greet` function is a method of the `person` object. It can be called using `person.greet()`.
const person = {
  name: "Dhrumil",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
console.log(person.name); // Logs "Dhrumil"
person.greet(); // Logs "Hello, my name is Dhrumil"

// 2. What are the annonymous functions in JavaScript? Explain with an example.
// The functions that do not have a name are called anonymous functions.

function sayHello() {
  return "Hello, World!";
}
const sayHelloMessage = sayHello();
console.log(sayHelloMessage); // Logs "Hello, World!"

const greet = function (name) {
  return "Hello, " + name;
};
console.log(greet("Dhrumil")); // Logs "Hello, Dhrumil"

// 3. Whats the difference between let, var and const? Explain with an example.
// `var` is function-scoped or globally scoped, `let` and `const` are block-scoped.
// `var` can be re-declared and updated, while `let` can be updated but not re-declared in the same scope.
// `const` cannot be updated or re-declared.
// Example:
var x = 10;
if (true) {
  var x = 20; // Same variable, function-scoped
  console.log(x); // Logs 20
}
console.log(x); // Logs 20 (var is function-scoped)

let y = 10;
if (true) {
  let y = 20; // Different variable, block-scoped
  console.log(y); // Logs 20
}
console.log(y); // Logs 10 (let is block-scoped)

const z = 10;
if (true) {
  const z = 20; // Different variable, block-scoped
  console.log(z); // Logs 20
}
console.log(z); // Logs 10 (const is block-scoped)

// 4. Where are the push, pop, shift and unshift methods used? Explain with an example.
// These methods are used with arrays in JavaScript.
// - `push`: Adds one or more elements to the end of an array.
// - `pop`: Removes the last element from an array.
// - `shift`: Removes the first element from an array.
// - `unshift`: Adds one or more elements to the beginning of an array.
// Example:
let arr = [1, 2, 3];
arr.push(4); // Adds 4 to the end
console.log(arr); // Logs [1, 2, 3, 4]
arr.pop(); // Removes the last element (4)
console.log(arr); // Logs [1, 2, 3]
arr.shift(); // Removes the first element (1)
console.log(arr); // Logs [2, 3]
arr.unshift(0); // Adds 0 to the beginning
console.log(arr); // Logs [0, 2, 3]

// Remove element by index
const arr1 = [1, 2, 3, 4, 5];
const indexToRemove = 2; // Index of the element to remove
arr1.splice(indexToRemove, 1); // Removes 1 element at index 2
console.log(arr1); // Logs [1, 2, 4, 5]

// Add element at index
const indexToAdd = 2; // Index to add the new element
const newElement = 3;
arr1.splice(indexToAdd, 0, newElement); // Adds 3 at index 2
console.log(arr1); // Logs [1, 2, 3, 4, 5]

// Iterate over an array
const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

// 5. Is Javascript is asynchronous language? Explain with an example.
// Yes, JavaScript is an asynchronous language. It uses an event-driven, non-blocking I/O model.
// This means that operations like network requests, file reading, etc., can be performed asynchronously.
// Example:
setTimeout(() => {
  console.log("This is an asynchronous message");
}, 2000); // Logs the message after 2 seconds
console.log("This is a synchronous message"); // Logs immediately

// 6. What are the callback functions in JavaScript? Explain with an example.
// Callback functions are functions that are passed as arguments to other functions.
// They are called after the completion of a certain task.
// callback functions are often used in asynchronous programming.
// Example:
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    const data = "Sample Data";
    callback(data); // Calls the callback function with the fetched data
  }, 2000);
}

function processData(data) {
  console.log("Processing data: " + data);
}

function modifyData(data) {
  console.log("Modifying data: " + data);
}

fetchData(processData);
fetchData(modifyData);

// 7 What are the promises in JavaScript? Explain the difference between promises and callback function with example.

// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.
// They provide a cleaner way to handle asynchronous operations compared to callbacks.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// Example:

function fetchData(){
  // fetch data from the server - resolve, pending, or reject
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Sample Data";
      resolve(data); // Resolves the promise with the fetched data
    }, 2000);
  });
}

fetchData().then(function (data) {
  console.log("Processing data: " + data);
});

// OR you can use async/await
async function fetchDataAsync() {
  const data = await fetchData();
  console.log("Processing data: " + data);
}

// await keyword is used to handle asynchronous operations in a synchronous manner.

//8.  What is the difference between "== " and "===" in JavaScript? Explain with an example.
// The `==` operator is the equality operator that performs type coercion, meaning it converts the operands to the same type before comparing them.
// The `===` operator is the strict equality operator that does not perform type coercion, meaning it checks both the value and the type.
// Example:
console.log(5 == "5"); // Logs true (type coercion)
console.log(5 === "5"); // Logs false (different types)
console.log(5 === 5); // Logs true (same type and value)
console.log(0 == false); // Logs true (type coercion)
console.log(0 === false); // Logs false (different types)
// console.log(1 == true); // Logs true (type coercion)
// console.log(1 === true); // Logs false (different types)
// console.log(1 == "1"); // Logs true (type coercion)
// console.log(1 === "1"); // Logs false (different types)
// console.log(1 == null); // Logs false (null is not equal to 1)
// console.log(1 === null); // Logs false (null is not equal to 1)
// console.log(1 == undefined); // Logs false (undefined is not equal to 1)
// console.log(1 === undefined); // Logs false (undefined is not equal to 1)
// console.log(1 == NaN); // Logs false (NaN is not equal to 1)
// console.log(1 === NaN); // Logs false (NaN is not equal to 1)
// console.log(1 == "0"); // Logs false (type coercion)
// console.log(1 === "0"); // Logs false (different types)
// console.log(1 == ""); // Logs false (type coercion)
// console.log(1 === ""); // Logs false (different types)
// console.log(1 == " "); // Logs false (type coercion)
// console.log(1 === " "); // Logs false (different types)

// 9. What is the difference between "null" and "undefined" in JavaScript? Explain with an example.
// `null` is an assignment value that represents no value or no object.
// `undefined` is a type that indicates a variable has been declared but has not yet been assigned a value.
// Example:
let a;
console.log(a); // Logs undefined (variable declared but not assigned)
a = null;
console.log(a); // Logs null (variable explicitly assigned null)
console.log(typeof a); // Logs object (typeof null is an object, which is a known quirk in JavaScript)
console.log(typeof b); // Logs undefined (b is not declared)
// console.log(typeof null); // Logs object (typeof null is an object, which is a known quirk in JavaScript)
// console.log(typeof undefined); // Logs undefined (undefined is a type that indicates a variable has been declared but has not yet been assigned a value)
// console.log(typeof 0); // Logs number (0 is a number)
// console.log(typeof ""); // Logs string ("" is an empty string)
// console.log(typeof false); // Logs boolean (false is a boolean)
// console.log(typeof NaN); // Logs number (NaN is a number)
// console.log(typeof true); // Logs boolean (true is a boolean)
// console.log(typeof Symbol()); // Logs symbol (Symbol is a unique and immutable primitive value)