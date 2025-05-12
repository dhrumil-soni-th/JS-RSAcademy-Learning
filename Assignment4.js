// Create an array of objects representing students with their names and scores.
// get the below results with optimized solutions.

const students = [
  { name: "John", score: 85 },
  { name: "Jane", score: 92 },
  { name: "Jim", score: 78 },
  { name: "Jack", score: 90 },
];

// Filter the students who passed the exam with score >=80
// Filter will create a new array with the students who passed
const passedStudents = students.filter((student) => student.score >= 80);
console.log(passedStudents);

// Update the passed students name to uppercase
// Map will create a new array with the updated names
// What if you want new array with updated names along with the scores?
// const updatedStudents = passedStudents.map((student) => ({
//   name: student.name.toUpperCase(),
//   score: student.score,
// }));
const updatedPassedStudents = passedStudents.map((student) =>
  student.name.toUpperCase()
);
console.log(updatedPassedStudents);

// Total score of all passed students.
const totalScoreOfPassedStudents = passedStudents.reduce(
  (total, student) => total + student.score,
  0
);

console.log(totalScoreOfPassedStudents); // Logs the total score of passed students
