// Declare factory
function makeCat(name, age, sound) {
    return {
        name: name,
        age: age,
        sound: sound,
        makeSound: function () {
            console.log(this.sound)
        },
        speak: function () {
            console.log("Sorry cats can't speak")
        }
    }
}

// Cat names = ["Puszek", "Okruszek", "Bemol", "Filemon"]

// Create and log every cat with new prop name and sound

/*
var puszek = makeCat('Puszek', 'Meow...')
console.log(puszek)
puszek.makeSound()

var okruszek = makeCat('Okruszek', "MEOW!!")

console.log(okruszek)
okruszek.makeSound()

var bemol = makeCat('Bemol', "Meooow.")

console.log(bemol)
bemol.makeSound()

var filemon = makeCat('Filemon', "MEOEOEOEOEOWWW!")

console.log(filemon)
filemon.makeSound()*/

// Create newCats object that contains new cats made from an array

/*var cats = [['Puszek', 2, 'Meow...'], ['Okruszek', 3, "MEOW!!"], ['Bemol', 1, "Meooow."], ['Filemon', 2.5, "MEOEOEOEOEOWWW!"]]

var newCats = cats.map(function (kittyProps) {
    return makeCat(kittyProps[0], kittyProps[1], kittyProps[2])
})

console.log(newCats)*/

// Create newCats object that contains new cats made from an array that contains every new cat props

var cats = [
    { name: 'Puszek', age: 2, sound: 'Meow...' },
    { name: 'Okruszek', age:  3, sound:  "MEOW!!"},
    { name: 'Bemol', age:  1, sound:  "Meooow."},
    { name: 'Filemon', age:  2.5, sound:  "MEOEOEOEOEOWWW!"}
]

var newCats = cats.map(function (kitty) {
    return makeCat(kitty.name, kitty.age, kitty.sound)
})

console.log(newCats)