# Variable
Variables are used to store information in a computer program, they provide a way of labeling data with a descriptive name and they have data type (boolean, numeric, string). A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number.

Variable naming is in `camelCase` and you can declare any variable with `var`, `let`, and `const`
Variable name is `case sensitive`

|       | Redeclare | Hoisting | Block Scope | Global Props | Change Value |
|-------|-----------|----------|-------------|--------------|--------------|
| var   | Yes       | Yes      | No          | Yes          | Yes          |
| let   | No        | No       | Yes         | No           | Yes          |
| const | No        | No       | Yes         | No           | No           |

## String
In JavaScript, there are 3 types of quotes.
1. Double quotes: "Hello".
2. Single quotes: 'Hello'.
3. Backticks: `Hello`.

Example
```
let exampleString = "Hello JavaScript!";
```

## Number
The number type represents both integer and floating point numbers. There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on. Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number. NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation.

Example
```
let exampleNumber = 2020;
```

## Boolean
The boolean type has only two values: true and false.
Example
```
let exampleBoolean = true;
```

## Array
- The Array "object" is used to store an ordered list of multiple values in a single variable.
- Array indexes, like string indexes, are zero-based: the first element in an array is located at index 0, the second at index 1, and so on.
- Arrays are considered "objects" in JavaScript, for several reasons, none of which truly matter to us at this point.

Example
```
let fruits = ["Apple", "Orange", "Plum"];
```

## Object
- An object is a collection of properties
- A property is an association between a name (key) and a value (some data type)
- A property's value can be any of the types we have gone over, as well as being another object, or even a function
- In the case where the value of a property is a function, we refer to the property as a method

Example
```
let person = {
    name: "Nick",
    favoriteLanguage: "JavaScript",
    experienceInYears: 16,
};
```
