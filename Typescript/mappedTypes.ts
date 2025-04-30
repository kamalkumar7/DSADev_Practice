interface Person {
    name: string;
    age: number;
    city: string;
  }
  type OptionalPerson = {
    [K in keyof Person]?: Person[K];
  };
  
  // OptionalPerson would be equivalent to:
  // interface OptionalPerson {
  //   name?: string;
  //   age?: number;
  //   city?: string;
  // }

  const p1: OptionalPerson = {
    name:"Harry",
    age:12
  }
  const p2:Person ={
    name:"Harry",
    age:12,
    city:""
  }


//   interface Person {
//     name: string;
//     age: number;
//     city: string;
//   }
  
//   type BooleanPerson = {
//     [K in keyof Person]: K extends 'city' ? number : boolean;
//   };

// This way we can conditionally chang type of a property

  console.log(p1);