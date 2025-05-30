namespace MyUtilityFunctions {
  export function greet(name: string) {
    console.log(`Hello, ${name}!`);
  }

  export const PI = 3.14159;

  export class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  }

  // An unexported member is private to the namespace
  function internalHelper() {
    console.log("This is an internal helper.");
  }
}

// To access members of the namespace, you use the namespace name as a prefix
MyUtilityFunctions.greet("Alice"); // Output: Hello, Alice!
console.log(MyUtilityFunctions.PI); // Output: 3.14159

const calc = new MyUtilityFunctions.Calculator();
console.log(calc.add(5, 3)); // Output: 8

// MyUtilityFunctions.internalHelper(); // Error: Property 'internalHelper' is private and only accessible within class 'MyUtilityFunctions'.