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

// ======================================================================
console.log("======================================================================")

// Substring Method
let originalString = "001Turing";
// our first task it to 'grab' the first 3 characters of this string and put it in one string:
let firstThree = originalString.substring(0, 3);
// verify
console.log("first three characters:", firstThree);
// next, we will 'grab' every character except the first three in three different ways:
// grab from before 4th character onward
let restOfString_1 = originalString.substring(3);
// grab from before 4th character to just before 9th character
let restOfString_2 = originalString.substring(3, 9);
// grab from before 4th character to just before character located at length of string (9th)
let restOfString_3 = originalString.substring(3, originalString.length);
// verify
console.log("restOfString_1:", restOfString_1);
console.log("restOfString_2:", restOfString_2);
console.log("restOfString_3:", restOfString_3);

// Parse a Number from a String
let title = "001Turing";
let threeDigit = title.substring(0, 3);

let parsedNumber = parseInt(threeDigit);
console.log("type of parsedNumber:", typeof parsedNumber);
console.log("value of parsedNumber:", parsedNumber);