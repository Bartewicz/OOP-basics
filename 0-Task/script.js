// log this in global scope

console.log(this)

// declared in function

function showMeThis() {
    console.log(this)
}

// function showMeThis attached to object

var obj1 = {}

    obj1.name = 'obj1',
    obj1.logThis = showMeThis


var obj2 = {
    name: 'obj2',
    logThis: showMeThis
}

obj1.logThis()
obj2.logThis()