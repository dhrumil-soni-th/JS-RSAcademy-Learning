import Person from "./person.js";
// Define the child class Student that extends the Person class
class Student extends Person {
  constructor(name, age, studentId) {
    // Call the parent class constructor using super
    super(name, age);
    this.studentId = studentId;
  }

  // Method to get student details
  getStudentInfo() {
    // Here we need to use this or super keyword to call the parent class method
    // this.getDetails() will call the parent class method
    // super.getDetails() will also call the parent class method
    // But we need to use this keyword to access the child class property
    const studentDetails = this.getDetails(); // Call the parent class method
    return `Student ID: ${this.studentId}, ${studentDetails}`;
  }
}

// export the Student class
export default Student;
