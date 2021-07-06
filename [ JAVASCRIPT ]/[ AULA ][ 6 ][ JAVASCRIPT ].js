/*
    OBJECT

    propriedade : valor 
    marca : Samsung
    cor : preta 
    tamnanho : 75"

    nome : Rychard 
    idade : 16 
    altura 1.6m
*/ 

const person = { // ESSA CHAVE UTILIZAMOS PARA OBJETOS 
    name: "Rychard",
    age: 28, 
    sex: "male", 
    height: 1.6,
    address: {
        street: "Antônia Tereza De Paula Matias", // POSSAMOS COLOCAR OBJETOS DENTRO DE OBJETOS 
        number: 604,
        country: "Brasil" 
    }
}

console.log(person)

console.log(person.name) //QUANDO QUERO QUE ME MOSTRE APENAS UMA VARIAVEL 

console.log(person.address.country)