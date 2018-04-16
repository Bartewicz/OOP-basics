function makeCat(name) {
    return {
        name: name,
        age: 1,
        sound: "Meow!",
        makeSound: function () {
            console.log(this.sound)
        },
        speak: function () {
            console.log("Sorry cats can't speak")
        }
    }
}

var catNames = ["Puszek", "Okruszek", "Bemol", "Filemon"]

var cats = catNames.map(function (kittyName) {
    return makeCat(kittyName)
})

console.log("Metoda map", cats)

var catsArr = []

var kittys = catNames.forEach(function (kittyName, index) {
    catsArr[index] = makeCat(kittyName)
})

console.log("Metoda forEach", kittys)