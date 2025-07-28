function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]
    }
    else{
      cache[num] = num + 256;
      return cache[num];
    }
  }
}
var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return


function memoizedMultiply() {
  var cache = {};

  return function(a, b) {
    var key = a + ',' + b; // create a unique key for the arguments
    if (key in cache) {
      console.log("cached value");
      return cache[key];
    } else {
      var result = a * b;
      cache[key] = result;
      return result;
    }
  }
}

var memoizedMul = memoizedMultiply();

console.log(memoizedMul(5, 10)); // Normal return (not cached)
console.log(memoizedMul(5, 10)); // Cached return
console.log(memoizedMul(6, 7));  // Normal return (not cached)
console.log(memoizedMul(6, 7));  // Cached return
