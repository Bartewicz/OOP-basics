function returnX () {
    return this.x
}

console.log(returnX())
// undefined - there is no x in window!

// create object with an x property
var obj = { x: 42 }

var boundReturnX = returnX.bind(obj)

boundReturnX()
// 42 - because is bound to obj and it had x prop

