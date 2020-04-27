let buyer = (message) => { 
  console.log('pesan martabak dong? '+ message)
};
 
let seller = (callback) => {
  // console.log("Ok! (wait sedang dimasak)")
  setTimeout(() => {
    callback('Ok, martabak sudah selesai kakak');
  }, 5000);
}
 
console.log("Pesan martabak dong?....(wait sedang dimasak)");
seller(buyer);