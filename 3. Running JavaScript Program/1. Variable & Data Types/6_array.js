// Array Declaration
let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];
let scores = [98, 85, 91, 78, 82];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
console.log(fruits);

// We can replace an element:
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]
// add a new one to the array:
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]
// The total count of the elements in the array is its length
console.log(fruits.length); // 4
console.log(fruits);
// An array can store elements of any type.
// let arr = ["apple", 1];