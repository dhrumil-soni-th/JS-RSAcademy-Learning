// Object is a collection of properties
let person = {
  firstName: "Tim", // First name of the person
  lastName: "Joe", // Last name of the person
  age: 24, // Age of the person

  // Method to print the full name of the person
  fullName: function () {
    console.log(this.firstName + this.lastName); // Concatenate firstName and lastName
  },
};

// Call the fullName method and log the result
console.log(person.fullName()); // Logs 'TimJoe'

// Accessing properties of the object
console.log(person.lastName); // Logs 'Joe'
console.log(person["lastName"]); // Logs 'Joe' (alternative syntax)

// Updating the value of a property
person.firstName = "Tim Dane";
console.log(person.firstName); // Logs 'Tim Dane'

// Adding a new property to the object
person.gender = "male";
console.log(person); // Logs the updated object with the new 'gender' property

// Deleting a property from the object
delete person.gender;
console.log(person); // Logs the object after removing the 'gender' property

// Checking if a property exists in the object
console.log("gender" in person); // Logs false (since 'gender' was deleted)

// Print all the values of the JavaScript object
for (let key in person) {
  console.log(person[key]); // Logs the value of each property in the object
}
