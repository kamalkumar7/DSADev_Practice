//The “this” keyword refers to the object that the function is a property of.


function greet() {
    console.log(this);
}
greet(); // In a browser: logs 'window'


const person = {
    name: 'Alice',
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.sayHello(); // Logs 'Hello, my name is Alice'