// Methods pop/push, shift/unshift
// Adding an element to the back
let fruits = ["oranges", "bananas", "apples"];
// call push with the element you wish to add
let whatPushReturns = fruits.push("kiwis");
console.log("fruits:", fruits);
console.log("notice what push returns:", whatPushReturns);

// Removing element from back
let animals = ["horse", "cat", "dog", "parrot"];
let elementPopped = animals.pop();
console.log("animals with last element removed:", animals);
console.log("what returns from calling pop():", elementPopped);

// Adding an element to the front
let scores = [98, 85, 91, 78, 82];

// call unshift with the element you wish to add
let resultOfCallingUnshift = scores.unshift(102);
console.log("scores with an element added to front:", scores);
console.log("result of calling unshift:", resultOfCallingUnshift);

// Removing an element from front
let courses = ["Economics", "Biology", "Statistics", "Art"];
let elementShifted = courses.shift();
console.log("courses with an element removed from front:", courses);
console.log("result of calling shift:", elementShifted);