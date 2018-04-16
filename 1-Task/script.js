// declared in global scope
function logThis() {
    console.log(this)
}

// create object with an x property and logThis method
var obj = {
    x: 42,
    /*logThis: logThis.bind(obj)*/
}


var logThisObj = logThis.bind(obj)

console.log(logThisObj())

/*obj.logThis()*/

logThis()
