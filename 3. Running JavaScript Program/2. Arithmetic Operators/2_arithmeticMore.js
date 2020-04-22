// Comparison
let numberA = 10
let numberB = 15
let numberC = 15
let notNumber = "10"

let isBigger = numberA > numberB
console.log("isBigger:", isBigger) // false

let isSmaller = numberA < numberB
console.log("isSmaller:", isSmaller) // true

let isSameAB = numberA == numberB
console.log("isSameAB:", isSameAB) // false

let isBiggerOrSame = numberB >= numberC
console.log("isBiggerOrSame:", isBiggerOrSame) // true

let isSame = numberA == notNumber
console.log("isSame:", isSame) // true

let isSameStrict = numberA === notNumber
console.log("isSameStrict:", isSameStrict) // false

console.log("=========================================")

// Logical
let statementTrue = true
let statementFalse = false

let statement1 = statementTrue || statementFalse
console.log("statement1", statement1) // true

let statement2 = statementTrue && statementFalse
console.log("statement2", statement2) // false

let statement3 = !statementTrue
console.log("statement3", statement3) // false

console.log("=========================================")

// Fot Bitwise operators please learn more at
// https://www.w3schools.com/js/js_bitwise.asp

// Asignment
let variableA = 5
let variableB = 10

variableA++
console.log("variableA after increment:", variableA)

variableA--
console.log("variableA after increment and decrement:", variableA)

variableA += variableB
console.log("variableA after asignment:", variableA)
// The operation above is equal to
// variableA = variableA + variableB
