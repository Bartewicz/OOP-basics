
// Make a cat with makeSound property
// this.sound -> sound is a key property
var cat = {
    sound: 'Inne miau!',
    makeSound: function () {
        console.log(this.sound)
    }
}

console.log(cat)

// Make new cat using Object.create()
var newCat = Object.create(cat)

newCat.sound = 'Miau!'

console.log(newCat)

newCat.makeSound()