abstract class Vehicle {
    constructor(public name: string) {}

    abstract start(): void; 

    stop(): void {
        console.log(`${this.name} stopped.`);
    }
}

class Car extends Vehicle {
    constructor(name: string, public model: string) {
        super(name);
    }
    start(): void { 
        console.log(`${this.name} ${this.model} started.`);
    }
}

class Motorcycle extends Vehicle {
     constructor(name: string, public type: string) {
        super(name);
    }
    start(): void {
        console.log(`${this.name} ${this.type} started.`);
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.start(); 
myCar.stop();

const myMotorcycle = new Motorcycle("Honda", "CBR");
myMotorcycle.start();  
myMotorcycle.stop();

