// A simple generator function
function* numberGenerator() {
    console.log("Generator starts");
    yield 1; 
    console.log("Resumed and yielding 2");
    yield 2; 
    console.log("Resumed and yielding 3");
    yield 3; 
    console.log("Generator ends");
}


const gen = numberGenerator();

// console.log(gen.next()); 
// console.log(gen.next()); 
// console.log(gen.next()); 
// console.log(gen.next());

function* fibonacciGenerator() {
    let [prev, current] = [0, 1];
    while (true) {
        yield prev;
        [prev, current] = [current, prev + current];
    }
}

const fibGen = fibonacciGenerator();
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);

function getFibonacciNumbers(count) {
    const fibGen = fibonacciGenerator();
    const fibNumbers = [];
    for (let i = 0; i < count; i++) {
        fibNumbers.push(fibGen.next().value);
    }
    return fibNumbers;
}

console.log(getFibonacciNumbers(10));