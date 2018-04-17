
// Make a cat with some properties
// this.sound -> sound is a key property
var cat = {
    furColor: "black & white",
    age: 1,
    sound: "Meow!",
}

console.log("This is our cat:", cat)

// Addopt cat and give him a name
var catName = {
    name: "Fluffy"
}

console.log("The cat's name will be:", catName)

// Make new cat using Object.create()
var newCat = Object.assign(cat)

console.log(newCat)

// Make him very new cat with all new properties

var cat2beta = Object.assign({}, catName, cat)

console.log(cat2beta)