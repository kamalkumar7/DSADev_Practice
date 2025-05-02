const username = null;
const displayName = username ?? 'Guest';

const age = 0;
const displayAge = age ?? 30; 

// Nullish Coalescing Operator (??): 
// This provides a way to set default values only when a value is null or undefined (as opposed to any falsy value).

console.log(displayName,displayAge)