/*  OPERADOR TERNÁRIO OU CONDICIONAL 

?   -> Se 
:   -> Se não 

*/

const rain = true

const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva' // PRIMEIRO TEMOS A CONDIÇÃO ------  ESQUERDA -> VALOR VERDADEIRO     DIREITA -> VALOR FALSO 

console.log(umbrela)





// Preciso transferir meu dinheiro 

const balance = true
const is_not_blocked = false
const account_exist = true

const transfer_ok = balance && is_not_blocked && account_exist ? 'TRANSFERÊNCIA REALIZADA' : 'TRANSFERÊNCIA NEGADA'

console.log(transfer_ok)