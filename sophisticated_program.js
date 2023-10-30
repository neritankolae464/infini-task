/*
   Filename: sophisticated_program.js
   Description: This code is a sophisticated program that demonstrates advanced JavaScript concepts and techniques.
*/

// Define a class for representing a Person
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   introduce() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
   }

   static sayHello() {
      console.log("Hello!");
   }
}

// Define a class for representing a Student, inheriting from Person
class Student extends Person {
   constructor(name, age, major) {
      super(name, age);
      this.major = major;
   }

   introduce() {
      console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and my major is ${this.major}.`);
   }

   static sayHello() {
      console.log("Hello from the student!");
   }
}

// Create instances of Person and Student
const person1 = new Person("John Doe", 25);
const student1 = new Student("Alice Smith", 20, "Computer Science");

// Use the instances to demonstrate the features
person1.introduce();  // Output: Hi, my name is John Doe and I'm 25 years old.
Person.sayHello();    // Output: Hello!
student1.introduce(); // Output: Hi, my name is Alice Smith, I'm 20 years old, and my major is Computer Science.
Student.sayHello();   // Output: Hello from the student!

// Define a function for finding the factorial of a number recursively
function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   } else {
      return n * factorial(n - 1);
   }
}

console.log(factorial(5)); // Output: 120

// Define an array of numbers and use higher-order functions for processing
const numbers = [1, 2, 3, 4, 5];

const newArray = numbers
   .map(num => num * 2)
   .filter(num => num > 5)
   .reduce((sum, num) => sum + num, 0);

console.log(newArray); // Output: 24

// Define a class for representing a Circle and calculate its area
class Circle {
   constructor(radius) {
      this.radius = radius;
   }

   get area() {
      return Math.PI * this.radius * this.radius;
   }
}

const circle = new Circle(5);
console.log(circle.area); // Output: 78.53981633974483

// ... (more advanced and complex code...)

// The code continues beyond this point...