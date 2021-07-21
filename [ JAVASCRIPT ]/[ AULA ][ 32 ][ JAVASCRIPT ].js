/*
    MAP

    - Cria um novo array, a partir do array percorrido {array original}
    - Cria um novo array com a mesma quantidade de itens do array original

    - Aceita 3 parâmetros:

    - item do array
    - index
    - array completo 

*/

const numbers = [1, 2, 3, 4]

const students = [

    {name: "Rychard", age: 16},
    {name: "Rodolfo", age: 30},
    {name: "Julia", age: 15},
    {name: "Eduardo", age: 38},
    {name: "Enzo", age: 10},
    {name: "Michelle", age: 36},

];

const new_array = numbers.map( (number) => {
    const new_number = number + 10 * 2 / 3
    return new_number  
}) 

console.log(new_array)

const new_students = students.map ( (student) => {
    const new_student = {
        name: student.name + ' De Lima ',
        age: student.age + 3
    }
    return new_student
})

console.log(new_students)