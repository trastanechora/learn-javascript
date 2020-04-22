// Remove a property
let pet = {
	type: "dog",
	name: "Ramses",
	shelterCrate: 13,
};
delete pet.shelterCrate; // OR delete pet['shelterCrate']
console.log("object with deleted property:", pet);

// Check if a property is present
let letterCount = {
	a: 3,
	b: 1,
	n: 2,
	s: 1,
};

let propertyNotPresent = letterCount["x"];
console.log(
"value of keys not present in object is undefined:",
propertyNotPresent
);

// Determine if a value is an object
let superHero = {
	name: "Batman",
	city: "Gotham",
	villain: "Joker",
};

let result = typeof superHero;
console.log("calling typeof on an object gives us:", result);