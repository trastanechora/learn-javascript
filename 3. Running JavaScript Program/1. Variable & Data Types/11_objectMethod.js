// Nesting with objects
let complexPersonObject = {
  name: "Joe Quinby",
  title: "Mayor",
  address: { // an object inside of an object
    street: "123 Fake Street",
    city: "Springfield",
    state: "QX",
    zip: 189091,
  },
  responsibilities: [ // a list inside of an object
    "Convince voters to vote for him",
    "Appear to do stuff",
    "Dodge issues using real leadership",
  ],
 };

 console.log("Original complex object:", complexPersonObject);
 
 // delete a property in an object nested within another object
 delete complexPersonObject["address"].zip; // OR delete complexPersonObject.address['zip'] OR delete complexPersonObject.address.zip OR delete complexPersonObject['address']['zip']
 console.log(
  "complex object after removing property from nested object:",
  complexPersonObject
 );
 
 // add a value to an array nested within an object
 complexPersonObject["responsibilities"].push("rub elbows with the blue bloods");
 console.log(
  "complex object after adding element to array nested within object:",
  complexPersonObject
 );
 