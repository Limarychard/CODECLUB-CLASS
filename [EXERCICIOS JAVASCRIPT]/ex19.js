//  Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//      Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//          Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem

const random_number = function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (1 - 10 + 1)) + 1;
}

console.log(function)