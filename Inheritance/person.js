class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

export default Person;
