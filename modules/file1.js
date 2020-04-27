const sayHello = (name) => {
  console.log("Hello, ", name)
}

const greetings = (text = "lets learn JS!") => {
  console.log(text)
}

console.log("Test run atau tidak")

module.exports = { sayHello, greetings }