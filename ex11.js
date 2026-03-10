let numeros = [10, 5, 8, 20, 15]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

let media = soma / numeros.length

console.log("Soma:", soma)
console.log("Média:", media)