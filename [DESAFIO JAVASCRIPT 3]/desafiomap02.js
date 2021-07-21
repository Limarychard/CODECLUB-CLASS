const students = [

    {name: "Rodolfo", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},
    {name: "Rychard", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},
    {name: "Enzo", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},
    {name: "Maria", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},
    {name: "Julia", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},
    {name: "Michelle", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},
    {name: "Ana", test_grade: Math.floor(Math.random() * ( 10 - 5) + 4)},
    {name: "Fernanda", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},
    {name: "Pietra", test_grade: Math.floor(Math.random() * ( 10 - 4) + 4)},

]

const approved_list = students.map(approved_students => {
    let approved_or_not 

    if(approved_students.test_grade >= 7){
        approved_or_not = 'approved'
    } else {
        approved_or_not = 'disapproved'
    }

    const  new_approved_list = {
        name: approved_students.name,
        test_grade: approved_students.test_grade,
        test_result: approved_or_not
    }

    return new_approved_list

})

console.log(approved_list)