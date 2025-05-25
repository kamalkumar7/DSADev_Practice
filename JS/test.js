const emailInput = "user@example.com";
const invalidEmailInput = "user@example";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A simple email validation regex

console.log(emailRegex.test(emailInput));       // Output: true
console.log(emailRegex.test(invalidEmailInput)); // Output: false

if (emailRegex.test(emailInput)) {
  console.log("Email is valid.");
} else {
  console.log("Please enter a valid email address.");
}