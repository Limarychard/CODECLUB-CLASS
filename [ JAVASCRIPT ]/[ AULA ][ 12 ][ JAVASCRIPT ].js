/* OPERADORES DE COMPARAÇÃO 

==  -> Igual // Ele compara o valor, mas NÃO compara o TIPO do valor // 99% DAS VEZES NÃO USE ESSE AQUI 
=== -> TOTALMENTE IGUAL // Ele verifica o TIPO do dado!

!=  -> // Ele compara o valor, mas não compara o TIPO do valor // 99% DAS VEZES NÃO USE ESSE AQUI 
!== -> TOTALMENTE DIFERENTE // Ele verifica o TIPO do dado 

*/ 

const first_person = 'Jõao'
const seccond_person = 'Maria'

const first_number = '23' // Aqui temos um 23 que é uma STRING
const seccond_number = 23  // Aqui temos um 23 que é um NUMBER 

console.log(first_person == seccond_person)
console.log(first_person != seccond_person)

console.log(first_number === seccond_number)
console.log(first_number !== seccond_number)