const originalArray = [1, 2, [3, 4]];
const shallowCopyArray = [...originalArray]; // Using the spread syntax for a shallow copy

console.log("Original Array:", originalArray);
console.log("Shallow Copy Array:", shallowCopyArray);

shallowCopyArray[0] = 10; // Modifying a primitive in the shallow copy
shallowCopyArray[2][0] = 30; // Modifying a nested object in the shallow copy

console.log("Original Array after modification:", originalArray);
console.log("Shallow Copy Array after modification:", shallowCopyArray);