// Exporting the Person class
module.exports = class Person {
  // Class property with a default value
  age = 25;

  // Getter for the 'location' property
  // This allows 'location' to be accessed as a property, but it returns a fixed value
  get location() {
    return "canada";
  }

  // Constructor method
  // This method is executed by default when an object of the class is created
  constructor(firstName, lastName) {
    this.firstName = firstName; // Assign the firstName parameter to the instance
    this.lastName = lastName; // Assign the lastName parameter to the instance
  }

  // Method to print the full name of the person
  fullName() {
    console.log(this.firstName + this.lastName); // Concatenate firstName and lastName
  }
};

// Uncomment the following code to test the Person class
// let person = new Person("Tim", "Joseph");
// let person1 = new Person("Chris", "Jones");
// console.log(person.age); // Logs 25
// console.log(person.location); // Logs 'canada'
// console.log(person.fullName()); // Logs 'TimJoseph'
// console.log(person1.fullName()); // Logs 'ChrisJones'
