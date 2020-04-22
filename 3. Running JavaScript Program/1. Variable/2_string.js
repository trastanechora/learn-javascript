// STRING
const name = "John";
// Variable declaration with "const" will prevent any changes to the variable itself in the future
// Only use "const" declaration when you are sure you will never modify the value!
// ======================================================================

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!
// ----------------- ^^^^^ this is variable,
// remember to use only Backticks if you wanna call a variable inside a string and use ${} as it's wrapper
// ======================================================================

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3
// ------------------------- ^^^^^ this is called expression
// ======================================================================

// Access Index String
const testString = "words";
const firstCharacter = testString[0]; // accesses the first character: 'w'
const thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

// (!) Beginer tips
// If you are not sure about which of `var`, `let`, and `const` is necessary to be use, then you
// can use only `let`, but later you will learn by doing about their differences and it's importance