var cat = {
    name: "Fluffy",
    age: 1,
    sound: "Meow!",
    makeSound: function () {
        console.log(this.sound)
    },
    speak: function () {
        console.log("Sorry cats can't speak")
    }
}

cat.makeSound()
cat.speak()