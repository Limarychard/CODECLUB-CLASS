/* 

    THIS 

    this em inglês significa => este, esta, isto... 

    No javascript, o this faz referência:

    Node   →    module.exports
    Web    →    window

    Escopo: 
        Global → Quando começamos a escrever nossa aplicação.
        No contexto global, o this faz referência ao objeto global,
        que é o objeto window no navegador da internet ou ao objeto no Node.js 

    Local → Por exemplo, dentro de uma função! 

*/

const name = "Rychard" // Escopo global 

function myName() {
    const myName = "Rychard" // Escopo local 
}

global.console.log("Olá")

const person = {
    name:"Rychard",
    age: 17,
    talk: function(){
        console.log(this.age)
    }
}

function myFunction(){
    this.console.log("Agora eu sou global")
}