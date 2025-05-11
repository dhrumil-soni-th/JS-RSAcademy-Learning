// Initialize a boolean flag variable
const flag = true;

// Check if the flag is false
if (!flag) {
  console.log("condition satisfied"); // Log if the condition is satisfied
} else {
  console.log(flag); // Log the value of the flag
  console.log("condition not satisfied"); // Log if the condition is not satisfied
}

// Initialize a counter variable
let i = 0;

// While loop that runs while i is greater than 10 (this will not execute as i starts at 0)
while (i > 10) {
  i++; // Increment i
  console.log(i); // Log the value of i
}

// Do-while loop that increments i and runs at least once
do {
  i++; // Increment i
} while (i > 10); // Condition to continue the loop
console.log(i); // Log the final value of i

// Find common multiples of 2 and 5 from 1 to 100
console.log("***********************");
let n = 0; // Counter for the number of common multiples found
for (let k = 1; k <= 100; k++) {
  if (k % 2 == 0 && k % 5 == 0) {
    // Check if k is a multiple of both 2 and 5
    n++; // Increment the counter
    console.log(k); // Log the common multiple
    if (n == 3)
      // Break the loop after finding 3 common multiples
      break;
  }
}

// Demonstrate a while loop that runs once and then stops
let required = true;
while (required) {
  console.log(required); // Log the value of required
  required = false; // Set required to false to exit the loop
}
