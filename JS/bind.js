const user = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

// Problem: 'this' will be the global object (or undefined in strict mode)
// when greet is called by setTimeout.
setTimeout(user.greet, 1000); // Output: Hello, undefined! (or error)

// Solution with bind():
const boundGreet = user.greet.bind(user);
setTimeout(boundGreet, 1000); // Output: Hello, John!