// Inheritance is a key concept in Object-Oriented Programming (OOP)
// One class can inherit/acquire the properties and methods of another class
// The class which inherits is called the subclass (derived class, child class)
// The class whose properties are inherited is called the superclass (parent class)

const Person = require("./basics7"); // Import the Person class

// Define a subclass 'Pet' that extends the 'Person' class
class Pet extends Person {
  // Override the 'location' getter from the parent class
  get location() {
    return "BlueCross"; // Return a custom location for the subclass
  }

  // Constructor for the 'Pet' class
  constructor(firstName, lastName) {
    // Call the parent class constructor using 'super'
    super(firstName, lastName);
  }
}

// Create an instance of the 'Pet' class
let pet = new Pet("sam", "san");

// Call the 'fullName' method inherited from the parent class
pet.fullName(); // Logs 'samsan' (concatenation of firstName and lastName)

// Access the overridden 'location' property
console.log(pet.location); // Logs 'BlueCross'
