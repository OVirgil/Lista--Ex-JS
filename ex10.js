let pares = 0
let impares = 0

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        console.log(i, "par")
        pares++
    } else {
        console.log(i, "ímpar")
        impares++
    }

}

console.log("Total de pares:", pares)
console.log("Total de ímpares:", impares)