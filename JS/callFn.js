function sayHello(){
  return "Hello " + this.name;
}
var obj = {name: "Sandy"};       
const message=sayHello.call(obj);
console.log(message)