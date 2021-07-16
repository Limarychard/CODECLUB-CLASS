//  Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. 
//      Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.

const name_one = ["João", "Maria"]
const name_two = ["Maria", "João"]

console.log(name_one[0] == name_two[1])

console.log(name_one[0] == name_two[0])