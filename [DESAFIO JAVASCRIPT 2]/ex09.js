/* Faça um programa onde ele leia 4 números. Em cada caso, 
    ele deve retornar a mensagem condizente: 
    - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
    - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, 
    colocar uma mensagem => Há números pares e ímpares. */

const number_one = 3
const number_two = 3
const number_three = 221
const number_four = 43

if(number_one % 2 === 0 && number_two % 2 === 0 && number_three % 2 === 0 && number_four % 2 === 0){
    console.log("Todos os números são pares")
} else if (number_one % 2 !== 0 && number_two % 2 !== 0 && number_three % 2 !== 0 && number_four % 2 !== 0) {
    console.log("Todos os números são ímpares")
} else {
    console.log("Há números pares e ímpares")
}