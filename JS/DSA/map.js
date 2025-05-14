const myMap = new Map([
    ['name', 'Alice'],
    [1, 'number one'],
    [true, 'a boolean'],
    [{ key: 'value' }, 'an object key']
  ]);
  
  console.log("Initial Map:", myMap);
  console.log("Size:", myMap.size);
  console.log("Get 'name':", myMap.get('name'));
  console.log("Has key 1:", myMap.has(1));
  
  myMap.set('age', 30);
  console.log("Map after setting 'age':", myMap);
  
  myMap.delete(true);
  console.log("Map after deleting key 'true':", myMap);
  console.log("Size after deletion:", myMap.size);
  
  console.log("\nIterating through entries:");
  for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
  }
  
  console.log("\nIterating through keys:");
  for (const key of myMap.keys()) {
    console.log(key);
  }
  
  console.log("\nIterating through values:");
  for (const value of myMap.values()) {
    console.log(value);
  }
  
  myMap.clear();
  console.log("Map after clear:", myMap);
  console.log("Size after clear:", myMap.size);