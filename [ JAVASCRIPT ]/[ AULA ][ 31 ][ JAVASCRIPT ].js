/*
    For each
*/

const students = [

    {name: "Rychard", age: 16},
    {name: "Maria", age: 45},
    {name: "João", age: 56},
    {name: "Bruno", age: 12},
    {name: "Carla", age: 18},
    {name: "Ana", age: 17},
    {name: "Julio", age: 20},

];

let all_students_age = 0

students.forEach( (students, index)  => {
    all_students_age = all_students_age + students.age
} )

const average_age = all_students_age / students.length

console.log(`A média dos alunos é de ${average_age.toFixed()}`) // .toFixed ELE PÕE UM LIMITE PARA AS CASAS DECIMAIS 