//  Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. 
//      Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.

const name_one = ["João", "Maria"]
const name_two = ["Maria", "João"]

name_one[0] = name_two[0]

console.log(name_one[0] == name_two[1])

console.log(name_one[0] == name_two[0])