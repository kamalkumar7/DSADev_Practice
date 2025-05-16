interface Person {
  readonly id: number;
  readonly name: string;
  age: number; // This property is mutable
}

const person: Person = { id: 123, name: "Alice", age: 30 };

// person.id = 456; // Error: Cannot assign to 'id' because it is a read-only property.
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

person.age = 31; // This is allowed as 'age' is not readonly
console.log(person.age); // Output: 31