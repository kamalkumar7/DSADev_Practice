// With var (no TDZ):
console.log(myOldVar); // Output: undefined
var myOldVar = "I'm a var";
console.log(myOldVar); // Output: I'm a var

// With let/const (TDZ in effect):
// console.log(myNewVar); // ReferenceError: Cannot access 'myNewVar' before initialization
// let myNewVar = "I'm a let";
// console.log(myNewVar);