const json = ["name", "John", "age"];
// const json = '{"firstName":"John", "lastName":"Doe"}'

// newObj = JSON.parse(json);
// console.log(newObj)
try {
  newObj = JSON.parse(json);
  console.log("newObject", newObj)
} catch (err) {
  // console.log("log >>", err);
  // let errLog = err
  // console.log(errLog)
  console.log("bukan object valid")
}

// newObj = JSON.parse(json);

