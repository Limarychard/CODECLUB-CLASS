//Escreva um programa onde, você chame uma função enviando um número, 
//    a função deve imprime na tela os número de 1 até o número que você enviou

const numbers = (number_one, number_two) =>{
    
   for(let i = number_one; i <= number_two; i++){
       console.log(i)
   }
   
   return "FIM"
}

console.log(numbers(1,55))