//  Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, 
//      e a função responde qual número é maior

const numbers = () => {
    const number_one = Math.floor(Math.random() *(1000 -1) + 1)
    const number_two = Math.floor(Math.random() *(1000 -1) + 1)
    
    if(number_one > number_two) {console.log(`o número maior é ${number_one}`)}
    else if(number_one < number_two) {console.log(`o número maior é ${number_two}`)}

    return numbers
}

numbers()