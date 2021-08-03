const express = require('express')

const port = 3000
const app = express()
app.use(express.json())     // ESSA CONFIGURAÇÃO DEVE VIR SEMPRE DEPOIS DAS ROTAS

/*
        - Request Body => { "name":"Rychard", "age": }
*/

app.get('/users', (request, response) => {

    const { name, age } = request.body

    return response.json({ name, age })
})

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})