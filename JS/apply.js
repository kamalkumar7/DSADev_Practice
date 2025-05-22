const person1 = {
  name: 'Alice',
  greet: function(message) {
    return `${message}, my name is ${this.name}.`;
  }
};

const person2 = {
  name: 'Bob'
};

// Borrow the greet method from person1 and apply it to person2
console.log(person1.greet.apply(person2, ['Hello'])); // Output: Hello, my name is Bob.