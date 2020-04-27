async function run() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000)
  });

  console.log("before!")
  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
  // promise.then(function(value) {
  //   console.log(value);
  //  })
  console.log("after2")
  console.log(promise)
}

run();