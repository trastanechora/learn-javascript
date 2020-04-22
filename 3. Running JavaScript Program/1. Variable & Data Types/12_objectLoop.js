// The “for…in” loop
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
 };
 
console.log("================= let key in user ======================");
 for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
 }
 
console.log("========= Cloning and merging, Object.assign ===========");
 // Cloning and merging, Object.assign
 let developer = {
  name: "John",
  age: 30,
 };
 
 let merge = Object.assign(user, developer);
 console.log(merge); // { name: 'John', age: 30, isAdmin: true }
