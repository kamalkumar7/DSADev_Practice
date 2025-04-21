interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  
  class Student implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    
    greet(): string {
      return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  const student = new Student('Kamal', 25);
  console.log(student.greet());