let a = 30

function localA(locA) {
    let a = locA
    console.log(a)
}

localA(10)
console.log(a)

///////////////////////////////////////////
const ab = 134.50

function myFn() {
    function innerFn() {
        console.log(ab)
    }
    innerFn()
}

myFn()

let aab = 10.11
let baa = 10
console.log(typeof(aab))
console.log(aab !== baa)


const ao =  {
}
    
console.log(!!ao)

let passport = 1
let passportUa = 'Vitaliy'

console.log(passport || passportUa)
console.log(passport && passportUa)