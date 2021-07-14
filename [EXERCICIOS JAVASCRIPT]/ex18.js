//  Faça um programa que verifica se uma pessoa é brasileira ou não. 
/*
    1- nascido no Brasil
    2- ser naturalizado brasileiro 
    3- ter residência em território nacional, pelo prazo mínimo de 4 (quatro) anos;    
*/ 

const born_in_brazil = false
const be_naturalized = false
const have_residence = false

const is_brazilian = born_in_brazil || be_naturalized || have_residence ? 'A pessoa é brasileira' : 'A pessoa não é brasileira'

console.log(is_brazilian)