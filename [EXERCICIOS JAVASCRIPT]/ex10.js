//  Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. 
//      Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object_one = {name:"Jõao"}
const object_two = {name:"Maria"} 
const object_three = {name:"Jõao"}
const object_four = {name:"Maria"} 

console.log(object_one.name == object_three.name)
console.log(object_two.name == object_one.name)
