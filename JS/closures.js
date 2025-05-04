function outerFunction(outerVar) {
    function innerFunction(innerVar) {
      console.log(outerVar, innerVar);
    }
    return innerFunction;
  }
  
  const myInnerFunc = outerFunction("Hello"); 
  myInnerFunc("World"); 