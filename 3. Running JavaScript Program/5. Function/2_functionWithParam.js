console.log("============================ Example 1 ============================")
function sayHello(name) {
  console.log("Hello, %s. Nice to meet you!", name);
}
sayHello("Mae");

console.log("============================ Example 2 ============================")
function doCalculationAdd(firstNumber, secondNumber) {
  console.log("The result of %d added by %d is %d", firstNumber, secondNumber, (firstNumber + secondNumber))
}
doCalculationAdd(2, 5);

console.log("============================ Example 3 ============================")
function greeting(hour) {
  if (hour < 12) {
    console.log("Selamat Pagi");
  } else if (hour < 18) {
    console.log("Selamat Sore");
  } else {
    console.log("Selamat Malam");
  }
}
let hour = 15;
greeting(hour);
 