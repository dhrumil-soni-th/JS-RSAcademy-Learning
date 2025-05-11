// Import the Person class from another file
const Person = require("./basics7");

// String operations
let day = "tuesday ";
console.log(day.length); // Logs the length of the string 'day' (8)

let subDay = day.slice(0, 4); // Extracts a substring from index 0 to 3
console.log(subDay); // Logs 'tues'

console.log(day[1]); // Logs the character at index 1 ('u')

// Splitting the string 'day' by the character 's'
let splitDay = day.split("s");
console.log(splitDay[1].length); // Logs the length of the second part after splitting
console.log(splitDay[1].trim().length); // Logs the trimmed length of the second part

// Parsing and calculating the difference between two string numbers
let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date); // Convert strings to integers and calculate the difference
console.log(diff); // Logs 4
diff.toString(); // Converts the difference back to a string

// Concatenating strings
let newQuote = day + "is Funday day"; // Concatenates 'day' with another string
console.log(newQuote); // Logs 'tuesday is Funday day'

// Finding the index of a substring
let val = newQuote.indexOf("day", 5); // Finds the index of 'day' starting from index 5
console.log(val); // Logs the index of the substring

// Counting occurrences of a substring
let count = 0;
let value = newQuote.indexOf("day"); // Find the first occurrence of 'day'
while (value !== -1) {
  count++; // Increment the count for each occurrence
  value = newQuote.indexOf("day", value + 1); // Find the next occurrence
  if (value === -1) break; // Exit the loop if no more occurrences are found
}
console.log(count); // Logs the total count of 'day' in the string

// Using the Person class
let person = new Person("Chris", "Edward"); // Create a new Person object
console.log(person.fullName()); // Logs the full name of the person
