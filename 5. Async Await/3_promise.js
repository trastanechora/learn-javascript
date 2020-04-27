let promise = new Promise((resolve, reject) => {
  console.log('Semoga gw dapet hadiah');
  setTimeout(function() {
    resolve('Selamat anda mendapat hadiah');
  }, 5000);
 });
 
 promise.then(function(value) {
  console.log(value);
  // expected output: 'Selamat anda mendapat hadiah'
 });
 
//  console.log("check promise:", promise);

// let promiseErr = new Promise((resolve, reject) => {
//   let testVal = true
//   setTimeout(function () {
//     if (testVal) {
//       resolve('Selamat anda mendapat hadiah');
//     } else {
//       reject('Maaf anda kurang beruntung');
//     }
//   }, 2000);
// });
 
// promiseErr.then(function (value) {
//   console.log(value)
// }).catch(function (value) {
//   console.log(value)
// })