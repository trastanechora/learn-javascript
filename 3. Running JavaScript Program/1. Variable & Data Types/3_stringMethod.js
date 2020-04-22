// Concatenate
let firstName = "Robert";
let lastName = "Smalls";

var fullName = firstName + lastName;

console.log("fullName without space:", fullName);

// Get the Length
let name = "Ada Lovelace";

let lengthOfName_1 = name.length;
console.log("lengthOfName version 1:", lengthOfName_1);
// OR:
let lengthOfName_2 = "Ada Lovelace".length;
console.log("lengthOfName version 2:", lengthOfName_2);

// Get the last element of a string
let language = "JavaScript";
let lastCharacter = language[language.length - 1];

console.log("last character:", lastCharacter);

// ================== SUPLEMENTARY ======================
// Selectively uncomment code below if you are currious about them
// commonly used method of String

// ***** String concat() Method *****
// The concat() method is used to join two or more strings.
// This method does not change the existing strings, but returns a new string containing the text of the joined strings.
// var str1 = "Hello ";
// var str2 = "world!";
// var res = str1.concat(str2);
// console.warn("res concat(): ", res) // res concat():  Hello world!
// ======================================================

// ***** String endsWith() Method *****
// The endsWith() method determines whether a string ends with the characters of a specified string.
// This method returns true if the string ends with the characters, and false if not.
// Note: The endsWith() method is case sensitive.
// var str = "Hello world, welcome to the universe.";
// var n = str.endsWith("universe.");
// console.warn("res endsWith(): ", n) // res endsWith():  true
// ======================================================

// ***** String includes() Method *****
// The includes() method determines whether a string contains the characters of a specified string.
// This method returns true if the string contains the characters, and false if not.
// Note: The includes() method is case sensitive.
// var str = "Hello world, welcome to the universe.";
// var n = str.includes("world");
// console.warn("res includes(): ", n) // res includes():  true
// ======================================================

// ***** String indexOf() Method *****
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.
// Note: The indexOf() method is case sensitive.
// Tip: Also available the lastIndexOf() method.
// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("welcome");
// console.warn("res indexOf(): ", n) // res indexOf():  13
// ======================================================

// ***** String match() Method *****
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
// Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.
// Note: If the regular expression does not include the g modifier (to perform a global search),
// the match() method will return only the first match in the string.
// This method returns null if no match is found.
// var str = "The rain in SPAIN stays mainly in the plain";
// var res = str.match(/ain/g);
// console.warn("res match(): ", res) // res match():  [ 'ain', 'ain', 'ain' ]
// ======================================================

// ***** String toUpperCase() Method *****
// The toUpperCase() method converts a string to uppercase letters.
// Note: The toUpperCase() method does not change the original string.
// Tip: Use the toLowerCase() method to convert a string to lowercase letters.
// var str = "Hello World!";
// var res = str.toUpperCase();
// console.warn("res toUpperCase(): ", res) // res toUpperCase():  HELLO WORLD!
// ======================================================

// ***** String substring() Method *****
// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// This method extracts the characters in a string between "start" and "end", not including "end" itself.
// If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
// If either "start" or "end" is less than 0, it is treated as if it were 0.
// Note: The substring() method does not change the original string.
// var str = "Hello world!";
// var res = str.substring(1, 4);
// console.warn("res substring(): ", res) // res substring():  ell
// ======================================================

// ***** String toString() Method *****
// The toString() method returns the value of a String object.
// var str = 2020;
// var res = str.toString();
// console.warn("res toString(): ", res) // res toString():  2020
// ======================================================

// For complete methods you can research by yourself or visit the source:
// https://www.w3schools.com/jsref/jsref_obj_string.asp


