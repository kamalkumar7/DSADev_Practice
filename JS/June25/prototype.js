// 1. Defining a "prototype" object (no class keyword!)
const animal = {
  isAlive: true,
  eat() {
    console.log("I am eating.");
  }
};

// 2. Creating a new object and setting its prototype
// (Older way, demonstrates concept directly)
const dog = Object.create(animal); // 'dog' now inherits from 'animal'
dog.name = "Buddy";
dog.bark = function() {
  console.log("Woof!");
};

console.log(dog.name);      // Output: Buddy (directly on dog)
console.log(dog.isAlive);   // Output: true (inherited from animal)
dog.eat();                  // Output: I am eating. (inherited from animal)
dog.bark();                 // Output: Woof! (directly on dog)

console.log(Object.getPrototypeOf(dog) === animal); // Output: true

// 3. Using constructor functions (the traditional pre-ES6 "class" way)
function Person(name) {
  this.name = name;
}

// Add a method to the Person's prototype
// This method will be inherited by all instances created with 'new Person()'
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
const bob = new Person("Bob");

alice.greet(); // Output: Hello, my name is Alice
bob.greet();   // Output: Hello, my name is Bob

// The __proto__ of alice points to Person.prototype
console.log(Object.getPrototypeOf(alice) === Person.prototype); // Output: true