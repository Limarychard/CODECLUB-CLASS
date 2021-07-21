/*
    REDUCE
    - Retora um valor ( pode ser um novo array, um objeto, string, number, etc...)
    - Aceita 4 parâmetros
        - acumulador 
        - valor atual 
        - index
        - array completo

*/

const list = [1, 2, 3, 4]

const sum = list.reduce ( (acc, current) =>{

    console.log('acumulador', acc)
    console.log('atual', current)
    return acc + current

}, 10) // ALEM DA FUNÇÃO PRECISAMOS COLOCAR O VALOR INICIAL 

console.log(sum)