const express = require('express')

const port = 3000
const app = express()


/*
        - Query params => meusite.com/users?nome=rychardlima&age=28 // FILTROS 
*/

app.get('/users', (request, response) => {
    /*const name = request.query.name 
    const age = request.query.age       OU .... */
    const { name, age } = request.query     // Destructuring assignment 


    return response.json( {name: name, age: age })  // QUANDO FOR IGUAL VOCE PODE FAZER DESSE JEITO  return response.json( { name, age })
})

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})