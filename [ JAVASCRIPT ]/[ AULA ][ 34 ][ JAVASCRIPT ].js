/*
    FILTER 
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array apenas com elementos filtrados
    - Aceita 3 parâmetros 
        - item do array 
        - index
        - array completo 

*/ 

const list = [

    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },

];

const just_vips = list.filter( client => {

        return client.vip

})

console.log(just_vips)


const students = [

    { name: "Rodolfo", test_grade: 7 },
    { name: "Maria", test_grade: 5 },
    { name: "João", test_grade: 8 },
    { name: "Bruno", test_grade: 9 },
    { name: "Carla", test_grade: 3 },
    { name: "Ana", test_grade: 2 },
    { name: "Julio", test_grade: 10 },

];

const new_studens_list = students.filter( student => {

    return student.test_grade < 7

})

console.log(new_studens_list)