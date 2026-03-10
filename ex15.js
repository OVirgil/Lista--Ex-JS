let requests = [12, 30, 5, 18, 40, 22, 8]
let limite = 25

let validas = 0
let excedidas = 0
let maior = requests[0]

for (let i = 0; i < requests.length; i++) {

    if (requests[i] <= limite) {
        console.log(requests[i], "OK")
        validas++
    } else {
        console.log(requests[i], "LIMIT EXCEEDED")
        excedidas++
    }

    if (requests[i] > maior) {
        maior = requests[i]
    }

}

console.log("Requisições válidas:", validas)
console.log("Acima do limite:", excedidas)
console.log("Maior valor:", maior)