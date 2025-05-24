const text = "My phone number is 123-456-7890. Call me!";
const regex = /(\d{3})-(\d{3})-(\d{4})/; // Capturing groups for area, middle, last

const result = regex.exec(text);

console.log(result);
/*
Output (approximately):
[
  "123-456-7890", // Full match
  "123",          // First capturing group
  "456",          // Second capturing group
  "7890",         // Third capturing group
  index: 20,      // Start index of the match in the original string
  input: "My phone number is 123-456-7890. Call me!", // Original string
  groups: undefined // No named capturing groups used
]
*/

if (result) {
  console.log("Full match:", result[0]);
  console.log("Area code:", result[1]);
  console.log("Middle part:", result[2]);
  console.log("Last part:", result[3]);
  console.log("Match found at index:", result.index);
}