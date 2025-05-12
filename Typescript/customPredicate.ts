interface Cat {
    meow(): void;
  }
  
  interface Dog {
    bark(): void;
  }
  
  type Animal = Cat | Dog;
  
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).meow !== undefined; // Heuristic check
  }
  
  function makeSound(animal: Animal) {
    if (isCat(animal)) {
      animal.meow(); // TypeScript knows 'animal' is a Cat here
    } else {
      animal.bark(); // TypeScript knows 'animal' is a Dog here (since it's an Animal and not a Cat)
    }
  }
  
  const myCat: Cat = { meow: () => console.log("Meow!") };
  const myDog: Dog = { bark: () => console.log("Woof!") };
  
  makeSound(myCat); // Output: Meow!
  makeSound(myDog); // Output: Woof!