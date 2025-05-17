function calculateSum(a, b) {
  let sum = a + b;
  debugger; // Execution will pause here when this function is called
  return sum;
}

let num1 = 5;
let num2 = 10;
let result = calculateSum(num1, num2);
console.log("The sum is:", result);