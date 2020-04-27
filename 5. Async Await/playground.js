let promise = new Promise((resolve, reject) => {
  console.log('Semoga gw dapet hadiah');
  setTimeout(function() {
    let testVal = true
      if (testVal) {
        resolve('Selamat anda mendapat hadiah');
      } else {
        reject("Maaf anda kurang beruntung")
      }
  }, 2000);
 });
 
 promise.then(function(value) {
   console.log("resolved", value);
 }).catch(function (value) {
   console.log("rejected", value)
 });