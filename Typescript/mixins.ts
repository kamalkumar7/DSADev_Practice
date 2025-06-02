// Mixin 1: Loggable
type Constructor<T = {}> = new (...args: any[]) => T;

function Loggable<TBase extends Constructor>(Base: TBase) {
  return class Logged extends Base {
    log(message: string) {
      console.log(`[Log] ${message}`);
    }
    // You can also add properties
    logCount: number = 0;
    logMessage(msg: string) {
      this.log(msg);
      this.logCount++;
    }
  };
}

// Mixin 2: Disposable
function Disposable<TBase extends Constructor>(Base: TBase) {
  return class Disposed extends Base {
    isDisposed: boolean = false;

    dispose() {
      this.isDisposed = true;
      console.log("Resource disposed.");
    }
  };
}


class Product {
  constructor(public name: string, public price: number) {}

  getProductInfo() {
    return `${this.name} (${this.price})`;
  }
}



// Define a combined type using intersection types
// This tells TypeScript what the final class will look like.
interface ISuperProduct extends Product {
  log(message: string): void;
  logCount: number;
  logMessage(msg: string): void;
  isDisposed: boolean;
  dispose(): void;
}

// Apply the mixins using a chained extends pattern
class SuperProduct extends Loggable(Disposable(Product)) implements ISuperProduct {
  // We need to explicitly pass constructor arguments through `super()`
  constructor(name: string, price: number) {
    super(name, price);
    // You might also initialize mixin properties here if needed
    // this.logCount = 0; // Already initialized in the mixin's returned class
    // this.isDisposed = false; // Already initialized in the mixin's returned class
  }

  // You can still add class-specific methods/properties
  sell() {
    this.logMessage(`Selling ${this.name}`);
    console.log(`Sold ${this.getProductInfo()}`);
    // If the product is disposable after sale, you might call dispose() here
    // this.dispose();
  }
}

// --- Usage ---
const awesomeGadget = new SuperProduct("Awesome Gadget", 99.99);

awesomeGadget.log("Initializing Awesome Gadget."); // From Loggable mixin
console.log(awesomeGadget.getProductInfo());      // From Product base class
awesomeGadget.sell();                             // From SuperProduct
console.log("Log count:", awesomeGadget.logCount); // From Loggable mixin

awesomeGadget.dispose();                          // From Disposable mixin
console.log("Is disposed?", awesomeGadget.isDisposed); // From Disposable mixin

// This will now throw a compile-time error because awesomeGadget is of type ISuperProduct
// awesomeGadget.someNonExistentMethod();