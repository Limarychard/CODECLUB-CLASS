//  Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//      Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//          Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem

const random_number =  Math.floor(Math.random() *(10 -1) + 1)
const winning_number =  Math.floor(Math.random() *(10 -1) + 1)

console.log(random_number, "Número aleatório")
console.log(winning_number, "Número ganhador")

if(random_number === winning_number){
    console.log("você ganhou")
} else {
    console.log("você perdeu")
}