/*
Filename: ComplexCode.js
Description: This code is a complex JavaScript program that simulates a virtual world with multiple objects. It uses various advanced programming techniques and design patterns.
*/

// Global variables
let objects = [];
let time = 0;

// Object constructor
function Object(name, x, y, speed) {
  this.name = name;
  this.x = x;
  this.y = y;
  this.speed = speed;
}

// Create objects
objects.push(new Object("Object1", 0, 0, 1));
objects.push(new Object("Object2", 0, 10, 2));
objects.push(new Object("Object3", 5, 7, 0.5));

// Update function
function update() {
  // Update time
  time += 1;

  // Update objects
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i];

    // Move objects
    object.x += object.speed;
    object.y += object.speed;

    // Check boundaries
    if (object.x < 0 || object.x > 100 || object.y < 0 || object.y > 100) {
      console.log(object.name + " out of bounds!");

      // Reverse direction
      object.speed *= -1;
    }

    // Log object position
    console.log("Time: " + time + " - Object: " + object.name + " - Position: (" + object.x + ", " + object.y + ")");
  }
}

// Main loop
function mainLoop() {
  setInterval(update, 1000);
}

// Run the program
mainLoop();