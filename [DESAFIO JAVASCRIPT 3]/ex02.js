//  Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) 
//      e escrever a tabuada de 1 a 10 do valor lido.

const tabuada = (multiplicado) => {
    console.log()
    const multiplicador = ["1","2","3","4","5","6","7","8","9","10",]
    for (let valor of multiplicador) {
        console.log(`${valor} x ${multiplicado} = ${valor * multiplicado}`)
    }
}

tabuada(7)