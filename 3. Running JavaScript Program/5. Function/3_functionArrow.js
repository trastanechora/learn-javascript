console.log("============================ Example 1 ============================")
const sayHello = (name) => {
  console.log("Hello, %s. Nice to meet you! This is the so called arrow function.", name);
}
sayHello("Mae");

console.log("============================ Example 2 ============================")
const doDivision = (firstNumber, secondNumber) => {
  let result = firstNumber / secondNumber
  console.log("The result is:", result);
}
doDivision(10, 5);