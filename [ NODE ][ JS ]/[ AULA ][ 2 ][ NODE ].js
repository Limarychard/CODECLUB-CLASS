const express = require('express')

const port = 3000
const app = express()

/*
        - Query params => users/2           // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
*/

app.get('/users/:id', (request, response) => {

    const { id } = request.params1
    console.log(request)

    return response.json({id})
})

app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})