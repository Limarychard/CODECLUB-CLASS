/* ESTRUTURAS DE REPETIÇÃO - FOR IN 

O for in é bem parecido porém ele se trata de objeto, então consigo pegar propriedade por propriedade 

*/ 

const student = {
    name: "Caio",
    age: 28,
    genre: "male",
}

for(let property in student){
    console.log(`${property}:${student[property]}`)
}