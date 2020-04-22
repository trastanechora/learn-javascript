// Loops Array

let fruits = ["Apple", "Orange", "Cherry"];

// One of the oldest ways to cycle array items is the for loop over indexes:
console.log("=========== let i = 0; i < fruits.length; i++ ==============");
for (let i = 0; i < fruits.length; i++) {
 console.log(fruits[i]); // Apple, Orange, Cherry
}
// But for arrays there is another form of loop, for..of:
// iterates over array elements
console.log("================= let fruit of fruits ======================");
for (let fruit of fruits) {
 console.log(fruit); // Apple, Orange, Cherry
}

// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.
// Technically, because arrays are objects, it is also possible to use for..in:
console.log("================= let key in fruits =======================");
for (let key in fruits) {
 console.log(fruits[key]); // Apple, Orange, Cherry
}

// (+) Bonus
// // There is a looping method that may come in handy latter
// The forEach() method calls a function once for each element in an array, in order.
// Note: the function is not executed for array elements without values.
console.log("================= forEach(myFunction) ====================");
fruits.forEach(myFunction);
function myFunction(item, index) {
  console.log(index + ". " + item) // 0. Apple, 1. Orange, 2. Cherry
}