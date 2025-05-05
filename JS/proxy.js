const target = {
    message: "Hello, world!"
  };
  
  const handler = {
    get: function(target, prop, receiver) {
      console.log(`Getting property "${prop}"`);
      return Reflect.get(target, prop, receiver);
    }
  };
  
  const proxy = new Proxy(target, handler);
  
  console.log(proxy.message);
  
  // Output: Getting property "message" \n Hello, world!