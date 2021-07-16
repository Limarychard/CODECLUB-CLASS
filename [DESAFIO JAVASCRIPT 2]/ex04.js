//  Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const first_number = 60
const seccond_number = 3244
const third_number = 2342

if (first_number > seccond_number && first_number > third_number){
    console.log(" O primeiro é maior")
} else if (seccond_number > third_number){
    console.log(" O segundo é maior")
} else {
    console.log(" O terceiro é maior")
}

if (first_number < seccond_number && first_number < third_number){
    console.log(" O primeiro é menor")
} else if (seccond_number < third_number){
    console.log(" O segundo é menor")
} else {
    console.log(" O terceiro é menor")
}