//  Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. 
//      Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object_one = {first_name:"João", seccond_name:"Maria"}
const object_two = {first_name:"Maria", seccond_name:"João"}

console.log(object_one.first_name == object_two.seccond_name)
console.log(object_one.seccond_name == object_two.seccond_name)