// Generate an array of all keys in a object
console.log("======= Generate an array of all keys in a object =======")
let iceCream = {
  flavor: "Strawberry",
  supportingCast: "Waffle Cone",
  price: 2.5,
};
console.log("Object iceCream:", iceCream);

let keysInIceCream = Object.keys(iceCream);
console.log("array of keys in object iceCream:", keysInIceCream);

// Generate an array of all values in a object
console.log("======= Generate an array of all values in a object =======")
let car = {
  brand: "Honda",
  model: "Civic",
  year: 2008,
  warranty: true,
};
console.log("Object car:", car);

let valuesInCarObject = Object.values(car);
console.log("array of values in object car:", valuesInCarObject);