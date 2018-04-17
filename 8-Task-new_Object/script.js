
// Make a dog constructor
// this.sound would be applied via funtcion
function Dog(name, sound) {
    this.name = name,
    this.furColor = "black & white",
    this.age = 1,
    this.sound = sound
    this.makeSound = function() {
        console.log(this.sound)
    }
}

// Create new dog and give him a name and sound
var newDog = new Dog('Rambo', "Raf, raf")

console.log("This is my new dog:", newDog)

newDog.makeSound()