const express = require ('express')

const app = express()

app.use (express.json())

const porta = 3000

app.listen (3000, ()=>{

    console.log(`rodando na porta ${porta}`)
})