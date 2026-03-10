let fizz = []
let buzz = []
let fizzbuzz = []
let numeros = []

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzz.push(i)
    } 
    else if (i % 3 === 0) {
        fizz.push(i)
    } 
    else if (i % 5 === 0) {
        buzz.push(i)
    } 
    else {
        numeros.push(i)
    }

}

console.log("Números:", numeros.join(", "))
console.log("Fizz:", fizz.join(", "))
console.log("Buzz:", buzz.join(", "))
console.log("FizzBuzz:", fizzbuzz.join(", "))