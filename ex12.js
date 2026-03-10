let valores = [12, 7, 25, 3, 18, 10, 2, 30]

let maior = valores[0]
let menor = valores[0]
let soma = 0
let maioresQue10 = 0

for (let i = 0; i < valores.length; i++) {

    if (valores[i] > maior) {
        maior = valores[i]
    }

    if (valores[i] < menor) {
        menor = valores[i]
    }

    if (valores[i] > 10) {
        maioresQue10++
    }

    soma += valores[i]
}

let media = soma / valores.length

console.log("Maior:", maior)
console.log("Menor:", menor)
console.log("Média:", media)
console.log("Maiores que 10:", maioresQue10)