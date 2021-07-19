/*  A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
    A prefeitura deseja saber: 
        - média do salário da população; 
        - média do número de filhos; 
        - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 
    - Faça isso usando uma função! */


const people = [
    {
        number_of_children: 2,
        salary: 2000
    },
    {
        number_of_children: 5,
        salary: 3000
    },
    {
        number_of_children: 0,
        salary: 2500
    },
    {
        number_of_children: 2,
        salary: 1000
    },
    {
        number_of_children: 3,
        salary: 2300
    },
    {
        number_of_children: 1,
        salary: 200
    },
    {
        number_of_children: 0,
        salary: -2000
    },
]

function find_avarage_and_highest_salary (people_information) {

    let average_salary = 0
    let average_children = 0
    let highest_salary = 0

    for (let i = 0; 1 < people_information.length; i ++ ) {

        const salary = people_information[i].salary
        const children = people_information[i].number_of_children

        if (salary > highest_salary) highest_salary = salary

        if(salary < 0) {
            console.log(`Média de salário R$${(average_salary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(average_children / i).toFixed(0)}`)
            console.log(`Maior salário R$${highest_salary} `)
            break
        } else {
            average_salary = average_salary + salary;
            average_children += children
        }

    }

}

find_avarage_and_highest_salary(people)