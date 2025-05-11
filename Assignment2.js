/*
Manipulate an array of strings (add, remove, sort)
    Create an array named studentNames with the names of your students.
    Add a new student name to the beginning of the array.
    Remove the last student name from the array.
    Alphabetize the student names within the array.
*/

const studentNames = ["Alice", "Bob", "Charlie", "David"];
studentNames.unshift("Eve"); // Add "Eve" to the beginning
studentNames.pop(); // Remove the last student name
studentNames.sort(); // Alphabetize the names
console.log(studentNames); // Logs ["Alice", "Bob", "Charlie", "Eve"]
