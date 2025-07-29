const user = {
  name: "Vivek",
  age: 30
};

Object.preventExtensions(user);

user.email = "vivek@example.com"; // This will NOT be added

console.log(user.email); // undefined
console.log(user); // { name: 'Vivek', age: 30 }

user.name = "Arjun"; // Existing properties can still be changed
console.log(user.name); // 'Arjun'

delete user.age; // Existing properties can also be deleted
console.log(user); // { name: 'Arjun' }

// Check if object is extensible
console.log(Object.isExtensible(user)); // false
