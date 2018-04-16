// declared in global scope
function logThis() {
    console.log(this)
}

function makeSound() {
    console.log(this.sound)
}

// function called in global scope
// this points at global scope - window object
logThis()

var cat1 = {
    name: "Fluffy",
    sound: "Meow!",
    logThis: logThis,
    makeSound: makeSound
}

var cat2 = {
    name: "Puffy",
    sound: "Meoooooooow!",
    logThis: logThis,
    makeSound: makeSound
}

// this points at execution context - cat1 or cat2 objet
console.log(cat1.name)
cat1.makeSound()
console.log(cat2.name)
cat2.makeSound()