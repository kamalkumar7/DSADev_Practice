function curriedAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

const addOne = curriedAdd(1);
const addOneAndTwo = addOne(2);
const result = addOneAndTwo(3);
console.log(result);