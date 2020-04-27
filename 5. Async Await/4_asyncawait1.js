function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let testVal = false
      if (testVal) {
        resolve('Selamat anda mendapat hadiah');
      } else {
        reject("Maaf anda kurang beruntung")
      }  
    }, 2000);
  })
}

const run = async () => {
  console.log("before")
  let value = await promise().then(function(value) {
    return value
  }).catch(function (value) {
    return value
  } );
  console.log("hasil: ", value);
  console.log("after");
}

run();

// ============== NOTE =================
// Can’t use await in regular functions
// If we try to use await in non-async function, there would be a syntax error:
// example:
// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // Syntax error
// }

// ============== NOTE =================
// await won’t work in the top-level code
// People who are just starting to use await tend to forget the fact that
// we can’t use await in top - level code.For example, this will not work:
// example syntax error in top-level code:
// let response = await fetch('/article/promise-chaining/user.json');
// let user = await response.json();
// But we can wrap it into an anonymous async function, like this:
// (async () => {
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
//   ...
// })();