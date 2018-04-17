var names = ['Bartek', 'Magda', 'Paweł', 'Szymon', 'Ala', 'Ola', 'Jan', 'Kazimierz Wielki']

var howMany = names.reduce(function(result, name, i) {
    if (name.length < 4) {
        result.less4++
    } else {
        result.eqaulMore4++
    }
    return result
}, { less4: 0, eqaulMore4: 0})

console.log(howMany)