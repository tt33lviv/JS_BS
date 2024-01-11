function myFn(a, b) {
    return a + b   
}


function myLog(c) {
    console.log(c)
}

const c = myFn(10, 10)

myLog(c)

//////
const personOne = {
    name: 'Vitaliy',
    age: 39
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age)


function printMyName() {
    console.log('Vitaliy Shkrobut')
}
setTimeout(printMyName,1000)


