/*  - FUNCTIONS

    RETURN - TODA FUNÇÃO ELA RETORNA A ALGUMA COISA, MAS PARA ISSO ACONTECER NÓS PRECISAMOS CHAMAR 

*/

function sum(number1, number2){ //  QUANDO MINHA FUNÇÃO NÃO TEM O RETURN ELA É DO TIPO VOID = VAZIA
    const result = number1 + number2

    return result // TODA VEZ Q MINHA FUNÇÃO CHEGA AQUI E ENCONTRA O RETURN, ELA PARA 
   
}

const first_number = 10
const seccond_number = 20

console.log(`O primeiro número é ${first_number}`)
console.log(`O secundo número é ${seccond_number}`)

console.log(`E a soma dos dos dois é ${sum(first_number, seccond_number)}`)


// TAMBÉM POSSAMOS FAZER ASSIM : 


console.log(`O primeiro número é ${first_number}`)
console.log(`O segundo número é ${seccond_number}`)

const result = sum(first_number, seccond_number)

console.log(`E a soma dos dois é ${result}`)

