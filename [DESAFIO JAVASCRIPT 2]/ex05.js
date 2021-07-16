/* Crie 5 objetos nesse formato
    { 
        nome: "" 
        idade:"" 
        sexo:"" 
        profissão: "" 
        nacionalidade:"" 
    }
    Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo,
    a pessoa deve ser maior de idade e brasileira para ser aprovada. */



const first_person = {
    nome: "Rychard", 
    idade: 19,
    sexo: "Masculino",
    profissão: "Programador",
    nacionalidade: "Brasileiro",
}

if (first_person.idade >= 18 && first_person.nacionalidade === "Brasileiro"){
    console.log("Você foi aprovado !")
} else {
    console.log("Você não foi aprovado !")
}

