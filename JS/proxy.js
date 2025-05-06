const testObject = {
    message: "Hello, world!"
  };
  
  const handler = {
    get: function(target, prop, receiver) {
      console.log(`Getting property "${prop}"`);
      return Reflect.get(target, prop, receiver);
    },
 
  };
  
  const proxy = new Proxy(testObject, handler);  
  console.log(proxy.message);
  
