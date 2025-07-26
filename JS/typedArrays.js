// Create an ArrayBuffer of 16 bytes
const buffer = new ArrayBuffer(16);

// Create a typed array: Int32Array (each element = 4 bytes)
const intArray = new Int32Array(buffer);

// Fill the typed array
intArray[0] = 100;
intArray[1] = 200;
intArray[2] = 300;
intArray[3] = 400;

console.log("Int32Array:", intArray);

// Let's interpret the same buffer as a Uint8Array (1 byte per item)
const byteView = new Uint8Array(buffer);
console.log("Uint8Array view:", byteView);

// View individual bytes of the integer 100
console.log("Bytes for intArray[0] (100):", byteView.slice(0, 4));