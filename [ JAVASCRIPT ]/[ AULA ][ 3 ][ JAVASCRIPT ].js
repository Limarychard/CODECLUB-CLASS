// VARIÁVEIS - ELAS SERVEM PARA GUARDAR ALGO SEJA UMA PALAVRA, UM TEXTO, UM NÚMERO, ELAS GUARDAM QUALQUER COISA 

var number1 = 1 /* NÃO USEM O var */
let  number2 = 2 /* QUANDO É UMA VARÍAVEL QUE O VALOR VAI SE ALTERANDO COM O TEMPO EU SUO O let */
const  number3 = 3 /*  QUANDO USO UMA VARÍAVEL QUE O VALOR NUNCA SERÁ ALTERADO EU USO const */

number1 = 10 
number2 = 20 

console.log(number1) /* NÃO TEM "" PORQUE SÓ PÕE QUANDO QUERO COLOCAR UM TEXTO */ 
console.log(number2)
console.log(number3)

/*
    PERMITIDO: 

- Iniciar com números
- Colocar acentos 
- Iniciar com letras
- Letras maiúsculas e minúsculas  

    NÃO PODE:

- Iniciar com números
- Colocar espaços 

    IDEAL: 

- Camel case ---> Primeira palavra sempre em minúscula EXEMPLO: quantidadeDeMacasDoPote
- Snake case ---> Ao inves do espaço usar o _ EXEMPLO: quantidade_de_macas_do_pote
- SEMPRE em inglês
- nomes que fazem sentido 

*/