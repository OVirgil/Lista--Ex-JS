const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", function(idade) {

    idade = Number(idade)

    if (idade < 18) {
        console.log("Menor de idade")
    } else if (idade >= 18 && idade <= 60) {
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }

    rl.close()
});