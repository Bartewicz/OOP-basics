function returnX () {
    console.log(this)
    console.log(arguments)
}

// create object with an x property
var obj = { x: 42 }

var arr = [1, 2, 3]

// returnX() // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
            // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

// returnX.call(this, arr) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
            // Arguments [Array(3), callee: ƒ, Symbol(Symbol.iterator): ƒ]

returnX.call(obj, arr) // {x: 42}
                    // Arguments [Array(3), callee: ƒ, Symbol(Symbol.iterator): ƒ]

// returnX.apply(this, arr) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
                    // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// returnX.apply(obj, arr) // {x: 42}

returnX(arr) // Call traktuje całą tablicę jako argument
returnX(1, 2, 3) // apply trakutuje zawartość tablicy jako kolejne argumenty (bo jest generalnie obiektem a nie samą
// tablicą