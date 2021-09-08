/*

    CLASSES

const person = {
    name: "Rychard",
    age: 16,
    talk: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}

*/

class Person {
    constructor(name, age) {
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }



    talk() {
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
    }
}

const newPerson = new Person("Rychard", 17)
const newPerson1 = new Person("Julia", 15)
const newPerson2 = new Person("Enzo", 10)


newPerson.talk()
newPerson1.talk()
newPerson2.talk()