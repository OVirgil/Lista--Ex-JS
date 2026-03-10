const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o usuário: ", function(usuarioDigitado){

    rl.question("Digite a senha: ", function(senhaDigitada){

        if (usuarioDigitado === "admin" && senhaDigitada === "1234"){
            console.log("Acesso permitido")
        } else {
            console.log("Acesso negado")
        }

        rl.close()
    })

})