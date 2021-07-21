const numbers = [1, 2, 3, 4]

// TODOS ELES FAZEM A MESMA COISA, PORÉM SÃO FORMAS DIFERENTES DE ESCREVER...

/* const new_array0 = numbers.map( function(number) {
    return number * 3
})

const new_array1 = numbers.map( (number) => {
    return number * 3
}) */

const double = number => number * 2
const sum = number => number + 10
const sum2 = number => number - 3
const to_reais = number => `R$ ${number.toFixed(2)}`

const new_array2 = numbers.map (double).map(sum).map(sum2).map(to_reais)

console.log(new_array2)